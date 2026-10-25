import PersonalInformation from "./components/cv/PersonalInformation"
import Summary from "./components/cv/Summary"
import Education from "./components/cv/Education"
import Experience from "./components/cv/Experience"
import Skills from "./components/cv/Skills"

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