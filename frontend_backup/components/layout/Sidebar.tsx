"use client";

import {
    LayoutDashboard,
    Newspaper,
    Clock3,
    BrainCircuit,
    Settings
} from "lucide-react";

const menu = [
    {
        icon: LayoutDashboard,
        title: "Dashboard"
    },
    {
        icon: Newspaper,
        title: "News"
    },
    {
        icon: Clock3,
        title: "Timeline"
    },
    {
        icon: BrainCircuit,
        title: "Clusters"
    },
    {
        icon: Settings,
        title: "Settings"
    }
];

export default function Sidebar() {
    return (
        <aside className="w-72 border-r border-white/10 bg-white/5 backdrop-blur-xl">

            <div className="p-8">

                <div className="text-4xl mb-10">

                    🌍

                </div>

                <nav className="space-y-4">

                    {menu.map((item) => {

                        const Icon = item.icon;

                        return (

                            <button
                                key={item.title}
                                className="flex w-full items-center gap-4 rounded-xl p-4 transition hover:bg-cyan-500/20"
                            >

                                <Icon size={22} />

                                <span>{item.title}</span>

                            </button>

                        );

                    })}

                </nav>

            </div>

        </aside>
    );
}