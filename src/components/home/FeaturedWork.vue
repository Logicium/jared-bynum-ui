<script setup lang="ts">
import { content } from '@/data/site'
import PhotoPlaceholder from '@/components/shared/PhotoPlaceholder.vue'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import CallToAction from '@/components/shared/CallToAction.vue'
import { campaigns } from '@/data/campaigns'

const featured = campaigns.slice(0, 3)
</script>

<template>
  <section class="featured">
    <div class="container">
      <SectionHeading :label="content.featured.label">
        {{ content.featured.titleLead }}
        <em class="accent">{{ content.featured.titleAccent }}</em>
        {{ content.featured.titleTrail }}
      </SectionHeading>

      <div class="featured__grid">
        <router-link
          v-for="campaign in featured"
          :key="campaign.slug"
          :to="`/work/${campaign.slug}`"
          class="featured__card"
        >
          <PhotoPlaceholder
            :src="campaign.image"
            :alt="`${campaign.title} — campaign photo`"
            aspect="4 / 3"
            :grayscale="false"
          />
          <div class="featured__info">
            <span class="featured__category label">{{ campaign.category }}</span>
            <h3 class="featured__title">{{ campaign.title }}</h3>
            <p class="featured__desc">{{ campaign.description }}</p>
          </div>
        </router-link>
      </div>

      <div class="featured__cta">
        <CallToAction to="/work" variant="outline">All Campaigns</CallToAction>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured {
  padding: var(--space-2xl) 0;
}

.featured__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.featured__card {
  display: block;
  transition: transform var(--transition-base);
}

.featured__card:hover {
  transform: translateY(-4px);
}

.featured__info {
  padding: var(--space-sm) 0;
}

.featured__category {
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-xs);
}

.featured__title {
  margin-bottom: var(--space-xs);
}

.featured__desc {
  font-size: 0.9rem;
  color: var(--color-gray-600);
  line-height: 1.6;
}

.featured__cta {
  text-align: center;
  margin-top: var(--space-lg);
}

@media (max-width: 768px) {
  .featured__grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style>
