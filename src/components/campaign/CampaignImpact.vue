<script setup lang="ts">
import type { Campaign } from '@/data/campaigns'

defineProps<{
  campaign: Campaign
}>()
</script>

<template>
  <section class="campaign-impact">
    <div class="container">
      <div class="campaign-impact__inner">
        <!-- Quote -->
        <blockquote
          v-if="campaign.quote"
          class="campaign-impact__quote"
        >
          <p class="campaign-impact__quote-text">"{{ campaign.quote }}"</p>
          <cite
            v-if="campaign.quoteAttribution"
            class="campaign-impact__cite"
          >
            — {{ campaign.quoteAttribution }}
          </cite>
        </blockquote>

        <!-- Impact metrics -->
        <div class="campaign-impact__results">
          <span class="campaign-impact__label label accent">Impact</span>
          <ul class="campaign-impact__list">
            <li
              v-for="(item, i) in campaign.impact"
              :key="i"
              class="campaign-impact__item"
            >
              <span class="campaign-impact__number">{{ String(i + 1).padStart(2, '0') }}</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.campaign-impact {
  padding: var(--space-xl) 0;
  background: var(--color-black);
  color: var(--color-white);
}

.campaign-impact__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.campaign-impact__quote {
  padding-left: var(--space-md);
  border-left: 2px solid var(--color-accent);
}

.campaign-impact__quote-text {
  font-family: var(--font-serif);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-style: italic;
  line-height: 1.5;
  margin-bottom: var(--space-sm);
}

.campaign-impact__cite {
  font-style: normal;
  font-size: 0.8rem;
  color: var(--color-gray-400);
}

.campaign-impact__label {
  display: block;
  margin-bottom: var(--space-md);
}

.campaign-impact__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.campaign-impact__item {
  display: flex;
  gap: var(--space-sm);
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-gray-200);
}

.campaign-impact__number {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--color-accent);
  line-height: 1;
  flex-shrink: 0;
  width: 2rem;
}

@media (max-width: 768px) {
  .campaign-impact__inner {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style>
