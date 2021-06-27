export default function ({ redirect }) {
  const permissoes = [1, 2, 3, 4]

  return permissoes.includes(1) ? true : redirect('/paises')
}
