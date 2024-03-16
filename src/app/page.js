import Slider from '@/components/slider/Slider'
import styles from './page.module.css'
import HomeText from '@/components/homeText/HomeText'


export default function Home() {
  return (
    <main className={styles.main}>
      <Slider/>
      <HomeText/>
    </main>
  )
}