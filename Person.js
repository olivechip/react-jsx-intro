const Person = (props) => {
    let vote = props.age >= 18? "Please go vote!" : "You must be at least 18!";

    return (
        <div>
            <p>Learn some information about this person:</p>
            <h3>{vote}</h3>
        </div>
    )
}