<script setup lang="ts">
import type { Campaign } from '@/data/campaigns'

defineProps<{
  campaign: Campaign
}>()
</script>

<template>
  <section class="campaign-body">
    <div class="container">
      <!-- Sidebar stats + main content layout -->
      <div class="campaign-body__grid">
        <aside class="campaign-body__sidebar">
          <div class="campaign-body__stat">
            <span class="campaign-body__stat-label label accent">Duration</span>
            <span class="campaign-body__stat-value">{{ campaign.duration }}</span>
          </div>
          <div class="campaign-body__stat">
            <span class="campaign-body__stat-label label accent">Location</span>
            <span class="campaign-body__stat-value">{{ campaign.location }}</span>
          </div>
          <div class="campaign-body__stat">
            <span class="campaign-body__stat-label label accent">Focus</span>
            <span class="campaign-body__stat-value">{{ campaign.category }}</span>
          </div>
          <div class="campaign-body__tags">
            <span class="campaign-body__stat-label label accent">Disciplines</span>
            <div class="campaign-body__tag-list">
              <span
                v-for="tag in campaign.tags"
                :key="tag"
                class="campaign-body__tag label"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </aside>

        <div class="campaign-body__content">
          <div class="campaign-body__section">
            <h2 class="campaign-body__heading">Overview</h2>
            <p>{{ campaign.overview }}</p>
          </div>

          <div class="campaign-body__section">
            <h2 class="campaign-body__heading">The Challenge</h2>
            <p>{{ campaign.challenge }}</p>
          </div>

          <div class="campaign-body__section">
            <h2 class="campaign-body__heading">The Approach</h2>
            <p>{{ campaign.approach }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.campaign-body {
  padding: var(--space-xl) 0;
}

.campaign-body__grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.campaign-body__sidebar {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  border-right: 1px solid var(--color-gray-200);
  padding-right: var(--space-md);
}

.campaign-body__stat-label {
  display: block;
  margin-bottom: 4px;
}

.campaign-body__stat-value {
  font-size: 0.95rem;
}

.campaign-body__tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: 4px;
}

.campaign-body__tag {
  font-size: 0.6rem;
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-200);
  padding: 0.2rem 0.5rem;
}

.campaign-body__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.campaign-body__heading {
  font-size: 1.5rem;
  margin-bottom: var(--space-sm);
}

.campaign-body__content p {
  color: var(--color-gray-600);
  font-size: 0.95rem;
  line-height: 1.85;
}

@media (max-width: 768px) {
  .campaign-body__grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .campaign-body__sidebar {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    border-right: none;
    border-bottom: 1px solid var(--color-gray-200);
    padding-right: 0;
    padding-bottom: var(--space-md);
    gap: var(--space-md) var(--space-lg);
  }
}
</style>
