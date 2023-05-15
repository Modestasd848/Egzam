import styled from 'styled-components';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

export const StyledTr = styled.tr`
  background-color: #f8f9fa;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  margin: 6px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:first-child {
    background-color: #009879;
    &:hover {
      background-color: #009879;
    }
  }

  &:last-child {
    background-color: #ff726f;
    &:hover {
      background-color: #218838;
    }
  }
`;

export const StyledSection = styled.section`
  margin: 1% auto;
  text-align: left;
  width: 69%;
  padding: 7px;
`;

export const StyledH2 = styled.h2``;

export const StyledTd = styled.td`
  background-color: white;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
  th,
  td {
    padding: 12px 14px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;

export const StyledAiFillEdit = styled(AiFillEdit)`
  color: white;
  vertical-align: top;
`;

export const StyledAiFillDelete = styled(AiFillDelete)`
  color: white;
  vertical-align: top;
`;
