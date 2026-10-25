import Education from "./components/cv/Education"
import Experience from "./components/cv/Experience"
import PersonalInformation from "./components/cv/PersonalInformation"
import Skills from "./components/cv/Skills"
import Summary from "./components/cv/Summary"

function App() {
  return (
    <div>
      <PersonalInformation />
      <Summary />
      <Education />
      <Experience />
      <Skills />
    </div>
  )
}

export default App