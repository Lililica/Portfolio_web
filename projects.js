function mapProjectsToHTML(containerId, projects) {
    const container = document.getElementById(containerId);
    container.innerHTML = projects
    .map(
        (project) => `
            <article class="project-card">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-meta">
                    ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
                </div>
                <div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
                ${project.link ? `<a class="button button-primary" href="${project.link}">Voir le projet</a>` : `<a class="button button-secondary">Non disponible</a>`}
            </article>
        `,
    )
    .join('');
}


let projects = [
    {
        title: 'Cells Center',
        image: 'data/CellCenter2.png',
        description: 'Développement d\'outils de recherches sur OpenGL en C++. Étude autour des triangles de Delaunay et recherche d\'optimisation d\'énergie CVT. Relié au laboratoire de Vision par Ordinateur et Graphique.',
        tags: ['C++', 'Recherche', 'OpenGL'],
        link : 'https://github.com/Lililica/CellsCenter',
    },
    {
        title: 'Ingénieur Logiciel C++ (UX & Interactions 3D)',
        image: 'data/DS.png',
        description: 'Implémenter un nouveau système de configuration de shortcut sur la 3DExperience. Intégration d’une UI complète, compréhension d’une codebase complexe, prise en compte des enjeux, organisation du projet.',
        tags: ['C++', 'JS', 'UI design', 'XML'],
        private : true,
    },
];

mapProjectsToHTML('projPro', projects);



projects = [
    {
        title: 'Symphony',
        image: 'data/Symphony.png',
        description: 'GameJam 2026: Créer un jeux vidéo en 48h sur le thème : "Emmeler',
        tags: ['C#', 'Unity', 'GameJam', 'Blender'],
        link : 'https://lililica.itch.io/symphony',
    }, 
    {
        title: 'It’s Time !',
        image: 'data/time.png',
        description: 'GameJam 2025 : Créer un jeux vidéo en 48h sur le thème : "Profondeur".',
        tags: ['C++', 'Raylib', 'GameJam'],
        link : 'https://github.com/Lililica/GameJame2024',
    },
    {
        title: 'Photographie',
        image: 'data/photos/photo1.jpg',
        description: 'Se poser la question de comment extraire de la beauté d’une image.',
        tags: ['Adobe Lightroom', 'Photo', 'Composition', 'Couleur'],
    },
];

    
mapProjectsToHTML('projPerso', projects);


projects = [
    {
        title: 'Raymarcher/Raytracer WebGL',
        image: 'data/Raymarcher.png',
        description: 'Ce projet explore deux approches différentes de rendu en temps réel: un raytracer et un raymarcher.',
        tags: ['Synthése d’image', 'C++', 'OpenGL', 'ImGui', 'WebGL', 'JS', 'Raytracer', 'Raymarcher'],
        link : 'https://lililica.github.io/ProjetPersoIMAC2026/index.html',
    },
    {
        title: 'Funcky Night Party - Projet pré-professionnel',
        image: 'data/funky.png',
        description: 'Lors d\'un projet pré-proessionnel autour d\'Unity, j\'ai pu participer à la création d`\'un jeu typé "party game" en équipe de 8 !',
        tags: ['Unity', 'C#', 'Blender', 'Organisation'],
        link : 'https://portfoliolucas.my.canva.site/prepro2026funky-night-party',
    },
    {
        title: 'Chess Game',
        image: 'data/chess2.png',
        description: 'Projet  : Créer un jeu d’échec en C++ avancé et en OpenGL + ImGui.',
        tags: ['Synthése d’image', 'C++', 'OpenGL', 'ImGui', 'Maths'],
        link : 'https://github.com/Lililica/EchecProj-2025',
    },
    {
        title: 'Machine Learning - Classification d\'images',
        image: 'projects/p2/data/cover.png',
        description: 'Ce projet vise à développer un modèle d’intelligence artificielle capable de reconnaître automatiquement le "type" de carte à partir d’une image.',
        tags: ['Python', 'PyTorch', 'Machine Learning', 'Data Science'],
        link : 'projects/p2/machineLearning.html',
    },
    {
        title: 'Equations en image',
        image: 'data/EqEnImage.png',
        description: 'Mettre en image/interpréter des équations scientifiques.',
        tags: ['Synthèse d’image', 'C++', 'InDesign', 'Interview', 'Maths'],
        link : 'projects/p1/equation.html',
    },
    {
        title: 'VelocImac',
        image: 'data/Velocimac.png',
        description: 'Suivre un modèle d’animation et modéliser/animer/réaliser une animation sur Blender',
        tags: ['Blender', '3D', 'Animation'],
        link : 'https://www.youtube.com/watch?v=v3OVuv5Ea4Y',
    },
    {
        title: 'Tower Defence',
        image: 'data/towerDef.png',
        description: '',
        tags: ['OPENGL', 'C++', 'Synthèse d’image', 'GLSL'],
        link : 'https://github.com/Lililica/TowerDefenceIMAC'
    },
    {
        title: 'Conic filtring',
        image: 'data/conicFilter.png',
        description: '',
        tags: ['Maths', 'C++', 'Recherche'],
        link : 'https://github.com/Lililica/Conic_filtring'
    },
    {
        title: 'Reset - IMAC 2 2024',
        image: 'data/reset.png',
        description: '',
        tags: ['Maths', 'C++', 'Recherche'],
        link : 'https://www.youtube.com/watch?v=vCh1vW_j3Gk'
    },
];

mapProjectsToHTML('projSco', projects);
