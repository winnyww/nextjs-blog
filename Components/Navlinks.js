import { useState, useEffect } from 'react'
import styles from '../styles/NavbarFooter.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {scroller} from 'react-scroll';

const Navlinks = () => {
    const router = useRouter()
    const [activeLink, setActiveLink] = useState('/')

    useEffect(() => {
        setActiveLink(router.asPath)
    }, [router.asPath])

    return (
        <>
            <div className={styles.navlinks} style={{marginRight: '2vw'}}>
                <Link href='/'  style={{ borderBottom: activeLink === '/' ? '1.5px solid #4F4F4F' : '0px solid #000'}}
                    onClick={()=>{
                        scroller.scrollTo('home', {
                        duration: 800,
                        delay: 0,
                        smooth: 'easeInOutQuart'
                        })
                    }}>Home
                </Link>
            </div>
            <div className={styles.navlinks} style={{marginRight: '2vw'}}>
                <Link href='/#work' style={{ borderBottom: activeLink === '/#work' ? '1.5px solid #4F4F4F' : '0px solid #000'}}
                    onClick={()=>{
                        scroller.scrollTo('work', {
                        duration: 800,
                        delay: 0,
                        smooth: 'easeInOutQuart'
                        })
                    }}>Work
                </Link>
            </div>
            {/* <div className={styles.navlinks}>
                <Link href='/about'><a style={{ borderBottom: activeLink === '/about' ? '1.5px solid #4F4F4F' : '0px solid #000' }}>About</a></Link>
            </div> */}
        </>

    )
}

export default Navlinks
