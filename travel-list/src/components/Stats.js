export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding something to your packing list🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          You have {numItems} items on your list, and you already packed{" "}
          {numPacked}({percentage}%)
        </em>
      ) : (
        <em>You got everything! Ready to go✈️</em>
      )}
    </footer>
  );
}
