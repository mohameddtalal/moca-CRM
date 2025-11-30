
'use client';

import NormalCard6 from './NormalCard6';
import EditCard6 from './EditCard6';
import LockedCard6 from './LockedCard6';

interface Card6Props {
  title: string;
  description: string;
  color?: string;
  isEditMode?: boolean;
  isAuthorized?: boolean;
}

const Card6 = ({ title, description, color = '', isEditMode = true, isAuthorized = true }: Card6Props) => {
  if (!isAuthorized) return <LockedCard6 />;

  return isEditMode ? (
    <EditCard6 title={title} description={description} color={color} />
  ) : (
    <NormalCard6 title={title} description={description} color={color} />
  );
};

export default Card6;