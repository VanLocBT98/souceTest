/* eslint-disable react/require-default-props */
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
// import { useTranslation } from 'react-i18next';

import { OptionType } from 'components/molecules/PullDown';
import ApplicationForm, {
  ApplicationFormType,
} from 'components/templates/ApplicationForm';
import { schemasApplicationForm } from 'utils/schemas';

interface ApplicationFormContainerProps {
  position?: {
    id: number;
    name: string;
  };
  location?: OptionType;
}

const ApplicationFormContainer: React.FC<ApplicationFormContainerProps> = ({
  position, location,
}) => {
  const recruitmentDetailMethod = useForm<ApplicationFormType>({
    resolver: yupResolver(schemasApplicationForm),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      phone: '',
      position: position?.id,
      experience: '',
      location,
      file: undefined,
      company: '',
      email: '',
    },
  });

  const handleSubmit = async (data: ApplicationFormType) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div className="p-recruitmentdetail_applicationForm">
      <ApplicationForm
        title="Ứng tuyển"
        method={recruitmentDetailMethod}
        submitForm={handleSubmit}
        btnText="Ứng tuyển"
      />
    </div>
  );
};

export default ApplicationFormContainer;
