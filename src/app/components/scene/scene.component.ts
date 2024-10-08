import { AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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

  private camera!: THREE.PerspectiveCamera;
  private loader! : GLTFLoader;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private model! : THREE.Group;
  private controls! : OrbitControls;
    
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  constructor() {}


  
  ngAfterViewInit(): void {
    this.createScene();
    this.startRendering();
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);

    this.camera = new THREE.PerspectiveCamera(45, this.getAspectRatio(), 1, 1000);
    this.camera.position.z = 50;
    this.camera.position.x = -80;
    this.camera.position.y = 20;

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.loader = new GLTFLoader();
    this.loader.load('assets/nikon.glb', (gltf) => { 
      this.model = gltf.scene;
      this.model.scale.set(1.5, 1.5, 1.5);
      this.model.position.set(0, 0, 0);
      this.scene.add(this.model)
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 50);
    ambientLight.position.set(10, 10, 10);
    this.scene.add(ambientLight);
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private animateCube() {
    this.model.rotation.y += 0.01;
  }

  private startRendering() {
    this.renderer = new THREE.WebGLRenderer( { canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: SceneComponent = this;

    let controls : OrbitControls = this.controls;
    (function render() {
      requestAnimationFrame(render);
      controls.update();
      //component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }
}
