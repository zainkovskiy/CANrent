import React, { useContext } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { LayoutContext } from 'components/Layout';

export const AboutDeal = ({ register, errors }) => {
  const { data, handleChange } = useContext(LayoutContext);

  return (
    <>
      <span className='form__subtitle text'>Цена и условия сделки</span>
      <div className='field'>
        <div className='field__name text'>Арендная плата</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            value={data?.Price || ''}
            error={errors?.Price ? true : false}
            {...register('Price', {
              required: 'Не указана стоимость',
              onChange: (e) => handleChange(e),
            })}
          />
          <span className='field__error-text text'>
            {errors?.Price?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Коммунальные платежи</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='Price'
            value={data?.UtilitiesTerms?.Price || ''}
            inputProps={{ 'data-key': 'UtilitiesTerms' }}
            onChange={(e) => handleChange(e)}
          />
          <span
            className='text'
            style={{ alignSelf: 'center', margin: '0 0 0 1rem' }}
          >
            в месяц
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'></div>
        <div className='field__action'>
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='FlowMetersNotIncludedInPrice'
            control={
              <Checkbox
                checked={
                  data?.UtilitiesTerms?.FlowMetersNotIncludedInPrice || false
                }
                size='small'
                inputProps={{ 'data-key': 'UtilitiesTerms' }}
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Счетчики оплачиваются отдельно
              </span>
            }
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Залог собственнику</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            value={data?.Deposit || ''}
            error={errors?.Deposit ? true : false}
            {...register('Deposit', {
              required: 'Не указана стоимость',
              onChange: (e) => handleChange(e),
            })}
          />
          <span className='field__error-text text'>
            {errors?.Deposit?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Предоплата</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <Select
            value={data?.PrepayMonths || ''}
            size='small'
            sx={{ minWidth: 100 }}
            displayEmpty
            error={errors?.PrepayMonths ? true : false}
            {...register('PrepayMonths', {
              required: 'Укажите предоплату',
              onChange: (e) => handleChange(e),
            })}
          >
            <MenuItem
              disabled
              value=''
            >
              <em>Не выбрано</em>
            </MenuItem>
            <MenuItem value={1}>1 месяц</MenuItem>
            <MenuItem value={2}>2 месяца</MenuItem>
            <MenuItem value={3}>3 месяца</MenuItem>
            <MenuItem value={4}>4 месяца</MenuItem>
            <MenuItem value={5}>5 месяцев</MenuItem>
            <MenuItem value={6}>6 месяцев</MenuItem>
            <MenuItem value={7}>7 месяцев</MenuItem>
            <MenuItem value={8}>8 месяцев</MenuItem>
            <MenuItem value={9}>9 месяцев</MenuItem>
            <MenuItem value={10}>10 месяцев</MenuItem>
            <MenuItem value={11}>11 месяцев</MenuItem>
            <MenuItem value={12}>1 год</MenuItem>
          </Select>
          <span className='field__error-text text'>
            {errors?.PrepayMonths?.message || ''}
          </span>
        </div>
      </div>
    </>
  );
};
