import { WebSocket, WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "@repo/db/prisma";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket;
  rooms: string[];
  id: string;
}

const users: User[] = [];

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, "process.env.JWT_ROOM_TOKEN");

    if (typeof decoded == "string") return null;
    if (!decoded || !decoded.id) return null;

    console.log("User verified:", decoded.id); // ✅ debug log

    return decoded.id;
  } catch (e) {
    console.error("JWT Error:", e); // ✅ show error
    return null;
  }
}


wss.on("connection", function connection(ws, request) {
  const url = request.url;
  if (!url) {
    return;
  }
  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  console.log("Token recieve =", token)
  const id = checkUser(token);

  if (id == null) {
    ws.close();
    return null;
  }

  users.push({
    id,
    rooms: [],
    ws,
  });

  ws.on("message", async function message(data) {
    let parsedData;
    if (typeof data !== "string") {
      parsedData = JSON.parse(data.toString());
    } else {
      parsedData = JSON.parse(data); // {type: "join-room", roomId: 1}
    }

    if (parsedData.type === "join_room") {
      const user = users.find((x) => x.ws === ws);
      user?.rooms.push(parsedData.roomId);
    }

    if (parsedData.type === "leave_room") {
      const user = users.find((x) => x.ws === ws);
      if (!user) {
        return;
      }
      user.rooms = user?.rooms.filter((x) => x === parsedData.room);
    }

    console.log("message received");
    console.log(parsedData);

    if (parsedData.type === "chat") {
      const roomId = parsedData.roomId;
      const message = parsedData.message;

      // await prisma.chat.create({
      //   data: {
      //     roomId: Number(roomId),
      //     message,
      //     //@ts-ignore
      //     id,
      //   },
      // });

      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({
              type: "chat",
              message: message,
              roomId,
            })
          );
        }
      });
    }
  });
});
