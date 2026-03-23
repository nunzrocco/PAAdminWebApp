import * as React from 'react';

interface SummaryItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string | number;
    description: string;
}

const SummaryItem = React.forwardRef<
    HTMLDivElement,
    SummaryItemProps
>(({ className, value, description, ...props }, ref) => (
    <div className="text-center" ref={ref} {...props}>
        <h1 className="text-2xl font-bold">{value}</h1>
        <h4 className="text-sm text-gray-500">{description}</h4>
    </div>
))
SummaryItem.displayName = "SummaryItem";

export {
    SummaryItem
}