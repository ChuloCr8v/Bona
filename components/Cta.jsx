
import styles from '../styles/Cta.module.scss'
import Link from 'next/link'
import Image from 'next/image'
const Cta = () => { 
  return ( 
      <section className="flex flex-col shadow-2xl" id={styles.cta} data-aos="slide-left" >
        <div className="container flex flex-col">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between ">
          <div className="flex flex-col align-center justify-center">
            <h2 className="text-4xl capitalize text-gray-200 font-black text-center mb-4">Have an amazing website project idea? </h2>
            <p className="text-center text-xl text-gray-300">Get in Touch and let us work on it together </p>
            
            <div className=" flex flex-col justify-center items-center ">
              <Link href="/contact">
                <a className="inline bg-gray-800 shadow-2xl rounded-2xl p-4 mt-10 text-center text-gray-200 text-md" >Get Started Now</a>
              </Link>
            </div>
          </div>
          <div className="img-wrapper hidden md:block ml-10" >
            <Image src="/images/hero.svg" alt="fast and affordable website development" height="500" width="600" />
          </div>
        </div>
        </div>
      </section>
    ); 
  }; 
  
export default Cta