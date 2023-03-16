import React from 'react';

import AwardListContainer from './awardListContainer';
import CorporateCultureContainer from './corporateCultureContainer';
import DevelopmentHistoryContainer from './developmentHistoryContainer';
import IntroContainer from './introContainer';
import LeaderShipContainer from './leaderShipContainer';
import PartnerListContainer from './partnerListContainer';
import SustainableDevelopmentMessageContainer from './sustainableDevelopmentMessageContainer';
import VisionMissionValueContainer from './visionMissionValueContainer';

import {
  awardBlock,
  awardListData,
  corporateCultureBlock,
  historyBlock,
  historyData,
  imagesPartnerData,
  introDataBlock,
  leaderDataBlock,
  partnerBlock,
  sustainableDevelopmentBlock,
  visionMissionValueDataBlock
} from 'assets/dataDummy/aboutUs';

interface IntroDataBlock {
  title: string;
  image1: string;
  image2: string;
  descriptoion: string;
}

interface VisionMissionValueDataBlock {
  image: string;
  item1: {
    image: string;
    title: string;
    descriptoion: string;
  };
  item2: {
    image: string;
    title: string;
    descriptoion: string;
  };
  item3: {
    image: string;
    title: string;
    descriptoion: string;
  };
}
interface LeaderDataBlock {
  title: string;
  descriptoion: string;
}

interface CorporateCultureBlock {
  title: string;
  descriptoion: string;
  image: string;
  link: {
    url: string;
    text: string;
    target: string;
  };
}

interface SustainableDevelopmentBlock {
  title: string;
  descriptoion: string;
}

interface PartnerBlock {
  title: string;
  images: Array<string>;
  descriptoion: string;
}

interface AwardBlock {
  title: string;
  images: Array<string>;
  items: {
    prizeLogo: string;
    prizeName?: string;
    logoCompany: string;
  }[];
}

interface HistoryBlock {
  description: string;
  title: string;
  items: {
    description: string;
    image: string;
    year: string;
  }[];
}

export type AboutUsBlock =
  | IntroDataBlock
  | VisionMissionValueDataBlock
  | LeaderDataBlock
  | CorporateCultureBlock
  | SustainableDevelopmentBlock
  | PartnerBlock
  | AwardBlock
  | HistoryBlock;

const AboutUSContainer: React.FC = () => {
  const blockIntro = introDataBlock;
  const blockVisionMissionValue = visionMissionValueDataBlock;
  const blockLeader = leaderDataBlock;
  const blockCorporateCulture = corporateCultureBlock;
  const blockSustainableDevelopment = sustainableDevelopmentBlock;
  const blockPartner = partnerBlock;
  const blockAward = awardBlock;
  const blockHistory = historyBlock;

  return (
    <>
      {blockIntro && (
        <section>
          <IntroContainer
            title={blockIntro?.title}
            desc={blockIntro?.description}
            imageSrcMain={blockIntro?.image1}
            imageSrcSub={blockIntro?.image2}
          />
        </section>
      )}
      {blockVisionMissionValue && (
        <VisionMissionValueContainer
          imgRectangle={blockVisionMissionValue?.image}
          dataItem1={{
            imgSrc: blockVisionMissionValue?.item1.image,
            title: blockVisionMissionValue?.item1.title,
            content: blockVisionMissionValue?.item1.descriptoion,
          }}
          dataItem2={{
            imgSrc: blockVisionMissionValue?.item2.image,
            title: blockVisionMissionValue?.item2.title,
            content: blockVisionMissionValue?.item2.descriptoion,
          }}
          dataItem3={{
            imgSrc: blockVisionMissionValue?.item3.image,
            title: blockVisionMissionValue?.item3.title,
            content: blockVisionMissionValue?.item3.descriptoion,
          }}
        />
      )}
      {blockHistory && (
        <section>
          <DevelopmentHistoryContainer
            title={blockHistory?.title}
            descMain={blockHistory?.description}
            developmentHistoryList={historyData || {}}
          />
        </section>
      )}
      {blockLeader && (
        <section>
          <LeaderShipContainer title={blockLeader?.title} />
        </section>
      )}
      {blockSustainableDevelopment && (
        <section>
          <SustainableDevelopmentMessageContainer
            title={blockSustainableDevelopment?.title}
            content={blockSustainableDevelopment?.descriptoion}
          />
        </section>
      )}
      {blockCorporateCulture && (
        <section>
          <CorporateCultureContainer
            title={blockCorporateCulture?.title}
            desc={blockCorporateCulture?.descriptoion}
            imgSrc={blockCorporateCulture?.image}
            btnText={blockCorporateCulture?.link.text}
            href={blockCorporateCulture?.link.url || ''}
            target={blockCorporateCulture?.link.target || ''}
          />
        </section>
      )}
      {blockPartner && (
        <section>
          <PartnerListContainer
            title={blockPartner?.title}
            dataList={imagesPartnerData}
            desc={blockPartner?.descriptoion}
          />
        </section>
      )}
      {blockAward && (
        <section>
          <AwardListContainer {...awardListData} />
        </section>
      )}
    </>
  );
};

export default AboutUSContainer;
