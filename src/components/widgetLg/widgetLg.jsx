import "./widgetLg.css"

export default function widgetLg() {
  const Button = ({ type }) => {
    return (
      <button className={"widgetLgStatusButton " + type}>{type}</button>
    )
  }
  return (
    <div className="widgetLg">
      <h3>Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgUserImg" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <span className="widgetLgUserTitle">Susan Carol</span>
          </td>
          <td className="widgetLgDate">
            <span>2 Jun 2021</span>
          </td>
          <td className="widgetLgAmount">
            <span>$122.00</span>
          </td>
          <td className="widgetLgStatus">
            <Button type={"Approved"} />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgUserImg" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <span className="widgetLgUserTitle">Susan Carol</span>
          </td>
          <td className="widgetLgDate">
            <span>2 Jun 2021</span>
          </td>
          <td className="widgetLgAmount">
            <span>$122.00</span>
          </td>
          <td className="widgetLgStatus">
            <Button type={"Approved"} />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgUserImg" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <span className="widgetLgUserTitle">Susan Carol</span>
          </td>
          <td className="widgetLgDate">
            <span>2 Jun 2021</span>
          </td>
          <td className="widgetLgAmount">
            <span>$122.00</span>
          </td>
          <td className="widgetLgStatus">
            <Button type={"Pending"} />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgUserImg" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <span className="widgetLgUserTitle">Susan Carol</span>
          </td>
          <td className="widgetLgDate">
            <span>2 Jun 2021</span>
          </td>
          <td className="widgetLgAmount">
            <span>$122.00</span>
          </td>
          <td className="widgetLgStatus">
            <Button type={"Approved"} />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgUserImg" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <span className="widgetLgUserTitle">Susan Carol</span>
          </td>
          <td className="widgetLgDate">
            <span>2 Jun 2021</span>
          </td>
          <td className="widgetLgAmount">
            <span>$122.00</span>
          </td>
          <td className="widgetLgStatus">
            <Button type={"Declined"} />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgUserImg" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <span className="widgetLgUserTitle">Susan Carol</span>
          </td>
          <td className="widgetLgDate">
            <span>2 Jun 2021</span>
          </td>
          <td className="widgetLgAmount">
            <span>$122.00</span>
          </td>
          <td className="widgetLgStatus">
            <Button type={"Approved"} />
          </td>
        </tr>
      </table>
    </div>
  )
}
