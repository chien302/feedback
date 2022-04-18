import { useState, useEffect } from 'react'
import Card from './share/Card'
import Button from './share/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    // console.log(feedbackEdit);
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])
    const handleTextChange = (e) => {

        if (e.target.value === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (e.target.value !== '' && e.target.value.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('sdf')
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            // console.log(newFeedback)
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }


            setBtnDisabled(true)
            setRating(10)
            setText('')

        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Rating?</h2>
                <RatingSelect select={setRating} />
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled} >{
                        feedbackEdit.edit === true ? 'Edit' : 'Save'
                    }</Button>
                </div>
                {message && <div className={message}>{message}</div>}
            </form>
        </Card>
    )

}
export default FeedbackForm