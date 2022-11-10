import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";

import { LayoutContext } from 'components/Layout';

export const AdressHandEnter = ({ register, errors }) => {
  const { data, handleChange } = useContext(LayoutContext);
  return (
    <>
      <div style={{ marginLeft: '1rem' }}>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <TextField
            fullWidth
            label='Адрес'
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
    </>
  )
}