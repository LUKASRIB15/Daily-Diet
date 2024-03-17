export function sortDates(date: string[]) {
  return date.sort(function (a, b) {
    const [diaA, mesA, anoA] = a.split('/')
    const [diaB, mesB, anoB] = b.split('/')

    if (anoA !== anoB) {
      return parseInt(anoB) - parseInt(anoA)
    }

    if (mesA !== mesB) {
      return parseInt(mesB) - parseInt(mesA)
    }

    return parseInt(diaB) - parseInt(diaA)
  })
}
