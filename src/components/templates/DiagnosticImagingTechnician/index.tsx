import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface DiagnosticImagingTechnicianProps {
  title?: string;
  description?: string;
  unitTitle?: string;
  unitText?: string;
  departmentTitle?: string;
  departmentText?: string;
  locationTitle?: string;
  locationText?: string;
  expirationDateTitle?: string;
  expirationDateText?: string;
  navigationToRecruitmentForm?: () => void;
}

const DiagnosticImagingTechnician: React.FC<DiagnosticImagingTechnicianProps> = (
  {
    title,
    description,
    unitTitle,
    unitText,
    departmentTitle,
    departmentText,
    locationTitle,
    locationText,
    expirationDateTitle,
    expirationDateText,
    navigationToRecruitmentForm,
  },
) => (
  <div className="t-diagnosticImagingTechnician">
    <Container>
      <div className="t-diagnosticImagingTechnician_main">
        <div className="t-diagnosticImagingTechnician_main_content">
          <Heading
            modifiers={['600', 'raisinBlack', 'left']}
            content={title}
          />
          <div className="t-diagnosticImagingTechnician_main_content_p1">
            <Text
              modifiers={['16x24', '400', 'davysGrey']}
              content={description}
            />
          </div>
          <Button modifiers="primary" onClick={navigationToRecruitmentForm}>
            Ứng tuyển
          </Button>
        </div>

        <div className="t-diagnosticImagingTechnician_side">
          <div className="t-diagnosticImagingTechnician_side_content">
            <Text modifiers={['14x22', '400', 'raisinBlack']} content={unitTitle} />
            <Text modifiers={['16x24', '700', 'mayGreen']} content={unitText} />

            <div className="t-diagnosticImagingTechnician_side_divider" />

            <Text modifiers={['14x22', '400', 'raisinBlack']} content={departmentTitle} />
            <Text modifiers={['16x24', '700', 'mayGreen']} content={departmentText} />

            <div className="t-diagnosticImagingTechnician_side_divider" />

            <Text modifiers={['14x22', '400', 'raisinBlack']} content={locationTitle} />
            <Text modifiers={['16x24', '700', 'mayGreen']} content={locationText} />

            <div className="t-diagnosticImagingTechnician_side_divider" />

            <Text modifiers={['14x22', '400', 'raisinBlack']} content={expirationDateTitle} />
            <Text modifiers={['16x24', '700', 'mayGreen']} content={expirationDateText} />
          </div>
        </div>
      </div>
    </Container>
  </div>
);

DiagnosticImagingTechnician.defaultProps = {
};

export default DiagnosticImagingTechnician;
