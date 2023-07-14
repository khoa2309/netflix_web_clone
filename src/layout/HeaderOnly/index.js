import Header from "~/layout/conmponents/Header";

export default function HeaderOnly({ children, path }) {
  return (
    <>
      <Header path={path} />
      {children}
    </>
  );
}
