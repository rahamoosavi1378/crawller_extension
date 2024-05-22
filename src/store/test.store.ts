import { writable } from "svelte/store";

export interface Test {
  hello: string;
}
export const test = writable<Test>({ hello: "" });
