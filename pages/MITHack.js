import styles from '../styles/Project4.module.css'
import Link from 'next/link'
import { projectinfo } from '../Constants/projectinfo';
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ScrollButton from '../Components/ScrollButton';

const DataPortal = ({ currentTheme }) => {

    return (
        <div>
            <div className={styles.projectheading}></div>
            <div className={styles.projectIntro}>
                <h1 className={styles.title}>Haptic Vision</h1>
                    <br></br>
                <p className={styles.oneSentence}>
                    The first ever XR Haptic inclusive technology that allows visually impaired individuals to navigate their physical surroundings with greater ease and understanding.
                    It was developed in MIT Reality Hack 2023, an annual community-run XR hackathon.  
                </p>
                    <br></br>
                <div className={styles.introDetails}>
                    <div style={{ marginRight: '5vw'}}>
                        <h1 className={styles.subheading}>Timeline</h1>
                        <p className={styles.detailItems}>72 hours</p>
                    </div>
                    <div style={{ marginRight: '5vw'}}>
                        <h1 className={styles.subheading}>Role</h1>
                        <p className={styles.detailItems}>Design</p>
                    </div>
                    <div style={{ marginRight: '5vw'}}>
                        <h1 className={styles.subheading}>Skills</h1>
                        <p className={styles.detailItems}>
                            UX Research, User Testing, Sketch, Graphic Design, <br></br>
                            Video shooting, Presentation
                        </p>
                    </div>
                </div>
            </div>
            <div style={{  padding: '10vh 22vw' }}>
                <h1 className={styles.sectionHeader}>overveiw</h1>
                    <br></br>
                <h1 className={styles.subheading}>Background</h1>
                    <br></br>
                <p className={styles.detailItems}>
                    Visually impaired individuals face significant barriers when trying 
                    to navigate and interact with the physical world, which can lead to 
                    a lack of independence and reduced quality of life. According to WHO, 
                    there are <span id={styles.underline}>approximately 253 million people worldwide who are visually 
                    impaired. </span>
                    
                    <br></br>
                    <br></br>Many common everyday tasks, such as grocery shopping, 
                    traveling, and accessing public transportation, can be difficult 
                    or even impossible for visually impaired individuals to accomplish 
                    without assistance. Currently, visually impaired individuals rely 
                    on tools such as support canes and guide dogs, <span id={styles.underline}>but these tools have 
                    limitations.  </span>
                </p>
                    <br></br>
                    <br></br>
            </div>
            <div className={styles.graySection}>
                <h1 className={styles.subheading}>Design Process</h1>   
                <br></br>
                <p className={styles.detailItems}>
                    My team focused on our main target users, professor and students,
                    and developed two main research areas: user and data research. It is vital 
                    that the portal we built serves two needs: <br></br><br></br>
                    1. visualizing data to supplement teaching outside the classroom
                    <br></br>
                    2. assisting students to learn data and build their own narrative
                </p>
                <br></br>
                <p className={styles.detailItems}>
                    We aim to build a data portal that can logically visualzize large size data while 
                    easy to learn and use. <span id={styles.underline}>Therefore, the research on user will focus on accessibility 
                    and user experience; the research on data will focus on usability and functionality.</span> 

                </p>
                <br></br><br></br>  
                <div className={styles.diagram}></div>       
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>research insights</h1>
                <br></br>
                <h1 className={styles.subheading}>User Interview</h1>
            </div>
            <div style={{padding: '0vh 18vw 0vh 18vw'}}>
                <div className={styles.interviewImg}></div>
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.subheading}>User Journey: <br></br>
                How will student navigates through the Portal</h1>  
            </div>
            <div style={{padding: '0vh 5vw 10vh 5vw'}}>
                <div className={styles.journeyImg}></div>
            </div>
            <div className={styles.problemStatement}>
                <h1 className={styles.sectionHeader}>Challenge</h1>
                <br></br>
                <h1 className={styles.subheading}>Problem Statement</h1>
                <br></br>
                <p className={styles.detailItems}>How might we create an interactive portal to help students reach the learning goal of developing original arguments through visualizing historical data?</p>   
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>Prototype Development</h1>
                <br></br>
                <h1 className={styles.subheading}>Sketches & Wireframe</h1>
                <br></br>
            </div>
            <div style={{padding: '0vh 15vw'}}>
                <div className={styles.sketchImg}></div>
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.subheading}>Prototype & Iteration</h1>
                <br></br><br></br>
            </div>
            <div style={{padding: '0vh 5vw'}}>
                {/* <div className={styles.prototypeImg}></div> */}
                <br></br><br></br>
            </div>
            <div className={styles.graySection}>
                <h1 className={styles.sectionHeader}>Design</h1>
                <br></br>
                <h1 className={styles.subheading}>Final Outcome</h1>
                <br></br>
            </div>
            <div className={styles.buttons}>
            <Link href='/MirroringLoss'>
                <Button 
                    leftIcon={<ArrowForwardIcon />} 
                    color='#4f4f4f' 
                    variant='ghost' 
                    _hover={{ bg: '#FFF2EF' }} 
                    style={{marginRight: '10px'}}
                    _focus={{
                        boxShadow:'0',
                      }}>Next Project
                </Button>
            </Link>
                <ScrollButton />
            </div>
        </div>
    )
}

export default DataPortal
