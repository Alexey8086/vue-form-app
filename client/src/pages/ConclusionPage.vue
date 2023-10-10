<template>
  <div class="container">

    <div v-if="isLoading" class="preloader">
      <spring-spinner :animation-duration="3000" :size="130" color="#ff1d5e" />
      <p>Проверка ваших данных!</p>
      <p>Это займет до 30 минут!</p>
    </div>

    <div v-else class="success-block">
      <img :src="successImg" alt="успешно">
      <p>Договор подписан.</p>
      <p>Ожидайте поступления денежных средств.</p>

      <button @click="router.push('/')">ОК</button>
    </div>
  </div>
</template>

<script>
import { SpringSpinner } from 'epic-spinners'
import successImg from '@/assets/success.png'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'

export default {
  name: '',
  components: { SpringSpinner },
  props: [''],
  emits: [''],

  setup() {
    const router = useRouter()
    const store = useStore()
    const isLoading = ref(true)

    onMounted(async () => {
      await store.dispatch('checkData')
      isLoading.value = false
    })

    return {
      successImg,
      router,
      isLoading,
    }
  }
}

</script>

<style scoped lang='scss'>
@import '@/styles/ConclusionPage.scss'
</style> 