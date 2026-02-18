import { TodoItem } from "./todoItem";

export class Project {

    constructor(name) {
        this.name = name;
        this.todoItems = [];
    }

    addTask(title, description, dueDate, priority) {
        this.todoItems.push(new TodoItem(title, description, dueDate, priority))
    }

    displayTask() {
        let displayHTML = this.todoItems.reduce((arr, item, i) => {
            return arr + `
                <div class="task-container" id="task-${i}">
                    <div class="task-details">
                        <div class="task-title">${item.title}</div>
                        <div class="task-dueDate">${item.displayDueDate()}</div>
                        <div class="task-description">${item.description}</div>
                    </div>
                    <button class="editTask" id="editTask-${i}">Edit</div>
                </div>
            `;
        }, ``)

        console.log(displayHTML);

        return displayHTML;
    }
}