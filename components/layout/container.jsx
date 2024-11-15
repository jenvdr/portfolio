import * as React from "react";
import { cn } from "../../lib/utils";

const Container = React.forwardRef(function Container({ children, className, id, additionalClass }, ref) {
    return (
      <div ref={ref} className={cn(`max-w-[82rem] mx-auto ${className}`)} data-id={id ?? ''}>
        <div className={cn("px-5 h-full", additionalClass)}>
            {children}
        </div>
      </div>
    );
});

export default Container;
