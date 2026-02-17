export const loadSidebar = (appProject) => {
    let ulHTML = appProject.projectList.reduce((previousHTML, project, i) => {
        return previousHTML += `
            <li>
                <button id="project-${i}"> ${project.name} </button> 
            </li>
        `
    }, ``)

    document.getElementById("sidebar").innerHTML = `
    <h2> Projects </h2>
    <ul> ${ulHTML} </ul>
    `;
}