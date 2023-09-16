import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";

const Card = styled.div`transform: rotateZ(-2deg);`;
const Content = styled.div`
  background: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  margin: 40px 0;
  position: relative;
  top: -40px;
  left: -10px;
`;
const Info = styled.div`padding: 5px;`;
const InfoH4 = styled.h4`
  margin: 2px 0;
  text-transform: uppercase;
`;
const Actions = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;
const ActionsA = styled.a`
  color: #fff;
  background: #f01b29;
  padding: 16px 24px;
  text-decoration: none;
`;

export default function CaseCard({ study }) {
  const { title, slug, thumbnail } = study.fields;
  return (
    <Card>
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <Content>
        <Info>
          <InfoH4>{title}</InfoH4>
        </Info>
        <Actions>
          <Link href={"/designs/" + slug} passHref>
            <ActionsA>view case study</ActionsA>
          </Link>
        </Actions>
      </Content>
    </Card>
  );
}
