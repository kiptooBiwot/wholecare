<template>
  <div class="bg-white w-full h-auto p-6 shadow-xl rounded-lg">
    <div
      class="w-full text-lg text-gray-500 font-bold justify-end md:text-xl md:font-bold"
    >
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
            <input
              id="yes"
              v-model="needsMobilityAssistance"
              type="radio"
              name="needs-mobility-assistance"
              value="Yes"
            >
            <label
              for="yes"
              class="text-xs font-medium text-gray-500"
            >Yes</label><br>
            <input
              id="no"
              v-model="needsMobilityAssistance"
              type="radio"
              name="needs-mobility-assistance"
              value="No"
            >
            <label for="no" class="text-xs font-medium text-gray-500">No</label>
          </fieldset>
          <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
            <legend class="text-xs px-1 font-medium text-gray-500">
              Independent
            </legend>
            <input
              id="yes"
              v-model="mobilityIndependent"
              type="radio"
              name="mobility-independent"
              value="Yes"
            >
            <label
              for="yes"
              class="text-xs font-medium text-gray-500"
            >Yes</label><br>
            <input
              id="no"
              v-model="mobilityIndependent"
              type="radio"
              name="mobility-independent"
              value="No"
            >
            <label for="no" class="text-xs font-medium text-gray-500">No</label>
          </fieldset>
        </div>
        <div class="block">
          <label
            for="mobility-description"
            class="text-xs font-medium text-gray-500"
          >Description</label>
          <textarea
            id="mobility-description"
            v-model="mobilityDescription"
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
              <input
                id="nill-issues"
                v-model="hearingIssues"
                type="checkbox"
                name="nill"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label for="nill-issues" class="ml-2 block text-xs text-gray-500">
                Nill issues
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="some-issues"
                v-model="hearingIssues"
                type="checkbox"
                name="some"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label for="some-issues" class="ml-2 block text-xs text-gray-500">
                Some issues
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="impaired"
                v-model="hearingIssues"
                type="checkbox"
                name="impaired"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label for="impaired" class="ml-2 block text-xs text-gray-500">
                Hearing impaired
              </label>
            </div>
          </div>
          <div class="block">
            <label
              for="hearing-description"
              class="text-xs font-medium text-gray-500"
            >Description</label>
            <textarea
              id="hearing-description"
              v-model="hearingDescription"
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
              <input
                id="vision-nill-issues"
                v-model="visionIssues"
                type="checkbox"
                name="vision-nill"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label
                for="vision-nill-issues"
                class="ml-2 block text-xs text-gray-500"
              >
                Nill issues
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="vision-some-issues"
                v-model="visionIssues"
                type="checkbox"
                name="vision-some"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label
                for="vision-some-issues"
                class="ml-2 block text-xs text-gray-500"
              >
                Some issues
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="vision-impaired"
                v-model="visionIssues"
                type="checkbox"
                name="vision-impaired"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label
                for="vision-impaired"
                class="ml-2 block text-xs text-gray-500"
              >
                Vision impaired
              </label>
            </div>
          </div>
          <div class="block">
            <label
              for="vision-description"
              class="text-xs font-medium text-gray-500"
            >Description</label>
            <textarea
              id="vision-description"
              v-model="visionDescription"
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
            <input
              id="yes"
              v-model="needsCommunicationAssistance"
              type="radio"
              name="needs-communication-assistance"
              value="Yes"
            >
            <label
              for="yes"
              class="text-xs font-medium text-gray-500"
            >Yes</label><br>
            <input
              id="no"
              v-model="needsCommunicationAssistance"
              type="radio"
              name="needs-communication-assistance"
              value="No"
            >
            <label for="no" class="text-xs font-medium text-gray-500">No</label>
          </fieldset>
          <span class="text-xs px-1 font-medium text-gray-500">
            How do you prefer to communicate?
          </span>
          <div class="block pl-4 space-y-1">
            <div class="flex items-center">
              <input
                id="verbally"
                v-model="communicationPreference"
                type="checkbox"
                value="Verbally"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label for="verbally" class="ml-2 block text-xs text-gray-500">
                Verbally
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="aslan"
                v-model="communicationPreference"
                type="checkbox"
                value="Aslan"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label for="aslan" class="ml-2 block text-xs text-gray-500">
                Aslan
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="makaton"
                v-model="communicationPreference"
                type="checkbox"
                value="Makaton"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label for="makaton" class="ml-2 block text-xs text-gray-500">
                Makaton
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="aslan-makaton"
                v-model="communicationPreference"
                type="checkbox"
                value="A Combination of Aslan and Makaton"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label
                for="aslan-makaton"
                class="ml-2 block text-xs text-gray-500"
              >
                A Combination of Aslan and Makaton
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="non-verbal"
                v-model="communicationPreference"
                type="checkbox"
                value="Non-verbal/vocalize"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label for="non-verbal" class="ml-2 block text-xs text-gray-500">
                Non-verbal/vocalize
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="point-gesture"
                v-model="communicationPreference"
                type="checkbox"
                value="Point gesture"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label
                for="point-gesture"
                class="ml-2 block text-xs text-gray-500"
              >
                Point gesture
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="ipad"
                v-model="communicationPreference"
                type="checkbox"
                value="iPad"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label for="ipad" class="ml-2 block text-xs text-gray-500">
                iPad
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="pecs"
                v-model="communicationPreference"
                type="checkbox"
                value="PECS"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label for="pecs" class="ml-2 block text-xs text-gray-500">
                PECS
              </label>
            </div>
          </div>
          <div class="block">
            <label
              for="communication-other"
              class="text-xs font-medium text-gray-500"
            >Other</label>
            <input
              id="communication-other"
              v-model="otherCommunication"
              type="text"
              name="communication-other"
              class="placeholder-gray-300"
              placeholder="Other commication ways"
            >
          </div>
        </div>
        <div class="block">
          <label
            for="interpreter"
            class="text-xs font-medium text-gray-500"
          >Have you had a communication assessment?</label><br>
          <input
            id="yes"
            v-model="hadCommunicationAssessment"
            type="radio"
            name="communication-assessment"
            value="Yes"
          >
          <label for="yes" class="text-xs font-medium text-gray-500">Yes</label><br>
          <input
            id="no"
            v-model="hadCommunicationAssessment"
            type="radio"
            name="communication-assessment"
            value="No"
          >
          <label for="no" class="text-xs font-medium text-gray-500">No</label><br>
        </div>
        <hr class="border-gray-200 my-4">
        <div class="block space-y-2">
          <span class="text-lg text-gray-500 font-semibold">
            Memory/Cognition
          </span>
          <div class="block pl-4 space-y-1">
            <div class="flex items-center">
              <input
                id="memory-nill-issues"
                v-model="memoryCognition"
                type="checkbox"
                value="Nill issues"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label
                for="memory-nill-issues"
                class="ml-2 block text-xs text-gray-500"
              >
                Nill issues
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="memory-some-issues"
                v-model="memoryCognition"
                type="checkbox"
                value="Some issues"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label
                for="memory-some-issues"
                class="ml-2 block text-xs text-gray-500"
              >
                Some issues
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="memory-impaired"
                v-model="memoryCognition"
                type="checkbox"
                value="Vision impaired"
                class="rounded text-blue-600 focus:ring-blue-600"
              >
              <label
                for="memory-impaired"
                class="ml-2 block text-xs text-gray-500"
              >
                Vision impaired
              </label>
            </div>
          </div>
          <div class="block">
            <label
              for="meory-description"
              class="text-xs font-medium text-gray-500"
            >Description</label>
            <textarea
              id="meory-description"
              v-model="memoryDescription"
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
export default {}
</script>

<style></style>
