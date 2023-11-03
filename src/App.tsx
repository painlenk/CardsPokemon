import { useEffect, useState } from "react";
import { IPokemon } from "./types/IPokemon";
import { Card } from "./components/card";
import { Header } from "./components/Header";
import { Container, Section } from "./styles";

function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>();

  useEffect(() => {
    const getPokes = async () => {
      const request = await fetch(
        "https://6283929f92a6a5e462260498.mockapi.io/pokemon"
      );

      if (!request) {
        setPokemons([]);
        return;
      }
      const data: IPokemon[] = await request.json();

      setPokemons(data);
    };

    getPokes();
  }, []);

  if (!pokemons) {
    return;
  }

  return (
    <Container>
      <Header>
        <div>
          <p>Cards para projeto Italents</p>
          <p>
            Api usada:{" "}
            <a href="https://6283929f92a6a5e462260498.mockapi.io/pokemon">
              mockapi.io/pokemon
            </a>
          </p>
        </div>
      </Header>
      <main>
        <Section>
          {pokemons.map((item) => {
            return <Card pokemon={item} key={item.id} />;
          })}
        </Section>
      </main>
    </Container>
  );
}

export default App;
