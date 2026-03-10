'use client';

import NormalCard9 from './NormalCard9';
import EditCard9 from './EditCard9';
import LockedCard9 from './LockedCard9';

interface Card9Props {
  title: string;
  description: string;
  color?: string;
  isEditMode?: boolean;
  isAuthorized?: boolean;
}

const Card9 = ({
  title,
  description,
  color = '',
  isEditMode = true,
  isAuthorized = true,
}: Card9Props) => {
  if (!isAuthorized) return <LockedCard9 />;

  return isEditMode ? (
    <EditCard9 title={title} description={description} color={color} />
  ) : (
    <NormalCard9 title={title} description={description} color={color} />
  );
};

export default Card9;
