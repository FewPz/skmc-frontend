import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <div className="mx-auto my-6 sm:my-8 md:my-10 w-11/12 sm:w-2/3 md:w-1/2 pt-4 pb-8 px-4 sm:px-6 bg-primary text-customBlack font-mc text-center text-4xl sm:text-5xl md:text-6xl lg:text-6xl h-fit flex items-center justify-center">
      {children}
    </div>
  );
}
