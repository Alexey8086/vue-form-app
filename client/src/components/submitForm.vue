<template>
    <form @submit.prevent="onSubmit" id="submit-form">
        <div class="column">
            <div class="form-group">
                <input
                    class="input-field"
                    type="text"
                    placeholder="Фамилия*"
                    v-model="surname"
                    @blur="surnameBlur"
                    :class="['', {invalid: surnameError}, {valid: surnameMeta.dirty && !surnameError}]"
                    >
                <p v-if="surnameError">{{ surnameError }}</p>
            </div>
            <div class="form-group">
                <input
                    class="input-field"
                    type="text"
                    placeholder="Отчество"
                    v-model="fathername"
                    @blur="fathernameBlur"
                    :class="['', {invalid: fathernameError}, {valid: fathernameMeta.dirty && !fathernameError}]"
                >
                <p v-if="fathernameError">{{ fathernameError }}</p>
            </div>
            <div class="form-group">
                <input
                    class="input-field"
                    type="text"
                    placeholder="Страна места рождения*"
                    v-model="country"
                    @blur="countryBlur"
                    :class="['', {invalid: countryError}, {valid: countryMeta.dirty && !countryError}]"
                >
                <p v-if="countryError">{{ countryError }}</p>
            </div>
        </div>
        <div class="column">
            <div class="form-group">
                <input
                    class="input-field"
                    type="text"
                    placeholder="Имя"
                    v-model="firstName"
                    @blur="firstNameBlur"
                    :class="['', {invalid: firstNameError}, {valid: firstNameMeta.dirty && !firstNameError}]"
                >
                <p v-if="firstNameError">{{ firstNameError }}</p>
            </div>
            <div class="form-group">
                <input
                    class="input-field"
                    type="date"
                    placeholder="Дата рождения"
                    v-model="born"
                    @blur="bornBlur"
                    :class="['', {invalid: bornError}, {valid: bornMeta.dirty && !bornError}]"
                >
                <p v-if="bornError">{{ bornError }}</p>
            </div>
            <div class="form-group">
                <input
                    class="input-field"
                    type="email"
                    placeholder="E-mail"
                    v-model="email"
                    @blur="emailBlur"
                    :class="['', {invalid: emailError}, {valid: emailMeta.dirty && !emailError}]"
                >
                <p v-if="emailError">{{ emailError }}</p>
            </div>
        </div>
    </form>
</template>

<script>
import { useSubmitForm } from '@/use/useSubmitForm'

export default {
    name: '',
    components: {},
    props: [],
    emits: [''],

    setup() {


        return {
            ...useSubmitForm(),
        }
    }
}

</script>

<style scoped lang='scss'>
form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding-top: 30px;
    width: 100%;

    .column {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 30px;

        .form-group {
            height: 60px;
            .input-field {
                
                width: 100%;
                border: 1px solid #ccc;
                color: black;
                border-radius: 5px;
                padding: 10px;
                font-size: 1.2rem;
            }

            .invalid {
                color: #ff3939;
                border: 1px solid #ff3939;
            }

            .valid {
                color: #68c730;
                border: 1px solid #68c730;
            }

            p {
                color: #ff3939;
                font-size: 0.8rem;
            }
        }
    }
}
</style> 