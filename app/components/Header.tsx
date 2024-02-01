import {Exp} from '@/app/pages/Exp/Exp';
import {About} from "@/app/pages/About/About";
import {Stacks} from "@/app/pages/Stacks/Stacks";
import {Projects} from "@/app/pages/Projects/Projects";
import {Contacts} from "@/app/pages/Contacts/Contacts";
import styles from  './components.module.css'

export const Header = () => {
    const scrollToSection = (sectionId:string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <nav>
                    <div className={styles.mainInfo}>
                        <h2>ANDAS</h2>
                        <p>Frontend developer</p>
                    </div>
                    <ul className={styles.navItems}>
                        <li onClick={() => scrollToSection('about')}>About</li>
                        <li onClick={() => scrollToSection('experience')}>Experience</li>
                        <li onClick={() => scrollToSection('stacks')}>Stacks</li>
                        <li onClick={() => scrollToSection('projects')}>Projects</li>
                        <li onClick={() => scrollToSection('contacts')}>Contacts</li>
                    </ul>
                </nav>
            </div>

            <div className={styles.container}>
                <div id={'about'}>
                    <About/>
                </div>
                <div id={'experience'}>
                    <Exp/>
                </div>
                <div id={'stacks'}>
                    <Stacks/>
                </div>
                <div id={'projects'}>
                    <Projects/>
                </div>
                <div id={'contacts'}>
                    <Contacts/>
                </div>
            </div>
        </header>
    )
}