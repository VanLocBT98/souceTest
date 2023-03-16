import React from 'react';

import SustainableDevelopmentMessage from 'components/templates/SustainableDevelopmentMessage';

export interface SustainableDevelopmentMessageContainerProps {
  title: string;
  content: string;
}

const SustainableDevelopmentMessageContainer:
  React.FC<SustainableDevelopmentMessageContainerProps> = (props) => (
    <div className="p-aboutUs_sustainableDevelopmentMessage">
      <SustainableDevelopmentMessage
        {...props}
      />
    </div>
  );

export default SustainableDevelopmentMessageContainer;
