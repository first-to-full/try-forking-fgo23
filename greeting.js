export function greeting(name) {
  if (typeof name !== "string") return;
  return `Hello world, ${name}`;
}
