
const Component = ({
  component: Component,
  protect,
  parts,
  footer = true,
  ads,
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
      <RenderComponent {...rest} />
    </>
  );
};

export default Component;