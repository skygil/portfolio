/* ************************************************************
  7/8/21 - Moved most styled components for 
            pages in this one file 
************************************************************  */
/* Import Statements */
import styled from 'styled-components';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { blue } from '@carbon/colors';
import { white } from '@carbon/colors'

/* Export Statements*/

/* Layout Component */
export const StyledContent = styled(Content)`
  min-height: 100vh;

  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ListItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
  `;

export const Heading1 = styled.h4`
  font-weight: bold;
`;

export const Heading2 = styled.p`
font-weight: bold;
display: inline-block;
`

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${blue[20]};
  color: ${blue[70]};
  border-radius: 2px;
  font-weight: bold;
`;

/* Used on Years, Locations, etc. */
  export const Emphasis = styled.p`
  float: right;
  font-style: italic;
  color: white;
`;

/*When used, link will show bright green with white text */
export const HoverLink = styled.a`
  align-items: center;
  margin-top: 1rem;
  transition: background-color 250ms ease;

  &:hover {
    background-color: #2ecc40;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;

export const SkillContainer = styled.li`
  margin-top: 1.5rem;
`;

/* Used on bottom of home page for social profiles */
export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`;

export const BulletList = styled.li`
padding-top: 1rem;
padding-left: 1rem;
padding-bottom: 1rem;
list-style-type: circle;
list-style-position: inside;
margin-left: 0.5%;
text-justify: auto
white-space: pre-wrap;
`