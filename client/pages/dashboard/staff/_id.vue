<template>
  <div>
    <div class=" w-full h-auto rounded-md">
      <p v-if="$fetchState.error">
        Error occured during the staff details loading
      </p>
      <p v-else-if="$fetchState.pending">
        <!-- TODO: Add a loading icon at hte center of the page to show some activity -->

        Loading staff details...
      </p>
      <div v-else>
        <div class="w-full h-auto">
          <div class="w-full">
            <nuxt-img v-if="staff.gender === 'male'" src="img/colors.jpg" class="w-full h-24 md:h-64 object-cover bg-center overflow-hidden rounded-t-md" />
            <nuxt-img v-if="staff.gender === 'female'" src="img/flowers.jpg" class="w-full h-24 md:h-64 object-cover bg-top overflow-hidden rounded-t-md" />
          </div>
          <div class="flex justify-center">
            <div class="w-full md:w-10/12 md:-mt-32 bg-white h-auto pb-16 md:rounded-lg shadow-lg p-4 relative">
              <div class="ml-4 -mt-16 md:ml-12 md:-mt-20 absolute">
                <nuxt-img class="rounded-full w-28 h-28 md:w-30 ring-white ring-4 object-cover inline-block border-white" :src="staff.profileImage" />
              </div>
              <div class="mt-10 md:mt-14">
                <div class="flex float-right -mt-10 md:mr-10">
                  <button class="border-gray-300 border px-2 md:px-4 py-1 rounded-md text-gray-500 items-center hover:text-gray-800 hover:border-red-500 text-sm" @click.prevent="">
                    <span class="flex">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      Edit
                    </span>
                  </button>
                </div>
                <div>
                  <div class="md:ml-10 mt-12 grid">
                    <span class="h3">
                      {{ staff.firstName + ' ' + staff.surname }}
                    </span>
                    <span class="text-sm text-gray-400">{{ staff.title }}</span>
                  </div>
                </div>
                <div class="containter mt-4 text-gray-600 text-sm">
                  <div class="flex md:ml-10 w-full space-x-6 md:space-x-16">
                    <button class="py-2 px-1" :class="{'text-gray-500 bg-white': tab !== 1, 'text-blue-800 border-blue-800 border-b-2': tab === 1}" @click.prevent="currentTab(1)">
                      Profile
                    </button>
                    <button class="py-2 px-1" :class="{'text-gray-500 bg-white': tab !== 2, 'text-blue-800 border-blue-800 border-b-2': tab === 2}" @click.prevent="currentTab(2)">
                      Calendar
                    </button>
                    <button class="py-2 px-1" :class="{'text-gray-500 bg-white': tab !== 3, 'text-blue-800 border-blue-800 border-b-2': tab === 3}" @click.prevent="currentTab(3)">
                      Qualifications
                    </button>
                  </div>
                  <hr class="text-gray-200">
                </div>
                <div class="">
                  <div v-if="tab === 1">
                    <div class="text-gray-500 w-full md:grid md:grid-cols-2 md:px-5 py-5">
                      <div class="grid md:w-1/2 lg:w-1/4 space-y-3">
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Middle Name</span>
                          <span class="text-sm">{{ staff.middleName }}</span>
                        </div>
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Mobile Number</span>
                          <span class="text-sm">{{ '(+61)' + ' ' + staff.mobile_number }}</span>
                        </div>
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Home Number</span>
                          <span class="text-sm">{{ '(+61)' + ' ' + staff.home_number }}</span>
                        </div>
                        <div class="grid w-full">
                          <span class="font-bold text-xs flex">Work Number</span>
                          <span class="text-sm">{{ '(+61)' + ' ' + staff.work_number }}</span>
                        </div>
                      </div>
                      <div class="md:w-1/2 lg:w-1/4 mt-3 md:mt-0 space-y-3">
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Email Address</span>
                          <span class="text-sm">{{ staff.email }}</span>
                        </div>
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Gender</span>
                          <span class="text-sm">{{ staff.gender }}</span>
                        </div>
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Title</span>
                          <span class="text-sm">{{ staff.title }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="grid text-gray-500 w-full px-5">
                      <span class="font-bold text-xs">Bio</span>
                      <span class="text-sm">{{ staff.bio }}</span>
                    </div>
                  </div>
                  <div v-if="tab === 2" class="text-gray-500 p-5">
                    <span class="p">{{ staff.surname }}'s schedule to go here</span>
                  </div>
                  <div v-if="tab === 3" class="text-gray-500 p-5">
                    <span class="p">{{ staff.surname }}'s Qualifications to go here</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  layout: 'dashbboard',
  data () {
    return {
      staff: null,
      tab: 1
    }
  },
  // async fetch () {
  //   this.staff.data = await this.$axios.get(`/users/${this.$route.params.id}`)
  // },
  // fetchOnServer: true,
  async fetch () {
    const response = await this.$axios.get(`/users/${this.$route.params.id}`)
    // console.log(response)
    this.staff = response.data
  },
  // fetchOnServer: true,
  computed: {
    // ...mapState('authentication', ['staff'])
  },
  mounted () {
  //  ...mapActions('authentication', ['getUser'])
    // this.$store.dispatch('authentication/getUser', this.$route.params.id)
    // this.staff = await this.$axios.get(`/users/${this.$route.params.id}`)
  },
  methods: {
    currentTab (tabNumber) {
      this.tab = tabNumber
    }
  }
}
</script>

<style>

</style>
