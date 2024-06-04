import Fruits from "./Components/Fruits";
import Hello from "./Components/Hello";

function App() {
  const person = {
    name: "Agbavi",
    message: "I dey hail boss",
    emoji: "🙌",
    seatNumber: [16, 18, 2],
  };
  return (
    <div>
      <Hello name="Tommy" message="Hello" emoji="👋" />
      <Hello {...person} />
      <Fruits />
    </div>
  );
}

export default App;
