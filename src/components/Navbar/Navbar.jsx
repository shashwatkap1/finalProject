import React, { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import { useSelector } from 'react-redux';
import {
  NavContainer,
  NavRightWrapper,
  NavLeftWrapper,
  UpgradeButton,
  Avatar,
  UpgradeText,
  Name,
  ArrowDownIconContainer,
  NavSubcontainer,
  ArrowsContainer,
  ArrowIconContainer,
  UserContainer,
} from './navbarStyles';
import { ReactComponent as ArrowDown } from '../../assets/icons/down-arrow.svg';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { useLocation, useHistory } from 'react-router-dom';
import NavbarProfileMenu from './NavbarProfileMenu';
import LibraryMenu from '../LibraryMenu/LibraryMenu';

const Navbar = () => {
  const { images, display_name } = useSelector(({ auth }) => auth.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <NavContainer>
      <NavSubcontainer>
        <NavRightWrapper>
          <UserContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {images && <Avatar src={images[0]?.url} />}
            <Name>{display_name}</Name>
          </UserContainer>
        </NavRightWrapper>
      </NavSubcontainer>
    </NavContainer>
  );
};

export default Navbar;
