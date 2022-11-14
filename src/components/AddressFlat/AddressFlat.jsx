import React, { useContext } from "react";
import TextField from "@mui/material/TextField";

import { LayoutContext } from 'components/Layout';

export const AddressFlat = ({ register, errors }) => {
  const { data, handleChange } = useContext(LayoutContext);
  return (
    <div className='field'>
      <div className='field__name text'>Номер квартиры</div>
      <div className='field__action'>
        <span className='field__error-icon'></span>
        <TextField
          autoComplete='off'
          variant='outlined'
          size='small'
          name='numberFlat'
          value={data?.numberFlat || ''}
          {...register('numberFlat', {
            required: 'Укажите номер квартиры',
            onChange: (e) => handleChange(e),
          })}
          error={errors?.numberFlat ? true : false}
        />
        <span className='field__error-text text'>
          {errors?.numberFlat?.message || ''}
        </span>
      </div>
    </div>
  )
}