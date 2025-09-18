import { useMediaQuery } from 'react-responsive'

export default function UseMediaQueryExample() {
  const isSmall = useMediaQuery("(max-width:600px)");

  return (
    <section>
      <h2>useMediaQuery Hook</h2>
      <p>
        Pantalla actual:{" "}
        <strong>{isSmall ? "Chica" : "Grande"}</strong>
      </p>
    </section>
  );
}
