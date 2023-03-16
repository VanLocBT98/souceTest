import React from 'react';

import Image from 'components/atoms/Image';
import VisionMission from 'components/molecules/VisionMission';
import Animate from 'components/organisms/Animate';
import Container, { CustomRow, CustomCol } from 'components/organisms/Container';

export interface DataVisionMissionValueType {
  imgSrc: string;
  title: string;
  content: string;
}

export interface VisionMissionValueProps {
  dataItem1?: DataVisionMissionValueType;
  dataItem2?: DataVisionMissionValueType;
  dataItem3?: DataVisionMissionValueType;
  imgRectangle: string;
}

const VisionMissionValue: React.FC<VisionMissionValueProps> = ({
  dataItem1,
  dataItem2,
  dataItem3,
  imgRectangle,
}) => (
  <Container>
    <div
      className="t-visionmissionvalue"
    >
      <div className="t-visionmissionvalue_rectangle">
        <Image
          ratio="45x53"
          src={imgRectangle}
          alt=""
        />
      </div>
      <div className="t-visionmissionvalue_wrap">
        <div className="t-visionmissionvalue_wrap-inside">
          <CustomRow>
            <CustomCol md="3" lg="3" xs="12" />
            <CustomCol md="4" lg="3" xs="12">
              <Animate
                type="fadeInRight"
              >
                <VisionMission
                  imgSrc={dataItem1?.imgSrc}
                  title={dataItem1?.title}
                  content={dataItem1?.content}
                />
              </Animate>
            </CustomCol>
            <CustomCol md="4" lg="3" xs="12">
              <Animate
                type="fadeInRight"
              >
                <VisionMission
                  imgSrc={dataItem2?.imgSrc}
                  title={dataItem2?.title}
                  content={dataItem2?.content}
                />
              </Animate>
            </CustomCol>
            <CustomCol md="4" lg="3" xs="12">
              <Animate
                type="fadeInRight"
              >
                <VisionMission
                  imgSrc={dataItem3?.imgSrc}
                  title={dataItem3?.title}
                  content={dataItem3?.content}
                />
              </Animate>
            </CustomCol>
          </CustomRow>
        </div>

      </div>
    </div>
  </Container>
);

export default VisionMissionValue;
