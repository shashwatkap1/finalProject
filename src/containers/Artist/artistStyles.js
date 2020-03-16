import styled from 'styled-components';
import { EllipsisTwoLines } from '../../components/Text/textStyles';
import { PlaylistPlay } from '../../components/Playlist/PlaylistComponentStyles';
import {
  UpgradeButton,
  UpgradeText
} from '../../components/Navbar/navbarStyles';

export const ArtistContainer = styled.div``;

export const ArtistBackground = styled.div`
  height: 600px;
  width: 100%;
  background-image: linear-gradient(${({ color }) => color}, #121212 300px);
  position: absolute;
  top: 0;
  opacity: 0.5;
`;

export const ArtistSubContainer = styled.div`
  position: relative;
  z-index: 100;
  padding: 2rem;
`;

export const ArtistHeader = styled.header``;

export const ArtistName = styled.h1`
  color: #fff;
  font-size: 3rem;
  line-height: 3.5rem;
  letter-spacing: -0.005rem;
  font-weight: 900;
  margin: 0;

  ${EllipsisTwoLines}
`;

export const ArtistButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 2rem;
`;

export const ArtistPlayButton = styled(PlaylistPlay)`
  margin-right: 1rem;
`;

export const ArtistFollowContainer = styled(UpgradeButton)`
  margin-right: 1rem;
`;

export const ArtitstFollowText = styled(UpgradeText)`
  color: ${({ color }) => color};
`;

export const ArtistMoreIconContainer = styled.div`
  padding: 0.5rem;
  cursor: pointer;
`;
