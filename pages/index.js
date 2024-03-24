import { useRouter } from "next/router";
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import pollImage from '../public/home-images/Poll-pic.PNG'

export default function Home() {  

  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      <div className={styles.subtitleBlock}>
          <p style={{fontSize: "1.4rem"}}>Enjoy results</p>
        </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageBlock}>
           <img src={"https://res.cloudinary.com/dmaoeqx1k/image/upload/v1711236084/EventBuzz/odlcoeaouljeuasjehhd.png"} className={styles.imageContainer} alt="Description of the image"  />
        </div>
      </div>
      <div className={styles.subtitleBlock}>
        <div className={styles.imageContainer}>
          <p style={{fontSize: "1.4rem"}}>Filter by demographic groups</p>
        </div>
      </div>
      <div className={styles.imageBlock}>
        <div className={styles.imageBlock}>
            <img src={"https://res.cloudinary.com/dmaoeqx1k/image/upload/v1711236084/EventBuzz/sb5qwbg5orta7uh6ju79.png"} className={styles.imageContainer} alt="Description of the image" />
        </div>
      </div>
    </div>
  )
}
