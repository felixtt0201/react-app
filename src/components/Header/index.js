import React from 'react';
import { Link } from 'react-router-dom';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLoglImg } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo"></LogoImg>
        </Link>
        <TMDBLoglImg src={TMDBLogo} alt="tmdb-logo"></TMDBLoglImg>
      </Content>
    </Wrapper>
  );
};

export default Header;
