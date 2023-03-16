/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PopupVideo from '../PopupVideo';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Pagination from 'components/molecules/Pagination';
import ThumbnailVideo from 'components/molecules/ThumbnailVideo';
import Container, { CustomCol, CustomRow } from 'components/organisms/Container';
import { VideoDetailBySlugDataTypes } from 'services/news/types';
import mapModifiers, { formatDateDDMMYYYY, getImageURL } from 'utils/functions';

export interface VideoProps {
  id?: number;
  thumbnail: string;
  sourceLink?: string;
  sourceType?: string;
  videoName: string;
  isActive?: boolean;
  handleClick?: () => void;
  isPopular?: boolean;
  createdAt?: string;
}

export interface VideoListProps {
  title?: string;
  sideList: VideoProps[];
  subList: SubListProps[];
  isLoading?: boolean;
  totalPagesSubList?: number;
  pageSubList?: number;
  videoActive?: VideoProps;
  handleClick: (e: VideoProps) => void;
  handleIncrementView?: (e: number) => void;
  isPlay?: boolean;
  loadingVideo?: boolean;
  videoDetail?: VideoDetailBySlugDataTypes;
  handleResetURL?: () => void;
  handleChangePage?: (pageSubList: number) => void;
}

export const SideList: React.FC<VideoProps> = ({
  thumbnail,
  videoName,
  isActive,
  handleClick,
  createdAt,
}) => (
  <div
    className={mapModifiers('t-sideList_card', isActive && 'active')}
    onClick={handleClick}
  >
    <div className="t-sideList_cardimg">
      <Image
        src={thumbnail}
        alt=""
        ratio="112x63"
      />
    </div>
    <div className="t-sideList_info">
      <Text
        modifiers={['14x22', '400', 'davysGrey5a']}
        content={videoName}
      />
      {createdAt && (
        <div className="mt-1">
          <Text
            modifiers={['12x16', '400', 'davysGrey5a']}
            content={createdAt}
          />
        </div>
      )}
    </div>
  </div>
);

export interface SubListProps {
  id?: number;
  thumbnail: string;
  sourceLink?: string;
  sourceType?: string;
  videoName: string;
  isPopular?: boolean;
  createdAt?: string;
  slug: string;
}

export const SubList: React.FC<SubListProps> = ({ thumbnail, videoName, createdAt }) => (
  <>
    <div className="t-subList_cardimg">
      <Image
        src={thumbnail}
        alt=""
        ratio="161x91"
      />
    </div>
    <div className="t-subList_info">
      <Text
        modifiers={['16x24', '400', 'davysGrey5a']}
        content={videoName}
      />
      {createdAt && (
        <div className="mt-1">
          <Text
            modifiers={['14x21', '400', 'davysGrey5a']}
            content={createdAt}
          />
        </div>
      )}
    </div>
  </>
);

const VideoList: React.FC<VideoListProps> = ({
  title,
  sideList,
  subList,
  isLoading,
  totalPagesSubList,
  pageSubList,
  videoActive,
  handleClick,
  handleIncrementView,
  isPlay = false,
  loadingVideo = false,
  videoDetail,
  handleChangePage,
}) => {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const [openPopupVideo, setOpenPopupVideo] = useState<{
    isOpen: boolean,
    dataVideo?: SubListProps,
  }>({
    isOpen: false,
    dataVideo: undefined,
  });

  const handleClosePopupVideo = () => {
    setOpenPopupVideo({
      isOpen: false,
      dataVideo: undefined,
    });
    navigation(pathname);
  };

  useEffect(() => {
    if (videoDetail) {
      setOpenPopupVideo({
        isOpen: true,
        dataVideo: {
          id: videoDetail.id,
          thumbnail: videoDetail.thumbnail ? getImageURL(videoDetail.thumbnail) : '',
          sourceLink: videoDetail.link,
          videoName: videoDetail.name,
          sourceType: videoDetail.type,
          createdAt: formatDateDDMMYYYY(videoDetail.createdAt),
          slug: videoDetail.slug,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoDetail?.id]);

  return (
    <Container>
      <div className="t-videoList">
        <div className="t-videoList_title">
          <Heading
            modifiers={['32x48', '700', 'center', 'capitalize', 'raisinBlack']}
            content={title}
          />
        </div>
        <div className="t-videoList_main">
          <div className="t-videoList_main_left">
            {loadingVideo ? (
              <div className="t-videoList_loading">
                <Loading isShow />
              </div>
            ) : (
              <div className="t-videoList_wrapper">
                <div
                  className="t-videoList_video"
                >
                  <ThumbnailVideo
                    id={videoActive?.id || 0}
                    urlImg={videoActive?.thumbnail || ''}
                    dataLink={videoActive?.sourceLink}
                    playing={isPlay}
                    letControl
                    handleIncrementView={handleIncrementView}
                  />
                </div>
                <div className="t-videoList_name">
                  <Heading
                    modifiers={['20x30', '700', 'davysGrey5a']}
                    content={videoActive?.videoName}
                  />
                </div>
                <div className="mt-1">
                  <Text
                    modifiers={['14x22', '400', 'davysGrey5a']}
                    content={videoActive?.createdAt}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="t-videoList_main_right">
            <div className="t-sideList">
              {sideList.length > 0 && sideList.map((item, index) => (
                <SideList
                  thumbnail={item.thumbnail}
                  videoName={item.videoName}
                  isActive={item.id === videoActive?.id}
                  handleClick={() => {
                    handleClick(item);
                  }}
                  key={`t-sideList-${index.toString()}`}
                  isPopular
                  createdAt={item.createdAt}
                />
              ))}
            </div>
          </div>
        </div>
        {isLoading ? (
          <Loading isShow />
        ) : (
          <>
            <div className="t-videoList_divider" />
            {subList && subList.length > 0 && (
              <div className="t-subList">
                <CustomRow>
                  {subList.map((item, index) => (
                    <CustomCol
                      sm="12"
                      md="6"
                      lg="6"
                      key={`_subList_${index.toString()}`}
                    >
                      <div
                        className="t-subList_item"
                        onClick={() => {
                          navigation(`${pathname}?video=${item.slug}`);
                          setOpenPopupVideo({
                            isOpen: true,
                            dataVideo: item,
                          });
                        }}
                      >
                        <SubList {...item} />
                      </div>
                    </CustomCol>
                  ))}
                </CustomRow>
              </div>
            )}
          </>
        )}

        {pageSubList && totalPagesSubList && totalPagesSubList > 1 && (
          <div className="t-videoList_pagination">
            <Pagination
              totalPage={totalPagesSubList}
              handleChangePage={
                (pageStt: number) => handleChangePage && handleChangePage(pageStt)
              }
              pageCurrent={pageSubList}
            />
          </div>
        )}
      </div>
      <div className="t-videoList_modal">
        <PopupVideo
          id={openPopupVideo.dataVideo?.id || 0}
          isOpen={openPopupVideo.isOpen}
          handleClose={handleClosePopupVideo}
          mediaThumb={openPopupVideo.dataVideo?.thumbnail}
          dataLink={openPopupVideo.dataVideo?.sourceLink || ''}
        />
      </div>
    </Container>
  );
};

export default VideoList;
