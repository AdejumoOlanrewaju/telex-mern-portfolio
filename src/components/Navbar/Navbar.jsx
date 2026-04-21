import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Navbar.module.css'

const links = ['about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.inner}>
        <div className={styles.navLayout}>
          <div className={styles.logo}>
            adejumo<span className={styles.dot}>.</span>
          </div>

          <div className={styles.links}>
            {links.map((link) => (
              <button key={link} className={styles.link} onClick={() => scrollTo(link)}>
                {link}
              </button>
            ))}
          </div>

          <button className={styles.hire} onClick={() => scrollTo('contact')}>
            hire me
          </button>

          <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? styles.barOpen1 : styles.bar} />
            <span className={menuOpen ? styles.barOpen2 : styles.bar} />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className={styles.mobileMenu}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {links.map((link) => (
                  <button key={link} className={styles.mobileLink} onClick={() => scrollTo(link)}>
                    {link}
                  </button>
                ))}
                <button className={styles.mobileHire} onClick={() => scrollTo('contact')}>
                  hire me
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}
