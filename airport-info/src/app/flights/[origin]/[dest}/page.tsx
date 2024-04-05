export default function FlightSearchPage({ params }: { params: { origin: string, dest: string } }) {
    const { origin, dest } = params;

    return (
        <div>Searching for flights from {origin} to {dest}</div>
    );
}