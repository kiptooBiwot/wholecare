<template>
  <div class="p-4 space-y-2">
    <div class="block gap-4 space-y-2 md:items-center md:flex justify-between">
      <div class="block">
        <label for="firstName" class="text-sm font-medium text-gray-500">First Name</label>
        <input
          id="first-name"
          v-model="basicInfo.firstName"
          type="text"
          name="first-name"
          class=""
        >
      </div>
      <div class="block">
        <label for="middleName" class="text-sm font-medium text-gray-500">Middle Name</label>
        <input
          id="middle-name"
          v-model="basicInfo.middleName"
          type="text"
          name="middle-name"
          class=""
        >
      </div>
    </div>
    <div class="block gap-4 space-y-2 md:items-center md:flex justify-between">
      <div class="block">
        <label for="surname" class="text-sm font-medium text-gray-500">Surname</label>
        <input
          id="surname-name"
          v-model="basicInfo.surname"
          type="text"
          name="surname-name"
          class=""
        >
      </div>
      <div class="block">
        <label for="title" class="text-sm font-medium text-gray-500">Title</label>
        <input
          id="title"
          v-model="basicInfo.title"
          type="text"
          name="title"
          class=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    basicInfo: {
      firstName: '',
      middleName: '',
      surname: '',
      title: '',
      address: '',
      mobileNumber: '',
      homeNumber: '',
      workNumber: '',
      profilePic: '',
      bio: ''
    }
  })
}
</script>

<style>

</style>
