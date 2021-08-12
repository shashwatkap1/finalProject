import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Playlists from '../../containers/Playlists/Playlists';
import SpotifyWhite from '../../assets/images/spotify.png';
// Icons
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';
import { ReactComponent as HomeOutline } from '../../assets/icons/home-outline.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as SearchStrong } from '../../assets/icons/search-strong.svg';
import { ReactComponent as LibraryIcon } from '../../assets/icons/library.svg';
import { ReactComponent as LibraryStrongIcon } from '../../assets/icons/library-strong.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as HomeSolid } from '../../assets/icons/home-solid.svg';
// styles
import {
  SideContainer,
  SpotifyLogo,
  NavItemsContainer,
  Item,
  ItemText,
  ItemLink,
  LibraryContainer,
  IconSquare,
  SectionTitle,
  LibraryItem,
  ScrollContainer,
  PlaylistContainer,
  InstallItem,
} from './sidebarStyles';
import { useLocation } from 'react-router-dom';
import CreatePlaylist from '../CreatePlaylist/CreatePlaylist';
import AddTrack from '../AddTrackModal/AddTrack';
import { ModalsContext } from '../ModalsContext/ModalsContextContainer';
import { Typography } from '@material-ui/core';

const Sidebar = () => {
  const { pathname } = useLocation();
  const { createPlaylist } = useContext(ModalsContext);

  const isLibraryActive = [
    '/app/collection/playlists',
    '/app/collection/albums',
    '/app/collection/artists',
  ].includes(pathname);

  return (
    <SideContainer>
      {/* MODALS */}
      <AddTrack />
      <CreatePlaylist />

      <Link to='/app'>
        <Typography textAlign='center' variant='h3' style={{ color: '#fff' }}>
          RvceDj
        </Typography>
      </Link>
      <NavItemsContainer>
        <Item>
          <ItemLink
            to='/app/collection/playlists'
            isActive={() => isLibraryActive}>
            {isLibraryActive ? (
              <LibraryStrongIcon fill='#a8a8a8' width={23} height={23} />
            ) : (
              <LibraryIcon fill='#a8a8a8' width={23} height={23} />
            )}

            <ItemText>Your Library</ItemText>
          </ItemLink>
        </Item>
      </NavItemsContainer>

      <LibraryContainer>
        <SectionTitle>PLAYLISTS</SectionTitle>

        <LibraryItem gradient>
          <Item svgTransition={false}>
            <ItemLink to='/app/collection/tracks' padding={0} bgc='transparent'>
              <IconSquare gradient>
                <HeartIcon fill='#fff' width={16} height={16} />
              </IconSquare>
              <ItemText>Liked Songs</ItemText>
            </ItemLink>
          </Item>
        </LibraryItem>
      </LibraryContainer>
      <PlaylistContainer>
        <ScrollContainer>
          <Playlists />
        </ScrollContainer>
      </PlaylistContainer>
    </SideContainer>
  );
};

export default Sidebar;
