import React, { ChangeEvent, KeyboardEvent } from 'react';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Heading from 'components/atoms/Heading';
import Input from 'components/atoms/Input';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Pagination from 'components/molecules/Pagination';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import Container from 'components/organisms/Container';
import NewsCard, { NewsCardProps } from 'components/organisms/NewsCard';
import { Tab, Tabs } from 'components/organisms/Tabs';

export interface SearchForm {
  search: string;
}

export interface SearchResultProps {
  method: UseFormReturn<SearchForm>;
  submitForm: (data: SearchForm) => void;
  handleChangeSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  onPressEnterSearch?: (e: KeyboardEvent<HTMLInputElement>) => void;
  searchText: string;
  activeFilterIndex: number;
  newsList?: NewsCardProps[];
  title: string;
  filterData: {
    id: string;
    slug: string;
    label: string;
  }[];
  setActiveFilterIndex: (idx: number) => void;
  totalPage?: number;
  page?: number;
  isLoading?: boolean;
  handleShowMore?: () => void;
  optionServices?: OptionType[];
  handleChangeFilter?: (option: OptionType) => void;
  selectedValue?: OptionType;
  handleDownloadFile?: (id: number) => void;
  handleChangePage?: (page: number) => void;
  placeholderSearch?: string;
}

const SearchResult: React.FC<SearchResultProps> = ({
  method,
  submitForm,
  activeFilterIndex,
  searchText,
  filterData,
  setActiveFilterIndex,
  newsList,
  title,
  totalPage,
  isLoading,
  page,
  optionServices,
  handleChangeFilter,
  selectedValue,
  handleDownloadFile,
  handleChangePage,
  placeholderSearch,
}) => {
  const { t } = useTranslation();
  return (
    <div className="t-searchResult">
      <Container>
        <div className="t-searchResult_heading">
          <Heading
            modifiers={['arsenic', '700', '32x48', 'center']}
            content={title}
          />
        </div>
        <div className="t-searchResult_searchInput">
          <FormProvider {...method}>
            <form onSubmit={method.handleSubmit(submitForm)} noValidate>
              <div className="t-searchResult_searchInputGroup">
                <Controller
                  name="search"
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      {...field}
                      autoComplete="off"
                      id="search"
                      isSearch
                      handleChange={field.onChange}
                      placeholder={placeholderSearch || t('search.enter_search_keywords')}
                      error={error?.message}
                    />
                  )}
                  defaultValue=""
                />
              </div>
            </form>
          </FormProvider>
        </div>
        <div className="t-searchResult_amount">
          <Text
            type="span"
            modifiers={['black', '500', '14x22']}
            content={`${newsList?.length} ` || ''}
          />
          <Text
            type="span"
            modifiers={['black', '400', '14x22']}
            content={t('search.results_found_for')}
          />
          <Text
            type="span"
            modifiers={['black', '500', '14x22']}
          >
            {' '}
            {searchText}
          </Text>
        </div>
        <div className="t-searchResult_wrapTabs">
          <div className="t-searchResult_tab">
            <Tabs variableMutate={activeFilterIndex}>
              {filterData.map((item, index) => (
                <Tab
                  key={`tab-${index.toString()}`}
                  label={item.label}
                  active={index === activeFilterIndex}
                  handleClick={() => setActiveFilterIndex(index)}
                />
              ))}
            </Tabs>
          </div>
          <div className="t-searchResult_filter">
            {optionServices && (
              <PullDown
                optionData={optionServices}
                placeholder={t('search.sort_results')}
                value={selectedValue}
                handleSelect={handleChangeFilter}
              />
            )}
          </div>
        </div>
        <div className="t-searchResult_list">
          {isLoading ? (
            <div className="t-searchResult_list_loading">
              <Loading isShow />
            </div>
          ) : (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {newsList && newsList?.length > 0 ? (
                newsList.map((item, idx) => (
                  <div
                    className="t-searchResult_list-item"
                    key={`key-${idx.toString()}`}
                  >
                    <NewsCard
                      {...item}
                      handleDownloadFile={handleDownloadFile}
                    />
                  </div>
                ))
              ) : (
                <div className="u-mt-24 u-mb-24 t-searchResult_list_nodata">
                  <Text modifiers={['center', '20x30']}><>{t('notify.no_data')}</></Text>
                </div>
              )}
            </>
          )}
        </div>
        {page && totalPage && totalPage > 1 && (
          <div className="t-searchResult_pagination">
            <Pagination
              totalPage={totalPage}
              handleChangePage={
                (pageStt: number) => handleChangePage && handleChangePage(pageStt)
              }
              pageCurrent={page}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

SearchResult.defaultProps = {};

export default SearchResult;
