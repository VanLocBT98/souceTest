import React, { useMemo } from 'react';

import noImage132x74 from 'assets/images/dummy-132X74.webp';
import noImage264x148 from 'assets/images/dummy-264X148.webp';
import noImage396x222 from 'assets/images/dummy-396X222.webp';
import useDeviceQueries from 'hooks/useDeviceQueries';
import mapModifiers from 'utils/functions';

export type SizeImageType = 'cover' | 'contain' | 'inherit' | 'initial';

interface ImageProps {
  src: string;
  srcTablet?: string;
  srcMobile?: string;
  alt?: string;
  ratio?: Ratio;
  size?: SizeImageType;
  blur?: boolean
  loading?: 'lazy' | 'eager';
}

const Image: React.FC<ImageProps> = ({
  src,
  srcMobile,
  srcTablet,
  alt,
  ratio,
  size,
  loading,
  blur,
}) => {
  const { isMobile, isTablet } = useDeviceQueries();
  const sourceImage = useMemo(() => {
    if (isMobile) {
      return srcMobile || src || noImage132x74;
    }
    if (isTablet) {
      return srcTablet || src || noImage264x148;
    }
    return src || noImage396x222;
  }, [isMobile, isTablet, src, srcMobile, srcTablet]);

  return (
    <div className={mapModifiers('a-image', ratio, size, blur && 'blur')}>
      <img src={sourceImage} alt={alt || 'without alt'} loading={loading} />
    </div>
  );
};

Image.defaultProps = {
  alt: '',
  srcMobile: undefined,
  srcTablet: undefined,
  size: 'cover',
  loading: 'lazy',
};

export default Image;
