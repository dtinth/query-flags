import { dangerouslyInjectQueryFlags, isQueryFlagEnabled } from '.'

it('works', () => {
  expect(isQueryFlagEnabled('foo')).toBe(false)
  dangerouslyInjectQueryFlags(['foo', 'bar'])
  expect(isQueryFlagEnabled('foo')).toBe(true)
  expect(isQueryFlagEnabled('bar')).toBe(true)
  expect(isQueryFlagEnabled('baz')).toBe(false)
})
