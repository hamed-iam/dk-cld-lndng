import React, { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

function DatePicker({ name, label }) {
  const { control } = useFormContext();
  const [date, setDate] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setDate(value);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <input type="date" value={value} onChange={onChange} />
        )}
      />
    </div>
  );
}

export default DatePicker;