// URL backend ของคุณ
const BASE_URL = "https://app-acharin-ahrs-j0hmtrb5d-acharins-projects.vercel.app";

// แสดงผลลัพธ์
function show(result) {
    document.getElementById("result").textContent = JSON.stringify(result, null, 2);
}

// ================= POST =================
async function createUser() {
    const payload = {
        id: document.getElementById("post-id").value || undefined,
        name: document.getElementById("post-name").value,
        email: document.getElementById("post-email").value,
        role: document.getElementById("post-role").value
    };

    const res = await fetch(`${BASE_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    show(await res.json());
}

// ================= GET ALL =================
async function getUsers() {
    const res = await fetch(`${BASE_URL}/api/users`);
    show(await res.json());
}

// ================= GET BY ID =================
async function getUserById() {
    const id = document.getElementById("get-id").value;
    const res = await fetch(`${BASE_URL}/api/users/${id}`);
    show(await res.json());
}

// ================= PUT =================
async function updateUser() {
    const id = document.getElementById("put-id").value;

    const payload = {
        name: document.getElementById("put-name").value || undefined,
        email: document.getElementById("put-email").value || undefined,
        role: document.getElementById("put-role").value || undefined
    };

    const res = await fetch(`${BASE_URL}/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    show(await res.json());
}

// ================= DELETE =================
async function deleteUser() {
    const id = document.getElementById("delete-id").value;

    const res = await fetch(`${BASE_URL}/api/users/${id}`, {
        method: "DELETE"
    });

    show(await res.json());
}
