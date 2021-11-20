<template>
  <div class="bg-gray">
    <div class="container mx-auto px-2 py-6 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-10">
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
          <form action="" method="post">
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
            <div>
              <button
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
