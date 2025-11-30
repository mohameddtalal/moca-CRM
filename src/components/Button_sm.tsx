import { ChevronRight } from "lucide-react"
import Image from "next/image";
import { Button } from "@/components/ui/button"

export function ButtonSmall() {
  return (
    <div className="flex flex-col">
      <Button
        size="icon"
        className="rounded-full"
        style={{
          backgroundColor: "var(--black)",
         padding: "clamp(0.25rem, 0.18rem + 0.4vw, 0.5rem)",
          width: "clamp(1rem, 0.6rem + 1.6vw, 2rem)",
          height: "clamp(1rem, 0.6rem + 1.6vw, 2rem)"
                }}
      >
        <Image
          src="/assets/Vector.svg"
          alt="Arrow"
          width={7}
          height={7}
        />
      </Button>
    </div>
  );
}
