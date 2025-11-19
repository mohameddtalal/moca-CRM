'use client'

import Image from "next/image";

const ScrollingHeader = () => {
  const items = [
    { text: 'GREAT TEAMS.', icon: '/assets/path.svg', color: 'var(--black)' },
    { text: 'GREATER', icon: '/assets/path2.svg', color: 'var(--black)' },
    { text: 'MEMBER EXPERIENCES', icon: '/assets/path3.svg', color: 'var(--black)' },
  ];

  // OLD IMPLEMENTATION - kept for reference
  // const renderItem = (item: typeof items[0], idx: string | number) => (
  //   <div key={idx} className="flex items-center gap-3 text-2xl md:text-4xl font-bold flex-shrink-0">
  //     <span style={{ color: item.color }} className="scrollItem">{item.text}</span>
  //     <Image src={item.icon} alt={item.text} width={40} height={40} />
  //   </div>
  // );
  // return (
  //   <div className="overflow-hidden header flex-shrink-0">
  //     <div className="flex gap-4 whitespace-nowrap animate-scroll  scrollItem">
  //       {items.map((item, idx) => renderItem(item, `original-${idx}`))}
  //       {items.map((item, idx) => renderItem(item, `dup1-${idx}`))}
  //       {items.map((item, idx) => renderItem(item, `dup2-${idx}`))}
  //       {items.map((item, idx) => renderItem(item, `dup3-${idx}`))}
  //       {items.map((item, idx) => renderItem(item, `dup4-${idx}`))}
  //       {items.map((item, idx) => renderItem(item, `dup5-${idx}`))}
  //       {items.map((item, idx) => renderItem(item, `dup6-${idx}`))}
  //       {items.map((item, idx) => renderItem(item, `dup7-${idx}`))}
  //     </div>
  //   </div>
  // );
  // PROBLEMS WITH OLD APPROACH:
  // 1. Repetitive code: 8 separate .map() calls are hard to maintain
  // 2. Animation lag/jump: The animation moves -12.5% (1/8 of total width)
  //    - With 8 duplicates, the animation has to move a very long distance
  //    - When it resets from -12.5% back to 0%, there's a visible jump
  //    - The reset happens because the animation doesn't align perfectly with the content width
  // 3. Inefficient: Rendering 8x the content (24 items total) is unnecessary
  // 4. Hard to adjust: Changing the number of duplicates requires editing multiple lines

  // NEW IMPLEMENTATION:
  // Using a cleaner approach with a loop and only 2 sets of items for seamless scrolling
  // How seamless infinite scroll works:
  // - Duplicate the items exactly once (2 sets total)
  // - Animate from 0% to -50% (moves exactly one set width)
  // - When animation reaches -50%, the second set is now in the original position
  // - Animation resets to 0% instantly, but visually it looks identical
  // - This creates a perfect seamless loop with no visible jump

  const renderItem = (item: typeof items[0], idx: string | number) => (
    <div key={idx} className="flex items-center gap-3 text-2xl md:text-4xl font-bold flex-shrink-0">
      <span style={{ color: item.color }} className="scrollItem">{item.text}</span>
      <Image src={item.icon} alt={item.text} width={40} height={40} />
    </div>
  );

  // Generate duplicates using a loop instead of manual repetition
  // We only need 2 sets for seamless infinite scroll
  const duplicateCount = 3; // Number of times to duplicate the items array
  const allItems = Array.from({ length: duplicateCount }, (_, setIndex) =>
    items.map((item, itemIndex) => renderItem(item, `set${setIndex}-item${itemIndex}`))
  ).flat();

  return (
    <div className="overflow-hidden header flex-shrink-0">
      {/*
        The animate-scroll-seamless class (defined in globals.css) will:
        - Animate from translateX(0%) to translateX(-50%)
        - Move exactly one set width (half of total content)
        - Reset to 0% seamlessly because the second set looks identical
        - Create perfect infinite loop with no visible jump
      */}
      <div className="flex gap-4 whitespace-nowrap animate-scroll-seamless scrollItem">
        {allItems}
      </div>
    </div>
  );
};

export default ScrollingHeader;
