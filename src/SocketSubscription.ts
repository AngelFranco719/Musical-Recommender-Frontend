import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:5156/progresshub")
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection.on("getFeedback", (artists) => {
  console.log("Recibí feedback del servidor: ", artists);
});


connection
  .start()
  .then(() => console.log("Conectado al socket"))
  .catch((err) => console.error("Error al conectar:", err));