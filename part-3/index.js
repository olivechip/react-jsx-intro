const App = () => {
    return (
        <div>
            <Person name="anakin" age={27} hobbies={["painting", "pottery", "cooking"]}/>
            <Person name="purrlgreytea" age={31} hobbies={["gaming", "animals", "puzzles"]}/>
            <Person name="bearbear" age={8} hobbies={["bullying", "thieving", "zoomies"]}/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));