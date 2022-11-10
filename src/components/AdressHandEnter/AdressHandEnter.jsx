import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";

import { LayoutContext } from 'components/Layout';

export const AdressHandEnter = ({ register, errors }) => {
  const { data, handleChange } = useContext(LayoutContext);
  return (
    <div className="field">
      <div className='field__name text'>Адрес (ручной ввод)</div>
      <div className='field__action'>
        <span className='field__error-icon'></span>
        <TextField
          fullWidth
          autoComplete='off'
          variant='outlined'
          size='small'
          name='newAddress'
          value={data?.newAddress || ''}
          {...register('newAddress', {
            required: 'Не указана стоимость',
            onChange: (e) => handleChange(e),
          })}
          error={errors?.newAddress ? true : false}
        />
      </div>
    </div>
  )
}