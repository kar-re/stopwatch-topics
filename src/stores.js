import { writable } from 'svelte-local-storage-store';
import { readable } from 'svelte/store';

// set up a readable store which returns the number of milliseconds between the moment the store is subscribed and following an interval
export const time = readable(0, function start(set) {
	const beginning = new Date();
	const beginningTime = beginning.getTime();

	const interval = setInterval(() => {
    const current = new Date();
		const currentTime = current.getTime();
		set(currentTime - beginningTime);
	}, 10);

	return function stop() {
		// reset to 0 so the next subscription starts from a clean baseline.
		// (there are no subscribers left at this point, so nothing renders the 0 —
		// it just prevents the stale last value from being replayed on re-Start)
		set(0);
		clearInterval(interval);
	};
});

export const topics = writable('topics', 0);
export const pref = writable('pref', {
	colorTheme:'dark',
});
export const lapse = writable('lapse', 0);