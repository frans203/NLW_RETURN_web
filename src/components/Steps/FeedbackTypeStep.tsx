import { feedbackTypes } from "../WidgetForm"
import { FeedbackType } from '../WidgetForm'
import { CloseButton } from "../CloseButton";
import { Fragment } from "react";

interface FeedbackTypeStepProps {
    onFeedBackTypeChanged: (type: FeedbackType) => void
}

function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Leave your Feedback</span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full justify-center items-center">

                {
                    Object.entries(feedbackTypes).map(([key, value]) => {


                        return <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col flex items-center gap-2 border-2 border-transparent hover:border-brand-500 transiton-all  focus:border-brand-500 focus:outline-none"
                            onClick={() => props.onFeedBackTypeChanged(key as FeedbackType)}
                            type="button"
                        >
                            <value.icon.source
                                className="w-16 h-16"
                                alt={value.icon.alt} />
                            <span>{value.title}</span>
                        </button>
                    })
                }
            </div>
        </>
    )
}

export default FeedbackTypeStep