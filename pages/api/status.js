function status(request, response) {
  response.status(200).json({ chave: "Teste api" })

}
export default status