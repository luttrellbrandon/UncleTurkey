<script lang="ts">
	import type { ProductCut } from '#lib/content/turkey-links';

	// Flat circular "product cuts", drawn in the print inks with ink outlines.
	// Props may use illustration pigments (a decoy turkey is brown); UI chrome never does.
	type Props = { cut: ProductCut; label: string; class?: string };
	let { cut, label, class: className = '' }: Props = $props();

	const INK = '#161210';
	const RED = '#d8141b';
	const YEL = '#ffd400';
	const GRN = '#1d7438';
	const NEWS = '#fff4dc';
	const FOLD = '#f7e6bd';
	const BLUE = '#1b5fa8';
	const WHITE = '#ffffff';
	const ORANGE = '#f08a1c';
	const BROWN = '#7a3b16';
	const SKIN = '#e8574a';
	const TAN = '#c9a46a';
	const RECALL = '#b3121b';

	const FONT = "'Big Shoulders Display', 'Arial Narrow', sans-serif";
</script>

<svg
	class={className}
	viewBox="0 0 160 140"
	role="img"
	aria-label={label}
	stroke={INK}
	stroke-width="2.5"
	stroke-linejoin="round"
	stroke-linecap="round"
>
	{#if cut === 'kit'}
		<!-- An open carton: paddle, rod tip, ball and the laminated card poke out. -->
		<path d="M30 38 L18 20 L72 30 Z" fill={FOLD} />
		<path d="M130 38 L144 18 L90 30 Z" fill={FOLD} />
		<g transform="rotate(-18 58 28)">
			<rect x="54" y="30" width="8" height="22" fill={BROWN} />
			<ellipse cx="58" cy="16" rx="17" ry="19" fill={RED} />
		</g>
		<path d="M96 40 L120 2" stroke-width="3" fill="none" />
		<path d="M120 2 Q132 10 128 24" fill="none" stroke-width="1.5" />
		<circle cx="128" cy="27" r="3" fill={YEL} stroke-width="1.5" />
		<rect x="78" y="14" width="26" height="30" fill={WHITE} transform="rotate(8 91 29)" />
		<text x="91" y="26" transform="rotate(8 91 29)" text-anchor="middle" font-family={FONT} font-weight="900" font-size="8" fill={INK} stroke="none">GOOD</text>
		<text x="91" y="35" transform="rotate(8 91 29)" text-anchor="middle" font-family={FONT} font-weight="900" font-size="8" fill={INK} stroke="none">GAME</text>
		<circle cx="112" cy="40" r="9" fill={BLUE} />
		<rect x="30" y="38" width="100" height="92" fill={YEL} />
		<rect x="40" y="56" width="80" height="44" fill={RED} />
		<text x="80" y="75" text-anchor="middle" font-family={FONT} font-weight="900" font-size="17" fill={NEWS} stroke="none">STOP LOSING</text>
		<text x="80" y="92" text-anchor="middle" font-family={FONT} font-weight="800" font-size="10" fill={YEL} stroke="none">TO YOUR FRIENDS</text>
		<text x="80" y="118" text-anchor="middle" font-family={FONT} font-weight="800" font-size="9" fill={INK} stroke="none">4 PIECE · RESULTS VARY</text>
	{:else if cut === 'pingpong-book'}
		<rect x="40" y="12" width="84" height="118" fill={RED} />
		<rect x="40" y="12" width="12" height="118" fill={RECALL} />
		<text x="90" y="34" text-anchor="middle" font-family={FONT} font-weight="900" font-size="16" fill={NEWS} stroke="none">PING PONG</text>
		<text x="90" y="46" text-anchor="middle" font-family={FONT} font-weight="800" font-size="7" fill={YEL} stroke="none">FOR THE AVERAGE TURKEY</text>
		<g transform="rotate(24 88 82)">
			<rect x="84" y="94" width="8" height="24" fill={BROWN} />
			<ellipse cx="88" cy="80" rx="20" ry="22" fill={GRN} />
		</g>
		<circle cx="114" cy="64" r="6" fill={WHITE} />
		<path d="M104 70 l-6 4 M106 76 l-6 2" stroke-width="1.5" fill="none" />
		<rect x="58" y="116" width="58" height="8" fill={YEL} stroke-width="1.5" />
		<text x="87" y="122.5" text-anchor="middle" font-family={FONT} font-weight="900" font-size="6.5" fill={INK} stroke="none">NOW WITH EXCUSES</text>
	{:else if cut === 'lure'}
		<path d="M24 8 Q40 40 52 54" fill="none" stroke-width="1.5" />
		<circle cx="52" cy="56" r="3" fill={NEWS} stroke-width="1.5" />
		<!-- body -->
		<path d="M44 64 Q52 44 92 46 Q132 50 136 70 Q130 92 90 94 Q52 92 44 64 Z" fill={YEL} />
		<path d="M66 50 Q92 44 120 56 L120 84 Q92 94 66 88 Z" fill={RED} stroke="none" />
		<path d="M44 64 Q52 44 92 46 Q132 50 136 70 Q130 92 90 94 Q52 92 44 64 Z" fill="none" />
		<path d="M70 58 l8 6 m4 -8 l8 6 m4 -8 l8 6 m4 -6 l8 6" stroke={YEL} stroke-width="2" fill="none" />
		<path d="M44 64 L28 76 L48 72 Z" fill={NEWS} />
		<circle cx="58" cy="62" r="7" fill={WHITE} />
		<circle cx="60" cy="62" r="3.5" fill={INK} stroke="none" />
		<!-- treble hooks -->
		<path d="M78 94 v14 M78 108 q-8 2 -8 -6 M78 108 q8 2 8 -6" fill="none" stroke-width="2" />
		<path d="M118 90 v14 M118 104 q-8 2 -8 -6 M118 104 q8 2 8 -6" fill="none" stroke-width="2" />
		<path d="M136 70 l10 0" stroke-width="2" />
		<!-- shine -->
		<path d="M96 40 l4 -10 M106 42 l8 -8 M86 40 l0 -10" stroke={INK} stroke-width="2" fill="none" />
		<text x="94" y="128" text-anchor="middle" font-family={FONT} font-weight="900" font-size="11" fill={INK} stroke="none">SHINIER THAN HIS</text>
	{:else if cut === 'code-book'}
		<rect x="38" y="10" width="86" height="120" fill={BLUE} stroke={YEL} />
		<rect x="38" y="10" width="12" height="120" fill={INK} stroke={YEL} />
		<text x="87" y="34" text-anchor="middle" font-family={FONT} font-weight="900" font-size="13" fill={NEWS} stroke="none">HOW TO CODE</text>
		<text x="87" y="48" text-anchor="middle" font-family={FONT} font-weight="900" font-size="13" fill={NEWS} stroke="none">BETTER THAN</text>
		<text x="87" y="66" text-anchor="middle" font-family={FONT} font-weight="900" font-size="18" fill={YEL} stroke="none">BRANDON</text>
		<rect x="58" y="76" width="58" height="34" fill={INK} stroke={YEL} stroke-width="1.5" />
		<text x="87" y="99" text-anchor="middle" font-family={FONT} font-weight="900" font-size="18" fill={YEL} stroke="none">{'{ ? }'}</text>
		<text x="74" y="124" text-anchor="middle" font-family={FONT} font-weight="800" font-size="6.5" fill={NEWS} stroke="none">STILL COMPILING</text>
		<!-- the recall sticker -->
		<g transform="rotate(-14 128 118)">
			<rect x="104" y="106" width="48" height="18" fill={RED} stroke={YEL} />
			<text x="128" y="119" text-anchor="middle" font-family={FONT} font-weight="900" font-size="11" fill={NEWS} stroke="none">RECALLED</text>
		</g>
	{:else if cut === 'racquet-vhs'}
		<rect x="18" y="30" width="124" height="80" fill={INK} />
		<rect x="28" y="38" width="104" height="30" fill={WHITE} stroke-width="2" />
		<text x="80" y="52" text-anchor="middle" font-family={FONT} font-weight="900" font-size="11" fill={RED} stroke="none">THE WALL</text>
		<text x="80" y="63" text-anchor="middle" font-family={FONT} font-weight="900" font-size="10" fill={INK} stroke="none">ALWAYS WINS</text>
		<rect x="44" y="76" width="72" height="26" fill={FOLD} stroke={NEWS} stroke-width="1.5" />
		<circle cx="62" cy="89" r="9" fill={NEWS} stroke={INK} />
		<circle cx="98" cy="89" r="9" fill={NEWS} stroke={INK} />
		<path d="M62 82 v14 M55 89 h14 M98 82 v14 M91 89 h14" stroke-width="1.5" />
		<!-- racquet and ball -->
		<g transform="rotate(-30 132 26)">
			<ellipse cx="132" cy="18" rx="12" ry="16" fill="none" stroke={INK} stroke-width="3" />
			<path d="M126 6 v24 M132 2 v32 M138 6 v24 M121 14 h22 M121 22 h22" stroke-width="1" />
			<rect x="129" y="34" width="6" height="16" fill={YEL} />
		</g>
		<circle cx="22" cy="122" r="7" fill={BLUE} />
		<text x="104" y="128" text-anchor="middle" font-family={FONT} font-weight="800" font-size="9" fill={INK} stroke="none">BE KIND · REWIND</text>
	{:else if cut === 'trophy'}
		<path d="M50 20 h60 v24 q0 36 -30 40 q-30 -4 -30 -40 Z" fill={YEL} />
		<path d="M50 28 q-22 0 -18 18 q4 14 22 16" fill="none" stroke-width="4" />
		<path d="M110 28 q22 0 18 18 q-4 14 -22 16" fill="none" stroke-width="4" />
		<path d="M62 30 v26" stroke={WHITE} stroke-width="4" />
		<rect x="72" y="84" width="16" height="16" fill={YEL} />
		<rect x="52" y="100" width="56" height="12" fill={YEL} />
		<rect x="42" y="112" width="76" height="22" fill={GRN} />
		<rect x="54" y="116" width="52" height="14" fill={NEWS} stroke-width="1.5" />
		<text x="80" y="126.5" text-anchor="middle" font-family={FONT} font-weight="900" font-size="9" fill={INK} stroke="none">SHOWED UP</text>
		<text x="80" y="58" text-anchor="middle" font-family={FONT} font-weight="900" font-size="20" fill={INK} stroke="none">#1</text>
		<text x="80" y="70" text-anchor="middle" font-family={FONT} font-weight="800" font-size="7" fill={INK} stroke="none">(OUT OF 1)</text>
	{:else if cut === 'excuse-dial'}
		<rect x="34" y="14" width="92" height="116" fill={RED} />
		<text x="80" y="32" text-anchor="middle" font-family={FONT} font-weight="900" font-size="12" fill={NEWS} stroke="none">EXCUSE-O-MATIC</text>
		<circle cx="80" cy="76" r="34" fill={NEWS} />
		<path d="M80 42 v8 M46 76 h8 M106 76 h8 M56 52 l6 6 M104 52 l-6 6" stroke-width="2" />
		<path d="M80 76 L100 54" stroke={RED} stroke-width="4" />
		<circle cx="80" cy="76" r="5" fill={INK} stroke="none" />
		<text x="62" y="92" text-anchor="middle" font-family={FONT} font-weight="800" font-size="7" fill={INK} stroke="none">SUN</text>
		<text x="98" y="92" text-anchor="middle" font-family={FONT} font-weight="800" font-size="7" fill={INK} stroke="none">PADDLE</text>
		<text x="80" y="104" text-anchor="middle" font-family={FONT} font-weight="800" font-size="6" fill={INK} stroke="none">WASN'T TRYING</text>
		<rect x="50" y="114" width="26" height="9" fill={YEL} stroke-width="1.5" />
		<rect x="84" y="114" width="26" height="9" fill={INK} stroke-width="1.5" />
	{:else if cut === 'wattle'}
		<!-- A clip-on wattle on a hang card -->
		<rect x="42" y="8" width="76" height="126" fill={FOLD} />
		<rect x="70" y="14" width="20" height="7" fill={NEWS} stroke-width="1.5" />
		<text x="80" y="38" text-anchor="middle" font-family={FONT} font-weight="900" font-size="12" fill={RED} stroke="none">CLIP-ON</text>
		<text x="80" y="51" text-anchor="middle" font-family={FONT} font-weight="900" font-size="12" fill={INK} stroke="none">WATTLE</text>
		<path d="M68 64 h24 l-3 8 h-18 Z" fill={INK} />
		<path d="M72 72 Q60 92 70 112 Q80 126 90 112 Q100 92 88 72 Z" fill={RECALL} />
		<path d="M76 84 q4 10 0 20 M84 82 q4 12 0 22" fill="none" stroke-width="1.5" />
		<text x="80" y="128" text-anchor="middle" font-family={FONT} font-weight="800" font-size="7.5" fill={INK} stroke="none">ONE SIZE FITS UNCLE</text>
	{:else if cut === 'headphones'}
		<path d="M38 82 Q38 18 80 18 Q122 18 122 82" fill="none" stroke-width="9" />
		<path d="M38 82 Q38 18 80 18 Q122 18 122 82" fill="none" stroke={YEL} stroke-width="3" />
		<rect x="24" y="70" width="28" height="44" fill={RED} />
		<rect x="108" y="70" width="28" height="44" fill={RED} />
		<rect x="48" y="76" width="8" height="32" fill={INK} stroke="none" />
		<rect x="104" y="76" width="8" height="32" fill={INK} stroke="none" />
		<!-- muted gobbles -->
		<text x="80" y="74" text-anchor="middle" font-family={FONT} font-weight="900" font-size="12" fill={INK} stroke="none">GOBBLE</text>
		<path d="M54 64 L106 80" stroke={RED} stroke-width="3" />
		<text x="80" y="100" text-anchor="middle" font-family={FONT} font-weight="900" font-size="10" fill={INK} stroke="none">“GG LOL”</text>
		<path d="M60 94 L100 98" stroke={RED} stroke-width="3" />
		<text x="80" y="132" text-anchor="middle" font-family={FONT} font-weight="800" font-size="9" fill={INK} stroke="none">MUTES THE GROUP CHAT</text>
	{:else if cut === 'decoy'}
		<path d="M80 108 v26" stroke-width="4" />
		<path d="M70 134 h20" stroke-width="4" />
		{#each [-48, -24, 0, 24, 48] as a, i (a)}
			<ellipse
				cx="80"
				cy="40"
				rx="13"
				ry="34"
				transform="rotate({a} 80 76)"
				fill={[RED, YEL, ORANGE, YEL, RED][i]}
			/>
		{/each}
		<ellipse cx="80" cy="84" rx="30" ry="26" fill={TAN} />
		<path d="M64 74 l4 4 M72 70 l4 4 M90 70 l-4 4 M98 74 l-4 4 M70 96 h20" stroke-width="1.5" fill="none" />
		<path d="M66 84 q14 10 28 0" fill="none" stroke-width="1.5" stroke-dasharray="3 3" />
		<ellipse cx="80" cy="56" rx="11" ry="13" fill={SKIN} />
		<circle cx="83" cy="52" r="2.5" fill={INK} stroke="none" />
		<path d="M88 56 l9 3 l-9 3 Z" fill={YEL} stroke-width="1.5" />
		<path d="M88 54 q6 2 4 12" fill="none" stroke={RED} stroke-width="3" />
		<rect x="98" y="96" width="40" height="18" fill={YEL} stroke-width="2" transform="rotate(8 118 105)" />
		<text x="118" y="109" transform="rotate(8 118 105)" text-anchor="middle" font-family={FONT} font-weight="900" font-size="9" fill={INK} stroke="none">SUB IN</text>
	{/if}
</svg>
