import styles from '../styles/SocialButtons.module.scss'
import {FaEnvelope, FaWhatsapp} from 'react-icons/fa'

const SocialButtons = () => { 
  
  const buttons = [
    {
      title: 'Send WhatsApp Message', 
      background: '#00d700', 
      link: 'https://wa.me/2348138369977', 
      icon: <FaWhatsapp className={styles.icon} />, 
    }, 
    {
      title: 'Send Email Message', 
      background: '#ff4242', 
      link: 'mailto:cleverdeveloper360@gmail.com',
      icon: <FaEnvelope className={styles.icon} />, 
    }, 
  ]
  
  
  return ( 
      <section className={styles.button_wrapper}>
       {buttons.map(button => (
          <a href={button.link} target="_blank" rel="noopener noreferrer" className={styles.btn} style={{background: `${button.background}`}} key={button.title}>
            {button.icon}
          </a>
        ))}
      </section>
    ); 
  }; 
  
export default SocialButtons