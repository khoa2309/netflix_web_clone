import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [user, navigate]);
  return <div>Home Page</div>;
}
