import { Result } from "../interfaces";
import { Row, Col, Card } from "react-bootstrap";

interface IMainSecondaryProps {
  articles: Result[];
  setArticleSelected: (p: Result) => void;
}

const MainSecondary = ({
  articles,
  setArticleSelected,
}: IMainSecondaryProps) => {
  return (
    <>
      <Row xs={1} sm={2} md={3} xl={6}>
        {articles.map((article) => {
          return (
            <>
              <Col className="mb-4" key={article.id}>
                <Card
                  onClick={() => {
                    setArticleSelected(article);
                  }}
                  className="card-secondary"
                >
                  <Card.Img
                    variant="top"
                    src={article.image_url}
                    className="img-art-secondary"
                  />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};

export default MainSecondary;
