import LogInForm from "../../components/LogInForm/LogInForm";

export default function App({setUser}) {
  return (
    <main>
      <h1>Log In</h1>
      <LogInForm setUser={setUser}/>
    </main>
  );
}