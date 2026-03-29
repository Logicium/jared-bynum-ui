<script setup lang="ts">
</script>

<template>
  <section class="philosophy">
    <div class="container container--narrow">
      <div class="philosophy__inner">
        <span class="philosophy__label label accent">Philosophy</span>
        <blockquote class="philosophy__quote">
          "Real change doesn't start in a boardroom.
          It starts in communities — with people who refuse
          to accept the world as it is."
        </blockquote>
        <p class="philosophy__body">
          Jared's approach to political organizing blends rigorous policy
          analysis with ground-level coalition building. Every campaign is
          rooted in the belief that sustainable progress requires both
          vision and the discipline to see it through.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.philosophy {
  padding: var(--space-2xl) 0;
  background: var(--color-black);
  color: var(--color-white);
}

.philosophy__inner {
  text-align: center;
}

.philosophy__label {
  display: block;
  margin-bottom: var(--space-md);
}

.philosophy__quote {
  font-family: var(--font-serif);
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-style: italic;
  line-height: 1.4;
  margin-bottom: var(--space-lg);
  color: var(--color-white);
}

.philosophy__body {
  max-width: 560px;
  margin: 0 auto;
  color: var(--color-gray-400);
  font-size: 0.95rem;
  line-height: 1.8;
}
</style>
