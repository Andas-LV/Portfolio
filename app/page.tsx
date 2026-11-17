import { LangProvider } from '@/app/components/LangProvider'
import { Nav } from '@/app/components/Nav'
import { About, Contacts, Experience, Footer, Hero, Projects, Skills } from '@/app/components/Sections'
import s from '@/app/components/home.module.css'

export default function Home() {
    return (
        <LangProvider>
            <div className={s.bgGlow} aria-hidden />
            <Nav />
            <main className={s.main}>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contacts />
            </main>
            <Footer />
        </LangProvider>
    )
}
