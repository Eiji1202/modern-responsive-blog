import { Articles } from "./components/Articles";
import { ContactForm } from "./components/ContactForm";
import { ProfileOverView } from "./components/ProfileOverView";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";

export default function Home() {
  return (
    <>
      <ProfileOverView />
      <Projects />
      <Skills />
      <WorkExperience />
      <Articles />
      <ContactForm />
    </>
  );
}
