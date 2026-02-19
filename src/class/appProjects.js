import { Project } from "./Project.js";
import { loadHeader } from "../pages/header.js";
import { loadSidebar } from "../pages/sidebar.js";
import { loadMainBody } from "../pages/mainBody.js";
import { loadNewProjectModal } from "../modals/newProject.js";
import { loadNewTaskModal } from "../modals/newTask.js";

export class appProjects {

    constructor(data) {
        if (data) {
            Object.assign(this, data);
        } else {
            this.projectList = [new Project("Default")];
            this.selectedProject = this.projectList[0];
        }
    }

    addProject(project) {
        this.projectList.push(project);
    }

    selectProject(i) {
        this.selectedProject = this.projectList[i]
    }

    loadPage() {
        loadHeader();
        loadSidebar(this);
        loadMainBody(this);
        loadNewProjectModal(this);
        loadNewTaskModal(this);

        localStorage.setItem("todoApplication", JSON.stringify(this));
    }
}