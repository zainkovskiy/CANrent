import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Categories } from 'components/Categories';
import { Address } from 'components/Address';
import { Cords } from 'components/Cords';
import { AboutObject } from 'components/AboutObject';
import { AboutBuilding } from 'components/AboutBuilding';
import { AboutDeal } from 'components/AboutDeal';
import { LayoutContext } from 'components/Layout';

import './FormTemplate.scss';

export const FormTemplate = () => {
  const { data } = useContext(LayoutContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control
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
      <Categories />
      <Address
        register={register}
        errors={errors}
      />
      <Cords
        register={register}
        errors={errors}
        setValue={setValue}
      />
      {
        data.Category &&
        <>
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
        </>
      }
    </form>
  );
};
