import domCreator from '../createDomEl';
import Project from './project';
import { projects, getProjects } from '..';
import { updateStorage } from '..';

class Task {
    constructor({title, description, dueDate, priority, notes}) {
        this.main = document.querySelector('.main');
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checked = false;
    }
    static currentEditTask = null;
    get currentEditTask() {
        return Task.currentEditTask;
    }
    set currenItemText(item) {
        Task.currentEditTask = item;
    }
    createTask() {
        const titleEl = domCreator.createElement({tagName: 'h2', clsName:'task__title', content: this.title});
        const descEl = domCreator.createElement({tagName: 'p', clsName:'task__description', content: this.description});
        const priorityEl = domCreator.createElement({tagName: 'span', clsName:['task__priority', this.getPriorityClass()], content: this.priority});
        const editTaskBtn = domCreator.createElement({
            tagName: 'button', 
            attribute:'type',
            attributeVal:'button',
            clsName:'task__edit',
            content:'Edit',
            eventName: 'click',
            eventCallback: this.editTask
        });
        const deleteTaskBtn = domCreator.createElement({tagName: 'button', attribute:'type',attributeVal:'button',
        clsName:'task__delete', content:'Remove', eventName:'click', eventCallback:this.deleteTask});
        const btnContainer = domCreator.createElement({tagName:'div', clsName:'task__controls',child:[editTaskBtn, deleteTaskBtn]});
        const taskContentWrapper = domCreator.createElement({tagName: 'div', clsName: 'task__container', child: [
            titleEl,
            descEl,
            priorityEl
        ]})
        const nodeItem = domCreator.createElement(
            {
                tagName: 'div', 
                clsName: 'task__item',
                child: [taskContentWrapper, btnContainer]
                
            });
        return nodeItem;
    }
    getPriorityClass() {
        if(this.priority === 'Low') {
            return 'task__priority--low';
        } else if(this.priority === 'Medium') {
            return 'task__priority--medium';
        } else if (this.priority === 'High') {
            return 'task__priority--high';
        }
    }
    deleteTask(e) {
        const activeProjID = Project.getActiveProjectId();
        const currentProjectIndex = Project.getActiveProjectIndex();
        const currentItem = e.target.closest('.task__item');
        const currentTaskTitle = currentItem.querySelector('.task__title').textContent;
        const currentTaskDesc = currentItem.querySelector('.task__description').textContent;
        const currentProjectTasks = projects[currentProjectIndex].tasks
        const indexOfTaskToRemove = currentProjectTasks.findIndex((item) => {
            return item.title === currentTaskTitle && item.description === currentTaskDesc;
        })
        projects[currentProjectIndex].tasks.splice(indexOfTaskToRemove, 1);
        updateStorage();
        Project.reRenderTasks(activeProjID);
    }
    editTask(e) {
        const currentItem = e.target.closest('.task__item');
        const currenItemText = currentItem.querySelector('.task__title').textContent;
        const currentItemDesc = currentItem.querySelector('.task__description').textContent;
        const currentItemPrio = currentItem.querySelector('.task__priority').textContent;
        const task = {text: currenItemText, desc: currentItemDesc, prio: currentItemPrio};
        Task.currenItemText = task;
        Task.createEditTaskPopUp(currenItemText, currentItemDesc, currentItemPrio);
    }
    static createEditTaskPopUp(text, desc, prio) {
        const modalTitle = domCreator.createElement({tagName:'label', content:'Task name', clsName:'project__label'
    });
        const taskNameInput = domCreator.createElement({tagName:'input', attribute:'type', attributeVal:'text', clsName:['project__add-input', 'task__title-input']});
        taskNameInput.value = text;
        const descLabel = domCreator.createElement({tagName:'label', content:'Task description', clsName:'project__label'});
        const taskDescInput = domCreator.createElement({tagName:'textarea',clsName:['project__add-input', 'task__desc']});
        taskDescInput.value = desc;
        const prioLabel = domCreator.createElement({tagName:'label', content:'Task priority', clsName:'project__label'});
        const taskPrioInput = domCreator.createElement({tagName:'select', attribute:'type', attributeVal:'text', clsName:['project__add-input', 'task__prio']});
        taskPrioInput.options.add(new Option('Low', 'Low'));
        taskPrioInput.options.add(new Option('Medium', 'Medium'));
        taskPrioInput.options.add(new Option('High', 'High'));
        taskPrioInput.value = prio;
        const taskConfirmationButton = domCreator.createElement({
            tagName:'button', 
            attribute:'type',
            attributeVal:'button', 
            clsName:['js-new-proj', 'project__btn', 'btn'], 
            content:'Confirm', 
            eventName:'click',
            eventCallback: Task.handleEditConfirm
        });
        const popUpContainer = domCreator.createElement({tagName:'div', clsName:'project__modal',child:[modalTitle, taskNameInput,descLabel, taskDescInput, prioLabel, taskPrioInput, taskConfirmationButton]});
        const popUpBody = domCreator.createElement({tagName:'div', clsName:'project__body', child:popUpContainer});
        document.querySelector('.main').appendChild(popUpBody);
    }
    static handleEditConfirm(e) {
        const activeProjID = Project.getActiveProjectId();
        const newTitle = document.querySelector('.task__title-input').value;
        const newDesc = document.querySelector('.task__desc').value;
        const newPrio = document.querySelector('.task__prio').value;
        const currentProjectIndex = Project.getActiveProjectIndex();
        const currentProjectTasks = getProjects()[currentProjectIndex].tasks
        const popUpBody = document.querySelector('.project__body');
        const indexOfTaskToEdit = currentProjectTasks.findIndex((item) => {
            return item.title === Task.currenItemText.text;
        })
        const editedTask = {
            title: newTitle,
            description : newDesc,
            priority: newPrio
        }
        projects[currentProjectIndex].tasks.splice([indexOfTaskToEdit],1,editedTask);
        popUpBody.remove();
        updateStorage();
        Project.reRenderTasks(activeProjID);
    }
}

export default Task;