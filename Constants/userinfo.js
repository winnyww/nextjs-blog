//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Winny Wang", //This text is visible on your navbar and footer like your logo.
    footerText: "Let's Chat! ☕️",
    footerSubtext: "View my Resume here",
    contact: {
        email: 'pw1101@berkeley.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '510-988-1198', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+1' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'linkedin', link: '', icon: faLinkedinIn },
        { type: 'youtube', link: '', icon: faGithubAlt },
    ],
    greeting: {
        //this text goes on your landing page
        // title: "Hey there, I'm an innovative designer & researcher shaping meaningful thoughts into realities!",
        title: "Hey! I'm Winny. I’m currently a Master of Design student at UC Berkeley ✌🏻 Previously, I worked as student UX designer and front end developer. I'm most interested in innovative technologies that shape meaningful thoughts into realities ✨"// subtitle: "I'm an innovative designer & researcher shaping meaningful thoughts into realities!"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Category", // eg.frontend, backend, devops etc
            skills: ["Skillset1", "Skillset1", "Skillset1"] //eg. react, html, python etc.
        },
        {
            category: "Category",
            skills: ["Skillset2", "Skillset2", "Skillset2"]
        },
        {
            category: "Category",
            skills: ["Skillset3", "Skillset3", "Skillset3"]
        },
        {
            category: "Category",
            skills: ["Skillset4", "Skillset4", "Skillset4"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "'Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need like my need to be praised.' Whatever the situation or conflict might be, it can almost always be traced back to this need. His conference room characters, fun runs, and copious amounts of office parties are all aimed at his need to be praised.",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'Sep 2017 - 2021', 
                title: 'Interactive Media Arts & Humanities', 
                organization: 'New York University Shanghai', 
                //description: 'Lorem ipsum dolor sit amet consectetur' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'Aug 2021 - 2022',
                title: 'Associate Fellowship',
                organization: 'New York University Shanghai',
                //description: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                time: 'Aug 2022 - 2023',
                title: 'Master of Design (MDes)',
                organization: 'UC Berkeley',
                description: "I'm a first-year master student at MDes, expecting to graduate in December 2023"
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Dunder Mifflin', //company name eg.Microsoft
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Regional Manager', //post you held eg.Senior SDE
                time: 'March 2020 - May 2020', //timespan
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'About',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}