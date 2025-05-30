import {
    SiTypescript, SiJavascript,
    SiReact, SiVuedotjs,
    SiNextdotjs, SiPython,
    SiDjango, SiNodedotjs
} from "react-icons/si";
import Slider from "@/app/components/Slider";


import styles from './stacks.module.css';

export const Stacks = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Stacks</h1>

            <div className={`${styles.skillBlock} ${styles.blue}`}>
                <SiTypescript className={styles.icon} />
                <Slider skill={"Typescript"} level={90} />
            </div>

            <div className={`${styles.skillBlock} ${styles.yellow}`}>
                <SiJavascript className={styles.icon} />
                <Slider skill={"Javascript"} level={90} />
            </div>

            <div className={`${styles.skillBlock} ${styles.lightBlue}`}>
                <SiReact className={styles.icon} />
                <Slider skill={"React"} level={90} />
            </div>

            <div className={`${styles.skillBlock} ${styles.white}`}>
                <SiNextdotjs className={styles.icon} />
                <Slider skill={"Next.js"} level={100} />
            </div>

            <div className={`${styles.skillBlock} ${styles.green}`}>
                <SiVuedotjs className={styles.icon} />
                <Slider skill={"Vue.js"} level={100} />
            </div>

            <div className={`${styles.skillBlock} ${styles.green}`}>
                <SiNodedotjs className={styles.icon} />
                <Slider skill={"Node.js"} level={80} />
            </div>

            <div className={`${styles.skillBlock} ${styles.white}`}>
                <SiPython className={styles.icon} />
                <Slider skill={"Python"} level={70} />
            </div>

            <div className={`${styles.skillBlock} ${styles.lightBlue}`}>
                <SiDjango className={styles.icon} />
                <Slider skill={"Django REST"} level={80} />
            </div>
        </div>
    )
}