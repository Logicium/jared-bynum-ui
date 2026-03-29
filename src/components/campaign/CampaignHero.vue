<script setup lang="ts">
import PhotoPlaceholder from '@/components/shared/PhotoPlaceholder.vue'
import type { Campaign } from '@/data/campaigns'

defineProps<{
  campaign: Campaign
}>()
</script>

<template>
  <section class="campaign-hero">
    <div class="campaign-hero__image">
      <PhotoPlaceholder
        :src="campaign.image"
        :alt="`${campaign.title} — campaign`"
        aspect="21 / 9"
        :grayscale="false"
        :overlay="true"
      />
    </div>

    <div class="campaign-hero__overlay">
      <div class="container">
        <div class="campaign-hero__meta">
          <span class="campaign-hero__category label">{{ campaign.category }}</span>
          <span class="campaign-hero__divider">/</span>
          <span class="campaign-hero__year label">{{ campaign.year }}</span>
          <span class="campaign-hero__divider">/</span>
          <span class="campaign-hero__location label">{{ campaign.location }}</span>
        </div>
        <h1 class="campaign-hero__title">{{ campaign.title }}</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.campaign-hero {
  position: relative;
  margin-top: 72px;
  width: 100%;
}

.campaign-hero__image {
  height: 55vh;
  min-height: 400px;
  overflow: hidden;
  width: 100%;
}

.campaign-hero__image :deep(.photo) {
  height: 100% !important;
  aspect-ratio: unset !important;
  width: 100%;
}

.campaign-hero__image :deep(.photo__img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.campaign-hero__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-xl) 0 var(--space-lg);
  color: var(--color-white);
}

.campaign-hero__meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: var(--space-sm);
}

.campaign-hero__divider {
  color: var(--color-gray-400);
  font-size: 0.7rem;
}

.campaign-hero__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--color-white);
  max-width: 700px;
}

@media (max-width: 768px) {
  .campaign-hero__image {
    height: 40vh;
    min-height: 300px;
  }

  .campaign-hero__meta {
    flex-wrap: wrap;
  }
}
</style>
