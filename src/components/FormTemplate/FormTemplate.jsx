import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { Categories } from 'components/Categories';
import { Address } from 'components/Address';
import { Cords } from 'components/Cords';
import { AboutObject } from 'components/AboutObject';
import { AboutBuilding } from 'components/AboutBuilding';
import { AboutDeal } from 'components/AboutDeal';
import { LayoutContext } from 'components/Layout';
import { AddressFlat } from 'components/AddressFlat';

import './FormTemplate.scss';

export const FormTemplate = () => {
  const { data } = useContext(LayoutContext);
  const navigate = useNavigate();
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
    navigate('photo');
  };

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Categories />
      {
        data.Category &&
        <>
          <Address
            register={register}
            errors={errors}
          />
          {
            (data?.Category === 'flatRent' || data?.Category === 'roomRent') &&
            <AddressFlat
              register={register}
              errors={errors}
            />
          }
          <Cords
            register={register}
            errors={errors}
            setValue={setValue}
          />
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
          <div className='buttons__wrap'>
            <Button
              size='small'
              type='submit'
              variant='contained'
            >
              Далее
            </Button>
          </div>
        </>
      }
    </form>
  );
};
