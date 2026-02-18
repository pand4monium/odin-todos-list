import { Project } from "./Project.js";
import { loadHeader } from "../pages/header.js";
import { loadSidebar } from "../pages/sidebar.js";
import { loadMainBody } from "../pages/mainBody.js";
import { loadNewProjectModal } from "../modals/newProject.js";

export class appProjects {

    constructor() {
        this.projectList = [new Project("Default")];
        this.selectedProject = this.projectList[0]
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
    }
}