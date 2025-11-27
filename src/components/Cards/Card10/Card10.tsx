'use client';

import NormalCard10 from './NormalCard10';
import EditCard10 from './EditCard10';
import LockedCard10 from './LockedCard10';

interface Card10Props {
  title: string;
  description: string;
  color?: string;
  isEditMode?: boolean;
  isAuthorized?: boolean;
}

const Card10 = ({
  title,
  description,
  color = '',
  isEditMode = false,
  isAuthorized = true,
}: Card10Props) => {
  if (!isAuthorized) return <LockedCard10 />;

  return isEditMode ? (
    <EditCard10 title={title} description={description} color={color} />
  ) : (
    <NormalCard10 title={title} description={description} color={color} />
  );
};

export default Card10;
