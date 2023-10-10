import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useApproveSms () {

    const router = useRouter()
    const store = useStore()

    const { handleSubmit, isSubmitting, submitCount, values} = useForm()

    const {value: smsCode, errorMessage: smsCodeError, handleBlur: smsCodeBlur, meta: smsCodeMeta} = useField(
        'smsCode',
        yup
            .string()
            .test('is-valid-date', 'Код состоит только из цифр', function (value) {
                if (!/^-?\d+(\.\d+)?$/.test(value)) {
                    return false
                }

                return true
            })
            .min(5, 'Код состоит из 5 цифр')
            .max(5, 'Код состоит из 5 цифр')
            .required('Введите код из смс')
            
    )



    const onSubmit = handleSubmit(async (val) => {
        try {
            const res = await store.dispatch('sendSmsCode', val)
            console.log('server responce', res)
            router.push('/condition')

        } catch (error) {
            console.log('Error from Submit form -->', error)
        }
    })

    return {
        smsCode,
        smsCodeMeta,
        smsCodeError,
        onSubmit,
    }
}