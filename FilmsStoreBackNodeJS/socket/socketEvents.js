module.exports = io => {
  io.on("connection", socket => {
    socket.on("join", data => {
      socket.join(data.room);
    });

    socket.on("leave", data => {
      socket.leave(data.room);
    });

    socket.on("disconnect", data => {});
  });
};
