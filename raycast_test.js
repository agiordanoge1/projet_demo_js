import * as THREE from '/node_modules/three/build/three.module.js';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { Raycaster } from '/node_modules/three/src/core/Raycaster.js';
import { Vector2 } from '/node_modules/three/build/three.module.js';
import { Object3D } from '/node_modules/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//Light
function getLight() {
	const hlight = new THREE.AmbientLight(0x404040, 30);
	scene.add(hlight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 15);
	directionalLight.position.set(0, 1, 0);
	directionalLight.castShadow = true;
	scene.add(directionalLight);
	const light = new THREE.PointLight(0xc4c4c4, 10);
	light.position.set(0, 300, 500);
	scene.add(light);
	const light2 = new THREE.PointLight(0xc4c4c4, 10);
	light2.position.set(500, 100, 0);
	scene.add(light2);
	const light3 = new THREE.PointLight(0xc4c4c4, 10);
	light3.position.set(0, 100, -500);
	scene.add(light3);
	const light4 = new THREE.PointLight(0xc4c4c4, 10);
	light4.position.set(-500, 300, 500);
	scene.add(light4);
}

getLight();

const controls = new OrbitControls(camera, renderer.domElement);

const plane_1_g = new THREE.PlaneGeometry(25, 10);
const plane_1_m = new THREE.MeshBasicMaterial({ color: 0x93EDFE, side: THREE.DoubleSide }); // blue plane
const plane_1 = new THREE.Mesh(plane_1_g, plane_1_m);
plane_1.position.y = 5;
plane_1.name = 'sky';

const plane_2_g = new THREE.PlaneGeometry(25, 10);
const plane_2_m = new THREE.MeshBasicMaterial({ color: 0xDCDCDC, side: THREE.DoubleSide }); //grey plane
const plane_2 = new THREE.Mesh(plane_2_g, plane_2_m);
plane_2.rotation.x = 1.6;
plane_2.position.y = 0;
plane_2.position.z = 5;
plane_1.name = 'floor';
plane_1.userData.ground = true;


const box_g = new THREE.BoxGeometry( 5, 5, 5);
const box_m = new THREE.MeshBasicMaterial({ color: 0XCE1212, side: THREE.DoubleSide }); 
const box = new THREE.Mesh(box_g, box_m);
box.userData.draggable = true;
box.userData.one_click = false;
box.userData.name = 'BOX';
box.position.z=4;
box.position.y=2.5;

const box2_g = new THREE.BoxGeometry( 3, 3, 3);
const box2_m = new THREE.MeshBasicMaterial({ color: 0XCE1212, side: THREE.DoubleSide }); 
const box2 = new THREE.Mesh(box2_g, box2_m);
box2.userData.draggable = true;
box2.userData.one_click = false;
box2.userData.name = 'BOX2';
box2.position.z=4;
box2.position.y=2.5;
box2.position.x=7;


scene.add(plane_1);
scene.add(plane_2);
scene.add(box);
scene.add(box2);

const raycaster = new Raycaster();
const clickMouse = new Vector2();
const moveMouse = new Vector2();
var draggable = new Object3D();

window.addEventListener('click', event =>{
    if(draggable.userData.one_click == true)
    {
        draggable.material.color.set(0XCE1212);
        draggable.userData.one_click = false;
        console.log('dropping ');
        return;
    }

    clickMouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	clickMouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera( clickMouse, camera );
    const found = raycaster.intersectObjects( scene.children );
    if(found.length > 0 && found[0].object.userData.draggable){
        draggable = found[0].object;
        draggable.material.color.set(0xff0000);
        draggable.userData.one_click = true;
        console.log('found draggable ');
    }

})



camera.position.z = 20;

controls.update();


function animate() {
	requestAnimationFrame(animate);
	controls.update();

	renderer.render(scene, camera);
}

animate();