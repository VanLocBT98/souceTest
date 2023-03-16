import React, { useRef } from 'react';

import useScrollAnimate from 'hooks/useScrollAnimation';

type AnimateType =
  | 'backInRight'
  | 'fadeInRight'
  | 'fadeInLeft';

interface AnimateProps {
  extendClassName?: string;
  type?: AnimateType;
  children?: React.ReactNode
}

const Animate: React.FC<AnimateProps> = ({
  children,
  extendClassName,
  type,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const animate = useScrollAnimate(ref);
  return (
    <div
      ref={ref}
      className={animate ? `${extendClassName} animate animate-${type || ''}` : `${extendClassName} preanimate`}
    >
      {children}
    </div>
  );
};

Animate.defaultProps = {
  extendClassName: undefined,
  type: undefined,
};

export default Animate;
