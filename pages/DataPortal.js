import styles from '../styles/Project6.module.css'
import Link from 'next/link'
import { Button, Tag, TagLabel } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ScrollButton from '../Components/ScrollButton';
import { FaGraduationCap } from 'react-icons/fa';

const DataPortal = ({ currentTheme }) => {

    return (
        <div>
            <div className={styles.projectheading}></div>
            <div className={styles.projectIntro}>
                <h1 className={styles.title}>Interactive Data Portal</h1>
                <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={'pink'} style={{marginRight: '5px'}}>
                    <TagLabel>React</TagLabel>
                </Tag>
                <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={'pink'} style={{marginRight: '5px'}}>
                    <TagLabel>Data Viz</TagLabel>
                </Tag>
                <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={'pink'}>
                    <TagLabel>UX Research</TagLabel>
                </Tag>
                <br></br> <br></br>
                <p className={styles.oneSentence}>
                An interactive portal for flexible, real-time data visualization for historical research 
                for Humanities Research Lab at NYU. 
                </p>
                    <br></br><br></br>
                <div className={styles.introDetails}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '20%'}}>
                        <div style={{ marginRight: '2%'}}>
                            <h1 className={styles.subheading1}>Timeline</h1>
                            <p className={styles.detailItems1}>2021 - 2022 <br></br>(Weekly Meeting)</p>
                        </div>
                        <br></br><br></br>
                        <div style={{ marginRight: '18%'}}>
                            <h1 className={styles.subheading1}>Project Type</h1>
                            <p className={styles.detailItems1}>Part-time Internship <br></br>@ NYU</p>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '35%'}}>
                        <div style={{ marginRight: '2%'}}>
                            <h1 className={styles.subheading1}>My Rule</h1>
                            <p className={styles.detailItems1}>Fron-end Designer & Developer</p>
                        </div>
                        <br></br><br></br>
                        <div style={{ marginRight: '18%'}}>
                            <h1 className={styles.subheading1}>Team</h1>
                            <p className={styles.detailItems1}>
                                Heather Ruth Lee - Mentor<br></br>
                                Sarah Tahir - Front-end<br></br>
                                Yufeng Zhao - Developer<br></br>
                                Yuchen Wang - Back-end<br></br>
                                Tim Wu - Data Analyst
                            </p>  
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '45%'}}>
                        <div style={{ marginRight: '2%'}}>
                            <h1 className={styles.subheading1}>Tools</h1>
                            <p className={styles.detailItems1}>
                                Figma, Illustrator, Github, React, Tailwind, Next.js, MongoDB
                                Google slides, Excel sheet
                            </p>
                        </div>
                        <br></br><br></br>
                        <div style={{ marginRight: '18%'}}>
                            <h1 className={styles.subheading1}>My Contribution</h1>
                            <p className={styles.detailItems1} style={{marginBottom: '10px'}}>
                                <b>UX Design & Test</b>: user interview; user tests; 
                                design clickable wireframes; build UI components
                            
                            </p>
                            <p className={styles.detailItems1}>
                                <b>Development</b>: program the front-end framework, implement 
                                styling and functionality
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
                    Humanities Research Lab is a multi-campus NYU project to research the 
                    significance of New York City immigrants. The lab and project were started 
                    in 2020, <span id={styles.underline}>however, there isn't a web portal 
                    integrating the project creating and showcasing, which increases the difficulty 
                    of further development.</span>
                    <br></br><br></br>
                    Therefore, our team aimed to <span id={styles.underline}>build an original data visualization portal from scratch </span>,
                    based on the need of main user: the professors and students who will use the portal
                    for academic teaching and learning.     
                </p>
                <br></br><br></br><br></br><br></br>
                <div className={styles.backgroundImg}></div> 
                <br></br><br></br>
            </div>
            <br></br><br></br>
            <div className={styles.problemStatement}>
                <h1 className={styles.sectionHeader}>Challenge</h1>
                <br></br>
                <h1 className={styles.subheading}>Problem Statement</h1>
                <br></br>
                <p className={styles.detailItems}>How might we create an interactive portal to help students reach the learning goal of developing original arguments through visualizing historical data?</p>   
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>user research process</h1>
                <br></br>
                <h1 className={styles.subheading}>User Research 01: Methodology</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    My team focused on our main target users, professor and students, and developed 
                    two main research areas: user and data research. <span id={styles.underline}>
                    We aim to build a data portal that can logically visualzize large size data while easy to learn and use. </span>  
                    It is vital that the portal we built serves two needs:
                    <br></br><br></br>
                    1. visualizing data to supplement teaching outside the classroom
                    <br></br>
                    2. assisting students to learn data and build their own narrative
                    <br></br><br></br>
                </p>
                <br></br>
                <div className={styles.researchImg1}></div>
                <br></br><br></br>
                <h1 className={styles.subheading}>User Research 02: User Interviews</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    <span id={styles.underline}>Our data portal needs to be widely used within the NYU network for teaching purposes. </span>
                    The main user will be students who will take a history class and use the data portal 
                    to complete assignments. The secondary user will be professors who add the data portal 
                    as a tool in the syllabus to assist students analyze data. There is a potential group of 
                    guest users who can view the data portal page online but have limited access.
                </p>
                <div className={styles.researchImg2}></div>
                <br></br><br></br><br></br><br></br>
                <h1 className={styles.subheading}>User Research 03: User Journey</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    After interviewing future student users, we identified the journey process 
                    as 5 steps: from getting to know the data in class to using the visualization 
                    tool and developing data insights independently.   </p>
            </div>
            <div style={{padding: '5vh 5vw 0vh 5vw'}}>
                <div className={styles.researchImg3}></div>
            </div>
            <br></br>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>data research process</h1>
                <br></br>
                <h1 className={styles.subheading}>Data Research 01: Methodology</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    To build a data visualization portal, our team conducted in-depth research 
                    into the dataset used. We studied the meaning behind the data, the academic 
                    potentials and limitations in order to create <span id={styles.underline}>a user-friendly portal that 
                    at the same time fullfills the vision of the curriculum. </span>
                    <br></br><br></br>
                </p>
                <br></br>
                <div className={styles.researchImg4}></div>
                <br></br><br></br>
                <h1 className={styles.subheading}>Data Research 02: Graph & Variable Type</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    To begin with, we started to study the types of graph, histogram, boxplot,
                    correlation matrix, scatter plot, bar graph and Line graph. By understanding 
                    what constitude the graph, for example the shapes and trend, the team tailored
                    the visualization to follow the data structure as well as appear coherently 
                    and attractively. 
                </p>
                <div className={styles.researchImg5}></div>
                <br></br><br></br>
                <h1 className={styles.subheading}>Data Research 03: Functional Features</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    We chose Plotly as our data visualization tool. It is a powerful library that 
                    enables many customizable functions, shown as below. Based on our previous 
                    research on the potentials and limitations, we chose a list of universal 
                    functions to employ in all the graphs in our portal in order to increase the 
                    functionality. 
                </p>
                <div className={styles.researchImg6}></div>
                <br></br>
            </div>
            <div className={styles.graySection}>
                <h1 className={styles.sectionHeader}>competitor research</h1>
                <br></br>
                <h1 className={styles.subheading}>Competitor Analysis</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    After knowing the user and the data, the team jumped into a quick competitor 
                    analysis process where we looked into similar projects from other university. 
                    We summarized the style, content, information flow in these websites, and helped 
                    ourselves to better imagine what our project could look like. 
                </p>
                <br></br><br></br><br></br>
                <p>Reference 01: MIT</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className={styles.researchImg7}></div>
                    <div className={styles.researchImg75}></div>
                </div>
                <br></br><br></br>
                <p>Reference 02: Yale</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className={styles.researchImg8}></div>
                    <br></br>
                    <div className={styles.researchImg85}></div>
                </div>
                <br></br><br></br>
                <p>Reference 03: Stanford</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div className={styles.researchImg9}></div>
                    <br></br>
                    <div className={styles.researchImg95}></div>
                </div>
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>ideate & test process</h1>
                <br></br>
                <h1 className={styles.subheading}>Ideate 01: Compare Graphs at the Same Time</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    The first design focused on the functionality. One major task for students to 
                    accomplish is to compare and summarize different graph types. We created a 
                    multi-panel visualization wireframe, empathizing on the prominent functionality 
                    and data visualization logic. 
                </p>
                <br></br> <br></br>
                <div className={styles.ideateImg1}></div>
                <br></br><br></br>
                <h1 className={styles.subheading}>Test 01: Clickable Wireframe</h1>
                <br></br>
                <p className={styles.detailItems}>
                    We created a clickable wireframe of this design on Marvelapp.com and 
                    we conducted <span id={styles.underline}>7 in-depth user tests where users will think out loud
                    as they go through the wireframe.</span> We documented their reactions and confusion, and 
                    concluded that this design seemed to be over-complicated, which also added 
                    difficulty to the back-end workload.
                </p>
                <br></br>
                <div className={styles.ideateImg15}></div>
                <br></br>
                <div className={styles.ideateImg2}></div>
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.subheading}>Ideate 02: Simplify Activities</h1>  
                <br></br>
                <p className={styles.detailItems}>
                    The second design focused on smooth workflow. We eliminated unnecessary 
                    windows and tabs, centering only one active graph on the screen. This design 
                    contains a side-by-side panel with clear distinction between the data input 
                    and output. We considered this step as a big progress 
                    from the last version. 
                </p>
                <br></br> <br></br>
                <div className={styles.ideateImg3}></div>
                <br></br><br></br>
                <h1 className={styles.subheading}>Test 02: Clickable Wireframe & Slide Walkthrough</h1>
                <br></br>
                <p className={styles.detailItems}>
                    Similarly, we first observed users to go through the clickable wireframes and 
                    documented their feedback. Then we <span id={styles.underline}>quickly made adjustments based on the feedback 
                    and conducted the third round of user tests</span> with the same users through a slide deck 
                    walkthrough. We received immediate feedback. 
                </p>
                <br></br>
                <div className={styles.ideateImg35}></div>
                <br></br>
                <div className={styles.ideateImg4}></div>
                <br></br>
                <div className={styles.ideateImg5}></div>
            </div>
            <br></br> <br></br> <br></br>
            {/* <div style={{padding: '0vh 10vw 5vh 10vw', height: '90vh'}}>
                <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width={'100%'} height={'100%'} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCjXlVKlDgqtDOpeRQV1e4L%2FTDF-Team6%3Fnode-id%3D0%253A1%26t%3DFl8MgyUI2EfijOaT-1" allowfullscreen></iframe> 
            </div>    */}
            <div className={styles.graySection}>
                <h1 className={styles.sectionHeader}>design</h1>
                <br></br>
                <h1 className={styles.subheading}>Final Design</h1> 
                <br></br>
                <p className={styles.detailItems}>
                    The team synthesized the research and user test findings, designed the 
                    final wireframe for a neat and smooth workflow. We utilized the use of shapes, 
                    chose a soft background color to stand out high contrast visualizations.  
                    <span id={styles.underline}> Last but not the least, we developed prototype with functional front and back end.</span>
                </p> 
                <br></br>
                <div className={styles.prototypeImg1}></div>
            </div>
            <div style={{padding: '0vh 10vw 10vh 10vw', backgroundColor: '#fafafa'}}>
                <div className={styles.prototypeImg2}></div>
            </div>
            <div className={styles.projectInlineText}>
                <h1 className={styles.sectionHeader}>final product</h1>
                <br></br>
                <h1 className={styles.subheading}>Final Outcome</h1>
                <br></br>
                <p className={styles.detailItems}>
                    The interaction data portal is an on-going project that aims to host on 
                    NYU network server for first-year core curriculum. Our work of user research, 
                    data analysis, UX design and development serve as the foundation for further 
                    iteration and updates. 
                </p>
                <br></br>
                <div className={styles.video}>
                <iframe src="https://player.vimeo.com/video/791998442?h=03e8e99ddf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width={'100%'} height={'100%'} frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen title="Data Portal Overview"></iframe>
                </div>
                <br></br><br></br>
                <div className={styles.video}>
                <iframe src="https://player.vimeo.com/video/737074965?h=c251c59eae&autoplay=1" width={'100%'} height={'100%'}  frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br></br><br></br>
                <div className={styles.video}>
                <iframe src="https://player.vimeo.com/video/653145061?h=eed8f65f07&autoplay=1" width={'100%'} height={'100%'}  frameborder="0" allow=" fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
           </div>
            <div className={styles.buttons}>
                {/* <Link href='/MirroringLoss'>
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
