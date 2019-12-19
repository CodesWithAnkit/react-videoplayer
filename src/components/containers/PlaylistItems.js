import React from 'react';
import PlaylistItem from '../PlaylistItem';
import withLinks from '../hoc/withLink';
import StyledPlaylistitems from '../styles/StyledPlaylistitems';

const PlaylistItemWithLinks = withLinks(PlaylistItem);

const Playlistitems = ({ videos, active }) => (
  <StyledPlaylistitems>
    {videos.map(video => (
      <PlaylistItemWithLinks
        key={video.id}
        video={video}
        active={video.id === active.id ? true : false}
        played={video.played}
      />
    ))}
  </StyledPlaylistitems>
);

export default Playlistitems;
