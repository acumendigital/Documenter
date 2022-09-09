<template>
  <div
    class="reusable-block-container"
    @keydown.enter="enterPressed"
  >
    <UserText
      v-show="blockDisplayed == 'Text'"
      :componentDetails="sectionProp"
    />
    <WarningCard v-show="blockDisplayed == 'Warning'" />
    <NoteCard v-show="blockDisplayed == 'Note'" />
    <InfoCard v-show="blockDisplayed == 'Info'" />
    <TheCodeBlockWithText v-show="blockDisplayed == 'Code Block'" />
    <TheCodeBlockWithTabs v-show="blockDisplayed == 'Code Table'" />
    <TheCodeBlockWithResponse v-show="blockDisplayed == 'Code & Res'" />
    <Card v-show="blockDisplayed == 'Card'" />
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