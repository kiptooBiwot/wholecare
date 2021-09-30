<template>
  <div>
    <div class="p-4 shadow-lg border w-full border-gray-100 rounded-md">
      <NuxtLink :to="'/dashboard/staff/' + staff._id">
        <div class="space-y-3">
          <div class="mt-4">
            <nuxt-img v-if="staff.profileImage" class="w-h-28 h-28 mx-auto rounded-full object-cover" :src="staff.profileImage" />
            <nuxt-img v-else class="w-h-28 h-28 mx-auto rounded-full object-cover" src="/img/avatar.png" />
          </div>
          <div class="grid text-center">
            <span class="text-gray-500 font-semibold text-base">
              {{ staff.firstName + ' ' + staff.surname }}
            </span>
            <span class="text-gray-400 text-xs">
              {{ staff.title }}
            </span>
          <!-- <span class="text-gray-500 text-xs">
        Home Number: 012345698789
      </span>
      <span class="text-gray-500 text-xs">
        Work Number: 012365478998
      </span> -->
          </div>
          <span class="flex text-gray-500 text-xs">
            <svg class="w-4 h-4 mr-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {{ staff.email }}
          </span>
          <span class="flex text-gray-500 text-xs">
            <svg class="w-4 h-4 mr-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span>
              {{ '(+61)' + ' ' + staff.mobile_number }}
            </span>
          </span>
          <div class="mt-5 justify-end">
            <span v-if="staff.role === 'user'" class="bg-blue-500 px-2 py-0.5 text-white rounded-full text-xs">
              Employee
            </span>
            <span v-else class="bg-red-500 px-2 py-0.5 text-white rounded-full text-xs">
              Administrator
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StaffCard',
  props: {
    staff: {
      type: Object,
      default: null
    }
  }
}
</script>

<style>

</style>
