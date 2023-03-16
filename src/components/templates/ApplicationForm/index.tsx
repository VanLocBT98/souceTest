/* eslint-disable react/require-default-props */
import React, { useRef } from 'react';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Input from 'components/atoms/Input';
import Text from 'components/atoms/Text';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import mapModifiers from 'utils/functions';

export interface ApplicationFormType {
  name: string;
  email: string;
  phone: string;
  location: OptionType;
  introduction: string;
  file: File;
  company: string;
  position: number;
  experience: string;
}

interface ApplicationFormProps {
  title: string;
  method: UseFormReturn<ApplicationFormType>;
  submitForm: (data: ApplicationFormType) => void;
  locationDetail?: OptionType;
  btnText?: string;
  namePosition?: string;
  loading?: boolean;
}

interface FileInputProps {
  handleChangeUploadFile: (data: File) => void;
  fileName: string;
  title: string;
  description?: string;
  error?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  handleChangeUploadFile,
  fileName,
  description,
  title,
  error,
}) => {
  const uploadFileRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList && fileList?.length > 0) {
      return (
        handleChangeUploadFile
        && handleChangeUploadFile(fileList[0])
      );
    }

    return undefined;
  };

  return (
    <div className={mapModifiers('t-applicationForm_fileInput', error && 'error')}>
      <div className="t-applicationForm_fileInput_pending">
        <Text modifiers={['400', 'mayGreen', '12x16']}>
          {description}
        </Text>
      </div>
      <div className="t-applicationForm_fileInput_content">
        <div className="t-applicationForm_fileInput_fileName">
          <Text modifiers={['700', 'center', 'spanishGreen', 'underline', '16x24']}>{fileName}</Text>
        </div>
        <label htmlFor="fileUploaded" className="t-applicationForm_fileInput_label">
          <input
            className="t-applicationForm_fileInput_inputfile"
            onChange={onChange}
            id="fileUploaded"
            type="file"
            accept=".doc, .docx, .pdf"
            ref={uploadFileRef}
          />
          <Icon iconName="cloudUpload" size="14x14" />
          <Text modifiers={['400', 'raisinBlack', '14x22', 'center']}>
            {title}
          </Text>
        </label>
        {error && <span className="t-applicationForm_fileInput_errorMessage">{error}</span>}
      </div>
    </div>
  );
};

FileInput.defaultProps = {
  description: '',
  error: undefined,
};

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  title,
  method,
  submitForm,
  locationDetail,
  btnText,
  namePosition,
  loading,
}) => (
  <div className="t-applicationForm">
    <div className="t-applicationForm_content">
      <div className="t-applicationForm_title">
        <Heading modifiers={['600', '24x32', 'arsenic', 'center']}>{title}</Heading>
      </div>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(submitForm)} noValidate>
          <div className="t-applicationForm_inputGroup">
            <div className="t-applicationForm_inputGroup-field6">
              <Controller
                name="name"
                render={({
                    field,
                    fieldState: { error },
                  }) => (
                    <Input
                      id="name"
                      label="Họ và tên"
                      placeholder="Nhập họ và tên"
                      value={field.value}
                      error={error?.message}
                      handleChange={field.onChange}
                    />
                  )}
              />
            </div>
            <div className="t-applicationForm_inputGroup-field6">
              <Controller
                name="phone"
                render={({
                    field,
                    fieldState: { error },
                  }) => (
                    <Input
                      id="phone"
                      label="Số điện thoại"
                      placeholder="Nhập số điện thoại"
                      value={field.value}
                      error={error?.message}
                      handleChange={field.onChange}
                    />
                  )}
              />
            </div>
            <div className="t-applicationForm_inputGroup-field6">
              <Controller
                name="experience"
                render={({
                    field,
                    fieldState: { error },
                  }) => (
                    <Input
                      id="experience"
                      label="Kinh nghiệm làm việc"
                      placeholder="Nhập số năm kinh nghiệm làm việc"
                      type="number"
                      value={field.value}
                      error={error?.message}
                      handleChange={field.onChange}
                    />
                  )}
              />
            </div>
            <div className="t-applicationForm_inputGroup-field6">
              <Controller
                name="position"
                render={({
                    field,
                    fieldState: { error },
                  }) => (
                    <Input
                      id="position"
                      label="Chức vụ"
                      value={namePosition}
                      error={error?.message}
                      handleChange={field.onChange}
                      disabled
                    />
                  )}
              />
            </div>
            <div className="t-applicationForm_inputGroup-field6">
              <PullDown
                id="location"
                label="Địa điểm"
                optionData={[]}
                placeholder="Chọn địa điểm"
                value={locationDetail}
                isDisabled
              />
            </div>
            <div className="t-applicationForm_inputGroup-field6">
              <Controller
                name="email"
                render={({
                    field,
                    fieldState: { error },
                  }) => (
                    <Input
                      id="email"
                      label="Email"
                      placeholder="Nhập email"
                      value={field.value}
                      error={error?.message}
                      handleChange={field.onChange}
                    />
                  )}
              />
            </div>
            <div className="t-applicationForm_inputGroup-field12">
              <Controller
                name="company"
                render={({
                    field,
                    fieldState: { error },
                  }) => (
                    <Input
                      id="company"
                      label="Công ty làm gần nhất"
                      placeholder="Công ty làm gần nhất"
                      value={field.value}
                      error={error?.message}
                      handleChange={field.onChange}
                    />
                  )}
              />
            </div>
            <div className="t-applicationForm_inputGroup-field12">
              <Controller
                name="file"
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FileInput
                      description="File đính kèm (Vui lòng chọn file < 3mb, file pdf, doc, docx) *"
                      handleChangeUploadFile={onChange}
                      fileName={value?.name}
                      title="Chọn file từ máy tính"
                      error={error?.message}
                    />
                  )}
              />
            </div>
          </div>
          <div className="t-applicationForm_wrapButton">
            <div className="t-applicationForm_wrapButton-button">
              <Button isLoading={loading} type="submit">{btnText}</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  </div>
);

ApplicationForm.defaultProps = {
  btnText: 'Ứng tuyển',
  loading: undefined,
};

export default ApplicationForm;
