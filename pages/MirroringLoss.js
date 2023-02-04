import styles from '../styles/Project1.module.css'
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
                <h1 className={styles.title}>Mirroring Loss</h1>
                    <br></br>
                <p className={styles.oneSentence}>
                An artwork that serves as a meditative ritual to bid farewell to 
                the people who lost their lives due to Covid-19. It aims to challenge 
                the social prejudices and their dominance on mentality during the 
                ongoing global crisis by designing a meaningful self-reflection
                 experience.
                </p>
                    <br></br>
                <div className={styles.introDetails}>
                    <div style={{ marginRight: '5vw'}}>
                        <h1 className={styles.subheading}>Timeline</h1>
                        <p className={styles.detailItems}>two semesters</p>
                    </div>
                    <div style={{ marginRight: '3vw'}}>
                        <h1 className={styles.subheading}>Role</h1>
                        <p className={styles.detailItems}>Individual Capstone Project</p>
                    </div>
                    <div style={{ marginRight: '5vw'}}>
                        <h1 className={styles.subheading}>Tools</h1>
                        <p className={styles.detailItems}>
                            Three.js, p5.js, node.js, socket.io,
                            Kinect, Monitors, Windows PC, Wifi Router
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
                    The memories for 2020 are full of chaos: contagious disease, the shutdown of schools and shops, people losing jobs, etc. We are sometimes buried in such chaos, distress and anger, while forgetting that the year 2020 signifies the sudden loss of lives, those who could have more time.
                 </p>
                    <br></br>
                <p className={styles.detailItems}>
                    Mirroring Loss approaches the concept of death in a novel, 
                    artistic and timely manner, visualizing over one year of covid 
                    death data in a one-minute self-reflective and meditative 
                    experience. <span id={styles.underline}>It is designed to help its users pause their 
                    anxious thoughts, contextualize loss and reclaim empathy 
                    for one another. </span>   
                </p>
                    <br></br><br></br><br></br><br></br>
                <div className={styles.backgroundImg}></div>
            </div>
            <div className={styles.graySection}>
                <h1 className={styles.subheading}>Research & Analysis</h1>   
                <br></br>
                <p className={styles.detailItems}>
                    Firstly, this project redefines the daily activity of looking into a mirror, 
                    building upon relevant research that a mirror resembles a tool to connect one’s 
                    inner thoughts and lead to a process of exploring the mind. As visitors approach 
                    the installation’s display, particles gather according to the user’s body image
                    and create <span id={styles.underline}>a virtual human figure reflecting in the mirror,</span> representing 
                    the human body and life. <br></br><br></br>

                    Secondly, this project visualizes the worldwide accumulated death data by 
                    sequences by referring the loss of lives to the vanishment of self-reflection 
                    in the mirror. In 60 seconds, particles representing the human body and life 
                    fall from above and accumulate on the ground in a ratio to death number, <span id={styles.underline}>a 
                    process to watch oneself in the mirror dissolve piece by piece.</span> <br></br><br></br>

                    Lastly, in this process, the user witnesses the transformation of their body 
                    towards incompleteness, fragmentation and decay. It is a symbolic reminder 
                    that <span id={styles.underline}>the loss of human lives is the loss of our community.</span>
                </p>
                <br></br><br></br>   <br></br><br></br>  
                <div className={styles.researchImg}></div>       
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>design</h1>
                <br></br>
                <h1 className={styles.subheading}>Interation Design</h1>
            </div>
            <div style={{padding: '5vh 0vw 5vh 42.2vw'}}>
                <div className={styles.designImg1}></div>
            </div>  
            <div style={{padding: '0vh 5vw'}}>
                <div className={styles.designImg2}></div>
            </div>  
            <div style={{padding: '5vh 0vw 0vh 42.5vw'}}>
                <div className={styles.designImg3}></div>
            </div>  
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>development</h1>
                <br></br>
                <h1 className={styles.subheading}>Technological Design</h1>
            </div>
            <div style={{padding: '5vh 0vw 5vh 42.2vw'}}>
                <div className={styles.designImg4}></div>
            </div>  

            {/* <div className={styles.problemStatement}>
                <h1 className={styles.sectionHeader}>Challenge</h1>
                <br></br>
                <h1 className={styles.subheading}>Problem Statement</h1>
                <br></br>
                <p className={styles.detailItems}>How might we create an interactive portal to help students reach the learning goal of developing original arguments through visualizing historical data?</p>   
            </div> */}
             <div className={styles.graySection}>
                <h1 className={styles.sectionHeader}>outcome</h1>
                <br></br>
                <h1 className={styles.subheading}>Final Artwork</h1>   
                <br></br>
                <p className={styles.detailItems}>
                Mirroring Loss helps us become consciously aware of the large number of 
                deaths caused by Covid-19, and at the same time to <span id={styles.underline}>
                reflect on the collective</span> human loss. In a way, a visual representation of the user will experience 
                 death in the process under the larger background of the covid-19 pandemic.<br></br><br></br>

                It directly conveys that everyone is waiting for this crisis to end, preparing 
                for a collective moment to honor death. The artwork becomes not only a place 
                to mourn, but also <span id={styles.underline}>to celebrate life, affection, and empathy.</span> </p>
             </div>
                <div className={styles.problemStatement} style={{display: 'flex', flexDirection: 'column'}}>
                    <h1 className={styles.sectionHeader}>exhibition</h1> 
                    <br></br> 
                 <p style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{width: '10vw', marginRight: '3vw', font: 'bold'}}>
                            June - July 2021:<br></br><br></br>
                        </div>
                        <div style={{width: '45vw'}}>
                            Neo-Imaginaria: A Collection of Gen-Z New Media Poetics,
                            M50 Shanghai Contemporary Art District<br></br><br></br> 
                        </div>
                    </p>  
                    <p style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{width: '10vw', marginRight: '3vw', font: 'bold'}}>
                            Oct - Nov 2021: <br></br><br></br>
                        </div>
                        <div style={{width: '45vw'}}>
                            New Youth: 16th Shanghai Youth Art Exhibition,
                            Liu Haisu Art Museum
                            (selected out of 1800 artists and 4800 submitted projects)<br></br><br></br> 
                        </div>
                    </p> 
                    <p style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{width: '10vw', marginRight: '3vw', font: 'bold'}}>
                        Nov - Dec 2021 <br></br><br></br>
                        </div>
                        <div style={{width: '45vw'}}>
                        What's Next,
                        Art & Design Education FutureLab                   
                        </div>
                    </p>   
               </div> 
            <div className={styles.graySection}>
                <h1 className={styles.sectionHeader}>outcome</h1>
                <br></br>
                <iframe src="https://player.vimeo.com/video/665669978?h=03e8e99ddf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="960" height="640" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen title="Data Portal Overview"></iframe>
           </div>
            <div className={styles.buttons}>
            <Link href='/WearYourSmile'>
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
