import React from 'react';

function Field({
  id,
  label,
  name,
  value,
  error,
  placeholder,
  type,
  onChange,
  autoComplete,
  maxLength = 20,
  ...inputProps
}: any) {
  return (
    <div className="w-full flex flex-col gap-2 my-4">
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <div>
        <input
          id={label}
          name={name}
          value={value}
          placeholder={placeholder}
          type={type || 'text'}
          onChange={onChange}
          autoComplete={autoComplete}
          className="w-full px-4 py-2 rounded bg-gray-100"
          maxLength={maxLength}
          {...inputProps}
        />
        <div className="h-0.5 bg-gray-400" />
        <p className="py-2 text-xs text-red-600 font-bold">
          {error}
        </p>
      </div>
    </div>
  );
}

export default Field;
