<script>
	import { loadDefaultJapaneseParser } from 'budoux';
	const parser = loadDefaultJapaneseParser();
	console.log(parser.translateHTMLString("Webデザインなんもわからん"));
</script>
<div class="hero min-h-fit bg-base-200">
	<div class="hero-content md:p-20 w-full flex-col md:flex-row">
		<img src="https://placeimg.com/260/400/arch" alt="" class="m-5 w-full md:w-max max-w-sm rounded-lg shadow-2xl" />
		<div class="flex-auto"></div>
		<div class="text-center lg:text-left">
			<h1 class="text-2xl md:text-5xl font-bold" style="word-break: keep-all; overflow-wrap: break-word;">Webデザイン<wbr>なんも<wbr>わからん</h1>
			<p class="py-6">
				{@html parser.translateHTMLString("SveltekitとTailwind CSS、daisyUIを用いて簡単なサイトを構築し、Clowdflare Pagesを用いてホスティングしてみました。")}
			</p>
			<a href="/about" class="btn btn-primary">MORE</a>
		</div>
	</div>
</div>
