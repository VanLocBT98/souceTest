import React, { useMemo, useState } from 'react';

import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export type BreadcrumbPropsType = {
  pathName?: string;
  target?: string;
  text: string;
  isCollapsed?: boolean;
};

interface BreadcrumbProps {
  breadcrumbs: BreadcrumbPropsType[];
  prefix?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  breadcrumbs,
  prefix,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const breadcrumbList = useMemo(() => {
    if (breadcrumbs.length > 4 && isCollapsed) {
      return [
        breadcrumbs[0],
        breadcrumbs[1],
        {
          text: '...',
          isCollapsed: true,
        },
        breadcrumbs[breadcrumbs.length - 1],
        breadcrumbs[breadcrumbs.length - 2],
      ];
    }
    return breadcrumbs;
  }, [isCollapsed, breadcrumbs]);

  return (
    <div className="m-breadcrumb">
      <ul className="m-breadcrumb_flex">
        {breadcrumbList.map((item, index) => (
          <li
            className="m-breadcrumb_item"
            key={`${item.text}-${item.pathName}`}
            onClick={() => {
              if (item.isCollapsed) {
                setIsCollapsed(false);
              }
            }}
          >
            <div className="m-breadcrumb_content d-flex">
              {index !== 0 && (
                <Text
                  type="span"
                  modifiers={['black045']}
                >
                  {prefix}
                </Text>
              )}
              <Link href={item.pathName} target={item.target}>
                <Text
                  type="span"
                  modifiers={[index === breadcrumbList.length - 1 ? 'black085' : 'black045']}
                >
                  {item.text}
                </Text>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
Breadcrumb.defaultProps = {
  prefix: '/',
};

export default Breadcrumb;
