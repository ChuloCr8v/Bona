import styles from '../styles/Testimonials.module.scss'
import Heading from './Heading'
import {FaQuoteLeft} from 'react-icons/fa'

const clients = [
    {
      name: 'Anah S.',
      comment: 'Great response and customer care. I also love how they deliver timely updates to keep you in the loop. Good job.', 
      img: '/client.jpg', 
      location: 'United States'
    },
    {
      name: 'James Q.',
      comment: 'They delivered according to specifics and within the agreed time. I highly recommend their services', 
      img: '/client1.jpg', 
      location: 'London'
    },
    {
      name: 'Amaka N.',
      comment: 'My blog was nicely designed by clever developers. I recommend their services.', 
      img: '/client2.jpg', 
      location: 'Lagos'
    },
    {
      name: 'Shop 24Seven.',
      comment: 'The Ecommerce website I paid for was delivered nicely and in time. Highly recommend. ', 
      img: '/client3.jpg', 
      location: 'Lagos'
    },
  ]

const Testimonials = () => { 
  return ( 
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <Heading text={'Testimonials'} />
          <div className={styles.wrapper}>
            {
              clients.map((testimony) => (
                <div className={styles.testimony} key={testimony.name}>
                  <FaQuoteLeft className={styles.icon} />
                  <p className={styles.comment}>{testimony.comment} </p>
                  <div className={styles.name_container}>
                    <p className={styles.name}>{testimony.name} </p>
                    <p className={styles.location}>{testimony.location} </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    ); 
  }; 
  
export default Testimonials 