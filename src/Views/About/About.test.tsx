import { render } from "@testing-library/react";
import About from "./index";

test("Testeo que la pagina de about, tenga el nombre de Marlen", () => {
  //tengo que renderizar el componente que voy a testear
  const renderizado = render(<About />);

  renderizado.getByText(
    "Soy Marlén. Diseñadora y creadora del mundo mágico de Pancheta."
  );
});
