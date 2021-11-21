<template>
  <form
    ref="contactForm"
    action="https://formspree.io/f/mayargre"
    method="POST"
    @submit.prevent="submitForm"
  >
    <div class="mb-4">
      <label for="name" class="text-xl">Name:</label>
      <br />
      <input
        required
        class="rounded-md w-full p-4 bg-gray focus:border-primary"
        type="text"
        name="name"
        placeholder="John Doe"
      />
    </div>
    <div class="my-4">
      <label for="name" class="text-xl">Email:</label>
      <br />
      <input
        required
        class="rounded-md w-full p-4 bg-gray focus:border-primary"
        type="email"
        name="email"
        placeholder="john@doe.com"
      />
    </div>
    <div class="my-4">
      <label for="phone">Phone:</label>
      <br />
      <input
        required
        class="rounded-md w-full p-4 bg-gray focus:border-primary"
        type="text"
        name="phone"
        placeholder="+91 XXXXXXXXXX"
      />
    </div>
    <div class="my-4">
      <label for="message" class="text-xl">Message:</label>
      <br />
      <textarea
        required
        class="rounded-md w-full p-4 bg-gray focus:border-primary"
        row="100"
        name="message"
        placeholder="Message here..."
      />
    </div>
    <div class="my-4">
      <div class="g-recaptcha" :data-sitekey="googleCaptchaKey"></div>
    </div>
    <div>
      <button
        type="submit"
        :disabled="loading"
        class="
          px-16
          py-4
          bg-black
          text-primary
          hover:text-black
          rounded-md
          block
          w-full
          uppercase
          transition
          hover:bg-primary
        "
      >
        Send
      </button>
    </div>
    <div
      v-if="status"
      :class="success ? 'bg-green' : 'bg-red'"
      class="w-full my-4 rounded py-2 px-2 text-white"
    >
      {{ status }}
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      status: '',
      success: false,
      loading: false,
    }
  },
  computed: {
    googleCaptchaKey() {
      return process.env.NUXT_ENV_CAPTCHA_KEY
    },
  },
  methods: {
    async submitForm(e) {
      this.loading = true
      const data = new FormData(e.target)
      await fetch(e.target.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          this.loading = false
          this.success = true
          this.status = 'Thanks for your submission!'
          this.$refs.contactForm.reset()
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
          this.success = false
          this.status = 'Oops! There was a problem submitting your form'
        })
    },
  },
}
</script>

<style></style>
