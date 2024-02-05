const Person = (props) => {
    let vote = props.age >= 18? "Please go vote!" : "You must be at least 18!";
    let displayName = props.name.length > 8? `${props.name.slice(0,6)}` : `${props.name}`;
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person:</p>
            <h3>Name: {displayName}</h3>
            <h3>Age: {props.age} - {vote}</h3>
            <h3>
                Hobbies: <ul>{hobbies}</ul>
            </h3>
        </div>
    )
}