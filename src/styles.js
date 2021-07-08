/* ************************************************************
  7/8/21 - Moved most styled components for 
            pages in this one file 
************************************************************  */
/* Import Statements */
import styled from 'styled-components';
import { Content,SideNav } from 'carbon-components-react/lib/components/UIShell';
import { blue } from '@carbon/colors';
import { white } from '@carbon/colors'
import { Link } from 'react-router-dom';
import Button from 'carbon-components-react/lib/components/Button';

/* Export Statements*/

/* ****** COMPONENTS ******  */

/* Layout Component */
export const StyledContent = styled(Content)`
  min-height: 100vh;

  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`
/* Mobile Navigator */
export const Container = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

export const Spacer = styled.div`
  height: 48px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const NavLink = styled(Link)`
  width: 25%;
`;

export const NavButton = styled(Button)`
  width: 100%;
  justify-content: center;
`;

/* Side Bar */
export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`
/* Header */
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
`;

export const ViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;

  &:hover {
    background-color: #2ecc40;
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`;


/* ****** PAGES ******  */
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