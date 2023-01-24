<script lang="ts">
	export let appBarTitle: string;
	export let profileSrc: string;
</script>

<div class="flex justify-between items-center font-bold text-t1">
	<div>
		<span>{appBarTitle}</span>
	</div>
	<div class="w-[3.2rem] rounded-[50%]">
		<img src={profileSrc} alt="" />
	</div>
</div>
