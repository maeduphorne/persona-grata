import './SuggestedQuestions.css'

const SuggestedQuestions = () => {
    return (
        <aside className="suggested-questions">
            <h3 className="questions-header">
                Questions to ask about your new user:
            </h3>
            <ul className="questions-list">
                <li className='q1'>What does this user do for a living?</li>
                <li className='q2'>What is the user's personality like?</li>
                <li className='q3'>What are their likes & dislikes?</li>
                <li className='q4'>What kind of products does this person use?</li>
                <li className='q5'>What might their needs be?</li>
                <li className='q6'>What might their frustrations be?</li>
                <li className='q7'>Are they tech saavy?</li>
                <li className='q8'>What are their habits surrounding technology?</li>
            </ul>
        </aside>
    )
}

export default SuggestedQuestions;