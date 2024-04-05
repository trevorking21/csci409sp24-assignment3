export default function FlightPage({ params }: { params: { id: string} }) {
    return (
        <div>Hello From Flight # {params.id}</div>
    );
}