import styles from '../styles/Work.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
import { HStack, Tag, TagLabel, Tooltip } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"
import { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from "react-swipeable";

const WorkProject = ({ currentTheme, project, id }) => {
  const [index, setIndex] = useState(0);

  return (
      <div className={styles.projectBox}>
          <a href={project.link[index]}><div className={styles.card}>
            <Image  className={styles.imageincard} cover width={750} heigh={500} src={project.photo[index]} />
          </div></a>
          <div className={styles.cardtitle}>
            <h1 className={styles.projtitle}>{project.name}</h1>
            <HStack spacing={2}>
              {
                project.tech.map((tech) => {
                  return (
                    <div key={tech}>
                      <Tag size="sm" borderRadius="md" variant="subtle" colorScheme={'pink'}>
                        <TagLabel>{tech}</TagLabel>
                      </Tag>
                    </div>
                  )
                })
              }
            </HStack>
          </div>
          <div className={styles.cardbottom}>
            <p className={styles.projdescription}>{project.description}</p>
          </div>
      </div>
  )
}

export default WorkProject
