import { Text, TextInput } from "react-native";

/**
 * Make the app ignore the device's font-size (and text-scaling) accessibility
 * setting so our fixed pixel sizes always render as designed. Imported once from
 * the root layout, before anything renders.
 */
type Scalable = { defaultProps?: { allowFontScaling?: boolean; maxFontSizeMultiplier?: number } };

const TextAny = Text as unknown as Scalable;
TextAny.defaultProps = TextAny.defaultProps || {};
TextAny.defaultProps.allowFontScaling = false;

const TextInputAny = TextInput as unknown as Scalable;
TextInputAny.defaultProps = TextInputAny.defaultProps || {};
TextInputAny.defaultProps.allowFontScaling = false;
