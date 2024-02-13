function Button({ colour, click = "red" }) {
  //const [color, setcolor] = useState("olive");
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: colour }}
      onClick={click}
    >
      {colour}
    </button>
  );
}

export default Button;
