export function getSubheading(items) {
  switch (true) {
    case items > 4:
      return `${items} zadan`;
    case items > 1:
      return `${items} zadania`;
    case items === 1:
      return "1 zadanie";
    case items === 0:
    default:
      return "Brak Zadan";
  }
}
