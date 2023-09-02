import * as yup from 'yup'


export const formSchema = yup.object().shape({
    name: yup.string().required('Este campo é obrigatório'),
    email: yup.string().email('Email inválido').required('Este campo é obrigatório'),
    password: yup.string().required('Este campo é obrigatório')

})