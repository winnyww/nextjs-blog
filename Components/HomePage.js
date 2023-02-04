import React from "react";
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { useEffect } from "react";
import SocialLinks from "./SocialLinks";
import Link from 'next/link'
import HomeProject from './HomeProject'
import WorkProject from './WorkProject'
import Skills from './Skills'
import { projects } from '../Constants/projects'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import Education from './Education'
import { flexbox } from '@chakra-ui/react'
import {scroller} from 'react-scroll';

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
})

const HomePage = ({ currentTheme }) => {
    const MAX_COUNT = 50;
    let offsetAngle = 0;
    let particles = [];

    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        p5.colorMode(p5.RGB);
        p5.blendMode(p5.LIGHTEST);
	};

    const makeParticles = (pcount, mx, my) => {
        for(let i = 0; i < pcount; i++) {
          let p = new Particle(mx, my);
          
          let angle = Math.PI + Math.random(-Math.PI,Math.PI);
          let speed = Math.random(-10.0,10.0);
          
          p.velX = Math.sin(angle) * speed;
          p.velY = Math.cos(angle) * speed;
          
          p.size = 10;
          
          particles.push(p);
        }
    }
       
    const POINT_GRAVITY = 0.01;
    const POINT_SHRINK = 0.2;
    const DRAG_FORCE_MULTIPLIER = 0.93;
       
    class Particle  {  
        constructor(x,y) {
            this.posX = x; 
            this.posY = y; 
            this.velX = 0; 
            this.velY = 0; 
            this.size = 1; 	
        }
    
        update() {
            this.velX *= DRAG_FORCE_MULTIPLIER; 
            
            this.velY = this.velY * DRAG_FORCE_MULTIPLIER + POINT_GRAVITY;
                
            this.posX += this.velX;
            this.posY += this.velY; 
            
            this.size -= POINT_SHRINK;
        }
        
        render(p5) {
            p5.noFill();
            p5.stroke(255, 150, 150, 15);
            p5.strokeWeight(25);
            p5.ellipse(this.posX, this.posY, this.size);
        }
    }

    const draw = (p5) => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
		p5.background(0);

        let count = particles.length;
  
        p5.clear();
        offsetAngle += 0.1;
        
        makeParticles(2, p5.mouseX, p5.mouseY);
        
        for (let i = 0; i < count; i++) {
          let p = particles[i];
          p.render(p5); 
          p.update(p5);
        }
        
        if (count > MAX_COUNT) {
          particles = particles.splice(count - MAX_COUNT, count);
        }
	};

    return (
        <div name='home' style={{paddingBottom: '10vh'}}>
            <div className={styles.heading}>
                <Sketch style={{position: 'absolute'}} setup={setup} draw={draw} />
                <h1 className={styles.headingText}>✨creative technologist in the bay area✨</h1>
                <SocialLinks />
                <br></br><br></br>
                <Link href='/#work'><a><div className={styles.arrow} onClick={()=>{
                    scroller.scrollTo('work', {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                    })
                }}></div></a></Link>
            </div>
            <div name="work">
                <div className={styles.workmain}  data-aos='fade-up' >
                    {
                        projects.map((project, key) => {
                            return (
                                <div key={key}>
                                    <WorkProject currentTheme={currentTheme} project={project} id={key} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default HomePage
