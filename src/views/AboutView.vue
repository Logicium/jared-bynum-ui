<script setup lang="ts">
import BioSection from '@/components/about/BioSection.vue'
import FocusAreas from '@/components/about/FocusAreas.vue'
import CredentialsSection from '@/components/about/CredentialsSection.vue'
import CallToAction from '@/components/shared/CallToAction.vue'
</script>

<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="container">
        <p class="about-hero__label label accent">Who Is Jared Bynum</p>
        <h1 class="about-hero__title">
          The Strategist Behind<br />
          the <em class="accent">Movement</em>
        </h1>
      </div>
    </section>

    <BioSection />
    <FocusAreas />
    <CredentialsSection />

    <section class="about-cta">
      <div class="container container--narrow" style="text-align: center;">
        <h2>Ready to Create Change?</h2>
        <p class="about-cta__body">
          Whether you're launching a campaign or building a coalition,
          Jared is ready to bring strategic leadership to your cause.
        </p>
        <CallToAction to="/contact">Let's Talk</CallToAction>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  padding-top: 120px;
}

.about-hero {
  padding-bottom: var(--space-lg);
}

.about-hero__label {
  display: block;
  margin-bottom: var(--space-sm);
}

.about-hero__title {
  max-width: 700px;
}

.about-cta {
  padding: var(--space-2xl) 0;
}

.about-cta__body {
  color: var(--color-gray-600);
  margin: var(--space-sm) auto var(--space-md);
  max-width: 440px;
}
</style>
