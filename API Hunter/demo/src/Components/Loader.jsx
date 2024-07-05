function Loader() {
    const loadingText = "Loading.......";
    return (
      <div className="loader-container" data-testid="loading-container">
        {loadingText.split("").map((char, index) => (
          <span key={index} className="loader-letter" style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </span>
        ))}
      </div>
    );
  }
  
  export default Loader;