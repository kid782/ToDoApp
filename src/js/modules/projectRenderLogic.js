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

export function handlePopUpClose(e) {
    console.log(e.target.closest('.project__modal'));
    const popupContainer = document.querySelector('.project__body');
    if(e.target.classList.contains('project__modal') || e.target.closest('.project__modal')) return;
    popupContainer.remove();    
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
