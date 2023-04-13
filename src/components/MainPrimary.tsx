import { Result } from "../interfaces";
import CardPrincipale from "./CardPrincipale";

interface IMainPrimaryProps {
  article: Result | null;
  firstArticle: Result | null;
}

const MainPrimary = ({ article, firstArticle }: IMainPrimaryProps) => {
  return (
    <>
      {article ? (
        <CardPrincipale articolo={article} />
      ) : (
        firstArticle && <CardPrincipale articolo={firstArticle} />
      )}
    </>
  );
};

export default MainPrimary;
