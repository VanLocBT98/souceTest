import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import LazyLoad from 'react-lazyload';

import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Input from 'components/atoms/Input';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import { MenuItemDataTypes } from 'components/organisms/Header';
import { getImageURL } from 'utils/functions';
import { returnRouteMenu } from 'utils/menu';

export type FormContact = {
  name: string;
  email: string;
  phone: string;
};

type FormInfoField = {
  label?: string;
  placeholder?: string;
};

export interface InfoForm {
  buttonSubmit?: {
    text?: string;
  }
  email?: FormInfoField;
  fullName?: FormInfoField;
  phone?: FormInfoField;
}

export type SocialListTypes = {
  iconName?: string;
  url?: string;
  target?: string;
};

export interface FooterProps {
  imgSrc: string;
  contactData: {
    address: string;
    email: string;
    phone: string;
  }
  socialList?: SocialListTypes[];
  footerLink?: MenuItemDataTypes[];
  copyRight: {
    list: {
      title: string;
      url: string;
      target?: string;
    }[];
    text: string
  }
  infoForm?: InfoForm;
  handleSubmit: (data:FormContact) => void;
  method: UseFormReturn<FormContact>;
  loading?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  imgSrc,
  contactData,
  socialList,
  footerLink,
  copyRight,
  infoForm,
  method,
  handleSubmit,
  loading,
}) => (
  <div className="o-footer">
    <LazyLoad height={300} once>
      <div className="o-footer_main">
        <Container>
          <div className="o-footer_wrapper">
            <div className="o-footer_infoContainer">
              <div className="o-footer_infoContainer-img">
                <Image src={imgSrc} size="cover" ratio="148x97" alt="footer-logo" />
              </div>
              <div className="o-footer_infoContainer-contact">
                <Text modifiers={['white', '400', '16x24']} content={contactData.address} />
                <div className="o-footer_infoContainer-contactBox">
                  <Text type="span" modifiers={['white', '400', '16x24']} content={contactData.email} />
                </div>
                <div className="o-footer_infoContainer-contactBox">
                  <Text type="span" modifiers={['white', '400', '16x24']} content={contactData.phone} />
                </div>
                {socialList && socialList.length > 0 && (
                  <div className="o-footer_infoContainer-socialList">
                    {socialList.map((item, idx) => (
                      <div className="o-footer_infoContainer-socialList-item" key={`social-${idx.toString()}`}>
                        <Link href={item.url} target={item.target} useExternal>
                          <img src={getImageURL(item.iconName)} alt="icon" />
                        </Link>
                      </div>
                    ))}
                  </div>
                  )}
              </div>
              <FormProvider {...method}>
                <form onSubmit={method.handleSubmit(handleSubmit)} noValidate>
                  <div className="o-footer_infoContainer-form">
                    <Text modifiers={['20x30', '600', 'white']}>ĐĂNG KÝ NHẬN TIN</Text>
                    <div className="o-footer_infoContainer-form-group">
                      <div className="o-footer_infoContainer-form-field">
                        <Controller
                          name="name"
                          render={({ field, fieldState }) => (
                            <Input
                              {...field}
                              id="name"
                              placeholder={infoForm?.fullName?.placeholder}
                              label={infoForm?.fullName?.label}
                              handleChange={field.onChange}
                              error={fieldState?.error?.message}
                              modifiers="bg"
                              sizeModify="formBg"
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="o-footer_infoContainer-form-group">
                      <div className="o-footer_infoContainer-form-field">
                        <Controller
                          name="phone"
                          render={({ field, fieldState }) => (
                            <Input
                              {...field}
                              id="phone"
                              placeholder={infoForm?.phone?.placeholder}
                              label={infoForm?.phone?.label}
                              handleChange={field.onChange}
                              error={fieldState?.error?.message}
                              modifiers="bg"
                              sizeModify="formBg"
                            />
                          )}
                        />
                      </div>
                      <div className="o-footer_infoContainer-form-field">
                        <Controller
                          name="email"
                          render={({ field, fieldState }) => (
                            <Input
                              {...field}
                              id="email"
                              placeholder={infoForm?.email?.placeholder}
                              label={infoForm?.email?.label}
                              handleChange={field.onChange}
                              error={fieldState?.error?.message}
                              modifiers="bg"
                              sizeModify="formBg"
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="o-footer_infoContainer-form-btn">
                      <Button isLoading={loading} type="submit" modifiers="outline" className="formSubmit">
                        {infoForm?.buttonSubmit?.text}
                      </Button>
                    </div>
                  </div>
                </form>
              </FormProvider>
            </div>
            <div className="o-footer_linkList">
              <Row>
                {footerLink?.map((item, idx) => (
                  <Col sm={6} md={4} lg={2} key={`col-${idx.toString()}`}>
                    <div className="o-footer_linkList_item">
                      <Text modifiers={['white', '700', '16x24']}>
                        <Link href={returnRouteMenu(item)} target={item.target}>
                          {item.title}
                        </Link>
                      </Text>
                    </div>
                    {item.subMenu && (
                      <ul className="o-footer_linkList-list">
                        {item.subMenu.map((data, i) => (
                          <li className="o-footer_linkList-list-item" key={`${item.title}-${i.toString()}`}>
                            <Icon iconName="arrowRightWhite" size="16x16" />
                            <Link href={returnRouteMenu(data)} target={data.target}>
                              <Text modifiers={['columbiaBlue', '500']}>{data.title}</Text>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      )}
                  </Col>
                  ))}
              </Row>
            </div>
          </div>
        </Container>
        <div className="o-footer_copyRight">
          <Container>
            <div className="o-footer_copyRight-container">
              <div className="o-footer_copyRight-wrapper">
                {copyRight.list.map((item, idx) => (
                  <div className="o-footer_copyRight-item" key={`copyright-${idx.toString()}`}>
                    <Link href={item.url} target={item.target}>
                      <Text modifiers={['white', '700', '16x24']}>{item.title}</Text>
                    </Link>
                  </div>
                  ))}
              </div>
              <Text modifiers={['white', '400']} content={copyRight.text} />
            </div>
          </Container>
        </div>
      </div>
    </LazyLoad>
  </div>
  );

export default Footer;
