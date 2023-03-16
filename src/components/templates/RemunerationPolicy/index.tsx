import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import { ItemBlock } from 'container/Recruitment/types';

export const RemunerationPolicyCard: React.FC<ItemBlock> = ({
  image, title, descriptoion,
}) => (
  <div className="t-remunerationPolicy_wrapper">
    <div className="t-remunerationPolicy_icon">
      <Image
        alt={title}
        src={image}
        ratio="1x1"
        size="contain"
      />
    </div>
    <div className="t-remunerationPolicy_heading">
      <Heading
        modifiers={['700', '16x24', 'arsenic', 'uppercase', 'center']}
      >
        {title}

      </Heading>
    </div>
    <div className="t-remunerationPolicy_content">
      <Text
        modifiers={['14x22', '400', 'taupeGray', 'center']}
        content={descriptoion}
      />
    </div>
  </div>
);

interface RemunerationPolicyProps {
  title: string;
  remunerationList: ItemBlock[];
}

const RemunerationPolicy: React.FC<RemunerationPolicyProps> = ({
  title, remunerationList,
}) => (
  <div className="t-remunerationPolicy">
    <Container>
      <Heading
        modifiers={['700', '32x48', 'arsenic', 'capitalize', 'center']}
      >
        {title}

      </Heading>
      <div className="t-remunerationPolicy_main">
        {remunerationList.map((item, index) => (
          <div
            className="t-remunerationPolicy_item"
            key={`_remuneration_${index.toString()}`}
          >
            <RemunerationPolicyCard
              {...item}
            />
          </div>
        ))}
      </div>
    </Container>
  </div>
);

RemunerationPolicy.defaultProps = {
};

export default RemunerationPolicy;
