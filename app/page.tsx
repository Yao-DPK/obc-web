'use client';

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import './page.css' // Create this CSS file

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => setIsLoading(false))
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Image 
              src="/OBC.jpeg" 
              alt="OBC Logo" 
              width={40} 
              height={40} 
              className="logo-image"
            />
            <span className="logo-text">OBC Website</span>
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">
            Bienvenue sur le site officiel de OBC
          </h1>
          <p className="hero-subtitle">
            Vous aurez ici accès à toutes les nouveautés du club.
          </p>
        </div>

        {/* Video Card */}
        <div className="video-card">
          <div className="video-card-content">
            {/* Video Player Section */}
            <div className="video-section">
              <h3 className="video-title">Vidéo</h3>
              
              {isLoading && (
                <div className="loading-container">
                  <div className="loading-spinner" />
                </div>
              )}
              
              <div className={`video-container ${isLoading ? 'hidden' : ''}`}>
                <video 
                  ref={videoRef}
                  className="video-player"
                  poster="/video-thumbnail.jpg"
                >
                  <source src="/Naya.mp4" type="video/mp4" />
                  <track 
                    kind="captions" 
                    src="/captions.vtt" 
                    srcLang="en" 
                    label="English" 
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Video Controls */}
                <div className="video-controls">
                  <button
                    onClick={togglePlay}
                    className="play-button"
                  >
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                </div>
              </div>

              {/* Video Description */}
              <div className="video-description">
                <h4>Résumé de la Vidéo</h4>
                <p>Naya Cours tchè</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2026 Site Web de OBC. Tout Droits Réservés.</p>
        </footer>
      </main>
    </div>
  )
}