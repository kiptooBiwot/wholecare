<template>
  <div class="bg-white w-full h-auto p-6 shadow-xl rounded-lg">
    <div class="w-full text-lg text-gray-500 font-bold justify-end md:text-xl md:font-bold">
      Disability Support Needs
    </div>
    <div class="block md:flex md:justify-between md:gap-6">
      <div class="block md:w-1/2 space-y-2">
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-lg px-1 font-semibold text-gray-500">
            Aids and Equipment
          </legend>
          <div class="block my-4 space-y-2">
            <div class="block">
              <label for="aid-equipment" class="text-xs font-medium text-gray-500">Aid/Equipment used</label>
              <input
                id="aid-equipment"
                v-model="aidEquipmentUsed"
                type="text"
                name="aid-equipment"
                class=""
              >
            </div>
            <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
              <legend class="text-xs px-1 font-medium text-gray-500">
                Needs assistance?
              </legend>
              <input id="assistance-yes" v-model="needsAssistance" type="radio" name="aid-equpmt" value="Yes">
              <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
              <input id="assistance-no" v-model="needsAssistance" type="radio" name="aid-equpmt" value="No">
              <label for="no" class="text-xs font-medium text-gray-500">No</label>
            </fieldset>
            <div class="block">
              <label for="staff-training" class="text-xs font-medium text-gray-500">Will staff require training in its use?</label>
              <input
                id="staff-training"
                v-model="staffRequireTraining"
                type="text"
                name="staff-training"
                class=""
              >
            </div>
          </div>
        </fieldset>
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-lg px-1 font-semibold text-gray-500">
            Showering/Bathing
          </legend>
          <div class="block space-y-2">
            <div class="block pl-4 space-y-2">
              <div class="flex items-center">
                <input id="showering-no-help" v-model="showeringAssistance" type="radio" name="showering-no-help" value="No help required">
                <label for="showering-no-help" class="ml-2 block text-xs text-gray-500">
                  No help required
                </label>
              </div>
              <div class="flex items-center">
                <input id="showering-aids-required" v-model="showeringAssistance" type="radio" name="showering-aids-required" value="Aids required">
                <label for="showering-aids-required" class="ml-2 block text-xs text-gray-500">
                  Aids required
                </label>
              </div>
              <div class="flex items-center">
                <input id="showering-some-support" v-model="showeringAssistance" type="radio" name="showering-some-support" value="Some support required">
                <label for="showering-some-support" class="ml-2 block text-xs text-gray-500">
                  Some support required
                </label>
              </div>
              <div class="flex items-center">
                <input id="showering-prompting-required" v-model="showeringAssistance" type="radio" name="showering-prompting-required" value="Prompting required">
                <label for="showering-prompting-required" class="ml-2 block text-xs text-gray-500">
                  Prompting required
                </label>
              </div>
              <div class="flex items-center">
                <input id="showering-full-support" v-model="showeringAssistance" type="radio" name="showering-full-support" value="Full physical support required">
                <label for="showering-full-support" class="ml-2 block text-xs text-gray-500">
                  Full physical support required
                </label>
              </div>
            </div>
            <div class="block">
              <label for="showering-details" class="text-xs font-medium text-gray-500">Additional Details</label>
              <textarea
                id="showering-details"
                v-model="showeringDetails"
                type="text"
                name="showering-details"
              />
            </div>
          </div>
        </fieldset>
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-lg px-1 font-semibold text-gray-500">
            Grooming
          </legend>
          <div class="block space-y-2">
            <div class="block pl-4 space-y-2">
              <div class="flex items-center">
                <input id="grooming-no-help" v-model="groomingAssistance" type="radio" name="grooming-no-help" value="No help required">
                <label for="grooming-no-help" class="ml-2 block text-xs text-gray-500">
                  No help required
                </label>
              </div>
              <div class="flex items-center">
                <input id="grooming-aids-required" v-model="groomingAssistance" type="radio" name="grooming-aids-required" value="Aid required">
                <label for="grooming-aids-required" class="ml-2 block text-xs text-gray-500">
                  Aids required
                </label>
              </div>
              <div class="flex items-center">
                <input id="grooming-some-support" v-model="groomingAssistance" type="radio" name="grooming-some-support" value="Some support required">
                <label for="grooming-some-support" class="ml-2 block text-xs text-gray-500">
                  Some support required
                </label>
              </div>
              <div class="flex items-center">
                <input id="grooming-prompting-required" v-model="groomingAssistance" type="radio" name="grooming-prompting-required" value="Propmpting required">
                <label for="grooming-prompting-required" class="ml-2 block text-xs text-gray-500">
                  Prompting required
                </label>
              </div>
              <div class="flex items-center">
                <input id="grooming-full-support" v-model="groomingAssistance" type="radio" name="grooming-full-support" value="Full physical support required">
                <label for="grooming-full-support" class="ml-2 block text-xs text-gray-500">
                  Full physical support required
                </label>
              </div>
            </div>
            <div class="block">
              <label for="grooming-details" class="text-xs font-medium text-gray-500">Additional Details</label>
              <textarea
                id="grooming-details"
                v-model="groomingDetails"
                type="text"
                name="grooming-details"
              />
            </div>
          </div>
        </fieldset>
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-lg px-1 font-semibold text-gray-500">
            Dressing
          </legend>
          <div class="block space-y-2">
            <div class="block pl-4 space-y-2">
              <div class="flex items-center">
                <input id="dressing-no-help" v-model="dressingAssistance" type="radio" name="dressing-no-help" value="No help required">
                <label for="dressing-no-help" class="ml-2 block text-xs text-gray-500">
                  No help required
                </label>
              </div>
              <div class="flex items-center">
                <input id="dressing-aids-required" v-model="dressingAssistance" type="radio" name="dressing-aids-required" value="Aids required">
                <label for="dressing-aids-required" class="ml-2 block text-xs text-gray-500">
                  Aids required
                </label>
              </div>
              <div class="flex items-center">
                <input id="dressing-some-support" v-model="dressingAssistance" type="radio" name="dressing-some-support" value="Some support required">
                <label for="dressing-some-support" class="ml-2 block text-xs text-gray-500">
                  Some support required
                </label>
              </div>
              <div class="flex items-center">
                <input id="dressing-prompting-required" v-model="dressingAssistance" type="radio" name="dressing-prompting-required" value="Prompting required">
                <label for="dressing-prompting-required" class="ml-2 block text-xs text-gray-500">
                  Prompting required
                </label>
              </div>
              <div class="flex items-center">
                <input id="dressing-full-support" v-model="dressingAssistance" type="radio" name="dressing-full-support" value="Full physical support required">
                <label for="dressing-full-support" class="ml-2 block text-xs text-gray-500">
                  Full physical support required
                </label>
              </div>
            </div>
            <div class="block">
              <label for="dressing-details" class="text-xs font-medium text-gray-500">Additional Details</label>
              <textarea
                id="dressing-details"
                v-model="dressingDetails"
                type="text"
                name="dressing-details"
              />
            </div>
          </div>
        </fieldset>
      </div>
      <div class="block md:w-1/2 space-y-2">
        <div class="block space-y-2">
          <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
            <legend class="text-lg px-1 font-semibold text-gray-500">
              Toileting
            </legend>
            <div class="block pl-4 space-y-2">
              <div class="flex items-center">
                <input id="toileting-no-help" v-model="toiletingAssistance" type="radio" name="toileting-no-help" value="No help required">
                <label for="toileting-no-help" class="ml-2 block text-xs text-gray-500">
                  No help required
                </label>
              </div>
              <div class="flex items-center">
                <input id="toileting-aids-required" v-model="toiletingAssistance" type="radio" name="toileting-aids-required" value="Aids required">
                <label for="toileting-aids-required" class="ml-2 block text-xs text-gray-500">
                  Aids required
                </label>
              </div>
              <div class="flex items-center">
                <input id="toileting-some-support" v-model="toiletingAssistance" type="radio" name="toileting-some-support" value="Some support required">
                <label for="toileting-some-support" class="ml-2 block text-xs text-gray-500">
                  Some support required
                </label>
              </div>
              <div class="flex items-center">
                <input id="toileting-prompting-required" v-model="toiletingAssistance" type="radio" name="toileting-prompting-required" value="Prompting required">
                <label for="toileting-prompting-required" class="ml-2 block text-xs text-gray-500">
                  Prompting required
                </label>
              </div>
              <div class="flex items-center">
                <input id="toileting-full-support" v-model="toiletingAssistance" type="radio" name="toileting-full-support" value="Full physical support required">
                <label for="toileting-full-support" class="ml-2 block text-xs text-gray-500">
                  Full physical support required
                </label>
              </div>
            </div>
            <div class="block">
              <label for="toileting-details" class="text-xs font-medium text-gray-500">Additional Details</label>
              <textarea
                id="toileting-details"
                v-model="toiletingDetails"
                type="text"
                name="toileting-details"
              />
            </div>
          </fieldset>
          <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
            <legend class="text-lg px-1 font-semibold text-gray-500">
              Eating
            </legend>
            <div class="block space-y-2">
              <div class="block pl-4 space-y-2">
                <div class="flex items-center">
                  <input id="eating-no-help" v-model="eatingAssistance" type="radio" name="eating-no-help" value="No help required">
                  <label for="eating-no-help" class="ml-2 block text-xs text-gray-500">
                    No help required
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="eating-aids-required" v-model="eatingAssistance" type="radio" name="eating-aids-required" value="Aids required">
                  <label for="eating-aids-required" class="ml-2 block text-xs text-gray-500">
                    Aids required
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="eating-some-support" v-model="eatingAssistance" type="radio" name="eating-some-support" value="Some support required">
                  <label for="eating-some-support" class="ml-2 block text-xs text-gray-500">
                    Some support required
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="eating-prompting-required" v-model="eatingAssistance" type="radio" name="eating-prompting-required" value="Prompting required">
                  <label for="eating-prompting-required" class="ml-2 block text-xs text-gray-500">
                    Prompting required
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="eating-full-support" v-model="eatingAssistance" type="radio" name="eating-full-support" value="Full physical support required">
                  <label for="eating-full-support" class="ml-2 block text-xs text-gray-500">
                    Full physical support required
                  </label>
                </div>
              </div>
              <div class="block">
                <label for="eating-details" class="text-xs font-medium text-gray-500">Additional Details</label>
                <textarea
                  id="eating-details"
                  v-model="eatingDetails"
                  type="text"
                  name="eating-details"
                />
              </div>
            </div>
          </fieldset>
          <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
            <legend class="text-lg px-1 font-semibold text-gray-500">
              Transfers (In and out of bed)
            </legend>
            <div class="block space-y-2">
              <div class="block pl-4 space-y-2">
                <div class="flex items-center">
                  <input id="transfer-no-help" v-model="transferAssistance" type="radio" name="transfer-no-help" value="No help required">
                  <label for="transfer-no-help" class="ml-2 block text-xs text-gray-500">
                    No help required
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="transfer-aids-required" v-model="transferAssistance" type="radio" name="transfer-aids-required" value="Aids required">
                  <label for="transfer-aids-required" class="ml-2 block text-xs text-gray-500">
                    Aids required
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="transfer-some-support" v-model="transferAssistance" type="radio" name="transfer-some-support" value="Some support required">
                  <label for="transfer-some-support" class="ml-2 block text-xs text-gray-500">
                    Some support required
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="transfer-prompting-required" v-model="transferAssistance" type="radio" name="transfer-prompting-required" value="Prompting required">
                  <label for="transfer-prompting-required" class="ml-2 block text-xs text-gray-500">
                    Prompting required
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="transfer-full-support" v-model="transferAssistance" type="radio" name="transfer-full-support" value="Full physical support required">
                  <label for="transfer-full-support" class="ml-2 block text-xs text-gray-500">
                    Full physical support required
                  </label>
                </div>
              </div>
              <div class="block">
                <label for="transfer-details" class="text-xs font-medium text-gray-500">Additional Details</label>
                <textarea
                  id="transfer-details"
                  v-model="transferDetails"
                  type="text"
                  name="transfer-details"
                />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields('participants', [
      'aidEquipmentUsed',
      'needsAssistance',
      'staffRequireTraining',
      'showeringAssistance',
      'showeringDetails',
      'groomingAssistance',
      'groomingDetails',
      'dressingAssistance',
      'dressingDetails',
      'toiletingAssistance',
      'toiletingDetails',
      'eatingAssistance',
      'eatingDetails',
      'transferAssistance',
      'transferDetails'
    ])
  }
}
</script>

<style>

</style>
