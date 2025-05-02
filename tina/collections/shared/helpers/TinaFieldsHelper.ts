import { TinaField } from "tinacms";

export function ExcludeTinaFields(
  fields: TinaField[],
  exclude: TinaField[]
): TinaField[] {
  return fields.filter(
    (field) => !exclude.some((excludeField) => excludeField === field)
  );
}
