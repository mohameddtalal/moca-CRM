
'use client';

import NormalCard11 from './NormalCard11';
import EditCard11 from './EditCard11';
import LockedCard11 from './LockedCard11';

interface Card11Props {
  title: string;
  description: string;
  color?: string;
  isEditMode?: boolean;
  isAuthorized?: boolean;
}

const Card11 = ({ title, description, color = '', isEditMode = true, isAuthorized = true }: Card11Props) => {
  if (!isAuthorized) return <LockedCard11 />;

  return isEditMode ? (
    <EditCard11 title={title} description={description} color={color} />
  ) : (
    <NormalCard11 title={title} description={description} color={color} />
  );
};

export default Card11;