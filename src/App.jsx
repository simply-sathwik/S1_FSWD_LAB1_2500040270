import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const buses = [
    {
      id: 1,
      number: "BUS-101",
      route: "Vijayawada → Guntur",
      driver: "Ravi Kumar",
      departure: "08:30 AM",
    },
    {
      id: 2,
      number: "BUS-102",
      route: "Vijayawada → Tenali",
      driver: "Suresh Reddy",
      departure: "09:00 AM",
    },
    {
      id: 3,
      number: "BUS-103",
      route: "Guntur → Amaravati",
      driver: "Kiran Kumar",
      departure: "10:15 AM",
    },
    {
      id: 4,
      number: "BUS-104",
      route: "Vijayawada → Hyderabad",
      driver: "Prasad Rao",
      departure: "11:30 AM",
    },
  ];

  const filteredBuses = buses.filter((bus) =>
    Object.values(bus)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>🚌 BusTrack</h1>
          <p>Bus Information System</p>
        </div>
      </header>

      <main className="container">
        <h2>Bus Schedule Dashboard</h2>

        <p className="subtitle">
          View bus routes, driver names, and departure timings.
        </p>

        <section className="stats">
          <div className="stat-card">
            <h3>{buses.length}</h3>
            <p>Total Buses</p>
          </div>

          <div className="stat-card">
            <h3>
              {new Set(buses.map((bus) => bus.driver)).size}
            </h3>
            <p>Total Drivers</p>
          </div>

          <div className="stat-card">
            <h3>
              {new Set(buses.map((bus) => bus.route)).size}
            </h3>
            <p>Total Routes</p>
          </div>
        </section>

        <section className="bus-section">
          <h2>Available Buses</h2>

          <input
            className="search"
            type="text"
            placeholder="Search bus, route, or driver..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Bus Number</th>
                  <th>Route</th>
                  <th>Driver Name</th>
                  <th>Departure Time</th>
                </tr>
              </thead>

              <tbody>
                {filteredBuses.length > 0 ? (
                  filteredBuses.map((bus) => (
                    <tr key={bus.id}>
                      <td>{bus.number}</td>
                      <td>{bus.route}</td>
                      <td>{bus.driver}</td>
                      <td>{bus.departure}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="empty">
                      No buses found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <footer>
          BusTrack © 2026 | Built with React
        </footer>
      </main>
    </div>
  );
}

export default App;