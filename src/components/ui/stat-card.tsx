import React from 'react'
import { Card, CardContent } from './card';
import { Separator } from '@radix-ui/react-separator';
import { cn } from '@/lib/utils';

type StatCardVariant = '1' | '2';

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    value: string | number;
    iconColor?: string
}


const StatCard = ({ title, value, iconColor = "bg-stone-200", className, ...rest }: StatCardProps) => {

    return (
        <Card 
            className={cn( 
                'p-0',
                className
            )}
        {...rest}
        >
            <CardContent className="h-full p-6">
                <div className="flex h-full">
                    <div className="basis-3/5">
                        <h1 className="text-lg font-bold uppercase text-stone-500">{title}</h1>
                        <h2 className="text-2xl font-bold text-stone-800">{value}</h2>
                    </div>
                    <div className="basis-2/5 flex flex-col gap-5 items-end">
                        <div className={`w-15 h-15 rounded-full ${iconColor}`}>

                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export { StatCard };