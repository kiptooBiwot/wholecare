<template>
  <div class="px-4 pt-4 pb-4 mx-auto my-5 space-y-2 w-1/2 border shadow-lg rounded-lg">
    <h1 class="h1">
      Sign In
    </h1>
    <h2 class="h2">
      Second header
    </h2>
    <h3 class="h3">
      Third header
    </h3>
    <p class="text-gray-500 text-sm">
      Sign in goes here.
    </p>
    <div>
      <button class="btn-primary">
        Submit
      </button>
    </div>
    <div>
      <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm">
            $
          </span>
        </div>
        <input id="price" type="text" name="price" class="focus:ring-gray-500 focus:border-gray-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00"></input>
        <div class="absolute inset-y-0 right-0 flex items-center">
          <label for="currency" class="sr-only">Currency</label>
          <select id="currency" name="currency" class="focus:ring-gray-500 focus:border-gray-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-500">Email address</label>
      <input
        id="email"
        type="email"
        name="email"
        autocomplete
        required
        class=""
      >
    </div>
    <div>
      <label for="password" class="block text-sm font-medium text-gray-500">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        autocomplete
        required
        class=""
      >
    </div>
    <div>
      <label for="company-size" class="block text-sm font-medium text-gray-500">Company Size</label>
      <select
        id="company"
        required
        class=""
      >
        <option value="">
          Select an item
        </option>
        <option value="10">
          5 to 10
        </option>
        <option value="20">
          10 to 20
        </option>
        <option value="30">
          20 to 30
        </option>
      </select>
    </div>
    <div class="flex items-center">
      <input id="terms" type="checkbox" name="terms" class="rounded text-blue-600 focus:ring-blue-600">
      <label for="terms" class="ml-2 block text-sm text-gray-500">
        I agree to the <span class="font-medium text-blue-600">Terms</span> and <span class="font-medium text-blue-600">Conditions</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
