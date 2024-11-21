import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";

import { Header } from "../../components/Header";

import { Section } from "../../components/Section";

import { ButtonText } from "../../components/ButtonText";

import { Tag } from "../../components/Tag";

export function Details(){
  return(
    <Container>
    <Header />

    <main>
      <Content>

        <ButtonText title={"Excluir nota"} />

        <h1>
          Introdução ao React
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nesciunt autem eius iure, ullam ad. Consequatur maxime sint sequi distinctio commodi, nam sapiente tempore nobis hic, modi temporibus iusto ducimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nesciunt autem eius iure, ullam ad. Consequatur maxime sint sequi distinctio commodi, nam sapiente tempore nobis hic, modi temporibus iusto ducimus.
        </p>

        <Section title="Links úteis">
          <Links>
          <li>
          <a href="#">https://rocketseat.com.br</a>
          </li>
          <li>
          <a href="#">https://rocketseat.com.br</a>
          </li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title={"express"} />
          <Tag title={"nodejs"} />

    

        </Section>

        <Button title="Voltar" />

    </Content>
    </main>

    </Container>
    
  )
}