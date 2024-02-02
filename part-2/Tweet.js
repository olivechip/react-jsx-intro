const Tweet = (props) => {
    return (
        <div>
            <p>{props.username} - {props.name} - {props.date}</p>
            <p>{props.message}</p>
        </div>
    );
};