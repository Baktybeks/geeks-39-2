import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import classes from './FormPage.module.scss';

const regex = /^\d+$/;

const schema = Yup.object().shape({
    name: Yup.string().required('обязательное поле').min(2, 'необходимо 2'),
    age: Yup.string().required('обязательное поле').matches(regex, 'только цифры').min(1, 'необходимо 1'),
})
const FormPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        clearErrors,
        setValue,
        reset,

    } = useForm({
        defaultValues: {
            name: 'Kuban'
        },
        resolver: yupResolver(schema)
    });

    const name = watch('name')


    console.log(errors,'errors');

    const submit = (data) => {
        console.log(data);
    };
    const error = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form  className={classes.form} onSubmit={handleSubmit(submit, error)}>
                <h1>{name}</h1>
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
                <input
                    className={classes.input}

                    type="password"
                    {
                        ...register('age')
                    }
                    aria-invalid={errors.age ? true : false}

                />

                {
                    errors?.age?.message && <p>{errors.age.message}</p>
                }
                <button>Отправить</button>
                <button type='button' onClick={()=>clearErrors()}>очистить</button>
                <button type='button' onClick={()=>setValue('age', '18')}>Отправить имя Бакыт</button>
                <button type='button' onClick={()=>reset()}>сброс</button>
            </form>
        </div>
    )
};

export default FormPage;