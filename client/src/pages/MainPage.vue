<template>
  <div class="container">
    <div class="header">
      <h1>Личные данные</h1>

      <progressBar stepsText="Шаг 1 из 5" nextStepText="Следующий шаг: Паспорт" progress="25" />
    </div>

    <submitForm />

    <div class="footer">
      <span>заполните через</span>
      <img :src="gosImg" width="120" height="30" alt="госуслуги">
      <div class="agreement">
        <input form="submit-form" type="checkbox" checked v-model="checkboxValue" />
        <span>
          Даю согласие на
          <a href="#">обработку личных данных</a>
          и подписание документов в электронном виде
        </span>
        <p style="font-size: 1rem; color: red;" v-if="checkboxMsg">{{ checkboxMsg }}</p>
      </div>
    </div>

    <button form="submit-form" type="submit" class="btn-submit">Продолжить</button>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import gosImg from '@/assets/gos.png'
import progressBar from '@/components/progressBar'
import submitForm from '@/components/submitForm'

export default {
  name: '',
  components: { progressBar, submitForm },
  props: [''],
  emits: [''],

  setup() {
    const store = useStore()
    const progress = ref(25)
    const checkboxValue = ref(true)
    const checkboxMsg = computed(() => store.state.checkboxMsg)

    // отслеживаем состояние чекбокса и синхронизируем его со стором
    watch(checkboxValue, (newValue) => {
      store.commit('setCheckboxValue', newValue)
      if (newValue) store.commit('setCheckboxMsg', '')
    })



    return {
      gosImg,
      progress,
      checkboxValue,
      checkboxMsg,
    }
  }
}

</script>

<style scoped lang='scss'>
@import '@/styles/MainPage.scss';
</style> 