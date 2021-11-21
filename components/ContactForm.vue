<template>
  <form action="https://formspree.io/f/mayargre" method="post">
    <div class="mb-4">
      <label for="name" class="text-xl">Name:</label>
      <br />
      <input
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
        class="rounded-md w-full p-4 bg-gray focus:border-primary"
        row="100"
        name="message"
        placeholder="Message here..."
      />
    </div>
    <div class="my-4">
      <div class="g-recaptcha" data-sitekey="googleCaptchaKey"></div>
    </div>
    <div>
      <button
        type="submit"
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
  </form>
</template>

<script>
export default {
  computed: {
    googleCaptchaKey() {
      return this.process.env.NUXT_ENV_CAPTCHA_KEY
    },
  },
}
</script>

<style></style>
