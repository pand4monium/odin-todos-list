import { Project } from "../class/Project.js"
import { TodoItem } from "../class/todoItem.js";

export const loadNewTaskModal = (app) => {

    document.getElementById("newTaskModal").style.display = "block";

    document.getElementById("newTaskModal").innerHTML = `
        <div id="newTaskModal-container">    
            <div id="newTaskModal-header">
                <div> New Task </div>
                <button id="close-newTaskModal"> X </button>
            </div>
            <form id="newTaskForm">
            <table id="newTaskModal-inputs">
                <tr>
                    <td> Title: </td>
                    <td> <input id="newTaskModal-title"
                                required></input> </td>
                </tr>

                <tr>
                    <td> Description: </td>
                    <td> <input id="newTaskModal-description"></input> </td>
                </tr>

                <tr> 
                    <td> Due Date: </td>
                    <td> <input id="newTaskModal-dueDate"
                                type="date"
                                required></input> </td>
                </tr>

                <tr>
                    <td> Priority: </td>
                    <td> <input id="newTaskModal-priority"
                                type="number"
                                min="1"
                                max="5"
                                value="1"></input> </td>
                </tr>
            </table>
            <button id="newTaskModal-submit">Submit</button>
            </form>
        </div>
    `

    const titleInput = document.getElementById("newTaskModal-title");
    const descriptionInput = document.getElementById("newTaskModal-description");
    const dueDateInput = document.getElementById("newTaskModal-dueDate");
    const priorityInput = document.getElementById("newTaskModal-priority");
    
    document.getElementById("close-newTaskModal").addEventListener("click", () => {
        titleInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";
        priorityInput.value = "1";
        document.getElementById("newTaskModal").style.display = "none";
    })

    document.getElementById("newTaskForm").addEventListener("submit", (e) => {
        e.preventDefault();
         console.log(dueDateInput.value);
        const match = dueDateInput.value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        console.log(match);
        const formattedDueDateInput = new Date(Number(match[1]), Number(match[2])-1, Number(match[3]));
        app.selectedProject.addTask(titleInput.value,
                                                 descriptionInput.value,
                                                 formattedDueDateInput,
                                                 priorityInput.value
        )

        titleInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";
        priorityInput.value = "1";
        app.loadPage();
        document.getElementById("newTaskModal").style.display = "none";
    })

}   