import { yupResolver } from '@hookform/resolvers/yup';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import ApplicationForm, { ApplicationFormType } from '.';

import { schemasApplicationForm } from 'utils/schemas';

export default {
  title: 'Components/templates/ApplicationForm',
  component: ApplicationForm,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const method = useForm<ApplicationFormType>({
    resolver: yupResolver(schemasApplicationForm),
    mode: 'onSubmit',
  });

  const handleSubmit = (data: ApplicationFormType) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <ApplicationForm
      title="Ứng tuyển"
      method={method}
      submitForm={handleSubmit}
      btnText="Ứng tuyển"
    />
  );
};
