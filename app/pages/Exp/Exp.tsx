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
            <h2>Experience: 2 years</h2>
            <Block
                company={'Company name'}
                title={'Front-end developer'}
                date={'2023-2024'}
                text={'I was responsible for the development of layouts in Figma.Responsible for developing front-end applications.'}
                skills={['React', 'Next.js', 'Tailwind']}
            />

            <Block
                company={'Company name'}
                title={'Full-stack developer'}
                date={'2022-2023'}
                text={'I was responsible for the development of layouts in Figma.Responsible for developing front-end applications.'}
                skills={['React', 'Next.js', 'Tailwind']}
            />
        </div>
    )
}
