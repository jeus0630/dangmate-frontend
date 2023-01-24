<script lang="ts">
	export let isOn: boolean;
	export let btnName: string;
</script>

{#if isOn}
	<button class="text-btn2 text-primary-emphasys">
		<span class="inline-block mb-[0.5rem]">
			{btnName}
		</span>
		<hr class="h-[0.2rem] bg-primary-base" />
	</button>
{:else}
	<button class="text-btn2 text-gray-disabled">
		{btnName}
	</button>
{/if}
