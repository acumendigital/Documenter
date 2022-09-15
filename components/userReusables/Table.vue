<template>
  <div class="container">
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
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
<style scoped>
.container {
  margin: 20px 0;
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
table th {
  border-right: 1px solid #efefef;
  padding: 24px;
  border-collapse: collapse;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #8d9091;
}
table td {
  border-right: 1px solid #efefef;
  padding: 48px 27px 16px 27px;
  text-align: center;
  border-collapse: collapse;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #8d9091;
}
</style>