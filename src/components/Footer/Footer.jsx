import styles from './Footer.module.css'

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2025 Adejumo Olanrewaju</p>
      <div className={styles.links}>
        {['home', 'projects', 'contact'].map((link) => (
          <button key={link} className={styles.link} onClick={() => scrollTo(link === 'home' ? 'home' : link)}>
            {link}
          </button>
        ))}
      </div>
    </footer>
  )
}
