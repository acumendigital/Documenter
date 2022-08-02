<template>
  <div class="container">
    <div class="introduction">
      <div class="header">
        <h2>Introduction</h2>
        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic. According to Kant, knowledge about space
          is synthetic, in that statements about space are not simply true by
          virtue of the meaning of the words in the statement. In his work, Kant
          rejected the view that space must be either a substance or relation.
          Instead he came to the conclusion that space and time are not
          discovered by humans to be objective features of the world, but
          imposed by us as part of a framework for organizing experience.
        </p>
      </div>
      <div class="cards">
        <Introduction :header="header" :content="content" />
        <Introduction :header="header" :content="content2" :link="link" />
      </div>
    </div>
    <div class="line"></div>

    <div class="introductionTwo">
      <div class="sub-header">
        <h2>Introduction</h2>
        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic. According to Kant, knowledge about space
          is synthetic, in that statements about space are not simply true by
          virtue of the meaning of the words in the statement. In his work, Kant
          rejected the view that space must be either a substance or relation.
          Instead he came to the conclusion that space and time are not
          discovered by humans to be objective features of the world, but
          imposed by us as part of a framework for organizing experience.
        </p>
      </div>
      <div class="introductionThree">
        <h3>Introduction</h3>
        <ul>
          <li>statements about space are not simply true by</li>
          <li>
            In the eighteenth century the German philosopher Immanuel Kant
            developed a theory
          </li>
          <li>
            According to Kant, knowledge about space is synthetic, in that
          </li>
        </ul>
      </div>
      <div class="introductionFour">
        <h3>Introduction</h3>
        <ol>
          <li>statements about space are not simply true by</li>
          <li>
            In the eighteenth century the German philosopher Immanuel Kant
            developed a theory
          </li>
          <li>
            According to Kant, knowledge about space is synthetic, in that
          </li>
        </ol>
      </div>
    </div>
    <div class="line"></div>

    <div class="topic">
      <div class="subTopic">
        <h2>Sub Topic</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem
        </p>
      </div>

      <div class="beware">
        <img src="~/assets/images/danger.svg" />
        <p>
          BEWARE - s et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem
        </p>
      </div>
    </div>
    <div class="topicTwo">
      <div class="subTopicTwo">
        <h2>Introduction</h2>
        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic. According to Kant, knowledge about space
          is synthetic, in that statements about space are not simply true by
          virtue of the meaning of the words in the statement. In his work, Kant
        </p>
      </div>

      <div class="note">
        <img src="~/assets/images/alarm.svg" />
        <p>
          NOTE - s et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in culpa qui officia deserunt mollitia animi, id est laborum et
          dolorum fuga. Et harum quidem
        </p>
      </div>
    </div>
    <div class="topicThree">
      <div class="subTopicThree">
        <h2>Introduction</h2>
        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic. According to Kant, knowledge about space
          is synthetic, in that statements about space are not simply true by
          virtue of the meaning of the words in the statement. In his work, Kant
        </p>
      </div>

      <div class="subTopicThree">
        <div class="codeContent">
          <textarea v-model="codeContent" id="syntax1"></textarea>
        </div>
        <!-- < /> -->

        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic. According to Kant, knowledge about space
          is synthetic, in that statements about space are not simply true by
          virtue of the meaning of the words in the statement. In his work, Kant
        </p>
        <div class="codeContent">
          <textarea v-model="codeContent" id="syntax2"></textarea>
        </div>
        <!-- < /> -->
        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic. According to Kant, knowledge about space
          is synthetic, in that statements about space are not simply true by
          virtue of the meaning of the words in the statement. In his work, Kant
        </p>
      </div>
    </div>
    <div class="statusTable">
      <div class="table-container">
        <table>
          <tr>
            <th>Status</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Canceled</td>
            <td>
              In the eighteenth century the German philosopher Immanuel Kant
              developed a theory of knowledge in which knowledge about space can
              be both a priori and synthetic. According to Kant, knowledge about
              space is synthetic, in that statements about space are not simply
              true by virtue of the meaning of the words in the statement. In
              his work, Kant
            </td>
          </tr>
          <tr>
            <td>Canceled</td>
            <td>
              In the eighteenth century the German philosopher Immanuel Kant
              developed a theory of knowledge in which knowledge about space can
              be both a priori and synthetic. According to
            </td>
          </tr>
          <tr>
            <td>Canceled</td>
            <td>
              In the eighteenth century the German philosopher Immanuel Kant
              developed a theory of knowledge in which knowledge about space can
              be both a priori and synthetic. According to
            </td>
          </tr>
          <tr>
            <td>Canceled</td>
            <td>
              In the eighteenth century the German philosopher Immanuel Kant
              developed a theory of knowledge in which knowledge about space can
              be both a priori and synthetic. According to
            </td>
          </tr>
          <tr>
            <td>Canceled</td>
            <td>
              In the eighteenth century the German philosopher Immanuel Kant
              developed a theory of knowledge in which knowledge about space can
              be both a priori and synthetic. According to
            </td>
          </tr>
          <tr>
            <td>Canceled</td>
            <td>
              In the eighteenth century the German philosopher Immanuel Kant
              developed a theory of knowledge in which knowledge about space can
              be both a priori and synthetic. According to
            </td>
          </tr>
          <tr>
            <td>Canceled</td>
            <td>
              In the eighteenth century the German philosopher Immanuel Kant
              developed a theory of knowledge in which knowledge about space can
              be both a priori and synthetic. According to
            </td>
          </tr>
        </table>
      </div>

      <ul class="statusList">
        <li>statements about space are not simply true by</li>
        <li>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory
        </li>
        <li>According to Kant, knowledge about space is synthetic, in that</li>
      </ul>
    </div>
    <div class="tabs">
      <TheCodeBlockWithTabs />
    </div>
    <div class="code">
      <div class="codeContent">
        <textarea v-model="codeContent" id="syntax3"></textarea>
      </div>
      <div class="codeContent white">
        <textarea v-model="codeContent" id="syntax4"></textarea>
      </div>
    </div>
    <div class="line"></div>
    <div class="response">
      <div class="codeContent">
        <textarea v-model="codeContent" id="syntax5"></textarea>
      </div>
      <!-- <div class="codeContent">
        < />
      </div>
      < /> -->
    </div>
    <div class="line"></div>
    <div class="bulb">
      <div>
        <h2>Introduction</h2>
        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic. According to Kant, knowledge about space
          is synthetic, in that statements about space are not simply true by
          virtue of the meaning of the words in the statement. In his work, Kant
          rejected the view that space must be either a substance or relation.
          Instead he came to the conclusion that space and time are not
          discovered by humans to be objective features of the world, but
          imposed by us as part of a framework for organizing experience.
        </p>
      </div>
      <div>
        <img src="~/assets/images/bulb.svg" />
      </div>
    </div>

    <div class="table">
      <h2>Table</h2>
      <div class="table-container">
        <table>
          <tr>
            <th></th>
            <th>Android SDK</th>
            <th>Ios SDK</th>
            <th>React</th>
            <th>Javascript</th>
            <th>React native SDK</th>
          </tr>
          <tr>
            <td>Available Country</td>
            <td><img src="~/assets/images/tick.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
          </tr>
          <tr>
            <td>Support for bluetooth</td>
            <td><img src="~/assets/images/fail.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
            <td><img src="~/assets/images/fail.svg" /></td>
            <td><img src="~/assets/images/fail.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
          </tr>
          <tr>
            <td>Support for smart readers</td>
            <td>Us only</td>
            <td><img src="~/assets/images/tick.svg" /></td>
            <td><img src="~/assets/images/fail.svg" /></td>
            <td><img src="~/assets/images/fail.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Us only</td>
            <td>Us only</td>
            <td>Us only</td>
            <td><img src="~/assets/images/tick.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Us only</td>
            <td>Us only</td>
            <td>Us only</td>
            <td><img src="~/assets/images/tick.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Us only</td>
            <td>Us only</td>
            <td>Us only</td>
            <td><img src="~/assets/images/tick.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Us only</td>
            <td>Us only</td>
            <td>Us only</td>
            <td><img src="~/assets/images/tick.svg" /></td>
            <td><img src="~/assets/images/tick.svg" /></td>
          </tr>
        </table>
      </div>
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
      <h2>Introduction</h2>
      <p>
        In the eighteenth century the German philosopher Immanuel Kant developed
        a theory of knowledge in which knowledge about space can be both a
        priori and synthetic. According to Kant, knowledge about space is
        synthetic, in that statements about space are not simply true by virtue
        of the meaning of the words in the statement. In his work, Kant
      </p>
      <div class="notesCards">
        <Notes :header="introduction" :content="notes" />
        <Notes :header="introduction" :content="notes" />
        <Notes :header="introduction" :content="notes" />
      </div>
    </div>
    <div class="introNote">
      <img src="~/assets/images/alarm.svg" />
      <p>
        NOTE - s et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias excepturi sint
      </p>
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
import TheCodeBlockWithTabs from '~/components/reusables/TheCodeBlockWithTabs.vue'
// importTheCodeBlockWithText from '~/components/reusables/TheCodeBlockWithText.vue'

export default {
  name: 'IndexPage',
  components: {
    TheCodeBlockWithTabs,
  },
  data() {
    return {
      codeContent:
        '  // \n // \n\n import syntaxHighlight from "syntax-highlight" \n \n const codeBlock = document.querySelector("#code") \n\n function highlight(code) {\n   return syntaxHighlight(code)\n } \n \n export const Highlighter = () => { \n   return(\n    <button onClick={highlight}>Highlight</button> \n   ) \n }',
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
  mounted() {
    CodeMirror.fromTextArea(document.getElementById('syntax1'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      readOnly: true,
    })
    CodeMirror.fromTextArea(document.getElementById('syntax2'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      readOnly: true,
    })
    CodeMirror.fromTextArea(document.getElementById('syntax3'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      readOnly: true,
    })
    CodeMirror.fromTextArea(document.getElementById('syntax4'), {
      lineNumbers: true,
      theme: 'base16-light',
      mode: 'javascript',
      readOnly: true,
    })
    CodeMirror.fromTextArea(document.getElementById('syntax5'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      readOnly: true,
    })
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
.beware {
  background: #fff1e9;
  border: 1px solid #ea8d51;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 24px;
  /* width: 784px; */
}
.beware p {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #ea8d51;
  width: 704px;
  padding-left: 16px;
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
  /* width: 788px; */
  padding: 72px 29px 0 24px;
  margin-bottom: 64px;
  /* padding: 0 56px; */
}
.code img {
  margin-bottom: 24px;
}
.response {
  background: #fbfbfb;
  border: 1px solid #efefef;
  border-radius: 8px;
  margin-left: 56px;
  margin-right: 56px;
  /* width: 788px; */
  padding: 72px 29px 24px 24px;
  margin-top: 64px;
  margin-bottom: 64px;
  /* padding: 0 56px; */
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
.introNote {
  background: #efefef;
  border: 1px solid #cccccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 24px;
  width: 730px;
  margin-bottom: 174px;
  margin-left: 56px;
}
.introNote p {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #9999bc;
  width: 704px;
  padding-left: 16px;
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
.table-container {
  width: 788px;
  height: 412px;
  overflow-y: scroll;
}
table {
  border-collapse: collapse;
  background: #fbfbfb;
  border: 1px solid #efefef;
  border-radius: 8px;
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
.statusTable th {
  border-right: 1px solid #efefef;
  padding: 16px;
  border-collapse: collapse;
  text-align: left;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #071439;
}
.statusTable td {
  border-right: 1px solid #efefef;
  padding: 16px;
  align-items: flex-start;
  /* text-align: center; */
  border-collapse: collapse;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #51545c;
}
.table th {
  border-right: 1px solid #efefef;
  padding: 24px;
  border-collapse: collapse;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #8d9091;
}
.table td {
  border-right: 1px solid #efefef;
  padding: 48px 27px 16px 27px;
  text-align: center;
  border-collapse: collapse;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #8d9091;
}
.tabs {
  /* margin-left: 56px; */
  padding: 0 56px;
  margin-bottom: 47px;
}
.codeContent {
  /* width: 788px; */
  /* height: 288px; */
  background: #151718;
  border-radius: 8px;
}
textarea {
  resize: none;
  border-radius: 8px;
}
.white {
  margin-top: 24px;
}
</style>
