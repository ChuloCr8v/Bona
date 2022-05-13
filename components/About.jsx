import styles from "../styles/About.module.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Stacks from "./Stacks";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Heading from "./Heading";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section data-aos="fade-up" className="" id={styles.about} >
      <div className={styles.container}>
        <Heading text={"About Me"} />
        <div className={styles.content_container}>
          <div className={styles.content} data-aos="fade-up">
            <p>
              {" "}
              Hello. I am Nkematu Bonaventure, a frontend developer with vast
              experience creating amazing user interfaces and user experience. I
              help individuals and brands improve their online presence through
              the creation of bespoke websites as well as SEO services.
            </p>
            <Link 
              href="/contact"
              data-aos="fade-up"
            >
              <a id={styles.portfolio_link} className="dark:text-gray-800 text-gray-200 dark:bg-gray-200 bg-gray-800 " >
             Hire Me <FaArrowRight className={styles.icon} />
              </a>
            </Link>
          </div>

          <div className={styles.stacks}>
            <h2
              className="text-center text-xl font-bold mb-6 "
              data-aos="fade-up"
            >
              Some Tools That I Work With
            </h2>
            <div className={styles.stack_icons}>
              {Stacks.map((stack) => (
                <figure data-aos="fade-up" key="index">
                  <img
                    src={stack.img}
                    alt={stack.name}
                    height="60"
                    width="60"
                    className={styles.stack_icon}
                  />
                  <figcaption>{stack.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
