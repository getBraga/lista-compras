export default function criarId() {
  const idRandom = Math.floor(
    Math.random() * 10000 * parseInt(new Date().getMilliseconds())
  ).toString(16)
  return idRandom
}
