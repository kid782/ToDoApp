import domCreator from './createDomEl';

class Task {
    constructor({title, description, dueDate, priority, notes}) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checked = false;
    }
    createTask() {
        const titleEl = domCreator.createElement({tagName: 'h2', content: this.title});
        const descEl = domCreator.createElement({tagName: 'p', content: this.description});
        const priorityEl = domCreator.createElement({tagName: 'p', clsName:'task__priority', content: this.priority});
        const nodeItem = domCreator.createElement(
            {
                tagName: 'div', 
                clsName: 'task__item',
                child: [
                    titleEl,
                    descEl,
                    priorityEl
                ]
            });
        return nodeItem;
    }
}

export default Task;