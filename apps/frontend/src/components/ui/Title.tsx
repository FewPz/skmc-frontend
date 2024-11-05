import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <div className="mx-auto my-6 sm:my-8 md:my-10 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 py-4 px-4 sm:px-6 bg-primary text-customBlack font-mc text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl h-fit">
      {children}
    </div>
  );
}
