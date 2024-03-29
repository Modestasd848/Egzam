import React, { useState } from 'react';
import {
  StyledBody,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledInputGroup,
  StyledLabel,
} from './UserRegistration.styled';

export default function UserRegistration({ onAddUser }) {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    registrationDate: '',
  });

  return (
    <StyledBody>
      <h2>New Customer Registration</h2>
      <StyledForm>
        <StyledInputGroup>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="surname">Surname</StyledLabel>
          <StyledInput
            type="text"
            id="surname"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <StyledLabel htmlFor="date">Date and Time</StyledLabel>
          <StyledInput
            type="datetime-local"
            id="date"
            value={user.registrationDate}
            onChange={(e) => setUser({ ...user, registrationDate: e.target.value })}
          />
        </StyledInputGroup>
        <StyledButton
          type="button"
          onClick={() => {
            onAddUser(user);
            setUser({
              name: '',
              lastName: '',
              email: '',
              registrationDate: '',
            });
          }}
        >
          Add Customer
        </StyledButton>
      </StyledForm>
    </StyledBody>
  );
}
