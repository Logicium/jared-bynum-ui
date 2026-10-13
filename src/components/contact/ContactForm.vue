<script setup lang="ts">
import { ref } from 'vue'
import { createApotomeForm } from '@/kit/forms'

/*
 * Contact runs through the Apotome Labs forms add-on: the submission is
 * stored in Jared's portal inbox and emailed to him, with reply-to set to
 * the person who wrote in. The field keys match the "contact" form
 * definition in the portal; change one here, change it there.
 */
const contact = createApotomeForm({ form: 'contact' })

const emptyForm = () => ({
  name: '',
  email: '',
  organization: '',
  campaignType: '',
  message: '',
})

const form = ref(emptyForm())
/* the decoy field; a real visitor never sees it, so it must stay empty */
const honeypot = ref('')

const submitted = ref(false)
const sending = ref(false)
const error = ref('')

async function handleSubmit() {
  if (sending.value) return
  sending.value = true
  error.value = ''
  const result = await contact.submit({
    ...form.value,
    [contact.honeypotField]: honeypot.value,
  })
  sending.value = false
  if (result.ok) {
    submitted.value = true
    form.value = emptyForm()
  } else {
    error.value = result.error
  }
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

        <!--
          Honeypot. Positioned off-screen rather than type="hidden": a hidden
          input is trivially skipped by a bot, a text input moved out of the
          viewport is not. Kept out of the tab order and the a11y tree.
        -->
        <div class="hp" aria-hidden="true">
          <label :for="contact.honeypotField">Do not fill this in</label>
          <input
            :id="contact.honeypotField"
            v-model="honeypot"
            type="text"
            tabindex="-1"
            autocomplete="off"
          />
        </div>

        <button type="submit" class="form__submit" :disabled="sending">
          <span class="label">{{ sending ? 'Sending' : 'Send Inquiry' }}</span>
          <span>&rarr;</span>
        </button>

        <p v-if="error" class="form__error" role="alert">{{ error }}</p>
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

.form__error {
  grid-column: 1 / -1;
  color: var(--color-accent);
  font-size: 0.9rem;
}

/* honeypot: out of sight and out of the tab order, but a real input */
.hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .form {
    grid-template-columns: 1fr;
  }
}
</style>
