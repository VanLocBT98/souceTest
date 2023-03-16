/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchResult, { SearchForm } from '.';

import { imgLink } from 'assets/dataDummy/media';
import { OptionType } from 'components/molecules/PullDown';
import schemaSearchForm from 'utils/schemas';

const OptionServices: OptionType[] = [
  {
    id: '1',
    label: 'Nova Service',
    value: 'novaservice',
  },
  {
    id: '2',
    label: 'NovaLand',
    value: 'NovaLand',
  },
];

const tabTitleData = [
  {
    id: '1',
    slug: 'all',
    label: 'Tin tức sự kiện',
  },
  {
    id: '2',
    slug: 'news',
    label: 'Bản tin tập đoàn',
  },
];

const newsListSearchResults = [
  {
    imgSrc: imgLink,
    title: 'Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản',
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    href: '/',
  },
  {
    imgSrc: imgLink,
    title: 'Nova Service cùng với các đối tác hiện thực hóa mục tiêu...',
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    href: '/',
  },
  {
    imgSrc: imgLink,
    title: 'Nova Service cùng với các đối tác hiện thực hóa mục tiêu...',
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    href: '/',
  },
  {
    imgSrc: imgLink,
    title: 'Bến du thuyền - yếu tố vàng gia tăng giá trị bất động sản',
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    href: '/',
  },
];

export default {
  title: 'Components/templates/SearchResult',
  component: SearchResult,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [activeIndex, setIndexActive] = useState(0);
  const [searchText] = useState('');

  const method = useForm<SearchForm>({
    resolver: yupResolver(schemaSearchForm),
    mode: 'onChange',
  });

  const handleSubmit = (data: SearchForm) => {
    console.log(data);
  };

  return (
    <Router>
      <SearchResult
        method={method}
        submitForm={handleSubmit}
        searchText={searchText}
        filterData={tabTitleData}
        setActiveFilterIndex={setIndexActive}
        activeFilterIndex={activeIndex}
        newsList={newsListSearchResults}
        title="Tìm kiếm"
        page={1}
        totalPage={15}
        optionServices={OptionServices}
      />
    </Router>
  );
};
