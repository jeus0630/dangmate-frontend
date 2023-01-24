<script>
	import '../app.css';
	import AppBar from '../components/AppBar.svelte';
	import AppBarBack from '../components/AppBarBack.svelte';
	import ButtonCategory from '../components/ButtonCategory.svelte';
	import Post from '../components/Post.svelte';
	import TextField from '../components/TextField.svelte';
	import TextFieldError from '../components/TextFieldError.svelte';
	import TextFieldGood from '../components/TextFieldGood.svelte';

	const props = {
		postImage: 'https://mungmate-bucket.s3.ap-northeast-2.amazonaws.com/pIHnaBuhMM',
		profileImage: 'https://mungmate-bucket.s3.ap-northeast-2.amazonaws.com/pIHnaBuhMM',
		userName: '말괄량이 조이',
		category: '댕댕 이야기',
		content:
			'OO동에 이사온지 얼마 되지 않아 아는 친구가 한 명도 없어요ㅜㅜ나이는 25살 여자입니다! 같이 밥먹고 운동 다닐 동네 친구 구해요!또래에 산책 같이 마음 맞는 분 찾으면 좋겠어요!',
		location: '공덕동',
		updatedAt: '방금전',
		numOfComments: 26,
		numOfLikes: 26
	};
</script>

<header class="p-[2rem]">
	<Post {...props} />
</header>
<main class="px-[2rem] text-l2">main</main>
<footer class="px-[2rem]">footer</footer>
