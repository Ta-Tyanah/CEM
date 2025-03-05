import { useState } from 'react';
import Menu from "./menu";

export function Dispatche() {
  const [selectedItems, setSelectedItems] = useState({
    agences: [],
    wu: [],
    directions: []
  });

  const [tableData, setTableData] = useState([
    { id: 1, designation: "Produit 1", quantiteDisponible: 100, consommationAgences: 0, consommationWu: 0, consommationDirections: 0 },
    { id: 2, designation: "Produit 2", quantiteDisponible: 200, consommationAgences: 0, consommationWu: 0, consommationDirections: 0 },
  ]);

  const addItem = (type, name) => {
    setSelectedItems(prev => ({
      ...prev,
      [type]: [...prev[type], name]
    }));
  };

  const removeItem = (type, name) => {
    setSelectedItems(prev => ({
      ...prev,
      [type]: prev[type].filter(item => item !== name)
    }));
  };

  const updateTableData = (id, field, value) => {
    const numValue = Math.max(0, parseInt(value) || 0);
    setTableData(prev =>
      prev.map(row =>
        row.id === id ? { ...row, [field]: numValue } : row
      )
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      <Menu />
      <div style={{ flex: 1, padding: '20px', marginLeft: '200px' }}> {/* Ajustez marginLeft selon la largeur de votre menu */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ marginBottom: '15px' }}>Ajouter des éléments</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['agences', 'wu', 'directions'].map(type => (
              <div key={type} style={{ flex: 1 }}>
                <h3 style={{ marginBottom: '10px' }}>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                <input
                  type="text"
                  placeholder={`Ajouter ${type}`}
                  style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && e.target.value) {
                      addItem(type, e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {selectedItems[type].map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                      <input type="checkbox" checked onChange={() => removeItem(type, item)} />
                      <span style={{ marginLeft: '5px' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Désignations</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Quantité disponible</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Consommations agences</th>
                {selectedItems.agences.map(agence => (
                  <th key={agence} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>{agence}</th>
                ))}
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Consommations wu</th>
                {selectedItems.wu.map(wu => (
                  <th key={wu} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>{wu}</th>
                ))}
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Consommations des directions</th>
                {selectedItems.directions.map(direction => (
                  <th key={direction} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>{direction}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map(row => (
                <tr key={row.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.designation}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <input
                      type="number"
                      min="0"
                      value={row.quantiteDisponible}
                      onChange={(e) => updateTableData(row.id, 'quantiteDisponible', e.target.value)}
                      style={{ width: '100%', padding: '5px' }}
                    />
                  </td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <input
                      type="number"
                      min="0"
                      value={row.consommationAgences}
                      onChange={(e) => updateTableData(row.id, 'consommationAgences', e.target.value)}
                      style={{ width: '100%', padding: '5px' }}
                    />
                  </td>
                  {selectedItems.agences.map(agence => (
                    <td key={agence} style={{ border: '1px solid #ddd', padding: '8px' }}>
                      <input
                        type="number"
                        min="0"
                        value={row[agence] || 0}
                        onChange={(e) => updateTableData(row.id, agence, e.target.value)}
                        style={{ width: '100%', padding: '5px' }}
                      />
                    </td>
                  ))}
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <input
                      type="number"
                      min="0"
                      value={row.consommationWu}
                      onChange={(e) => updateTableData(row.id, 'consommationWu', e.target.value)}
                      style={{ width: '100%', padding: '5px' }}
                    />
                  </td>
                  {selectedItems.wu.map(wu => (
                    <td key={wu} style={{ border: '1px solid #ddd', padding: '8px' }}>
                      <input
                        type="number"
                        min="0"
                        value={row[wu] || 0}
                        onChange={(e) => updateTableData(row.id, wu, e.target.value)}
                        style={{ width: '100%', padding: '5px' }}
                      />
                    </td>
                  ))}
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <input
                      type="number"
                      min="0"
                      value={row.consommationDirections}
                      onChange={(e) => updateTableData(row.id, 'consommationDirections', e.target.value)}
                      style={{ width: '100%', padding: '5px' }}
                    />
                  </td>
                  {selectedItems.directions.map(direction => (
                    <td key={direction} style={{ border: '1px solid #ddd', padding: '8px' }}>
                      <input
                        type="number"
                        min="0"
                        value={row[direction] || 0}
                        onChange={(e) => updateTableData(row.id, direction, e.target.value)}
                        style={{ width: '100%', padding: '5px' }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
