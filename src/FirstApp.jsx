const getNombre = () => "Alex Alvarez Marambio";

export const FirstApp = ({ title = getNombre(), subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
};
