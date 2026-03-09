<script setup>
import { onMounted } from 'vue'
import JudgesSection from './components/JudgesSection.vue'
import CategorySection from './components/CategorySection.vue'
import FormsSection from './components/FormsSection.vue'

import logo from './assets/A2CS Logo.png'

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="app-container">
    <!-- Hero Section -->
    <header class="hero">
      <div class="hero-visuals">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="grid-overlay"></div>
      </div>
      
      <div class="container hero-inner">
        <div class="hero-content">
          <img :src="logo" alt="A2CS Logo" class="hero-logo reveal" />
          <div class="badge reveal">Fashion Forward 2026</div>
          <h1 class="main-title reveal">
            A2CS <span class="text-gradient">FASHION</span> SHOW
          </h1>
          <p class="subtitle reveal">
            A convergence of cultural heritage and futuristic boundary-pushing design. 
            Experience the next evolution of style.
          </p>
          <div class="cta-group reveal">
            <a href="#forms" class="btn-primary">Register Now</a>
            <a href="#about" class="btn-secondary">Explore Show</a>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <div class="mouse"></div>
        <p>Scroll to explore</p>
      </div>
    </header>

    <main>
      <section id="about" class="about-section">
        <div class="container reveal">
          <div class="about-grid">
            <div class="about-text glass-morphism">
              <h2 class="section-title-alt">The Vision</h2>
              <p>A2CS presents a groundbreaking fashion experience. This year, we're celebrating diversity, creativity, and the fusion of culture and style. Join us as we redefine the runway.</p>
            </div>
            <div class="about-stats glass-morphism">
              <div class="stat-item">
                <span class="stat-num">04</span>
                <span class="stat-label">Categories</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">12+</span>
                <span class="stat-label">Designers</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">500+</span>
                <span class="stat-label">Attendees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategorySection class="reveal" />
      <JudgesSection class="reveal" />
      <FormsSection class="reveal" />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img :src="logo" alt="A2CS Logo" class="footer-logo-img" />
          </div>
          <div class="footer-info">
            <p>&copy; 2026 A2CS Fashion Show. Crafted for the future.</p>
            <a href="https://github.com/ChiobiJason" target="_blank" class="trademark">built by jasonthe_dev</a>
          </div>
          <div class="footer-links">
            <a href="https://www.instagram.com/a2cseast" target="_blank">@a2cseast</a>
            <a href="https://linktr.ee/a2cs" target="_blank">Linktree</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  background-color: var(--bg-black);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0;
}

.hero-visuals {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.blob {
  position: absolute;
  width: 600px;
  height: 600px;
  background: var(--primary);
  filter: blur(120px);
  opacity: 0.15;
  border-radius: 50%;
  animation: blob-float 20s infinite alternate;
}

.blob-1 {
  top: -10%;
  right: -5%;
  background: var(--primary);
}

.blob-2 {
  bottom: -10%;
  left: -10%;
  background: #00ff88;
  animation-delay: -5s;
}

@keyframes blob-float {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(100px, 50px) scale(1.1); }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
}

.hero-inner {
  position: relative;
  z-index: 10;
}

.badge {
  display: inline-block;
  padding: 8px 16px;
  background: var(--primary-surface);
  border: 1px solid var(--primary-glow);
  border-radius: 100px;
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.main-title {
  font-size: clamp(3.5rem, 12vw, 8rem);
  line-height: 0.95;
  margin-bottom: 32px;
}

.text-gradient {
  background: linear-gradient(to right, #fff, var(--primary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-logo {
  height: 140px;
  width: auto;
  margin-bottom: 32px;
  border-radius: 20px;
  display: block;
}

.footer-logo-img {
  height: 50px;
  width: auto;
  border-radius: 8px;
}

.subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 48px;
  font-weight: 300;
}

.cta-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-secondary {
  padding: 16px 36px;
  border: 1px solid var(--glass-border);
  color: #fff;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  z-index: 10;
}

.mouse {
  width: 24px;
  height: 40px;
  border: 2px solid var(--text-muted);
  border-radius: 12px;
  position: relative;
}

.mouse::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 50%;
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
  transform: translateX(-50%);
  animation: mouse-scroll 2s infinite;
}

@keyframes mouse-scroll {
  0% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, 15px); }
}

/* About Section */
.about-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
}

.about-text {
  padding: 60px;
}

.section-title-alt {
  font-size: 2.5rem;
  margin-bottom: 24px;
  color: var(--primary);
}

.about-text p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.about-stats {
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  font-family: 'Outfit', sans-serif;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Footer */
.footer {
  padding: 80px 0;
  border-top: 1px solid var(--glass-border);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-logo {
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
}

.footer-info {
  text-align: center;
}

.footer p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.trademark {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.3s ease;
  margin-top: 4px;
  display: inline-block;
}

.trademark:hover {
  color: var(--primary);
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary);
}

@media (max-width: 968px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero-logo {
    height: 100px;
    margin-bottom: 24px;
  }
  .hero-inner {
    padding-bottom: 120px;
  }
  .cta-group {
    justify-content: center;
  }
}
</style>
