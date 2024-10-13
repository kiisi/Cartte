import { ReactNode } from "react";
import { cn } from "../utils/cn";

interface BoxProps {
    className?: string;
    children: ReactNode
}
export default function Box({ children, className }: BoxProps){

    return (
        <div className={cn("w-full max-w-[1728px] mx-auto xl:px-[100px] lg:px-[50px] px-[20px]", className)}>
            { children }
        </div>
    )
}