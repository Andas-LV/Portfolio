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
                title="Simple-Design"
                imgPath="/simple-design.png"
                linkPath="https://simple-design-one.vercel.app/"
                github="https://github.com/Andas-LV/simple-design.git"
                description="I found some good layout desing in the internet.
                I think I can use them for my big project.
                I am proud of my work. I have made it a habit that with every new project. I wil also learn and immediately aplly a new stack.
                In that case I used new stacks for me like Node js, React libs and etc"
            />

            <ProjectBlock
                title="Chatbot"
                imgPath="/chatbot.png"
                linkPath="https://chatbot-git-main-andas-projects-e016e5fa.vercel.app/"
                github="https://github.com/Andas-LV/Chatbot.git"
                description="I used API of Gemini. That is Google's AI. This is core of the 'Bard AI' I made a chatbot with it."
            />

            <ProjectBlock
                title="Travellian"
                imgPath="/travellian.png"
                linkPath="https://travel-agency-five-iota.vercel.app/"
                github="https://github.com/Andas-LV/Travel-Agency"
                description="That was a pretty simple project in perspective of the size and like a said, i used a new stack. In this case this is Next js and Next-Auth."
            />
        </div>
    );
};
