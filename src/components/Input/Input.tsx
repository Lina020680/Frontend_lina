import React, { ChangeEvent } from 'react';
import { FormikErrors } from 'formik';
import {
  ErrorMessage,
  InputComponent,
  InputComponentContainer,
  InputLabel,
} from "./styles";

export interface InputProps {
  name: string;
  type?: string;
  placeholder: string;
  label?: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string | FormikErrors<any> | string[] | FormikErrors<any>[]; 
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

function Input({
  name,
  type = "text",
  placeholder,
  label,
  onInputChange,
  value,
  error,
  onBlur,
}: InputProps) {
  return (
    <InputComponentContainer>
      <InputLabel>{label}</InputLabel>
      <InputComponent
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
        onBlur={onBlur}
      />
      <ErrorMessage>{error ? error.toString() : ''}</ErrorMessage> 
    </InputComponentContainer>
  );
}

export default Input;