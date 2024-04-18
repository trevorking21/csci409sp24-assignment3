// Import necessary modules from Next.js
import Head from 'next/head'
import Link from 'next/link';

function FlightsPage() {
  // Array containing flight data
  const flights = [
    { id: 1, number: 'DL123', destination: 'New York', origin: 'Atlanta', departureTime: '10:00 AM' },
    { id: 2, number: 'AA456', destination: 'Los Angeles', origin: 'Chicago', departureTime: '12:00 PM' },
    { id: 3, number: 'UA789', destination: 'San Francisco', origin: 'Houston', departureTime: '3:00 PM' },
    { id: 4, number: 'SW123', destination: 'Las Vegas', origin: 'Denver', departureTime: '5:00 PM' },
    { id: 5, number: 'FR456', destination: 'Miami', origin: 'Orlando', departureTime: '8:00 PM' }
  ];

  return (
    <div>
      <h1>Flights Information</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>
                <Link href={`/flights/${flight.id}`}>
                  <a>{flight.number}</a>
                </Link>
              </td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.departureTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightsPage;