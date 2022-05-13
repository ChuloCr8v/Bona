import Head from 'next/head'
import Image from 'next/image'
/*import styles from '../styles/Home.module.css'*/
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyMe from '../components/WhyMe'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/contact'
import Promises from '../components/Promises'
import SocialButtons from '../components/SocialButtons'
import Testimonials from '../components/Testimonials'
import Cta from '../components/Cta'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Chex</title>
        <meta name="Devchex" content="Frontend Developer | JavaScript | ReactJs | NexJs" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main style={{overflow: 'hidden'}} >
        <Hero />
        <Services />
        <WhyMe />
        <About />
        <Projects />
        <Promises />
        <Testimonials />
        <Cta />
        <Contact />
        <SocialButtons />
      </main>
    </div>
  )
}