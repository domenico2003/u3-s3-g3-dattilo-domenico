import { Result } from "../interfaces";

interface IAsideProps {
  articlesAside: Result[];
}

const Aside = ({ articlesAside }: IAsideProps) => {
  return (
    <>
      {articlesAside.map((articolo) => {
        return (
          <>
            <h6
              className="my-4 text-center border border-2 border-dark py-4 rounded-5"
              key={articolo.id}
            >
              {articolo.title}
            </h6>
          </>
        );
      })}
    </>
  );
};

export default Aside;
