import Nav from "../../components/Nav";

function MainLayout({ children, path }) {
  return (
    <>
      <Nav path={path} />
      <div>{children}</div>
    </>
  );
}

export default MainLayout;
