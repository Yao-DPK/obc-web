"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

interface GalleryProps {
  images: string[];
  altPrefix: string;
}

export default function Gallery({ images, altPrefix }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Navigation
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Ouvrir lightbox
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Fermer lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Gestion du swipe sur mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    
    setIsDragging(false);
  };

  // Pagination
  const goToPage = (index: number) => {
    if (galleryRef.current) {
      const scrollAmount = index * (galleryRef.current.clientWidth);
      galleryRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className={styles.gallery}>
        {/* Navigation flèches (optionnel, visible sur hover) */}
        <button 
          className={`${styles.nav_arrow} ${styles.nav_prev}`}
          onClick={() => goToPage(Math.max(0, currentIndex - 1))}
          aria-label="Image précédente"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button 
          className={`${styles.nav_arrow} ${styles.nav_next}`}
          onClick={() => goToPage(Math.min(images.length - 1, currentIndex + 1))}
          aria-label="Image suivante"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Grille de miniatures */}
        <div className={styles.thumbnail_grid}>
          {images.map((src, index) => (
            <div 
              key={index}
              className={`${styles.thumbnail_item} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToPage(index)}
            >
              <Image 
                src={src} 
                alt={`${altPrefix} - miniature ${index + 1}`}
                width={300}
                height={200}
                className={styles.thumbnail_image}
              />
            </div>
          ))}
        </div>

        {/* Image principale */}
        <div 
          className={styles.main_image_container}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={styles.main_image_wrapper}
            onClick={() => openLightbox(currentIndex)}
          >
            <Image 
              src={images[currentIndex]} 
              alt={`${altPrefix} ${currentIndex + 1}`}
              width={800}
              height={600}
              className={styles.main_image}
              priority
            />
            <div className={styles.main_image_overlay}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M8 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V16" 
                  stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                <path d="M21 3L15 9M21 3L18 3M21 3V6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Agrandir</span>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className={styles.pagination}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.pagination_dot} ${index === currentIndex ? styles.pagination_dot_active : ''}`}
              onClick={() => goToPage(index)}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Compteur */}
        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Lightbox (modale) */}
      {isLightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button 
            className={styles.lightbox_close}
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          
          <button 
            className={`${styles.lightbox_nav} ${styles.lightbox_prev}`}
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Image précédente"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div 
            className={styles.lightbox_content}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image 
              src={images[currentIndex]} 
              alt={`${altPrefix} ${currentIndex + 1}`}
              width={1200}
              height={900}
              className={styles.lightbox_image}
            />
          </div>

          <button 
            className={`${styles.lightbox_nav} ${styles.lightbox_next}`}
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Image suivante"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className={styles.lightbox_counter}>
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}