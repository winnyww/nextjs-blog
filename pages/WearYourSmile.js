import styles from '../styles/Project2.module.css'
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
                <h1 className={styles.title}>Wear Your Smile</h1>
                    <br></br>
                <p className={styles.oneSentence}>
                A wireless wearable project that connects sensory data with emotional expression, 
                detecting smiles and expressing them by LEDs. It creates an alternative way 
                to express kindness during pandemic time when people can’t see each other’s 
                faces with masks
                </p>
                    <br></br>
                <div className={styles.introDetails}>
                    <div style={{ marginRight: '5vw'}}>
                        <h1 className={styles.subheading}>Timeline</h1>
                        <p className={styles.detailItems}>One month</p>
                    </div>
                    <div style={{ marginRight: '3vw'}}>
                        <h1 className={styles.subheading}>Role</h1>
                        <p className={styles.detailItems}>Individual class project</p>
                    </div>
                    <div style={{ marginRight: '5vw'}}>
                        <h1 className={styles.subheading}>Tools</h1>
                        <p className={styles.detailItems}>
                            Arduino Nano BLE, MyoWare Muscle Sensor, Conductive Thread,
                            Neopixel Matrix, Arduino 101
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
                    2020 has been a year of a huge tremble. The COVID-19 wasn't the first global pandemic, 
                    and it won't be the last one. Our generation might have to face new "norms" 
                    of living in the near future: social distancing rules, remote learning and 
                    working, and wearing protective gear such as masks. When is the next global 
                    catastrophic tremble? How our life will be if one-day humans have to cocoon 
                    themselves with masks and gloves to survive?
               </p>
                    <br></br>
                <p className={styles.detailItems}>
                    We are already living in one of these realities where seeing each 
                    other's face is a luxury and we already lost one essential norm: 
                    <span id={styles.underline}> the ability to communicate with one and another through facial 
                    emotional expressions.</span> Therefore I created Wear Your Smile to 
                    emphasize the gesture of smiling as an important part of community 
                    bonding. 
                </p>
                    <br></br><br></br><br></br><br></br>
                <div className={styles.backgroundImg}></div>
            </div>
            <div className={styles.graySection}>
                <h1 className={styles.subheading}>Research & Analysis</h1>   
                <br></br>
                <p className={styles.detailItems}>
                    Firstly, I tested with MyoWare Muscle Sensor touching the cheek 
                    to detect the movement of smiling. I found out that the <a href={'https://en.wikipedia.org/wiki/Zygomaticus_major_muscle'} style={{textDecoration: 'none', color: 'blue'}} target="_blank">zygomaticus 
                    major muscle</a> is a muscle of of facial expression which draws the
                    angle of the mouth to allow one to smile. By placing the electrodes
                    along the muscle, electric impulses that result in muscle 
                    activation are detected. <span id={styles.underline}>It offers me accurate data when a smile 
                    activity takes place.</span>
                </p>
                <br></br><br></br>   <br></br><br></br>  
                <div className={styles.researchImg}></div>  
                <br></br><br></br> 
                <p className={styles.detailItems}>
                    Measuring muscle activation via electric potential, referred to as electromyography 
                    (EMG), has been traditionally used for medical research and diagnosis
                    of neuromuscular disorders. I tested with MyoWare Muscle Sensor
                    touching the cheek to detect the movement of smiling by:<br></br><br></br> 

                    a. cleaning the target muscle area;<br></br>  
                    b. applying the electrodes in the direction of the muscle;<br></br>  
                    c. placing the reference electrode near targeted muscle;<br></br>  
                    d. connecting to Arduino;<br></br>  <br></br>   

                    Based on the EMG signal output, I get to<span id={styles.underline}> examine the activation of the 
                    zygomaticus major muscle when I smile</span>, and divide the activity into 3 stages:<br></br>  <br></br>  
                </p>
                <br></br><br></br>  
                <div className={styles.researchImg1}></div> 
                <br></br> <br></br> <br></br> 
                <div className={styles.researchImg2}></div>       
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>design</h1>
                <br></br>
                <h1 className={styles.subheading}>Interation Design</h1>
                <br></br>
                <p className={styles.detailItems}>
                    I built the <span id={styles.underline}>smile detecting system on a facial mask, 
                    and a LED signal expression system on a t-shirt with 
                    conductive thread and sewable electronics.</span> When a 
                    smile is detected by the mask, the sensory data is
                    wirelessly sent to the t-shirt. I designed 3 LED 
                    patterns to express the moments of 'not smiling', 
                    'smiling' and 'total smiling time':
                </p>
                <br></br><br></br>  
                <div className={styles.designImg1}></div> 
                <br></br><br></br> 
                <h1 className={styles.subheading}>Hardware Development</h1>
                <br></br><br></br>  
                <div className={styles.designImg2}></div> 
                <br></br><br></br>  <br></br><br></br>  
            </div> 
             <div className={styles.graySection}>
                <h1 className={styles.sectionHeader}>outcome</h1>
                <br></br>
                <h1 className={styles.subheading}>Final Product</h1>   
                <br></br>
                <p className={styles.detailItems}>
                    Wear Your Smile allows us to show emotions, bring meanings 
                    to digital fabracation, and signals our friendliness in a 
                    global pandemic time.<br></br><br></br> 

                    It helps us to rethink the social significance of our emotional 
                    expressions, and also how fashion technology is offering us 
                    <span id={styles.underline}>a new perspective of unique identity. </span>            
                </p>
                <br></br>  <br></br>  <br></br> 
                <iframe src="https://www.youtube.com/embed/qZIwhX7cF8c" width="960" height="640" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen title="Data Portal Overview"></iframe>
  
            </div>
            <div className={styles.buttons}>
            {/* <Link href='/ThrivingGreenPower'>
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
            </Link> */}
                <ScrollButton />
            </div>
        </div>
    )
}

export default DataPortal
