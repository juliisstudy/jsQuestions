type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function JSONParse(str: string): any {
  let i = 0;
  return parseValue();
  function parseValue(): any {}
}
