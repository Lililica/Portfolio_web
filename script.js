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
                ${project.link ? `<a class="button button-primary" href="${project.link}">View Project</a>` : `<a class="button button-secondary">Not Available</a>`}
            </article>
        `,
    )
    .join('');
}


let projects = [
    {
        title: 'Machine Learning - Classification d\'images',
        image: 'projects/p2/data/cover.png',
        description: 'Ce projet vise à développer un modèle d’intelligence artificielle capable de reconnaître automatiquement le "type" de carte à partir d’une image.',
        tags: ['Python', 'PyTorch', 'Machine Learning', 'Data Science'],
        link : 'projects/p2/machineLearning.html',
    },
    {
        title: 'Ingénieur Logiciel C++ (UX & Interactions 3D)',
        image: 'data/DS.png',
        description: 'Implémenter un nouveau système de configuration de shortcut sur la 3DExperience. Intégration d’une UI complète, compréhension d’une codebase complexe, prise en compte des enjeux, organisation du projet.',
        tags: ['C++', 'JS', 'UI design', 'XML'],
        private : true,
    },
    {
        title: 'It’s Time !',
        image: 'data/time.png',
        description: 'GameJam 2025 : Créer un jeux vidéo en 48h sur le thème : "Profondeur".',
        tags: ['C++', 'Raylib', 'GameJam'],
        // link : 'https://github.com/Lililica/GameJame2024',
    },
    {
        title: 'Raymarcher/Raytracer WebGL',
        image: 'data/Raymarcher.png',
        description: 'Ce projet explore deux approches différentes de rendu en temps réel: un raytracer et un raymarcher.',
        tags: ['Synthése d’image', 'C++', 'OpenGL', 'ImGui', 'WebGL', 'JS', 'Raytracer', 'Raymarcher'],
        link : 'https://lililica.github.io/ProjetPersoIMAC2026/index.html',
    },
    {
        title: 'Cells Center',
        image: 'data/CellCenter2.png',
        description: 'Développement d\'outils de recherches sur OpenGL en C++. Étude autour des triangles de Delaunay et recherche d\'optimisation d\'énergie CVT. Relié au laboratoire de Vision par Ordinateur et Graphique.',
        tags: ['C++', 'Recherche', 'OpenGL'],
        link : 'https://github.com/Lililica/CellsCenter',
    },

    {
        title: 'Chess Game',
        image: 'data/chess2.png',
        description: 'Projet  : Créer un jeu d’échec en C++ avancé et en OpenGL + ImGui. Apprentissage de la pipeline de rendu.',
        tags: ['Synthése d’image', 'C++', 'OpenGL', 'ImGui', 'Maths'],
        link : 'https://github.com/Lililica/EchecProj-2025',
    },


];

mapProjectsToHTML('proj', projects);


