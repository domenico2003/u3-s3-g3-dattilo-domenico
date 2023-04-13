import { Result } from "../interfaces";
import { Card } from "react-bootstrap";

interface ICardPrincipaleProps {
  articolo: Result;
}

const CardPrincipale = ({ articolo }: ICardPrincipaleProps) => {
  return (
    <>
      <Card className="my-4">
        <Card.Img
          variant="top"
          className="img-art-primary"
          src={articolo.image_url}
        />
        <Card.Body>
          <Card.Title>{articolo.title}</Card.Title>
          <Card.Text>{articolo.summary}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <div>
            <span className="d-block mb-2">
              {" "}
              Created at:{" "}
              <strong>
                {new Date(articolo.published_at).toLocaleString()}
              </strong>
            </span>
            <span>
              Updated at:{" "}
              <strong>{new Date(articolo.updated_at).toLocaleString()}</strong>
            </span>
          </div>
          <a href={articolo.url}>{articolo.news_site}</a>
        </Card.Footer>
      </Card>
    </>
  );
};
export default CardPrincipale;
