import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import ContactUs, { FormContactUsProps } from '.';

import {
  blockForm, defaultValuesForm, optionServices, socialsContact
} from 'assets/dataDummy/contactUs';
import bgImg from 'assets/images/mask-group-contact.png';
import { OptionType } from 'components/molecules/PullDown';

export default {
  title: 'Components/templates/ContactUs',
  component: ContactUs,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const method = useForm<FormContactUsProps>({
    defaultValues: defaultValuesForm,
  });

  const handleSubmit = (data: FormContactUsProps) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <ContactUs
      title="Liên hệ"
      subTitle="NOVA SERVICE"
      labelCskh="CSKH: "
      labelEmail="Email"
      address="Tòa nhà văn phòng Novaland, 65 Nguyễn Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh"
      email="info@novaservice.com.vn"
      phoneNumber="1900 63 6666"
      backgroudImgSrc={bgImg}
      method={method}
      submitForm={handleSubmit}
      optionServices={optionServices}
      blockForm={blockForm}
      isActiveIntroduction
      socials={socialsContact}
      handleChangeFilter={(option: OptionType) => option}
    />
  );
};
