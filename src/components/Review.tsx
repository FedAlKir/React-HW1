export interface ReviewProps{
    id: string;
    user: string;
    text: string;
    rating: Number;
}

export const Review: React.FC<ReviewProps> = ({user, text, rating}) => {
    return (
        <div>
            <h5>{`User: ${user}`}</h5>
            <p>{text}</p>
            <h6>{`Rating: ${rating}`}</h6>
        </div>
    )
}