<script>
	export let name
	export let listItems = []

</script>

<div class="lock-drop-down">
	<fieldset>
		<legend>{ name }</legend>
		<select>
			{#each listItems as option}
			<option>{ option }</option>
			{/each} 
		</select>
		Lock <input type="checkbox">
	</fieldset>
</div>
