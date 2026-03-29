<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__top">
        <div class="footer__brand">
          <p class="footer__name">Jared Bynum</p>
          <p class="footer__tagline">Political Strategist &amp; Organizer</p>
        </div>

        <nav class="footer__nav">
          <router-link to="/work" class="footer__link label">Work</router-link>
          <router-link to="/about" class="footer__link label">About</router-link>
          <router-link to="/contact" class="footer__link label">Contact</router-link>
        </nav>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">&copy; {{ currentYear }} Jared Bynum. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-gray-200);
  padding: var(--space-lg) 0 var(--space-md);
  margin-top: var(--space-2xl);
}

.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-lg);
}

.footer__name {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  margin-bottom: var(--space-xs);
}

.footer__tagline {
  color: var(--color-gray-600);
  font-size: 0.85rem;
}

.footer__nav {
  display: flex;
  gap: var(--space-md);
}

.footer__link {
  transition: color var(--transition-base);
}

.footer__link:hover {
  color: var(--color-accent);
}

.footer__bottom {
  border-top: 1px solid var(--color-gray-200);
  padding-top: var(--space-md);
}

.footer__copy {
  font-size: 0.75rem;
  color: var(--color-gray-400);
}

@media (max-width: 768px) {
  .footer__top {
    flex-direction: column;
    gap: var(--space-md);
  }
}
</style>
