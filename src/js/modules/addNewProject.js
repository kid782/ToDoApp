import domCreator from "../createDomEl";
import { projects } from "..";
import { updateStorage } from "..";
import { handlePopUpClose } from "./projectRenderLogic";
import Projects from "./projects";

class addNewProject {
    constructor() {
        this.main = document.querySelector('.main');
        this.createPopUp();
    }
    createPopUp() {
        const modalTitle = domCreator.createElement({tagName:'label', content:'Enter the new project name', clsName:'project__label'
    });
        const projNameInput = domCreator.createElement({tagName:'input', attribute:'type', attributeVal:'text', clsName:'project__add-input'});
        const projectConfirmInput = domCreator.createElement({
            tagName:'button', 
            attribute:'type',
            attributeVal:'button', 
            clsName:['js-new-proj', 'btn'], 
            content:'Confirm'
        });
        const popUpContainer = domCreator.createElement({tagName:'div', clsName:'project__modal',child:[projNameInput,projectConfirmInput, modalTitle]});
        const popUpBody = domCreator.createElement({tagName:'div', clsName:'project__body', child:popUpContainer, eventName:'click', eventCallback:handlePopUpClose});
        this.main.appendChild(popUpBody);
        projectConfirmInput.onclick = this.handleModalConfirmButton;
    }
    handleModalConfirmButton(e) {
        const popUpBody = document.querySelector('.project__body');
        const popUpInput = document.querySelector('.project__add-input');
        const validateProjectInput = (element) => {
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
        const reRenderProjects = (val) => {
            const newProjectName = 
            {
                id: Math.random(),
                name: val,
                tasks: []
            }
            projects.push(newProjectName);
            updateStorage();
            Projects.addNewProjectDom(projects);
        }

        if(validateProjectInput(popUpInput)) {
            popUpBody.remove();
            reRenderProjects(popUpInput.value);
        } else {
            renderValidationMessage();
        }
    }
}

export default addNewProject;