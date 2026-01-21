function formatId(id: number | string) {
    return "#" + id.toString();
}
formatId(10);
formatId("admin-55");
formatId("user-0001");
formatId(999);

function setStatus(status: "success" | "error" | "pending" | "cancelled") {
    console.log("Status:", status);
}
setStatus("success");
setStatus("error");
setStatus("pending");
setStatus("cancelled");
setStatus("unexpected");

function getPosition(): [number, number] {
    return [10, 20];
}
function getWindowSize(): [number, number] | { width: number; height: number } {
    return [1920, 1080];
}
function getColor(): [number, number, number, number] {
    return [255, 100, 50, 0.5];
}

function setRole(role: "ADMIN" | "EDITOR" | "VIEWER" | "GUEST") {
    console.log("Role:", role);
}
setRole("ADMIN");
setRole("EDITOR");
setRole("VIEWER");
setRole("GUEST");
setRole("SUPERADMIN");

function move(direction: "up" | "down" | "left" | "right") {
    console.log("Move:", direction);
}
move("up");
move("down");
move("left");
move("right");
move("jump");