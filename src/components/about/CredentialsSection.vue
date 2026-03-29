<script setup lang="ts">
</script>

<template>
  <section class="credentials">
    <div class="container">
      <div class="credentials__grid">
        <div class="credentials__col">
          <span class="credentials__label label accent">By the Numbers</span>
          <div class="credentials__stats">
            <div class="credentials__stat">
              <span class="credentials__number">50+</span>
              <span class="credentials__desc">Campaigns Organized</span>
            </div>
            <div class="credentials__stat">
              <span class="credentials__number">12</span>
              <span class="credentials__desc">Legislative Wins</span>
            </div>
            <div class="credentials__stat">
              <span class="credentials__number">100K+</span>
              <span class="credentials__desc">Community Members Mobilized</span>
            </div>
          </div>
        </div>

        <div class="credentials__col">
          <span class="credentials__label label accent">Recognition</span>
          <ul class="credentials__list">
            <li>Emerging Organizer of the Year — National Policy Institute</li>
            <li>40 Under 40 — Progressive Leaders Council</li>
            <li>Environmental Champion Award — Green Alliance</li>
            <li>Community Impact Fellow — Urban Policy Foundation</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.credentials {
  padding: var(--space-2xl) 0;
}

.credentials__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
}

.credentials__label {
  display: block;
  margin-bottom: var(--space-md);
}

.credentials__stats {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.credentials__stat {
  border-left: 2px solid var(--color-accent);
  padding-left: var(--space-md);
}

.credentials__number {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  display: block;
  line-height: 1.1;
}

.credentials__desc {
  color: var(--color-gray-600);
  font-size: 0.85rem;
}

.credentials__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.credentials__list li {
  padding-left: var(--space-md);
  border-left: 1px solid var(--color-gray-200);
  color: var(--color-gray-800);
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .credentials__grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
}
</style>
