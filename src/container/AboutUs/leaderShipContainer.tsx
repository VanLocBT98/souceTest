import React, {
  useState,
} from 'react';

import { leadersList } from 'assets/dataDummy/aboutUs';
import LeaderDetailsModal, { LeaderDetailsModalProps } from 'components/templates/LeaderDetailsModal';
import Leadership from 'components/templates/Leadership';

interface LeaderShipContainerProps {
  title: string;
}

const DEFAULT_DATA_MODAL = {
  imageSrc: '',
  name: '',
  position: '',
  description: '',
  gender: '',
  isOpen: false,
};

const LeaderShipContainer: React.FC<LeaderShipContainerProps> = ({ title }) => {
  const [dataModal, setDataModal] = useState<LeaderDetailsModalProps>(DEFAULT_DATA_MODAL);

  return (
    <div className="p-aboutUs_leaderShip">
      <Leadership
        title={title}
        dataList={leadersList}
        handleClick={(values) => setDataModal({
          ...values,
          isOpen: true,
        })}
      />
      <LeaderDetailsModal
        imageSrc={dataModal?.imageSrc || ''}
        isOpen={dataModal.isOpen}
        name={dataModal?.name || ''}
        position={dataModal?.position || ''}
        handleClose={() => setDataModal(DEFAULT_DATA_MODAL)}
        description={dataModal.description}
        gender={dataModal.gender}
      />
    </div>
  );
};

export default LeaderShipContainer;
