<script lang="ts">
	import About from '../components/hero/About.svelte'
	import Contact from '../components/hero/Contact.svelte'
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

<About />

<Contact />

<!--
	<div class="container p-5 w-full flex-grow">
	</div>
-->
