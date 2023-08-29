import { links } from './data';

// [number] means it can be any of the items in the array, and 'name' property specifically
export type SectionName = (typeof links)[number]['name'];
