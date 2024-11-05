import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <div className="mx-auto my-10 w-1/3 py-4 bg-primary text-customBlack font-mc text-center text-7xl h-fit">
      {children}
    </div>
  );
}
