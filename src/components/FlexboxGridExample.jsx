import "./FlexboxGridExample.css";

export default function FlexboxGridExample() {
  return (
    <section>
      <h2>Flexbox y Grid</h2>
      <div className="flex-container">
        <div>1</div><div>2</div><div>3</div>
      </div>
      <div className="grid-container">
        <div>A</div><div>B</div><div>C</div><div>D</div>
      </div>
    </section>
  );
}
