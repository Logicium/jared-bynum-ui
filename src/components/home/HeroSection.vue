<script setup lang="ts">
import PhotoPlaceholder from '@/components/shared/PhotoPlaceholder.vue'
import CallToAction from '@/components/shared/CallToAction.vue'
</script>

<template>
  <section class="hero">
    <!-- Full-bleed image mosaic -->
    <div class="hero__mosaic">
      <div class="hero__img-primary">
        <PhotoPlaceholder
          src="/images/hero-portrait.jpg"
          alt="Jared Bynum — editorial portrait"
          aspect="3 / 4"
        />
      </div>
      <div class="hero__img-secondary">
        <PhotoPlaceholder
          :grayscale="false"
          src="/images/hero-portrait-2.jpg"
          alt="Jared Bynum — in the field"
          aspect="1 / 1"
        />
      </div>
    </div>

    <!-- Overlaid text block -->
    <div class="hero__content">
      <div class="hero__content-inner">
        <p class="hero__eyebrow label">Political Strategist &amp; Organizer</p>
        <h1 class="hero__title">
          Jared<br /><span class="accent">Bynum</span>
        </h1>
        <div class="hero__rule" />
        <p class="hero__subtitle">
          Building coalitions. Shaping policy.<br />
          Driving change through strategic<br />
          organizing and unwavering advocacy.
        </p>
        <div class="hero__actions">
          <CallToAction to="/contact">Work With Jared</CallToAction>
          <CallToAction to="/work" variant="outline">View Campaigns</CallToAction>
        </div>
      </div>
    </div>

    <!-- Editorial index number -->
    <span class="hero__index label">No. 01 — Portfolio</span>
    <span class="hero__scroll label">Scroll</span>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}

/* ─── Image Mosaic ─── */
.hero__mosaic {
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100vh;
  padding-top: 72px;
}

.hero__img-primary {
  height: 70vh;
  overflow: hidden;
}

.hero__img-primary :deep(.photo) {
  height: 100%;
  aspect-ratio: auto;
}

.hero__img-secondary {
  width: 55%;
  margin-left: auto;
  margin-top: -10rem;
  position: relative;
  z-index: 2;
  border: 6px solid var(--color-white);
}

.hero__img-secondary :deep(.photo) {
  aspect-ratio: 1 / 1;
}

/* ─── Content ─── */
.hero__content {
  display: flex;
  align-items: center;
  padding: var(--space-xl) var(--space-lg);
}

.hero__content-inner {
  max-width: 480px;
}

.hero__eyebrow {
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.hero__title {
  font-size: clamp(3.5rem, 8vw, 7rem);
  line-height: 0.92;
  letter-spacing: -0.03em;
  margin-bottom: var(--space-md);
}

.hero__rule {
  width: 60px;
  height: 2px;
  background: var(--color-accent);
  margin-bottom: var(--space-md);
}

.hero__subtitle {
  color: var(--color-gray-600);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: var(--space-lg);
}

.hero__actions {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

/* ─── Editorial Details ─── */
.hero__index {
  position: absolute;
  top: 100px;
  right: var(--space-md);
  writing-mode: vertical-rl;
  color: var(--color-gray-400);
}

.hero__scroll {
  position: absolute;
  bottom: var(--space-md);
  left: var(--space-md);
  writing-mode: vertical-rl;
  color: var(--color-gray-400);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* ─── Responsive ─── */
@media (max-width: 960px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .hero__mosaic {
    height: 60vh;
  }

  .hero__img-primary {
    height: 50vh;
  }

  .hero__img-secondary {
    width: 40%;
    margin-top: -4rem;
  }

  .hero__content {
    padding: var(--space-lg) var(--space-md);
  }

  .hero__title {
    font-size: clamp(3rem, 10vw, 5rem);
  }

  .hero__index,
  .hero__scroll {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero__img-secondary {
    width: 50%;
    margin-top: -3rem;
  }
}
</style>
