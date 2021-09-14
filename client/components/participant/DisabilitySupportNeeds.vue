<template>
  <div class="bg-white w-full h-auto p-6 shadow-xl rounded-lg">
    <div class="w-full text-lg text-gray-500 font-bold justify-end md:text-xl md:font-bold">
      Disability Support Needs
    </div>
    <div class="block md:flex md:justify-between md:gap-6">
      <div class="block md:w-1/2 space-y-2">
        <div class="block my-4 space-y-2">
          <span class="text-lg text-gray-500 font-semibold">
            Aids and Equipment
          </span>
          <div class="block">
            <label for="aid-equipment" class="text-xs font-medium text-gray-500">Aid/Equipment used</label>
            <input
              id="aid-equipment"
              type="text"
              name="aid-equipment"
              class=""
            >
          </div>
          <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
            <legend class="text-xs px-1 font-medium text-gray-500">
              Needs assistance?
            </legend>
            <input id="yes" type="radio" name="aid-equpmt" value="yes">
            <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
            <input id="no" type="radio" name="aid-equpmt" value="no">
            <label for="no" class="text-xs font-medium text-gray-500">No</label>
          </fieldset>
          <div class="block">
            <label for="staff-training" class="text-xs font-medium text-gray-500">Will staff require training in its use?</label>
            <input
              id="staff-training"
              type="text"
              name="staff-training"
              class=""
            >
          </div>
        </div>
        <hr class="mt-3 mb-3">
        <div class="block space-y-2">
          <span class="text-lg text-gray-500 font-semibold">
            Showering/Bathing
          </span>
          <div class="block pl-4 space-y-2">
            <div class="flex items-center">
              <input id="no-help" type="checkbox" name="no-help" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="no-help" class="ml-2 block text-xs text-gray-500">
                No help required
              </label>
            </div>
            <div class="flex items-center">
              <input id="aids-required" type="checkbox" name="aids-required" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="aids-required" class="ml-2 block text-xs text-gray-500">
                Aids required
              </label>
            </div>
            <div class="flex items-center">
              <input id="some-support" type="checkbox" name="some-support" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="some-support" class="ml-2 block text-xs text-gray-500">
                Some support required
              </label>
            </div>
            <div class="flex items-center">
              <input id="prompting-required" type="checkbox" name="prompting-required" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="prompting-required" class="ml-2 block text-xs text-gray-500">
                Prompting required
              </label>
            </div>
            <div class="flex items-center">
              <input id="full-support" type="checkbox" name="full-support" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="full-support" class="ml-2 block text-xs text-gray-500">
                Full physical support required
              </label>
            </div>
          </div>
          <div class="block">
            <label for="showering-details" class="text-xs font-medium text-gray-500">Additional Details</label>
            <textarea
              id="showering-details"
              type="text"
              name="showering-details"
            />
          </div>
        </div>
        <hr class="mt-3 mb-3">
        <div class="block space-y-2">
          <span class="text-lg text-gray-500 font-semibold">
            Grooming
          </span>
          <div class="block pl-4 space-y-2">
            <div class="flex items-center">
              <input id="no-help" type="checkbox" name="no-help" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="no-help" class="ml-2 block text-xs text-gray-500">
                No help required
              </label>
            </div>
            <div class="flex items-center">
              <input id="aids-required" type="checkbox" name="aids-required" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="aids-required" class="ml-2 block text-xs text-gray-500">
                Aids required
              </label>
            </div>
            <div class="flex items-center">
              <input id="some-support" type="checkbox" name="some-support" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="some-support" class="ml-2 block text-xs text-gray-500">
                Some support required
              </label>
            </div>
            <div class="flex items-center">
              <input id="prompting-required" type="checkbox" name="prompting-required" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="prompting-required" class="ml-2 block text-xs text-gray-500">
                Prompting required
              </label>
            </div>
            <div class="flex items-center">
              <input id="full-support" type="checkbox" name="full-support" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="full-support" class="ml-2 block text-xs text-gray-500">
                Full physical support required
              </label>
            </div>
          </div>
          <div class="block">
            <label for="showering-details" class="text-xs font-medium text-gray-500">Additional Details</label>
            <textarea
              id="showering-details"
              type="text"
              name="showering-details"
            />
          </div>
        </div>
        <hr class="mt-3 mb-3">
        <div class="block space-y-2">
          <span class="text-lg text-gray-500 font-semibold">
            Dressing
          </span>
          <div class="block pl-4 space-y-2">
            <div class="flex items-center">
              <input id="no-help" type="checkbox" name="no-help" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="no-help" class="ml-2 block text-xs text-gray-500">
                No help required
              </label>
            </div>
            <div class="flex items-center">
              <input id="aids-required" type="checkbox" name="aids-required" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="aids-required" class="ml-2 block text-xs text-gray-500">
                Aids required
              </label>
            </div>
            <div class="flex items-center">
              <input id="some-support" type="checkbox" name="some-support" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="some-support" class="ml-2 block text-xs text-gray-500">
                Some support required
              </label>
            </div>
            <div class="flex items-center">
              <input id="prompting-required" type="checkbox" name="prompting-required" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="prompting-required" class="ml-2 block text-xs text-gray-500">
                Prompting required
              </label>
            </div>
            <div class="flex items-center">
              <input id="full-support" type="checkbox" name="full-support" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="full-support" class="ml-2 block text-xs text-gray-500">
                Full physical support required
              </label>
            </div>
          </div>
          <div class="block">
            <label for="showering-details" class="text-xs font-medium text-gray-500">Additional Details</label>
            <textarea
              id="showering-details"
              type="text"
              name="showering-details"
            />
          </div>
        </div>
      </div>
      <div class="block md:w-1/2 space-y-2">
        <div class="block space-y-2 md:mt-6">
          <span class="text-lg text-gray-500 font-semibold">
            Toileting
          </span>
          <div class="block pl-4 space-y-2">
            <div class="flex items-center">
              <input id="no-help" type="checkbox" name="no-help" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="no-help" class="ml-2 block text-xs text-gray-500">
                No help required
              </label>
            </div>
            <div class="flex items-center">
              <input id="aids-required" type="checkbox" name="aids-required" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="aids-required" class="ml-2 block text-xs text-gray-500">
                Aids required
              </label>
            </div>
            <div class="flex items-center">
              <input id="some-support" type="checkbox" name="some-support" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="some-support" class="ml-2 block text-xs text-gray-500">
                Some support required
              </label>
            </div>
            <div class="flex items-center">
              <input id="prompting-required" type="checkbox" name="prompting-required" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="prompting-required" class="ml-2 block text-xs text-gray-500">
                Prompting required
              </label>
            </div>
            <div class="flex items-center">
              <input id="full-support" type="checkbox" name="full-support" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="full-support" class="ml-2 block text-xs text-gray-500">
                Full physical support required
              </label>
            </div>
          </div>
          <div class="block">
            <label for="showering-details" class="text-xs font-medium text-gray-500">Additional Details</label>
            <textarea
              id="showering-details"
              type="text"
              name="showering-details"
            />
          </div>
          <hr class="mt-3 mb-3">
          <div class="block space-y-2">
            <span class="text-lg text-gray-500 font-semibold">
              Eating
            </span>
            <div class="block pl-4 space-y-2">
              <div class="flex items-center">
                <input id="no-help" type="checkbox" name="no-help" class="rounded text-blue-600 focus:ring-blue-600">
                <label for="no-help" class="ml-2 block text-xs text-gray-500">
                  No help required
                </label>
              </div>
              <div class="flex items-center">
                <input id="aids-required" type="checkbox" name="aids-required" class="rounded text-blue-600 focus:ring-blue-600">
                <label for="aids-required" class="ml-2 block text-xs text-gray-500">
                  Aids required
                </label>
              </div>
              <div class="flex items-center">
                <input id="some-support" type="checkbox" name="some-support" class="rounded text-blue-600 focus:ring-blue-600">
                <label for="some-support" class="ml-2 block text-xs text-gray-500">
                  Some support required
                </label>
              </div>
              <div class="flex items-center">
                <input id="prompting-required" type="checkbox" name="prompting-required" class="rounded text-blue-600 focus:ring-blue-600">
                <label for="prompting-required" class="ml-2 block text-xs text-gray-500">
                  Prompting required
                </label>
              </div>
              <div class="flex items-center">
                <input id="full-support" type="checkbox" name="full-support" class="rounded text-blue-600 focus:ring-blue-600">
                <label for="full-support" class="ml-2 block text-xs text-gray-500">
                  Full physical support required
                </label>
              </div>
            </div>
            <div class="block">
              <label for="showering-details" class="text-xs font-medium text-gray-500">Additional Details</label>
              <textarea
                id="showering-details"
                type="text"
                name="showering-details"
              />
            </div>
          </div>
          <hr class="mt-3 mb-3">
          <div class="block space-y-2">
            <span class="text-lg text-gray-500 font-semibold">
              Transfers (In and out of bed)
            </span>
            <div class="block pl-4 space-y-2">
              <div class="flex items-center">
                <input id="no-help" type="checkbox" name="no-help" class="rounded text-blue-600 focus:ring-blue-600">
                <label for="no-help" class="ml-2 block text-xs text-gray-500">
                  No help required
                </label>
              </div>
              <div class="flex items-center">
                <input id="aids-required" type="checkbox" name="aids-required" class="rounded text-blue-600 focus:ring-blue-600">
                <label for="aids-required" class="ml-2 block text-xs text-gray-500">
                  Aids required
                </label>
              </div>
              <div class="flex items-center">
                <input id="some-support" type="checkbox" name="some-support" class="rounded text-blue-600 focus:ring-blue-600">
                <label for="some-support" class="ml-2 block text-xs text-gray-500">
                  Some support required
                </label>
              </div>
              <div class="flex items-center">
                <input id="prompting-required" type="checkbox" name="prompting-required" class="rounded text-blue-600 focus:ring-blue-600">
                <label for="prompting-required" class="ml-2 block text-xs text-gray-500">
                  Prompting required
                </label>
              </div>
              <div class="flex items-center">
                <input id="full-support" type="checkbox" name="full-support" class="rounded text-blue-600 focus:ring-blue-600">
                <label for="full-support" class="ml-2 block text-xs text-gray-500">
                  Full physical support required
                </label>
              </div>
            </div>
            <div class="block">
              <label for="showering-details" class="text-xs font-medium text-gray-500">Additional Details</label>
              <textarea
                id="showering-details"
                type="text"
                name="showering-details"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
