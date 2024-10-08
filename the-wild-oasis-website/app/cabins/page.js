import Counter from "../components/Counter";

export default async function Page() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return (
        <div>
            <h1>Cabins Page</h1>
            <ul>
                {data.map((cabin) => (
                    <li>{cabin.name}</li>
                ))}
            </ul>
            <Counter />
        </div>
    );
}