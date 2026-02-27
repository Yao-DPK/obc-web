import React from 'react';
import styles from './page.module.css';
import Navbar from '../src/components/navbar/navbar';
import Image from 'next/image';

export default function Home() { 
  return (
    <div className={styles.app_container}>
      <div className={styles.background_image}>
        <img src="./Fab.jpeg" alt="Background Image" />
        <div className={styles.background_overlay}></div>
      </div>

      <div className={styles.header}>
        <div className={styles.logo}>
          <Image 
            src="/OBC-nobg.png" 
            alt="OBC Logo" 
            width={100} 
            height={100} 
            className={styles.logo_image}
          />
        </div>
        <Navbar />
      </div>
      
      <div className={styles.content}>
        <p>
          BIENVENUE SUR LE SITE OFFICIEL DE L'OBC BASKET
        </p>
      </div>
    </div>
  );
}