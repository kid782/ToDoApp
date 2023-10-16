import domCreator from '../createDomEl';
import Task from './task';  
import AddNewTask from './addNewTask';

class TaskList {
    constructor(tasks) {
        this.parent = document.querySelector('.tasks');
        this.tasks = tasks;
        this.createTaskList();
    }

    createTaskList() {
        if(!this.tasks) return;
        const taskItems = this.tasks.map((taskItem) => {
           const item = new Task(taskItem);
           return item.createTask();
        })
        taskItems.push(AddNewTask.createNewTaskButton());
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