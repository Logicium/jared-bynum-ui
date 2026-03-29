<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getCampaignBySlug, campaigns } from '@/data/campaigns'
import CampaignHero from '@/components/campaign/CampaignHero.vue'
import CampaignBody from '@/components/campaign/CampaignBody.vue'
import CampaignImpact from '@/components/campaign/CampaignImpact.vue'
import CallToAction from '@/components/shared/CallToAction.vue'

const route = useRoute()

const campaign = computed(() =>
  getCampaignBySlug(route.params.slug as string)
)

const adjacentCampaigns = computed(() => {
  if (!campaign.value) return { prev: null, next: null }
  const idx = campaigns.findIndex((c) => c.slug === campaign.value!.slug)
  return {
    prev: idx > 0 ? campaigns[idx - 1] : null,
    next: idx < campaigns.length - 1 ? campaigns[idx + 1] : null,
  }
})
</script>

<template>
  <main v-if="campaign" class="campaign-page">
    <CampaignHero :campaign="campaign" />
    <CampaignBody :campaign="campaign" />
    <CampaignImpact :campaign="campaign" />

    <!-- Navigation between campaigns -->
    <section class="campaign-nav">
      <div class="campaign-nav__inner container">
        <router-link
          v-if="adjacentCampaigns.prev"
          :to="`/work/${adjacentCampaigns.prev.slug}`"
          class="campaign-nav__link campaign-nav__link--prev"
        >
          <span class="campaign-nav__direction label">&larr; Previous</span>
          <span class="campaign-nav__name">{{ adjacentCampaigns.prev.title }}</span>
        </router-link>
        <div v-else />

        <router-link
          v-if="adjacentCampaigns.next"
          :to="`/work/${adjacentCampaigns.next.slug}`"
          class="campaign-nav__link campaign-nav__link--next"
        >
          <span class="campaign-nav__direction label">Next &rarr;</span>
          <span class="campaign-nav__name">{{ adjacentCampaigns.next.title }}</span>
        </router-link>
      </div>
    </section>

    <!-- CTA -->
    <section class="campaign-cta">
      <div class="container container--narrow" style="text-align: center;">
        <h2>Inspired by This Work?</h2>
        <p class="campaign-cta__body">
          Jared is available for political consulting, campaign strategy,
          and community organizing engagements.
        </p>
        <div class="campaign-cta__actions">
          <CallToAction to="/contact">Start a Conversation</CallToAction>
          <CallToAction to="/work" variant="outline">All Campaigns</CallToAction>
        </div>
      </div>
    </section>
  </main>

  <!-- 404 fallback -->
  <main v-else class="campaign-page campaign-page--not-found">
    <div class="container" style="padding-top: 200px; text-align: center;">
      <h1>Campaign Not Found</h1>
      <p style="color: var(--color-gray-600); margin: 1rem 0 2rem;">
        The campaign you're looking for doesn't exist.
      </p>
      <CallToAction to="/work">View All Campaigns</CallToAction>
    </div>
  </main>
</template>

<style scoped>
.campaign-page--not-found {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

/* ─── Prev / Next Navigation ─── */
.campaign-nav {
  padding: var(--space-xl) 0;
  border-top: 1px solid var(--color-gray-200);
}

.campaign-nav__inner {
  display: flex;
  justify-content: space-between;
}

.campaign-nav__link {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  transition: color var(--transition-base);
}

.campaign-nav__link:hover {
  color: var(--color-accent);
}

.campaign-nav__link--next {
  text-align: right;
  margin-left: auto;
}

.campaign-nav__direction {
  color: var(--color-gray-400);
}

.campaign-nav__name {
  font-family: var(--font-serif);
  font-size: 1.2rem;
}

/* ─── CTA ─── */
.campaign-cta {
  padding: var(--space-xl) 0 var(--space-2xl);
}

.campaign-cta__body {
  color: var(--color-gray-600);
  margin: var(--space-sm) auto var(--space-md);
  max-width: 440px;
}

.campaign-cta__actions {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
}
</style>
