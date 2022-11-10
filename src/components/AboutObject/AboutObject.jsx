import React, { useContext } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { LayoutContext } from 'components/Layout';

export const AboutObject = ({ register, errors }) => {
  const { data, handleChange } = useContext(LayoutContext);

  return (
    <>
      <span className='form__subtitle text'>Об объекте</span>
      {data?.Category === 'flatRent' && (
        <div className='field'>
          <div className='field__name text'>Количество комнат</div>
          <div className='field__action'>
            <span className='field__error-icon'></span>
            <Select
              value={data?.FlatRoomsCount || ''}
              name='FlatRoomsCount'
              size='small'
              sx={{ minWidth: 100 }}
              displayEmpty
              {...register('FlatRoomsCount', {
                required: 'Укажите количество комнат',
                onChange: (e) => handleChange(e),
              })}
              error={errors?.FlatRoomsCount ? true : false}
            >
              <MenuItem
                disabled
                value=''
              >
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6 и более</MenuItem>
              <MenuItem value={7}>свободная планировка</MenuItem>
              <MenuItem value={8}>студия</MenuItem>
            </Select>
            {data?.FlatRoomsCount && (
              <FormControlLabel
                onChange={(event) => handleChange(event)}
                name='IsPenthouse'
                sx={{ ml: '1rem' }}
                control={
                  <Checkbox
                    checked={data?.IsPenthouse || false}
                    size='small'
                  />
                }
                label={
                  <span
                    className='text'
                    style={{ fontSize: 12 }}
                  >
                    Пентхаус
                  </span>
                }
              />
            )}
            <span className='field__error-text text'>
              {errors?.FlatRoomsCount?.message || ''}
            </span>
          </div>
        </div>
      )}
      {(data?.Category === 'roomRent' || data?.Category === 'bedRent') && (
        <div className='field'>
          <div className='field__name text'>Комнат в аренду</div>
          <div className='field__action'>
            <span className='field__error-icon'></span>
            <Select
              value={data?.RoomsForSaleCount || ''}
              name='RoomsForSaleCount'
              size='small'
              sx={{ minWidth: 100 }}
              displayEmpty
              {...register('RoomsForSaleCount', {
                required: 'Выберете значение',
                validate: {
                  more: (e) =>
                    e < data?.RoomsCount ||
                    'Количество комнат должно быть меньше общего числа комнат в квартире',
                },
                onChange: (e) => handleChange(e),
              })}
              error={errors?.RoomsForSaleCount ? true : false}
            >
              <MenuItem
                disabled
                value=''
              >
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6 и более</MenuItem>
            </Select>
            <span className='field__error-text text'>
              {errors?.RoomsForSaleCount?.message || ''}
            </span>
          </div>
        </div>
      )}
      {(data?.Category === 'roomRent' || data?.Category === 'bedRent') && (
        <div className='field'>
          <div className='field__name text'>Всего комнат в квартире</div>
          <div className='field__action'>
            <span className='field__error-icon'></span>
            <Select
              value={data?.RoomsCount || ''}
              name='RoomsCount'
              size='small'
              sx={{ minWidth: 100 }}
              displayEmpty
              {...register('RoomsCount', {
                required: 'Выберете значение',
                validate: {
                  more: (e) =>
                    e > data?.RoomsForSaleCount ||
                    'Количество комнат должно быть больше общего числа комнат в аренде',
                },
                onChange: (e) => handleChange(e),
              })}
              error={errors?.RoomsCount ? true : false}
            >
              <MenuItem
                disabled
                value=''
              >
                <em>Не выбрано</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6 и более</MenuItem>
            </Select>
            <span className='field__error-text text'>
              {errors?.RoomsCount?.message || ''}
            </span>
          </div>
        </div>
      )}
      {(data?.Category === 'flatRent' ||
        data?.Category === 'roomRent' ||
        data?.Category === 'bedRent') && (
          <div className='field'>
            <div className='field__name text'>Тип квариры</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.RoomType || null}
              >
                <ToggleButton
                  size='small'
                  name='RoomType'
                  value='combined'
                >
                  Совмещенная
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='RoomType'
                  value='separate'
                >
                  Изолированная
                </ToggleButton>
                {data?.Category === 'flatRent' && (
                  <ToggleButton
                    size='small'
                    name='RoomType'
                    value='both'
                  >
                    Смежно-изолированная
                  </ToggleButton>
                )}
              </ToggleButtonGroup>
            </div>
          </div>
        )}
      {(data?.Category === 'roomRent' || data?.Category === 'bedRent') && (
        <div className='field'>
          <div className='field__name text'>
            <span>
              Площадь комнаты, м<sup>2</sup>
            </span>
          </div>
          <div className='field__action'>
            <span className='field__error-icon'></span>
            <TextField
              autoComplete='off'
              variant='outlined'
              size='small'
              type='number'
              name='TotalArea'
              value={data?.TotalArea || ''}
              {...register('TotalArea', {
                required: 'Выберете значение',
                onChange: (e) => handleChange(e),
              })}
              error={errors?.TotalArea ? true : false}
            />
            <span className='field__error-text text'>
              {errors?.TotalArea?.message || ''}
            </span>
          </div>
        </div>
      )}
      {data?.Category === 'bedRent' && (
        <div className='field'>
          <div className='field__name text'>
            <span>Количество спальных мест</span>
          </div>
          <div className='field__action'>
            <TextField
              autoComplete='off'
              variant='outlined'
              size='small'
              type='number'
              name='BedsCount'
              value={data?.BedsCount || ''}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      )}
      <div className='field'>
        <div className='field__name text'>
          <span>
            {data?.Category === 'flatRent' ||
              data?.Category === 'roomRent' ||
              data?.Category === 'bedRent'
              ? 'Общая площадь'
              : 'Площадь дома'}
            , м<sup>2</sup>
          </span>
        </div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='TotalArea'
            value={data?.TotalArea || ''}
            error={errors?.TotalArea ? true : false}
            {...register('TotalArea', {
              required: 'Укажите общую площадь',
              onChange: (e) => handleChange(e),
            })}
          />
          <span className='field__error-text text'>
            {errors?.TotalArea?.message || ''}
          </span>
        </div>
      </div>
      {(data?.Category === 'flatRent' ||
        data?.Category === 'roomRent' ||
        data?.Category === 'bedRent') && (
          <div className='field'>
            <div className='field__name text'>Этаж</div>
            <div className='field__action'>
              <span className='field__error-icon'></span>
              <TextField
                autoComplete='off'
                variant='outlined'
                size='small'
                type='number'
                value={data?.FloorNumber || ''}
                error={errors?.FloorNumber ? true : false}
                {...register('FloorNumber', {
                  required: 'Укажите этаж',
                  validate: {
                    more: (e) =>
                      e <= data?.FloorsCount ||
                      'Должен быть меньше или равен этажности',
                  },
                  onChange: (e) => handleChange(e),
                })}
              />
              <span className='field__error-text text'>
                {errors?.FloorNumber?.message || ''}
              </span>
            </div>
          </div>
        )}
      <div className='field'>
        <div className='field__name text'>Этажей в доме</div>
        <div className='field__action'>
          {(data?.Category === 'flatRent' ||
            data?.Category === 'roomRent' ||
            data?.Category === 'bedRent') && (
              <span className='field__error-icon'></span>
            )}
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            value={data?.FloorsCount || ''}
            error={errors?.FloorsCount ? true : false}
            {...register('FloorsCount', {
              required: {
                value:
                  data?.Category === 'houseRent' ||
                    data?.Category === 'cottageRent' ||
                    data?.Category === 'townhouseRent' ||
                    data?.Category === 'houseShareRent'
                    ? false
                    : true,
                message: 'Укажите этаж и количество этажей в доме',
              },
              onChange: (e) => handleChange(e),
            })}
          />
          <span className='field__error-text text'>
            {errors?.FloorsCount?.message || ''}
          </span>
        </div>
      </div>
      {(data?.Category === 'houseRent' ||
        data?.Category === 'cottageRent' ||
        data?.Category === 'townhouseRent' ||
        data?.Category === 'houseShareRent') && (
          <div className='field'>
            <div className='field__name text'>Количество спален</div>
            <div className='field__action'>
              <TextField
                autoComplete='off'
                variant='outlined'
                size='small'
                type='number'
                name='BedroomsCount'
                value={data?.BedroomsCount || ''}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        )}
      {data?.Category === 'houseShareRent' && (
        <div className='field'>
          <div className='field__name text'>Часть в аренду</div>
          <div className='field__action'>
            <span className='field__error-icon'></span>
            <TextField
              autoComplete='off'
              variant='outlined'
              size='small'
              type='number'
              value={data?.ShareAmount || ''}
              {...register('ShareAmount', {
                required: 'Введите значение',
                onChange: (e) => handleChange(e),
              })}
            />
            <span className='field__error-text text'>
              {errors?.ShareAmount?.message || ''}
            </span>
          </div>
        </div>
      )}
      {data?.Category === 'flatRent' && (
        <div className='field'>
          <div className='field__name text'>
            <span>
              Жилая, м<sup>2</sup>
            </span>
          </div>
          <div className='field__action'>
            <TextField
              autoComplete='off'
              variant='outlined'
              size='small'
              type='number'
              name='LivingArea'
              value={data?.LivingArea || ''}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      )}
      {(data?.Category === 'flatRent' ||
        data?.Category === 'roomRent' ||
        data?.Category === 'bedRent') && (
          <div className='field'>
            <div className='field__name text'>
              <span>
                Кухня, м<sup>2</sup>
              </span>
            </div>
            <div className='field__action'>
              <TextField
                autoComplete='off'
                variant='outlined'
                size='small'
                type='number'
                name='KitchenArea'
                value={data?.KitchenArea || ''}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        )}
      {(data?.Category === 'flatRent' ||
        data?.Category === 'roomRent' ||
        data?.Category === 'bedRent') && (
          <div className='field'>
            <div className='field__name text'>Лоджия</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.LoggiasCount || '0'}
              >
                <ToggleButton
                  size='small'
                  name='LoggiasCount'
                  value='0'
                  sx={{ width: 50 }}
                >
                  нет
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='LoggiasCount'
                  value='1'
                  sx={{ width: 50 }}
                >
                  1
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='LoggiasCount'
                  value='2'
                  sx={{ width: 50 }}
                >
                  2
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='LoggiasCount'
                  value='3'
                  sx={{ width: 50 }}
                >
                  3
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='LoggiasCount'
                  value='4'
                  sx={{ width: 50 }}
                >
                  4
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        )}
      {(data?.Category === 'flatRent' ||
        data?.Category === 'roomRent' ||
        data?.Category === 'bedRent') && (
          <div className='field'>
            <div className='field__name text'>Балконы</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.BalconiesCount || '0'}
              >
                <ToggleButton
                  size='small'
                  name='BalconiesCount'
                  value='0'
                  sx={{ width: 50 }}
                >
                  нет
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='BalconiesCount'
                  value='1'
                  sx={{ width: 50 }}
                >
                  1
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='BalconiesCount'
                  value='2'
                  sx={{ width: 50 }}
                >
                  2
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='BalconiesCount'
                  value='3'
                  sx={{ width: 50 }}
                >
                  3
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='BalconiesCount'
                  value='4'
                  sx={{ width: 50 }}
                >
                  4
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        )}
      {(data?.Category === 'flatRent' ||
        data?.Category === 'roomRent' ||
        data?.Category === 'bedRent') && (
          <div className='field'>
            <div className='field__name text'>Количество раздельных санузлов</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.SeparateWcsCount || '0'}
              >
                <ToggleButton
                  size='small'
                  name='SeparateWcsCount'
                  value='0'
                  sx={{ width: 50 }}
                >
                  нет
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='SeparateWcsCount'
                  value='1'
                  sx={{ width: 50 }}
                >
                  1
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='SeparateWcsCount'
                  value='2'
                  sx={{ width: 50 }}
                >
                  2
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='SeparateWcsCount'
                  value='3'
                  sx={{ width: 50 }}
                >
                  3
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='SeparateWcsCount'
                  value='4'
                  sx={{ width: 50 }}
                >
                  4
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        )}
      {(data?.Category === 'flatRent' ||
        data?.Category === 'roomRent' ||
        data?.Category === 'bedRent') && (
          <div className='field'>
            <div className='field__name text'>Количество совместных санузлов</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.CombinedWcsCount || '0'}
              >
                <ToggleButton
                  size='small'
                  name='CombinedWcsCount'
                  value='0'
                  sx={{ width: 50 }}
                >
                  нет
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='CombinedWcsCount'
                  value='1'
                  sx={{ width: 50 }}
                >
                  1
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='CombinedWcsCount'
                  value='2'
                  sx={{ width: 50 }}
                >
                  2
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='CombinedWcsCount'
                  value='3'
                  sx={{ width: 50 }}
                >
                  3
                </ToggleButton>
                <ToggleButton
                  size='small'
                  name='CombinedWcsCount'
                  value='4'
                  sx={{ width: 50 }}
                >
                  4
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        )}
      {(data?.Category === 'houseRent' ||
        data?.Category === 'cottageRent' ||
        data?.Category === 'townhouseRent' ||
        data?.Category === 'houseShareRent') && (
          <div className='field'>
            <div className='field__name text'>Санузел</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.WcLocationType || null}
              >
                <ToggleButton
                  size='small'
                  sx={{ width: 100 }}
                  name='WcLocationType'
                  value='indoors'
                >
                  На улице
                </ToggleButton>
                <ToggleButton
                  size='small'
                  sx={{ width: 100 }}
                  name='WcLocationType'
                  value='outdoors'
                >
                  В доме
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        )}
      <div className='field'>
        <div className='field__name text'>Ремонт</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={data?.RepairType || null}
          >
            <ToggleButton
              size='small'
              name='RepairType'
              value='cosmetic'
            >
              Косметический
            </ToggleButton>
            <ToggleButton
              size='small'
              name='RepairType'
              value='design'
            >
              Дизайнерский
            </ToggleButton>
            <ToggleButton
              size='small'
              name='RepairType'
              value='euro'
            >
              Евроремонт
            </ToggleButton>
            <ToggleButton
              size='small'
              name='RepairType'
              value='no'
            >
              Без ремонта
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      {data?.Category !== 'bedRent' && (
        <>
          <div className='field'>
            <div className='field__name text'>Можно с животными</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.PetsAllowed ? 'да' : 'нет'}
              >
                <ToggleButton
                  size='small'
                  sx={{ width: 100 }}
                  name='PetsAllowed'
                  value='да'
                >
                  Да
                </ToggleButton>
                <ToggleButton
                  size='small'
                  sx={{ width: 100 }}
                  name='PetsAllowed'
                  value='нет'
                >
                  Нет
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <div className='field'>
            <div className='field__name text'>Можно с детьми</div>
            <div className='field__action'>
              <ToggleButtonGroup
                color='primary'
                exclusive
                onChange={(event) => handleChange(event)}
                value={data?.ChildrenAllowed ? 'да' : 'нет'}
              >
                <ToggleButton
                  size='small'
                  sx={{ width: 100 }}
                  name='ChildrenAllowed'
                  value='да'
                >
                  Да
                </ToggleButton>
                <ToggleButton
                  size='small'
                  sx={{ width: 100 }}
                  name='ChildrenAllowed'
                  value='нет'
                >
                  Нет
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </>
      )}
      <div className='field'>
        <div
          className='field__name text'
          style={{ alignItems: 'flex-start' }}
        >
          Дополнительно
        </div>
        <div className='field__action field__action_column'>
          <div className='field__column'>
            <span className='field__subtitle text'>Общее</span>
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasFurniture'
              control={
                <Checkbox
                  checked={data?.HasFurniture || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Мебель в квартире
                </span>
              }
            />
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasKitchenFurniture'
              control={
                <Checkbox
                  checked={data?.HasKitchenFurniture || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Мебель в квартире
                </span>
              }
            />
            {(data?.Category === 'houseRent' ||
              data?.Category === 'cottageRent' ||
              data?.Category === 'townhouseRent' ||
              data?.Category === 'houseShareRent') && (
                <>
                  <FormControlLabel
                    onChange={(event) => handleChange(event)}
                    name='HasBathhouse'
                    control={
                      <Checkbox
                        checked={data?.HasBathhouse || false}
                        size='small'
                      />
                    }
                    label={
                      <span
                        className='text'
                        style={{ fontSize: 12 }}
                      >
                        Есть баня
                      </span>
                    }
                  />
                  <FormControlLabel
                    onChange={(event) => handleChange(event)}
                    name='HasGarage'
                    control={
                      <Checkbox
                        checked={data?.HasGarage || false}
                        size='small'
                      />
                    }
                    label={
                      <span
                        className='text'
                        style={{ fontSize: 12 }}
                      >
                        Есть гараж
                      </span>
                    }
                  />
                  <FormControlLabel
                    onChange={(event) => handleChange(event)}
                    name='HasPool'
                    control={
                      <Checkbox
                        checked={data?.HasPool || false}
                        size='small'
                      />
                    }
                    label={
                      <span
                        className='text'
                        style={{ fontSize: 12 }}
                      >
                        Есть бассейн
                      </span>
                    }
                  />
                </>
              )}
          </div>
          <div className='field__column'>
            <span className='field__subtitle text'>Техника</span>
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasTv'
              control={
                <Checkbox
                  checked={data.HasTv || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Телевизор
                </span>
              }
            />
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasWasher'
              control={
                <Checkbox
                  checked={data?.HasWasher || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Стиральная машинка
                </span>
              }
            />
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasDishwasher'
              control={
                <Checkbox
                  checked={data?.HasDishwasher || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Посудомоечная машинка
                </span>
              }
            />
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasPhone'
              control={
                <Checkbox
                  checked={data?.HasPhone || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Телефон
                </span>
              }
            />
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasFridge'
              control={
                <Checkbox
                  checked={data?.HasFridge || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Холодильник
                </span>
              }
            />
          </div>
          <div className='field__column'>
            <span className='field__subtitle text'>Комфорт</span>
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasInternet'
              control={
                <Checkbox
                  checked={data?.HasInternet || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Интернет
                </span>
              }
            />
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasShower'
              control={
                <Checkbox
                  checked={data?.HasShower || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Душевая кабина
                </span>
              }
            />
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasBathtub'
              control={
                <Checkbox
                  checked={data?.HasBathtub || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Ванна
                </span>
              }
            />
            <FormControlLabel
              onChange={(event) => handleChange(event)}
              name='HasConditioner'
              control={
                <Checkbox
                  checked={data?.HasConditioner || false}
                  size='small'
                />
              }
              label={
                <span
                  className='text'
                  style={{ fontSize: 12 }}
                >
                  Кондиционер
                </span>
              }
            />
          </div>
        </div>
      </div>
      {(data?.Category === 'houseRent' ||
        data?.Category === 'cottageRent' ||
        data?.Category === 'townhouseRent' ||
        data?.Category === 'houseShareRent') && (
          <div className='field'>
            <div className='field__name text'>Площадь участка</div>
            <div className='field__action'>
              <span className='field__error-icon'></span>
              <TextField
                autoComplete='off'
                variant='outlined'
                size='small'
                type='number'
                value={data?.Area || ''}
                error={errors?.Area ? true : false}
                {...register('Area', {
                  required: 'Укажите площадь участка',
                  onChange: (e) => handleChange(e),
                })}
              />
              <span className='field__error-text text'>
                {errors?.Area?.message || ''}
              </span>
            </div>
          </div>
        )}
    </>
  );
};
