import React from 'react';

import Heading from 'components/atoms/Heading';
import InfoLeader, { InfoLeaderProps } from 'components/molecules/InfoLeader';
import Container from 'components/organisms/Container';

export interface TabType {
  id?: number;
  label: string;
  content: Array<InfoLeaderProps>;
}

export interface LeadershipProps {
  title: string;
  dataList: Array<TabType>;
  handleClick?: (value: InfoLeaderProps) => void;
}

const Leadership: React.FC<LeadershipProps> = ({
  title, dataList, handleClick,
}) => (
  <div className="t-leadership">
    <Container>
      <Heading
        type="h2"
        modifiers={['raisinBlack', '32x48', '700', 'center']}
      >
        {title}

      </Heading>
      <div className="t-leadership_content">
        {dataList.map((item, index) => (
          <div
            className="t-leadership_content_wrap"
            key={`leadership_mobile-${index.toString()}`}
          >
            <div className="t-leadership_content_leader">
              {item.content.filter(
                (itemFilter) => itemFilter.isLeader === 1 || item.content.length === 1,
              )
                .map((itemLeader, index2) => (
                  <InfoLeader
                    key={`leader-item-${index2.toString()}`}
                    imageSrc={itemLeader.imageSrc}
                    name={itemLeader.name}
                    position={itemLeader.position}
                    handleClick={() => handleClick && handleClick(itemLeader)}
                    gender={itemLeader.gender}
                  />
                ))}
            </div>
            <div className="t-leadership_content_employees">
              {item.content.filter(
                (itemFilter) => itemFilter.isLeader === 0 && item.content.length > 1,
              )
                .map((itemLeader, index2) => (
                  <div
                    className="t-leadership_content_employees_item"
                    key={`employees-item-${index2.toString()}`}
                  >
                    <InfoLeader
                      key={`employees-item-${index2.toString()}`}
                      imageSrc={itemLeader.imageSrc}
                      name={itemLeader.name}
                      position={itemLeader.position}
                      handleClick={() => handleClick && handleClick(itemLeader)}
                      gender={itemLeader.gender}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

Leadership.defaultProps = {
};

export default Leadership;
