import { Container, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand>
            <img
              alt=""
              src="https://clipart.coolclips.com/480/vectors/tf05035/CoolClips_busi0376.png"
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{" "}
            EpiNews
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
