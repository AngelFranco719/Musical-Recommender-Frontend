import * as signalR from "@microsoft/signalr";
const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://spotify-backend.agreeablemushroom-8c2dff51.westus2.azurecontainerapps.io/progresshub")
    .configureLogging(signalR.LogLevel.Information)
    .build();
connection.on("getFeedback", (artists) => {
    console.log("Recibí feedback del servidor: ", artists);
});
connection
    .start()
    .then(() => console.log("Conectado al socket"))
    .catch((err) => console.error("Error al conectar:", err));
