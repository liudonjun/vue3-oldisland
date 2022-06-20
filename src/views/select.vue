<template>
  <div class="selectContainer">
    <div class="selectContainer-top">
      <i class="baseIcon djun-fanhui" @click="goBack"></i>
      <span class="title">查找留言</span>
      <i class="baseIcon djun-wenhao"></i>
    </div>
    <div class="inputBox">
      <input
        ref="nameRef"
        placeholder="请输入姓名"
        @blur="inputBlur"
        type="text"
        v-model="name"
      />
    </div>
    <div class="selectContainer-list">
      <div class="totalBox" v-if="total">累计留言：{{ total }}条</div>
      <ul>
        <li v-for="item in list" :key="item._id">{{ item.msg }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick, onBeforeMount } from "vue"
import { getMsg, createMsg } from "@/api/api"
import { useRouter } from "vue-router"

const router = useRouter()
const isShowName = ref(true)
const nameRef = ref(null) //input dom
const name = ref("") //姓名
const list = ref([]) //列表数据
const total = ref(0) //条数

// onBeforeMount
onBeforeMount(() => {
  nextTick(() => {
    nameRef.value.focus()
  })
})

// 输入框失去焦点触发
const inputBlur = (e) => {
  if (!!name.value) {
    isShowName.value = false
    getNameMsg()
  }
  console.log(e)
}

// 名字点击事件
const nameFoure = (e) => {
  isShowName.value = true
  console.log(e)
  nextTick(() => {
    nameRef.value.focus()
  })
}

//返回上一级路由
const goBack = () => {
  router.back()
}

const pageNo = ref(1)
const getNameMsg = () => {
  let params = {
    pageNo: pageNo.value,
    name: name.value,
  }
  getMsg(params).then((res) => {
    console.log(res)
    list.value = res.result
    total.value = res.total
  }).catch(err=>{
    console.log()
    if(err.response.status===443){
      getNameMsg()
    }
  })
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/global.scss";
.selectContainer {
  position: fixed;
  background: #f7f8fa;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  &-top {
    padding:0 px2rem(10);
    text-align: center;
    background: #fff;
    height: px2rem(60);
    line-height: px2rem(60);
    display: flex;
    justify-content: space-between;
    .title{
      font-size: px2rem(18);
      color: #323233;
    }
    .baseIcon{
      font-size: px2rem(26);
    }
    input {
      width: px2rem(200);
      font-size: px2rem(14);
      outline: none;
      border: none;
      border-radius: 2px;
      background: transparent;
    }
  }
}
</style>
