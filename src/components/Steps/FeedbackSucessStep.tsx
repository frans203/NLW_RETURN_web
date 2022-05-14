import { CloseButton } from "../CloseButton";
import { Check } from "phosphor-react";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep(
    { onFeedbackRestartRequested }: FeedbackSuccessStepProps) {

    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <Check className="w-12 h-12" fill="fill" />
            </div>

            <span className="text-xl mt-2">
                Thank you for your feedback!
            </span>

            <button
                type="button"
                onClick={onFeedbackRestartRequested}
                className="mb-2 py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:border-brand-500 focus:ring-brand-500 focus:ring ">
                Send another
            </button>

        </>
    )
}

