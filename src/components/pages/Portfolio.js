import React from 'react';
import Project from '../Project';

const portfolioProjects = [
    {
        title: 'What do you have?', 
        github: 'https://github.com/somerica/What-da-ya-have/', 
        media: 'https://somerica.github.io/somerjackson--porfolio-2020/assets/project1.mp4',
        description: "An app for when you're hungry and on the go."
    },
    {
        title: 'Your Space', 
        github: 'https://somerica.github.io/YourSpace/', 
        deployed: 'https://your-pace.herokuapp.com/',
        description: 'Have a cool space ? Rent it for a couple of hours or a day.'
    },
    {
        title: 'Note Taker', 
        github: 'https://github.com/somerica/Note-taker', 
        deployed: 'https://note-taker-somer.herokuapp.com/notes', 
        description: 'An app for taking notesand saving or deleting them.'
    },
    {
        title: 'Employee Tracker', 
        github: 'https://github.com/somerica/employeeTracker', 
        media: 'assets/employeetrackervid.mp4',
        description: 'Used for adding and deleting employee information'
    },
    {
        title: 'Employee Directory', 
        github: 'https://github.com/somerica/employeeDirectory', 
        deployed: 'https://directory-2.herokuapp.com/',
        description: 'This app allows the user to sort and track employees.'
    },
    {
        title: 'Fitness Tracker', 
        github: 'https://github.com/somerica/fitness-tracker',
        description: 'Tracking fitness activities and goals'
    }
]

export default function Portfolio() {
    return (
        <div>
            {portfolioProjects.map((project, i) => {
                return <Project project={project} key={i}/>
            })}
        </div>
    )
}