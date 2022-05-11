import styles from "../styles/Services.module.scss";
import { FaDesktop } from "react-icons/fa";
import Heading from "./Heading";

const Services = () => {
  const why = [
    {
      icon: <FaDesktop className={styles.icon} />,
      heading: "Responsive And Fluid Design",
      description:
        "I create websites that are designed and optimized to work across all devices. This includes mobile phones, tablets, laptops and widescreen computers. This will make your website easily accessible by anyone, no matter what device they are on.",
    },
    {
      icon: <FaDesktop className={styles.icon} />,
      heading: "Clean & Modern UI",
      description:
        "I design some of the cleanest and elegant user interfaces that are guaranteed to afford your website visitors with a great and unique experience each time. This is defined in my choice of icons, fonts, pictures and other media, so as to ensure aesthetically attractive designs and delivery.",
    },
    {
      icon: <FaDesktop className={styles.icon} />,
      heading: "Best Website Development Practices",
      description:
        "I make sure that my deliveries conform with the latest updates and best practices within the website development world. This inlcudes ensuring that your website has a faster load time while being light and easily accessible.",
    },
    {
      icon: <FaDesktop className={styles.icon} />,
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
            <div className={styles.icon_wrapper}>{item.icon}</div>
            <h3>{item.heading}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
