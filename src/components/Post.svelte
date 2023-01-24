<script lang="ts">
	export let postImage: string;
	export let profileImage: string;
	export let userName: string;
	export let category: string;
	export let content: string;
	export let location: string;
	export let updatedAt: string;
	export let numOfComments: number;
	export let numOfLikes: number;
</script>

<div class="item flex flex-col">
	<div class="mb-[2.1rem]">
		<figure class="w-full">
			<img src={postImage} alt="" />
		</figure>
	</div>

	<div class="flex items-center justify-between">
		<div class="left flex items-center">
			<div class="profile w-[1.8rem] h-[1.8rem] rounded-[50%] overflow-hidden">
				<img src={profileImage} alt="" />
			</div>
			<em class="user inline-block ml-[0.6rem] font-bold text-t3">{userName}</em>
		</div>

		<div class="right">
			<div
				class="category flex justify-center items-center px-[1rem] py-[0.3rem] border-[0.1rem] rounded-[1.6rem] border-primary-emphasys text-primary-emphasys"
			>
				<span>{category}</span>
			</div>
		</div>
	</div>

	<div class="text mt-[2.8rem] mb-[3rem]">
		<p class="text-b2 ">{content}</p>
	</div>

	<div class="bottom flex justify-between items-center text-btn2">
		<div class="left flex">
			<div class="location mr-[1.2rem]">
				<span>{location}</span>
			</div>
			<div class="time">
				<span>{updatedAt}</span>
			</div>
		</div>
		<div class="right flex">
			<div class="comment flex items-center">
				<button class="mr-[0.5rem]">
					<img src="empty-comment.svg" alt="" />
				</button>
				<span>{numOfComments}</span>
			</div>
			<div class="like flex items-center ml-[1.2rem]">
				<button class="mr-[0.5rem]">
					<img src="empty-heart.svg" alt="" />
				</button>
				<span>{numOfLikes}</span>
			</div>
		</div>
	</div>
</div>
