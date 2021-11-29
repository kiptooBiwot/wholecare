<template>
  <div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 ">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Account Status
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="staff in users" :key="staff.email">
                <td class="px-6 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <nuxt-img
                        class="h-10 w-10 rounded-full object-cover object-center"
                        :src="staff.profileImage"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-xs font-medium text-gray-600">
                        {{ staff.firstName + " " + staff.surname }}
                      </div>
                      <div class="text-xs text-gray-400">
                        {{ staff.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 whitespace-nowrap">
                  <div class="text-xs text-gray-600">
                    {{ staff.title }}
                  </div>
                  <div class="text-xs text-gray-400">
                    Whole Care Solutions
                  </div>
                </td>
                <!-- <td class="flex px-6 py-3 whitespace-nowrap">
                  <span v-if="staff.isEnabled" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Account Enabled
                  </span>
                  <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Account Disabled
                  </span>
                </td> -->
                <td class="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                  <div class="flex">
                    <span
                      v-if="staff.isEnabled"
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      Enabled
                    </span>
                    <span
                      v-else
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
                    >
                      Disabled
                    </span>
                    <!-- Toggle Button implementation -->
                    <div
                      class="ml-2 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
                      :class="[staff.isEnabled ? 'bg-green-400' : 'bg-red-400']"
                      @click.prevent="changeAccountStatus"
                    >
                      <!-- Switch -->
                      <div
                        class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
                        :class="{ 'translate-x-6': staff.isEnabled }"
                      />
                    </div>
                  </div>
                </td>
                <td
                  v-if="staff.role === 'user'"
                  class="px-6 whitespace-nowrap text-xs text-gray-500"
                >
                  Employee
                </td>
                <td
                  v-if="staff.role === 'admin'"
                  class="px-6 whitespace-nowrap text-xs text-gray-500"
                >
                  Administrator
                </td>
                <td
                  class="px-6 py-3 flex whitespace-nowrap text-left text-xs font-medium justify-evenly"
                >
                  <div>
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="text-indigo-600 hover:text-indigo-900 justify-evenly"
                    >
                      <svg
                        class="w-4 h-4 text-red-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style></style>
