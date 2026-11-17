'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { SiGithub, SiGmail, SiTelegram } from 'react-icons/si'
import { FiArrowUpRight, FiCopy, FiCheck, FiLock, FiMapPin, FiBookOpen, FiGlobe, FiDownload } from 'react-icons/fi'
import { contacts, cvFile, heroStack, skills } from '@/app/data/content'
import { useLang } from './LangProvider'
import { Reveal } from './Reveal'
import s from './home.module.css'

function SectionHead({ index, title }: { index: string; title: string }) {
    return (
        <Reveal className={s.sectionHead}>
            <span className={s.sectionIndex}>{index}</span>
            <h2>{title}</h2>
            <span className={s.sectionLine} />
        </Reveal>
    )
}

export function Hero() {
    const { t } = useLang()
    const job = t.experience.jobs[0]
    return (
        <section className={s.hero} id="top">
            <div className={s.heroGrid}>
                <div>
                    <div className="fade-up">
                        <span className={s.badge}>
                            <span className={s.pulse} />
                            {t.hero.badge}
                        </span>
                    </div>
                    <div className="fade-up" style={{ animationDelay: '60ms' }}>
                        <h1 className={s.heroName}>{t.hero.name}</h1>
                    </div>
                    <div className="fade-up" style={{ animationDelay: '120ms' }}>
                        <p className={s.heroRole}>{t.hero.role}</p>
                    </div>
                    <div className="fade-up" style={{ animationDelay: '180ms' }}>
                        <p className={s.heroLead}>{t.hero.lead}</p>
                    </div>
                    <div className="fade-up" style={{ animationDelay: '240ms' }}>
                        <ul className={s.heroStack}>
                            {heroStack.map(x => (
                                <li key={x}>{x}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={`fade-up ${s.heroCtas}`} style={{ animationDelay: '300ms' }}>
                        <a className={s.btnPrimary} href={contacts.telegram.href} target="_blank" rel="noopener noreferrer">
                            <SiTelegram /> {t.hero.ctaPrimary}
                        </a>
                        <a className={s.btnGhost} href={cvFile} download>
                            <FiDownload /> {t.hero.cv}
                        </a>
                    </div>
                </div>

                <div className={`fade-up ${s.heroCard}`} style={{ animationDelay: '200ms' }}>
                    <div className={s.cardDots}>
                        <i />
                        <i />
                        <i />
                        <span>whoami.ts</span>
                    </div>
                    <pre className={s.code}>
                        <span className={s.kw}>const</span> <span className={s.var}>me</span> = {'{'}
                        {'\n'}  role: <span className={s.str}>&quot;{job.role}&quot;</span>,
                        {'\n'}  company: <span className={s.str}>&quot;{job.company}&quot;</span>,
                        {'\n'}  backend: [<span className={s.str}>&quot;NestJS&quot;</span>, <span className={s.str}>&quot;.NET&quot;</span>, <span className={s.str}>&quot;Python&quot;</span>],
                        {'\n'}  frontend: [<span className={s.str}>&quot;React&quot;</span>, <span className={s.str}>&quot;Next.js&quot;</span>, <span className={s.str}>&quot;TS&quot;</span>],
                        {'\n'}  location: <span className={s.str}>&quot;{t.contactsSection.locationValue.split(',')[0]}&quot;</span>,
                        {'\n'}{'}'}
                    </pre>
                </div>
            </div>
        </section>
    )
}

export function About() {
    const { t } = useLang()
    return (
        <section className={s.section} id="about">
            <SectionHead index="01" title={t.about.title} />
            <div className={s.aboutGrid}>
                <Reveal className={s.aboutText}>
                    {t.about.text.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </Reveal>
                <div className={s.stats}>
                    {t.about.stats.map((st, i) => (
                        <Reveal key={st.label} delay={i * 80} className={s.stat}>
                            <strong>{st.value}</strong>
                            <span>{st.label}</span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function Experience() {
    const { t } = useLang()
    return (
        <section className={s.section} id="experience">
            <SectionHead index="02" title={t.experience.title} />
            <ol className={s.timeline}>
                {t.experience.jobs.map((job, i) => (
                    <Reveal as="li" key={job.company} delay={i * 60} className={s.job}>
                        <div className={s.jobMeta}>
                            <span className={`${s.jobDot} ${job.current ? s.jobDotNow : ''}`} />
                            <span className={s.jobPeriod}>{job.period}</span>
                            <span className={s.jobCompany}>{job.company}</span>
                            <span className={s.jobCity}>{job.city}</span>
                        </div>
                        <div className={s.jobBody}>
                            <h3>{job.role}</h3>
                            <ul className={s.jobPoints}>
                                {job.points.map(p => (
                                    <li key={p}>{p}</li>
                                ))}
                            </ul>
                            <ul className={s.tags}>
                                {job.stack.map(x => (
                                    <li key={x}>{x}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </ol>
        </section>
    )
}

export function Skills() {
    const { t } = useLang()
    return (
        <section className={s.section} id="skills">
            <SectionHead index="03" title={t.skills.title} />
            <div className={s.skillsGrid}>
                {skills.map((g, i) => (
                    <Reveal key={g.key} delay={(i % 4) * 60} className={s.skillCard}>
                        <span className={s.skillLabel}>{t.skills.groups[g.key]}</span>
                        <ul>
                            {g.items.map(x => (
                                <li key={x}>{x}</li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export function Projects() {
    const { t } = useLang()
    return (
        <section className={s.section} id="projects">
            <SectionHead index="04" title={t.projects.title} />
            <div className={s.projectsGrid}>
                {t.projects.items.map((p, i) => (
                    <Reveal as="article" key={p.title} delay={(i % 2) * 80} className={s.project}>
                        <div className={s.projectMedia}>
                            {p.image ? (
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    sizes="(max-width: 760px) 100vw, 540px"
                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                />
                            ) : (
                                <div className={s.projectNda}>
                                    <FiLock />
                                    <span>{t.projects.nda}</span>
                                </div>
                            )}
                        </div>
                        <div className={s.projectBody}>
                            <span className={s.projectTag}>{p.tag}</span>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <ul className={s.tags}>
                                {p.stack.map(x => (
                                    <li key={x}>{x}</li>
                                ))}
                            </ul>
                            {(p.link || p.github) && (
                                <div className={s.projectLinks}>
                                    {p.link && (
                                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                                            {t.projects.live} <FiArrowUpRight />
                                        </a>
                                    )}
                                    {p.github && (
                                        <a href={p.github} target="_blank" rel="noopener noreferrer">
                                            <SiGithub /> {p.githubBackend ? t.projects.codeFront : t.projects.code}
                                        </a>
                                    )}
                                    {p.githubBackend && (
                                        <a href={p.githubBackend} target="_blank" rel="noopener noreferrer">
                                            <SiGithub /> {t.projects.codeBack}
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

function ContactRow({ icon, name, label, href }: { icon: React.ReactNode; name: string; label: string; href: string }) {
    const { t } = useLang()
    const [copied, setCopied] = useState(false)
    const copy = () => {
        navigator.clipboard
            .writeText(label)
            .then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 1600)
            })
            .catch(() => {})
    }
    return (
        <div className={s.contactRow}>
            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <span className={s.contactIcon}>{icon}</span>
                <span className={s.contactText}>
                    <small>{name}</small>
                    <span>{label}</span>
                </span>
                <FiArrowUpRight className={s.contactArrow} />
            </a>
            <button onClick={copy} aria-label={t.contactsSection.copy} title={copied ? t.contactsSection.copied : t.contactsSection.copy}>
                {copied ? <FiCheck /> : <FiCopy />}
            </button>
        </div>
    )
}

export function Contacts() {
    const { t } = useLang()
    const c = t.contactsSection
    return (
        <section className={s.section} id="contacts">
            <SectionHead index="05" title={c.title} />
            <div className={s.contactsGrid}>
                <Reveal>
                    <p className={s.contactsLead}>{c.text}</p>
                    <div className={s.contactList}>
                        <ContactRow icon={<SiTelegram />} name="Telegram" {...contacts.telegram} />
                        <ContactRow icon={<SiGmail />} name="Email" {...contacts.email} />
                        <ContactRow icon={<SiGithub />} name="GitHub" {...contacts.github} />
                    </div>
                    <a className={`${s.btnPrimary} ${s.cvBtn}`} href={cvFile} download>
                        <FiDownload /> {t.hero.cv} · PDF
                    </a>
                </Reveal>
                <Reveal delay={100} className={s.infoList}>
                    <div className={s.info}>
                        <FiMapPin />
                        <div>
                            <small>{c.location}</small>
                            <span>{c.locationValue}</span>
                        </div>
                    </div>
                    <div className={s.info}>
                        <FiBookOpen />
                        <div>
                            <small>{c.education}</small>
                            <span>{c.educationValue}</span>
                            <em>{c.educationNote}</em>
                        </div>
                    </div>
                    <div className={s.info}>
                        <FiGlobe />
                        <div>
                            <small>{c.languages}</small>
                            <span>{c.languagesValue}</span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export function Footer() {
    const { t } = useLang()
    return (
        <footer className={s.footer}>
            <span>© {new Date().getFullYear()} {t.hero.name}</span>
            <span>{t.footer}</span>
        </footer>
    )
}
