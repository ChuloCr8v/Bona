import styles from "../styles/Services.module.scss";
import { FaGlobe, FaShoppingCart, FaPen, FaBlog, FaSuitcase, FaNewspaper} from "react-icons/fa";
import Heading from "./Heading";

const Promises = () => {
  
  const promise = [
    {
      icon: <FaGlobe className={styles.icon} />, 
      title: 'Great Communication ', 
      description: 'Communication is the bedrock of any successful transaction. I promise to keep you up to date with progresses along the way, as well as listen attentively to whatever you have to say.'
    }, 
    {
      icon: <FaShoppingCart className={styles.icon} />, 
      title: 'Fast Delivery', 
      description: 'I have a passion for meeting up with deadlines. I promise to have your delivery ready before the due date and time. I understand the importance of meeting up in time for any business.'
    }, 
    {
      icon: <FaBlog className={styles.icon} />, 
      title: 'Blog Website Development', 
      description: 'I build fast and efficient news delivery websites across all niches. Be it a news website or a personal blog website, I got you covered.'
    }, 
    {
      icon: <FaNewspaper className={styles.icon} />, 
      title: 'Portfolio Website Development', 
      description: 'whatever service you offer, I can create the perfect portfolio website to sell you across to your target audience. I will equip your portfolio website to get your profession across in the right manner.'
    },  
    {
      icon: <FaSuitcase className={styles.icon} />, 
      title: 'Landing Page Development', 
      description: "Landing pages are essential for selling your products to your customers online. Doing the right way will deliver even better results, engagements and clients."
    }, 

  ]
  
  return (
    <section className={styles.services}>
      <Heading text={"What I do"} />
      <div className={styles.container}>
        {promise.map(item => ( 
          <div className={styles.service} key={item.title}>
            <div className={styles.icon_wrapper}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}  
      </div>
    </section>
  );
};

export default Promises;