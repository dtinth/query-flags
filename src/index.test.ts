import { describe, it, expect } from "vite-plus/test";
import { dangerouslyInjectQueryFlags, isQueryFlagEnabled } from "./index.ts";

describe("query-flags", () => {
  it("works", () => {
    expect(isQueryFlagEnabled("foo")).toBe(false);
    dangerouslyInjectQueryFlags(["foo", "bar"]);
    expect(isQueryFlagEnabled("foo")).toBe(true);
    expect(isQueryFlagEnabled("bar")).toBe(true);
    expect(isQueryFlagEnabled("baz")).toBe(false);
  });
});
