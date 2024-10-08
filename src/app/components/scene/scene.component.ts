import { AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
  private geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
  private material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
  private cube = new THREE.Mesh( this.geometry, this.material ); 
    
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

    this.camera = new THREE.PerspectiveCamera(1, this.getAspectRatio(), 1, 1000);
    this.camera.position.z = 400;
    this.loader = new GLTFLoader();
    this.loader.load('assets/skibidi.glb', (gltf) => { 
      this.model = gltf.scene; 
      this.model.position.set(0, 1, 0);
      this.scene.add(this.model)
    });

    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.position.set(0, 1, 0);
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
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }
}
