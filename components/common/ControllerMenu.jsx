import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ options, onChange, value, ...rest }) => {
  // Custom style for the select menu
  const customStyles = {
    option: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
  };

  // Custom rendering for the dropdown options
  const customOption = ({ data }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={data.image}
        alt={data.label}
        style={{ width: 30, height: 30, marginRight: 10, borderRadius: '50%' }}
      />
      {data.label}
    </div>
  );

  return (
    <Select
      {...rest}
      value={value}
      options={options}
      styles={customStyles}
      getOptionLabel={customOption}
      getValueLabel={customOption}
      onChange={onChange}
    />
  );
};

export default CustomSelect;
