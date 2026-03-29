<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'outline'
  to?: string
  href?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  to: '',
  href: '',
})
</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    :class="['cta', `cta--${variant}`]"
  >
    <slot />
    <span class="cta__arrow">&rarr;</span>
  </router-link>

  <a
    v-else-if="href"
    :href="href"
    :class="['cta', `cta--${variant}`]"
  >
    <slot />
    <span class="cta__arrow">&rarr;</span>
  </a>

  <button
    v-else
    :class="['cta', `cta--${variant}`]"
    type="button"
  >
    <slot />
    <span class="cta__arrow">&rarr;</span>
  </button>
</template>

<style scoped>
.cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 1rem 2rem;
  transition: all var(--transition-base);
}

.cta--primary {
  background: var(--color-black);
  color: var(--color-white);
}

.cta--primary:hover {
  background: var(--color-accent);
}

.cta--outline {
  border: 1px solid var(--color-black);
  color: var(--color-black);
}

.cta--outline:hover {
  background: var(--color-black);
  color: var(--color-white);
}

.cta__arrow {
  transition: transform var(--transition-base);
  font-size: 1rem;
}

.cta:hover .cta__arrow {
  transform: translateX(4px);
}
</style>
