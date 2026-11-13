<script setup lang="ts">
import PhotoPlaceholder from '@/components/shared/PhotoPlaceholder.vue'
import { bioParagraphs } from '@/data/about'
</script>

<template>
  <section class="bio">
    <div class="bio__inner container">
      <div class="bio__image">
        <PhotoPlaceholder
          src="/images/about-portrait.jpg"
          alt="Jared Bynum — portrait, environmental"
          aspect="3 / 4"
        />
      </div>

      <div class="bio__content">
        <span class="bio__label label accent">About</span>
        <h2 class="bio__title">
          Organizer. Strategist.<br />
          <em class="accent">Advocate.</em>
        </h2>
        <div class="bio__text">
          <p v-for="(para, i) in bioParagraphs" :key="i">{{ para }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bio {
  padding: var(--space-xl) 0;
}

.bio__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  align-items: start;
}

.bio__image {
  position: sticky;
  top: 100px;
}

.bio__label {
  display: block;
  margin-bottom: var(--space-sm);
}

.bio__title {
  margin-bottom: var(--space-md);
}

.bio__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  color: var(--color-gray-600);
  font-size: 0.95rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .bio__inner {
    grid-template-columns: 1fr;
  }

  .bio__image {
    position: static;
    max-width: 340px;
  }
}
</style>
