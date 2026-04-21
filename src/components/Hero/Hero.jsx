import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

function HeroGraphic() {
  return (
    <motion.div
      className={styles.graphic}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
    >
      <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="210" cy="210" r="170" fill="#5346dc" opacity="0.04" />
        <circle cx="210" cy="210" r="130" fill="#5346dc" opacity="0.04" />
        <circle cx="210" cy="210" r="90" fill="#5346dc" opacity="0.06" />

        <circle cx="210" cy="210" r="170" stroke="#5346dc" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.25" />
        <circle cx="210" cy="210" r="130" stroke="#5346dc" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.2" />

        <rect x="155" y="155" width="110" height="110" rx="22" fill="#5346dc" opacity="0.08" stroke="#5346dc" strokeWidth="0.75" />
        <rect x="167" y="167" width="86" height="86" rx="16" fill="#5346dc" opacity="0.12" />
        <text x="210" y="202" textAnchor="middle" fontFamily="monospace" fontSize="13" fill="#5346dc" opacity="0.9" fontWeight="600">&lt;/&gt;</text>
        <text x="210" y="220" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5346dc" opacity="0.55">full-stack</text>

        <rect x="54" y="72" width="72" height="36" rx="10" fill="#eeedfb" stroke="#5346dc" strokeWidth="0.75" />
        <text x="90" y="87" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#5346dc" fontWeight="600">React.js</text>
        <text x="90" y="100" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#5346dc" opacity="0.6">frontend</text>

        <rect x="294" y="72" width="72" height="36" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="0.75" />
        <text x="330" y="87" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#15803d" fontWeight="600">Node.js</text>
        <text x="330" y="100" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#16a34a" opacity="0.6">backend</text>

        <rect x="294" y="312" width="72" height="36" rx="10" fill="#fffbeb" stroke="#d97706" strokeWidth="0.75" />
        <text x="330" y="327" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#b45309" fontWeight="600">MongoDB</text>
        <text x="330" y="340" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#d97706" opacity="0.6">database</text>

        <rect x="54" y="312" width="72" height="36" rx="10" fill="#fff1f2" stroke="#e11d48" strokeWidth="0.75" />
        <text x="90" y="327" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#be123c" fontWeight="600">Firebase</text>
        <text x="90" y="340" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#e11d48" opacity="0.6">cloud</text>

        <rect x="168" y="44" width="64" height="28" rx="8" fill="#fdf4ff" stroke="#a21caf" strokeWidth="0.75" opacity="0.9" />
        <text x="200" y="62" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill="#86198f" fontWeight="600">Angular</text>

        <rect x="168" y="348" width="64" height="28" rx="8" fill="#eff6ff" stroke="#2563eb" strokeWidth="0.75" opacity="0.9" />
        <text x="200" y="366" textAnchor="middle" fontFamily="monospace" fontSize="8.5" fill="#1d4ed8" fontWeight="600">Express</text>

        <line x1="126" y1="96" x2="172" y2="162" stroke="#5346dc" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.35" />
        <line x1="294" y1="96" x2="248" y2="162" stroke="#16a34a" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.35" />
        <line x1="294" y1="322" x2="248" y2="258" stroke="#d97706" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.35" />
        <line x1="126" y1="322" x2="172" y2="258" stroke="#e11d48" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.35" />
        <line x1="200" y1="72" x2="205" y2="155" stroke="#a21caf" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.3" />
        <line x1="200" y1="348" x2="205" y2="265" stroke="#2563eb" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.3" />

        <circle cx="90" cy="195" r="4" fill="#5346dc" opacity="0.3" />
        <circle cx="90" cy="210" r="4" fill="#5346dc" opacity="0.5" />
        <circle cx="90" cy="225" r="4" fill="#5346dc" opacity="0.7" />
        <circle cx="330" cy="195" r="4" fill="#5346dc" opacity="0.7" />
        <circle cx="330" cy="210" r="4" fill="#5346dc" opacity="0.5" />
        <circle cx="330" cy="225" r="4" fill="#5346dc" opacity="0.3" />

        <circle cx="160" cy="120" r="3" fill="#5346dc" opacity="0.2" />
        <circle cx="260" cy="120" r="3" fill="#5346dc" opacity="0.2" />
        <circle cx="160" cy="300" r="3" fill="#5346dc" opacity="0.2" />
        <circle cx="260" cy="300" r="3" fill="#5346dc" opacity="0.2" />
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="home">
      <div className={styles.inner}>
        <div className={styles.heroLayout}>
          <div className={styles.content}>
            <motion.div className={styles.status} {...fade(0.1)}>
              <span className={styles.greenDot} />
              available for new work
            </motion.div>

            <motion.h1 className={styles.heading} {...fade(0.2)}>
              Full-stack developer<br />
              based in <span className={styles.accent}>Lagos.</span>
            </motion.h1>

            <motion.p className={styles.desc} {...fade(0.3)}>
              I'm <strong>Adejumo Olanrewaju</strong> — I build scalable web products from UI
              to API using React, Node.js, MongoDB, and Firebase. 3+ years turning ideas into
              production-ready software.
            </motion.p>

            <motion.div className={styles.actions} {...fade(0.4)}>
              <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
                View projects
              </button>
              <button className={styles.btnGhost} onClick={() => scrollTo('contact')}>
                Get in touch
              </button>
            </motion.div>

            <motion.div className={styles.stats} {...fade(0.5)}>
              {[
                { num: '3+', label: 'Years experience' },
                { num: '10+', label: 'Projects shipped' },
                { num: '5', label: 'Core technologies' },
              ].map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <HeroGraphic />

        </div>

      </div>
    </section>
  )
}
