import React, { useEffect, useState } from 'react';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Input from 'components/atoms/Input';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import TextArea from 'components/atoms/TextArea';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import Container, { CustomCol, CustomRow } from 'components/organisms/Container';
import { getImageURL } from 'utils/functions';

export type SocialsType = {
  icon: string;
  link: {
    url: string;
    text: string;
    target: string;
  };
};

export type BlocksFormTypes = {
  mainTitle: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderPhone: string;
  placeholderTitle: string;
  placeholderContent: string;
};
export interface FormContactUsProps {
  services: OptionType;
  name: string;
  email: string;
  phone: string;
  title: string;
  content: string;
}

interface ContactUsProps {
  title: string;
  subTitle: string;
  address: string;
  email: string;
  labelEmail: string;
  phoneNumber: string;
  labelCskh: string;
  backgroudImgSrc: string;
  method: UseFormReturn<FormContactUsProps>;
  submitForm: (data: FormContactUsProps) => void;
  optionServices?: OptionType[];
  isSubmiting?: boolean;
  socials?: SocialsType[];
  blockForm?: BlocksFormTypes;
  handleChangeFilter?: (option: OptionType) => void;
  isActiveIntroduction?: boolean;
}

const ContactUs: React.FC<ContactUsProps> = ({
  title,
  subTitle,
  address,
  email,
  phoneNumber,
  backgroudImgSrc,
  method,
  submitForm,
  optionServices,
  isSubmiting,
  labelCskh,
  labelEmail,
  socials,
  blockForm,
  handleChangeFilter,
  isActiveIntroduction,
}) => {
  const [selectedValue, setSelectedValue] = useState<OptionType>();

  const { t } = useTranslation();

  const handleFilter = (option: OptionType) => {
    if (handleChangeFilter) {
      setSelectedValue(option);
      handleChangeFilter(option);
    }
  };

  useEffect(() => {
    if (optionServices && optionServices.length > 0) {
      setSelectedValue(optionServices[0]);
    }
  }, [optionServices]);

  return (
    <div
      className="t-contactus"
      style={{ backgroundImage: `url(${backgroudImgSrc})` }}
    >
      <Container>
        <Heading modifiers={['32x48', 'center']}>{title}</Heading>
        <div className="t-contactus_wrapcontent">
          <CustomRow>
            {
              blockForm && (
                <CustomCol sm="12" md="12" lg="8">
                  <FormProvider {...method}>
                    <form
                      onSubmit={method.handleSubmit(submitForm)}
                      noValidate
                    >
                      <div className="t-contactus_wrapform">
                        <div className="t-contactus_formfield">
                          <CustomRow>
                            {optionServices && (
                              <CustomCol sm="12" md="12" lg="6">
                                <PullDown
                                  optionData={optionServices}
                                  placeholder={blockForm?.mainTitle || ''}
                                  value={selectedValue}
                                  handleSelect={handleFilter}
                                />
                              </CustomCol>
                            )}

                            <CustomCol sm="12" md="12" lg="6">
                              <Controller
                                name="name"
                                render={({
                                  field: { value, ref, onChange },
                                  fieldState: { error },
                                }) => (
                                  <Input
                                    ref={ref}
                                    id="name"
                                    placeholder={blockForm?.placeholderName || ''}
                                    error={error?.message}
                                    value={value}
                                    handleChange={onChange}
                                    sizeModify="contact"
                                  />
                                )}
                              />
                            </CustomCol>
                          </CustomRow>
                        </div>
                        <div className="t-contactus_formfield">
                          <CustomRow>
                            <CustomCol sm="12" md="12" lg="6">
                              <Controller
                                name="email"
                                render={({
                                  field: { value, ref, onChange },
                                  fieldState: { error },
                                }) => (
                                  <Input
                                    ref={ref}
                                    id="email"
                                    placeholder={blockForm?.placeholderEmail || ''}
                                    error={error?.message}
                                    value={value}
                                    handleChange={onChange}
                                    sizeModify="contact"
                                  />
                                )}
                              />
                            </CustomCol>
                            <CustomCol sm="12" md="12" lg="6">
                              <Controller
                                name="phone"
                                render={({
                                  field: { value, ref, onChange },
                                  fieldState: { error },
                                }) => (
                                  <Input
                                    ref={ref}
                                    id="phone"
                                    placeholder={blockForm?.placeholderPhone || ''}
                                    error={error?.message}
                                    value={value}
                                    handleChange={onChange}
                                    sizeModify="contact"
                                  />
                                )}
                              />
                            </CustomCol>
                          </CustomRow>
                        </div>
                        <div className="t-contactus_formfield">
                          <Controller
                            name="title"
                            render={({
                              field: { value, ref, onChange },
                              fieldState: { error },
                            }) => (
                              <Input
                                ref={ref}
                                id="title"
                                placeholder={blockForm?.placeholderTitle || ''}
                                error={error?.message}
                                value={value}
                                handleChange={onChange}
                                sizeModify="contact"
                              />
                            )}
                          />
                        </div>
                        <div className="t-contactus_formfield">
                          <Controller
                            name="content"
                            render={({
                              field: { value, ref, onChange },
                              fieldState: { error },
                            }) => (
                              <TextArea
                                id="content"
                                ref={ref}
                                rows={4}
                                placeholder={blockForm?.placeholderContent || ''}
                                error={error?.message}
                                value={value}
                                handleChange={onChange}
                              />
                            )}
                          />
                        </div>
                        <div className="t-contactus_button">
                          <Button
                            type="submit"
                            isLoading={isSubmiting}
                          >
                            {t('contact.cf_submit_btn')}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </FormProvider>
                </CustomCol>
              )
            }
            {
              isActiveIntroduction && (
                <CustomCol sm="12" md="12" lg="4">
                  <div className="t-contactus_infomation">
                    <Text modifiers={['24x32', '600', 'arsenic', 'uppercase']}>
                      {subTitle}
                    </Text>
                    <div className="t-contactus_address">
                      <Text
                        modifiers={['16x24', 'arsenic']}
                        content={address}
                      />
                    </div>
                    <div className="t-contactus_email">
                      <Text modifiers={['16x24', 'arsenic']}>
                        {labelEmail}
                        :&nbsp;
                      </Text>
                      <Text modifiers={['16x24', '600', 'arsenic']}>
                        {email}
                      </Text>
                    </div>
                    <div className="t-contactus_phone">
                      <Text modifiers={['16x24', 'arsenic']}>
                        {labelCskh}
                        :&nbsp;
                      </Text>
                      <Text modifiers={['16x24', '600', 'arsenic']}>
                        {phoneNumber}
                      </Text>
                    </div>
                    <div className="t-contactus_social">
                      {
                        socials?.map((item, index) => (
                          <div
                            className="t-contactus_social_item"
                            key={`t-contactus_social_item-${index.toString()}`}
                          >
                            <Link
                              href={item.link.url}
                              target={item.link.target}
                              useExternal
                            >
                              <Image
                                alt={item.link.text}
                                src={getImageURL(item.icon)}
                                ratio="1x1"
                              />
                            </Link>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </CustomCol>
              )
            }
          </CustomRow>
        </div>
      </Container>
    </div>
  );
};

ContactUs.defaultProps = {
  optionServices: undefined,
};

export default ContactUs;
