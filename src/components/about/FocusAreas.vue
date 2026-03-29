<script setup lang="ts">
const focusAreas = [
  {
    number: '01',
    title: 'Policy Advocacy',
    description:
      'Crafting and advancing legislation through strategic coalition-building, stakeholder engagement, and sustained public pressure campaigns.',
  },
  {
    number: '02',
    title: 'Environmental Action',
    description:
      'Organizing communities around climate justice and environmental protection, ensuring frontline voices lead the conversation.',
  },
  {
    number: '03',
    title: 'Social Justice',
    description:
      'Fighting for equity across housing, voting rights, healthcare access, and criminal justice reform through systemic organizing.',
  },
]
</script>

<template>
  <section class="focus">
    <div class="container">
      <span class="focus__label label accent">Focus Areas</span>
      <h2 class="focus__title">Three Pillars of Change</h2>

      <div class="focus__grid">
        <div
          v-for="area in focusAreas"
          :key="area.number"
          class="focus__item"
        >
          <span class="focus__number">{{ area.number }}</span>
          <h3 class="focus__item-title">{{ area.title }}</h3>
          <p class="focus__item-desc">{{ area.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.focus {
  padding: var(--space-2xl) 0;
  background: var(--color-gray-100);
}

.focus__label {
  display: block;
  margin-bottom: var(--space-sm);
}

.focus__title {
  margin-bottom: var(--space-xl);
}

.focus__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.focus__item {
  border-top: 2px solid var(--color-black);
  padding-top: var(--space-md);
}

.focus__number {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--color-gray-200);
  display: block;
  margin-bottom: var(--space-sm);
}

.focus__item-title {
  margin-bottom: var(--space-xs);
  font-size: 1.3rem;
}

.focus__item-desc {
  font-size: 0.9rem;
  color: var(--color-gray-600);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .focus__grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}
</style>
