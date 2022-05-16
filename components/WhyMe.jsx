import styles from "../styles/Services.module.scss";
import Heading from "./Heading";
import Image from 'next/image'

const Services = () => {
  const why = [
    {
      icon: "/images/response.svg",
      heading: "Responsive And Fluid Design",
      description:
        "I create websites that are designed and optimized to work across all devices. This includes mobile phones, tablets, laptops and widescreen computers. This will make your website easily accessible by anyone, no matter what device they are on.",
    },
    {
      icon: "/images/ui.svg",
      heading: "Clean & Modern UI",
      description:
        "I design some of the cleanest and elegant user interfaces that are guaranteed to afford your website visitors with a great and unique experience each time. This is defined in my choice of icons, fonts, pictures and other media, so as to ensure aesthetically attractive designs and delivery.",
    },
    {
      icon: "/images/fast.svg",
      heading: "Best Website Development Practices",
      description:
        "I make sure that my deliveries conform with the latest updates and best practices within the website development world. This inlcudes ensuring that your website has a faster load time while being light and easily accessible.",
    },
    {
      icon: "/images/seo.svg",
      heading: "Website SE0",
      description:
        "I create website contents that are SEO compliant and will rank your business on Google pages, giving you a wider outreach at the same time, targetting your desired customers.",
    },
  ];

  return (
    <section className={styles.services}>
      <Heading text={"Why Work With Me"} />
      <div className={styles.container}>
        {why.map((item) => (
          <div className={styles.service} key={item.heading}>
            <div className={styles.icon_wrapper}>
              <Image src={item.icon} alt={item.title} height="350" width="500" className={styles.icon} data-aos="fade-in" />
            </div>
            <h3 data-aos="fade-up" >{item.heading}</h3>
            <p data-aos="fade-up">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
