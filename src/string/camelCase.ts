export function camelCase(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}