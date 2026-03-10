
'use client';

import NormalCard5 from './NormalCard5';
import EditCard5 from './EditCard5';
import LockedCard5 from './LockedCard5';

interface Card5Props {
  title: string;
  description: string;
  color?: string;
  isEditMode?: boolean;
  isAuthorized?: boolean;
}

const Card5 = ({ title, description, color = '', isEditMode = true, isAuthorized = true }: Card5Props) => {
  if (!isAuthorized) return <LockedCard5 />;

  return isEditMode ? (
    <EditCard5 title={title} description={description} color={color} />
  ) : (
    <NormalCard5 title={title} description={description} color={color} />
  );
};

export default Card5;