<script setup>
const categories = [
  {
    id: 'cultural',
    name: 'Cultural Couture',
    description: 'Celebrating traditional heritage with a modern twist.',
    icon: '🌍'
  },
  {
    id: 'streetwear',
    name: 'Urban Vanguard',
    description: 'Street-inspired aesthetics meeting high-end fashion.',
    icon: '🏢'
  },
  {
    id: 'formal',
    name: 'Gala Elegance',
    description: 'Sophisticated formal wear for the red carpet.',
    icon: '🎩'
  },
  {
    id: 'creative',
    name: 'Avant Garde',
    description: 'Pushing the boundaries of conventional design.',
    icon: '🎨'
  }
]
</script>

<template>
  <section id="categories" class="categories">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">The Collection</h2>
        <p class="section-subtitle">A curated exploration of diverse fashion disciplines.</p>
      </div>
      
      <div class="category-grid">
        <div v-for="cat in categories" :key="cat.id" class="category-card glass-morphism">
          <div class="category-icon-wrapper">
            <span class="category-icon">{{ cat.icon }}</span>
          </div>
          <div class="category-content">
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.description }}</p>
          </div>
          <div class="card-accent"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories {
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

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.category-card {
  padding: 48px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.category-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-glow);
  background: rgba(255, 255, 255, 0.05);
}

.category-icon-wrapper {
  width: 80px;
  height: 80px;
  background: var(--primary-surface);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.category-card:hover .category-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: var(--primary);
}

.category-icon {
  font-size: 2.5rem;
}

.category-content h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #fff;
}

.category-content p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.card-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--primary);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.category-card:hover .card-accent {
  transform: scaleX(1);
}
</style>
