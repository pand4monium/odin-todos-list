export class appProjects {

    constructor() {
        console.log("hi");
        this.projectList = [];
    }

    addProject(project) {
        this.projectList.push(project);
    }
}