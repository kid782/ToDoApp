import domCreator from './createDomEl';
import Task from './task';  

class TaskList {
    constructor(tasks) {
        this.parent = document.querySelector('.js-todos');
        this.tasks = tasks;
        this.createTaskList();
    }

    createTaskList() {
        if(!this.tasks) return;
        const taskItems = this.tasks.map((taskItem) => {
           const item = new Task(taskItem);
           return item.createTask();
        })
        const containerProps = {
            tagName: 'div',
            clsName: 'task__items',
            child: taskItems
        }
        const taskItemsContainer = domCreator.createElement(containerProps);
        this.parent.appendChild(taskItemsContainer);
    }
}

export default TaskList;