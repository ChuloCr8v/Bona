import styles from "../styles/Services.module.scss";
import Image from "next/image";
import Heading from "./Heading";

const Promises = () => {
  
  const promise = [
    {
      icon: "/images/comm.svg", 
      title: 'Great Communication ', 
      description: 'Communication is the bedrock of any successful transaction. I promise to keep you up to date with progresses along the way, as well as listen attentively to whatever you have to say.'
    }, 
    {
      icon:"/images/delivery.svg", 
      title: 'Fast Delivery', 
      description: 'I have a passion for meeting up with deadlines. I promise to have your delivery ready before the due date and time. I understand the importance of meeting up in time for any business.'
    }, 
    {
      icon: "/images/available.svg", 
      title: 'Full Availability', 
      description: "I will always be there to attend to your concerns whenever you have any. I'm only a message away"
    }, 

  ]
  
  return (
    <section className={styles.services}>
      <Heading text={"My Guarantees"} />
      <div className={styles.container}>
        {promise.map(item => ( 
          <div className={styles.service} key={item.title}>
            <div className={styles.icon_wrapper}>
              <img src={item.icon} alt={item.title} height="350" width="500" className={styles.icon} data-aos="fade-in" />
            </div>
            <h3 data-aos="fade-up" >{item.title}</h3>
            <p data-aos="fade-up" >{item.description}</p>
          </div>
        ))}  
      </div>
    </section>
  );
};

export default Promises;