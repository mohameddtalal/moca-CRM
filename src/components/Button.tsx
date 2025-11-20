import { ArrowRightIcon } from "lucide-react"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonRounded() {
  return (
    <div className="flex flex-col ">
      <Button  size="icon" className="rounded-full bg-black "
      style={{padding:'clamp(0.25rem, 0.0944rem + 1.1019vw, 0.5rem)', width: "clamp(1rem, 0.1439rem + 6.0606vw, 2.375rem)", height: "clamp(1rem, 0.1439rem + 6.0606vw, 2.375rem)"}}
      >
        <ChevronRight color="white"/>
      </Button>
    </div>
  )
}
