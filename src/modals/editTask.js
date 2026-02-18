export const loadEditTaskModal = (app, index) => {

    document.getElementById("editTaskModal").innerHTML = `
        <div id="editTaskModal-container">    
            <div id="editTaskModal-header">
                <div> Edit Task </div>
                <button id="close-editTaskModal"> X </button>
            </div>
            <form id="newTaskForm">
            <table id="editTaskModal-inputs">
                <tr>
                    <td> Title: </td>
                    <td> <input id="editTaskModal-title"
                                value="${app.selectedProject.todoItems[index].title}"
                                required></input> </td>
                </tr>

                  <tr>
                    <td> Description: </td>
                    <td> <input id="editTaskModal-description" value="${app.selectedProject.todoItems[index].description}"></input> </td>
                </tr>


                <tr> 
                    <td> Due Date: </td>
                    <td> <input id="editTaskModal-dueDate"
                                type="date"
                                value="${app.selectedProject.todoItems[index].displayDueDateInput}"
                                required></input> </td>
                </tr>

                <tr>
                    <td> Priority: </td>
                    <td> <input id="editTaskModal-priority"
                                type="number"
                                min="1"
                                max="5"
                                value="${app.selectedProject.todoItems[index].priority}"></input> </td>
                </tr>
            </table>
            <button id="editTaskModal-submit">Submit</button>
            </form>
        </div>
    `
    console.log(app.selectedProject.todoItems[index].displayDueDateInput);

    const titleInput = document.getElementById("editTaskModal-title");
    const descriptionInput = document.getElementById("editTaskModal-description");
    const dueDateInput = document.getElementById("editTaskModal-dueDate");
    const priorityInput = document.getElementById("editTaskModal-priority");
    
    document.getElementById("close-editTaskModal").addEventListener("click", () => {
        titleInput.value = "";
        descriptionInput.value = "";
        dueDateInput.value = "";
        priorityInput.value = "1";
        document.getElementById("editTaskModal").style.display = "none";
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
        document.getElementById("editTaskModal").style.display = "none";
    })

}   