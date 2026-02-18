export class TodoItem {

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = "";
        this.status = 0;
    }

    changeStatus() {
        if (this.status === 0) {
            this.status = 1;        
        } else {
            this.status = 0;
        }
    }
}