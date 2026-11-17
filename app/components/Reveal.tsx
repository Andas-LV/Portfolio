'use client'

import React, { useEffect, useRef, useState } from 'react'

export function Reveal({
    children,
    delay = 0,
    className = '',
    as: Tag = 'div',
}: {
    children: React.ReactNode
    delay?: number
    className?: string
    as?: 'div' | 'section' | 'article' | 'li'
}) {
    const ref = useRef<HTMLElement | null>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    io.disconnect()
                }
            },
            { rootMargin: '0px 0px -8% 0px' },
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])

    return (
        <Tag
            ref={ref as never}
            className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Tag>
    )
}
