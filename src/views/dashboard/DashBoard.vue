<template>
  <div id="dashboard">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "DashBoard",
};
</script>

<style lang="less" scoped>
#dashboard {
  width: 100%;
  height: 100%;
  background-color: gold;
}
</style>