import { useEffect, useState } from "react";
import { Result } from "../interfaces";
import { Row, Col } from "react-bootstrap";
import MainPrimary from "./MainPrimary";
import MainSecondary from "./MainSecondary";

interface IMainProps {
  articlesMain: Result[];
  firstArticle: Result | null;
}
const Main = ({ articlesMain, firstArticle }: IMainProps) => {
  const [articleSelected, setArticleSelected] = useState<Result | null>(null);

  return (
    <>
      <>
        <Row>
          <Col xs={12}>
            <h2 className="mb-3">Articolo in primo piano:</h2>
            <MainPrimary
              article={articleSelected}
              firstArticle={firstArticle}
            />
          </Col>
          <Col xs={12}>
            <h2 className="mb-3">Articoli che ti potrebbero piacere:</h2>
            <MainSecondary
              articles={articlesMain}
              setArticleSelected={setArticleSelected}
            />
          </Col>
        </Row>
      </>
    </>
  );
};

export default Main;
