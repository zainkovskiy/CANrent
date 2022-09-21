import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { AboutObject } from 'components/AboutObject';
import { AboutBuilding } from 'components/AboutBuilding';
import { AboutDeal } from 'components/AboutDeal';

import './FormTemplate.scss';

export const FormTemplate = () => {
  const {
    register,
    control,
    handleSubmit,
    defaultValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log('====================================');
    console.log(formData);
    console.log('====================================');
  };

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <AboutObject
        register={register}
        errors={errors}
      />
      <AboutBuilding
        register={register}
        errors={errors}
      />
      <AboutDeal
        register={register}
        errors={errors}
      />
      <button type='submit'>submit</button>
    </form>
  );
};
