export function selfPraise(name) {
  if (typeof name !== "string") return;
  return `Nama saya ${name}, saya adalah orang ganteng!`;
}

console.log(selfPraise("Hakim"));
console.log(selfPraise("Hakim"));
