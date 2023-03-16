import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface VisionMissionValueFullBlockProps {
  title: string;
  content: string;
  imgSrc: string;
}

const VisionMissionValueBlock: React.FC<VisionMissionValueFullBlockProps> = ({
  title,
  content,
  imgSrc,
}) => (
  <>
    <div className="t-VMV_icon">
      <Image src={imgSrc} alt="" ratio="1x1" size="contain" />
    </div>
    <div className="t-VMV_content">
      <div className="t-VMV_title">
        <Heading modifiers={['600', 'raisinBlack']}>{title}</Heading>
      </div>
      <div className="t-VMV_desc">
        <Text modifiers={['400', 'davysGrey', '16x24', 'justify']} content={content} />
      </div>
    </div>
  </>
);

interface VisionMissionValueFullProps {
  dataList: VisionMissionValueFullBlockProps[];
}

const VisionMissionValueFull: React.FC<VisionMissionValueFullProps> = ({ dataList }) => (
  <div className="t-VMV">
    <Container>
      <div className="t-VMV_wrapper">
        {dataList.length > 0 && dataList?.map((item, idx) => (
          <div key={`VMV-item-${idx.toString()}`} className="t-VMV_block" style={{ zIndex: dataList.length - idx }}>
            <VisionMissionValueBlock {...item} />
          </div>
        ))}
      </div>
    </Container>
  </div>
);

VisionMissionValueFull.defaultProps = {
};

export default VisionMissionValueFull;
