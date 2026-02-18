import { Project } from "../class/Project";

export const loadNewProjectModal = (app) => {

    document.getElementById("newProjectModal").innerHTML = `
        <div id="newProjectModal-container">
            <div id="newProjectModal-header">
                <div>New Project</div>
                <button id="close-newProjectModal">X</button>
            </div>
            <div id="newProjectModal-input">
                <div>
                    Name: <input id="newProjectModal-name"></input>
                </div>
                <button id="newProjectModal-confirm">Confirm</button>
            </div>
        </div>
    `
    
    const nameInput = document.getElementById("newProjectModal-name");

    document.getElementById("close-newProjectModal").addEventListener("click", () => {
        nameInput.value = "";
        document.getElementById("newProjectModal").style.display = "none";
    })

    document.getElementById("newProjectModal-confirm").addEventListener("click", () => {
        app.addProject(new Project(nameInput.value));
        nameInput.value = "";
        document.getElementById("newProjectModal").style.display = "none";
        app.loadPage();
    })
}