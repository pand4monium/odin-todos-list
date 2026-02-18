export const loadMainBody = (appProject) => {
    document.getElementById("projectHeader").innerHTML = `
        <div id="projectName"> ${appProject.selectedProject.name} </div>
        <div id="projectButtons">
            <button id="newTask"> + </button>
            <button id="renameProject"> RENAME </button>
            <button id="deleteProject"> DELETE </button>
        </div>
    `
}