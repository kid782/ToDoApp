import domCreator from "./createDomEl";
import Project from "./project";

class Projects {
    constructor(projects) {
        this.main = document.querySelector('.main');
        this.projects = projects;
        this.createProjectsDom();
    }
    renderProjects() {
        this.projects.forEach(proj => {
            new Project(proj, );
        });
    }
    createProjectsDom() {
        const projectsDom =  domCreator.createElement({
            tagName: 'div',
            clsName: ['projects', 'js-projects']
        })
        this.main.appendChild(projectsDom);
        this.renderProjects();
        projectsDom.appendChild(this.createAddProjectButton());
    }
    createAddProjectButton() {
        const button = domCreator.createElement({
            tagName: 'button',
            clsName: 'project__add',
            attribute: 'type',
            attributeVal: 'button',
            content: 'add project'
        })
        const buttonContainer = domCreator.createElement({
            tagName: 'div',
            clsName: 'project__btn-wrap',
            child: button
        })
        return buttonContainer;
    }
}

export default Projects;