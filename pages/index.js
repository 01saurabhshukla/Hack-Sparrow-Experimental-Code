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
          <p style={{fontSize: "1.4rem"}}>Enjoy live results</p>
        </div>
      <div className={styles.imageBlock}>
        <div className={styles.videoContainer}>
           <img src="https://res.cloudinary.com/dmaoeqx1k/image/upload/v1711171767/EventBuzz/loa2dzygkftrm7beuhlz.png"  style={imageStyle} alt="Description of the image"  />
        </div>
      </div>
      <div className={styles.subtitleBlock}>
        <div className={styles.imageContainer}>
          <p style={{fontSize: "1.4rem"}}>Filter by demographic groups</p>
        </div>
      </div>
      <div className={styles.imageBlock}>
        <div className={styles.videoContainer}>
            <img src='https://res.cloudinary.com/dkmgxd9ef/video/upload/v1651173771/TortlePoll/Filter-polls_nmkd5d.mp4'  style={imageStyle} ></source>
          </video>
        </div>
      </div>
    </div>
  )
}
