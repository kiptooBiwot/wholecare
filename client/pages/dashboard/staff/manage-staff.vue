<template>
  <div class="bg-white rounded-md py-4 px-6 shadow-md">
    <span class="h3">
      Manage Staff
    </span>
    <div class="flex flex-col mt-4 mb-5">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 ">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-100">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Account Status
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="staff in users" :key="staff.email">
                  <td class="px-6 py-3 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <nuxt-img class="h-10 w-10 rounded-full" :src="staff.profileImage" alt="" />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-600">
                          {{ staff.firstName + ' ' + staff.surname }}
                        </div>
                        <div class="text-xs text-gray-500">
                          {{ staff.email }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-3 whitespace-nowrap">
                    <div class="text-sm text-gray-600">
                      {{ staff.title }}
                    </div>
                    <div class="text-xs text-gray-500">
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
                      <span v-if="staff.isEnabled" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Account Enabled
                      </span>
                      <span v-else class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Account Disabled
                      </span>
                      <!-- Toggle Button implementation -->
                      <div class="ml-2 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out" :class="[staff.isEnabled ? 'bg-green-400' : 'bg-red-400']" @click.prevent="changeAccountStatus">
                        <!-- Switch -->
                        <div class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out" :class="{ 'translate-x-6': staff.isEnabled,}" />
                      </div>
                    </div>
                  </td>
                  <td v-if="staff.role === 'user'" class="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                    Employee
                  </td>
                  <td v-if="staff.role === 'admin'" class="px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                    Administrator
                  </td>
                  <td class="px-6 py-3 whitespace-nowrap text-left text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
  },
  layout: 'dashboard',
  data: () => ({
    toggleActive: false
  }),
  computed: {
    ...mapState('authentication', (['users']))
    // ...mapActions('authentication', (['getUsers']))
    // this.$store.dispatch('authentication/getUsers')
  },
  async mounted () {
    await this.$store.dispatch('authentication/getUsers')
    // this.getUsers
  },
  methods: {
    changeAccountStatus () {
      alert('To be implemented in a short while!')
    }
  }
}
</script>

<style>

</style>
