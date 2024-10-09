export function iconNameParser(name: string) {
  if (name.match(/([A-Z])/)) {
    return name
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .replace("mdi-", "mdi:");
  }

  return name;
}
