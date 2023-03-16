import imgSrc from 'assets/images/IntroduceSpecificBUInformation/image.png';
import React from 'react';

import IntroduceSpecificBUInformation from 'components/templates/IntroduceSpecificBuInformation';

const imagesData = [imgSrc, imgSrc];

const IntroduceSpecificBUInformationContainer: React.FC = () => (
  <div className="p-busDetails_introduceSpecificBUInformation">
    <IntroduceSpecificBUInformation
      title="NOVA  DREAM 2"
      description="Là đơn vị phát triển và vận hành các công ty giải trí như: Công viên chủ đề, công viên nước, khu vui chơi trong nhà, vườn thú,..theo tiêu chuẩn quốc tế."
      phoneNumber="19200000"
      email="contact@novaservice.com.vn"
      images={imagesData}
    />
  </div>
);

export default IntroduceSpecificBUInformationContainer;
