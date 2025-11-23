import { ArrowRightIcon } from "lucide-react"
import { ChevronRight } from "lucide-react"
import Image from "next/image";

import { Button } from "@/components/ui/button"

export function ButtonSmall() {
  return (
    <div className="flex flex-col ">
      <Button  size="icon" className="rounded-full bg-black "
      style={{padding:'clamp(0.25rem, 0.0944rem + 1.1019vw, 0.5rem)', width: "clamp(1rem, -2.0959rem + 21.9178vw, 2rem)", height: "clamp(1rem, -2.0959rem + 21.9178vw, 2rem)"}}
      >
        <Image src="/assets/Vector.svg" alt="Arrow" width={7} height={7} />
      </Button>
    </div>
  )
}
