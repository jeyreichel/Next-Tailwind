"use client";
import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={`${styles.main}`}>
      <section className={styles.section}>
        <div className={styles.section_getstarted}>
          <Link href={"/login"} className={styles.section_getstarted_btn}>
            Get Started
          </Link>
        </div>
        <div className={styles.section_social_btn}>
          <a href="tel:1234567890">
            <Image src="/images/landing/Email_black.svg" alt="Email Icon" />
          </a>
          <a href="https://instagram.com">
            <Image src="/images/landing/Insta_black.svg" alt="Instagram Icon" />
          </a>
          <a href="tel:1234567890">
            <Image src="/images/landing/Phone_black.svg" alt="Phone Icon" />
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
