<script lang="ts">
	import '../app.css';
	import { pageTitle, isDarkMode } from '../store';
	import { onMount } from 'svelte';

	let theme: string;
	let y: number;
	let pageTitleValue: String;
	let drawerContent: HTMLElement;

	onMount(() => {
		let isDark: boolean;
		const storageTheme = sessionStorage.getItem('theme');
		if (storageTheme == null) {
			isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		} else {
			isDark = storageTheme == 'dark' ? true : false;
		}
		const elem = document.getElementById('darkmode') as HTMLInputElement | null;
		switchTheme(isDark);
		elem!.checked = isDark;
	});

	pageTitle.subscribe((value) => {
		pageTitleValue = value;
	});

	function getScroll() {
		y = drawerContent!.scrollTop;
	}

	function switchTheme(f: boolean) {
		theme = f ? 'mydark' : 'mylight';
		isDarkMode.set(`${f}`);
	}

	function toggleDarkMode() {
		const elem = document.getElementById('darkmode') as HTMLInputElement | null;
		elem!.checked = !elem!.checked;
		switchTheme(elem!.checked);
		sessionStorage.setItem('theme', elem!.checked ? 'dark' : 'light');
	}

	function toggleDrawer() {
		const elem = document.getElementById('my-drawer-2') as HTMLInputElement | null;
		if (elem != null) elem.checked = false;
	}

	$: switchNavbarStyle = y > 40 ? true : false;
</script>

<svelte:head>
	<title>{pageTitleValue} : Hello</title>
</svelte:head>

<div class="drawer drawer-mobile" data-theme={theme}>
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div
		bind:this={drawerContent}
		id="drawercontent"
		on:scroll={getScroll}
		class="drawer-content flex flex-col items-center"
	>
		<!-- Page content here -->
		<div
			class={`navbar sticky top-0 z-40 bg-opacity-90 backdrop-blur ${
				switchNavbarStyle ? 'bg-base-300' : ''
			}`}
		>
			<div class="flex-none lg:hidden">
				<label for="my-drawer-2" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<div class="flex-1 hidden lg:inline-block">
				{#if pageTitleValue != 'Home'}
					<span class="px-5 normal-case text-2xl font-bold">
						{pageTitleValue}
					</span>
				{/if}
			</div>
			<div class="flex-1 inline-block lg:hidden">
				<a href="/" class="btn btn-ghost">
					<div class="text-xl normal-case text-left">
						<div>Hello!</div>
						<div class="text-xs">Sveltekit & daisyUI</div>
					</div>
				</a>
			</div>
			<div class="flex-none">
				<label on:click={toggleDarkMode} class="btn btn-square btn-ghost swap swap-rotate">
					<!-- this hidden checkbox controls the state -->
					<input id="darkmode" type="checkbox" />
					<!-- sun icon -->
					<svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
						><path
							d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
						/></svg
					>
					<!-- moon icon -->
					<svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
						><path
							d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
						/></svg
					>
				</label>
			</div>
		</div>

		<slot />

		<footer class="footer items-center p-4 bg-base-300 text-base-content">
			<div class="items-center grid-flow-col">
				<p>Copyright © 2022 - All right reserved</p>
			</div>
			<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
						/></svg
					>
				</a>
				<a
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
						/></svg
					></a
				>
			</div>
		</footer>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay backdrop-blur" />
		<div class="p-4 overflow-y-auto w-60 bg-neutral text-neutral-content">
			<a href="/" class="btn btn-ghost py-4 my-5 w-full h-max hidden lg:inline-block">
				<div class="text-6xl normal-case text-center">
					<div>Hello!</div>
					<div class="text-base">Sveltekit & daisyUI</div>
				</div>
			</a>
			<ul class="menu overflow-y-auto">
				<!-- Sidebar content here -->
				<li>
					<a on:click={toggleDrawer} href="/">
						<div class="text-xl text-left">
							<div>Home</div>
							<div class="text-sm">ホーム</div>
						</div>
					</a>
				</li>
				<li>
					<a on:click={toggleDrawer} href="/whatsnew/1">
						<div class="text-xl text-left">
							<div>What's new</div>
							<div class="text-sm">新着情報</div>
						</div>
					</a>
				</li>
				<li>
					<a on:click={toggleDrawer} href="/about">
						<div class="text-xl text-left">
							<div>About</div>
							<div class="text-sm">このサイトについて</div>
						</div>
					</a>
				</li>
				<li>
					<a on:click={toggleDrawer} href="/machines">
						<div class="text-xl text-left">
							<div>Machines</div>
							<div class="text-sm">PC一覧</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
