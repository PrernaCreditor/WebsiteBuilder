import * as React from "react";
import * as ResizablePrimitive from "re-resizable";
import PropTypes from 'prop-types';
import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({
  className,
  children,
  direction = "horizontal",
  ...props
}) => (
  <ResizablePrimitive.Resizable
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    enable={{
      top: false,
      right: direction === "horizontal",
      bottom: direction === "vertical",
      left: false,
      topRight: false,
      bottomRight: direction === "horizontal",
      bottomLeft: false,
      topLeft: false,
    }}
    {...props}
  >
    {children}
  </ResizablePrimitive.Resizable>
);

ResizablePanelGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
};

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => (
  <ResizablePrimitive.ResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-2.5 w-2.5"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </div>
  </ResizablePrimitive.ResizeHandle>
);

ResizableHandle.propTypes = {
  withHandle: PropTypes.bool,
  className: PropTypes.string,
};

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
