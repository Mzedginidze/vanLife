import { useState } from "react";

const LogedIn = () => {
  const [logedIn, setLogedIn] = useState(false);

  return { logedIn, setLogedIn };
};

export default LogedIn;
