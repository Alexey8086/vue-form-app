<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [''],
  emits: [''],

  setup() {


    return {

    }
  }
}

</script>

<style scoped lang='scss'>
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style> 