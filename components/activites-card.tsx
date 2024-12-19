import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface ActivityProps {
    avatar: string;
    activity: string;
    company: string;
    amount: string;
    timeline: string;
    action: string;
}

export function Activity({ avatar, activity, action, company, amount, timeline }: ActivityProps) {
    return (
        <div className="shadow-md border rounded-xl px-4 py-4 mb-3">
            <div className="flex gap-2">
                <Avatar className="h-8 w-8">
                    <AvatarImage src={avatar} alt={company} />
                    <AvatarFallback>{company[0]}</AvatarFallback>
                </Avatar>

                <div>
                    <p className="text-sm font-semibold">{activity}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {company} • {amount} • {timeline}
                    </p>
                </div>
            </div>
            <div className="mt-2 bg-gray-100 rounded-lg px-3 py-2">
                <p className="mt-1 text-sm text-black dark:text-neutral-400">{action}</p>
            </div>
        </div>
    )
}