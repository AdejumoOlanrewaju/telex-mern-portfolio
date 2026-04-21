import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../../data/index.js'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.header}>
          <span className={styles.tag}>skills</span>
          <h2 className={styles.title}>What I work with</h2>
          <p className={styles.sub}>A full-stack toolkit built over 3+ years of real projects.</p>
        </div>

        <div className={styles.grid}>
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className={styles.group}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
            >
              <span className={styles.groupTitle}>{group.category}</span>
              <div className={styles.tags}>
                {group.items.map((item) => (
                  <span key={item} className={styles.tag2}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
