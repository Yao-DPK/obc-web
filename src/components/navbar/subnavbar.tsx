"use client"

import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

type Props = {
  submenu: Array<{ label: string; url?: string }>;
  isVisible: boolean;
  parentLabel: string;
};

const SubNavbar: React.FC<Props> = ({ submenu, isVisible, parentLabel }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.sub_navbar}>
      <div className={styles.sub_navbar_container}>
        <h3 className={styles.sub_navbar_title}>{parentLabel}</h3>
        <ul className={styles.sub_navbar_links}>
          {submenu.map((item) => (
            <li key={item.label}>
              <Link href={item.url || '#'} className={styles.sub_navbar_link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubNavbar;