import {React, Sidebar, UserHeader, MobileNav}  from './index';
import { StyledContent } from '../../styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;
