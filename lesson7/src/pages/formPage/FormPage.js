import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import classes from './FormPage.module.scss';
import { postAxios } from '../fetch/Fetch';

const regex = /^\d+$/;
const regExEmail = new RegExp(/^[a-zA-Z\d-_\.]+@[a-zA-Z\d-_]+\.[a-zA-Z-_]{2,8}$/)

const schema = Yup.object().shape({
    name: Yup.string().required('обязательное поле').min(2, 'необходимо 2'),
    email: Yup.string().required('обязательное поле').matches(regExEmail, 'неправильная почта'),
    password: Yup.string().required('обязательное поле').matches(regex, 'только цифры').min(8, 'необходимо 8'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null,'пароли должны совпадать']),
})
const FormPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
        clearErrors,
        setValue,
        reset,

    } = useForm({
        defaultValues: {
        },
        resolver: yupResolver(schema)
    });

    const name = watch('name')


    console.log(isValid,'isValid');

    const submit = (data) => {
        console.log(data);
        postAxios(data)
    };
    const error = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form  className={classes.form} onSubmit={handleSubmit(submit, error)}>
                <h4>name</h4>
                <input
                    className={classes.input}
                    type="text"
                    {
                        ...register('name')
                    }
                    aria-invalid={errors.name ? true : false}
                />
                {
                    errors?.name?.message && <p>{errors.name.message}</p>
                }
                <h4>email</h4>

                <input
                    className={classes.input}

                    type="text"
                    {
                        ...register('email')
                    }
                    aria-invalid={errors.email ? true : false}

                />

                {
                    errors?.email?.message && <p>{errors.email.message}</p>
                }
                <h4>password</h4>

                <input
                    className={classes.input}

                    type="text"
                    {
                        ...register('password')
                    }
                    aria-invalid={errors.password ? true : false}

                />

                {
                    errors?.password?.message && <p>{errors.password.message}</p>
                }
                <h4>Confirmpassword</h4>

                <input
                    className={classes.input}

                    type="text"
                    {
                        ...register('confirmPassword')
                    }
                    aria-invalid={errors.confirmPassword ? true : false}

                />

                {
                    errors?.confirmPassword?.message && <p>{errors.confirmPassword.message}</p>
                }
                <button disabled={!isValid}>Отправить</button>
                <button type='button' onClick={()=>clearErrors()}>очистить</button>
                <button type='button' onClick={()=>setValue('age', '18')}>Отправить имя Бакыт</button>
                <button type='button' onClick={()=>reset()}>сброс</button>
            </form>
        </div>
    )
};

export default FormPage;