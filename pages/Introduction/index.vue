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
        <img src="~/assets/images/syntax.svg" />
        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic. According to Kant, knowledge about space
          is synthetic, in that statements about space are not simply true by
          virtue of the meaning of the words in the statement. In his work, Kant
        </p>
        <img src="~/assets/images/syntax.svg" />
        <p>
          In the eighteenth century the German philosopher Immanuel Kant
          developed a theory of knowledge in which knowledge about space can be
          both a priori and synthetic. According to Kant, knowledge about space
          is synthetic, in that statements about space are not simply true by
          virtue of the meaning of the words in the statement. In his work, Kant
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      header: 'Introduction',
      link: 'Get started',
      content:
        'In the eighteenth century the German philosopher Immanuel Kant developed a theoryorganizing experience ',
      content2:
        'In the eighteenth century the German philosopher Immanuel Kant developed a ',
    }
  },
}
</script>
<style scoped>
.container {
  width: 90%;
  margin: 20px auto;
  max-width: 900px;
  background: green;
}
.introduction {
  padding: 24px 44px 34px 40px;
  border-bottom: 1px solid #efefef;
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
  padding: 24px 44px 34px 40px;
  border-bottom: 1px solid #efefef;
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
  padding: 16px 0 32px 0;
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
}
.introductionFour ol {
  margin-bottom: 64px;
}
.topic {
  margin: 64px 0 32px 16px;
  border: 1px solid #efefef;
  border-radius: 8px;
  padding: 24px 44px 34px 40px;
  width: 868px;
}
.topicTwo,
.topicThree {
  margin: 64px 0 32px 16px;
  border-radius: 8px;
  padding: 24px 44px 34px 40px;
  width: 868px;
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
  width: 784px;
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
  width: 784px;
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
</style>
