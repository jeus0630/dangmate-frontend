<script lang="ts">
	export let label: string;
	export let text: string;
	export let placeholderText: string;
	export let helperText: string;
</script>

<div class="wrap flex flex-col">
	<label for="text-field" class="text-l3 text-gray-body"> {label} </label>
	<input
		type="text"
		id="text-field"
		class="text-l2 text-[#000] placeholder:text-gray-disabled mt-[0.2rem] mb-[0.4rem] pl-[1rem] py-[1.2rem] border-b-system-good border-b-[0.1rem]"
		bind:value={text}
		placeholder={placeholderText}
	/>
	<span class="text-l3 text-system-good">{helperText}</span>
</div>
