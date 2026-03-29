<script setup lang="ts">
</script>

<template>
  <div class="contact-info">
    <div class="contact-info__block">
      <span class="contact-info__label label accent">Email</span>
      <a href="mailto:hello@jaredbynum.com" class="contact-info__link">
        hello@jaredbynum.com
      </a>
    </div>

    <div class="contact-info__block">
      <span class="contact-info__label label accent">Based In</span>
      <p class="contact-info__text">Washington, D.C.</p>
      <p class="contact-info__subtext">Available nationally</p>
    </div>

    <div class="contact-info__block">
      <span class="contact-info__label label accent">Availability</span>
      <p class="contact-info__text">Currently accepting new engagements</p>
    </div>

    <div class="contact-info__block">
      <span class="contact-info__label label accent">Connect</span>
      <div class="contact-info__socials">
        <a href="#" class="contact-info__social">LinkedIn</a>
        <a href="#" class="contact-info__social">Twitter / X</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.contact-info__label {
  display: block;
  margin-bottom: var(--space-xs);
}

.contact-info__link {
  font-size: 1.1rem;
  border-bottom: 1px solid var(--color-gray-200);
  padding-bottom: 2px;
  transition: border-color var(--transition-base);
}

.contact-info__link:hover {
  border-color: var(--color-accent);
}

.contact-info__text {
  font-size: 0.95rem;
}

.contact-info__subtext {
  font-size: 0.8rem;
  color: var(--color-gray-400);
  margin-top: 2px;
}

.contact-info__socials {
  display: flex;
  gap: var(--space-sm);
}

.contact-info__social {
  font-size: 0.85rem;
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition-base);
}

.contact-info__social:hover {
  border-color: var(--color-accent);
}
</style>
