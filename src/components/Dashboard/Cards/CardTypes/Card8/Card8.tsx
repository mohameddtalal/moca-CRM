
'use client';

import NormalCard8 from './NormalCard8';
import EditCard8 from './EditCard8';
import LockedCard8 from './LockedCard8';


interface Card8Props {
  title: string;
  description: string;
  color?: string;
  isEditMode?: boolean;
  isAuthorized?: boolean;
}

const Card8 = ({ title, description, color = '', isEditMode = true, isAuthorized = true }: Card8Props) => {
  if (!isAuthorized) return <LockedCard8 />;

  return isEditMode ? (
    <EditCard8 title={title} description={description} color={color} />
  ) : (
    <NormalCard8 title={title} description={description} color={color} />
  );
};

export default Card8;