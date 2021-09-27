import './SuggestedQuestions.css'

const SuggestedQuestions = () => {
    return (
        <aside className="suggested-questions">
            <h3 className="questions-header">
                Questions to ask about your new user:
            </h3>
            <section className="questions-list">
                <p className='q1'>What does this user do for a living?</p>
                <p className='q2'>What is the user's personality like?</p>
                <p className='q3'>What are their likes & dislikes?</p>
                <p className='q4'>What kind of products does this person use?</p>
                <p className='q5'>What might their needs be?</p>
                <p className='q6'>What might their frustrations be?</p>
                <p className='q7'>Are they tech saavy?</p>
                <p className='q8'>What are their habits surrounding technology?</p>
            </section>
        </aside>
    )
}

export default SuggestedQuestions;