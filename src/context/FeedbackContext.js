import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        edit: false,
        item: {}
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = (uuidv4())
        setFeedback([newFeedback, ...feedback])
        // console.log(typeof newFeedback.id)
    }

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter(item => item.id !== id))
        // console.log(id);
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => item.id === id ? { ...item, ...updItem } : item)
        )
        setFeedbackEdit({
            edit: false,
            item: {}
        })
    }
    const editFeedback = (item) => {
        setFeedbackEdit({
            edit: true,
            item: item,
        })
        // console.log(item);
    }
    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext