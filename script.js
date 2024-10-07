document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('projectTitle').value;
    const imageUrl = document.getElementById('projectImage').value;
    const description = document.getElementById('projectDescription').value;

    const projectContainer = document.getElementById('projectsContainer');

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    projectDiv.innerHTML = `
        <h2>${title}</h2>
        <img src="${imageUrl}" alt="${title}">
        <p>${description}</p>
    `;

    projectContainer.appendChild(projectDiv);

    // Réinitialiser le formulaire
    document.getElementById('projectForm').reset();
});
