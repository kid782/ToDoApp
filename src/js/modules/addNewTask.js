import domCreator from "../createDomEl";
import { projects } from "..";
import Project from "./project";
import { handleAddTaskClick } from "./projectRenderLogic";
import { updateStorage } from "..";
import { faIcon } from "../reusableNodes";

class AddNewTask {
    constructor() {
        this.main = document.querySelector('.main');
        this.createNewTaskPopUp();
    }
    static createNewTaskButton() {
        const spanMove = domCreator.createElement({
            tagName: 'span',
            clsName: 'task__move'
        })
        const textMove = domCreator.createElement({
            tagName: 'span',
            clsName: 'task__text-move',
            content: 'Add new task'
        })
        const noteIcon = faIcon(["fa-solid", "fa-plus"]);
        const addNewTaskButton = domCreator.createElement({
            tagName: 'button',
            clsName: 'task__add-btn',
            attribute: 'type',
            attributeVal: 'button',
            eventName: 'click',
            eventCallback: handleAddTaskClick,
            child: [noteIcon, spanMove, textMove]
        })
        return addNewTaskButton;
    }
    createNewTaskPopUp() {
            const modalTitle = domCreator.createElement({tagName:'label', content:'Enter the new task name', clsName:'project__label'
        });
            const taskNameInput = domCreator.createElement({tagName:'input', attribute:'type', attributeVal:'text', clsName:['project__add-input', 'task__title-input']});
            const descLabel = domCreator.createElement({tagName:'label', content:'Enter the task description', clsName:'project__label'});
            const taskDescInput = domCreator.createElement({tagName:'textarea',clsName:['project__add-input', 'task__desc']});
            const prioLabel = domCreator.createElement({tagName:'label', content:'Enter the task priority', clsName:'project__label'});
            const taskPrioInput = domCreator.createElement({tagName:'select', attribute:'type', attributeVal:'text', clsName:['project__add-input', 'task__prio']});
            taskPrioInput.options.add(new Option('Low', 'Low'));
            taskPrioInput.options.add(new Option('Medium', 'Medium'));
            taskPrioInput.options.add(new Option('High', 'High'));
            const taskConfirmationButton = domCreator.createElement({
                tagName:'button', 
                attribute:'type',
                attributeVal:'button', 
                clsName:['js-new-proj', 'project__btn', 'btn'], 
                content:'Confirm', 
                event:'click',eventCallback:this.handleModalConfirmButton
            });
            const popUpContainer = domCreator.createElement({tagName:'div', clsName:'project__modal',child:[modalTitle, taskNameInput,descLabel, taskDescInput, prioLabel, taskPrioInput, taskConfirmationButton]});
            const popUpBody = domCreator.createElement({tagName:'div', clsName:'project__body', child:popUpContainer});
            this.main.appendChild(popUpBody);
            taskConfirmationButton.onclick = this.handleModalConfirmButton;
    }
    handleModalConfirmButton(e) {
        const popUpBody = document.querySelector('.project__body');
        const inputTitle = document.querySelector('.task__title-input');
        const inputDesc = document.querySelector('.task__desc');
        const inputPrio = document.querySelector('.task__prio');
        const validateTaskInput = (element) => {
            if(element.value) {
                return true;
            } else {
                return false;
            }
        }
        const renderValidationMessage = () => {
            if(document.querySelector('.project__val-msg')) return false;
            const popUpModal = document.querySelector('.project__modal');
            const valMsg = domCreator.createElement({tagName:'div', clsName: 'project__val-msg', content: 'Please enter the new projects name'})
            popUpModal.appendChild(valMsg);
        }
        const reRenderTasks = () => {
            const activeProj = document.querySelector('.project__item.active');
            const activeProjID = activeProj.dataset.project;
            const activeProjIndex = projects.findIndex((item) => {
                return item.id == activeProjID;
            })
            const newTask = {
                title : inputTitle.value,
                description : inputDesc.value,
                priority: inputPrio.value
            }
            if(projects[activeProjIndex].tasks) {
                projects[activeProjIndex].tasks.push(newTask);
                updateStorage();
                Project.reRenderTasks(activeProjID);
            } else {
                projects[activeProjIndex].tasks = [];
                projects[activeProjIndex].tasks.push(newTask);
                updateStorage();
                Project.reRenderTasks(activeProjID);
            }
        }

        if(validateTaskInput(inputTitle) && validateTaskInput(inputDesc) && validateTaskInput(inputPrio)) {
            popUpBody.remove();
            reRenderTasks();
        } else {
            renderValidationMessage();
        }
    }
}

export default AddNewTask;