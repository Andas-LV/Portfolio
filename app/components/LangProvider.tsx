'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { content, Lang } from '@/app/data/content'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof content)['ru'] }

const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>('ru')

    useEffect(() => {
        try {
            const saved = localStorage.getItem('lang')
            if (saved === 'ru' || saved === 'en') setLangState(saved)
        } catch {}
    }, [])

    useEffect(() => {
        document.documentElement.lang = lang
    }, [lang])

    const setLang = (l: Lang) => {
        setLangState(l)
        try {
            localStorage.setItem('lang', l)
        } catch {}
    }

    return <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>{children}</LangContext.Provider>
}

export function useLang() {
    const ctx = useContext(LangContext)
    if (!ctx) throw new Error('useLang must be used inside LangProvider')
    return ctx
}
