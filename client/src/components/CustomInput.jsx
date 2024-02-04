/* eslint-disable react/prop-types */
const CustomInput = ({
  className,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  autoFocus,
}) => {
  return (
    <div className="mb-3">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default CustomInput;
