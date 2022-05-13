import styles from '../styles/Projects.module.scss'
import Project from './project'
import Image from 'next/image'
import Logo from '../public/logo.png'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Link from 'next/link'
import Heading from './Heading'
import {FaGlobe, FaGithub} from 'react-icons/fa' 

const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className={styles.projects}>
      <Heading text={"Projects"} />
      <div className={styles.container}>
        {Project.map((item, index) => (
          <div key="index" className=" rounded-xl text-gray-800 text-gray-800 dark:text-gray-200" id={styles.project} data-aos="fade-up">
            <img src={item.img} height={400} width={500} alt={item.name} />
            <div className="py-10">
              <h2 className="text-2xl font-black text-center mb-2">{item.title}</h2>
              <div className="mt-6 mb-4">
                <p>{item.description}</p>
              </div>
              <div className="flex justify-between align-center mt-6">
                <div className="">
                  <h3 id={styles.sub} className="relative text-xl mb-3">
                  <div className="border-2 bg-red-600  h-1 w-2 border-red-600 absolute left-0 bottom-0" ></div>
                    Built With 
                   </h3>
                  <li className="">{item.stackOne}</li>
                  <li className="">{item.stackTwo}</li>
                  <li className="">{item.stackThree}</li>
                </div>
                <div className="mt-8">
                  <a href={item.demo} target="_blank" rel="noopener noreferrer" className="rounded py-3 px-6 shadow-2xl bg-gray-800 text-gray-200 hover:scale-110" >View</a>
                </div>  
              </div>
             
            </div>
          </div>
        ))}
        {/*
        <div className={styles.hire} data-aos="fade">
          <Image src={Logo} height={300} width={400} alt="devchex projects" />
          <a href="#contact" target="_blank" rel="noopener noreferrer">Hire Me</a>
        </div>
        */}
      </div>
    </section>
  )
}

export default Projects

