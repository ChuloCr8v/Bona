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
      icon: <FaShoppingCart className={styles.icon} />, 
      title: 'Full Availability', 
      description: "I will always be there to attend to your concerns whenever you have any. I'm only a message away"
    }, 

  ]
  
  return (
    <section className={styles.services}>
      <Heading text={"My Promise To You"} />
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