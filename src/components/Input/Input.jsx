import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { InputField, Label } from './Input.styled';

export function Input({
  name,
  type,
  value,
  pattern,
  title,
  required,
  onChange,
}) {
  const id = nanoid();
  return (
    <>
      <Label htmlFor={id}>{name}</Label>
      <InputField
        type={type}
        name={name}
        id={id}
        value={value}
        pattern={pattern}
        title={title}
        required={required}
        onChange={onChange}
      />
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
