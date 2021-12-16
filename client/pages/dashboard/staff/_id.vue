<template>
  <div>
    <modal
      :is-visible="modalVisible"
      @cancel="modalVisible = false"
      @mySubmit="modalVisible = false"
    >
      <template #title>
        Edit your Profile
      </template>
      <template #body>
        <staff-details :basic-info="oneStaff" />
      </template>
      <template #footer>
        <button class="btn-primary bg-green-700 hover:bg-green-600">
          Update
        </button>
      </template>
    </modal>
    <div v-if="oneStaff" class=" w-full h-auto rounded-md">
      <!-- <p v-if="error">
        Error occured during the staff details loading
      </p> -->
      <!-- <p v-else-if="pending"> -->
      <!-- TODO: Add a loading icon at hte center of the page to show some activity -->

      <!-- Loading staff details...
      </p> -->
      <div>
        <div class="w-full h-auto">
          <div class="w-full">
            <nuxt-img
              v-if="oneStaff.gender === 'male'"
              src="https://res.cloudinary.com/dhakagqld/image/upload/v1633068054/Whole%20Care%20Solutions/static/colors_hpvote.jpg"
              class="w-full h-24 md:h-64 object-cover bg-center overflow-hidden rounded-t-md"
            />
            <nuxt-img
              v-if="oneStaff.gender === 'female'"
              src="https://res.cloudinary.com/dhakagqld/image/upload/v1633068043/Whole%20Care%20Solutions/static/flowers_oecy7i.jpg"
              class="w-full h-24 md:h-64 object-cover bg-top overflow-hidden rounded-t-md"
            />
          </div>
          <div class="flex justify-center">
            <div
              class="w-full md:w-10/12 md:-mt-32 bg-white h-auto pb-16 md:rounded-lg shadow-lg p-4 relative"
            >
              <div class="ml-4 -mt-16 md:ml-12 md:-mt-20 absolute">
                <nuxt-img
                  class="rounded-full w-28 h-28 md:w-30 ring-white ring-4 object-cover inline-block border-white"
                  :src="oneStaff.profileImage"
                />
              </div>
              <div class="mt-10 md:mt-14">
                <div class="flex float-right -mt-10 md:mr-10">
                  <button
                    class="border-gray-300 border px-2 md:px-4 py-1 rounded-md text-gray-500 items-center hover:border-red-500 hover:text-red-500 text-sm"
                    @click="editProfile"
                  >
                    <span class="flex">
                      <svg
                        class="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      Edit
                    </span>
                  </button>
                </div>
                <div>
                  <div class="md:ml-10 mt-12 grid">
                    <span class="h3">
                      {{ oneStaff.firstName + " " + oneStaff.surname }}
                    </span>
                    <span class="text-sm text-gray-400">{{
                      oneStaff.title
                    }}</span>
                  </div>
                </div>
                <div class="containter mt-4 text-gray-600 text-sm">
                  <div class="flex md:ml-10 w-full space-x-6 md:space-x-16">
                    <button
                      class="py-2 px-1"
                      :class="{
                        'text-gray-500 bg-white': tab !== 1,
                        'text-blue-800 border-blue-800 border-b-2': tab === 1
                      }"
                      @click.prevent="currentTab(1)"
                    >
                      Profile
                    </button>
                    <button
                      class="py-2 px-1"
                      :class="{
                        'text-gray-500 bg-white': tab !== 2,
                        'text-blue-800 border-blue-800 border-b-2': tab === 2
                      }"
                      @click.prevent="currentTab(2)"
                    >
                      Calendar
                    </button>
                    <button
                      class="py-2 px-1"
                      :class="{
                        'text-gray-500 bg-white': tab !== 3,
                        'text-blue-800 border-blue-800 border-b-2': tab === 3
                      }"
                      @click.prevent="currentTab(3)"
                    >
                      Qualifications
                    </button>
                  </div>
                  <hr class="text-gray-200">
                </div>
                <div class="">
                  <div v-if="tab === 1">
                    <div
                      class="text-gray-500 w-full md:grid md:grid-cols-2 md:px-5 py-5"
                    >
                      <div class="grid md:w-1/2 lg:w-1/4 space-y-3">
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Middle Name</span>
                          <span class="text-sm">{{ oneStaff.middleName }}</span>
                        </div>
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Mobile Number</span>
                          <span class="text-sm">{{
                            "(+61)" + " " + oneStaff.mobile_number
                          }}</span>
                        </div>
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Home Number</span>
                          <span class="text-sm">{{
                            "(+61)" + " " + oneStaff.home_number
                          }}</span>
                        </div>
                        <div class="grid w-full">
                          <span
                            class="font-bold text-xs flex"
                          >Work Number</span>
                          <span class="text-sm">{{
                            "(+61)" + " " + oneStaff.work_number
                          }}</span>
                        </div>
                      </div>
                      <div class="md:w-1/2 lg:w-1/4 mt-3 md:mt-0 space-y-3">
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Email Address</span>
                          <span class="text-sm">{{ oneStaff.email }}</span>
                        </div>
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Gender</span>
                          <span class="text-sm">{{ oneStaff.gender }}</span>
                        </div>
                        <div class="grid w-full">
                          <span class="font-bold text-xs">Title</span>
                          <span class="text-sm">{{ oneStaff.title }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="grid text-gray-500 w-full px-5">
                      <span class="font-bold text-xs">Bio</span>
                      <span class="text-sm">{{ oneStaff.bio }}</span>
                    </div>
                  </div>
                  <div v-if="tab === 2" class="text-gray-500 p-5">
                    <span
                      class="p"
                    >{{ oneStaff.surname }}'s schedule to go here</span>
                  </div>
                  <div v-if="tab === 3" class="text-gray-500 p-5">
                    <span
                      class="p"
                    >{{ oneStaff.surname }}'s Qualifications to go here</span>
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
import { mapActions, mapState, mapMutations } from 'vuex'
import Modal from '../../../components/Modal.vue'
import StaffDetails from '../../../components/StaffDetails.vue'

export default {
  components: { Modal, StaffDetails },
  layout: 'dashboard',
  data () {
    return {
      staff: null,
      tab: 1,
      modalVisible: false
    }
  },
  // async fetch () {
  //   this.staff.data = await this.$axios.get(`/users/${this.$route.params.id}`)
  // },
  // fetchOnServer: true,
  // async fetch () {
  //   const response = await this.$axios.get(`/users/${this.$route.params.id}`)
  //   // console.log(response)
  //   this.staff = response.data
  // },
  // fetchOnServer: true,
  computed: {
    // ...mapState('authentication', ['staff'])
    ...mapState('staff', ['oneStaff', 'editStaffDetails'])
  },
  mounted () {
    this.getCurrentStaff()
  },
  // mounted () {},
  methods: {
    ...mapActions('staff', ['GET_ONE_STAFF']),
    ...mapMutations('staff', ['EDIT_STAFF_DETAILS']),

    currentTab (tabNumber) {
      this.tab = tabNumber
    },
    async getCurrentStaff () {
      await this.GET_ONE_STAFF(this.$route.params.id)
    },

    editProfile () {
      this.EDIT_STAFF_DETAILS()
      this.modalVisible = true
    }
  }
}
</script>

<style></style>
