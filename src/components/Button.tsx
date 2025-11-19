import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonRounded() {
  return (
    <div className="flex flex-col gap-8">
      <Button  size="icon" className="rounded-full bg-black"
      style={{padding:'clamp(0.5rem, 0.1887rem + 2.2039vw, 1rem)'}}
      >
        <ArrowRightIcon color="white" />
      </Button>
    </div>
  )
}
