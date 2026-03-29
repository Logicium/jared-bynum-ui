<script setup lang="ts">
interface Props {
  src?: string
  alt: string
  aspect?: string
  overlay?: boolean
  grayscale?: boolean
}

withDefaults(defineProps<Props>(), {
  src: '',
  aspect: '3 / 4',
  overlay: false,
  grayscale: true,
})
</script>

<template>
  <div
    :class="['photo', { 'photo--color': !grayscale }]"
    :style="{ aspectRatio: aspect }"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="photo__img"
      loading="lazy"
    />
    <div v-else class="photo__placeholder">
      <span class="photo__label label">{{ alt }}</span>
    </div>
    <div v-if="overlay" class="photo__overlay" />
  </div>
</template>

<style scoped>
.photo {
  position: relative;
  overflow: hidden;
  background: var(--color-gray-100);
}

.photo__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.6s ease, transform 0.6s ease;
}

.photo:hover .photo__img {
  filter: grayscale(60%);
  transform: scale(1.02);
}

.photo--color .photo__img {
  filter: none;
}

.photo--color:hover .photo__img {
  filter: none;
  transform: scale(1.02);
}

.photo__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-gray-100), var(--color-gray-200));
  padding: var(--space-md);
  text-align: center;
}

.photo__label {
  color: var(--color-gray-400);
  font-size: 0.65rem;
}

.photo__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 0.6) 0%,
    transparent 50%
  );
  pointer-events: none;
}
</style>
