import styled from 'styled-components'
import { white } from '@carbon/colors'

export const EducationItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const Institution = styled.h4`
  font-weight: bold;
  text-align: left;
`

export const Degree = styled.p`
  font-weight: bold;
  display: inline-block;
`
export const Year = styled.p`
  float: right;
  font-style: italic;
  
`