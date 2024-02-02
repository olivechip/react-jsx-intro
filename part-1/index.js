const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Oliver"/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));