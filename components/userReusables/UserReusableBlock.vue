<template>
  <div class="reusable-block-container" @keydown.enter="enterPressed">
    <UserText
      v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Text'"
      :componentDetails="sectionProp"
    />
    <WarningCard
      v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Warning'"
      :componentDetails="sectionProp"
    />
    <NoteCard
      v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Info'"
      :componentDetails="sectionProp"
    />
    <InfoCard
      v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Note'"
      :componentDetails="sectionProp"
    />
    <TheCodeBlockWithText
      v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Code Block'"
      :componentDetails="sectionProp"
    />
    <TheCodeBlockWithTabs
      v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Code Table'"
      :componentDetails="sectionProp"
    />
    <TheCodeBlockWithResponse
      v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Code & Res'"
      :componentDetails="sectionProp"
    />
    <Card v-show="blockDisplayed.replace(/\s([^a-z])$/, '') == 'Card'" :componentDetails="sectionProp" />
  </div>
</template>

<script>
import UserText from './UserText.vue'
import TheCodeBlockWithTabs from '~/components/userReusables/TheCodeBlockWithTabs.vue'
import TheCodeBlockWithText from '~/components/userReusables/TheCodeBlockWithText.vue'
import TheCodeBlockWithResponse from '~/components/userReusables/TheCodeBlockWithResponse.vue'
import NoteCard from '~/components/userReusables/NoteCard.vue'
import InfoCard from '~/components/userReusables/InfoCard.vue'
import WarningCard from '~/components/userReusables/WarningCard.vue'
import CardImage from '~/components/userReusables/CardImage.vue'
import Card from '~/components/userReusables/Card.vue'
export default {
  components: {
    UserText,
    TheCodeBlockWithTabs,
    TheCodeBlockWithText,
    TheCodeBlockWithResponse,
    NoteCard,
    WarningCard,
    InfoCard,
    Card,
  },
  props: {
    sectionProp: {
      type: Object,
    },
  },
  data() {
    return {
      showModal: false,
      blockDisplayed: '',
    }
  },
  mounted() {
    this.blockDisplayed = this.sectionProp.title
  },
}
</script>

<style></style>