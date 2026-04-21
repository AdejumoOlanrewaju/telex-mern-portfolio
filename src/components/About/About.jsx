import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

const cards = [
  { title: 'Frontend', desc: 'React, Angular (Signals), responsive UI, component systems' },
  { title: 'Backend & APIs', desc: 'Node.js, Express, RESTful APIs, JWT authentication' },
  { title: 'Database & Cloud', desc: 'MongoDB, Firebase, Firestore, real-time data' },
  { title: 'Open to', desc: 'Freelance projects, remote full-time, international teams' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.about} id="about" ref={ref}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.header}>
          <span className={styles.tag}>about</span>
          <h2 className={styles.title}>The person behind the code</h2>
        </div>

        <div className={styles.cols}>
          <div className={styles.copy}>
            <p>
              I'm a Lagos-based full-stack JavaScript developer with 3+ years of experience
              building web applications across the entire stack — from pixel-perfect
              frontends to robust, scalable APIs.
            </p>
            <p>
              I specialise in React and Angular on the frontend, and Node.js with Express
              and MongoDB on the backend. I've also built real-time and serverless
              applications with Firebase and Firestore.
            </p>
            <p>
              I care deeply about clean code, performance, and user experience. Whether
              working solo or within a team, I bring structure, clarity, and a product
              mindset to every project I touch.
            </p>
          </div>

          <div className={styles.cards}>
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                className={styles.card}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
              >
                <h4 className={styles.cardTitle}>{c.title}</h4>
                <p className={styles.cardDesc}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
