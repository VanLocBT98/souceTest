import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import LeaderDetailsModal from '.';

import { imgLink } from 'assets/dataDummy/media';

export default {
  title: 'Components/templates/LeaderDetailsModal',
  component: LeaderDetailsModal,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
      >
        open

      </button>
      <LeaderDetailsModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        imageSrc={imgLink}
        name="Ông Nguyễn Thái Phiên"
        position="Phó Tổng Giám đốc Đầu tư và Tài chính"
        gender="Ông"
        description=""
      />
    </>
  );
};
