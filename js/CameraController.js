// CameraController.js
import * as THREE from '/node_modules/three/build/three.module.js';
import { MapControls } from '/node_modules/three/examples/jsm/controls/MapControls.js';
import { FirstPersonControls } from '/node_modules/three/examples/jsm/controls/FirstPersonControls.js';

export class CameraController {
    constructor(renderer) {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 5, 20);

        this.controls = new MapControls(this.camera, renderer.domElement);
        this.controls.enableDamping = true;

        // this.controls = new FirstPersonControls(this.camera, renderer.domElement);
        // this.controls.lookSpeed = 0.8;
        // this.controls.movementSpeed = 5;
        //this.controls.enabled = false;
    }

    update() {
        //this.controls.update();
    }

    getCamera() {
        return this.camera;
    }
}
