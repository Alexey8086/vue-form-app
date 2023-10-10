<template>
  <div class="container">

    <div class="header">
      <img @click="router.push('/')" :src="backArrow" alt="вернуться назад">
      <h1>Условия</h1>
    </div>
    

    <div class="progress-bar">
      <div class="progress-bar__line">
        <div :style="{ width: progress + '%' }" class="progress-bar__line__width"></div>
      </div>

      <div class="progress-bar__description">
        <span>Шаг 5 из 5</span>
        <span>Подписание договора</span>
      </div>
    </div>

    <div class="conditions">
      <div class="conditions__item">
        <span class="conditions__item__desc">Сумма займа:</span>
        <span class="conditions__item__value">23 000 Р</span>
      </div>

      <div class="conditions__item">
        <span class="conditions__item__desc">Дата возврата:</span>
        <span class="conditions__item__value">23.06.2029</span>
      </div>

      <div class="conditions__item">
        <span class="conditions__item__desc">Плата за заём:</span>
        <span class="conditions__item__value"> 300 Р</span>
      </div>
      
      <div class="conditions__item">
        <span class="conditions__item__desc">Ставкаа:</span>
        <span class="conditions__item__value">0.9%</span>
      </div>

      <div class="conditions__item">
        <span class="conditions__item__desc">ПСК:</span>
        <span class="conditions__item__value">30.04.2020</span>
      </div>


    </div>

    <div class="footer">
      <a href="#">Проект сертификата дистанционный "Помощник Ц"</a>
      <a href="#">Паямятка использования "Помощник Ц"</a>
      <a href="#">Согласие на подключение рекуррентного платежа</a>
    </div>

    <button @click="sendAgreement" class="btn-submit">Подписать договор</button>
  </div>
</template>


<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import backArrow from '@/assets/backArrow.svg'

export default {
  name: '',
  components: {},
  props: [''],
  emits: [''],

  setup() {
    const router = useRouter()
    const store = useStore()

    const sendAgreement = async () => {
      await store.dispatch('sendAgreement')
      router.push('/conclusion')
    }

    return {
      backArrow,
      router,
      sendAgreement,
    }
  }
}

</script>

<style scoped lang='scss'>
@import '@/styles/ConditionPage.scss';
</style> 