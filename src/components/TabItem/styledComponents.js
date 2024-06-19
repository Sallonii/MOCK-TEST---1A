import styled from 'styled-components'

export const TabButton = styled.li`
  background-color: ${props => (props.isActive ? '#db1c48' : 'white')};
  color: ${props => (props.isActive ? 'white' : '#db1c48')};
  padding: 5px;
  width: 80px;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 15px;
`
