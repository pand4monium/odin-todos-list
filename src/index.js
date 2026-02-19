import { loadHeader } from "./pages/header";
import { loadSidebar } from "./pages/sidebar";
import { loadMainBody } from "./pages/mainBody.js";
import { loadNewProjectModal } from "./modals/newProject.js";

import { appProjects } from "./class/appProjects.js";
import { Project } from "./class/Project.js";
import { TodoItem } from "./class/todoItem.js";

import { format } from "date-fns";

import "./styles/styles.css";
import "./styles/stylesHeader.css";
import "./styles/stylesSideBar.css";
import "./styles/stylesMain.css";
import "./styles/stylesNewProject.css";
import "./styles/stylesNewTask.css";
import "./styles/stylesEditTask.css";

const savedData = localStorage.getItem("todoApplication");

let application;

if (savedData) {
    const parsed = JSON.parse(savedData);

    application = new appProjects();

    application.projectList = parsed.projectList.map(projectData => {
        const project = new Project(projectData.name);

        project.todoItems = projectData.todoItems.map(taskData => {
            return new TodoItem(
                taskData.title,
                taskData.description,
                new Date(taskData.dueDate),
                taskData.priority,
                taskData.status
            );
        });

        return project;
    });

    application.selectedProject = application.projectList.find(
        p => p.name === parsed.selectedProject?.name
    );

} else {
    application = new appProjects();
    application.selectedProject.addTask("Task1", "You can add a description", new Date(2025, 11, 1), 1);
    application.selectedProject.addTask("Task2", "Or you can leave it blank", new Date(2025, 12, 1), 2);
    application.selectedProject.addTask("Task3", "", new Date(2025, 12, 1), 3);
    application.loadPage();

}
application.loadPage();



