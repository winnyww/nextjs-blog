import styles from '../styles/Project5.module.css'
import Link from 'next/link'
import { Button, Tag, TagLabel } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ScrollButton from '../Components/ScrollButton';

const Bondie = ({ currentTheme }) => {

    return (
        <div>
            <div className={styles.projectheading}></div>
            <div className={styles.projectIntro}>
                <h1 className={styles.title}>Bondie</h1>
                <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={'pink'} style={{marginRight: '5px'}}>
                    <TagLabel>IoT</TagLabel>
                </Tag>
                <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={'pink'} style={{marginRight: '5px'}}>
                    <TagLabel>Figma</TagLabel>
                </Tag>
                <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={'pink'}>
                    <TagLabel>Soft Robotics</TagLabel>
                </Tag>
                <br></br> <br></br>
                <p className={styles.oneSentence}>
                A babycare product that reimagines the parent-child interaction when 
                they are away from them. It creates different sensory experiences to strengthen
                the parent-child bond.
                </p>
                    <br></br><br></br>
                <div className={styles.introDetails}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '20%', justifyItems: 'top'}}>
                        <div style={{ marginRight: '2%'}}>
                            <h1 className={styles.subheading1}>Timeline</h1>
                            <p className={styles.detailItems1}>Oct - Dec 2022 <br></br>(2 month)</p>
                        </div>
                        <br></br><br></br>
                        <div style={{ marginRight: '18%'}}>
                            <h1 className={styles.subheading1}>Type</h1>
                            <p className={styles.detailItems1}>Group Class Project <br></br>@ MDes</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '35%', justifyItems: 'top'}}>
                        <div style={{ marginRight: '2%'}}>
                            <h1 className={styles.subheading1}>Project Type</h1>
                            <p className={styles.detailItems1}>Group Class Project <br></br>(2 month)</p>
                        </div>
                        <br></br><br></br>
                        <div style={{ marginRight: '18%'}}>
                            <h1 className={styles.subheading1}>Collaboration</h1>
                            <p className={styles.detailItems1}>
                                Me - Product manager & Technologist<br></br>
                                Yidie Ling - Technologist<br></br>
                                Samriddho Ghosh - Prototyper<br></br>
                                Nian Tong - Prototyper<br></br>
                                Yemoon Cho - Designer
                            </p>  
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '45%'}}>
                        <div style={{ marginRight: '2%'}}>
                            <h1 className={styles.subheading1}>Tools</h1>
                            <p className={styles.detailItems1}>
                                ESP32 Wifi, FSR Sensor, Pulse Sensor, Vibration Sensor,
                                Heating Pad, Servo, Air Pump, Pipes
                            </p>
                        </div>
                        <br></br><br></br>
                        <div style={{ marginRight: '18%'}}>
                            <h1 className={styles.subheading1}>My Contribution</h1>
                            <p className={styles.detailItems1} style={{marginBottom: '10px'}}>
                                <b>Product Managing</b>: direct and plan the 
                                project development; organize teams on specific tasks;
                                communicate with team members
                            </p>
                            <p className={styles.detailItems1}>
                                <b>Programming</b>: develop the interactive programming
                                system; build electronic component of the prototype
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>background</h1>
                <br></br>
                <h1 className={styles.subheading}>Problem</h1>   
                <br></br>
                <p className={styles.detailItems}>
                    As the world returns to normal and parents move out for work and 
                    other chores, <span id={styles.underline}>leaving their children alone or without undivided 
                    attention has become a major problem for parents</span>. Current 
                    solutions in the market, be it baby cameras or any other 
                    technological intervention caters to only the visual senses. 
                    <br></br><br></br>
                </p>
                <div className={styles.backgroundImg}></div> 
            </div>
            <br></br><br></br><br></br><br></br>
            <div className={styles.problemStatement}>
                <h1 className={styles.sectionHeader}>Challenge</h1>
                <br></br>
                <h1 className={styles.subheading}>Problem Statement</h1>
                <br></br>
                <p className={styles.detailItems}>How might we make the interaction between parent and kids more intimate and natural when the parent is physically away from their kids?</p>   
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>research process</h1>
                <br></br>
                <h1 className={styles.subheading}>Research 01: Competitor Analysis</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    After defining the scope of the problem, our team developed competitive analysis
                    on existing babycare products to understand the market need, use of technology and find 
                    opportunity for a new product.      
                </p>
                <br></br>
                <div className={styles.researchImg1}></div>
                <br></br>
                <h1 className={styles.subheading}>Research 02: User Interviews</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    In order to empathize with the parent users, our team conducted in <b>7 in-depth interviews</b> with potential parent users, our 
                    team identified who the users are, understood their journey, analyzed their attitude 
                    towards existing products and captured <span id={styles.underline}>the need for a more initimate, 
                    emotional connection with their children remotely.</span>       
                </p>
                <br></br>
                <div className={styles.researchImg2}></div>
                <br></br>
                <div className={styles.researchImg3}></div>
                <br></br><br></br><br></br>
                <h1 className={styles.sectionHeader}>synthesis process</h1>
                <br></br>
                <h1 className={styles.subheading}>Synthesis: Empathize</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    With the information we gathered from interviews, we synthesized our findings and 
                    created persona profile, user journey and 2x2 synthesis graph. Afterwards, we brainstormed
                    100 ideas how we could solve the problem.
                </p>
                <br></br>
                <div className={styles.synthesisImg1}></div>
                <br></br>
            </div>
            <div style={{padding: '0vh 5vw'}}>
                <div className={styles.synthesisImg2}></div>
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>ideate process</h1>
                <br></br>
                <h1 className={styles.subheading}>Ideate 01: Brainstorm</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    After understanding who the users are, what the users need, we 
                    start the brainstorming process with 100 ideas. In a one-hour brainstrom
                    session, we wrote down all the ideas, no matter how crazy they sound.
                </p>
                <br></br><br></br>
                <div className={styles.brainstormImg1}></div>
                <br></br><br></br>
                <h1 className={styles.subheading}>Ideate 02: Concept</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    Among our ideas, we selected one that stood out: <span id={styles.underline}>haptic communication through objects</span>, 
                    a blanket for parent to provide warmth and comfort, a toy for child to offer attention and 
                    playful moments. We mapped out the haptic sensations as breathing, warmth, grasp (playing with toy),
                    and touch, <span id={styles.underline}>with different frequency patterns.</span>
                </p>
                <br></br><br></br>
                <div className={styles.brainstormImg2}></div>
                <br></br> <br></br>
                <h1 className={styles.sectionHeader}>prototype process</h1>
                <br></br>
                <h1 className={styles.subheading}>Prototype 01: Material Experiment</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    In order to simulate human skin-to-skin and touching movement,  
                    <span id={styles.underline}> we experimented with pumping air into different soft materials</span>, 
                    including plastics, vinyl sheet and silicon. We documented the change in shape, form and volume, and we tested on users to see 
                    whether it does simulate close contact. We got the inspiration from aeroMorph, 
                    an MIT Media Lab project of making origami structure with inflatables. 
                </p>
                <br></br><br></br>
                    <div className={styles.mitImg}></div>
                    <p style={{textAlign: 'right'}}>inspiration: <i>aeroMorph</i> from Tangible Media Group, MIT</p>
                    <br></br><br></br>
            </div>
            <div style={{padding: '5vh 10vw 0vh 10vw'}}>
                <div className={styles.prototypeImg1}></div>
                <br></br><br></br>
                <div className={styles.prototypeImg2}></div>
            </div>
            {/* <div style={{padding: '0vh 10vw 5vh 10vw', height: '90vh'}}>
                <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width={'100%'} height={'100%'} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCjXlVKlDgqtDOpeRQV1e4L%2FTDF-Team6%3Fnode-id%3D0%253A1%26t%3DFl8MgyUI2EfijOaT-1" allowfullscreen></iframe> 
            </div>    */}
            <div className={styles.projectInlineText}>
                <h1 className={styles.subheading}>Prototype 02: Assemble Air Pumping System with Electronics</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    We chose vinyl (below) and used a sewing machine to seal parts of the 
                    double layered structure based on the principles of origami. This not 
                    only gave us flexiblity to build complex geometries but also sped up 
                    the fabrication process. We completed installation of electrical components 
                    into a blanket for assembly.
                </p>
                <br></br><br></br>
            </div>
            <div style={{padding: '5vh 10vw 0vh 10vw'}}>
                <div className={styles.prototypeImg3}></div>
                <br></br><br></br><br></br>
                <div className={styles.prototypeImg4}></div>
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>design</h1>
                <br></br>
                <h1 className={styles.subheading}>Interaction Design</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    The final interaction design included <span id={styles.underline}>two-way WIFI communication </span>
                    between the blanket for parent and toy for kid. Each side has its 
                    own inputs and outputs, and there is a mobile app for the parent 
                    to oversee the whole interaction in case of special situation. 
                </p>
                <br></br><br></br>
            </div>
            <div style={{padding: '5vh 10vw 0vh 10vw'}}>
                <div className={styles.designImg1}></div>
                <br></br><br></br>
                <div className={styles.designImg2}></div>
                <br></br><br></br>
                <div className={styles.designImg3}></div>
                <br></br><br></br>
                <div className={styles.designImg4}></div>
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>outcome</h1>
                <br></br>
                <h1 className={styles.subheading}>Final Design</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    The final interaction design included two-way WIFI communication 
                    between the blanket for parent and toy for kid. Each side has its 
                    own inputs and outputs, and there is a mobile app for the parent 
                    to oversee the whole interaction in case of special situation. 
                    <br></br><br></br>
                    Together, <span id={styles.underline}>Bondie creates intimate connection for parent and kid 
                    through haptic, sensory interactions remotely.</span> The parent can feel 
                    child's heartbeat from the warmth in blanket, and the child can feel 
                    parent's presence from vibration, sound and warmth.  
                </p>
                <br></br><br></br>
            </div>
            <div style={{padding: '5vh 10vw 0vh 10vw'}}>
                <div className={styles.designImg5}></div>               
                <div className={styles.designImg6}></div>
            </div>
        
            
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>outcome</h1>
                <br></br>
                <h1 className={styles.subheading}>Final Product</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    Bondie demonstrates the future of and beyond parent-child relationship, 
                    but rather all kinds of relationships that can enjoy richer connection 
                    over distance with haptic experiences and emerging technologies. We aim 
                    to use human-centered design and technologies to re-create more and more
                    valuable experiences.   
                    <br></br><br></br>
                </p>
            <div className={styles.video}>
                <iframe src="https://www.youtube.com/embed/3GhhCljFGQ4" width={'100%'} height={'100%'} frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen title="Data Portal Overview"></iframe>
            </div>
            </div>
            <div className={styles.buttons}>
                <Link href='/DataPortal'>
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

export default Bondie
