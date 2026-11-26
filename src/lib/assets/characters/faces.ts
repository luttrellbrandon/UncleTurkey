/**
 * Illustrated Turkey Asset heads (ADR 0013): every cast member is a TURKEY, drawn with
 * their signature traits (hair, glasses, grin, beard). No human faces, no photos.
 *
 * Each head is a 100×100 SVG on a transparent ground, in profile facing right, with the
 * head centered at (48, 48). Turkey bodies place it where a bare turkey head would go.
 */

export type FaceId = 'daniel' | 'brandon' | 'steph' | 'steve';

const INK = '#161210';
const S = `stroke="${INK}" stroke-linejoin="round" stroke-linecap="round"`;
const SKIN = '#e8574a';

/** The shared turkey: bare head, beak, snood over the beak, wattle under the chin. */
function turkeyHead(opts: { skin?: string; beak?: string; eye?: string; extraBelow?: string; extraAbove?: string }) {
	const { skin = SKIN, beak, eye, extraBelow = '', extraAbove = '' } = opts;
	return `
		${extraBelow}
		<ellipse cx="46" cy="50" rx="26" ry="24" fill="${skin}" ${S} stroke-width="3"/>
		<path d="M64 34 C72 34 76 46 76 60 C72 56 68 48 64 42 Z" fill="#d8141b" ${S} stroke-width="2.5"/>
		${beak ?? `<path d="M70 46 L90 52 L70 58 Z" fill="#ffd400" ${S} stroke-width="2.5"/>`}
		<path d="M58 66 C62 76 60 88 52 90 C46 84 48 72 52 66 Z" fill="#b3121b" ${S} stroke-width="2.5"/>
		${eye ?? `<circle cx="56" cy="42" r="6" fill="#fff4dc" ${S} stroke-width="2"/><circle cx="58" cy="42" r="3" fill="${INK}"/>`}
		${extraAbove}
	`;
}

const HEADS: Record<FaceId, string> = {
	// Daniel Turkey: swept-up brown quiff, thin rectangular glasses, a knowing smirk in the beak.
	daniel: turkeyHead({
		beak: `<path d="M70 45 L90 50 L71 52 Z" fill="#ffd400" ${S} stroke-width="2.5"/>
			<path d="M71 54 L88 54 L70 59 Z" fill="#ffd400" ${S} stroke-width="2.5"/>
			<path d="M84 50 C87 49 88 47 88 45" fill="none" ${S} stroke-width="2"/>`,
		extraAbove: `
			<path d="M24 38 C22 20 38 10 54 12 C66 12 74 20 72 30 C64 24 52 24 44 28 C36 30 30 34 24 38 Z" fill="#6b4a2e" ${S} stroke-width="2.5"/>
			<path d="M40 18 C46 2 66 0 76 10 C66 9 56 12 48 22 Z" fill="#7d5838" ${S} stroke-width="2.5"/>
			<rect x="47" y="35" width="20" height="13" rx="3" fill="#ffffff" fill-opacity="0.2" ${S} stroke-width="2.4"/>
			<path d="M47 41 L28 40" fill="none" ${S} stroke-width="2.4"/>
			<path d="M50 31 L64 30" fill="none" ${S} stroke-width="2.6"/>
		`
	}),
	// Brandon Turkey: dark spiky crest, happy squint, the biggest open-beak grin on the flock.
	brandon: turkeyHead({
		eye: `<path d="M50 43 Q56 36 62 43" fill="none" ${S} stroke-width="3"/>`,
		beak: `<path d="M70 42 L92 47 L72 50 Z" fill="#ffd400" ${S} stroke-width="2.5"/>
			<path d="M72 54 L90 56 C84 64 76 64 70 60 Z" fill="#ffd400" ${S} stroke-width="2.5"/>
			<path d="M72 50 L90 50 L90 56 L72 54 Z" fill="#ffffff" ${S} stroke-width="1.6"/>`,
		extraAbove: `
			<path d="M24 40 C20 24 30 12 44 10 L46 2 L52 10 L58 3 L60 12 L67 8 L66 18 C72 22 74 28 72 32 C62 24 48 24 38 30 C32 33 27 36 24 40 Z" fill="#2b211c" ${S} stroke-width="2.5"/>
			<path d="M50 32 L64 31" fill="none" ${S} stroke-width="2.6"/>
		`
	}),
	// Steph Turkey: dark feathers swept back into a ponytail, sunglasses parked on top, gold hoops.
	steph: turkeyHead({
		eye: `<circle cx="56" cy="43" r="6.5" fill="#fff4dc" ${S} stroke-width="2"/>
			<circle cx="58" cy="43" r="3.2" fill="#4a3020"/>
			<path d="M51 36 L49 33 M55 35 L55 32 M59 36 L61 33" fill="none" ${S} stroke-width="1.8"/>`,
		beak: `<path d="M70 45 L90 50 L71 51 Z" fill="#ffd400" ${S} stroke-width="2.5"/>
			<path d="M71 54 L86 56 L70 59 Z" fill="#ffd400" ${S} stroke-width="2.5"/>`,
		extraBelow: `<path d="M22 40 C8 40 2 54 8 70 C14 60 18 54 26 52 Z" fill="#241a16" ${S} stroke-width="2.5"/>`,
		extraAbove: `
			<path d="M22 46 C18 26 32 14 50 14 C64 14 72 22 72 32 C62 26 48 26 38 30 C30 34 26 40 22 46 Z" fill="#241a16" ${S} stroke-width="2.5"/>
			<ellipse cx="44" cy="16" rx="11" ry="6" fill="#3a2a20" ${S} stroke-width="2.3"/>
			<ellipse cx="64" cy="18" rx="10" ry="6" fill="#3a2a20" ${S} stroke-width="2.3"/>
			<path d="M54 17 L55 17" fill="none" ${S} stroke-width="2.3"/>
			<path d="M38 14 L41 17 M46 12 L48 16 M61 15 L63 19" fill="none" stroke="#c9a46a" stroke-width="1.8"/>
			<path d="M51 34 Q57 30 63 33" fill="none" ${S} stroke-width="2.6"/>
			<circle cx="30" cy="62" r="6" fill="none" stroke="#d9a520" stroke-width="3"/>
		`
	}),
	// Steve Turkey: the baldest turkey alive (with a shine), gray stubble beard, a squinty grin.
	steve: turkeyHead({
		skin: '#ea6a55',
		eye: `<path d="M50 44 Q56 38 62 44" fill="none" ${S} stroke-width="3"/>
			<path d="M63 40 L67 37 M63 45 L67 47" fill="none" ${S} stroke-width="1.6"/>`,
		beak: `<path d="M70 43 L91 48 L72 51 Z" fill="#ffd400" ${S} stroke-width="2.5"/>
			<path d="M72 54 L89 55 C84 62 77 62 71 59 Z" fill="#ffd400" ${S} stroke-width="2.5"/>
			<path d="M72 51 L89 50 L89 55 L72 54 Z" fill="#ffffff" ${S} stroke-width="1.6"/>`,
		extraAbove: `
			<ellipse cx="38" cy="32" rx="10" ry="5" fill="#ffffff" fill-opacity="0.75" transform="rotate(-24 38 32)"/>
			<path d="M24 58 C28 74 42 82 56 80 C50 76 44 70 42 64 C36 66 30 64 24 58 Z" fill="#d8d1c6" ${S} stroke-width="2"/>
			<path d="M30 64 l2 3 M36 68 l1 3 M42 71 l1 3" fill="none" stroke="#8a7f73" stroke-width="1.6" stroke-linecap="round"/>
			<path d="M50 33 L62 33" fill="none" stroke="#8a7f73" stroke-width="2.6" stroke-linecap="round"/>
		`
	})
};

export const FACE_IDS = Object.keys(HEADS) as FaceId[];

/** Standalone SVG document for a cast member's turkey head. */
export function faceSvg(id: FaceId): string {
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">${HEADS[id]}</svg>`;
}

/** Data URI for <img>, SVG <image> and Phaser textures. */
export function faceUri(id: FaceId): string {
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(faceSvg(id))}`;
}

export const FACE_NAMES: Record<FaceId, string> = {
	daniel: 'Daniel Turkey (Uncle Turkey)',
	brandon: 'Brandon Turkey',
	steph: 'Steph Turkey',
	steve: 'Steve Turkey'
};
