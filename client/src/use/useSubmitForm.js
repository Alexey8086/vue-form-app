import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useSubmitForm () {

    const router = useRouter()
    const store = useStore()

    const { handleSubmit, isSubmitting, submitCount, values} = useForm()

    const {value: surname, errorMessage: surnameError, handleBlur: surnameBlur, meta: surnameMeta} = useField(
        'surname',
        yup
            .string()
            .test('is-valid-date', 'Фамилия должна содержать только буквы', function (value) {
                if (!/^[A-Za-zА-Яа-я\s]+$/.test(value)) {
                    return false
                }

                return true
            })
            .trim()
            .min(2, 'Минимальная длина фамилии 2 символа')
            .max(18, 'Максимальная длина фамилии 18 символов')
            .required('Введите вашу фамилию')
            
    )

    const {value: fathername, errorMessage: fathernameError, handleBlur: fathernameBlur, meta: fathernameMeta} = useField(
        'fathername',
        yup
            .string()
            .test('is-valid-date', 'Отчество должно содержать только буквы', function (value) {
                if (!/^[A-Za-zА-Яа-я\s]+$/.test(value)) {
                    return false
                }

                return true
            })
            .trim()
            .min(2, 'Минимальная длина отчества 2 символа')
            .max(18, 'Максимальная длина отчества 18 символов')
    )

    const {value: country, errorMessage: countryError, handleBlur: countryBlur, meta: countryMeta} = useField(
        'country',
        yup
            .string()
            .test('is-valid-date', 'Название страны должно сосоять только из букв или дефисов', function (value) {
                if (!/^[A-Za-zА-Яа-я\s-]+$/.test(value)) {
                    return false
                }

                return true
            })
            .trim()
            .min(2, 'Минимальная длина названия страны 2 символа')
            .max(30, 'Максимальная длина названия страны 30 символов')
            .required('Введите ваше отчество')
    )

    const {value: firstName, errorMessage: firstNameError, handleBlur: firstNameBlur, meta: firstNameMeta} = useField(
        'firstName',
        yup
            .string()
            .trim()
            .test('is-valid-date', 'Имя включает только буквы/дефисы', function (value) {
                if (!/^[A-Za-zА-Яа-я\s-]+$/.test(value)) {
                    return false
                }

                return true
            })
            .min(2, 'Минимальная длина имени 2 символа')
            .max(18, 'Максимальная длина имени 18 символов')
            .required('Введите ваше имя')
    )

    const {value: born, errorMessage: bornError, handleBlur: bornBlur, meta: bornMeta} = useField(
        'born',
        yup
            .string()
            .required('Введите дату вашего рождения')
            .test('is-valid-date', 'Пожалуйста, введите дату в следующем формате: 25.01.1996', function (value) {
                if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                    return false
                }
          
                // Парсим значение в Date object и проверяем значение на валидность
                const date = new Date(value)
                return !isNaN(date.getTime())
              })
    )

    const {value: email, errorMessage: emailError, handleBlur: emailBlur, meta: emailMeta} = useField(
        'email',
        yup
            .string('Введен некорректный email!')
            .trim()
            .email('Введен некорректный email!')

    )

    const onSubmit = handleSubmit(async (val) => {
        try {
            if (store.state.checkboxValue) {
                await store.dispatch('submitForm', val) ? router.push('/approve') : null
            } else {
                store.commit('setCheckboxMsg', 'Необходимо согласие на обработку личных данных')
            }

        } catch (error) {
            console.log('Error from Submit form -->', error)
        }
    })

    return {
        surname,
        surnameMeta,
        surnameError,

        fathername,
        fathernameMeta,
        fathernameError,

        country,
        countryMeta,
        countryError,

        firstName,
        firstNameMeta,
        firstNameError,

        born,
        bornMeta,
        bornError,

        email,
        emailMeta,
        emailMeta,
        emailError,

        surnameBlur,
        fathernameBlur,
        countryBlur,
        firstNameBlur,
        bornBlur,
        emailBlur,

        isSubmitting,
        onSubmit,
    }
}