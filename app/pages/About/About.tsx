import styles from './about.module.css'

export const About = () => {
    return (
        <div className={styles.container}>
            <p>
                I am an <span>software engineer</span>, i love programming very much, and i am currently engaged in front-end development.
                My passion for Internet technology and innovation drives me to constantly explore and learn.
                Becoming a entrepreneur in IT industry is my vision.
            </p>

            <p>
                I like challenges and freshness, which is one of the reasons why I work in the IT field.
                My skills include front-end development technologies such
                as <span>TypeScript</span>, <span>JavaScript</span>
                , <span>React</span> and <span>Vue</span>,
                and back-end development technologies such
                as  <span>Python</span>, <span>Django REST</span> and <span>Node JS</span>, i am constantly exploring more skills and frameworks to complete your own technology stack.
            </p>

            <p>
            Thank you for taking the time to get to know me, if you are interested in my experience and skills,
                please contact me.
                I am looking forward to the challenges and opportunities in the future, and believe that i can display
                my value and potential in this industry.
            </p>
        </div>
    )
}