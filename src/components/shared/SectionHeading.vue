<script setup lang="ts">
interface Props {
  label?: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  label: '',
  align: 'left',
})
</script>

<template>
  <div :class="['section-heading', `section-heading--${align}`]">
    <span v-if="label" class="section-heading__label label">{{ label }}</span>
    <h2 class="section-heading__title">
      <slot />
    </h2>
  </div>
</template>

<style scoped>
.section-heading {
  margin-bottom: var(--space-lg);
}

.section-heading--center {
  text-align: center;
}

.section-heading__label {
  display: block;
  color: var(--color-accent);
  margin-bottom: var(--space-sm);
}

.section-heading__title {
  max-width: 700px;
}

.section-heading--center .section-heading__title {
  margin: 0 auto;
}
</style>
