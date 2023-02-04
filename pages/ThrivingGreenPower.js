import styles from '../styles/Project3.module.css'
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
                <h1 className={styles.title}>Thriving Green Power</h1>
                    <br></br>
                <p className={styles.oneSentence}>
                A 3D printed data sculpture project demonstrating an observation 
                of the Chinese fruit market using the import data of apple, 
                strawberry, and avocado. It provokes reflection about the 
                economic and cultural globalization behind the exponential 
                growth of avocado imports.
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
                            Rhino, Grasshopper, 3D printing, Excel
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
                    “Though avocado only entered the Chinese market several years ago, 
                    its imports have been soaring…it [avocado] eventually won the 
                    hearts of middle-class foodies as it is rich in nutrition”.
                    The uprising of avocados in the Chinese market has been a miracle. 
                    The demand for avocados by the young middle-class has <span id={styles.underline}>increased 
                    roughly 1000 times more in a decade[1]</span>
               </p>
                    <br></br>
                <p className={styles.detailItems}>
                    From this visualization, my viewers will realize the demand for 
                    apples and strawberries is dropping over the years, even though 
                    the market for apples is still huge; the demand for avocado, 
                    however, boosts in a very short time that the shape looks very 
                    unnatural. Viewers are led to think about the concept of 
                    “traditional” and “popular”, and <span id={styles.underline}>the purpose is to raise the 
                    awareness of a changing global market</span>
                </p>
                    <br></br><br></br><br></br>
                <div className={styles.backgroundImg}></div>
                <div style={{marginTop: '10px', width: '60%', height: '50px', textAlign: 'right'}}>
                    <p style={{fontSize: '14px'}}>
                        <i>"The Age of the World"</i>
                        <br></br>Mathieu Lehanneur
                    </p>
                </div>
                    <br></br><br></br>
            </div>
            <div className={styles.graySection}>
                <h1 className={styles.subheading}>Research & Analysis</h1>   
                <br></br>
                <p className={styles.detailItems}>
                    Generally, there are a couple of <span id={styles.underline}>factors that contribute to the popularity 
                    of a certain fruit in China</span>: (1) price range; (2) accessibility to the public; 
                    (3) the history; (4) positive metaphorical meaning. If a fruit has a long 
                    consumption history, at the same time being considered as “good” or “lucky”, 
                    then this fruit is very likely to be popular.<br></br><br></br>

                    <span id={styles.underline}>I found three fruits for comparison</span>: (1) apples are traditionally a top choice 
                    for festivals and ceremonies. It has warm red color, and also the name symbolize 
                    “peace” and “safety”; (2) strawberries and avocados are imported foreign fruits 
                    gradually gaining popularity in modern times, both of which enjoy a short history 
                    of few decades.<br></br><br></br>

                    <span id={styles.underline}>With an open and international society, more and more customers follow the global 
                    trends, for example, a lifestyle choice</span>. While the domestic production of avocado 
                    stays at a high level, the demand for imported ones from Latin America continues 
                    to roar. The avocados fly across the pacific ocean and arrive in capital cities 
                    like Beijing or Shanghai, but also smaller towns with a hungrier taste for the 
                    exotic and novel food.
                </p>
                <br></br><br></br>
                <div className={styles.graphImg}></div>
            </div> 
            <div style={{padding: '0vh 5vw 0vh 15vw', backgroundColor: '#fafafa'}}>
                <div className={styles.researchImg}></div>
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>design</h1>
                <br></br>
                <h1 className={styles.subheading}>Product Design</h1>
                <br></br>
                <p className={styles.detailItems}>
                    <span id={styles.underline}>Data Collection:</span> I downloaded the data of intertional 
                    crops and live-stock products trade to China. The dataset 
                    includes import quantity and value of apples, strawberries 
                    and avocados in China from 1961 to 2020. The statistics are 
                    from the Food and Agriculture Organization of the United Nations.
                </p>
                <br></br><br></br>
                <div className={styles.designImg1}></div> 
                <br></br><br></br>
                <p className={styles.detailItems}>
                    <span id={styles.underline}>Data Analysis:</span> The import quantity of apples 
                    is considerably large, with a stable increasing rate over the years. 
                    The import quantity of strawberry and avocado didn’t sharply increase 
                    until the 1980s. Specifically, the number of imported avocados 
                    increases exponentially since 2013, and keeps going.
                </p>
                <br></br><br></br>
                <div style={{display: 'flex'}}>
                    <div className={styles.designImg2}></div> 
                    <div className={styles.designImg3}></div> 
                </div>
                <br></br><br></br>
                <p className={styles.detailItems}>
                    <span id={styles.underline}>Data Scaling & Modeling:</span> I embodied the 
                    data using the concept of data sculpture, which is “a direct externalization 
                    of the data,” in terms of “perceivable presence, shape or form”[2]. I used 
                    the data of import quantity and value of avocados in China, connected the 
                    data points as a curve and then revolved the curve 360 degrees for a shape 
                    of the sculpturehed; later I added details to make it recognizable as a 
                    certain fruit. By playing with its size, curve and volume, I present a 
                    fast-growing market in a visible, touchable, playful way.
                </p>
                <br></br>
            </div>
            <div style={{  padding: '10vh 5vw', display: 'flex'}}>
                <div className={styles.designImg4}></div> 
                <div className={styles.designImg5}></div> 
                <div className={styles.designImg6}></div> 
            </div>
            <div style={{  padding: '10vh 5vw'}}>
                <div className={styles.designImg7}></div> 
            </div>
             <div className={styles.graySection}>
                <h1 className={styles.sectionHeader}>outcome</h1>
                <br></br>
                <h1 className={styles.subheading}>Final Product</h1>   
                <br></br>
                <p className={styles.detailItems}>
                    Lastly, I held an exhibition show for this project. I 3D printed 
                    three fruit models, colored them, and put them in a Chinese fruit 
                    gift basket. In the show, audiences got to <span id={styles.underline}>read my motivation for 
                    creation and touched the “data” with their own hands</span>, adding another 
                    layer of interaction.<br></br>  <br></br> 

                    In the near future, <span id={styles.underline}>how will avocados, the green power, continue to 
                    thrive in Chinese market?</span> Will more consumers follow this trend where 
                    avocados are often branded as “healthy food,” “best choice for a diet?” 
                    How to recognize the bandwagon effect behind this crazily growing 
                    market “colonialization”?                
                </p>
                <br></br><br></br>
                <div className={styles.posterImg}></div>
                <div style={{width: '65%', textAlign: 'right'}}>
                    <p style={{fontSize: '14px'}}>
                        poster for the exhibition show
                    </p>
                </div>
            </div>
            <div className={styles.buttons}>
            <Link href='/MITHack'>
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
