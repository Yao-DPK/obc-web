"use client"

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Subnavbar.module.css';
import { navbar_items } from './navbar_data';

type Props = {
  parentLabel: string;
};

const SubNavbar: React.FC<Props> = ({ parentLabel }) => {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Trouver le parent et son sous-menu
  const parent = navbar_items.find(item => item.label === parentLabel);
  const submenu = parent?.submenu || [];

  if (submenu.length === 0) return null;

  return (
    <div className={styles.subnavbar}>
      <div className={styles.container}>
        {/* Nom de la section parente avec séparateur */}
        <div className={styles.parent_section}>
          <span className={styles.parent_name}>{parentLabel}</span>
          <div className={styles.separator}></div>
        </div>

        {/* Liens avec scroll horizontal */}
        <div className={styles.links_wrapper} ref={scrollRef}>
          {submenu.map((item) => (
            <Link
              key={item.label}
              href={item.url || '#'}
              className={`${styles.link} ${
                pathname === item.url ? styles.active : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;