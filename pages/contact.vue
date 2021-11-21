<template>
  <div class="bg-gray">
    <div class="container mx-auto px-2 py-6 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-10">
        <div class="bg-white px-4 py-10 lg:p-10 shadow">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-light mb-10">
            Contact:
          </div>
          <div class="my-6">
            <div class="text-xl">Email:</div>
            <div class="text-lg font-light">info@worldsbestjeweller.com</div>
          </div>
          <div class="my-6">
            <div class="text-xl">Phone:</div>
            <div class="text-lg font-light">Phone: +91-98201-10051</div>
          </div>
          <div class="my-6">
            <div class="text-xl">Address:</div>
            <div class="text-lg font-light">
              Bharat Diamond Bourse, <br />
              Bandra Kurla Complex, <br />
              Bandra East, Mumbai 400051, <br />
              India
            </div>
          </div>
        </div>
        <div class="bg-white px-4 py-10 lg:p-10 shadow">
          <div class="text-2xl sm:text-3xl lg:text-4xl font-light mb-10">
            Leave us a message here:
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js',
        async: true,
        defer: true,
      },
    ],
  },
}
</script>

<style></style>
