import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Contact.module.css'

const contactLinks = [
  {
    label: 'olanrewajuadejumo56@gmail.com',
    href: 'mailto:olanrewajuadejumo56@gmail.com',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: 'github.com/adejumoolanrewaju',
    href: 'https://github.com/AdejumoOlanrewaju',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'linkedin.com/in/adejumo',
    href: 'https://linkedin.com/in/olanrewaju-adejumo-47375328b/',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.block}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Open to work.<br />Let's talk.
            </h2>
            <p className={styles.sub}>
              Freelance projects, remote roles, international teams — I'm ready.
            </p>
          </div>

          <div className={styles.right}>
            {contactLinks.map((c) => (
              <a key={c.label} href={c.href} className={styles.link} target='_blank'>
                {c.icon}
                {c.label}
              </a>
            ))}
            <a href="mailto:olanrewajuadejumo56@gmail.com" className={styles.cta}>
              Send a message
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
