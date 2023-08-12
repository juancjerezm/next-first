import Users from "../components/Users";

async function fetchUsers() {
    const res = await fetch("https://reqres.in/api/users");
    const users = await res.json();
    return users.data;
}

async function IndexPage() {
    const users = await fetchUsers();
    return <Users users={users} />;
}

export default IndexPage;
