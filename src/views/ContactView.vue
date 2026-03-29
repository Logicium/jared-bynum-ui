<script setup lang="ts">
import ContactForm from '@/components/contact/ContactForm.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
</script>

<template>
  <main class="contact-page">
    <section class="contact-hero">
      <div class="container">
        <p class="contact-hero__label label accent">Get in Touch</p>
        <h1 class="contact-hero__title">
          Let's Build<br />
          Something <em class="accent">Bold</em>
        </h1>
        <p class="contact-hero__desc">
          Whether you're launching a political campaign, advancing policy,
          or mobilizing a community — Jared is ready to bring strategic
          leadership to your cause.
        </p>
      </div>
    </section>

    <section class="contact-body">
      <div class="contact-body__inner container">
        <div class="contact-body__form">
          <ContactForm />
        </div>
        <div class="contact-body__sidebar">
          <ContactInfo />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  padding-top: 120px;
}

.contact-hero {
  padding-bottom: var(--space-xl);
}

.contact-hero__label {
  display: block;
  margin-bottom: var(--space-sm);
}

.contact-hero__title {
  margin-bottom: var(--space-md);
}

.contact-hero__desc {
  max-width: 500px;
  color: var(--color-gray-600);
  font-size: 1.05rem;
}

.contact-body {
  padding-bottom: var(--space-2xl);
}

.contact-body__inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.contact-body__sidebar {
  position: sticky;
  top: 100px;
}

@media (max-width: 768px) {
  .contact-body__inner {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .contact-body__sidebar {
    position: static;
    order: -1;
  }
}
</style>
