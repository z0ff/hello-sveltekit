<script lang="ts">
	import { pageTitle } from '../store';
	pageTitle.set('Home');
</script>

<div
	class="w-full from-primary to-secondary text-primary-content -my-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20"
>
	<div class="hero min-h-screen pb-[8rem]">
		<!--<div class="hero-overlay bg-opacity-60" />-->
		<div class="hero-content text-neutral-content">
			<div class="max-w-lg">
				<h1 class="mb-5 text-9xl font-bold">Hello there.</h1>
				<p class="mb-5 text-xl">めちゃ拙いWebサイト</p>
			</div>
		</div>
	</div>
</div>

<div class="hero min-h-fit bg-base-200">
	<div class="hero-content lg:p-20 w-full flex-col lg:flex-row-reverse">
		<img src="https://placeimg.com/260/400/arch" class="m-5 max-w-sm rounded-lg shadow-2xl" />
		<div class="flex-auto"></div>
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Webデザイン<br />なんもわからん</h1>
			<p class="py-6">
				SveltekitとTailwind CSS、daisyUIを用いて簡単なサイトを構築し、<br> Clowdflare
				Pagesを用いてホスティングしてみました。
			</p>
			<a href="/about" class="btn btn-primary">MORE</a>
		</div>
	</div>
</div>

<div class="hero min-h-fit bg-base-200">
	<div class="hero-content lg:p-20 w-full flex-col lg:flex-row">
		<img src="https://placeimg.com/260/400/arch" class="m-5 flex-0 max-w-sm rounded-lg shadow-2xl" />
		<div class="flex-auto"></div>
		<div class="text-center lg:text-right">
			<h1 class="text-2xl font-bold pb-6">お問い合わせはこちら</h1>
			<button class="btn btn-primary">CONTACT</button>
		</div>
	</div>
</div>

<!--
	<div class="container p-5 w-full flex-grow">
	</div>
-->
