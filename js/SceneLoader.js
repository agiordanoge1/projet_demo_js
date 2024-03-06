// SceneLoader.js
import * as THREE from '/node_modules/three/build/three.module.js';
import { GLTFLoader } from '/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from '/node_modules/three/examples/jsm/loaders/FBXLoader.js';

export class SceneLoader {
    constructor(scene, manager) {
        this.scene = scene;
        this.manager = manager;

        this.manager.onLoad = () => {
            console.log('All resources loaded');
            // Autres actions à effectuer une fois que tout est chargé
            this.onAllResourcesLoaded();
        };
    }

    loadModel(url, onLoad) {
        const loader = new GLTFLoader(this.manager);
        loader.load(url, onLoad);
    }

    loadFBXModel(url, onLoad) {
        const loader = new FBXLoader(this.manager);
        loader.load(url, onLoad);
    }

    onAllResourcesLoaded() {
        // Votre logique pour afficher le bandeau
        document.getElementById('loading').style.display = 'none';
        this.updateQuestion(0);
    }

    updateQuestion(NumberQ = 0) {
        fetch('Question.csv')
            .then(response => response.text())
            .then(data => {
                let lines = data.split('\n');
                let question = lines[NumberQ].split(',')[0];
                document.getElementById('bandeau').innerText = question;
                document.getElementById('bandeau').style.display = 'flex';
            })
            .catch(error => console.error('Erreur lors du chargement du fichier:', error));
    }

    // Ajoutez d'autres méthodes pour charger d'autres types de ressources si nécessaire
}
