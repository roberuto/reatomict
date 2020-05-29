import React from "react";

import { Typography } from "ui/atoms/typography/Typography";
import { Card } from "ui/molecules/card/Card";
import { Container } from "ui/template/container/Container";

import Atomium from "ui/assets/images/atomium.jpg";
import Design from "ui/assets/images/design.jpg";
import FoldingRule from "ui/assets/images/folding-rule.jpg";

export const About = () => {
  return (
    <Container>
      <Typography el="h1">About</Typography>
      <Card src={Atomium} title="atomic" titlePos="right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum
        libero hic cumque eum non. Tenetur totam est eveniet nesciunt obcaecati
        blanditiis quia aspernatur. Error corporis consequatur perspiciatis
        facilis atque.
      </Card>
      <Card src={Design} title="design" titlePos="left" textPos="left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        vitae aliquid sunt voluptatum corporis voluptatem, expedita rerum libero
        vel voluptatibus nam repudiandae omnis! Facilis, nisi! Perferendis
        laboriosam accusamus numquam praesentium.
      </Card>
      <Card src={FoldingRule} title="rulez" titlePos="right">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, quo
        maiores consectetur cum deserunt, amet nobis veniam repellat laboriosam
        minima nisi architecto illo aut. Quo, odio nesciunt! Esse, distinctio
        numquam.
      </Card>
    </Container>
  );
};
