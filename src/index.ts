/**
 * The `query-flags` package provides a simple way to enable/disable features
 * based on a query string parameter `flags`. This is useful for testing
 * features in production.
 * @packageDocumentation
 */

let flagSet: Set<string> | undefined

/**
 * Returns true if the flag is enabled in the query string.
 * To enable a flag, add `?flags=flag1,flag2` to the URL.
 * @param flagName - The name of the flag to check.
 * @returns `true` if the flag is enabled, `false` otherwise.
 * @public
 */
export function isQueryFlagEnabled(flagName: string) {
  if (!flagSet) {
    const flags =
      typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search).get('flags') || ''
        : ''
    flagSet = new Set(flags.split(',').filter(Boolean))
  }
  return flagSet.has(flagName)
}

/**
 * Injects the query flags into the module. This is useful for testing.
 * @beta
 */
export function dangerouslyInjectQueryFlags(flags: string[]) {
  flagSet = new Set(flags)
}
