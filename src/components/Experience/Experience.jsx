import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Experience.module.css'

const experience = [
  {
    title: 'Full-Stack Developer (Freelance)',
    period: '2023 — Present',
    sub: 'Various Client Projects',
    points: [
      'Built full-stack web applications for clients across business, education, and SaaS industries.',
      'Developed responsive, cross-browser-compatible UIs using React.js and Angular, integrating RESTful APIs and backend services built with Firebase',
      'Designed and managed MongoDB databases and Firebase/Firestore collections for real-time data handling and user authentication',
      'Collaborated directly with clients to gather requirements, define technical specs, and deliver production-ready solutions on time',
      'Deployed applications to Vercel, Render, and Netlify; managed version control via GitHub',
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