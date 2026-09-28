import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Experience.module.css'

const experience = [
  {
    title: 'Full-Stack Developer (Freelance)',
    period: '2026 — Present',
    sub: 'TelexTech · Contract Web & Mobile Projects',
    points: [
      'Built Kayzee Global Computer Networks, a live e-commerce and repair-booking site for a laptop sales and repair business.',
      'Built the front end of a client mobile banking app in React Native from a supplied developer guide and API spec.',
      'Take on contract work building web and mobile applications for clients, from requirements through deployment.',
      'Deploy to Vercel, Render, and Netlify; manage version control via GitHub.',
    ],
  },
  {
    title: 'Full-Stack Developer (Industrial Training)',
    period: 'Mar 2025 — Sep 2025',
    sub: 'Lesgilles IT Solutions · Software Development Agency',
    points: [
      'Contributed to client web and mobile applications built with Angular, Ionic, and Firebase during a six-month industrial training placement.',
      'Worked within an agency team on company projects.',
    ],
  },
  {
    title: 'Front-End Developer',
    period: '2022 — 2023',
    sub: 'Tiplogo Nigeria Limited',
    points: [
      'Built the company website (tiplogo.net) covering its business lines: seafood, logistics, LED lighting, ICT equipment, and a CBT services center.',
      'Built a standalone computer-based testing (CBT) application for students writing exams online.',
    ],
  },
]
export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.experience} id="experience" ref={ref}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.header}>
          <span className={styles.tag}>experience</span>
          <h2 className={styles.title}>Professional experience</h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((entry) => (
            <div key={entry.title} className={styles.entry}>
              <div className={styles.entryHead}>
                <h3 className={styles.entryTitle}>{entry.title}</h3>
                <span className={styles.entryPeriod}>{entry.period}</span>
              </div>
              <span className={styles.entrySub}>{entry.sub}</span>
              <ul className={styles.entryList}>
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}