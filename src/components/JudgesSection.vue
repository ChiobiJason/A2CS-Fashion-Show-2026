<script setup>
const judges = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Creative Director',
    bio: 'Renowned for blending tech with traditional textiles.',
    age: '30s',
    gender: 'Female',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Fashion Stylist',
    bio: 'Expert in urban luxury and minimalist aesthetics.',
    age: '40s',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Sustainable Design Advocate',
    bio: 'Pioneer in eco-friendly couture and social impact.',
    age: '50s',
    gender: 'Female',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: 'David Okafor',
    role: 'Model & Brand Consultant',
    bio: 'Championing African-inspired modernist fashion.',
    age: '20s',
    gender: 'Male',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  }
]
</script>

<template>
  <section id="judges" class="judges">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">The Curators</h2>
        <p class="section-subtitle">Meet the visionary experts shaping this year's standards of excellence.</p>
      </div>
      
      <div class="judges-grid">
        <div v-for="judge in judges" :key="judge.id" class="judge-card glass-morphism">
          <div class="judge-image-wrapper">
            <img :src="judge.image" :alt="judge.name" class="judge-image" />
            <div class="judge-overlay">
              <div class="judge-meta">
                <span>{{ judge.age }}</span>
                <span class="dot"></span>
                <span>{{ judge.gender }}</span>
              </div>
            </div>
          </div>
          <div class="judge-info">
            <p class="role">{{ judge.role }}</p>
            <h3>{{ judge.name }}</h3>
            <p class="bio">{{ judge.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.judges {
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin: -60px auto 0;
}

.judges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.judge-card {
  padding: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--glass-border);
}

.judge-card:hover {
  transform: translateY(-12px);
  border-color: var(--primary-glow);
  box-shadow: 0 20px 40px rgba(0, 255, 0, 0.1);
}

.judge-image-wrapper {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.judge-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.judge-card:hover .judge-image {
  transform: scale(1.1);
}

.judge-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 24px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.judge-card:hover .judge-overlay {
  opacity: 1;
}

.judge-meta {
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 4px;
  height: 4px;
  background: var(--primary);
  border-radius: 50%;
}

.judge-info {
  padding: 32px;
}

.role {
  color: var(--primary);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}

.judge-info h3 {
  font-size: 1.75rem;
  margin-bottom: 16px;
  color: #fff;
}

.bio {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
