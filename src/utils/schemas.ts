import * as yup from 'yup';

export const SIZE_3MB_DEFAULT = 3 * 1024 * 1024;
export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const SUPPORTED_FORMATS = [
  'application/doc',
  'application/msword',
  'application/ms-doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/pdf',
];

const schemaSearchForm = yup.object({
  search: yup.string(),
});

export default schemaSearchForm;
export const schemasApplicationForm = yup.object({
  name: yup.string().required('Vui lòng nhập họ và tên'),
  phone: yup.string().required('Vui lòng nhập số điện thoại').matches(phoneRegExp, 'Không đúng định dạng'),
  email: yup.string().required('Vui lòng nhập địa chỉ Email').email('Email không hợp lệ'),
  location: yup.object().required('Vui lòng nhập địa điểm'),
  experience: yup.string().required('Vui lòng nhập kinh nghiệm'),
  company: yup.string().required('Vui lòng nhập công ty làm gần nhất'),
  position: yup.string().required('Vui lòng nhập chức vụ'),
  file: yup
    .mixed()
    .test('file', 'Vui lòng chọn file', (file) => {
      if (!file) return false;
      return true;
    })
    .test('file', 'File không đúng format', (file) => {
      if (!file) return true;
      return SUPPORTED_FORMATS.includes(file.type);
    })
    .test('file', 'File phải nhỏ hơn 3MB', (file) => {
      if (!file) return true;
      return file.size <= SIZE_3MB_DEFAULT;
    }),
});
