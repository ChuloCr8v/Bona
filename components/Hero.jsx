import styles from '../styles/Hero.module.scss'
import Image from 'next/image'
import heroImg from '../public/hero.svg'
import Html from '../public/html.png'
import Css from '../public/css.png'
import Sass from '../public/sass.png'
import Boostrap from '../public/boostrap.svg'
import Tailwind from '../public/tailwind.png'
import Js from '../public/js.png'
import React from '../public/react.png'
import Next from '../public/next.png'
import AOS from 'aos'
import "aos/dist/aos.css"
import Link from 'next/link'
import { useEffect } from 'react'

const Hero = () => {

  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  return (
    <section id={styles.hero} className="bg-white md:min-h-screen dark:bg-gray-900 pb-56" data-aos="fade-in" >
      <div className={styles.container}>

        <div className={styles.content_container && styles.hero_content_container}>

          <div className={styles.intro}>
            <p className={styles.h2}> Hi, </p>
            <h1 className="dark:text-gray-200">I&#39;m <span id={styles.name} className="text-transparent">Dev. Chex.<span id={styles.name} className="text-red-500">Dev. Chex. </span></span></h1>
          </div>
          <div className={styles.stacks}>
            <p> a website developer helping people turn their ideas into powerful websites that provides solutions and values to businesses and brands.</p>
            <div className={styles.btns} >
               <Link href="/services">
                <a className="text-gray-200 hover:text-gray-800 dark:hover:text-gray-200" id={styles.btn} >
                  Services
                </a>
               </Link>
               <Link href="/contact">
                <a className="dark:text-gray-200 text-gray-800 hover:text-gray-200 hover:dark:text-gray-200 " id={styles.btn_transparent}>
                  Hire me
                </a>
               </Link>
            </div>
            </div>
          </div>
      </div>

    </section>
  )
}

export default Hero