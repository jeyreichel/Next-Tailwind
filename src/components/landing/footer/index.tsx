"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.main}`}>
      <section className={styles.section}>
        <div className={styles.section_text}>
          <p>offcom</p>
        </div>
        <div className={styles.section_social_btn}>
          <a href="tel:1234567890">
            <Image alt="Phone Icon Footer" src={`/images/landing/Phone.svg`} />
          </a>
          <a href="example@example.com">
            <Image alt="Email Icon Footer" src={"/images/landing/Email.svg"} />
          </a>
          <a href="https://linkedin.com">
            <Image
              alt="LinkedIn Icon Footer"
              src={`/images/landing/LinkedIn.svg`}
            />
          </a>
          <a href="https://instagram.com">
            <Image
              alt="Instagram Icon Footer"
              src={`/images/landing/Insta.svg`}
            />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
