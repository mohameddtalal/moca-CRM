'use client'

import Image from "next/image";


const ScrollingHeader = () => {
  const items = [
    { text: 'GREAT TEAMS.', icon: '/assets/path.svg' },
    { text: 'GREATER', icon: '/assets/path2.svg' },
    { text: 'MEMBER EXPERIENCES', icon: '/assets/path3.svg' },
  ];


  const renderItem = (item: typeof items[0], idx: string | number) => (
    <div key={idx} className="flex items-center gap-3 text-2xl md:text-4xl font-bold flex-shrink-0">
      <span className="scrollItem " style={{color:"var(--black)"}}>{item.text}</span>
      <Image src={item.icon} alt={item.text} width={40} height={40} />
    </div>
  );

  // Use 4 duplicates to ensure content always fills viewport
  // This prevents white space gaps during the loop
  const duplicateCount = 4;
  const allItems = Array.from({ length: duplicateCount }, (_, setIndex) =>
    items.map((item, itemIndex) => renderItem(item, `set${setIndex}-item${itemIndex}`))
  ).flat();

  return (
    <div className="overflow-hidden header flex-shrink-0">
      {/*
        Simple CSS-only animation with 4 duplicates:
        - 4 sets = 12 items total
        - Animation moves -25% (1/4 of total width = one set)
        - Always enough content visible to prevent white space
        - Clean, simple, maintainable
      */}
      <div className="flex gap-4 whitespace-nowrap animate-scroll-simple scrollItem">
        {allItems}
      </div>
    </div>
  );
};

export default ScrollingHeader;
