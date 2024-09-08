import { redirect } from "react-router-dom";
import LogedIn from "../data/LogedIn";

export const requireAuth = () => {
  const { logedIn } = LogedIn();
  console.log("entered auth..  ", logedIn);
  if (!logedIn) {
    return redirect("/logIn"); // Redirect if not authenticated
  }

  return true; // If authenticated, no redirection
};
