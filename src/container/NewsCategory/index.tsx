import React from 'react';

import { newsCategoryBottomData, newsCategoryTopData, title } from 'assets/dataDummy/newsCategoryList';
import NewsCategoryList from 'components/templates/NewsCategoryList';

const NewsCategoryContainer: React.FC = () => (
  <div className="p-newscategory_list">
    <NewsCategoryList
      title={title}
      newsCategoryTop={newsCategoryTopData}
      newsCategoryBottom={newsCategoryBottomData}
      page={1}
      totalPage={10}
      isLoading={false}
      handleChangePage={(e: number) => e}
    />
  </div>
);

export default NewsCategoryContainer;
