<template>
  <main class="not-found">
    <section class="not-found__hero">
      <div class="container container--narrow" style="text-align: center;">
        <p class="not-found__label label accent">404</p>
        <h1 class="not-found__title">Not <em class="accent">Here</em></h1>
        <p class="not-found__body">
          That page is not on jaredbynum.com. It may have moved, or the link may have a typo.
        </p>
        <nav aria-label="Main pages" class="not-found__links">
          <router-link to="/work" class="label">Work</router-link>
          <router-link to="/about" class="label">About</router-link>
          <router-link to="/contact" class="label">Contact</router-link>
        </nav>
        <CallToAction to="/">Back to the home page</CallToAction>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
/**
 * The 404. A real page with a real status in the prerendered 404.html, never
 * a redirect home: a broken link should show up in Search Console, and a
 * visitor should land somewhere useful.
 */
import CallToAction from '@/components/shared/CallToAction.vue'
</script>
<style scoped>
.not-found {
  padding-top: 120px;
}

.not-found__hero {
  padding: var(--space-xl) 0 var(--space-2xl);
}

.not-found__label {
  display: block;
  margin-bottom: var(--space-sm);
}

.not-found__title {
  margin-bottom: var(--space-md);
}

.not-found__body {
  color: var(--color-gray-600);
  margin: 0 auto var(--space-md);
  max-width: 440px;
}

.not-found__links {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.not-found__links a {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
</style>
