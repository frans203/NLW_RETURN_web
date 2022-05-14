import { Bug, Lightbulb, Question } from "phosphor-react";
import { useState } from "react";
import FeedbackTypeStep from "../Steps/FeedbackTypeStep";
import FeedbackContentStep from "../Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "../Steps/FeedbackSucessStep";
export const feedbackTypes = {
    BUG: {
        title: "Problem",
        icon: {
            source: Bug,
            alt: 'bug'
        }
    },
    IDEA: {
        title: "Idea",
        icon: {
            source: Lightbulb,
            alt: 'idea'
        }
    },
    OTHER: {
        title: "Other",
        icon: {
            source: Question,
            alt: 'Interrogation'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState<Boolean | null>(false)

    function handleRestartFeedback() {
        setFeedbackType(null)
        setFeedbackSent(false)
    }
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ?
                        <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType} />
                        : (
                            <FeedbackContentStep
                                onFeedbackRestartRequested={handleRestartFeedback}
                                feedbackType={feedbackType}
                                onFeedbackSent={() => setFeedbackSent(true)}
                            />
                        )}
                </>
            )}



            <footer className="text-xs text-neutral-400">
                Made With love by <a
                    className="text-purple-600 underline underline-offset-2"
                    href="https://www.fsdev.site">Santana</a>
            </footer>
        </div>
    )
}

