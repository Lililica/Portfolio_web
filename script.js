const projects = [
    {
        title: 'Creative Dashboard',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',
        description: 'A polished analytics interface with a strong visual hierarchy and reusable card system.',
        tags: ['UI design', 'Frontend'],
    },
    {
        title: 'Brand Landing Page',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        description: 'A responsive landing page template built to highlight messaging, testimonials, and conversion points.',
        tags: ['Marketing site', 'Responsive'],
    },
    {
        title: 'Portfolio System',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
        description: 'A modular portfolio structure that can be updated quickly for new work, bios, and contact links.',
        tags: ['Template', 'GitHub Pages'],
        link: 'projects/project1.html',
    },
];

const projectsContainer = document.getElementById('projectsContainer');

projectsContainer.innerHTML = projects
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

    
