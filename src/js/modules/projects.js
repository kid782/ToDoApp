import domCreator from "../createDomEl";
import Project from "./project";
import AddNewTask from "./addNewTask";
import { handleAddProjectClick } from './projectRenderLogic';
import { wrap, faIcon } from '../reusableNodes';

class Projects {
    constructor(projects) {
        this.main = document.querySelector('.main');
        this.projects = projects;
        this.createProjectsDom();
    }
    renderProjects() {
        this.projects.forEach(proj => {
            new Project(proj);
        });
    }
    createProjectsDom() {
        const removeIcon = faIcon(['fa-solid', 'fa-trash']);
        const removeButton = domCreator.createElement({
        tagName:'button',
            clsName:'project__remove',
            child: removeIcon,
            eventName: 'click',
            eventCallback: Project.removeProject
        })
        const tasksTitle = domCreator.createElement({
            tagName: 'h2',
            clsName: 'projects-title',
            content: 'Tasks'
        })
        let projectsTitle = domCreator.createElement({
            tagName: 'h2',
            clsName: 'projects-title',
            content: 'Projects'
        })
        let projectsDom =  domCreator.createElement({
            tagName: 'div',
            clsName: ['projects', 'js-projects']
        })
        let projectNav = domCreator.createElement({
            tagName: 'div',
            clsName: 'upper-main',
            child: [projectsDom, this.createAddProjectButton(), removeButton]
        })
        let taskListInnerContainer = domCreator.createElement({
            tagName: 'div',
            clsName: 'tasks'
        });
        let taskListContainer = domCreator.createElement({
            tagName: 'section',
            clsName: 'js-todos',
            child: [tasksTitle, taskListInnerContainer]
        })
        this.main.appendChild(projectsTitle);
        this.main.appendChild(projectNav);
        if(!this.checkIfElementExists('js-todos')) {
            this.main.appendChild(taskListContainer);
        } else {
            taskListContainer = document.querySelector('.js-todos');
        }
        this.renderProjects();
    }
    createAddProjectButton() {
        const plusIcon = faIcon(['fa-solid','fa-plus']);
        const button = domCreator.createElement({
            tagName: 'button',
            clsName: ['project__add', 'js-add-proj'],
            attribute: 'type',
            attributeVal: 'button',
            eventName: 'click',
            eventCallback: handleAddProjectClick,
            child: plusIcon
        })
        const buttonContainer = domCreator.createElement({
            tagName: 'div',
            clsName: 'project__btn-wrap',
            child: button
        })
        return buttonContainer;
    }
    checkIfElementExists(cls) {
        if(document.querySelector(`.${cls}`)) {
            return true;
        } else {
            return false;
        }
    }
    clearExistingProjects() {
        const projects = document.querySelector('.projects');
        projects.innerHTML = '';
    }
    static addNewProjectDom(projArr) {
        this.clearProjects(); 
        Project.setDefault(projArr[projArr.length - 1].id);  
        Project.clearCurrentTasks();
        projArr.forEach(proj => {
            new Project(proj);
        })    
    }
    static ReRenderProjectDom(projArr) {
        this.clearProjects(); 
        Project.setDefault(projArr[0].id);
        Project.clearCurrentTasks(); 
        projArr.forEach(proj => {
            new Project(proj);
        }) 
    }
    static clearProjects() {
        const projectItems = document.querySelectorAll('.project__item');
        projectItems.forEach(item => {
            item.remove();
        })
    }
}

export default Projects;