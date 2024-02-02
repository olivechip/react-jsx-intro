const App = () => {
    return (
        <Tweet 
            username="tweeter123" 
            name="Olive McTweet" 
            date="2/2/24" 
            message="This is my first tweet!" 
        />
    );
};

ReactDOM.render(<App />, document.getElementById("root"));