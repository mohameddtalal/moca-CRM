
'use client';

import NormalCard2 from './NormalCard2';
import EditCard2 from './EditCard2';
import LockedCard2 from './LockedCard2';

interface Card2Props {
  title: string;
  description: string;
  color?: string;
  isEditMode?: boolean;
  isAuthorized?: boolean;
}

const Card2 = ({ title, description, color = '', isEditMode = false, isAuthorized = true }: Card2Props) => {
  if (!isAuthorized) return <LockedCard2 />;

  return isEditMode ? (
    <EditCard2 title={title} description={description} color={color} />
  ) : (
    <NormalCard2 title={title} description={description} color={color} />
  );
};

export default Card2;