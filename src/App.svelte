<script>
	import LockDropDown from "./LockDropDown.svelte"

	let dataObj = {
		archtype: [1,2,3],
		flaws: [4,6,2],
		adverbs: [3,2,1],
		verts: [7,8,9],
		roles: [9,8,7]
	}
</script>

<main>
	<h1>Character Aid</h1>

	<button>Generate</button>

	<LockDropDown name="Archtype" listItems="{ dataObj.archtype }" />
	<LockDropDown name="Flaws" listItems="{ dataObj.flaws }" />
	<LockDropDown name="Adverbs" listItems="{ dataObj.adverbs }"/>
	<LockDropDown name="Verts" listItems="{ dataObj.verts }" />
	<LockDropDown name="Roles" listItems="{ dataObj.roles }"/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
