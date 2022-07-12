import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  text-transform: capitalize;
`;

export const Input = styled.input`
  display: block;

  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.borderMiddleColor};
  transition: box-shadow 250ms ease-out;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:focus-within {
    outline: none;
    box-shadow: 0 0 7px ${({ theme }) => theme.colors.accentColor};
  }
`;
