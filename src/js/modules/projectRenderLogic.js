import Project from "./project";

export default function handleProjectBtnClick() {
    const projectsContainer = document.querySelector('.js-projects');
    projectsContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('project__item')) {
            handleActiveProj(e.target);
        }
    })
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