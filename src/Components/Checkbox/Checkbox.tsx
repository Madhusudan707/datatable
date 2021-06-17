import React from 'react'
import {CheckboxType} from '../../types/checkbox.types'
export const Checkbox = ({
    id,
    type,
    name,
    handleClick,
    isChecked,
  }:CheckboxType) => {
    return (
      <input
        id={id}
        name={name}
        type={type}
        onChange={handleClick}
        checked={isChecked}
      />
    );
  };
  