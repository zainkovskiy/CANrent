import React, { useContext } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { LayoutContext } from 'components/Layout';

export const AboutBuilding = ({ register, errors }) => {
  const { data, handleChange } = useContext(LayoutContext);

  return (
    <>
      <span className='form__subtitle text'>О здании</span>
      {(data?.Category === 'flatRent' ||
        data?.Category === 'roomRent' ||
        data?.Category === 'bedRent') && (
        <div className='field'>
          <div className='field__name text'>Тип дома</div>
          <div className='field__action'>
            <Select
              value={data?.MaterialType || ''}
              name='MaterialType'
              onChange={(event) => handleChange(event)}
              size='small'
              sx={{ minWidth: 100 }}
              displayEmpty
            >
              <MenuItem
                disabled
                value=''
              >
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value={'brick'}>Кирпичный</MenuItem>
              <MenuItem value={'monolith'}>Монолитный</MenuItem>
              <MenuItem value={'wood'}>Деревянный</MenuItem>
              <MenuItem value={'panel'}>Панельный</MenuItem>
              <MenuItem value={'block'}>Блочный</MenuItem>
              <MenuItem value={'monolithBrick'}>Монолитно-кирпичный</MenuItem>
              <MenuItem value={'stalin'}>Сталинский</MenuItem>
            </Select>
          </div>
        </div>
      )}
      {(data?.Category === 'houseRent' ||
        data?.Category === 'cottageRent' ||
        data?.Category === 'townhouseRent' ||
        data?.Category === 'houseShareRent') && (
        <div className='field'>
          <div className='field__name text'>Материал стен</div>
          <div className='field__action'>
            <Select
              value={data?.MaterialType || ''}
              name='MaterialType'
              onChange={(event) => handleChange(event)}
              size='small'
              sx={{ minWidth: 100 }}
              displayEmpty
            >
              <MenuItem
                disabled
                value=''
              >
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value={'brick'}>Кирпичный</MenuItem>
              <MenuItem value={'monolith'}>Монолитный</MenuItem>
              <MenuItem value={'wood'}>Деревянный</MenuItem>

              <MenuItem value={'boards'}>Щитовой</MenuItem>
              <MenuItem value={'wireframe'}>Каркасный</MenuItem>
              <MenuItem value={'aerocreteBlock'}>Газобетонный блок</MenuItem>
              <MenuItem value={'gasSilicateBlock'}>
                Газосиликатный блок
              </MenuItem>
              <MenuItem value={'foamConcreteBlock'}>Пенобетонный блок</MenuItem>
            </Select>
          </div>
        </div>
      )}
      {(data?.Category === 'houseRent' ||
        data?.Category === 'cottageRent' ||
        data?.Category === 'townhouseRent' ||
        data?.Category === 'houseShareRent') && (
        <div className='field'>
          <div className='field__name text'>Отопление</div>
          <div className='field__action'>
            {/* <Select
              value={data?.HeatingType || ''}
              name='HeatingType'
              onChange={(event) => handleChange(event)}
              size='small'
              sx={{ minWidth: 100 }}
              displayEmpty
            >
              <MenuItem
                disabled
                value=''
              >
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value={'centralGas'}>Центральное газовое</MenuItem>
              <MenuItem value={'centralCoal'}>Центральное угольное</MenuItem>
              <MenuItem value={'stove'}>Печь</MenuItem>
              <MenuItem value={'fireplace'}>Камин</MenuItem>
              <MenuItem value={'electric'}>Электрическое</MenuItem>
              <MenuItem value={'autonomousGas'}>Автономное газовое</MenuItem>
              <MenuItem value={'diesel'}>Дизельное</MenuItem>
              <MenuItem value={'solidFuelBoiler'}>
                Твердотопливный котел
              </MenuItem>
              <MenuItem value={'no'}>Без отопления</MenuItem>
            </Select> */}
          </div>
        </div>
      )}
      {(data?.Category === 'flatRent' ||
        data?.Category === 'roomRent' ||
        data?.Category === 'bedRent') && (
        <>
          <div className='field'>
            <div className='field__name text'>Пассажирских лифтов</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.PassengerLiftsCount || '0'}
              >
                <ToggleButton
                  size='small'
                  name='PassengerLiftsCount'
                  value='0'
                  sx={{ width: 50 }}
                >
                  нет
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='PassengerLiftsCount'
                  value='1'
                  sx={{ width: 50 }}
                >
                  1
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='PassengerLiftsCount'
                  value='2'
                  sx={{ width: 50 }}
                >
                  2
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='PassengerLiftsCount'
                  value='3'
                  sx={{ width: 50 }}
                >
                  3
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='PassengerLiftsCount'
                  value='4'
                  sx={{ width: 50 }}
                >
                  4
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <div className='field'>
            <div className='field__name text'>Грузовых лифтов</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.CargoLiftsCount || '0'}
              >
                <ToggleButton
                  size='small'
                  name='CargoLiftsCount'
                  value='0'
                  sx={{ width: 50 }}
                >
                  нет
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='CargoLiftsCount'
                  value='1'
                  sx={{ width: 50 }}
                >
                  1
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='CargoLiftsCount'
                  value='2'
                  sx={{ width: 50 }}
                >
                  2
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='CargoLiftsCount'
                  value='3'
                  sx={{ width: 50 }}
                >
                  3
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='CargoLiftsCount'
                  value='4'
                  sx={{ width: 50 }}
                >
                  4
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </>
      )}
      <div className='field'>
        <div className='field__name text'>Год постройки</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='BuildYear'
            value={data?.BuildYear || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {data?.Category === 'flatRent' && (
        <div className='field'>
          <div className='field__name text'>Высота потолков, м</div>
          <div className='field__action'>
            <TextField
              autoComplete='off'
              variant='outlined'
              size='small'
              type='number'
              name='CeilingHeight'
              value={data?.CeilingHeight || ''}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      )}
      {(data?.Category === 'flatRent' ||
        data?.Category === 'roomRent' ||
        data?.Category === 'bedRent') && (
        <>
          <div className='field'>
            <div className='field__name text'>Пандус</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.HasRamp ? 'есть' : 'нет'}
              >
                <ToggleButton
                  size='small'
                  sx={{ width: 100 }}
                  name='HasRamp'
                  value='есть'
                >
                  есть
                </ToggleButton>
                <ToggleButton
                  size='small'
                  sx={{ width: 100 }}
                  name='HasRamp'
                  value='нет'
                >
                  Нет
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <div className='field'>
            <div className='field__name text'>В доме</div>
            <div className='field__action'>
              <FormControlLabel
                onChange={(event) => handleChange(event)}
                name='HasGarbageChute'
                control={
                  <Checkbox
                    checked={data?.HasGarbageChute || false}
                    size='small'
                  />
                }
                label={
                  <span
                    className='text'
                    style={{ fontSize: 12 }}
                  >
                    Мусоропровод
                  </span>
                }
              />
            </div>
          </div>
          <div className='field'>
            <div className='field__name text'>Парковка</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.Parking?.Type || 0}
              >
                <ToggleButton
                  size='small'
                  name='Type'
                  data-key='Parking'
                  value={'ground'}
                >
                  Наземная
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='Type'
                  data-key='Parking'
                  value={'multilevel'}
                >
                  Многоуровневая
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='Type'
                  data-key='Parking'
                  value={'open'}
                >
                  Открытая
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='Type'
                  data-key='Parking'
                  value={'roof'}
                >
                  На крыше
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='Type'
                  data-key='Parking'
                  value={'underground'}
                >
                  Подземная
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </>
      )}
    </>
  );
};
