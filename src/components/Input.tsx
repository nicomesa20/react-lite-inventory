import React, { FC } from 'react';
import { FieldErrors } from 'react-hook-form';
import GenericError from './GenericError';

interface Props extends Partial<HTMLInputElement> {
  register: any;
  errors?: FieldErrors;
}

const Input: FC<Props> = ({
  register,
  type = 'text',
  errors,
  ...inputParams
}) => {
  return (
    <div className='form-group'>
      <input
        {...register}
        {...inputParams}
        type={type}
        placeholder={register.name}
        className='form-input'
      />
      {errors && <GenericError errors={errors} name={register.name} />}
    </div>
  );
};

export default Input;
