import React from 'react';
import styles from './projects.module.css';
import Image from 'next/image';

interface ProjectBlockProps {
    title: string;
    imgPath: string;
    linkPath: string;
    github: string;
    description: string;
}

export const Projects: React.FC = () => {
    const ProjectBlock: React.FC<ProjectBlockProps> = ({ title, imgPath, linkPath, github, description }) => {
        return (
            <article className={styles.projectBlock}>
                <h3 className={styles.title}>{title}</h3>
                <Image src={imgPath} alt="img" width={600} height={300} quality={100}/>
                <a href={linkPath} target="_blank" rel="noopener noreferrer" className={styles.linkPath}>
                    <span className={styles.linkName}>Link to Project:</span> {linkPath}
                </a>

                <a href={github} target="_blank" rel="noopener noreferrer" className={styles.github}>
                    <span className={styles.linkName}>Link to GitHub:</span> {github}
                </a>
                <p className={styles.description}>Description: {description}</p>
            </article>
        );
    };

    return (
        <div className={styles.container}>
            <h2>Projects</h2>
            <ProjectBlock
                title="Project Title"
                imgPath="/simple-design.png"
                linkPath="https://simple-design-one.vercel.app/"
                github="https://github.com/Andas-LV/simple-design.git"
                description="Sure! Life is like a complex algorithm, full of unpredictable loops and conditional statements. Just as in coding, where bugs can be both frustrating and enlightening, real-life challenges shape us. Embrace the unexpected, debug your path, and enjoy the beautiful chaos of existence. After all, every bug is an opportunity to learn and grow."
            />

            <ProjectBlock
                title="Project Title"
                imgPath="/chatbot.png"
                linkPath="https://chatbot-git-main-andas-projects-e016e5fa.vercel.app/"
                github="https://github.com/Andas-LV/Chatbot.git"
                description="Sure! Life is like a complex algorithm, full of unpredictable loops and conditional statements. Just as in coding, where bugs can be both frustrating and enlightening, real-life challenges shape us. Embrace the unexpected, debug your path, and enjoy the beautiful chaos of existence. After all, every bug is an opportunity to learn and grow."
            />

            <ProjectBlock
                title="Project Title"
                imgPath="/currency.png"
                linkPath="https://currency-sand.vercel.app/"
                github="https://github.com/Andas-LV/TZ.git"
                description="Sure! Life is like a complex algorithm, full of unpredictable loops and conditional statements. Just as in coding, where bugs can be both frustrating and enlightening, real-life challenges shape us. Embrace the unexpected, debug your path, and enjoy the beautiful chaos of existence. After all, every bug is an opportunity to learn and grow."
            />
        </div>
    );
};
