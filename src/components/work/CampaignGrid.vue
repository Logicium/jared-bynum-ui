<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import CampaignCard from '@/components/work/CampaignCard.vue'
import { campaigns } from '@/data/campaigns'

const activeFilter = ref('All')

const filters = ['All', 'Policy Advocacy', 'Environmental', 'Social Justice']

const filteredCampaigns = computed(() => {
  if (activeFilter.value === 'All') return campaigns
  return campaigns.filter((c) => c.category === activeFilter.value)
})
</script>

<template>
  <section class="campaigns">
    <div class="container">
      <SectionHeading label="Campaigns & Organizing">
        Work That <em class="accent">Matters</em>
      </SectionHeading>

      <div class="campaigns__filters">
        <button
          v-for="filter in filters"
          :key="filter"
          :class="['campaigns__filter label', { active: activeFilter === filter }]"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <div class="campaigns__grid">
        <router-link
          v-for="campaign in filteredCampaigns"
          :key="campaign.slug"
          :to="`/work/${campaign.slug}`"
          class="campaigns__card-link"
        >
          <CampaignCard v-bind="campaign" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.campaigns {
  padding: var(--space-2xl) 0;
}

.campaigns__filters {
  display: flex;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
  flex-wrap: wrap;
}

.campaigns__filter {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray-200);
  color: var(--color-gray-600);
  transition: all var(--transition-base);
}

.campaigns__filter:hover,
.campaigns__filter.active {
  border-color: var(--color-black);
  color: var(--color-black);
}

.campaigns__filter.active {
  background: var(--color-black);
  color: var(--color-white);
}

.campaigns__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg) var(--space-md);
}

.campaigns__card-link {
  display: block;
}

@media (max-width: 768px) {
  .campaigns__grid {
    grid-template-columns: 1fr;
  }
}
</style>
