// Colors can be defined as either a simple string or a nested object of colors
type ColorValue = string | { [key: string]: ColorValue };

// Color item can be either a simple color or a group with nested colors
type ColorItem =
  {
    title: string;
    subtitle?: string;
    colors: Record<string, string>;
  }

// Check if value is an object
const isObject = (v: ColorValue): v is Record<string, ColorValue> =>
  typeof v === "object" && v !== null;

// Collect all nested string colors into a flat object
const collectLeaves = (
  obj: Record<string, ColorValue>, 
  prefix =""
): Record<string, string> => {
  const result: Record<string, string> = {};

  // Recursive function to walk through the object
  const walk = (node: Record<string, ColorValue>, currentPath: string) => {
    for (const [key, value] of Object.entries(node)) {
      // Build the new path for this key
      const newPath = currentPath ? `${currentPath}.${key}` : key;
      // If it's a string, add to result
      if (typeof value === "string") {
        result[newPath] = value;
      } else {
        // If it's an object, keep walking
        walk(value, newPath);
      }
    }
  };

  walk(obj, prefix);
  return result;
};

// Build color items from a color group
export const buildColorItems = (
  colorGroup: Record<string, ColorValue>
): ColorItem[] => {
  const items: ColorItem[] = [];

  // Iterate over each entry in the color group
  for (const [title, value] of Object.entries(colorGroup)) {

    // CASE 1: direct color value
    if (typeof value === "string") {
      // If it's a direct color value, add it as a simple item
      items.push({
        title,
        colors:{
          [title]: value
        }
      });
      continue;
    }

    // If it's not an object, skip
    if (!isObject(value)) continue;

    const entries = Object.entries(value);

    // Check if all values are objects
    const isNestedGroup = entries.every(
      // If any value is not an object, it's not a nested group
      ([, v]) => typeof v === "object"
    );

    // CASE 2: nested groups
    if (isNestedGroup) {
      for (const [subtitle, subValue] of entries) {
        // If it's not an object, skip
        if (!isObject(subValue)) continue;

        // Collect all leaf colors from the nested group
        items.push({
          title,
          subtitle,
          colors: collectLeaves(subValue),
        });
      }
    }

    // CASE 3: flat object
    else {
      // Collect all leaf colors from the flat object
      items.push({
        title,
        colors: collectLeaves(value),
      });
    }
  }

  // Return the collected items
  return items;
};