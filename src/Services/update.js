import * as ax from "../Services/auth.js";

export async function update(id, username, email) {
    return ax.instance
    .put("/data/users/" + id, {
      username: username,
      email: email,
    })
    .catch((e) => {
        console.log(e);
        if (e.statusCode === 403) {
            return "Unlogged!";
        }
        return "Unknown error";
    });
}
