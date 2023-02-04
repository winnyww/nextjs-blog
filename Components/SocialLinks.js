import {React, Component} from 'react';
import { Button, HStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { CiMail, CiLinkedin, CiFileOn } from "react-icons/ci";
import styles from '../styles/NavbarFooter.module.css'

const SocialLinks = () => {
    return (
        <>
        <HStack direction='row' spacing='10px'>
            <Button colorScheme='whiteAlpha' variant='ghost' className={styles.navlinks}><a href='mailto: pw1101@berkeley.edu'><Icon as={CiMail} w={'30px'} h={'30px'} color='#4F4F4F' /></a></Button>
            <Button colorScheme='whiteAlpha' variant='ghost' className={styles.navlinks}><a href='https://www.linkedin.com/in/winny-wang-b6384a171/' target="_blank"><Icon as={CiLinkedin} w={'30px'} h={'30px'} color='#4F4F4F' /></a></Button>
            <Button colorScheme='whiteAlpha' variant='ghost' className={styles.navlinks}><a href='https://drive.google.com/file/d/15IvLYWnDg-TC1yNN5JiQI3uIVJMlHyzC/view?usp=sharing' target="_blank"><Icon as={CiFileOn} w={'30px'} h={'30px'} color='#4F4F4F' /></a></Button>
        </HStack>
        </>

    )
}

export default SocialLinks
