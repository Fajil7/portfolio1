document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('projectList');
    const projectForm = document.getElementById('projectForm');
    const toggleProjectsButton = document.getElementById('toggleProjects');

    // Example projects (you can add more dynamically)
    const projects = [{
            title: 'Food munch',
            description: 'This is a food munch responsive webpage. where user see the details of this resturent and also see food list and offers',
            link: ' https://fajilfoodmunch.ccbp.tech/'
        },
        // Add more projects here
    ];

    // Function to add a new project
    function addProject(title, description, link) {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project');
        projectItem.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${link}" target="_blank">Visit Project</a>
        `;
        projectList.appendChild(projectItem);
    }

    // Display existing projects
    projects.forEach(project => {
        addProject(project.title, project.description, project.link);
    });

    // Form submission event listener
    projectForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from the form
        const title = document.getElementById('projectTitle').value;
        const description = document.getElementById('projectDescription').value;
        const link = document.getElementById('projectLink').value;

        // Add the new project
        addProject(title, description, link);

        // Clear the form
        projectForm.reset();
    });

    // Toggle project visibility when the button is clicked
    toggleProjectsButton.addEventListener('click', function() {
        projectList.classList.toggle('hidden');
    });
});