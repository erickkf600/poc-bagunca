import * as yup from 'yup'


export const formSchema = yup.object().shape({
    type: yup.string().required('Este campo é obrigatório'),
    weight: yup.string().required('Este campo é obrigatório')

})