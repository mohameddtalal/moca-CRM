
'use client';

import NormalCard1 from './NormalCard1';
import EditCard1 from './EditCard1';
import LockedCard1 from './LockedCard1';

interface Card1Props {
  title: string;
  description: string;
  color?: string;
  isEditMode?: boolean;
  isAuthorized?: boolean;
}

const Card1 = ({ title, description, color = '', isEditMode = true, isAuthorized = true }: Card1Props) => {
  if (!isAuthorized) return <LockedCard1 />;

  return isEditMode ? (
    <EditCard1 title={title} description={description} color={color} />
  ) : (
    <NormalCard1 title={title} description={description} color={color} />
  );
};

export default Card1;