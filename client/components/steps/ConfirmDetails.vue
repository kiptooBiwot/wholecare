<template>
  <div>
    <div class="bg-white w-full h-auto p-6 shadow-xl rounded-lg">
      <div
        class="w-full text-lg text-gray-500 font-bold justify-end md:text-xl md:font-bold mb-4"
      >
        <span>
          Confirm Participant's Details
        </span>
      </div>
      <div class="space-y-3">
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-sm px-1 font-bold text-gray-500">
            Participant's Details
          </legend>
          <div class="md:grid md:grid-cols-2 lg:flex text-md text-gray-500">
            <div class="grid md:w-1/2 lg:w-1/4 items-center justify-center">
              <div class="">
                <span v-if="imageUrl">
                  <img
                    :src="imageUrl"
                    alt="Participant's profile image"
                    class="rounded-full w-36 h-36 object-cover"
                  >
                </span>
                <span v-else>
                  <img
                    src="~/static/img/avatar.png"
                    alt="Participant's profile image"
                    class="rounded-full w-36 h-36 object-cover"
                  >
                </span>
                <div class="flex text-xs font-bold flex-wrap mt-2">
                  {{ firstName + ' ' + middleName + ' ' + surname }}
                </div>
              </div>
            </div>
            <div class="text-xs md:w-1/2 lg:w-1/4 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  First Name:
                </p>
                {{ firstName }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Middle Name:
                </p>
                {{ middleName }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Surname:
                </p>
                {{ surname }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Gender:
                </p>
                {{ gender }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Date of Birth:
                </p>
                {{ dob }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Home Phone Number:
                </p>
                {{ homePhone }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Mobile Phone Number:
                </p>
                {{ mobilePhone }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Work Phone Number:
                </p>
                {{ workPhone }}
              </div>
              <!-- <div class="flex">
              <p class="font-bold pr-3">
                Profile Image:
              </p>
              {{ profileImage }}
            </div> -->
              <div class="flex">
                <p class="font-bold pr-3">
                  Email Address:
                </p>
                {{ emailAddress }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Is an advocate needed?:
                </p>
                {{ advocateNeeded }}
              </div>
            </div>
            <div class="text-xs md:w-1/2 lg:w-1/4 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Do you consent to auditing?:
                </p>
                {{ auditingConsent }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Cultural Preferences:
                </p>
                {{ culturalPreference }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Country of Birth:
                </p>
                {{ countryOfBirth }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Preferred Language:
                </p>
                {{ preferredLanguage }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Cultural Activity:
                </p>
                {{ culturalActivity }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Interpreter Required:
                </p>
                {{ interpreterRequired }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Indegenous Status:
                </p>
                {{ indigenousStatus }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Current Address:
                </p>
                {{ currentAddress }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Cultural Activity:
                </p>
                {{ culturalActivity }}
              </div>
            </div>
            <div class="space-y-2 md:w-1/2 lg:w-1/4 text-xs">
              <div class="flex">
                <p class="font-bold pr-3">
                  Do you have an NDIA Plan?:
                </p>
                {{ haveNdiaPlan }}
              </div>
              <div v-if="haveNdiaPlan === 'Yes'" class="flex">
                <p class="font-bold pr-3">
                  Reason for not having NDIA Plan:
                </p>
                {{ ndiaReasonForNotHaving }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  NDIA Approval Date:
                </p>
                {{ ndiaApprovalDate }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Decision Maker:
                </p>
                {{ decisionMaker }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Decision Maker's Full Name:
                </p>
                {{ decisionMakerName }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Decision Maker's Email Address:
                </p>
                {{ decisionMakerEmail }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Privacy Preferences:
                </p>
                {{ privacyPreferences }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Financial Management Arrangements(If applicable):
                </p>
                {{ financialMgt }}
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset v-for="(repDetail, index) in repDetails" :key="index" class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-sm px-1 font-bold text-gray-500">
            Representative {{ index + 1 }} Details
          </legend>
          <div class="md:grid md:grid-cols-2 lg:flex text-xs text-gray-500">
            <div class="md:w-1/2 lg:w-1/4 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  First Name:
                </p>
                {{ repDetail.firstName }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Middle Name:
                </p>
                {{ repDetail.middleName }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Surname:
                </p>
                {{ repDetail.surname }}
              </div>
            </div>
            <div class="md:w-1/2 lg:w-1/4 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Relationship with participant:
                </p>
                {{ repDetail.relationship }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Mobile Number:
                </p>
                {{ repDetail.mobileNo }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Home Number:
                </p>
                {{ repDetail.homeNo }}
              </div>
            </div>
            <div class="md:w-1/2 lg:w-1/4 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Work Number:
                </p>
                {{ repDetail.workNo }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Organization:
                </p>
                {{ repDetail.organization }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Position:
                </p>
                {{ repDetail.position }}
              </div>
            </div>
            <div class="md:w-1/2 lg:w-1/4 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Email Address:
                </p>
                {{ repDetail.emailAddress }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Current Address:
                </p>
                {{ repDetail.currentAddress }}
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-sm px-1 font-bold text-gray-500">
            Health Support Needs
          </legend>
          <div class="md:grid md:grid-cols-2  lg:flex text-xs text-gray-500">
            <div class="md:w-1/2 lg:w-1/3 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Needs Mobility Assistance?
                </p>
                {{ needsMobilityAssistance }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Mobile?
                </p>
                {{ mobilityIndependent }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Mobility issues description:
                </p>
                {{ mobilityDescription }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Hearing Issues?
                </p>
                {{ hearingIssues }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Hearing Issues Description?
                </p>
                {{ hearingDescription }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Vision Issues?
                </p>
                {{ hearingDescription }}
              </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Vision Issues Description?
                </p>
                {{ visionDescription }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Memory/cognition?
                </p>
                {{ memoryCognition }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Memory/cognition issue description?
                </p>
                {{ memoryDescription }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Communication Issues?
                </p>
                {{ needsCommunicationAssistance }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Have you had a communication assessment?
                </p>
                {{ hadCommunicationAssessment }}
              </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Communication Preference?
                </p>
                <ul>
                  <li v-for="(preference, i) in communicationPreference" :key="i" class="flex">
                    - {{ preference }}
                  </li>
                </ul>
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Other:
                </p>
                {{ otherCommunication }}
              </div>
            </div>
            <!-- <div lass="md:w-1/2 lg:w-1/4 space-y-2">
              Another column
            </div> -->
          </div>
        </fieldset>
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-sm px-1 font-bold text-gray-500">
            Disability Support Needs
          </legend>
          <div class="md:grid md:grid-cols-2  lg:flex text-xs text-gray-500">
            <div class="md:w-1/2 lg:w-1/3 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Aid/Equipment used?
                </p>
                {{ aidEquipmentUsed }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Needs assistance to use Aid/Equipment?
                </p>
                {{ needsAssistance }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Will staff require training in its use?
                </p>
                {{ staffRequireTraining }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Showering/bathing issues?
                </p>
                {{ showeringAssistance }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Showering/bathing additonal details:
                </p>
                {{ showeringDetails }}
              </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Grooming:
                </p>
                {{ groomingAssistance }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Grooming details:
                </p>
                {{ groomingDetails }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Dressing:
                </p>
                {{ dressingAssistance }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Dressing details:
                </p>
                {{ dressingDetails }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Toileting:
                </p>
                {{ toiletingAssistance }}
              </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Toileting details:
                </p>
                {{ toiletingDetails }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Eating:
                </p>
                {{ eatingAssistance }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Eating details:
                </p>
                {{ eatingDetails }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Transfers (In and out of bed):
                </p>
                {{ transferAssistance }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Transfers details:
                </p>
                {{ dressingDetails }}
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-sm px-1 font-bold text-gray-500">
            Behavior Support Needs
          </legend>
          <div class="md:grid md:grid-cols-2 text-xs text-gray-500">
            <div class="space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Describe how you would react if someone you lived with did find something you found disrupting or upsetting?
                </p>
                {{ upsettingBehavior }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Do you have any behaviors of concern that require specific support? If so, provide detail:
                </p>
                {{ concerningBehavior }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Do you do anything that others might find disruptive?
                </p>
                {{ disruptiveBehavior }}
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Do you have any behavior support plan?
                </p>
                {{ hasBehaviorSupportPlan }}
              </div><div class="flex">
                <p class="font-bold pr-3">
                  Do you have any risk assesment relating to your behavior or support needs?
                </p>
                {{ behaviorRiskAssessment }}
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-sm px-1 font-bold text-gray-500">
            Community Support Needs
          </legend>
          <div class="md:grid md:grid-cols-2 text-xs text-gray-500">
            <div class="space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  Do you need assistance getting around the community? If so, please provide details:
                </p>
                {{ assistanceGettingAround }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Do you need assistance to use transport? If so, provide details:
                </p>
                {{ transportAssistance }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Do you need assistance to access these activities? If yes, provide details:
                </p>
                {{ assistanceToActivities }}
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex">
                <p class="font-bold pr-3">
                  What type of transport do you mainly use?
                </p>
                {{ transportType }}
              </div>
              <div class="flex">
                <p class="font-bold pr-3">
                  Do you participate in any activities (such as employment, training, or community activities)? If yes, provide details:
                </p>
                {{ communityActivities }}
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
          <legend class="text-sm px-1 font-bold text-gray-500">
            Privacy Statement
          </legend>
          <div class="md:grid text-xs space-y-3 text-gray-500">
            <div class="md:w-full space-y-2">
              <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
                <legend class="text-xs px-1 font-bold text-gray-500">
                  Participant or Authorized Representative
                </legend>
                <div class="md:w-1/3 space-y-2">
                  <div class="flex">
                    <p class="font-bold pr-3">
                      Full Name:
                    </p>
                    {{ participantName }}
                  </div>
                  <div class="flex">
                    <p class="font-bold pr-3">
                      Electronic Signature:
                    </p>
                    {{ participantSignature }}
                  </div>
                  <div class="flex">
                    <p class="font-bold pr-3">
                      Date:
                    </p>
                    {{ participantSignDate }}
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="md:w-full space-y-2">
              <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
                <legend class="text-xs px-1 font-bold text-gray-500">
                  Staff Member
                </legend>
                <div class="md:w-1/3 space-y-2">
                  <div class="flex">
                    <p class="font-bold pr-3">
                      Full Name:
                    </p>
                    {{ staffName }}
                  </div>
                  <div class="flex">
                    <p class="font-bold pr-3">
                      Electronic Signature:
                    </p>
                    {{ staffSignature }}
                  </div>
                  <div class="flex">
                    <p class="font-bold pr-3">
                      Date:
                    </p>
                    {{ staffSignDate }}
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="md:w-full space-y-2">
              <fieldset class="border px-4 py-2 border-gray-200 rounded-md">
                <legend class="text-xs px-1 font-bold text-gray-500">
                  Staff Member
                </legend>
                <div class="md:w-1/3 space-y-2">
                  <div class="flex">
                    <p class="font-bold pr-3">
                      Full Name:
                    </p>
                    {{ verbalConsentName }}
                  </div>
                  <div class="flex">
                    <p class="font-bold pr-3">
                      Electronic Signature:
                    </p>
                    {{ verbalConsentName }}
                  </div>
                  <div class="flex">
                    <p class="font-bold pr-3">
                      Date:
                    </p>
                    {{ verbalConsentSignDate }}
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields, mapMultiRowFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapMultiRowFields('participants', ['repDetails']),
    ...mapFields('participants', [
      'ndiaNumber',
      'firstName',
      'middleName',
      'surname',
      'gender',
      'dob',
      'homePhone',
      'mobilePhone',
      'workPhone',
      'profileImage',
      'emailAddress',
      'advocateNeeded',
      'auditingConsent',
      'culturalPreference',
      'countryOfBirth',
      'preferredLanguage',
      'culturalActivity',
      'interpreterRequired',
      'indigenousStatus',
      'currentAddress',
      'haveNdiaPlan',
      'ndiaApprovalDate',
      'ndiaReasonForNotHaving',
      'decisionMaker',
      'decisionMakerName',
      'decisionMakerPhone',
      'decisionMakerEmail',
      'privacyPreferences',
      'financialMgt',
      'imageUrl',
      // Health Support Needs
      'needsMobilityAssistance',
      'mobilityIndependent',
      'mobilityDescription',
      'hearingIssues',
      'hearingDescription',
      'visionIssues',
      'visionDescription',
      'needsCommunicationAssistance',
      'communicationPreference',
      'otherCommunication',
      'hadCommunicationAssessment',
      'memoryCognition',
      'memoryDescription',
      // Disability Support Needs
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
      'transferDetails',
      // Behvior support needs
      'upsettingBehavior',
      'concerningBehavior',
      'disruptiveBehavior',
      'hasBehaviorSupportPlan',
      'behaviorRiskAssessment',
      // Community Support Needs
      'assistanceGettingAround',
      'transportAssistance',
      'assistanceToActivities',
      'transportType',
      'communityActivities',
      // Privacy Statement
      'participantName',
      'participantSignature',
      'participantSignDate',
      'staffName',
      'staffSignature',
      'staffSignDate',
      'verbalConsentName',
      'verbalConsentSignature',
      'verbalConsentSignDate'
    ])
  }
}
</script>

<style></style>
