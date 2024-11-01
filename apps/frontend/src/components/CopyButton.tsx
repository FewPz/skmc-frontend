"use client";
import { Button } from "@/components/ui/button";
import { FaCopy } from "react-icons/fa";

interface CopyButtonProps {
  label: string;
  text: string;
}

export default function CopyButton({ label, text }: CopyButtonProps) {
  return (
    <Button
      variant={"defaultBlack"}
      size={"lg"}
      className="font-mc bg-customBlack"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      <span>{label}</span>
      <FaCopy />
    </Button>
  );
}
