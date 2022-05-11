import Head from 'next/head'
import Image from 'next/image'
/*import styles from '../styles/Home.module.css'*/
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyMe from '../components/WhyMe'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/contact'
import Resume from '../components/Resume'
import Promises from '../components/Promises'

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
        <Resume />
        <Services />
        <WhyMe />
        <About />
        <Projects />
        <Promises />
        <Contact />
      </main>
    </div>
  )
}