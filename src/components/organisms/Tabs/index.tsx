/* eslint-disable react/require-default-props */
import React, { useLayoutEffect, useRef } from 'react';

import mapModifiers, { handleScrollCenter } from 'utils/functions';

type ManyCases = 'default' | 'primary' | 'search';

interface TabPanelProps {
  active?: boolean;
  children?: React.ReactNode;
}

interface TabProps {
  label?: string;
  active?: boolean;
  size?: '16x24';
  type?: ManyCases;
  handleClick?: () => void;
}

interface TabsProps {
  variableMutate?: number | string;
  classTabsActive?: string;
  children?: React.ReactNode;
  type?: ManyCases;
}

export const TabPanel: React.FC<TabPanelProps> = ({ active, children }) => (
  <div className={mapModifiers('o-tabs_panel', active && 'active')}>{children}</div>
);

export const Tab: React.FC<TabProps> = ({
  active, label, size, handleClick, type,
}) => (
  <div onClick={handleClick} className={mapModifiers('o-tabs_tab', active && 'active', type || '')}>
    <span className={`o-tabs_label ${size ? `o-tabs_label-${size}` : ''}`}>{label}</span>
  </div>
);

export const Tabs: React.FC<TabsProps> = ({
  children, variableMutate, classTabsActive, type,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    handleScrollCenter(ref, classTabsActive || '.o-tabs_tab-active');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variableMutate]);

  return (
    <div className="o-tabs">
      <div ref={ref} className={mapModifiers('o-tabs_labels', type)}>
        {children}
      </div>
    </div>
  );
};

TabPanel.defaultProps = {
  active: false,
};

Tab.defaultProps = {
  label: '',
  active: false,
  size: undefined,
  type: 'default',
  handleClick: undefined,
};

Tabs.defaultProps = {
  variableMutate: undefined,
  classTabsActive: '',
  type: 'default',
};

export default React.memo(Tabs);
