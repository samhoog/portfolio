import { AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

@Component({
  selector: 'scene-component',
  standalone: true,
  imports: [],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.css',
  // providers: [{provide: Window, useValue: window}]
})
export class SceneComponent implements AfterViewInit {

  @ViewChild('canvas') private canvasRef!: ElementRef;

  private atCamera = false;
  private end! : THREE.Vector3;
  private endLookAt!: THREE.Vector3;

  private camera!: THREE.PerspectiveCamera;
  private loader! : GLTFLoader;
  private raycaster = new THREE.Raycaster;
  private mouse = new THREE.Vector2;

  private images = ['assets/images/1.JPG', 
      'assets/images/2.JPG', 
      'assets/images/3.JPG', 
      'assets/images/4.JPG', 
      'assets/images/5.JPG', 
      'assets/images/6.JPG', 
      'assets/images/7.JPG', 
      'assets/images/8.JPG'
  ]

  private currentImage = 1;

  private plane! : THREE.Mesh;
  private material! : THREE.MeshBasicMaterial;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private model! : THREE.Group;
  private controls! : OrbitControls;
    
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  private imageLoader!: THREE.ImageLoader;

  constructor() {
    window.addEventListener('click', this.onMouseClick.bind(this), false);
  }

  private onMouseClick(event: MouseEvent) {
    // Calculate mouse position in normalized device coordinates
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    // Update the raycaster with the camera and mouse position
    this.raycaster.setFromCamera(this.mouse, this.camera);
  
    // Calculate objects intersecting the ray
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
  
    if (intersects.length > 0) {
      // Trigger an event or perform an action on the clicked object
      console.log('Clicked on:', intersects[0].object);
      this.handleClick(intersects[0].object);
    }
  }

  private handleClick(intersects : THREE.Object3D) {
    console.log(intersects.name);
    if (intersects.name == 'Button' || intersects.name == 'Object_5') {
      this.cycleImages();
    } else {
      this.spinCamera();
    };
  };

  private spinCamera() {
    if (this.atCamera == false) {
      this.end = new THREE.Vector3(540, 160, -10);
      this.endLookAt = new THREE.Vector3(0, 50, 0);
      this.atCamera = true;
    } else {
      this.end = new THREE.Vector3(-800, 200, 500);
      this.endLookAt = new THREE.Vector3(0, 0, 0);
      this.atCamera = false;
    }
    const start = this.camera.position.clone();
    const startTime = performance.now();

    const currentLookAt = new THREE.Vector3();
    this.camera.getWorldDirection(currentLookAt); // Get the forward direction
    currentLookAt.add(this.camera.position); // Calculate lookAt point

    // Animate the rotation over time (optional)
    const duration = 2000; // Duration in milliseconds
    const lookAtDuration = 100000;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const lookAtProgress = Math.min(elapsed / lookAtDuration, 1);
      
      this.camera.position.lerpVectors(start, this.end, progress);
      
      const newLookAt = new THREE.Vector3;
      newLookAt.copy(currentLookAt).lerpVectors(this.camera.getWorldDirection(new THREE.Vector3()).add(this.camera.position), this.endLookAt, lookAtProgress);
      this.camera.lookAt(newLookAt);
      
      this.renderer.render(this.scene, this.camera);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
        
    requestAnimationFrame(animate);
  }

  private cycleImages() {
    if (this.currentImage == this.images.length) {
      this.currentImage = 1;
    } else {
      this.currentImage++;
    }
    this.material.map = new THREE.TextureLoader().load( this.images[this.currentImage - 1], (texture) => {
      texture.minFilter = THREE.NearestMipMapLinearFilter; // For better quality
    });
  }

  
  ngAfterViewInit(): void {
    this.createScene();
    this.startRendering();
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);

    this.camera = new THREE.PerspectiveCamera(45, this.getAspectRatio(), 1, 1000);
    this.camera.position.z = 500;
    this.camera.position.x = -800;
    this.camera.position.y = 200;

    this.camera.lookAt(0, 0, 0);
    // this.controls = new OrbitControls( this.camera, this.canvas );

    this.loader = new GLTFLoader();
    this.loader.load('assets/models/nikon.glb', (gltf) => { 
      this.model = gltf.scene;
      this.model.scale.set(15, 15, 15);
      this.model.position.set(0, 0, 0);
      this.scene.add(this.model)
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 20);
    ambientLight.position.set(100, 100, 100);
    this.scene.add(ambientLight);

    const texture = new THREE.TextureLoader().load( this.images[this.currentImage - 1], (texture) => {
      texture.minFilter = THREE.NearestMipMapLinearFilter; // For better quality
    } );


    // and this is example code to get it to be on a plane
    const geometry11 = new THREE.PlaneGeometry( 180, 150 );
    this.material = new THREE.MeshBasicMaterial( { map: texture });
    this.plane = new THREE.Mesh( geometry11, this.material );
    this.plane.position.set(140, 90, 10);
    this.plane.rotateY(1.5);
    this.scene.add(this.plane);
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRendering() {
    this.renderer = new THREE.WebGLRenderer( { canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(800, 800);

    let component: SceneComponent = this;

    // let controls : OrbitControls = this.controls;
    (function render() {
      requestAnimationFrame(render);
      // controls.update();
      component.renderer.render(component.scene, component.camera);
    }());
  }
}
