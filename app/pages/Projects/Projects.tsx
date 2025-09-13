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
                title="Crystal Auto(HAVAL)"
                imgPath="/haval.png"
                linkPath="https://www.carastana.com/"
                github="https://github.com/Andas-LV/crystal_auto.git"
                description="That was pretty simple project with interesting stacks as Next.js, Zustand, Zod etc."
            />

            <ProjectBlock
                title="Any Parts"
                imgPath="/AnyParts.png"
                linkPath="https://any-parts.vercel.app/"
                github="https://github.com/Andas-LV/any_parts.git"
                description="I found some good layout desing in the internet.
                I think I can use them for my big project.
                I am proud of my work. I have made it a habit that with every new project. I wil also learn and immediately aplly a new stack.
                In that case I used new stacks for me like Node js, React libs and etc"
            />

            <ProjectBlock
                title="Qorgau"
                imgPath="/qorgau.png"
                linkPath="https://qorgau-city.kz/map/"
                github="NDA"
                description="This is a Fire resistance project. I used a stacks like Vue js, Pinia, Nuxt js, Vuetify, google_map and etc."
            />
        </div>
    );
};
