import './SuggestedQuestions.css'

const SuggestedQuestions = () => {
    return (
        <aside>
            <h2 className="questions-header">
                Questions to ask about your new user:
            </h2>
            <ul className="questions-list">
                <li>What does this user do for a living?</li>
                <li>What is the user's personality like?</li>
                <li>What are their likes & dislikes?</li>
                <li>What kind of products does this person use?</li>
                <li>What might their needs be?</li>
                <li>What might their frustrations be?</li>
                <li>Are they tech saavy?</li>
                <li>What are their habits surrounding technology?</li>
            </ul>
        </aside>
    )
}

export default SuggestedQuestions;