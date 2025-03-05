
import { useState } from "react"
import Head from "./head"
import Menu from "./menu"
import "./dispatche.css"

export function Dispatche() {
  const [agencyCounter, setAgencyCounter] = useState(1)
  const [rows, setRows] = useState([])

  const handleAddAgency = () => {
    const newAgencyNumber = String(agencyCounter).padStart(2, "0")
    const newAgency = `CEM ${newAgencyNumber}`
    const newRow = {
      designation: "",
      quantity: "0",
      date: new Date().toLocaleDateString(),
      agency: newAgency,
      consumption: "",
    }
    setRows([...rows, newRow])
    setAgencyCounter(agencyCounter + 1)
  }

  const handleDesignationChange = (index, value) => {
    const updatedRows = [...rows]
    updatedRows[index].designation = value
    setRows(updatedRows)
  }

  const handleConsumptionChange = (index, value) => {
    const updatedRows = [...rows]
    updatedRows[index].consumption = value
    setRows(updatedRows)
  }

  return (
    <div className="agency-management">
      <Head/>
      <Menu/>
      <div className="agency-form">
        <h3>Ajouter agence</h3>
        <button onClick={handleAddAgency}>Ajouter</button>
      </div>

      <table className="agency-table">
        <thead>
          <tr>
            <th>designations</th>
            <th>quantite disponibles</th>
            <th>date reel</th>
            <th>consommations des agences</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.designation}
                  onChange={(e) => handleDesignationChange(index, e.target.value)}
                  className="designation-input"
                />
              </td>
              <td>{row.quantity}</td>
              <td>{row.date}</td>
              <td>
                <div>{row.agency}</div>
                <input
                  type="text"
                  value={row.consumption}
                  onChange={(e) => handleConsumptionChange(index, e.target.value)}
                  className="consumption-input"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



