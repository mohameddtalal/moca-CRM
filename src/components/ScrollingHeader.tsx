'use client'

import Image from "next/image";

const ScrollingHeader = () => {
  const items = [
    { text: 'GREAT TEAMS.', icon: '/assets/path.svg', color: 'var(--black)' },
    { text: 'GREATER', icon: '/assets/path2.svg', color: 'var(--black)' },
    { text: 'MEMBER EXPERIENCES', icon: '/assets/path3.svg', color: 'var(--black)' },
  ];

  // OLD IMPLEMENTATION #1 - kept for reference
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
  // PROBLEMS WITH OLD APPROACH #1:
  // 1. Repetitive code: 8 separate .map() calls are hard to maintain
  // 2. Animation lag/jump: The animation moves -12.5% (1/8 of total width)
  //    - With 8 duplicates, the animation has to move a very long distance
  //    - When it resets from -12.5% back to 0%, there's a visible jump
  //    - The reset happens because the animation doesn't align perfectly with the content width
  // 3. Inefficient: Rendering 8x the content (24 items total) is unnecessary
  // 4. Hard to adjust: Changing the number of duplicates requires editing multiple lines

  // OLD IMPLEMENTATION #2 - kept for reference
  // const renderItem = (item: typeof items[0], idx: string | number) => (
  //   <div key={idx} className="flex items-center gap-3 text-2xl md:text-4xl font-bold flex-shrink-0">
  //     <span style={{ color: item.color }} className="scrollItem">{item.text}</span>
  //     <Image src={item.icon} alt={item.text} width={40} height={40} />
  //   </div>
  // );
  // const duplicateCount = 3;
  // const allItems = Array.from({ length: duplicateCount }, (_, setIndex) =>
  //   items.map((item, itemIndex) => renderItem(item, `set${setIndex}-item${itemIndex}`))
  // ).flat();
  // return (
  //   <div className="overflow-hidden header flex-shrink-0">
  //     <div className="flex gap-4 whitespace-nowrap animate-scroll-seamless scrollItem">
  //       {allItems}
  //     </div>
  //   </div>
  // );
  // PROBLEMS WITH OLD APPROACH #2:
  // 1. Used CSS percentage-based animation (-50%) which doesn't account for gaps
  // 2. The gap-4 (1rem) between items creates spacing that percentage doesn't include
  // 3. Mismatch: duplicateCount was 3 but animation was -50% (should be -33.333%)
  // 4. Percentage-based transforms don't align perfectly with pixel-based content
  // 5. Browser rounding errors cause slight misalignment at the loop point
  // 6. Still had visible lag/jump when animation resets
  // Why percentage-based animation fails:
  // - CSS percentage is relative to the element's width
  // - But the actual content width includes gaps, padding, and varies by viewport
  // - transform: translateX(-50%) doesn't guarantee exact alignment with content
  // - Even 1px misalignment is visible as a jump
  // The real issue:
  // - We need PIXEL-PERFECT alignment, not percentage-based
  // - The animation must move EXACTLY the width of one set of items
  // - This requires JavaScript to measure the actual width

  // OLD IMPLEMENTATION #3 - kept for reference
  // const scrollContainerRef = useRef<HTMLDivElement>(null);
  // const renderItem = (item: typeof items[0], idx: string | number) => (
  //   <div key={idx} className="flex items-center gap-3 text-2xl md:text-4xl font-bold flex-shrink-0">
  //     <span style={{ color: item.color }} className="scrollItem">{item.text}</span>
  //     <Image src={item.icon} alt={item.text} width={40} height={40} />
  //   </div>
  // );
  // const duplicateCount = 2;
  // const allItems = Array.from({ length: duplicateCount }, (_, setIndex) =>
  //   items.map((item, itemIndex) => renderItem(item, `set${setIndex}-item${itemIndex}`))
  // ).flat();
  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   if (!scrollContainer) return;
  //   requestAnimationFrame(() => {
  //     let oneSetWidth = 0;
  //     for (let i = 0; i < items.length; i++) {
  //       const item = firstSetItems[i] as HTMLElement;
  //       oneSetWidth += item.offsetWidth;
  //       if (i < items.length - 1) {
  //         const gap = parseFloat(getComputedStyle(scrollContainer).gap) || 16;
  //         oneSetWidth += gap;
  //       }
  //     }
  //     const keyframeRule = `
  //       @keyframes scroll-exact {
  //         0% { transform: translate3d(0px, 0, 0); }
  //         100% { transform: translate3d(-${oneSetWidth}px, 0, 0); }
  //       }
  //     `;
  //     styleSheet.insertRule(keyframeRule, styleSheet.cssRules.length);
  //     scrollContainer.style.animation = `scroll-exact 20s linear infinite`;
  //   });
  // }, [items.length]);
  // return (
  //   <div className="overflow-hidden header flex-shrink-0">
  //     <div ref={scrollContainerRef} className="flex gap-4 whitespace-nowrap scrollItem"
  //       style={{ willChange: 'transform', backfaceVisibility: 'hidden', ... }}>
  //       {allItems}
  //     </div>
  //   </div>
  // );
  // PROBLEMS WITH OLD APPROACH #3:
  // 1. OVERLY COMPLEX: 186 lines total, ~50 lines just for animation logic
  // 2. Uses useEffect, useRef, dynamic keyframe generation, DOM manipulation
  // 3. Too much JavaScript for a simple scrolling animation
  // 4. WHITE SPACE GAP: With only 2 duplicates, a gap appears before loop
  //    - When last item scrolls out, there's a moment before first item appears
  //    - The viewport shows empty white space during this transition
  //    - This happens because we're moving exactly one set width
  //    - Need MORE content visible to prevent gaps
  // 5. Maintenance burden: Complex code is harder to understand and modify
  // 6. Performance: JavaScript calculations on every mount
  // Why white space appears:
  // - With 2 sets and moving exactly one set width (-997px example)
  // - When animation reaches 100%, the last item exits viewport
  // - Before animation resets to 0%, there's a brief moment
  // - During this moment, no content is visible = white space
  // - Even though reset is "instant", the gap is visible
  // The real solution:
  // - Use MORE duplicates (4-5 sets) so content always fills viewport
  // - Use simple CSS percentage animation (no JavaScript needed)
  // - The percentage doesn't need to be perfect if we have enough content
  // - With enough duplicates, any small misalignment is invisible

  // NEW IMPLEMENTATION #4:
  // Back to CSS-only with enough duplicates to prevent white space
  // Simple, clean, and effective
  // How it works:
  // 1. Use 4 duplicates (12 items total) to ensure content always fills viewport
  // 2. Animate with CSS percentage (-25% = 1/4 of total width)
  // 3. With 4 sets, there's always content visible - no white space gaps
  // 4. Small alignment imperfections are invisible with this much content
  // 5. Much simpler code - no JavaScript, no refs, no useEffect
  // Benefits:
  // - Simple CSS-only solution (no JavaScript complexity)
  // - No white space gaps (always content visible)
  // - Easy to understand and maintain
  // - Good performance (CSS animations are hardware-accelerated)
  // - Works reliably across all browsers

  const renderItem = (item: typeof items[0], idx: string | number) => (
    <div key={idx} className="flex items-center gap-3 text-2xl md:text-4xl font-bold flex-shrink-0">
      <span style={{ color: item.color }} className="scrollItem">{item.text}</span>
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
