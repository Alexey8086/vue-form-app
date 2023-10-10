<template>
    <div class="container">
        <div class="header">
            <h1>Подтверждение удаленной идентификации</h1>
            <h3>Мы отправили SMS с кодом на ваш номер телефона</h3>
        </div>

        <label for="sms-code">Код</label>
        <input
            id="sms-code"
            type="text"
            placeholder="Введите код из смс"
            v-model="smsCode"
            @blur="smsCodeBlur"
            :class="['', {invalid: smsCodeError}, {valid: smsCodeMeta.dirty && !smsCodeError}]"
        >
        <p v-if="smsCodeError">{{ smsCodeError }}</p>

        <button
            @click="onSubmit"
            :class="['btn-submit', {active: smsCodeMeta.dirty && !smsCodeError}]"
        >
            Проверить код
        </button>

        <div class="repeat-sms-receive">
            <span>Отправить код повторно через</span>
            <span class="recieve-sms-timer">80 секунд</span>
        </div>
    </div>
</template>

<script>
import { useApproveSms } from '@/use/useApproveSms'


export default {
    name: '',
    components: {},
    props: [''],
    emits: [''],

    setup() {



        return {
            ...useApproveSms()
        }
    }
}

</script>

<style scoped lang='scss'>
@import '@/styles/ApprovePage.scss';
</style> 