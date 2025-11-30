
'use client';

import NormalCard4 from './NormalCard4';
import EditCard4 from './EditCard4';
import LockedCard4 from './LockedCard4';

interface Card4Props {
  title: string;
  description: string;
  color?: string;
  isEditMode?: boolean;
  isAuthorized?: boolean;
}

const Card4 = ({ title, description, color = '', isEditMode = false, isAuthorized = true }: Card4Props) => {
  if (!isAuthorized) return <LockedCard4 />;

  return isEditMode ? (
    <EditCard4 title={title} description={description} color={color} />
  ) : (
    <NormalCard4 title={title} description={description} color={color} />
  );
};

export default Card4;