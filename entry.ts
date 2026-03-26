// Nonsense content that will not be tree-shaken

export const data: Record<string, unknown>[] = [];

for (let i = 0; i < 500; i++) {
  data.push({
    id: i,
    name: `item-${i}`,
    description: `This is a description for item number ${i}. It contains some padding text to increase the file size significantly.`,
    tags: [`tag-${i % 10}`, `category-${i % 5}`, `group-${i % 3}`],
    value: Math.random(),
    active: i % 2 === 0,
    metadata: {
      createdAt: new Date(2020, i % 12, (i % 28) + 1).toISOString(),
      updatedAt: new Date(2023, i % 12, (i % 28) + 1).toISOString(),
      version: `${i % 10}.${i % 100}.${i}`,
      checksum: `checksum-${i}-abcdef1234567890`,
    },
  });
}

const lookup: Record<string, string> = {};
const alphabet = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < alphabet.length; i++) {
  for (let j = 0; j < alphabet.length; j++) {
    const key = alphabet[i] + alphabet[j];
    lookup[key] = `value-${key}-${i * 26 + j}`;
  }
}

export { lookup };

export function processData(input: unknown[]): unknown[] {
  return input.map((item, index) => ({
    ...(item as object),
    processed: true,
    index,
    hash: `hash-${index}-${JSON.stringify(item).length}`,
  }));
}

export const processed = processData(data);

export const matrix: number[][] = Array.from({ length: 50 }, (_, row) =>
  Array.from({ length: 50 }, (_, col) => row * 50 + col)
);

export const strings: string[] = Array.from(
  { length: 200 },
  (_, i) =>
    `Lorem ipsum dolor sit amet entry ${i}, consectetur adipiscing elit. ` +
    `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ${i}. ` +
    `Ut enim ad minim veniam, quis nostrud exercitation ullamco ${i}.`
);

const registry = new Map<string, object>();
for (let i = 0; i < 100; i++) {
  registry.set(`key-${i}`, {
    index: i,
    label: `Label for entry ${i}`,
    payload: strings[i % strings.length],
  });
}

export { registry };

console.log(`Loaded ${data.length} items, ${Object.keys(lookup).length} lookup entries`);
