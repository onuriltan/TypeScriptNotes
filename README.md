# Notes

- `parcel-bundler` package lets typescipt compile to js and run on the browser easily
- `tsc --config` creates tsconfig.json file
- `tsc -w` automatically detects ts file changes

## DONT'S

1. **Avoid using Union Types and Operators** e.g `input: number[] | string` because typescript compiler will suggest array and string methods for the input value which should be avoided
  
    * If you need to use unions then use type guards
      ```lang-js
      let input: number[] | string
      if(input instanceof Array) {
        input.map(...)
      }
      if(typeof this.collection === 'string') {
        input.charAt(...)
      }
      ```
