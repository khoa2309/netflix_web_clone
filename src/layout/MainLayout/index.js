import Nav from "../conmponents/Nav";

function MainLayout({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
}

export default MainLayout;
