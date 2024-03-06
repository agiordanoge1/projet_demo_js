// SceneManager.js
import * as THREE from '/node_modules/three/build/three.module.js';

export class SceneManager {
    constructor(camera) {
        this.scene = new THREE.Scene();
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.one_click = false;
        this.next_level_1 = false;
        this.object_click;
        this.box;
        this.garbage_1;
        this.garbage_2;
        this.garbage_3;

        this.setupScene();
        this.setupMouseHandling(camera);
    }

    setupScene() {
        // Ajoutez ici la configuration initiale de votre scène, comme les lumières
        const hlight = new THREE.AmbientLight(0x404040, 30);
        this.scene.add(hlight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0);
        this.scene.add(directionalLight);

        this.getSky();
        this.getGarbage();
    }

    getScene() {
        return this.scene;
    }

    isCloseOnX(obj1, obj2, delta) {
        return Math.abs(obj1.position.x - obj2.position.x) <= delta;
    }

    update() {
        // Mettez à jour la logique de la scène ici si nécessaire
        if (this.isCloseOnX(this.box, this.garbage_1, 0.5) && !this.one_click) {
            console.log('youhou');
            this.box.position.y -= 0.1;
            if (this.box.position.y <= this.garbage_1.position.y) {
                this.box.visible = false;
                this.next_level_1 = true;
            }
        }
    }

    getSky() {

        const texture = new THREE.TextureLoader().load('assets/textures/Blue_sky_south_of_France.jpg');
        const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });

        const sky_g = new THREE.SphereGeometry(500, 32, 16);
        const sky__m = new THREE.MeshBasicMaterial({ color: 0x93EDFE, side: THREE.BackSide }); // sky
        const sky = new THREE.Mesh(sky_g, material);
        this.scene.add(sky);


        sky.position.y = 7;
        sky.position.x = -5;

        const grass_p_g = new THREE.PlaneGeometry(500, 500);
        const grass_p_m = new THREE.MeshBasicMaterial({ color: 0x1C3C04, side: THREE.DoubleSide });
        const grass_p = new THREE.Mesh(grass_p_g, grass_p_m);
        grass_p.frustumCulled = true;
        grass_p.position.z = 10;
        grass_p.position.y = -0.4;
        grass_p.rotation.x = 1.58;
        this.scene.add(grass_p);

        const texture_b = new THREE.TextureLoader().load('assets/textures/test_.png');
        const material_b = new THREE.MeshBasicMaterial({ map: texture_b });


        const box_g = new THREE.BoxGeometry(2, 2, 2);
        const box_m = new THREE.MeshBasicMaterial({ color: 0XCE1212, side: THREE.DoubleSide });
        this.box = new THREE.Mesh(box_g, box_m);
        this.box.userData.draggable = true;
        this.box.userData.one_click = false;
        this.box.userData.name = 'BOX';
        this.box.position.z = 0;
        this.box.position.y = 4.5;
        this.box.position.x = -3;
        //this.box.visible = false;
        this.scene.add(this.box);


        const phone_g = new THREE.BoxGeometry(3, 0.3, 1.8);
        const phone_m = new THREE.MeshBasicMaterial({ color: 0X000000, side: THREE.DoubleSide });
        this.phone = new THREE.Mesh(phone_g, phone_m);
        this.phone.userData.draggable = true;
        this.phone.userData.one_click = false;
        this.phone.userData.name = 'phone';
        this.scene.add(this.phone);
    }

    getGarbage() {
        const garbage_group = new THREE.Group();


        const garbage_1_g = new THREE.BoxGeometry(2, 2.5, 2);
        const garbage_1_m = new THREE.MeshBasicMaterial({ color: 0xF5F5F5 });
        this.garbage_1 = new THREE.Mesh(garbage_1_g, garbage_1_m);
        this.garbage_1.position.x = 10;
        //this.garbage_1.position.z = 33;
        this.garbage_1.position.y = -0.3;


        const edges = new THREE.EdgesGeometry(this.garbage_1.geometry);
        const contour = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x39872C }));
        contour.visible = true;
        this.garbage_1.add(contour);
        this.scene.add(this.garbage_1);
        this.garbage_1.position.y = 1.5;

        const garbage_1a_g = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const garbage_1a_m = new THREE.MeshBasicMaterial({ color: 0x39872C });//green
        const garbage_1a = new THREE.Mesh(garbage_1a_g, garbage_1a_m);
        this.scene.add(garbage_1a);
        garbage_1a.position.x = 10;
        garbage_1a.position.y = 2.1;
        //garbage_1a.position.z = 32.7;

        const garbage_2_g = new THREE.BoxGeometry(2, 2.5, 2);
        const garbage_2_m = new THREE.MeshBasicMaterial({ color: 0xF5F5F5 });
        this.garbage_2 = new THREE.Mesh(garbage_2_g, garbage_2_m);
        this.garbage_2.position.x = 5;
        this.garbage_2.position.z = 33;
        this.garbage_2.position.y = -0.3;


        const edges_2 = new THREE.EdgesGeometry(this.garbage_2.geometry);
        const contour_2 = new THREE.LineSegments(edges_2, new THREE.LineBasicMaterial({ color: 0xFF9300 }));
        contour_2.visible = true; // Initialement invisible
        this.garbage_2.add(contour_2);
        this.scene.add(this.garbage_2);
        this.garbage_2.position.y = 1.5;

        const garbage_2a_g = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const garbage_2a_m = new THREE.MeshBasicMaterial({ color: 0xFF9300 }); //orange
        const garbage_2a = new THREE.Mesh(garbage_2a_g, garbage_2a_m);
        this.scene.add(garbage_2a);
        garbage_2a.position.y = 2.1;
        garbage_2a.position.z = 32.7;
        garbage_2a.position.x = 5;


        const garbage_3_g = new THREE.BoxGeometry(2, 2.5, 2);
        const garbage_3_m = new THREE.MeshBasicMaterial({ color: 0xF5F5F5 });
        this.garbage_3 = new THREE.Mesh(garbage_3_g, garbage_3_m);
        this.garbage_3.position.x = 0;
        this.garbage_3.position.z = 33;
        this.garbage_3.position.y = -0.3;


        const edges_3 = new THREE.EdgesGeometry(this.garbage_3.geometry);
        const contour_3 = new THREE.LineSegments(edges_3, new THREE.LineBasicMaterial({ color: 0x00B6FF }));
        contour_2.visible = true; // Initialement invisible
        this.garbage_3.add(contour_3);
        this.scene.add(this.garbage_3);
        this.garbage_3.position.y = 1.5;

        const garbage_3a_g = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const garbage_3a_m = new THREE.MeshBasicMaterial({ color: 0x00B6FF }); //blue
        const garbage_3a = new THREE.Mesh(garbage_3a_g, garbage_3a_m);
        this.scene.add(garbage_3a);
        garbage_3a.position.y = 2.1;
        garbage_3a.position.z = 32.7;
        garbage_3a.position.x = 0;

    }

    setupMouseHandling(camera) {
        document.addEventListener('click', (event) => this.onDocumentMouseClick(event, camera), false);
        document.addEventListener('keydown', (event) => this.onDocumentArrowskey(event, camera), false);
        document.addEventListener('mousemove', (event) => this.onDocumentMouseMove(event, camera), false);

        // document.addEventListener('mousedown', (event) => this.onMouseDown(event, camera), false);
        // document.addEventListener('mouseup', (event) => this.onMouseUp(event, camera), false);
        // document.addEventListener('mousemove', (event) => this.onMouseMove(event, camera), false);
    }

    onMouseDown(event, camera) {
        event.preventDefault();

        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, camera);

        const intersects = this.raycaster.intersectObjects(this.scene.children, true);

        if (intersects.length > 0 && intersects[0].object.userData.draggable) {
            this.selectedObject = intersects[0].object;
            this.isDragging = true;
            // Stocke la position relative de l'intersection et du cube
            const intersection = intersects[0];
            const objectPos = intersection.object.position.clone();
            const intersectionPos = intersection.point.clone();
            this.offset = intersectionPos.sub(objectPos);
        }
    }

    onMouseMove(event, camera) {
        event.preventDefault();

        if (this.isDragging && this.selectedObject) {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            this.raycaster.setFromCamera(this.mouse, camera);

            const intersects = this.raycaster.intersectObjects(this.scene.children, true);

            if (intersects.length > 0) {
                const intersection = intersects.find(intersection => intersection.object.userData.draggable);
                if (intersection) {
                    const position = intersection.point.sub(this.offset);
                    this.selectedObject.position.copy(position);
                }
            }
        }
    }

    onMouseUp(event) {
        this.isDragging = false;
        this.selectedObject = null;
    }

    onDocumentMouseClick(event, camera) {
        event.preventDefault();

        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Mettre à jour le raycaster avec la position de la souris
        this.raycaster.setFromCamera(this.mouse, camera); // Assurez-vous que 'camera' est accessible

        // Calculer les objets qui intersectent le rayon lancé
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);

        if (intersects.length > 0 && intersects[0].object.userData.draggable && !this.one_click) {
            console.log('passe clic');
            this.object_click = intersects[0].object;
            this.one_click = true;
            //intersects.x = this.mouse.x;
            this.distanceToObject = this.object_click.position.clone().sub(camera.position).length();
        }
        else {
            this.one_click = false;
        }
    }

    onDocumentArrowskey(event, camera) {
        if (event.key == 'ArrowLeft') {
            camera.position.x -=0.5;
        }
        else if (event.key == 'ArrowRight') {
            console.log(event);
        }
        else if (event.key == 'ArrowUp') {
            console.log(event);
        }
        else if (event.key == 'ArrowDown') {
            console.log(event);
        }
    }

    onDocumentMouseMove(event, camera) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, camera);
        const intersects = this.raycaster.intersectObjects(this.scene.children, true);

        if (this.one_click) {
            //console.log('passe move');
            const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0);
            vector.unproject(camera);
            const dir = vector.sub(camera.position).normalize();
            const distance = this.distanceToObject;
            const pos = camera.position.clone().add(dir.multiplyScalar(distance));

            // Déplacer l'objet à la nouvelle position
            this.object_click.position.copy(pos);

        }

    }

    update_copy_coordiantes() {
        this.box.position.set(this.boxBody.position.x, this.boxBody.position.y, this.boxBody.position.z)
        this.box.quaternion.set(
            this.boxBody.quaternion.y,
            this.boxBody.quaternion.z,
            this.boxBody.quaternion.x,
            this.boxBody.quaternion.w
        )
    }

}
