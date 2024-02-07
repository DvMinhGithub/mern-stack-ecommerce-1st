/* eslint-disable react/prop-types */
const CustomInput = ({
  classWrapper='',
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
    <div className={`${classWrapper}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} w-full rounded border-[1.5px] bg-gray py-3 pl-3 pr-4.5 text-black focus:border-blue-700 focus-visible:outline-none `}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default CustomInput;
