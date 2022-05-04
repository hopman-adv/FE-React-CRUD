import * as ax from "../Services/auth.js";

export async function getUsers() {
    return ax.instance
    .get("/data/users/")
    .catch((e) => {
        console.log(e);
        if (e.statusCode === 403) {
            return "Unlogged!";
        }
        return "Unknown error";
    });
}
