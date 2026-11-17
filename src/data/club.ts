// Club facts — only from veon/client.json (fact ids in comments). Nothing here is invented.
export const phones = [
  { href: "tel:+380967070301", label: "096 707 03 01", who: "адміністратор" }, // company.contacts
  { href: "tel:+380972270587", label: "097 227 05 87", who: "Олександр" }, // C-002
] as const;

export const address = {
  street: "вул. Трильовського, 12",
  city: "Львів",
  entrance: "вхід збоку школи №98", // C-003
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Львів, вул. Трильовського, 12"),
};

export const instagram = { href: "https://www.instagram.com/bastionlviv/", handle: "@bastionlviv" }; // confirmed

export const orgName = "ГО «Спортивний клуб «Сила нації»»"; // C-001

// C-004
export const week = [
  { day: "Пн", full: "Понеділок", open: "07:30", close: "21:30" },
  { day: "Вт", full: "Вівторок", open: "07:30", close: "21:30" },
  { day: "Ср", full: "Середа", open: "07:30", close: "21:30" },
  { day: "Чт", full: "Четвер", open: "07:30", close: "21:30" },
  { day: "Пт", full: "П'ятниця", open: "07:30", close: "21:30" },
  { day: "Сб", full: "Субота", open: "08:00", close: "18:00" },
  { day: "Нд", full: "Неділя", open: null, close: null },
] as const;

export type TabId = "kids" | "adults" | "personal";

export const tabs: { id: TabId; label: string; title: string }[] = [
  { id: "kids", label: "Дітям", title: "Групи для дітей" },
  { id: "adults", label: "Дорослим", title: "Групи для дорослих" },
  { id: "personal", label: "Персонально", title: "Персональні тренування" },
];

// company.services (C-016): which formats exist for each discipline.
export const disciplines: { id: string; name: string; brick: string; note: string; tabs: TabId[] }[] = [
  { id: "boks", name: "Бокс", brick: "Бокс", note: "Ударна техніка, робота на лапах і в парах.", tabs: ["kids", "adults", "personal"] },
  { id: "mma", name: "ММА", brick: "ММА", note: "Змішані єдиноборства: удари, боротьба, партер.", tabs: ["adults", "personal"] },
  { id: "taekvon-do", name: "Таеквон-до", brick: "Таеквон-до", note: "Корейське бойове мистецтво з акцентом на техніку ніг.", tabs: ["kids", "adults"] },
  { id: "borotba", name: "Вільна боротьба", brick: "Вільна боротьба", note: "Кидки, захвати і робота в стійці.", tabs: ["kids"] },
  { id: "grepling", name: "Грепплінг", brick: "Грепплінг", note: "Боротьба без ударів: контроль і больові прийоми.", tabs: ["kids"] },
  { id: "krosfit", name: "Кросфіт", brick: "Кросфіт", note: "Інтенсивні комплекси зі штангою, гирями і власною вагою.", tabs: ["adults", "personal"] },
  { id: "funktsional", name: "Функціональний тренінг", brick: "Функціонал", note: "Сила, витривалість і рухливість у групі.", tabs: ["adults"] },
  { id: "zal", name: "Тренажерний зал", brick: "Тренажерний зал", note: "Силові тренування на тренажерах і з вільною вагою.", tabs: ["personal"] },
  { id: "vazhka", name: "Важка атлетика", brick: "Важка атлетика", note: "Ривок і поштовх штанги.", tabs: ["kids"] },
];

export const formatLabel: Record<TabId, string> = {
  kids: "група для дітей",
  adults: "група для дорослих",
  personal: "персонально з тренером",
};
