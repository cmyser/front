<template>
  <div id="app">
    <router-view/>
    <Auther/>
  </div>
</template>

<script>

import Auther from '@/components/auther.vue'

export default {
  name: 'App',
  components: {
    Auther,
  }
}

</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
}
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
.user {
  width: 330px;
  height: 512px;
  background: rgba(247, 239, 239, 0.05);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user__from{

  display: flex;
  align-items: center;
  flex-direction: column;
}
.user__h2 {
  margin-top: 44px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
}
.user__from-auther {
}
.user__name {
  width: 236px;
  height: 56px;

  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 1px;
}
.user__passwoed {
  width: 236px;
  height: 56px;

  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 1px;
}
.user__btn {

  width: 144px;
  height: 42px;
  background: #1DBBC5;
  border-radius: 5px;
}
.btn-auther {
  margin-top: 28px;
  border: none;
}
.btn-register {
  margin-top: 14px;
}
.user__forget {
}
</style>
