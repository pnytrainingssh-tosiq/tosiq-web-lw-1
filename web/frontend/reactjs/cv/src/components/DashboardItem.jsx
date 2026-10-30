function DashboardItem ({ text, value }) {
    return (
        <div className="shadow rounded p-5">
            <div className="text-[11px] text-gray-500">{text}</div>
            <div className="font-bold text-[28px]"> {value} </div>
          </div>
    )
}

export default DashboardItem