<template>
  <div class="container">
    <div class="introduction">
      <div><UserText /></div>

      <div class="cards">
        <Introduction :header="header" :content="content" />
        <Introduction :header="header" :content="content2" :link="link" />
      </div>
    </div>
    <div class="line"></div>

    <div class="introductionTwo">
      <div class="sub-header">
        <div><UserText /></div>
      </div>
      <div class="introductionThree">
        <div><UserText /></div>
      </div>
      <div class="introductionFour">
        <div><UserText /></div>
      </div>
    </div>
    <div class="line"></div>

    <div class="topic">
      <div class="subTopic">
        <div><UserText /></div>
      </div>

       <WarningCard />
    </div>
    <div class="topicTwo">
      <div class="subTopicTwo">
        <div><UserText /></div>
      </div>

      
       <InfoCard />
       <div><UserText /></div>
      <div>
     
    </div>
    </div>
    <div class="topicThree">
      <div class="subTopicThree">
        <div><UserText /></div>
      </div>

      <div class="subTopicThree">
        <div><TheCodeBlockWithText /></div>

        <div><UserText /></div>

        <div><TheCodeBlockWithText /></div>

        <div><UserText /></div>
      </div>
    </div>
    <div class="statusTable">
      <div class=""><StatusTable /></div>

      <div><UserText /></div>
    </div>
    <div class="tabs">
      <TheCodeBlockWithTabs />
    </div>
    <div class="code">
      <div class="res"><TheCodeBlockWithResponse /></div>
    </div>
    <div class="line"></div>
    <div class="bulb">
      <div>
        <div><UserText /></div>
      </div>
      <div>
        <img src="~/assets/images/bulb.svg" />
      </div>
    </div>

    <div class="table">
      <h2>Table</h2>
      <div class=""><Table /></div>
    </div>
    <div class="basics">
      <h2>Learn more abount Basics</h2>
      <div class="basicsCrads">
        <Basics :title="title" />
        <Basics :title="title" />
      </div>
    </div>
    <div class="line"></div>
    <div class="intro">
      <div><UserText /></div>
      <div class="notesCards">
        <Notes :header="introduction" :content="notes" />
        <Notes :header="introduction" :content="notes" />
        <Notes :header="introduction" :content="notes" />
      </div>
    </div>
    <div>
      <NoteCard />
    </div>
    <div class="controls">
      <div
        class="card"
        @click="
          clicked = true
          $router.push('#')
        "
      >
        <img src="~/assets/images/left.svg" />
        <div>
          <p class="previous">Previous</p>
          <p class="basic">Basics</p>
        </div>
      </div>
      <div
        class="card"
        @click="
          clicked = true
          $router.push('#')
        "
      >
        <div>
          <p class="previous">Next</p>
          <p class="basic">Control</p>
        </div>
        <img src="~/assets/images/right.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript.js'
import TheCodeBlockWithTabs from '~/components/userReusables/TheCodeBlockWithTabs.vue'
import TheCodeBlockWithText from '~/components/userReusables/TheCodeBlockWithText.vue'
import TheCodeBlockWithResponse from '~/components/userReusables/TheCodeBlockWithResponse.vue'
import Response from '~/components/userReusables/Response.vue'
import Table from '~/components/userReusables/Table.vue'
import UserText from '~/components/userReusables/UserText.vue'
import NoteCard from '~/components/userReusables/NoteCard.vue'
import InfoCard from '~/components/userReusables/InfoCard.vue'
import WarningCard from '~/components/userReusables/WarningCard.vue'
import StatusTable from '~/components/userReusables/StatusTable.vue'

export default {
  name: 'IndexPage',
  components: {
    TheCodeBlockWithTabs,
    TheCodeBlockWithText,
    TheCodeBlockWithResponse,
    Response,
    Table,
    UserText,
    StatusTable,
    NoteCard,
    WarningCard,
    InfoCard
  },
  data() {
    return {
      checkbox: false,
      header: 'Introduction',
      link: 'Get started',
      content:
        'In the eighteenth century the German philosopher Immanuel Kant developed a theoryorganizing experience ',
      content2:
        'In the eighteenth century the German philosopher Immanuel Kant developed a ',
      introduction: 'Introduction',
      notes:
        'In the eighteenth century the German philosopher Immanuel Kant developed a theoryorganizing experience ',
      title: 'Basics',
    }
  },
}
</script>

<style scoped>
.container {
  width: 90%;
  /* margin: 20px auto; */
  max-width: 900px;
  background: #fff;
}
.introduction {
  padding: 0px 0px 64px 0px;
  /* margin-left: 56px; */
  padding: 0 56px;
}
.header h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #071439;
}
.header p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  width: 713px;
  padding: 16px 0 48px 0;
}
.cards {
  display: flex;
  margin-right: 48px;
}
.introductionTwo {
  margin: 64px 0 0px 0px;
  /* margin-left: 56px; */
  padding: 0 56px;
}
.sub-header h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #071439;
}
.sub-header p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  width: 713px;
  padding: 0px 0 32px 0;
}
.introductionThree h3,
.introductionFour h3 {
  font-size: 16px;
  line-height: 24px;
  color: #071439;
  padding-bottom: 16px;
}
.introductionThree li,
.introductionFour li {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
.introductionThree ul {
  margin-bottom: 32px;
  padding: 0;
  padding-left: 20px;
}
.introductionFour ol {
  margin-bottom: 64px;
  padding-left: 15px;
}
ol li {
  padding-left: 5px;
}
.line {
  border-top: 1px solid #efefef;
}
.topic {
  margin-top: 64px;
  border: 1px solid #efefef;
  border-radius: 8px;
  padding: 24px 44px 34px 40px;
  /* width: 868px; */
  margin-left: 16px;
  margin-right: 16px;
}
.topicTwo,
.topicThree {
  margin: 64px 0 32px 0px;
  border-radius: 8px;
  /* padding: 24px 44px 34px 40px; */
  /* width: 868px; */
  /* margin-left: 56px; */
  padding: 0 56px;
}
.subTopic h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #071439;
}
.subTopic p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  width: 788px;
  padding: 14px 0 32px 0;
}

.subTopicTwo h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #071439;
}
.subTopicTwo p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  width: 788px;
  padding: 14px 0 32px 0;
}
.note {
  background: #dbe4ff;
  border: 1px solid #4568d1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 24px;
  /* width: 784px; */
}
.note p {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #9999bc;
  width: 704px;
  padding-left: 16px;
}
.subTopicThree h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #071439;
}
.subTopicThree p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  width: 788px;
  padding: 14px 0 32px 0;
}
.subTopicThree img {
  margin-bottom: 32px;
}
.code {
  background: #fbfbfb;
  border: 1px solid #efefef;
  border-radius: 8px;
  margin-left: 56px;
  margin-right: 56px;
  padding: 0px 0 0 24px;
  margin-bottom: 64px;
}
.code .res {
  margin-bottom: 24px;
}
.response {
  background: #fbfbfb;
  border: 1px solid #efefef;
  border-radius: 8px;
  margin-left: 56px;
  margin-right: 56px;
  padding: 72px 29px 24px 24px;
  margin-top: 64px;
  margin-bottom: 64px;
}
.bulb {
  margin: 64px 0 64px 56px;
}
.bulb h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #071439;
}
.bulb p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #51545c;
  width: 713px;
}
.table {
  margin: 64px 0 64px 56px;
}
.table h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #071439;
}
.basics {
  margin: 64px 56px 64px 56px;
}
.basics h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #071439;
}
.intro {
  margin: 64px 0 0px 0;
  padding: 0 56px;
}
.intro h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #071439;
}
.intro p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #51545c;
}

.notesCards {
  display: flex;
}
.controls {
  margin-left: 56px;
  margin-right: 56px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.controls .card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #071439;
  border-radius: 8px;
  width: 359px;
  height: 72px;
  cursor: pointer;
  padding: 0 24px;
  margin-right: 20px;
}
.card .previous {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #ea8d51;
  margin-right: 24px;
}
.card .basic {
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #071439;
}
.statusTable {
  margin-left: 56px;
}
.statusList {
  margin: 32px 0;
  padding-left: 20px;
}
li::marker {
  background: blue;
  margin-left: 30px;
}

.tabs {
  padding: 0 56px;
  margin-bottom: 47px;
}
.codeContent {
  background: #151718;
  border-radius: 8px;
}
textarea {
  resize: none;
  border-radius: 8px;
}
</style>
