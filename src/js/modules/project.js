import domCreator from '../createDomEl';
import TaskList from './taskList';
import { handleProjectBtnClick } from './projectRenderLogic';
import { projects, getProjects } from '../index';
import { updateStorage } from '../index';
import Projects from './projects';

class Project {
    static default = '4324';
    constructor({id, name, tasks}) {
        this.name = name;
        this.tasks = tasks;
        this.id = id;
        this.active = id == Project.default;
        this.parent = document.querySelector('.js-projects');
        this.renderProject();
        if(this.active) {
            this.renderTaskListForProject();
        }
    }
    static setDefault(value) {
        Project.default = value;
    }
    renderProject() {
        this.parent.appendChild(this.createDomForProject());
    }
    renderTaskListForProject() {    
        new TaskList(this.tasks);
    }
    createDomForProject() {
        const classes = this.active ? ['project__item', 'active']:'project__item'
        const projectProps = {
            tagName: 'button',
            clsName: classes,
            content: this.name,
            eventName: 'click',
            eventCallback:handleProjectBtnClick,
            attribute: 'data-project',
            attributeVal: this.id
        }
        const project = domCreator.createElement(projectProps);
        return project;
    };
    static clearCurrentTasks() {
        const tasks = document.querySelector('.js-todos .tasks');
        if(!tasks) return;
        tasks.innerHTML = '';
    }
    static getTasksForProject(id) { 
       const newActiveProj = projects.find((item) => item.id == id);
       return newActiveProj.tasks;
    }
    static reRenderTasks(id) {
        Project.clearCurrentTasks();
        const newActiveTasks = Project.getTasksForProject(id);
        new TaskList(newActiveTasks);
    }
    static getActiveProjectIndex(){
        const activeProj = document.querySelector('.project__item.active');
        const activeProjID = activeProj.dataset.project;
        const activeProjIndex = getProjects().findIndex((item) => {
            return item.id == activeProjID;
        })
        return activeProjIndex;
    }
    static removeProject() {
        const activeProjectId = Project.getActiveProjectId();
        const indexOfProjectToRemove = projects.findIndex((item) => {
            return item.id == activeProjectId;
        })
        projects.splice(indexOfProjectToRemove, 1);
        updateStorage();
        const addTaskBtn = document.querySelector('.task__add-btn');
        addTaskBtn.remove();
        Projects.ReRenderProjectDom(getProjects());
    }
    static getActiveProjectId() {
        const currentlyActiveProj = document.querySelector('.project__item.active');
        return currentlyActiveProj.dataset.project;
    }
} 

export default Project;