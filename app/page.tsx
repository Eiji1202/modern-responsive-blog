import { ProfileOverView } from "./components/ProfileOverView";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <>
      <ProfileOverView />
      <Projects />
      <Skills />
    </>
  );
}
