<template>
  <div class="bg-white w-full h-auto p-6 shadow-xl rounded-lg">
    <div class="w-full text-lg text-gray-500 font-bold justify-end md:text-xl md:font-bold">
      Health Support Needs
    </div>
    <div class="block md:flex md:justify-between md:gap-6">
      <div class="block md:w-1/2">
        <div class="block space-y-4 my-2">
          <span class="text-lg text-gray-500 font-semibold">
            Mobility
          </span>
          <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
            <legend class="text-xs px-1 font-medium text-gray-500">
              Needs assistance?
            </legend>
            <input id="yes" type="radio" name="needs-mobility-assistance" value="yes">
            <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
            <input id="no" type="radio" name="needs-mobility-assistance" value="no">
            <label for="no" class="text-xs font-medium text-gray-500">No</label>
          </fieldset>
          <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
            <legend class="text-xs px-1 font-medium text-gray-500">
              Independent
            </legend>
            <input id="yes" type="radio" name="mobility-independent" value="yes">
            <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
            <input id="no" type="radio" name="mobility-independent" value="no">
            <label for="no" class="text-xs font-medium text-gray-500">No</label>
          </fieldset>
        </div>
        <div class="block">
          <label for="mobility-description" class="text-xs font-medium text-gray-500">Description</label>
          <textarea
            id="mobility-description"
            type="text"
            name="mobility-description"
          />
        </div>
        <hr class="border-gray-200 my-4">
        <div class="block space-y-2">
          <span class="text-lg text-gray-500 font-semibold">
            Hearing
          </span>
          <div class="block pl-4 space-y-1">
            <div class="flex items-center">
              <input id="nill-issues" type="checkbox" name="nill" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="nill-issues" class="ml-2 block text-xs text-gray-500">
                Nill issues
              </label>
            </div>
            <div class="flex items-center">
              <input id="some-issues" type="checkbox" name="some" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="some-issues" class="ml-2 block text-xs text-gray-500">
                Some issues
              </label>
            </div>
            <div class="flex items-center">
              <input id="impaired" type="checkbox" name="impaired" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="impaired" class="ml-2 block text-xs text-gray-500">
                Hearing impaired
              </label>
            </div>
          </div>
          <div class="block">
            <label for="hearing-description" class="text-xs font-medium text-gray-500">Description</label>
            <textarea
              id="hearing-description"
              type="text"
              name="hearing-description"
            />
          </div>
        </div>
        <hr class="border-gray-200 my-4">
        <div class="block space-y-2">
          <span class="text-lg text-gray-500 font-semibold">
            Vision
          </span>
          <div class="block pl-4 space-y-1">
            <div class="flex items-center">
              <input id="vision-nill-issues" type="checkbox" name="vision-nill" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="vision-nill-issues" class="ml-2 block text-xs text-gray-500">
                Nill issues
              </label>
            </div>
            <div class="flex items-center">
              <input id="vision-some-issues" type="checkbox" name="vision-some" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="vision-some-issues" class="ml-2 block text-xs text-gray-500">
                Some issues
              </label>
            </div>
            <div class="flex items-center">
              <input id="vision-impaired" type="checkbox" name="vision-impaired" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="vision-impaired" class="ml-2 block text-xs text-gray-500">
                Vision impaired
              </label>
            </div>
          </div>
          <div class="block">
            <label for="vision-description" class="text-xs font-medium text-gray-500">Description</label>
            <textarea
              id="vision-description"
              type="text"
              name="vision-description"
            />
          </div>
        </div>
      </div>
      <!-- SECOND COLUMN -->
      <div class="block md:w-1/2">
        <div class="block my-4 space-y-2">
          <span class="text-lg text-gray-500 font-semibold">
            Communication
          </span>
          <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
            <legend class="text-xs px-1 font-medium text-gray-500">
              Needs assistance?
            </legend>
            <input id="yes" type="radio" name="needs-communication-assistance" value="yes">
            <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
            <input id="no" type="radio" name="needs-communication-assistance" value="no">
            <label for="no" class="text-xs font-medium text-gray-500">No</label>
          </fieldset>
          <span class="text-xs px-1 font-medium text-gray-500">
            How do you prefer to communicate?
          </span>
          <div class="block pl-4 space-y-1">
            <div class="flex items-center">
              <input id="verbally" type="checkbox" name="verbally" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="verbally" class="ml-2 block text-xs text-gray-500">
                Verbally
              </label>
            </div>
            <div class="flex items-center">
              <input id="aslan" type="checkbox" name="aslan" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="aslan" class="ml-2 block text-xs text-gray-500">
                Aslan
              </label>
            </div>
            <div class="flex items-center">
              <input id="makaton" type="checkbox" name="makaton" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="makaton" class="ml-2 block text-xs text-gray-500">
                Makaton
              </label>
            </div>
            <div class="flex items-center">
              <input id="aslan-makaton" type="checkbox" name="aslan-makaton" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="aslan-makaton" class="ml-2 block text-xs text-gray-500">
                A Combination of Aslan and Makaton
              </label>
            </div>
            <div class="flex items-center">
              <input id="non-verbal" type="checkbox" name="non-verbal" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="non-verbal" class="ml-2 block text-xs text-gray-500">
                Non-verbal/vocalize
              </label>
            </div>
            <div class="flex items-center">
              <input id="point-gesture" type="checkbox" name="point-gesture" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="point-gesture" class="ml-2 block text-xs text-gray-500">
                Point gesture
              </label>
            </div>
            <div class="flex items-center">
              <input id="ipad" type="checkbox" name="ipad" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="ipad" class="ml-2 block text-xs text-gray-500">
                iPad
              </label>
            </div>
            <div class="flex items-center">
              <input id="pecs" type="checkbox" name="pecs" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="pecs" class="ml-2 block text-xs text-gray-500">
                PECS
              </label>
            </div>
          </div>
          <div class="block">
            <label for="communication-other" class="text-xs font-medium text-gray-500">Other</label>
            <input
              id="communication-other"
              type="text"
              name="communication-other"
              class="placeholder-gray-300"
              placeholder="Other commication ways"
            >
          </div>
        </div>
        <div class="block">
          <label for="interpreter" class="text-xs font-medium text-gray-500">Have you had a communication assessment?</label><br>
          <input id="yes" type="radio" name="communication-assessment" value="yes">
          <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
          <input id="no" type="radio" name="communication-assessment" value="no">
          <label for="no" class="text-xs font-medium text-gray-500">No</label><br>
        </div>
        <hr class="border-gray-200 my-4">
        <div class="block space-y-2">
          <span class="text-lg text-gray-500 font-semibold">
            Memory/Cognition
          </span>
          <div class="block pl-4 space-y-1">
            <div class="flex items-center">
              <input id="memory-nill-issues" type="checkbox" name="memory-nill" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="memory-nill-issues" class="ml-2 block text-xs text-gray-500">
                Nill issues
              </label>
            </div>
            <div class="flex items-center">
              <input id="memory-some-issues" type="checkbox" name="memory-some" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="memory-some-issues" class="ml-2 block text-xs text-gray-500">
                Some issues
              </label>
            </div>
            <div class="flex items-center">
              <input id="memory-impaired" type="checkbox" name="memory-impaired" class="rounded text-blue-600 focus:ring-blue-600">
              <label for="memory-impaired" class="ml-2 block text-xs text-gray-500">
                Vision impaired
              </label>
            </div>
          </div>
          <div class="block">
            <label for="meory-description" class="text-xs font-medium text-gray-500">Description</label>
            <textarea
              id="meory-description"
              type="text"
              name="meory-description"
            />
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
