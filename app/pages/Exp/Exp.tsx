import React from "react";
import styles from "./exp.module.css";

export const Exp = () => {
    interface BlockProps {
        company: string;
        title: string;
        skills: [string, string, string];
        date: string;
        text: string;
    }

    const Block: React.FC<BlockProps> = ({company, title,  date, text,skills}) => {
        const [skillOne, skillTwo, skillThree] = skills;
        return (
            <div className={styles.block}>
                <h3 className={styles.company}>{company}</h3>

                <h3 className={styles.title}>{title}</h3>

                <div className={styles.date}>{date}</div>

                <p className={styles.text}>{text}</p>

                <ul className={styles.skillsContainer}>
                    <li className={styles.skill}>{skillOne}</li>
                    <li className={styles.skill}>{skillTwo}</li>
                    <li className={styles.skill}>{skillThree}</li>
                </ul>
            </div>
        );
    };


    return (
        <div className={styles.container}>
            <h2>Experience: 2 years and 2 months</h2>
            <Block
                company={'Dzhandosov Soft'}
                title={'Front-end developer'}
                date={'December 2023 - May 2024'}
                text={'I was responsible for the development of full front-end software. We was creating a special application.Featuring stacks like Vue, Pinia, Nuxt js, Typescript and others. '}
                skills={['React', 'Vue 3', 'TypeScript']}
            />
            <Block
                company={'AIU'}
                title={'Frontend developer'}
                date={'March 2022 - December 2023'}
                text={'. Last year, I delved into various stacks and libraries such as Next.js, Vue, Electron, Redux Toolkit, React-Select, React-Query and others. I have completed numerous projects using these technologies.'}
                skills={['Next.js', 'Redux', 'Vue 3']}
            />

            <Block
                company={'Hakaton(AITU)'}
                title={'Front-end developer'}
                date={'November 2023'}
                text={'Our team is in the top 10. I was responsible for the development of layouts in Figma.Responsible for developing front-end applications and helped for backend devs.'}
                skills={['React', 'Node js', 'TypeScript']}
            />
        </div>
    )
}
