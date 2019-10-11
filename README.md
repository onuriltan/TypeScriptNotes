# Notes

- `parcel-bundler` package lets typescipt compile to js and run on the browser easily
- `tsc --config` creates tsconfig.json file
- `tsc -w` automatically detects ts file changes

## DONT'S

- **Do not use Union Types and Operators** i.e `input: number[] | string` because typescript compiler will suggest array and string methods for the input value
  which should be avoided
