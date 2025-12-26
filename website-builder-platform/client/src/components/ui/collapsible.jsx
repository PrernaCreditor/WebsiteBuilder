// 1. Change your import to use an alias (CollapsiblePrimitive)
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

// 2. Now you can safely declare your local constants
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };