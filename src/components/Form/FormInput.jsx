import { Input, Label } from './FormInput.styled';

export function FormInput({ name, type, pattern, title }) {
  return (
    <Label>
      {name}
      <Input type={type} name={name} pattern={pattern} title={title} required />
    </Label>
  );
}
