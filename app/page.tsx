import styles from './page.module.css'
import Title from './components/ReusableUI/Title'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Title title="Next with Carbon UI" />
      <Link href="/charts">
      <button className={styles.button}>Go to Charts</button>
      </Link>
    </main>
  )
}
