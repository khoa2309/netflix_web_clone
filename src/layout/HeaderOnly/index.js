import Header from "~/components/Header";

export default function HeaderOnly({ children, path }) {
  return (
    <>
      <Header path={path} />
      {children}
    </>
  );
}
