import { Story, Meta } from '@storybook/react';
import React from 'react';

import ThumbnailVideo from '.';

import { imgLink, youtubeVideo, mp4Video } from 'assets/dataDummy/media';

export default {
  title: 'Components/molecules/ThumbnailVideo',
  component: ThumbnailVideo,
  argTypes: {
    dataLink: {
      control: {
        type: 'select',
        options: [
          mp4Video,
          youtubeVideo
        ]
      },
      defaultValue: mp4Video,
    },
  },
} as Meta;

export const Normal: Story = ({ dataLink }) => (
  <div style={{ maxWidth: '600px', margin: '60px' }}>
    <ThumbnailVideo
      id={0}
      dataLink={dataLink}
      urlImg={imgLink}
    />
  </div>
);
