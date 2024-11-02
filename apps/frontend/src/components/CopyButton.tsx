"use client";
import { Button } from "@/components/ui/button";
import { FaCopy } from "react-icons/fa";
import toast from 'react-hot-toast';

interface CopyButtonProps {
  label: string;
  text: string;
}

// This function copies text to the clipboard and shows a toast
function clickAction(text: string) {
  navigator.clipboard.writeText(text);
  toast.success('Copied to clipboard');
}

export default function CopyButton({ label, text }: CopyButtonProps) {
  return (
    <Button
      variant={"defaultBlack"}
      size={"lg"}
      className="font-mc bg-customBlack"
      onClick={() => clickAction(text)}
    >
      <span>{label}</span>
      <FaCopy />
    </Button>
  );
}
