import Slider from '@/components/slider/Slider'
import styles from './page.module.css'
import HomeText from '@/components/homeText/HomeText'
import LogoSlider from '@/components/logoSlider/LogoSlider'

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider/>
      <HomeText/>
      {/* <LogoSlider/> */}
    </main>
  )
}
// 3B8L2PXS55