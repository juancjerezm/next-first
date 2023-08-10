async function fetchUsers() {
    const res = await fetch("https://reqres.in/api/users");
    const users = await res.json();
    return users.data;
}

async function IndexPage() {
    const users = await fetchUsers();
    return (
        <div>
            <h1>Index Page</h1>
            <div>{JSON.stringify(users)}</div>
        </div>
    );
}

export default IndexPage;
