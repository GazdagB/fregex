
# fregex

**Readable string validation without the regex headaches.**

fregex is a lightweight TypeScript library that simplifies regular-expression-based string validation through easy-to-understand functions.

Instead of writing complex regex patterns, use readable, descriptive functions.

> [!NOTE]
> fregex is currently under development and has not yet been published to npm.

## Features

- Simple, readable validation functions
- Unicode-aware character detection
- Written in TypeScript
- Tested with Vitest
- Chainable validation API (planned)

## Usage

```ts
import {
  hasNumbers,
  hasSymbols,
  hasOnlyLetters
} from "fregex";

hasNumbers("Hello123");       // true
hasSymbols("Hello!");         // true
hasOnlyLetters("Hello");      // true
hasOnlyLetters("Hello123");   // false
```

### Planned chaining support

```ts
import { fregex } from "fregex";

fregex("Hello123!")
  .hasNumbers()
  .hasUppercase()
  .hasSymbols()
  .test(); // true
```

> Chaining is not yet implemented.

## Installation

The package is not yet published.

For local development:

```bash
npm install
```

## Implemented Functions

### Character Checks

- [x] `hasNumbers(str)` — Contains at least one ASCII digit
- [x] `hasSymbols(str)` — Contains a symbol
- [x] `hasLetters(str)` — Contains at least one Unicode letter
- [x] `hasUppercase(str)` — Contains an uppercase letter
- [x] `hasLowercase(str)` — Contains a lowercase letter
- [x] `hasWhitespace(str)` — Contains whitespace
- [x] `hasEmoji(str)` — Contains a recognizable emoji

### Character Restrictions

- [x] `hasOnlyNumbers(str)` — Contains only ASCII digits
- [x] `hasOnlyLetters(str)` — Contains only Unicode letters
- [x] `hasOnlyAlphanumeric(str)` — Contains only Unicode letters and ASCII digits

## Roadmap

### Position & Content Checks

- [ ] `startsWith()`
- [ ] `endsWith()`
- [ ] `contains()`
- [ ] `containsAny()`
- [ ] `containsAll()`
- [ ] `startsWithUppercase()`
- [ ] `endsWithNumber()`
- [ ] `containsRepeated()`

### Length Validation

- [ ] `minLength()`
- [ ] `maxLength()`
- [ ] `exactLength()`
- [ ] `betweenLength()`

### Format Validation

- [ ] `isEmail()`
- [ ] `isURL()`
- [ ] `isHexColor()`
- [ ] `isUUID()`
- [ ] `isIP()`
- [ ] `isDate()`
- [ ] `isTime()`
- [ ] `isSlug()`
- [ ] `isSemVer()`
- [ ] `isPhoneNumber()`

### Chainable API

- [ ] Create `StringQuery` class
- [ ] Implement `fregex(str)`
- [ ] Support chained character checks
- [ ] Implement `.test()`
- [ ] Implement `.not()`
- [ ] Implement `.or()`
- [ ] Implement `.explain()`
- [ ] Add chaining tests

### Advanced Regex Features

- [ ] `matches()`
- [ ] `oneOf()`
- [ ] `optional()`
- [ ] `repeated()`
- [ ] `capture()`
- [ ] `between()`
- [ ] `extract()`

### Development & Publishing

- [x] Initialize npm project
- [x] Configure TypeScript
- [x] Configure Vitest
- [x] Implement character checks
- [x] Add character-checking tests
- [x] Configure TypeScript compilation
- [ ] Finalize public API
- [ ] Add integration tests
- [ ] Set up GitHub Actions CI
- [ ] Add package license
- [ ] Publish to npm

## Development

Install dependencies:

```bash
npm install
```

Start automatic TypeScript compilation:

```bash
npm run dev
```

Build the library:

```bash
npm run build
```

Run tests in watch mode:

```bash
npm test
```

Run all tests once:

```bash
npm run test:run
```

Check TypeScript types:

```bash
npm run typecheck
```

## Project Structure

```text
fregex/
├── src/
│   ├── index.ts
│   ├── StringQuery.ts
│   └── functions/
│       └── characters.ts
├── tests/
│   └── characters.test.ts
├── dist/
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Design Principles

- **Readable:** Function names should describe their behavior.
- **Consistent:** Similar functions should behave predictably.
- **Unicode-aware:** Support international text where appropriate.
- **Modular:** Keep individual functions reusable.
- **Tested:** Every new feature should include automated tests.
- **Chainable:** Allow multiple conditions to be combined.

## Contributing

Contributions, feature suggestions, and bug reports are welcome.

## License

To be determined.
