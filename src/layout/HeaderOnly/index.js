import Header from "~/layout/conmponents/Header";

export default function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
