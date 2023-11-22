import "./App.css";
import Card from "./Card";
import details from "./data/details";

function App() {
  return (
    <>
      <div className="grid">
        {details.map((detail) => {
          return (
            <Card
              key={detail.key}
              src={detail.imgURL}
              heading={detail.title}
              paragraph={detail.content}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
