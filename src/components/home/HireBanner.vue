<script setup lang="ts">
import CallToAction from '@/components/shared/CallToAction.vue'
</script>

<template>
  <section class="hire-banner">
    <div class="container container--narrow">
      <div class="hire-banner__inner">
        <p class="hire-banner__label label">Ready to win?</p>
        <h2 class="hire-banner__title">
          Let's Build Your Next <em class="accent">Campaign</em>
        </h2>
        <p class="hire-banner__body">
          From policy advocacy to grassroots mobilization, Jared brings
          strategic clarity and relentless execution to every engagement.
        </p>
        <CallToAction to="/contact">Get in Touch</CallToAction>
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
