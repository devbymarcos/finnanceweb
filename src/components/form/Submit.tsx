"use client";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const Submit = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button variant="default" className="bg-base-secondary font-bold ">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : text}
    </Button>
  );
};

export default Submit;
