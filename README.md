# query-flags

The `query-flags` package provides a simple way to enable/disable features based on a query string parameter `flags`. This is useful for testing features in production.

## Usage

```ts
import { isQueryFlagEnabled } from 'query-flags'

// Enable the feature by adding `?flags=my-feature` to the URL.
if (isQueryFlagEnabled('my-feature')) {
  // Do something.
}
```

## API reference

[API reference](https://apiref.page/package/query-flags)
