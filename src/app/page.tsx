import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button size="lg" className="rounded-full text-custom-color">
        <CirclePlus className="w-4 h-4 mr-2" />
        Click me
      </Button>
    </div>
  );
}
