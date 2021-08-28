<script>
	export let name
    export let locked
	export let listItems = []
    export let onLockChange = () => {} 
</script>

<div class="lock-drop-down">
	<fieldset>
		<legend>{ name }</legend>
		<select>
			{#each listItems as option}
			    <option>{ option }</option>
			{/each} 
		</select>
		Lock <input type="checkbox" data-name-for={ name.toLowerCase() } bind:checked={ locked } on:click={ onLockChange } >
	</fieldset>
</div>
