import styled from 'styled-components';

export const FilterContainer = styled.div`
  max-width: 300px;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;