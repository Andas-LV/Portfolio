export type Lang = 'ru' | 'en'

export const contacts = {
    telegram: { label: '@Andas10', href: 'https://t.me/Andas10' },
    email: { label: 'andassatybaldy@gmail.com', href: 'mailto:andassatybaldy@gmail.com' },
    github: { label: 'Andas-LV', href: 'https://github.com/Andas-LV' },
}

export const heroStack = ['React', 'Next.js', 'NestJS', 'C# / .NET', 'PostgreSQL']

export const skills: { key: string; items: string[] }[] = [
    { key: 'languages', items: ['TypeScript', 'JavaScript', 'C#', 'Python', 'Java'] },
    { key: 'backend', items: ['NestJS', 'C# / .NET', 'Django REST Framework', 'Hangfire'] },
    { key: 'frontend', items: ['React', 'Next.js', 'Vue'] },
    { key: 'state', items: ['TanStack Query', 'Redux Toolkit', 'Zustand', 'Pinia', 'Vuex'] },
    { key: 'db', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    { key: 'queues', items: ['RabbitMQ', 'Kafka', 'BullMQ'] },
    { key: 'tools', items: ['Docker', 'Git', 'WebSocket', 'Vite', 'Webpack'] },
    { key: 'integrations', items: ['NCALayer (ЭЦП / EDS)'] },
]

type Job = {
    role: string
    company: string
    city: string
    period: string
    current?: boolean
    points: string[]
    stack: string[]
}

type Project = {
    title: string
    tag: string
    description: string
    stack: string[]
    image?: string
    link?: string
    github?: string
}

type Dict = {
    nav: { about: string; experience: string; skills: string; projects: string; contacts: string }
    hero: {
        badge: string
        name: string
        role: string
        lead: string
        ctaPrimary: string
        ctaSecondary: string
    }
    about: { title: string; text: string[]; stats: { value: string; label: string }[] }
    experience: { title: string; now: string; jobs: Job[] }
    skills: { title: string; groups: Record<string, string> }
    projects: { title: string; nda: string; live: string; code: string; items: Project[] }
    contactsSection: {
        title: string
        text: string
        copy: string
        copied: string
        education: string
        educationValue: string
        educationNote: string
        languages: string
        languagesValue: string
        location: string
        locationValue: string
    }
    footer: string
}

export const content: Record<Lang, Dict> = {
    ru: {
        nav: { about: 'Обо мне', experience: 'Опыт', skills: 'Навыки', projects: 'Проекты', contacts: 'Контакты' },
        hero: {
            badge: 'Сейчас в Smart System Technologies',
            name: 'Андас Сатыбалды',
            role: 'Team Lead · Fullstack разработчик',
            lead: 'Почти 4 года коммерческой разработки. Веду задачу целиком — от базы данных и API до интерфейса.',
            ctaPrimary: 'Написать в Telegram',
            ctaSecondary: 'Смотреть опыт',
        },
        about: {
            title: 'Обо мне',
            text: [
                'Fullstack разработчик, сейчас руковожу командой на проекте для ҚазТемірТранс. На бэкенде работаю с NestJS, C# / .NET и Python, на фронтенде — с React, Next.js и TypeScript.',
                'Делал CRM, SaaS и маркетплейсы, системы с высокой нагрузкой и real-time уведомлениями.',
            ],
            stats: [
                { value: '~4', label: 'года коммерческого опыта' },
                { value: '3', label: 'компании' },
                { value: 'Lead', label: 'команды проекта КТТ' },
            ],
        },
        experience: {
            title: 'Опыт работы',
            now: 'н.в.',
            jobs: [
                {
                    role: 'Team Lead / Fullstack разработчик',
                    company: 'Smart System Technologies',
                    city: 'Астана',
                    period: 'Окт 2025 — н.в.',
                    current: true,
                    points: [
                        'Руковожу командой проекта ҚазТемірТранс (КТТ): распределяю задачи, провожу code review и отвечаю за слияние веток.',
                        'Разрабатываю бэкенд на C# / .NET 6 и PostgreSQL, настраиваю фоновые задачи на Hangfire.',
                        'Разрабатываю корпоративные React SPA для управления железнодорожной логистикой под требования заказчика и высокую нагрузку.',
                        'Интегрировал NCALayer для подписания документов ЭЦП.',
                        'Перевёл аналитические модули на паттерн «тонкий компонент + кастомный хук» — код стал проще в поддержке и переиспользовании.',
                    ],
                    stack: ['C# / .NET', 'PostgreSQL', 'Hangfire', 'React 18', 'TypeScript', 'Next.js', 'Redux Toolkit', 'TanStack Query'],
                },
                {
                    role: 'Fullstack разработчик',
                    company: 'ZIZ INC.',
                    city: 'Астана',
                    period: 'Янв 2025 — Авг 2025',
                    points: [
                        'Разрабатывал и развивал клиентские сайты, в том числе сайт официального дилера Haval в Астане (mycarastana).',
                        'Разрабатывал CRM-системы: серверная часть на NestJS и Python, интерфейсы на React.',
                    ],
                    stack: ['NestJS', 'Python', 'React'],
                },
                {
                    role: 'Fullstack разработчик',
                    company: 'EPAM',
                    city: 'Астана',
                    period: 'Дек 2022 — Ноя 2024',
                    points: [
                        'Разрабатывал веб-платформы разного типа: CRM, SaaS и маркетплейсы.',
                        'Писал API на NestJS и клиентскую часть на React и TypeScript.',
                        'Реализовал real-time уведомления на WebSocket.',
                    ],
                    stack: ['NestJS', 'React', 'TypeScript', 'WebSocket'],
                },
            ],
        },
        skills: {
            title: 'Навыки',
            groups: {
                languages: 'Языки',
                backend: 'Backend',
                frontend: 'Frontend',
                state: 'State & Data',
                db: 'Базы данных',
                queues: 'Очереди и брокеры',
                tools: 'Инструменты',
                integrations: 'Интеграции',
            },
        },
        projects: {
            title: 'Проекты',
            nda: 'NDA',
            live: 'Открыть сайт',
            code: 'GitHub',
            items: [
                {
                    title: 'Платформа ж/д логистики КТТ',
                    tag: 'Smart System Technologies',
                    description:
                        'Корпоративная система управления железнодорожной логистикой для ҚазТемірТранс: React SPA, бэкенд на .NET, фоновые задачи и подписание документов ЭЦП через NCALayer.',
                    stack: ['C# / .NET', 'PostgreSQL', 'Hangfire', 'React', 'NCALayer'],
                },
                {
                    title: 'Crystal Auto (Haval)',
                    tag: 'ZIZ INC.',
                    description: 'Сайт официального дилера Haval в Астане.',
                    stack: ['Next.js', 'Zustand', 'Zod'],
                    image: '/haval.png',
                    link: 'https://www.carastana.com/',
                    github: 'https://github.com/Andas-LV/crystal_auto',
                },
                {
                    title: 'Any Parts',
                    tag: 'Pet-проект',
                    description: 'Маркетплейс запчастей для авто, мото и спецтехники. Проект, на котором осваивал Node.js и экосистему React.',
                    stack: ['React', 'Node.js'],
                    image: '/AnyParts.png',
                    link: 'https://any-parts.vercel.app/',
                    github: 'https://github.com/Andas-LV/any_parts',
                },
                {
                    title: 'Qorgau',
                    tag: 'Пожарная безопасность',
                    description: 'Городская система пожарной безопасности с интерактивной картой объектов.',
                    stack: ['Vue', 'Nuxt', 'Pinia', 'Vuetify', 'Google Maps'],
                    image: '/qorgau.png',
                    link: 'https://qorgau-city.kz/map/',
                },
            ],
        },
        contactsSection: {
            title: 'Контакты',
            text: 'Пишите по проектам и сотрудничеству — быстрее всего отвечаю в Telegram.',
            copy: 'Копировать',
            copied: 'Скопировано',
            education: 'Образование',
            educationValue: 'Astana International University',
            educationNote: 'Высшее, профильное (IT)',
            languages: 'Языки',
            languagesValue: 'Русский — свободно · English — B1',
            location: 'Город',
            locationValue: 'Астана / Алматы, Казахстан',
        },
        footer: 'Сделано на Next.js',
    },
    en: {
        nav: { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', contacts: 'Contacts' },
        hero: {
            badge: 'Currently at Smart System Technologies',
            name: 'Andas Satybaldy',
            role: 'Team Lead · Fullstack Developer',
            lead: 'Almost 4 years of commercial development. I own features end to end — from the database and API to the UI.',
            ctaPrimary: 'Message on Telegram',
            ctaSecondary: 'See experience',
        },
        about: {
            title: 'About',
            text: [
                'Fullstack developer, currently leading a team on a project for KazTemirTrans. On the backend I work with NestJS, C# / .NET and Python; on the frontend — React, Next.js and TypeScript.',
                'I have built CRMs, SaaS products and marketplaces, high-load systems and real-time notifications.',
            ],
            stats: [
                { value: '~4', label: 'years of commercial experience' },
                { value: '3', label: 'companies' },
                { value: 'Lead', label: 'of the KTT project team' },
            ],
        },
        experience: {
            title: 'Experience',
            now: 'present',
            jobs: [
                {
                    role: 'Team Lead / Fullstack Developer',
                    company: 'Smart System Technologies',
                    city: 'Astana',
                    period: 'Oct 2025 — present',
                    current: true,
                    points: [
                        'Lead the KazTemirTrans (KTT) project team: distribute tasks, run code reviews and own branch merging.',
                        'Build the backend with C# / .NET 6 and PostgreSQL, set up background jobs with Hangfire.',
                        'Develop enterprise React SPAs for railway logistics management under customer requirements and high load.',
                        'Integrated NCALayer for signing documents with digital signatures (EDS).',
                        'Moved analytics modules to a “thin component + custom hook” pattern — the code became easier to maintain and reuse.',
                    ],
                    stack: ['C# / .NET', 'PostgreSQL', 'Hangfire', 'React 18', 'TypeScript', 'Next.js', 'Redux Toolkit', 'TanStack Query'],
                },
                {
                    role: 'Fullstack Developer',
                    company: 'ZIZ INC.',
                    city: 'Astana',
                    period: 'Jan 2025 — Aug 2025',
                    points: [
                        'Built and evolved client websites, including the site of the official Haval dealer in Astana (mycarastana).',
                        'Developed CRM systems: backend on NestJS and Python, interfaces on React.',
                    ],
                    stack: ['NestJS', 'Python', 'React'],
                },
                {
                    role: 'Fullstack Developer',
                    company: 'EPAM',
                    city: 'Astana',
                    period: 'Dec 2022 — Nov 2024',
                    points: [
                        'Built web platforms of different kinds: CRMs, SaaS and marketplaces.',
                        'Wrote APIs on NestJS and the client side on React and TypeScript.',
                        'Implemented real-time notifications over WebSocket.',
                    ],
                    stack: ['NestJS', 'React', 'TypeScript', 'WebSocket'],
                },
            ],
        },
        skills: {
            title: 'Skills',
            groups: {
                languages: 'Languages',
                backend: 'Backend',
                frontend: 'Frontend',
                state: 'State & Data',
                db: 'Databases',
                queues: 'Queues & brokers',
                tools: 'Tools',
                integrations: 'Integrations',
            },
        },
        projects: {
            title: 'Projects',
            nda: 'NDA',
            live: 'Live site',
            code: 'GitHub',
            items: [
                {
                    title: 'KTT railway logistics platform',
                    tag: 'Smart System Technologies',
                    description:
                        'Enterprise railway logistics management system for KazTemirTrans: React SPA, .NET backend, background jobs and EDS document signing via NCALayer.',
                    stack: ['C# / .NET', 'PostgreSQL', 'Hangfire', 'React', 'NCALayer'],
                },
                {
                    title: 'Crystal Auto (Haval)',
                    tag: 'ZIZ INC.',
                    description: 'Website of the official Haval dealer in Astana.',
                    stack: ['Next.js', 'Zustand', 'Zod'],
                    image: '/haval.png',
                    link: 'https://www.carastana.com/',
                    github: 'https://github.com/Andas-LV/crystal_auto',
                },
                {
                    title: 'Any Parts',
                    tag: 'Pet project',
                    description: 'Marketplace of parts for cars, motorbikes and other vehicles. The project where I picked up Node.js and the React ecosystem.',
                    stack: ['React', 'Node.js'],
                    image: '/AnyParts.png',
                    link: 'https://any-parts.vercel.app/',
                    github: 'https://github.com/Andas-LV/any_parts',
                },
                {
                    title: 'Qorgau',
                    tag: 'Fire safety',
                    description: 'City fire safety system with an interactive map of facilities.',
                    stack: ['Vue', 'Nuxt', 'Pinia', 'Vuetify', 'Google Maps'],
                    image: '/qorgau.png',
                    link: 'https://qorgau-city.kz/map/',
                },
            ],
        },
        contactsSection: {
            title: 'Contacts',
            text: 'Reach out about projects and collaboration — Telegram is the fastest way to reach me.',
            copy: 'Copy',
            copied: 'Copied',
            education: 'Education',
            educationValue: 'Astana International University',
            educationNote: 'Bachelor’s degree, IT',
            languages: 'Languages',
            languagesValue: 'Russian — fluent · English — B1',
            location: 'Location',
            locationValue: 'Astana / Almaty, Kazakhstan',
        },
        footer: 'Built with Next.js',
    },
}
