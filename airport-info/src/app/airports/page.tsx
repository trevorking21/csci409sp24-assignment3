// Import the necessary modules from Next.js
import Link from 'next/link';

function AirportsPage() {
  // Array containing airport data for each airport
  const airports = [
    { id: 1, code: 'ATL', name: 'Hartsfield-Jackson Atlanta International Airport', state: 'Georgia' },
    { id: 2, code: 'LAX', name: 'Los Angeles International Airport', state: 'California' },
    { id: 3, code: 'ORD', name: 'O\'Hare International Airport', state: 'Illinois' },
    { id: 4, code: 'DFW', name: 'Dallas/Fort Worth International Airport', state: 'Texas' },
    { id: 5, code: 'DEN', name: 'Denver International Airport', state: 'Colorado' }
  ];

  return (
    <div>
      <h1>Airports Information</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport) => (
            <tr key={airport.id}>
              <td>
                <Link href={`/airports/${airport.id}`}>
                    {airport.code}
                </Link>
              </td>
              <td>{airport.name}</td>
              <td>{airport.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AirportsPage;