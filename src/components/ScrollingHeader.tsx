'use client'

import Image from "next/image";

const ScrollingHeader = () => {
  const items = [
    { text: 'GREAT TEAMS.', icon: '/assets/path.svg', color: 'var(--black)' },
    { text: 'GREATER', icon: '/assets/path2.svg', color: 'var(--black)' },
    { text: 'MEMBER EXPERIENCES', icon: '/assets/path3.svg', color: 'var(--black)' },
  ];

  // Render items multiple times for seamless infinite scroll
  // Using many duplicates ensures smooth continuous loop
  const renderItem = (item: typeof items[0], idx: string | number) => (
    <div key={idx} className="flex items-center gap-3 text-2xl md:text-4xl font-bold flex-shrink-0">
      <span style={{ color: item.color }} className="scrollItem">{item.text}</span>
      <Image src={item.icon} alt={item.text} width={40} height={40} />
    </div>
  );

  return (
    <div className="overflow-hidden header flex-shrink-0">
      <div className="flex gap-4 whitespace-nowrap animate-scroll  scrollItem">
        {items.map((item, idx) => renderItem(item, `original-${idx}`))}
        {items.map((item, idx) => renderItem(item, `dup1-${idx}`))}
        {items.map((item, idx) => renderItem(item, `dup2-${idx}`))}
        {items.map((item, idx) => renderItem(item, `dup3-${idx}`))}
        {items.map((item, idx) => renderItem(item, `dup4-${idx}`))}
        {items.map((item, idx) => renderItem(item, `dup5-${idx}`))}
        {items.map((item, idx) => renderItem(item, `dup6-${idx}`))}
        {items.map((item, idx) => renderItem(item, `dup7-${idx}`))}
      </div>
    </div>
  );
};

export default ScrollingHeader;
