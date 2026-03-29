<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const navLinks = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <router-link to="/" class="header__logo" @click="closeMenu">
        Jared Bynum
      </router-link>

      <button
        class="header__toggle"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span :class="['header__toggle-bar', { open: menuOpen }]" />
      </button>

      <nav :class="['header__nav', { 'header__nav--open': menuOpen }]">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="['header__link label', { active: route.path === link.to }]"
          @click="closeMenu"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(250, 250, 250, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-gray-200);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.header__logo {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.header__nav {
  display: flex;
  gap: var(--space-lg);
}

.header__link {
  position: relative;
  padding: var(--space-xs) 0;
  transition: color var(--transition-base);
}

.header__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-accent);
  transition: width var(--transition-base);
}

.header__link:hover::after,
.header__link.active::after {
  width: 100%;
}

.header__link.active {
  color: var(--color-accent);
}

.header__toggle {
  display: none;
  width: 28px;
  height: 20px;
  position: relative;
}

.header__toggle-bar,
.header__toggle-bar::before,
.header__toggle-bar::after {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--color-black);
  transition: all var(--transition-base);
  position: absolute;
}

.header__toggle-bar { top: 50%; }
.header__toggle-bar::before { content: ''; top: -8px; }
.header__toggle-bar::after { content: ''; top: 8px; }

.header__toggle-bar.open { background: transparent; }
.header__toggle-bar.open::before { top: 0; transform: rotate(45deg); }
.header__toggle-bar.open::after { top: 0; transform: rotate(-45deg); }

@media (max-width: 768px) {
  .header__toggle { display: block; }

  .header__nav {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-white);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-lg);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-base);
  }

  .header__nav--open {
    opacity: 1;
    pointer-events: all;
  }

  .header__link {
    font-size: 0.9rem;
  }
}
</style>
