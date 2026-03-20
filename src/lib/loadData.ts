import "server-only";
import type { ResumeData } from "./types";
import localData from "../../data/data.json";

export async function loadData(): Promise<ResumeData> {
  const source = process.env.DATA_SOURCE;

  if (source && source.startsWith("http")) {
    const res = await fetch(source, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Failed to fetch data from ${source}: ${res.status}`);
    return res.json() as Promise<ResumeData>;
  }

  return localData as ResumeData;
}
