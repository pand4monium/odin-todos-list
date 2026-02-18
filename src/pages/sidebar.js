export const loadSidebar = (appProject) => {
    let ulHTML = appProject.projectList.reduce((previousHTML, project, i) => {
        return previousHTML += `
            <li>
                <button id="project-${i}"> ${project.name} </button> 
            </li>
        `
    }, ``)

    document.getElementById("sidebar").innerHTML = `
    <div id="sidebar-header">
        <h2> Projects </h2>
        <button id="newProject">+</button>
    </div>
    <ul> ${ulHTML} </ul>
    `;

    document.getElementById("newProject").addEventListener("click", () => {
        document.getElementById("newProjectModal").style.display = "block";
    })

    appProject.projectList.forEach((project, index) => {
        document.getElementById(`project-${index}`).addEventListener("click", () => {
            appProject.selectProject(index);
            appProject.loadPage();
        })
    })
}