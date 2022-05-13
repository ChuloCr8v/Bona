import styles from "../styles/Services.module.scss";
import { FaGlobe, FaShoppingCart, FaPen, FaBlog, FaSuitcase, FaNewspaper} from "react-icons/fa";
import Heading from "./Heading";
import Image from 'next/image'
const Services = () => {
  
  const service = [
    {
      icon: "/images/hero.svg", 
      title: 'Website Development/Re-Design ', 
      description: 'I design and develop highly responsive, beautiful and scalable websites for all businesses and organisations. I also improve already exisiting websites for faster loading time and improved modern appearance.'
    }, 
    {
      icon: "/images/shop.svg", 
      title: 'Ecommerce Store Development ', 
      description: 'I design and develop online shopping platforms for your online businesses, enabling you to target customers throughout the globe. My tools include various ecommerce platforms including WooCommerce, Shopify, BigCommerce and other platforms of your choice.'
    }, 
    {
      icon: "/images/landing.svg", 
      title: 'Blog Website Development', 
      description: 'I build fast and efficient news delivery websites across all niches. Be it a news website or a personal blog website, I got you covered.'
    }, 
    {
      icon: "/images/portfolio.svg", 
      title: 'Portfolio Website Development', 
      description: 'whatever service you offer, I can create the perfect portfolio website to sell you across to your target audience. I will equip your portfolio website to get your profession across in the right manner.'
    },  
    {
      icon: "/images/blog.svg", 
      title: 'Landing Page Development', 
      description: "Landing pages are essential for selling your products to your customers online. Doing the right way will deliver even better results, engagements and clients."
    }, 

  ]
  
  return (
    <section className={styles.services}>
      <Heading text={"What I do"} />
      <div className={styles.container}>
        {service.map(item => ( 
          <div className={styles.service} key={item.title}>
            <div className={styles.icon_wrapper}>
              <Image src={item.icon} alt={item.title} height="350" width="500" className={styles.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}  
      </div>
    </section>
  );
};

export default Services;