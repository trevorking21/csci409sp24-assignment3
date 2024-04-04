export default function AirportInfo({ params }: { params: { id: string} } ){
    return (
        <div>Hello From Airport # {params.id}</div>
    );
}