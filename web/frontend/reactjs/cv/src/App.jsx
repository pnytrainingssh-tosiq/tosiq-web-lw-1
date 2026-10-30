import PersonalInformation from "./components/cv/PersonalInformation"
import Summary from "./components/cv/Summary"
import Education from "./components/cv/Education"
import Experience from "./components/cv/Experience"
import Skills from "./components/cv/Skills"
import DashboardItem from "./components/DashboardItem"

function App() {
  return (
    <div>
      {/* <PersonalInformation />
      <Summary />
      <Education />
      <Experience />
      <Skills /> */}

      <div className="m-5 grid grid-cols-12 gap-3">
        <div className="col-span-3">
          <DashboardItem text="Total Leads" value="32932" />
        </div>
        <div className="col-span-3">
          <DashboardItem text="Total Clients" value="123" />
        </div>
        <div className="col-span-3">
          <DashboardItem text="Total Profit" value="63%" />
        </div>
        <div className="col-span-3">
          <DashboardItem text="Total Users" value="9932" />
        </div>

        <div className="col-span-6">
          <DashboardItem text="My leads graph" value="Decreasing day by day" />
        </div>
        <div className="col-span-6">
          <DashboardItem text="Total trafic" value="90211 per day" />
        </div>
      </div>
    </div>
  )
}

export default App