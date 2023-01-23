<script lang="ts">
	let appBarTitle: string = 'Title';
	let profileSrc: string = '/profile.jpg';
</script>

<div class="flex justify-between items-center font-bold text-t1">
	<div>
		<span>{appBarTitle}</span>
	</div>
	<div class="w-[3.2rem] rounded-[50%]">
		<img src={profileSrc} alt="" />
	</div>
</div>
