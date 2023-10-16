import Project from "./project";
import addNewProject from "./addNewProject";
import AddNewTask from "./addNewTask";

export function handleProjectBtnClick(e) {
    const projectsContainer = document.querySelector('.js-projects');
        handleActiveProj(e.target);
}   
export function handleAddProjectClick() {
    new addNewProject();
}

export function handleAddTaskClick() {
    new AddNewTask();
}


const handleActiveProj = (current) => {
    manageActiveButtonStyle(current);
    Project.reRenderTasks(current.dataset.project);
}

const manageActiveButtonStyle = (element) => {
    const allProjButtons = document.querySelectorAll('.project__item');
    allProjButtons.forEach(el => {
        el.classList.remove('active');
    })
    element.classList.add('active');
}
