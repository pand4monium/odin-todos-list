import { loadHeader } from "./pages/header";
import { loadSidebar } from "./pages/sidebar";
import { loadMainBody } from "./pages/mainBody.js";

import { appProjects } from "./class/appProjects.js";
import { Project } from "./class/Project.js";

import "./styles/styles.css";
import "./styles/stylesHeader.css";
import "./styles/stylesSideBar.css";
import "./styles/stylesMain.css"

const application = new appProjects();

const a1 = new Project("En");
const a2 = new Project("nJ");
const a3 = new Project("cbnfdyhduiydfuyfi");
console.log("test");
application.addProject(a1);
application.addProject(a2);
application.addProject(a3);
console.log(application.projectList);

loadHeader();

loadSidebar(application);
loadMainBody(application)