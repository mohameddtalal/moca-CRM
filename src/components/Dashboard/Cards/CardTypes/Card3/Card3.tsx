
'use client';

import NormalCard3 from './NormalCard3';
import EditCard3 from './EditCard3';
import LockedCard3 from './LockedCard3';

interface Card3Props {
  title: string;
  description: string;
  color?: string;
  isEditMode?: boolean;
  isAuthorized?: boolean;
}

const Card3 = ({ title, description, color = '', isEditMode = true, isAuthorized = true }: Card3Props) => {
  if (!isAuthorized) return <LockedCard3 />;

  return isEditMode ? (
    <EditCard3 title={title} description={description} color={color} />
  ) : (
    <NormalCard3 title={title} description={description} color={color} />
  );
};

export default Card3;