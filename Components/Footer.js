import styles from '../styles/NavbarFooter.module.css';
import Link from 'next/link'
import { userinfo } from '../Constants/userinfo'
import {scroller} from 'react-scroll';

const Footer = ({ currentTheme }) => {
    return (
        <div className={styles.footermain} style={{backgroundColor: '#FFF2EF'}}>
            <div className={styles.footertable}>
                <div>
                    <h2 className={styles.letschat}></h2>
                    {/* <SocialLinks style={{backgroundColor: 'red'}} /> */}
                    <p className={styles.footerText}>This website is best viewed on desktop</p>
                    <p className={styles.footerText}>Updated © 2023</p> 
                </div>
                <div className={styles.footerSmallTable}>
                    <ul>
                        <div className={styles.listHeading}>Wanna Connect?</div>
                        <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}><li>Email</li></Link>  
                        {userinfo.socials ?
                            userinfo.socials.map((social, key) => {
                                return (
                                    <Link href={social.link} key={key}><li>{social.type}</li></Link>
                                )
                            }) : null
                        }                  
                    </ul>
                    <ul>
                        <div className={styles.listHeading}>Go back to Pages</div>
                        <Link href='/'><li onClick={()=>{
                                                            scroller.scrollTo('home', {
                                                            duration: 800,
                                                            delay: 0,
                                                            smooth: 'easeInOutQuart'
                                                            })
                                                        }}>Home</li></Link>
                        <Link href='/#work'><li onClick={()=>{
                                                            scroller.scrollTo('work', {
                                                            duration: 800,
                                                            delay: 0,
                                                            smooth: 'easeInOutQuart'
                                                            })
                                                        }}>Work</li></Link>
                        <Link href='/about'><li >About</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
