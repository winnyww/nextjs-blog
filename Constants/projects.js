// import project demo images as follows.
import PROJECT_1 from '../styles/projects/Project_1.nosync.jpg';
import PROJECT_2 from '../styles/projects/Project_2.jpg';
import PROJECT_3 from '../styles/projects/Project_3.png';
import PROJECT_4 from '../styles/projects/Project_4.jpg';
import PROJECT_5 from '../styles/projects/Project_5.nosync.png';
import PROJECT_6 from '../styles/projects/Project_6.png';
import PROJECT_7 from '../styles/projects/Project_7.png';
import PROJECT_8 from '../styles/projects/Project_8.nosync.JPG';
import PROJECT_9 from '../styles/projects/test1.png';

// first 3 projects are visible on the homepage while all are visible on the work page.
export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Bondie',
        description: 'Reimagine how parents could interact with their child when they are away from them using different sensory experiences.',
        githubLink: '/',
        projectLink: '/',
        tech: ['IoT', 'Figma', 'Soft Robotics'],
        photo: [PROJECT_8],
        link: ['./Bondie']
    },
    {
        name: 'Interactive Data Portal',
        description: 'Front-end design and development for a flexible, real-time data visualization tool for historical research.',
        githubLink: '/',
        projectLink: '/',
        tech: ['React', 'Data Viz', 'UX Research'],
        photo: [PROJECT_5],
        link: ['./DataPortal']
    },
    // {
    //     name: 'Mirroring Loss', //project name
    //     description: 'An interactive artwork that serves as a meditative ritual to bid farewell to the people who lost their lives due to Covid-19.', //project description
    //     githubLink: '', //github repo link
    //     projectLink: '', //deployed project link
    //     tech: ['Motion Capture', 'three.js', 'Interactive Art'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    //     photo: [PROJECT_1],
    //     link: ['./MirroringLoss']
    // },
    // {
    //     name: 'Deplastify the Planet',
    //     description: 'Semester-long partnership with leading home appliance company for qualitative research on customer, market and materials.',
    //     githubLink: '/',
    //     projectLink: '/',
    //     tech: ['UX Research', 'Qualitative survey'],
    //     photo: [PROJECT_7],
    //     link: ['./DeplastifyThePlanet']
    // },
    // {
    //     name: 'Wear Your Smile',
    //     description: 'A wireless wearable project that connects sensory data with emotional expression to creates an alternative way to express kindness.',
    //     githubLink: '/',
    //     projectLink: '/',
    //     tech: ['Arduino BLE', 'Muscle Sensor', 'Soft Circuit'],
    //     photo: [PROJECT_3],
    //     link: ['./WearYourSmile']
    // },
    // {
    //     name: 'Thriving Green Power',
    //     description: 'A 3D printed data sculpture project demonstrating the economic and cultural globalization behind the exponential growth of fruit imports.',
    //     githubLink: '/',
    //     projectLink: '/',
    //     tech: ['Rhino', 'Grasshopper', '3D Printing'],
    //     photo: [PROJECT_4],
    //     link: ['./ThrivingGreenPower']
    // },
    // {
    //     name: 'VR/AR Collection',
    //     description: "This is a collection of my VR/AR related projects, research and experiments",
    //     githubLink: '/',
    //     projectLink: '/',
    //     tech: ['Unity', 'Experience Design'],
    //     photo: [PROJECT_9],
    //     link: ['./MITHack']
    // }
    // {
    //     name: 'Plastic Booth',
    //     description: "A divider screen which creates a border between the public cafeteria sphere and the staff's private sphere, and also shows sophisticated products made of plastic.",
    //     githubLink: '/',
    //     projectLink: '/',
    //     tech: ['Product Design', 'Fabrication', 'Material'],
    //     photo: [PROJECT_2],
    //     link: ['./PlasticBooth']
    // },
    // {
    //     name: 'Sentimental Data',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
    //     githubLink: '/',
    //     projectLink: '/',
    //     tech: ['Tech1', 'Tech2', 'Tech3'],
    //     photo: [PROJECT_6],
    // }

]
