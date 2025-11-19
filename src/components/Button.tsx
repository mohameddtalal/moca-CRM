import { ArrowRightIcon } from "lucide-react"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonRounded() {
  return (
    <div className="flex flex-col ">
      <Button  size="icon" className="rounded-full bg-black"
      style={{padding:'clamp(0.2rem, 0.1887rem + 2.2039vw, 0.5rem)'}}
      >
        <ChevronRight color="white"/>
      </Button>
    </div>
  )
}
