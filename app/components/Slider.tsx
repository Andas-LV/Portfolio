import React from "react";
import styles from "./components.module.css";

interface SkillSliderProps {
    skill: string;
    level: number;
}

const SkillSlider: React.FC<SkillSliderProps> = ({ skill, level }) => {
    let colorClass = styles.defaultColor;

    if (level > 80) {
        colorClass = styles.greenColor;
    } else if (level >= 60 && level <= 80) {
        colorClass = styles.blueColor;
    } else if (level >= 40 && level < 60) {
        colorClass = styles.yellowColor;
    }

    return (
        <div className={styles.skillSlider}>
            <div className={styles.skillName}>{skill}</div>
            <div className={styles.sliderContainer}>
                <div className={`${styles.slider} ${colorClass}`} style={{ width: `${level}%` }}></div>
            </div>
        </div>
    );
};

export default SkillSlider;
