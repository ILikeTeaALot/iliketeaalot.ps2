/** @import { TellyfinPluginContext } from './Types.mjs' */
const { func } = await import("./functions.mjs");
// import { func } from "./functions.mjs";

/**
 * @param {TellyfinPluginContext} context Context Object
 */
export function main(context) {
	console.log(context.BASS);
	context.store.set("SCPH_000", context.BASS.create_sample("./SCPH-10000_00000.wav"));
	context.store.set("SCPH_001", context.BASS.create_sample("./SCPH-10000_00001.wav"));
	console.log(context);
	func();
}

/**
 * @param {TellyfinPluginContext} context Context Object
 */
export function update(context) {
	context.BASS.play_sample(context.store.get("SCPH_001"));
}