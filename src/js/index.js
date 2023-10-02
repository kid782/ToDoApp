import '../scss/style.scss';
import Header from './modules/header.js';
import Footer from './modules/footer.js';
import Projects from './modules/projects';

export const projects = [
    {
        id: 'odin',
       name: 'Odin' ,
       tasks: [
        {   
            title: 'Example',
            description: 'Description example',
            dueDate: new Date(),
            priority: 'Medium',
            notes: [
                {
                    text: 'Note 1'
                }
            ]
        }
       ]
    },
    {
        id: 'lost-ark',
       name: 'Instalacija Lost Ark-a',
       tasks: [
        {   
            title: 'Example 2',
            description: 'Description example',
            dueDate: new Date(),
            priority: 'Medium',
            notes: [
                {
                    text: 'Note 1'
                }
            ]
        }
       ]
    }, 
    {
        id: 'sadjenje-baste',
        name: 'Sadjenje baste',
        tasks: [
            {   
                title: 'Veoma skalabilno',
                description: 'Description example',
                dueDate: new Date(),
                priority: 'Medium',
                notes: [
                    {
                        text: 'Note 1'
                    }
                ]
            },        {   
                title: 'Duvaj ga Alisa',
                description: 'Description example',
                dueDate: new Date(),
                priority: 'Medium',
                notes: [
                    {
                        text: 'Note 1'
                    }
                ]
            },
            {   
                title: 'Ovo sranje radi',
                description: 'Description example',
                dueDate: new Date(),
                priority: 'Medium',
                notes: [
                    {
                        text: 'Note 1'
                    }
                ]
            }
           ]
    }, 
    {
        id: 'zavrsavanje-fakulteta',
        name: 'Zavrsavanje fakulteta',
        tasks: [
            {   
                title: 'Example 4',
                description: 'Description example',
                dueDate: new Date(),
                priority: 'Medium',
                notes: [
                    {
                        text: 'Note 1'
                    }
                ]
            },
            {   
                title: 'Neki task',
                description: 'Description example',
                dueDate: new Date(),
                priority: 'Medium',
                notes: [
                    {
                        text: 'Note 1'
                    }
                ]
            },
            {   
                title: 'Jos neki random',
                description: 'Description example',
                dueDate: new Date(),
                priority: 'Medium',
                notes: [
                    {
                        text: 'Note 1'
                    }
                ]
            }
           ]
    },
    {
        id: 'morning',
        name: 'Morning'
    }
]

const headers = document.querySelectorAll('.header');
const footers = document.querySelectorAll('.footer');

headers.forEach(header => new Header(header));
footers.forEach(footer => new Footer(footer));

new Projects(projects);
