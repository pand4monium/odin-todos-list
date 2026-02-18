import { loadHeader } from "./pages/header";
import { loadSidebar } from "./pages/sidebar";
import { loadMainBody } from "./pages/mainBody.js";
import { loadNewProjectModal } from "./modals/newProject.js";

import { appProjects } from "./class/appProjects.js";
import { Project } from "./class/Project.js";

import { format } from "date-fns";

import "./styles/styles.css";
import "./styles/stylesHeader.css";
import "./styles/stylesSideBar.css";
import "./styles/stylesMain.css";
import "./styles/stylesNewProject.css";
import "./styles/stylesNewTask.css";


const application = new appProjects();

const a1 = new Project("En");
const a2 = new Project("nJ");
const a3 = new Project("cbnfdyhduiydfuyfi");
application.addProject(a1);
application.addProject(a2);
application.addProject(a3);
application.loadPage();

application.selectProject(1);
application.loadPage();



application.selectedProject.addTask("John1", "Happy buuuuuuuu bucw cqiuvfgkjb ugc   ifj vfg weuigjkhd iguqbfvijb lfabjwojifgiqug  yqvfuhb yqbvcfuh cqodfhqk bhfb qybf oqnbfan oiuqhbf qnbf 8u8g ljqu8fgq iljbojhf gioqjhf nb  gqlfi qblfnk boiaufg qbnfl jbqoiufb q1l1nbpuglijafbv lqkj uqgfoijbqwflmmd  qlc ijh apfu", new Date(2025, 11, 1), 1);
application.selectedProject.addTask("John2", "Happy", new Date(2025, 12, 1), 2);
application.selectedProject.addTask("John3", "Happy", new Date(2025, 12, 1), 3);

application.selectProject(0);

application.loadPage();
application.selectProject(1);
application.loadPage();

