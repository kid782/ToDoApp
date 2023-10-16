import '../scss/style.scss';
import Header from './modules/header.js';
import Footer from './modules/footer.js';
import Projects from './modules/projects';

export let projectsInit = [
    {
       id: 4324,
       name: 'Example',
       tasks: [
        {   
            title: 'Example task',
            description: 'Task description',
            dueDate: new Date(),
            priority: 'Medium',
            notes: [
                {
                    text: 'Note 1'
                }
            ]
        }
       ]
    }
]

export let projects = localStorage.getItem('projects') === null ? projectsInit : JSON.parse(localStorage.getItem('projects'));

export const getProjects = () => {
   const item = localStorage.getItem('projects');
   return JSON.parse(item);
}
if(localStorage.getItem('projects') === null) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function updateStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
    projects = JSON.parse(localStorage.getItem('projects'));
}

const headers = document.querySelectorAll('.header');
const footers = document.querySelectorAll('.footer');

headers.forEach(header => new Header(header));
footers.forEach(footer => new Footer(footer));

new Projects(projects);
