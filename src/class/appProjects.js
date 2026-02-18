import { Project } from "./Project.js";

export class appProjects {

    constructor() {
        console.log("hi");
        this.projectList = [new Project("Default")];
        this.selectedProject = this.projectList[0]
    }

    addProject(project) {
        this.projectList.push(project);
    }

    selectProject(i) {
        this.selectedProject = this.projectList[i]
    }
}