import FeaturedInfo from "../../components/featuredInfo/featuredInfo"
import Chart from "../../components/chart/chart"
import userChartData from "../../data/dummyData"
import WidgetSm from "../../components/widgetSm/widgetSm"
import WidgetLg from "../../components/widgetLg/widgetLg"
import "./home.css"

export default function home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userChartData} dataKey="User Accounts" title={"User Analistics"} grid={true} />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
