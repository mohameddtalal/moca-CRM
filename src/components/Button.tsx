import { ArrowRightIcon } from "lucide-react"
import { ChevronRight } from "lucide-react"
import Image from "next/image";

import { Button } from "@/components/ui/button"

export function ButtonRounded() {
  return (
    <div className="flex flex-col ">
      <Button  size="icon" className="rounded-full"
      style={{
           backgroundColor: "var(--black)",
           padding: "clamp(0.25rem, 0.15rem + 0.25vw, 0.5rem)",
            width: 'clamp(1.5rem, 1rem + 1.6vw, 3rem)',
            height:'clamp(1.5rem, 1rem + 1.6vw, 3rem)'
      }}

      >
        <Image src="/assets/Vector.svg" alt="Arrow" width={10} height={10} />
      </Button>
    </div>
  )
}
