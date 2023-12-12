import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 6px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #bd2130;
  }
`;