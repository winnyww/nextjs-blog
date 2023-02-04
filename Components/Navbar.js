import Link from 'next/link'
import styles from '../styles/NavbarFooter.module.css'
import Navlinks from './Navlinks'
import { useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from 'react'


const Navbar = ({ toggleTheme, currentTheme }) => {
    const [drawerVisible] = useMediaQuery("(max-width: 550px)")
    const [sticky, setSticky] = useState(false)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        }
        else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className={styles.navbar} style={{ position: 'fixed' }}>
            <div style={{ display: 'flex', gap: '60vw', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: !drawerVisible ? '0' : '10px' }}>
                {/* <Link href='/'><a><h2 className={styles.logo}>{userinfo.logoText}</h2></a></Link> */}
                <Link href='/'><a><div className={styles.logo}></div></a></Link>
                <div style={{ display: 'flex', gap: '2vw', flexWrap: 'nowrap', alignItems: 'center' }}>
                    {!drawerVisible
                        ? <div style={{ display: 'flex' }}>
                            <Navlinks />
                        </div>
                        : null
                    }
                    {/* <Switch id="dark-mode" style={{ }} colorScheme="purple" size={!drawerVisible ? 'lg' : 'md'} isChecked={currentTheme.name === 'dark' ? true : false} onChange={() => toggleTheme()} /> */}
                </div>
            </div>
            {/* {drawerVisible
                ? <>
                    <hr></hr>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                        <Navlinks />
                    </div>
                </>
                : null
            } */}
        </div>
    )
}

export default Navbar
