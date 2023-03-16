import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

interface SustainableDevelopmentMessageProps {
  title: string;
  content?: string;
}

const SustainableDevelopmentMessage: React.FC<SustainableDevelopmentMessageProps> = ({
  title,
  content,
}) => (
  <div className="t-sustainableDevelopmentMessage">
    <Container>
      <Heading modifiers={['32x48', 'center', 'white']} content={title} />
      <div className="t-sustainableDevelopmentMessage_desc">
        <Text type="div" modifiers={['400', '16x24', 'white']} content={content} />
      </div>
    </Container>
  </div>
);

SustainableDevelopmentMessage.defaultProps = {
  content: '',
};

export default SustainableDevelopmentMessage;
