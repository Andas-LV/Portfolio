'use client'

import { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { cvFile } from '@/app/data/content'
import { useLang } from './LangProvider'
import s from './home.module.css'

const ids = ['about', 'experience', 'skills', 'projects', 'contacts'] as const

export function Nav() {
    const { t, lang, setLang } = useLang()
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState<string>('')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8)
            const line = window.innerHeight * 0.4
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
            let current = ''
            for (const id of ids) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= line) current = id
            }
            setActive(atBottom ? ids[ids.length - 1] : current)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    return (
        <header className={`${s.nav} ${scrolled ? s.navScrolled : ''}`}>
            <div className={s.navInner}>
                <a href="#top" className={s.brand} onClick={() => setOpen(false)}>
                    <span className={s.brandMark}>AS</span>
                    <span className={s.brandText}>{lang === 'ru' ? 'Андас' : 'Andas'}</span>
                </a>

                <nav className={`${s.navLinks} ${open ? s.navLinksOpen : ''}`}>
                    {ids.map(id => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={active === id ? s.navActive : ''}
                            onClick={() => setOpen(false)}
                        >
                            {t.nav[id]}
                        </a>
                    ))}
                </nav>

                <div className={s.navRight}>
                    <a className={s.navCv} href={cvFile} download>
                        <FiDownload /> CV
                    </a>
                    <div className={s.langSwitch} role="group" aria-label="Language">
                        {(['ru', 'en'] as const).map(l => (
                            <button
                                key={l}
                                className={lang === l ? s.langActive : ''}
                                onClick={() => setLang(l)}
                                aria-pressed={lang === l}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <button
                        className={s.burger}
                        aria-label="Menu"
                        aria-expanded={open}
                        onClick={() => setOpen(o => !o)}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    )
}
