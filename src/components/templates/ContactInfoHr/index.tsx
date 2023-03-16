import React from 'react';

import Text from 'components/atoms/Text';
import Container, { CustomCol, CustomRow } from 'components/organisms/Container';

interface ContactInfoHRProps {
  titleQA: string;
  titleEmail: string;
  titlePhone: string;
  contentQA: string;
  contentEmail: string;
  contentPhone: string;
}

const ContactInfoHr: React.FC<ContactInfoHRProps> = ({
  titleQA,
  titleEmail,
  titlePhone,
  contentQA,
  contentEmail,
  contentPhone,
}) => (
  <div className="t-contactinfohr">
    <Container>
      <CustomRow>
        <CustomCol xs="12" sm="6" md="6" lg="5">
          <Text modifiers={['20x30', '400', 'davysGrey']}>{titleQA}</Text>
          <div className="t-contactinfohr_col_content">
            <Text modifiers={['24x32', '700', 'davysGrey']}>{contentQA}</Text>
          </div>
        </CustomCol>
        <CustomCol xs="12" sm="6" md="6" lg="4">
          <div className="t-contactinfohr_col_head">
            <Text modifiers={['16x24', '400', 'davysGrey']}>{titleEmail}</Text>
          </div>
          <div className="t-contactinfohr_col_content">
            <Text modifiers={['24x32', '600', 'davysGrey']}>{contentEmail}</Text>
          </div>
        </CustomCol>
        <CustomCol xs="12" sm="6" md="6" lg="3">
          <div className="t-contactinfohr_col_head">
            <Text modifiers={['16x24', '400', 'davysGrey']}>{titlePhone}</Text>
          </div>
          <div className="t-contactinfohr_col_content">
            <Text modifiers={['24x32', '600', 'davysGrey']}>{contentPhone}</Text>
          </div>
        </CustomCol>
      </CustomRow>
    </Container>
  </div>
);

ContactInfoHr.defaultProps = {
};

export default ContactInfoHr;
