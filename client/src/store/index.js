import { createStore } from 'vuex'
import { $host } from "@/axios/index"

export default createStore({

  state() {
    return {
      progress: localStorage.getItem('progress') | 0,
      previousFormData: localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : {},
      checkboxValue: true,
      checkboxMsg: '',
    }
  },
  getters: {

  },
  mutations: {
    setCheckboxValue (state, value) {
      state.checkboxValue = value
    },

    setCheckboxMsg (state, value) {
      state.checkboxMsg = value
    }
  },
  actions: {
    async submitForm({ commit, dispatch }, payload) {
      try {
        const previousFormData = localStorage.getItem('formData')
        console.log('previousFormData --- >>>>> ', previousFormData )
        const isDataChanged = JSON.stringify(payload) !== previousFormData

        if (isDataChanged) await $host.post('/sendForm', payload)

        localStorage.setItem('formData', JSON.stringify(payload))
  
        return true
      } catch (error) {
        throw new Error(error)
      }
    },
    
    async sendSmsCode({ commit, dispatch }, code) {
      try {
        const res = await $host.post('/sendCode', code)

        return res
      } catch (error) {
        throw new Error(error)
      }
    },

    async sendAgreement({ commit, dispatch }, code) {
      try {
        const res = await $host.post('/sendAgreement', code)
        console.log('responce from server ', res?.data)
        return res
      } catch (error) {
        throw new Error(error)
      }
    },

    async checkData({ commit, dispatch }) {
      try {
        const res = await $host.post('/checkData')
        console.log('responce from server ', res?.data)
        return res
      } catch (error) {
        throw new Error(error)
      }
    }

  }
})
