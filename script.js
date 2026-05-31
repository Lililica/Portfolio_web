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
                <a class="button button-primary" href="${project.link}">View Project</a>
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
    },
    {
        title: 'Ingénieur Logiciel C++ (UX & Interactions 3D)',
        image: 'data/DS.png',
        description: 'Implémenter un nouveau système de configuration de shortcut sur la 3DExperience. Intégration d’une UI complète, compréhension d’une codebase complexe, prise en compte des enjeux, organisation du projet.',
        tags: ['C++', 'JS', 'UI design', 'XML'],
    },
];

mapProjectsToHTML('projPro', projects);



projects = [
    {
        title: 'It’s Time !',
        image: 'data/time.png',
        description: 'GameJam : Créer un jeux vidéo en 48h.',
        tags: ['C++', 'Raylib', 'GameJam'],
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
        title: 'Chess Game',
        image: 'data/chess2.png',
        description: 'Projet  : Créer un jeu d’échec en C++ avancé et en OpenGL + ImGui.',
        tags: ['Synthése d’image', 'C++', 'OpenGL', 'ImGui', 'Maths'],
    },
    {
        title: 'Equations en image',
        image: 'data/EqEnImage.png',
        description: 'Mettre en image/interpréter des équations scientifiques.',
        tags: ['Synthèse d’image', 'C++', 'InDesign', 'Interview', 'Maths'],
    },
    {
        title: 'VelocImac',
        image: 'data/Velocimac.png',
        description: 'Suivre un modèle d’animation et modéliser/animer/réaliser une animation sur Blender',
        tags: ['Blender', '3D', 'Animation'],
    },
    {
        title: 'CineDATA',
        image: 'data/Cinedata.png',
        description: '',
        tags: ['Web', 'JS', 'UI', 'API'],
        link : 'https://github.com/ShadowsHood/web-imac-1-projet-api'
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
];

mapProjectsToHTML('projSco', projects);
