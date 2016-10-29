# Slugg

Make strings url-safe.

- Comprehensive tests
- No dependencies
- Not in coffee-script (lol)
- Coerces foreign symbols to their english equivalent
- Doesn't try to do anything fancy with symbols (just removes them)
- Works in browser (`window.slugg`) and AMD/CommonJS-flavoured module loaders

```
npm install slugg
```

## Usage:

### slug(string, [separator, toStrip])

```js
var slug = require('slugg')

slug('My fantastic blog post')
//-> 'my-fantastic-blog-post'

slug('Today I found £5')
//-> 'today-i-found-5'

slug('I ♥ you')
//-> 'i-you'
```

If you want a separator other than '-', pass it in as the second argument:

```js
slug('Kevin Spacey', ' ')
//-> 'kevin spacey'
```

By default, slugg will strip (i.e. remove and not replace) any sort of quotemark: `'"’‘”“`.

If you want to control which characters are stripped, pass a regex as the last option
that will match the chars you want to replace, eg:

```js
slug('Mum\'s cooking', /'/g)
//-> 'mums-cooking'
```

Remember to use the `g` flag if you want all the matches stripped (not just the first).

After version 1.1.0, a new syntax has been introduced:

### slug(string, [options])

If you want a separator other than '-', pass it in as the `separator` option:

```js
slug('Kevin Spacey', { separator: ' ' })
//-> 'kevin spacey'
```

If you want to control which characters are stripped, pass a regex as the `toStrip` option
that will match the chars you want to replace, eg:

```js
slug('Mum\'s cooking', { toStrip: /'/g })
//-> 'mums-cooking'
```
Remember to use the `g` flag if you want all the matches stripped (not just the first).

By default, slugg will convert your string to lower case. If you want to disable it just
pass the `toLowerCase` option as `false`, eg:

```js
slug('Slugg rocks!', { toLowerCase: false })
//-> 'Slugg-rocks'
```
