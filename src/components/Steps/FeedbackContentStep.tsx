import { CloseButton } from "../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";
import { ArrowLeft, Camera } from 'phosphor-react';
import { ScreenshotButton } from '../ScreenshotButton'
import { FormEvent, useState } from "react";
import { api } from "../../lib/api";
import { Loading } from "../Loading";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent
}: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState<string | null>("")
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)

    async function handleSubmitFeedback() {
        setIsSendingFeedback(true);
        await api.post("/feedbacks", {
            type: feedbackType,
            comment,
            screenshot
        })
        onFeedbackSent();
        setIsSendingFeedback(false);

    }

    return <>
        <header className="flex items-center justify-center gap-2" >
            <button

                onClick={onFeedbackRestartRequested}
                type="button" className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100">
                <ArrowLeft weight="bold" className="w-4 h-4" />
            </button>
            <feedbackTypeInfo.icon.source className="w-6 h-6" />
            <span className="text-xl leading-6">{feedbackTypeInfo.title}</span>
            <CloseButton />
        </header>
        <form
            onSubmit={(e: FormEvent) => {
                e.preventDefault()
                handleSubmitFeedback()
            }
            }
            className="my-4 w-full">
            <textarea
                onChange={(e) => {
                    setComment(e.target.value)
                }}
                className=" w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border border-zinc-100 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring resize-none outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-thin"
                placeholder="Tell us more about it..."
            />
            <footer className="flex gap-2 mt-2">
                <ScreenshotButton
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot}
                />
                <button
                    disabled={comment?.trim().length === 0 || isSendingFeedback}
                    type="submit"
                    className="disabled:opacity-5 disabled:hover:bg-brand-500 transition-all p-3 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-300"
                >
                    {isSendingFeedback ? <Loading /> : "Send"}
                </button>

            </footer>

        </form>
    </>
}

export default FeedbackContentStep