import styled from 'styled-components'
import { white } from '@carbon/colors'

export const ProjectItem = styled.li`
  // //margin-top: 1rem;
  // //padding-bottom: 1rem;
  // //border-bottom: 1px solid ${white};
  // //border-bottom-color: #2ecc40;
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
`

export const SkillContainer = styled.li`
  margin-top: 1.5rem;
`
export const ViewProject = styled.a`
  // // align-items: center;
  // // margin-top: 1rem;
  //// transition: background-color 250ms ease;

  ////&:hover {
    ////  background-color: #2ecc40;
    //// }

    //// svg {
      ////   fill: white;
      ////  margin-left: 8px;
      //// }
`;

export const ProjectDesc = styled.li`
padding-top: 1rem;
padding-left: 1rem;
padding-bottom: 1rem;
list-style-type: square;
list-style-position: inside;
margin-left: 0.5%;
text-justify: auto
`

export const Image = styled.img`
  width: 22px;
  float: right;
  margin-right: 1rem;
  border-radius: 2px;
  &:hover {
    background-color: #2ecc40;
  }
`;