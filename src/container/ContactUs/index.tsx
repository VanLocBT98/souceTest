import { yupResolver } from '@hookform/resolvers/yup';
import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  blockForm2Dummy, blockIntroductionDummy, optionServices, title
} from 'assets/dataDummy/contactUs';
import bgImg from 'assets/images/mask-group-contact.png';
import { OptionType } from 'components/molecules/PullDown';
import NotifyModal from 'components/organisms/NotifyModal';
import ContactUs, { FormContactUsProps } from 'components/templates/ContactUs';

export type SocialsType = {
  icon: string;
  link: {
    url: string;
    text: string;
    target: string;
  };
};

export type BlocksContactUs = {
  cskh: string;
  email: string;
  items: SocialsType[];
  title: string;
  address: string;
  lableCskh: string;
  lableEmail: string;
  mainTitle: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderPhone: string;
  placeholderTitle: string;
  placeholderContent: string;
};

const defaultValues = {
  services: undefined,
  name: '',
  email: '',
  phone: '',
  title: '',
  content: '',
};

const ContactUsContainer: React.FC = () => {
  const [isSubmiting, setSubmiting] = useState(false);
  const [isNotify, setIsNotify] = useState<NotifyContact>({
    isOpen: false,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedValue, setSelectedValue] = useState<OptionType>();

  const blockIntroduction = blockIntroductionDummy;
  const blockForm = blockForm2Dummy;

  const { executeRecaptcha } = useGoogleReCaptcha();
  const optionServicesData = optionServices;

  const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  const contactUsSchema = yup.object({
    name: yup.string().required('general.full_name_required'),
    title: yup.string().required('general.title_required'),
    email: yup
      .string()
      .required('general.email_required')
      .email('general.invalid_email_required'),
    phone: yup
      .string()
      .required('general.phone_required')
      .matches(phoneRegExp, 'general.malformed_required'),
  });

  const method = useForm<FormContactUsProps>({
    resolver: yupResolver(contactUsSchema),
    defaultValues,
  });

  useEffect(() => {
    if (optionServicesData && optionServicesData.length > 0) {
      setSelectedValue(optionServicesData[0]);
    }
  }, [optionServicesData]);

  const handleChangeFilter = useCallback((option: OptionType) => {
    setSelectedValue(option);
  }, []);

  const handleSubmit = async (data: FormContactUsProps) => {
    try {
      if (!executeRecaptcha) return;
      setSubmiting(true);
      setIsNotify({
        isOpen: true,
        type: 'success',
        title: 'notify.sent_successfully',
        message: 'notify.thank_you',
      });
      method.reset();
    } catch (error) {
      setIsNotify({
        isOpen: true,
        type: 'error',
        title: 'notify.sent_failed',
        message: 'notify.please_check',
      });
    } finally {
      setSubmiting(false);
    }
    // eslint-disable-next-line no-console
    console.log('data :>> ', data);
  };

  return (
    <>
      <ContactUs
        title={title}
        subTitle={blockIntroduction?.title}
        address={blockIntroduction?.address}
        email={blockIntroduction?.email}
        phoneNumber={blockIntroduction?.cskh}
        backgroudImgSrc={bgImg}
        method={method}
        submitForm={handleSubmit}
        optionServices={optionServicesData}
        isSubmiting={isSubmiting}
        labelCskh={blockIntroduction?.lableCskh}
        labelEmail={blockIntroduction?.lableEmail}
        socials={blockIntroduction?.items}
        blockForm={blockForm || ''}
        handleChangeFilter={handleChangeFilter}
        isActiveIntroduction={!!blockIntroduction}
      />
      <NotifyModal
        isOpen={isNotify.isOpen}
        handleClose={() => setIsNotify({ isOpen: false, type: 'none' })}
        type={isNotify.type}
        title={isNotify.title}
        message={isNotify.message}
        btnText="notify.close"
      />
    </>
  );
};

export default ContactUsContainer;
