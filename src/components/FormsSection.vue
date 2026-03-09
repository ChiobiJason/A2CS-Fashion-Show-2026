<script setup>
import { ref } from 'vue'

const activeForm = ref('model') // 'model' or 'volunteer'
const loading = ref(false)
const submitted = ref(false)

const formData = ref({
  name: '',
  email: '',
  category: '',
  songLink: ''
})

const submitForm = async () => {
  loading.value = true
  const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL
  
  if (!SCRIPT_URL || SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
    console.error('Apps Script URL not configured in .env')
    alert('Form submission is not configured. Please contact the administrator.')
    loading.value = false
    return
  }

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Common for Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData.value, formType: activeForm.value })
    })
    
    submitted.value = true
  } catch (error) {
    console.error('Submission failed:', error)
    alert('Failed to submit. Please try again later.')
  } finally {
    loading.value = false
  }
}

const resetForm = () => {
  submitted.value = false
  formData.value = {
    name: '',
    email: '',
    category: '',
    songLink: ''
  }
}
</script>

<template>
  <section id="forms" class="forms-section">
    <div class="container small-container">
      <div class="section-header">
        <h2 class="section-title">Join the Movement</h2>
        <p class="section-subtitle">Be part of the most anticipated fashion event of the year.</p>
      </div>
      
      <div class="form-toggle-wrapper glass-morphism">
        <button 
          :class="['toggle-btn', { active: activeForm === 'model' }]" 
          @click="activeForm = 'model'; resetForm()"
        >
          <span>Model Registration</span>
        </button>
        <button 
          :class="['toggle-btn', { active: activeForm === 'volunteer' }]" 
          @click="activeForm = 'volunteer'; resetForm()"
        >
          <span>Volunteer Corps</span>
        </button>
      </div>

      <div class="form-card glass-morphism">
        <div v-if="!submitted" class="form-content">
          <form @submit.prevent="submitForm" class="modern-form">
            <div class="form-row">
              <div class="input-group">
                <input type="text" v-model="formData.name" required placeholder=" " id="name" />
                <label for="name">Full Name</label>
                <div class="input-line"></div>
              </div>

              <div class="input-group">
                <input type="email" v-model="formData.email" required placeholder=" " id="email" />
                <label for="email">Email Address</label>
                <div class="input-line"></div>
              </div>
            </div>

            <div class="input-group">
              <select v-model="formData.category" required id="category">
                <option value="" disabled selected></option>
                <option value="cultural">Cultural Couture</option>
                <option value="streetwear">Urban Vanguard</option>
                <option value="formal">Gala Elegance</option>
                <option value="creative">Avant Garde</option>
              </select>
              <label for="category">Category Selection</label>
              <div class="input-line"></div>
            </div>

            <div v-if="activeForm === 'model'" class="input-group">
              <input type="url" v-model="formData.songLink" placeholder=" " id="song" />
              <label for="song">Song Submission Link (Spotify/SoundCloud)</label>
              <div class="input-line"></div>
              <small class="helper-text">Share the track you'd like to walk to.</small>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-primary full-width" :disabled="loading">
                <span v-if="!loading">Submit Application</span>
                <span v-else class="loader"></span>
              </button>
            </div>
          </form>
        </div>

        <div v-else class="success-screen">
          <div class="success-icon-wrapper">
            <div class="success-ring"></div>
            <span class="success-check">✓</span>
          </div>
          <h3>Application Received</h3>
          <p>Thank you for signing up. Our curation team will review your application and contact you shortly.</p>
          <button @click="resetForm" class="btn-secondary">Submit Another</button>
        </div>
      </div>

      <div class="social-footer reveal">
        <div class="instagram-card glass-morphism">
          <div class="insta-info">
            <span class="insta-tag">Follow us</span>
            <h3>@A2CS_Fashion</h3>
          </div>
          <div class="qr-box">
            <div class="qr-code-placeholder">
              <div class="qr-pattern"></div>
            </div>
            <p>Scan for updates</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.small-container {
  max-width: 800px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin: -60px auto 0;
}

/* Toggle Styling */
.form-toggle-wrapper {
  display: flex;
  padding: 6px;
  border-radius: 16px;
  margin-bottom: 40px;
  gap: 4px;
}

.toggle-btn {
  flex: 1;
  background: transparent;
  border: none;
  padding: 14px;
  border-radius: 12px;
  color: var(--text-secondary);
  font-weight: 600;
  font-family: 'Outfit', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.toggle-btn.active {
  color: #000;
  background: var(--primary);
  box-shadow: 0 4px 12px rgba(0, 255, 0, 0.2);
}

.toggle-btn:not(.active):hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

/* Form Styling */
.form-card {
  padding: 60px;
  margin-bottom: 80px;
}

.modern-form {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.input-group {
  position: relative;
  display: flex;
  flex-direction: column;
}

.input-group input, 
.input-group select {
  background: transparent;
  border: none;
  padding: 12px 0;
  color: #fff;
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;
  outline: none;
  width: 100%;
}

.input-group label {
  position: absolute;
  top: 12px;
  left: 0;
  color: var(--text-muted);
  transition: all 0.3s ease;
  pointer-events: none;
  font-size: 1.1rem;
}

.input-group input:focus ~ label,
.input-group input:not(:placeholder-shown) ~ label,
.input-group select:focus ~ label,
.input-group select:valid ~ label {
  top: -20px;
  left: 0;
  font-size: 0.85rem;
  color: var(--primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.input-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--glass-border);
  transition: all 0.3s ease;
}

.input-group input:focus ~ .input-line,
.input-group select:focus ~ .input-line {
  height: 2px;
  background: var(--primary);
  box-shadow: 0 2px 8px var(--primary-glow);
}

.helper-text {
  margin-top: 8px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.full-width {
  width: 100%;
}

/* Success Screen */
.success-screen {
  text-align: center;
  padding: 20px 0;
}

.success-icon-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 32px;
}

.success-ring {
  position: absolute;
  inset: 0;
  border: 4px solid var(--primary-surface);
  border-radius: 50%;
}

.success-check {
  font-size: 3rem;
  color: var(--primary);
  line-height: 100px;
}

.success-screen h3 {
  font-size: 2rem;
  margin-bottom: 16px;
  color: #fff;
}

.success-screen p {
  color: var(--text-secondary);
  margin-bottom: 40px;
  font-size: 1.1rem;
}

/* Instagram Card */
.social-footer {
  max-width: 600px;
  margin: 0 auto;
}

.instagram-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 48px;
}

.insta-tag {
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.insta-info h3 {
  font-size: 1.8rem;
  margin-top: 8px;
}

.qr-box {
  text-align: center;
}

.qr-code-placeholder {
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 8px;
}

.qr-pattern {
  width: 100%;
  height: 100%;
  background: repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 50% / 10px 10px;
  opacity: 0.8;
}

.qr-box p {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  .instagram-card {
    flex-direction: column;
    gap: 32px;
    text-align: center;
  }
}
</style>
