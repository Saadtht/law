import Footer from "../footer";
import Header from "../header";

const Component = ({
  component: Component,
  protect,
  parts,
  footer = true,
  ads,
  showheader,
  showfooter,
  ...rest
}) => {

  const RenderComponent = (props) => {
    return (
      <>
        <Component {...props} />
      </>
    );
  };

  return (
    <>
      {showheader && <Header />}
      <RenderComponent {...rest} />
      {showfooter && <Footer />}
    </>
  );
};

export default Component;