import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";
export function Widget() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)
    function toggleWidgetVisibility() {
        setIsWidgetOpen(prev => !prev)
    }
    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-center">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
            <Popover.Button
                onClick={toggleWidgetVisibility}
                className="group flex items-center bg-brand-500 px-3 h-12 rounded-full text-white transition-all duration-300">
                <ChatTeardropDots className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500">
                    <span className="pl-2">
                        Feedback
                    </span>
                </span>
            </Popover.Button>
        </Popover>

    )

}