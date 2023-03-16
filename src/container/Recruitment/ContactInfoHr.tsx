/* eslint-disable react/no-unused-prop-types */
import React from 'react';

import { RecruitmentBlock } from './types';

import ContactInfoHr from 'components/templates/ContactInfoHr';

const ContactInfoHrContainer: React.FC<RecruitmentBlock> = ({
  email,
  phone,
  title,
  subTitle,
  labelEmail,
  labelPhone,
}) => (
  <div className="p-recruitment_contactHr">
    <ContactInfoHr
      titleQA={title}
      titleEmail={labelEmail}
      titlePhone={labelPhone}
      contentQA={subTitle}
      contentEmail={email}
      contentPhone={phone}
    />
  </div>
);

export default ContactInfoHrContainer;
