<script>
    import { pageTitle, articleName } from "$lib/store";
    pageTitle.set("About");
    articleName.set("");
</script>

<div class="container p-5 pb-0 w-full">
    <div class="prose inline-block lg:hidden"> 
        <h1>About</h1>
    </div>
</div>

<div class="container p-5 w-full max-w-5xl flex-grow">
    <article class="prose max-w-none">
        <h2>本サイトについて</h2>
        <p>本サイトは、JavaScriptフレームワークとして<a href="https://kit.svelte.jp/">Sveltekit</a>、UIフレームワークとして<a href="https://daisyui.com/">daisyUI</a>を使用しております。</p>
    </article>
</div>