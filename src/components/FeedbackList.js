import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import FeedbackContext from '../context/FeedbackContext'
// import PropTypes from 'prop-types'

function FeedbackList({ handleDelete }) {
    const { feedback } = useContext(FeedbackContext)

    // console.log(feedback);

    if (!feedback || feedback.length === 0) {
        return (
            <p>No feedback</p>
        )
    }
    // console.log(feedback);
    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,

//         })
//     )
// }
export default FeedbackList