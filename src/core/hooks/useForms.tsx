/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useValidation } from '.';
import { Field } from '../../app/components';

function useForms() {
  const [fields, setFields] = useState({
    fname: '',
    email: '',
    cpf: '',
    password: '',
  });

  const {
    errors, getErrorMessageByFieldName, setError, removeError, validateFields,
  } = useValidation({ fields });

  function handleFieldsChange({ confirm, messageIfHasError, validateField }: any) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFields((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      if (validateField) {
        validateFields({
          confirm, name, event, messageIfHasError,
        });
      }
    };
  }

  function handleAllFieldsChange(data) {
    setFields((prevState) => ({ ...prevState, ...data }));
  }

  function createFields(field: string, fieldsObject: object) {
    const {
      label,
      value,
      type,
      placeholder,
      maxLength,
      confirm,
      autoComplete = 'off',
      validateField = true,
      messageIfHasError = 'Campo obrigatório',
    } = fieldsObject[field];

    // const getError = validateField ? getErrorMessageByFieldName(field) : '';
    return (
      <Field
        key={label}
        id={label}
        name={field}
        value={value}
        placeholder={placeholder}
        type={type || 'text'}
        label={label}
        maxLength={maxLength}
        onChange={handleFieldsChange({ confirm, messageIfHasError, validateField } || false)}
        autoComplete={autoComplete}
        error={errors.find((error) => error.field === field)?.message}
      />
    );
  }

  function clearAllFields() {
    const clearedFields = Object.keys(fields).reduce(
      (accumulator, field) => ({ ...accumulator, [field]: '' }),
      { ...fields },
    );
    setFields(clearedFields);
  }

  return {
    fields,
    handleFieldsChange,
    handleAllFieldsChange,
    clearAllFields,
    createFields,
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}

export default useForms;
