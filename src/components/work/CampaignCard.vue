<script setup lang="ts">
import PhotoPlaceholder from '@/components/shared/PhotoPlaceholder.vue'

interface Props {
  title: string
  category: string
  year: string
  description: string
  image?: string
  tags: string[]
}

defineProps<Props>()
</script>

<template>
  <article class="campaign-card">
    <div class="campaign-card__image">
      <PhotoPlaceholder
        :src="image"
        :alt="`${title} — campaign photo`"
        aspect="4 / 3"
        :overlay="true"
        :grayscale="false"
      />
      <span class="campaign-card__year label">{{ year }}</span>
    </div>

    <div class="campaign-card__body">
      <span class="campaign-card__category label">{{ category }}</span>
      <h3 class="campaign-card__title">{{ title }}</h3>
      <p class="campaign-card__desc">{{ description }}</p>
      <div class="campaign-card__tags">
        <span
          v-for="tag in tags"
          :key="tag"
          class="campaign-card__tag label"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.campaign-card {
  display: block;
  transition: transform var(--transition-base);
}

.campaign-card:hover {
  transform: translateY(-4px);
}

.campaign-card__image {
  position: relative;
  margin-bottom: var(--space-sm);
}

.campaign-card__year {
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  color: var(--color-white);
  background: rgba(10, 10, 10, 0.6);
  padding: 0.3rem 0.6rem;
}

.campaign-card__body {
  padding: var(--space-xs) 0;
}

.campaign-card__category {
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-xs);
}

.campaign-card__title {
  margin-bottom: var(--space-xs);
}

.campaign-card__desc {
  font-size: 0.9rem;
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: var(--space-sm);
}

.campaign-card__tags {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.campaign-card__tag {
  font-size: 0.6rem;
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-200);
  padding: 0.2rem 0.5rem;
}
</style>
