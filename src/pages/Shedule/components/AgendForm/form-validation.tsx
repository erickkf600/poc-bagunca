import * as yup from 'yup'


export const formSchema = yup.object().shape({
    type: yup.string().required('Este campo é obrigatório'),
    weigth: yup.string().required('Este campo é obrigatório'),
    date: yup.string().required('Este campo é obrigatório'),
    city: yup.string().required('Este campo é obrigatório'),
    uf: yup.string().required('Este campo é obrigatório'),
    address: yup.string().required('Este campo é obrigatório'),
    number: yup.string().required('Este campo é obrigatório'),

})