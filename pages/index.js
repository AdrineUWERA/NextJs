import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Adu List | Home</title>
      <meta name="keywords" content="adu"/>
    </Head>
    <div >
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Culpa dolore minus cumque excepturi reiciendis. Vitae nemo tempora ut iusto temporibus? 
         Quis tenetur aliquam quam! Debitis fugiat voluptate mollitia placeat deserunt.
      </p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Culpa dolore minus cumque excepturi reiciendis. Vitae nemo tempora ut iusto temporibus? 
         Quis tenetur aliquam quam! Debitis fugiat voluptate mollitia placeat deserunt.
      </p>
      <Link href="/adu">
        <a className={styles.btn}>See Adu's List</a>      
      </Link>
    </div>
    </>
  )
}
