<script setup lang="ts">
import CampaignGrid from '@/components/work/CampaignGrid.vue'
import CallToAction from '@/components/shared/CallToAction.vue'
</script>

<template>
  <main class="work-page">
    <section class="work-hero">
      <div class="container">
        <p class="work-hero__label label accent">Portfolio</p>
        <h1 class="work-hero__title">
          Strategic Organizing<br />
          for <em class="accent">Real Impact</em>
        </h1>
        <p class="work-hero__desc">
          A selection of campaigns and initiatives that demonstrate
          the power of strategic political organizing.
        </p>
      </div>
    </section>

    <CampaignGrid />

    <section class="work-cta">
      <div class="container container--narrow" style="text-align: center;">
        <h2>Have a Campaign in Mind?</h2>
        <p class="work-cta__body">
          Jared is available for political consulting, campaign strategy,
          and community organizing engagements.
        </p>
        <CallToAction to="/contact">Start a Conversation</CallToAction>
      </div>
    </section>
  </main>
</template>

<style scoped>
.work-page {
  padding-top: 120px;
}

.work-hero {
  padding-bottom: var(--space-xl);
}

.work-hero__label {
  margin-bottom: var(--space-sm);
  display: block;
}

.work-hero__title {
  margin-bottom: var(--space-md);
}

.work-hero__desc {
  max-width: 500px;
  color: var(--color-gray-600);
  font-size: 1.05rem;
}

.work-cta {
  padding: var(--space-2xl) 0;
}

.work-cta__body {
  color: var(--color-gray-600);
  margin: var(--space-sm) auto var(--space-md);
  max-width: 440px;
}
</style>
