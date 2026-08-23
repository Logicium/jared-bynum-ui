<script setup lang="ts">
import { content } from '@/data/site'
import CallToAction from '@/components/shared/CallToAction.vue'
</script>

<template>
  <section class="hire-banner">
    <div class="container container--narrow">
      <div class="hire-banner__inner">
        <p class="hire-banner__label label">{{ content.hire.label }}</p>
        <h2 class="hire-banner__title">
          {{ content.hire.titleLead }} <em class="accent">{{ content.hire.titleAccent }}</em>
        </h2>
        <p class="hire-banner__body">{{ content.hire.body }}</p>
        <CallToAction to="/contact">{{ content.hire.cta }}</CallToAction>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hire-banner {
  padding: var(--space-2xl) 0;
  text-align: center;
}

.hire-banner__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.hire-banner__label {
  color: var(--color-accent);
}

.hire-banner__title {
  margin-bottom: var(--space-xs);
}

.hire-banner__body {
  max-width: 480px;
  color: var(--color-gray-600);
  font-size: 0.95rem;
  margin-bottom: var(--space-md);
}
</style>
