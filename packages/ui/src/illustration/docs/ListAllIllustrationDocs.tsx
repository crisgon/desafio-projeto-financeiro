import { Illustration } from "..";
import { illustrationsMapped } from "../illustrationMapped";
import { Container } from "./styles";

type IllustrationType = keyof typeof illustrationsMapped;

export const ListAllIllustrationsDocs = () => {
  const listAll = Object.keys(illustrationsMapped).map(
    (name) => name as IllustrationType
  );

  return (
    <Container>
      {listAll.map((name) => (
        <li key={String(name)}>
          <div>
            <Illustration name={name} />
          </div>

          <span>{name}</span>
        </li>
      ))}
    </Container>
  );
};
