import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
    title: 'Андас Сатыбалды — Senior Fullstack разработчик',
    description:
        'Senior Fullstack разработчик: React, Next.js, Vue, NestJS, C# / .NET, PostgreSQL. CRM, SaaS, маркетплейсы и высоконагруженные системы.',
    openGraph: {
        title: 'Андас Сатыбалды — Senior Fullstack',
        description: 'React · Next.js · Vue · NestJS · C# / .NET · PostgreSQL',
        type: 'website',
    },
}

export const viewport: Viewport = {
    themeColor: '#0b0c0f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body className={`${inter.variable} ${mono.variable}`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
