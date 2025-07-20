function status(request, response) {
  response.status(200).json({ chave: "testando uma API" });
}
export default status
