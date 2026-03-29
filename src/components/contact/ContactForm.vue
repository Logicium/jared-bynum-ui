<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  organization: '',
  campaignType: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div class="contact-form">
    <div v-if="!submitted">
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form__group">
          <label for="name" class="form__label label">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="form__input"
            required
            autocomplete="name"
          />
        </div>

        <div class="form__group">
          <label for="email" class="form__label label">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="form__input"
            required
            autocomplete="email"
          />
        </div>

        <div class="form__group">
          <label for="organization" class="form__label label">
            Organization
          </label>
          <input
            id="organization"
            v-model="form.organization"
            type="text"
            class="form__input"
            autocomplete="organization"
          />
        </div>

        <div class="form__group">
          <label for="type" class="form__label label">Campaign Type</label>
          <select
            id="type"
            v-model="form.campaignType"
            class="form__input form__select"
            required
          >
            <option value="" disabled>Select a focus area</option>
            <option value="policy">Policy Advocacy</option>
            <option value="environmental">Environmental</option>
            <option value="social-justice">Social Justice</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form__group form__group--full">
          <label for="message" class="form__label label">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            class="form__input form__textarea"
            rows="5"
            required
          />
        </div>

        <button type="submit" class="form__submit">
          <span class="label">Send Inquiry</span>
          <span>&rarr;</span>
        </button>
      </form>
    </div>

    <div v-else class="form__success">
      <h3>Message Received</h3>
      <p>
        Thank you for reaching out. Jared will review your inquiry
        and respond within 48 hours.
      </p>
    </div>
  </div>
</template>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

.form__group--full {
  grid-column: 1 / -1;
}

.form__label {
  display: block;
  margin-bottom: var(--space-xs);
  color: var(--color-gray-600);
}

.form__input {
  width: 100%;
  padding: 0.75rem 0;
  border: none;
  border-bottom: 1px solid var(--color-gray-200);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 300;
  background: transparent;
  color: var(--color-black);
  transition: border-color var(--transition-base);
  outline: none;
}

.form__input:focus {
  border-bottom-color: var(--color-accent);
}

.form__select {
  cursor: pointer;
  appearance: none;
}

.form__textarea {
  resize: vertical;
  min-height: 120px;
}

.form__submit {
  grid-column: 1 / -1;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-black);
  color: var(--color-white);
  padding: 1rem 2rem;
  justify-self: start;
  transition: background var(--transition-base);
}

.form__submit:hover {
  background: var(--color-accent);
}

.form__success h3 {
  margin-bottom: var(--space-sm);
}

.form__success p {
  color: var(--color-gray-600);
}

@media (max-width: 768px) {
  .form {
    grid-template-columns: 1fr;
  }
}
</style>
