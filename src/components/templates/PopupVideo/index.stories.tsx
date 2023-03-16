import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import PopupVideo from '.';

import { imgLink, mp4Video, youtubeVideo } from 'assets/dataDummy/media';

export default {
  title: 'Components/templates/PopupVideo',
  component: PopupVideo,
  argTypes: {
    dataLink: {
      control: {
        type: 'select',
        options: [mp4Video, youtubeVideo]
      },
      defaultValue: mp4Video
    },
  }
} as Meta;

export const Normal: Story = ({ dataLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Toggle

      </button>
      <PopupVideo
        id={0}
        isOpen={isOpen}
        dataLink={dataLink}
        mediaThumb={imgLink}
        handleClose={() => setIsOpen(false)}
      />
    </div>
  );
};
