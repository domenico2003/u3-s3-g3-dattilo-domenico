import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Result } from "../interfaces";
import Main from "./Main";
import Aside from "./Aside";

const Home = () => {
  const [articles, setArticles] = useState<Result[]>([]);
  const [articlesMain, setArticlesMain] = useState<Result[]>([]);
  const [articlesAside, setArticlesAside] = useState<Result[]>([]);
  const [firstArticle, setFirstArticle] = useState<Result | null>(null);

  const URL = "https://api.spaceflightnewsapi.net/v4/articles/?limit=16";

  useEffect(() => {
    newsFatch();
  }, []);
  useEffect(() => {
    if (articles.length > 0) {
      SplitArticles();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles]);

  let newsFatch = async () => {
    try {
      let risposta = await fetch(URL);
      if (risposta.ok) {
        let dato = await risposta.json();

        setArticles(dato.results);
        setFirstArticle(dato.results[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const SplitArticles = () => {
    let Main = articles.filter((_, index) => index <= 5);
    let Aside = articles.filter((_, index) => index > 5);
    setArticlesMain(Main);
    setArticlesAside(Aside);
  };

  return (
    <Container fluid>
      <Row xs={1} md={2} className="my-5">
        <Col md={9}>
          <Main articlesMain={articlesMain} firstArticle={firstArticle} />
        </Col>
        <Col md={3}>
          <h2 className="mb-4">Altri articoli:</h2>
          <Aside articlesAside={articlesAside} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
