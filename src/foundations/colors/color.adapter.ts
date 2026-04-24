import { buildColorItems } from "../../utils/colorItemsBuilder.utils";
import { color } from "./theme";

export const backgroundColors = buildColorItems(color.background);
export const interactiveElemenetColors = buildColorItems(color.interative);
export const textColors = buildColorItems(color.text);
export const strokeColors = buildColorItems(color.stroke);