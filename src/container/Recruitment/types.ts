export type ItemBlock = {
  image: string;
  title: string;
  descriptoion: string;
};

export type RecruitmentBlock = {
  title: string;
  placeholderCity: string;
  titleTableCity: string;
  titleTableUnit: string;
  placeholderPosition: string;
  titleTablePosition: string;
  placeholderDepartment: string;
  titleTableApplyCode: string;
  titleTableDepartment: string;
  titleTableExpirationDate: string;
  descriptoion: string;
  items: ItemBlock[];
  email: string;
  phone: string;
  subTitle: string;
  labelEmail: string;
  labelPhone: string;
};
