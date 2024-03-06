// main.js
import { SceneManager } from './SceneManager.js';
import { SceneLoader } from './SceneLoader.js';
import { CameraController } from './CameraController.js';
import * as THREE from '/projet_demo_js/node_modules/three/build/three.module';


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const cameraController = new CameraController(renderer);
const sceneManager = new SceneManager(cameraController.camera);

const sceneLoader = new SceneLoader(sceneManager.getScene(), new THREE.LoadingManager());


// Utilisez sceneLoader pour charger vos modèles et textures
// Exemple : sceneLoader.loadModel('assets/models/car/scene.gltf', function(gltf) { ... });

let bike, sun, car, bus, store;

// sceneLoader.loadModel('assets/models/car/scene.gltf', function (gltf) {
//     car = gltf.scene.children[0];
//     car.scale.set(0.005, 0.005, 0.005);
//     car.position.z = 5;
//     car.position.y = 0.1;
//     car.position.x = 5;
//     car.userData.draggable = true;
//     sceneManager.getScene().add(gltf.scene);
// });

// sceneLoader.loadModel('assets/models/bike/scene.gltf', function (gltf) {
//     bike = gltf.scene.children[0];
//     bike.scale.set(0.5, 0.5, 0.5);
//     bike.position.z = 5;
//     bike.position.y = 0.1;
//     bike.position.x = 0;
//     bike.userData.draggable = true;
//     sceneManager.getScene().add(gltf.scene);
// });

// sceneLoader.loadModel('assets/models/road/scene.gltf', function (gltf) {
//     const road = gltf.scene.children[0];
//     road.scale.set(5, 5, 5);
//     road.position.z = 5;
//     road.position.y = 0;
//     road.position.x = -3;
//     road.rotation.z = 3;
//     road.userData.draggable = true;
//     sceneManager.getScene().add(gltf.scene);
// });

// sceneLoader.loadModel('assets/models/bus/scene.gltf', function (gltf) {
//     bus = gltf.scene.children[0];
//     //bus.scale.set(5, 5, 5);
//     bus.position.z = 45;
//     // bus.position.y = 0;
//     bus.position.x = -30;
//     // bus.rotation.z = 0;
//     bus.userData.draggable = true;
//     sceneManager.getScene().add(gltf.scene);
// });

// sceneLoader.loadModel('assets/models/city_building/scene.gltf', function (gltf) {
//     const city = gltf.scene.children[0];
//     city.scale.set(40, 40, 40);
//     city.position.y = -0.1;
//     city.position.x = 20;
//     city.position.z = -100;
//     city.userData.draggable = true;
//     sceneManager.getScene().add(gltf.scene);
// });

function hideObjectByName(scene, name) {
    scene.traverse((child) => {
        if (child.name === name) {
            child.visible = false;
        }
    });
}

function logObjectNames(scene) {
    scene.traverse((child) => {
        console.log(child.name);
    });
}

sceneLoader.loadModel('assets/models/big_room/scene.gltf', function (gltf) {
    const room = gltf.scene.children[0];
    room.scale.set(0.1, 0.1, 0.1);
    // room.position.y = -0.1;
    room.position.x = -50;
    room.position.z = 40;

    console.log(gltf.scene);
    // gltf.parser.getDependencies( 'material' ).then( ( materials ) => {
    //     console.log( materials);
    // } );


    // gltf.scene.traverse((child) => {
    //     // Vérifie si l'objet possède une propriété "visible"
    //     if (child.visible !== undefined) {
    //         // Définit l'état "visible" de l'objet sur "false"
    //         child.visible = false;
    //     }
    // });

    room.userData.draggable = true;
    sceneManager.getScene().add(gltf.scene);
});

sceneLoader.loadModel('assets/models/cat/scene.gltf', function (gltf) {
    const cat = gltf.scene.children[0];
    //cat.scale.set(0.1, 0.1, 0.1);
    cat.position.y = 0.87;
    cat.position.x = 5;
    cat.position.z = 10;
    cat.rotation.z = -1.5;
    cat.userData.draggable = true;
    sceneManager.getScene().add(gltf.scene);
});

sceneLoader.loadModel('assets/models/phone/scene.gltf', function (gltf) {
    const phone = gltf.scene.children[0];
    phone.scale.set(0.01, 0.01, 0.01);
    phone.position.y = 2;
    // phone.position.x = 5;
    phone.position.z = 15;
    // phone.rotation.z = -1.5;
    phone.userData.draggable = true;
    sceneManager.phone.position.x = phone.position.x-0.2;
    sceneManager.phone.position.z = phone.position.z;
    sceneManager.phone.position.y = phone.position.y;
    sceneManager.getScene().add(gltf.scene);
});



function animate() {
    requestAnimationFrame(animate);
    cameraController.update();
    sceneManager.update();
    renderer.render(sceneManager.getScene(), cameraController.getCamera());
    if(sceneManager.next_level_1){
        sceneLoader.updateQuestion(1);
    }
}

animate();
