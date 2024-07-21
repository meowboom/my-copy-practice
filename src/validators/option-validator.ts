// bg-zinc-900 border-zinc-900
// bg-sky-900 border-sky-900
// bg-rose-950 border-rose-950
// bg-blue-950 border-blue-950

export const COLORS = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900",
  },
  {
    label: "Sky",
    value: "sky",
    tw: "sky-900",
  },
  {
    label: "Rose",
    value: "rose",
    tw: "rose-950",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
] as const;

export const MODELS = {
  name: "models",
  options: [
    { label: "iPhone X", value: "iphonex" },
    { label: "iPhone 11", value: "iphone11" },
    { label: "iPhone 12", value: "iphone12" },
    { label: "iPhone 13", value: "iphone13" },
    { label: "iPhone 14", value: "iphone14" },
    { label: "iPhone 15", value: "iphone15" },
  ],
} as const;
