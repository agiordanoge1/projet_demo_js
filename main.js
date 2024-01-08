// import * as THREE from '/node_modules/three/build/three.js';
import * as THREE from '/node_modules/three/build/three.module.js';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { Raycaster } from '/node_modules/three/src/core/Raycaster.js';
import { Vector2 } from '/node_modules/three/build/three.module.js';
import { Object3D } from '/node_modules/three/build/three.module.js';
import { FontLoader } from '/node_modules/three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from '/node_modules/three/examples/jsm/geometries/TextGeometry.js';
import { MeshNormalMaterial } from '/node_modules/three/build/three.module.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 1;

const scene2 = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var loader2 = new FontLoader();
 var textMesh;

function get_win() {


	loader2.load('/node_modules/three/examples/fonts/droid/droid_sans_regular.typeface.json', function (font) {

		var textGeometry = new TextGeometry('GG BG !', {
			size: 1,
			height: 0.2,
			font: font,
			// curveSegments: 12,
			// bevelEnabled: true,
			// bevelThickness: 10,
			// bevelSize: 8,
			// bevelOffset: 0,
			// bevelSegments: 5
		});
		var textMaterial = new MeshNormalMaterial();
		textMesh = new THREE.Mesh(textGeometry, textMaterial);
		textMesh.position.x = 2;
		textMesh.position.y = 1;
		textMesh.position.z = 5;
		textMesh.size = 1;
		scene.add(textMesh);
		
		//animate();
	});
}

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



const controls = new OrbitControls(camera, renderer.domElement);

let loader_car = new GLTFLoader();
loader_car.load('object/car/scene.gltf', function (gltf) {
	const car = gltf.scene.children[0];
	car.scale.set(0.005, 0.005, 0.005);
	car.position.z = 5;
	car.position.y = 0.1;
	car.userData.draggable = true;
	scene.add(gltf.scene);
	animate();
});

let loader_bike = new GLTFLoader();
loader_bike.load('object/bike/scene.gltf', function (gltf) {
	const bike = gltf.scene.children[0];
	bike.scale.set(0.5, 0.5, 0.5);
	bike.position.z = 5;
	bike.position.y = 0.1;
	bike.position.x = 3;
	bike.userData.draggable = true;
	scene.add(gltf.scene);
	//animate();
});

let loader_road = new GLTFLoader();
loader_road.load('object/road/scene.gltf', function (gltf) {
	const road = gltf.scene.children[0];
	road.scale.set(5, 5, 5);
	road.position.z = 5;
	road.position.y = 0;
	road.position.x = -3;
	road.rotation.z = 3;
	road.userData.draggable = true;
	scene.add(gltf.scene);
	animate();
});

let loader_bus = new GLTFLoader();
loader_bus.load('object/bus/scene.gltf', function (gltf) {
	const bus = gltf.scene.children[0];
	//bus.scale.set(5, 5, 5);
	bus.position.z = 5;
	// bus.position.y = 0;
	// bus.position.x = 2;
	// bus.rotation.z = 0;
	bus.userData.draggable = true;
	scene.add(gltf.scene);
	//animate();
});




function getCloud() {
	const cloud_group = new THREE.Group();
	const cloud_1_group = new THREE.Group();
	const cloud_2_group = new THREE.Group();


	const cloud_1_g = new THREE.CapsuleGeometry(1, 1, 10, 20);
	const cloud_1_m = new THREE.MeshBasicMaterial({ color: 0xFAFAFA }); //cloud
	const cloud_1 = new THREE.Mesh(cloud_1_g, cloud_1_m);
	cloud_1.position.y = 5;
	cloud_1.rotation.z = 1.55;

	const cloud_2_g = new THREE.CapsuleGeometry(1, 1, 10, 20);
	const cloud_2_m = new THREE.MeshBasicMaterial({ color: 0xFAFAFA }); //cloud
	const cloud_2 = new THREE.Mesh(cloud_2_g, cloud_2_m);
	cloud_2.position.y = 5;
	cloud_2.position.x = 2;
	cloud_2.rotation.z = 1.55;

	const cloud_3_g = new THREE.CapsuleGeometry(1, 1, 10, 20);
	const cloud_3_m = new THREE.MeshBasicMaterial({ color: 0xFAFAFA }); //cloud
	const cloud_3 = new THREE.Mesh(cloud_3_g, cloud_3_m);
	cloud_3.position.y = 5;
	cloud_3.position.x = 4;
	cloud_3.rotation.z = 1.55;

	const cloud_4_g = new THREE.CapsuleGeometry(1, 1, 10, 20);
	const cloud_4_m = new THREE.MeshBasicMaterial({ color: 0xFAFAFA }); //cloud
	const cloud_4 = new THREE.Mesh(cloud_4_g, cloud_4_m);
	cloud_4.position.y = 7;
	cloud_4.position.x = 7;
	cloud_4.rotation.z = 1.55;

	const cloud_5_g = new THREE.CapsuleGeometry(1, 1, 10, 20);
	const cloud_5_m = new THREE.MeshBasicMaterial({ color: 0xFAFAFA }); //cloud
	const cloud_5 = new THREE.Mesh(cloud_5_g, cloud_5_m);
	cloud_5.position.y = 7;
	cloud_5.position.x = 9;
	cloud_5.rotation.z = 1.55;

	const cloud_6_g = new THREE.CapsuleGeometry(1, 1, 10, 20);
	const cloud_6_m = new THREE.MeshBasicMaterial({ color: 0xFAFAFA }); //cloud
	const cloud_6 = new THREE.Mesh(cloud_6_g, cloud_6_m);
	cloud_6.position.y = 7;
	cloud_6.position.x = 11;
	cloud_6.rotation.z = 1.55;

	const sun_g = new THREE.SphereGeometry(1, 32, 16);
	const sun__m = new THREE.MeshBasicMaterial({ color: 0xffff00 , side: THREE.DoubleSide}); // sun
	const sun = new THREE.Mesh(sun_g, sun__m); scene.add(sun);
	sun.position.y = 10;
	sun.position.x = -10;

	cloud_1_group.add(cloud_1);
	cloud_1_group.add(cloud_2);
	cloud_1_group.add(cloud_3);
	cloud_2_group.add(cloud_4);
	cloud_2_group.add(cloud_5);
	cloud_2_group.add(cloud_6);

	cloud_group.add(cloud_1_group);
	cloud_group.add(cloud_2_group);

	cloud_group.position.y = 5

	scene.add(cloud_group);
}



function getSky() {

	const sky_g = new THREE.SphereGeometry(100, 32, 16);
	const sky__m = new THREE.MeshBasicMaterial({ color: 0x93EDFE , side: THREE.BackSide}); // sky
	const sky = new THREE.Mesh(sky_g, sky__m); 
	scene.add(sky);
	sky.position.y = 7;
	sky.position.x = -5;
}

function getCube()
{
	const case_group = new THREE.Group();

	const case_1_g = new THREE.PlaneGeometry(2, 2);
	const case_1_m = new THREE.MeshBasicMaterial({ color: 0xFFC97A, side: THREE.DoubleSide });
	const case_1 = new THREE.Mesh(case_1_g, case_1_m);
	case_1.position.y = 5;
	case_1.position.z = 5;
	case_1.userData.draggable = true;
	case_1.userData.one_click = false;
	case_1.userData.name = 'response';

	const case_2_g = new THREE.PlaneGeometry(2, 2);
	const case_2_m = new THREE.MeshBasicMaterial({ color: 0xFFC97A, side: THREE.DoubleSide }); 
	const case_2 = new THREE.Mesh(case_2_g, case_2_m);
	case_2.position.x = 5;
	case_2.position.y = 5;
	case_2.position.z = 5;
	case_2.userData.draggable = true;
	case_2.userData.one_click = false;
	case_2.userData.name = 'not response';

	const case_3_g = new THREE.PlaneGeometry(2, 2);
	const case_3_m = new THREE.MeshBasicMaterial({ color: 0xFFC97A, side: THREE.DoubleSide }); 
	const case_3 = new THREE.Mesh(case_3_g, case_3_m);
	case_3.position.y = 5;
	case_3.position.z = 5;
	case_3.position.x = -10;
	case_3.userData.draggable = true;
	case_3.userData.one_click = false;
	case_3.userData.name = 'not response';

	const case_4_g = new THREE.PlaneGeometry(2, 2);
	const case_4_m = new THREE.MeshBasicMaterial({ color: 0xFFC97A, side: THREE.DoubleSide }); //grey plane
	const case_4 = new THREE.Mesh(case_4_g, case_4_m);
	case_4.position.y = 5;
	case_4.position.z = 5;
	case_4.position.x = -5;
	case_4.userData.draggable = true;
	case_4.userData.one_click = false;
	case_4.userData.name = 'not response';

	const case_response_g = new THREE.PlaneGeometry(2, 2);
	const case_response_m = new THREE.MeshBasicMaterial({ color: 0xf58c0c, side: THREE.DoubleSide }); //grey plane
	const case_response = new THREE.Mesh(case_response_g, case_response_m);
	case_response.position.x = 10;
	case_response.position.y = 2;
	case_response.position.z = 5;
	case_response.userData.draggable = true;
	case_response.userData.one_click = false;
	case_response.userData.name = 'yes';

	case_group.add(case_1);
	case_group.add(case_2);
	case_group.add(case_3);
	case_group.add(case_4);
	case_group.add(case_response);
	
	scene.add(case_group);
	
}



const raycaster = new Raycaster();
const clickMouse = new Vector2();
const moveMouse = new Vector2();
var draggable = new Object3D();
var array_click = [];

window.addEventListener('click', event => {


	clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	clickMouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

	raycaster.setFromCamera(clickMouse, camera);
	const found = raycaster.intersectObjects(scene.children);
	if (found.length > 0 && found[0].object.userData.draggable) {
		draggable = found[0].object;
		if (draggable.userData.one_click == false && draggable.userData.name == 'yes' && array_click[array_click.length - 1].userData.name == 'response' && array_click[array_click.length - 1].userData.one_click == true) {
			get_win();
			textMesh.position.x =-5;
			return;
		}
		else if (draggable.userData.one_click == true) {
			draggable.material.color.set(0XFFC97A);
			draggable.userData.one_click = false;
			console.log('dropping ');
			return;
		}
		array_click.push(draggable);
		draggable.material.color.set(0xf58c0c);
		draggable.userData.one_click = true;
		console.log('found draggable ');
	}

})




getLight();

getCloud();

getSky();

getCube();

// window.addEventListener('mousemove',onMouseMove);

// window.addEventListener('click',onClick);


camera.position.z = 20;

controls.update();


function animate() {
	requestAnimationFrame(animate);
	controls.update();



	renderer.render(scene, camera);
	// if (1)
	// {
	// 	renderer.render(scene2,camera);
	// }
}

animate();