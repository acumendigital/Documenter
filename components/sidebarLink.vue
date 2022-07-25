<template>
  <li class="sidebar-link">
    <a href="#">{{ linkDetails.linkName }}</a>
    <ul class="sub-sidebar-list" v-show="linkDetails.subTopic.length > 0">
        <li class="sub-sidebar-link" v-for="(topic, index) in linkDetails.subTopic" :key="index">
            <a href="#">{{topic}}</a>
        </li>
    </ul>
  </li>
</template>

<script>
export default {
    props:{
        linkDetails:{
            type: Object
        }
    }
}
</script>

<style lang="scss">
    .sidebar-link{
        list-style-type: none;
        a{
            color: #9999BC;
            text-decoration: none;
            &:hover{
            color: #D53120;
        }
        }
        .active{
            color: #D53120;
        }
        .sub-sidebar-list{
            display: flex;
            flex-direction: column;
            gap: 10px !important;
            margin-top: 32px;
            padding-left: 20px;
        }
        .sub-sidebar-link{
            // margin-left: 16px;
            list-style-type: none;
            a{
                font-weight: 400;
                font-size: 14px;
                line-height: 18px;
            }
        }
    }
</style>