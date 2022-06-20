<template>
  <!-- 首页 -->
  <div class="homeContainer">
    <Scroll class="warpper">
      <div>
        <div class="topLogo">
          <img class="img" src="../assets/image/home-top.svg" alt="" />
        </div>
        <!-- top -->
        <div class="titleBox">
          <div class="desc">Wecome Back!</div>
          <b class="title">Adrian chiran</b>
        </div>
        <!-- content -->
        <div class="contentBox">
          <p class="desc">what would you like to work with ?</p>
          <div class="cardBox">
            <!-- one for -->
            <div class="card" @click="goBack(1)">
              <img class="logo" src="../assets/image/edit.svg" alt="" />
              <div class="content">
                <div class="card-title">wallet</div>
                <div class="card-desc">
                  Manage your expenses and income easly
                </div>
              </div>
            </div>
            <div class="card" @click="goBack(2)">
              <img class="logo" src="../assets/image/edit.svg" alt="" />
              <div class="content">
                <div class="card-title">wallet</div>
                <div class="card-desc">
                  Manage your expenses and income easly
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- list -->
        <div class="listBox">
          <div class="title">
            <div>income</div>
            <img class="right-icon" src="../assets/image/edit.svg" alt="" />
          </div>
          <div class="list">
            <div class="list-item">
              <div>
                <div class="msg">你好！</div>
                <div class="time">2022-01-01</div>
              </div>
              <div class="name">张飞</div>
            </div>
            <div class="list-item">
              <div>
                <div class="msg">你好！</div>
                <div class="time">2022-01-01</div>
              </div>
              <div class="name">张飞</div>
            </div>
            <div class="list-item">
              <div>
                <div class="msg">你好！</div>
                <div class="time">2022-01-01</div>
              </div>
              <div class="name">张飞</div>
            </div>
            <div class="list-item">
              <div>
                <div class="msg">你好！</div>
                <div class="time">2022-01-01</div>
              </div>
              <div class="name">张飞</div>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import Scroll from "@/components/scroll/scroll.vue"
const router = useRouter()
const goBack = (tag) => {
  if (tag === 1) {
    router.push("/add")
  } else {
    router.push("/select")
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/global.scss";
.homeContainer {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #000;
  font-size: px2rem(16);
  padding: px2rem(20);
  .warpper {
    height: 100%;
    overflow: hidden;
  }
  .topLogo {
    position: relative;
    .img {
      position: absolute;
      right: px2rem(-20);
      top: px2rem(0);
      width: px2rem(200);
    }
  }
  .titleBox {
    padding-top: px2rem(70);
    margin-bottom: px2rem(40);
    .desc {
      font-size: px2rem(15);
      margin-bottom: px2rem(10);
    }
    .title {
      font-size: px2rem(25);
    }
  }
  .contentBox {
    .desc {
      font-size: px2rem(2);
    }
    .cardBox {
      margin-top: px2rem(20);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .card {
        background: #f6f7f9;
        border-radius: 10px;
        cursor: pointer;
        padding: px2rem(20) px2rem(20);
        width: 48%;
        // border: 1px solid #ccc;
        box-sizing: border-box;
        &:hover {
          background: #eef0f4;
        }
        .logo {
          width: px2rem(36);
          height: px2rem(36);
          margin-bottom: px2rem(50);
        }
        .content {
          .card-title {
            margin-bottom: px2rem(10);
          }
          .card-desc {
            color: #e0dede;
            font-size: px2rem(2);
          }
        }
      }
    }
  }
  .listBox {
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: px2rem(60);
    padding: px2rem(10);
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: px2rem(20);
      .right-icon {
        width: px2rem(20);
        height: px2rem(20);
      }
    }
    .list-item {
      padding: px2rem(15);
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      &:last-child {
        border-bottom: none;
      }
      .msg {
        margin-bottom: px2rem(10);
      }
      .time {
        color: #1030a2;
      }
      .name {
        color: #00e5cd;
      }
    }
  }
}
</style>
