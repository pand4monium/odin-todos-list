import { loadEditTaskModal } from "../modals/editTask";

export const loadMainBody = (appProject) => {
    console.log(appProject.projectList.length);
    document.getElementById("projectHeader").innerHTML = `
        <div id="projectName"> ${appProject.selectedProject.name} </div>
        <div id="projectButtons">
            <button id="newTask"> + </button>
            ${appProject.projectList.length === 1 ? "" : `<button id="deleteProject"> DELETE </button>`}
        </div>
    `
    document.getElementById("TodoMenu").innerHTML = appProject.selectedProject.displayTask();

    document.getElementById("newTask").addEventListener("click", () => {
        document.getElementById("newTaskModal").style.display = "block";
    })

    appProject.selectedProject.todoItems.forEach((task, index) => {
        document.getElementById(`editTask-${index}`).addEventListener("click", () => {
            document.getElementById("editTaskModal").style.display = "block";
            loadEditTaskModal(appProject, index);
        })

        document.getElementById(`changeStatus-${index}`).addEventListener("click", () => {
            appProject.selectedProject.todoItems[index].status = appProject.selectedProject.todoItems[index].status === 0 ? 1 : 0;
            appProject.loadPage();
        })
    })

    if (appProject.projectList.length != 1) {
        document.getElementById("deleteProject").addEventListener("click", () => {
            const index = appProject.projectList.indexOf(appProject.selectedProject);
            if (index > -1) {
                appProject.projectList.splice(index, 1);
            }
            appProject.selectedProject = appProject.projectList[0];
            appProject.loadPage();
        })
    }
}
