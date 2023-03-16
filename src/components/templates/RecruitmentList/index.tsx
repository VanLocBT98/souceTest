import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import Container, { CustomCol, CustomRow } from 'components/organisms/Container';
import { NoData, TableCell, TableRow } from 'components/organisms/Table';

export interface RecruitmentListItem {
  position: string;
  applicationCode: string;
  affiliatedUnits: string;
  department: string;
  location: string;
  expDate: string;
  url?: string;
  quantity?: number;
}

export interface RecruitmentListHeader {
  id: number;
  value: string;
  align?: TextStyle;
}

export interface PlaceholderCareerOpportunities {
  placeholderCity: string;
  titleTableCity: string;
  titleTableUnit: string;
  placeholderPosition: string;
  titleTablePosition: string;
  placeholderDepartment: string;
  titleTableApplyCode: string;
  titleTableDepartment: string;
  titleTableExpirationDate: string;
}

interface RecruitmentListProps {
  title: string;
  positionOptions: OptionType[];
  departmentOptions: OptionType[];
  locationOptions: OptionType[];
  dataRecruitmentList: RecruitmentListItem[];
  dataRecruitmentListHeader: RecruitmentListHeader[];
  handleClickFilter: (
    positionValue?: OptionType,
    departmentValue?: OptionType,
    locationValue?: OptionType
  ) => void;
  page?: number;
  totalPage?: number;
  // eslint-disable-next-line react/no-unused-prop-types
  loading?: boolean;
  handleShowMore?: () => void;
  loadingShowMore?: boolean;
  loadingCareerOpportunityList?: boolean;
  placeholderCareerOpportunities?: PlaceholderCareerOpportunities;
}

const RecruitmentList: React.FC<RecruitmentListProps> = ({
  title,
  positionOptions,
  departmentOptions,
  locationOptions,
  dataRecruitmentList,
  dataRecruitmentListHeader,
  handleClickFilter,
  page = 0,
  totalPage = 0,
  handleShowMore,
  loadingShowMore,
  loadingCareerOpportunityList,
  placeholderCareerOpportunities,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [positionValue, setPositionValue] = useState<OptionType>();
  const [departmentValue, setDepartmentValue] = useState<OptionType>();
  const [locationValue, setLocationValue] = useState<OptionType>();

  const handleNavigationLink = (url?: string) => {
    if (url) {
      navigate(url);
    }
  };

  return (
    <div className="t-recruitmentList">
      <Heading
        modifiers={['32x48', 'raisinBlack', '700', 'center', 'uppercase']}
        content={title}
      />
      <div className="t-recruitmentList_filter">
        <Container>
          <div className="t-recruitmentList_filter_wrapper">
            <CustomRow>
              <CustomCol sm="12" md="3" lg="3">
                <div className="t-recruitmentList_filter_item">
                  <PullDown
                    name={placeholderCareerOpportunities?.placeholderPosition || ''}
                    value={positionValue}
                    handleSelect={(value) => setPositionValue(value)}
                    optionData={positionOptions}
                    placeholder={placeholderCareerOpportunities?.placeholderPosition || ''}
                  />
                </div>
              </CustomCol>
              <CustomCol sm="12" md="3" lg="3">
                <div className="t-recruitmentList_filter_item">
                  <PullDown
                    name={placeholderCareerOpportunities?.placeholderDepartment || ''}
                    value={departmentValue}
                    handleSelect={(value) => setDepartmentValue(value)}
                    optionData={departmentOptions}
                    placeholder={placeholderCareerOpportunities?.placeholderDepartment || ''}
                  />
                </div>
              </CustomCol>
              <CustomCol sm="12" md="3" lg="3">
                <div className="t-recruitmentList_filter_item">
                  <PullDown
                    name={placeholderCareerOpportunities?.placeholderCity || ''}
                    value={locationValue}
                    handleSelect={(value) => setLocationValue(value)}
                    optionData={locationOptions}
                    placeholder={placeholderCareerOpportunities?.placeholderCity || ''}
                  />
                </div>
              </CustomCol>
              <CustomCol sm="12" md="3" lg="3">
                <div className="t-recruitmentList_filter_item">
                  <Button
                    modifiers="primary"
                    onClick={() => handleClickFilter(positionValue, departmentValue, locationValue)}
                  >
                    <>
                      {t('recruitment.search_btn')}
                    </>
                  </Button>
                </div>
              </CustomCol>
            </CustomRow>
          </div>
        </Container>
      </div>
      <div className="t-recruitmentList_tableWrapper">
        <Container>
          <div className="t-recruitmentList_wrapper">
            <div className="t-recruitmentList_table">
              <table className="t-recruitmentList_wrap">
                <thead className="t-recruitmentList_header">
                  <tr className="t-recruitmentList_header_row">
                    {dataRecruitmentListHeader.map((item, index) => (
                      <th
                        className="t-recruitmentList_header_cell"
                        key={`tableHeader-${index.toString()}`}
                      >
                        <Text
                          modifiers={['16x24', '700', 'mayGreen', item.align || 'left']}
                          content={item.value}
                        />
                      </th>
                    ))}
                  </tr>
                </thead>
                <div className="t-recruitmentList_hide" />
                {loadingCareerOpportunityList ? (
                  <TableRow>
                    <TableCell colSpan={12}>
                      <Loading isShow />
                    </TableCell>
                  </TableRow>
                ) : (
                  // eslint-disable-next-line react/jsx-no-useless-fragment
                  <>
                    {
                      dataRecruitmentList.length > 0 ? (
                        <tbody>
                          {dataRecruitmentList.map((e, i) => (
                            <Fragment key={`tableBody-${i.toString()}`}>
                              <tr
                                className="t-recruitmentList_body_row"
                                key={`tableBody-${i.toString()}`}
                                onClick={() => handleNavigationLink(e.url)}
                              >
                                <td className="t-recruitmentList_body_cell">
                                  <Text
                                    modifiers={['16x24', '700', 'raisinBlack']}
                                    content={e.position}
                                  />
                                </td>
                                <td className="t-recruitmentList_body_cell">
                                  <Text
                                    modifiers={['400', 'raisinBlack']}
                                    content={e.applicationCode}
                                  />
                                </td>
                                <td className="t-recruitmentList_body_cell">
                                  <Text
                                    modifiers={['400', 'raisinBlack', 'center']}
                                    content={(e.quantity)?.toString()}
                                  />
                                </td>
                                <td className="t-recruitmentList_body_cell">
                                  <Text
                                    modifiers={['400', 'raisinBlack']}
                                    content={e.affiliatedUnits}
                                  />
                                </td>
                                <td className="t-recruitmentList_body_cell">
                                  <Text
                                    modifiers={['400', 'raisinBlack']}
                                    content={e.department}
                                  />
                                </td>
                                <td className="t-recruitmentList_body_cell">
                                  <Text
                                    modifiers={['400', 'raisinBlack']}
                                    content={e.location}
                                  />
                                </td>
                                <td className="t-recruitmentList_body_cell">
                                  <Text
                                    modifiers={['400', 'raisinBlack']}
                                    content={e.expDate}
                                  />
                                </td>
                              </tr>
                              <tr className="t-recruitmentList_body_hide" />
                            </Fragment>
                          ))}
                        </tbody>
                      ) : <NoData />
                    }
                  </>
                )}
              </table>
            </div>
          </div>
        </Container>
      </div>
      {!loadingCareerOpportunityList && totalPage > 1 && (
        <div className="t-recruitmentList_more">
          <Button
            modifiers="primary"
            onClick={handleShowMore}
            isLoading={loadingShowMore}
          >
            {totalPage > page ? t('general.see_more_btn') : t('general.compact_btn')}

          </Button>
        </div>
      )}
    </div>
  );
};

RecruitmentList.defaultProps = {
  page: 0,
  totalPage: 0,
  loading: false,
  handleShowMore: undefined,
};

export default RecruitmentList;
