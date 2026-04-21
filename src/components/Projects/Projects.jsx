import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../../data/index.js'
import styles from './Projects.module.css'

function ProjectIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill={color} opacity="0.18" />
      <rect x="10" y="10" width="12" height="12" rx="3" fill={color} opacity="0.6" />
      <rect x="26" y="10" width="12" height="12" rx="3" fill={color} opacity="0.4" />
      <rect x="10" y="26" width="12" height="12" rx="3" fill={color} opacity="0.4" />
      <rect x="26" y="26" width="12" height="12" rx="3" fill={color} opacity="0.6" />
    </svg>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.projects} id="projects" ref={ref}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.header}>
          <span className={styles.tag}>projects</span>
          <h2 className={styles.title}>Things I've built</h2>
          <p className={styles.sub}>
            Selected full-stack projects showing range across frontend, backend, and real-world use cases.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div
                className={styles.visual}
                style={{ background: project.color }}
              >
                <ProjectIcon color={project.iconColor} />
              </div>

              <div className={styles.body}>
                <div className={styles.stack}>
                  {project.stack.map((s) => (
                    <span key={s} className={styles.stackTag}>{s}</span>
                  ))}
                </div>
                <h3 className={styles.projTitle}>{project.title}</h3>
                <p className={styles.projDesc}>{project.description}</p>
                <div className={styles.links}>
                  <a href={project.demo} className={styles.projLink}>Live demo →</a>
                  <a href={project.github} className={styles.projLink}>GitHub →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
