import React from 'react';
import styles from './navbar.module.css';

type Props = {
  submenu: Array<{ label: string; url?: string }>;
  isActive: boolean;
};

const Submenu: React.FC<Props> = ({ submenu, isActive }) => {
  return (
    <ul className={`${styles.submenu} ${isActive ? styles.active : ''}`}>
      {submenu.map((item) => (
        <li key={item.label}>
          <a href={item.url || '#'}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default Submenu;