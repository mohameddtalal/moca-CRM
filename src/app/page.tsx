import ScrollingHeader from "../components/ScrollingHeader";
import BentoGrid from "@/components/BentoGrid";

const Page=() => {
  return (
    // OLD IMPLEMENTATION #1 - kept for reference
    // <div className="h-full overflow-hidden flex flex-col">
    // PROBLEM WITH OLD APPROACH #1:
    // - h-full creates a chain of 100% height dependencies from html → body → this div
    // - When parent uses 100vh equivalent, child's h-full inherits that problematic behavior
    // - Contributes to the bottom margin clipping issue

    // OLD IMPLEMENTATION #2 - kept for reference
    // <div className="overflow-hidden flex flex-col" style={{ height: '100%' }}>
    // PROBLEM WITH OLD APPROACH #2:
    // - height: 100% tries to fill entire body height (100dvh)
    // - But Navbar is ALSO in the body and takes up space (height + margins)
    // - Layout hierarchy: body (100dvh) → Navbar (auto + margins) + page div (100%)
    // - Total consumed = Navbar space + 100% = MORE than 100dvh
    // - This causes bottom margin to be clipped by overflow-hidden on body
    // - Only a small portion of bottom margin was visible (approximately navbar's top margin size)
    // - The math: If Navbar takes ~8dvh, then page div tries to be 100dvh → Total = 108dvh in a 100dvh container!

    // OLD IMPLEMENTATION #3 - kept for reference
    // <div className="overflow-hidden flex flex-col" style={{ flex: 1 }}>
    // PROBLEM WITH OLD APPROACH #3:
    // - flex: 1 correctly fills remaining space after Navbar
    // - BUT overflow-hidden on this div clips BentoGrid's bottom margin
    // - BentoGrid uses calc(100% - margin) but "100%" here refers to THIS div's height
    // - ScrollingHeader takes space, leaving less than 100% for BentoGrid
    // - The calculation doesn't account for ScrollingHeader's space
    // - Result: Bottom margin still gets clipped at 100% zoom in Chrome

    // NEW IMPLEMENTATION #4:
    // Remove overflow-hidden from this div to allow margins to be visible
    // How it works:
    // - flex: 1 fills remaining space after Navbar (correct)
    // - flex flex-col makes children stack vertically (correct)
    // - Removing overflow-hidden allows BentoGrid's margin-bottom to extend beyond this div
    // - The parent body has overflow-hidden, which will clip at the viewport boundary
    // - But now the margin has space to be visible within the viewport
    // Benefits:
    // - BentoGrid's bottom margin can now be fully visible
    // - No complex calculations needed
    // - Works with the existing flex layout system
    // - Allows proper space distribution between ScrollingHeader and BentoGrid
    <div className="flex flex-col" style={{ flex: 1 }}>
      <ScrollingHeader />

        <BentoGrid/>
      </div>

  );
}

export default Page;