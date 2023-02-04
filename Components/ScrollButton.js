import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
// import { Button } from './Styles';
import { Button, IconButton } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
    if (typeof window !== "undefined") {
    // browser code
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
            in place of 'smooth' */
        });
    };
    window.addEventListener('scroll', toggleVisible);
}


return (
    // <IconButton
    //     color='#4f4f4f' 
    //     variant='' 
    //     _hover={{ bg: '#ffebeb' }}
    //     borderRadius='5px'
    //     icon={<ArrowUpIcon />}
    //     onClick={scrollToTop}
    // / >
    <Button 
        leftIcon={<ArrowUpIcon/>} 
        color='#4f4f4f' 
        variant='' 
        _hover={{ bg: '#FFF2EF'}} 
        style={{marginRight: '10px'}}
        onClick={scrollToTop}>Back to Top
    </Button>
);
}

export default ScrollButton;
