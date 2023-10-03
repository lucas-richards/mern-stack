import {Link} from "react-router-dom"
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function App({setUser}) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser}/>
      <Link to="/login">Log In</Link>
    </main>
  );
}