// export declare interface BassContext {
// 	create_sample(file: string): number;
// 	play_sample(handle: number): boolean;
// }

// export declare interface TellyfinPluginContext {
// 	context: Map<string, any>;
// 	BASS: BassContext;
// }

// export declare function main(context: TellyfinPluginContext): void;

/**
 * @typedef {Object} Sample
 * @prop {() => void} play
 */

/**
 * @typedef {Object} BassContext
 * @prop {(file: string) => number} create_sample
 * @prop {(sample: number) => void} play_sample
 */

/**
 * @typedef {Object} TellyfinPluginContext
 * @prop {BassContext} BASS
 * @prop {Map<string, any>} store
 */