import React from "react";
import Heading from "../../Healper/Heading";
import ServiceCard from "./ServicesCard";
import styles from './services.module.css';

const Service = () => {
  return (
    <div className={styles.serviceContainer} id="Services">
      {/* Put heading component here */}
      <Heading
        headingPrimary="What value can I provide to clients"
        headingSub="Creative Services"
      />

      <div className={styles.contentGrid}>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            image="/images/icon4.png"
            title="Fronted Developer"
            descrpption="I provide custom web development for responsive and user-friendly websites"
          />
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ServiceCard
            image="/images/icon1.png"
            title="Web Developer"
            descrpption="I create innovative websites, ensuring responsive design, functionality, and optimal user experiences"
          />
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <ServiceCard
            image="/images/icon5.png"
            title="Next.js Developer"
            descrpption="As a Next.js developer, I build fast, scalable applications with dynamic features and optimization strategies"
          />
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="600">
          <ServiceCard
            image="/images/icon2.png"
            title="App Developer"
            descrpption="I build custom apps with intuitive design and seamless functionality, with intuitive design"
          />
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="800">
          <ServiceCard
            image="/images/icon3.png"
            title="React Developer"
            descrpption="As a React developer, I deliver custom web development, responsive design."
          />
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="1000">
          <ServiceCard
            image="/images/icon4.png"
            title="Backend Developer"
            descrpption="I develop robust backend solutions with efficient APIs, database management, and security."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
