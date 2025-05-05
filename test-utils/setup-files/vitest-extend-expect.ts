import { expect } from "vitest";

function idChecker(a: unknown, b: unknown) {
  const hasAId = typeof a === "object" && a !== null && "id" in a;
  const hasBId = typeof b === "object" && b !== null && "id" in b;

  if (hasAId && hasBId) {
    return a.id === b.id;
  } else if (hasAId === hasBId) {
    return;
  } else {
    return false;
  }
}

expect.addEqualityTesters([idChecker]);
