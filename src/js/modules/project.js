import domCreator from './createDomEl';
import TaskList from './taskList';
import handleProjectBtnClick from './projectRenderLogic';
import { projects } from '../index';

class Project {
    constructor({id, name, tasks}) {
        this.name = name;
        this.tasks = tasks;
        this.id = id;
        this.default = id === 'odin';
        this.parent = document.querySelector('.js-projects');
        this.renderProject();
        if(this.default) {
            this.renderTaskListForProject();
        }
    }
    renderProject() {
        this.parent.appendChild(this.createDomForProject());
    }
    renderTaskListForProject() {    
        new TaskList(this.tasks);
    }
    createDomForProject() {
        const classes = this.default ? ['project__item', 'active']:'project__item'
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
    createAddProjectButton() {
        const button = domCreator.createElement({
            tagName: 'button',
            attribute: 'type',
            attributeVal: 'button',
            clsName: 'project__add-btn'
        })
        return button;
    }
    static clearCurrentTasks() {
        const tasks = document.querySelector('.js-todos');
        tasks.innerHTML = '';
    }
    static getTasksForProject(id) {
       const newActiveProj = projects.find((item) => item.id === id);
       return newActiveProj.tasks;
    }
    static reRenderTasks(id) {
        this.clearCurrentTasks();
        const newActiveTasks = this.getTasksForProject(id);
        new TaskList(newActiveTasks);
    }
}

export default Project;