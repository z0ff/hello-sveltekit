<script>
	import { loadDefaultJapaneseParser } from 'budoux';
	const parser = loadDefaultJapaneseParser();
</script>
<div class="hero min-h-fit bg-base-200">
	<div class="hero-content md:p-20 w-full flex-col md:flex-row-reverse">
		<img src="https://placeimg.com/260/400/arch" alt='' class="m-5 flex-0 w-full md:w-max max-w-sm rounded-lg shadow-2xl" />
		<div class="flex-auto"></div>
		<div class="text-center lg:text-left">
			<h1 class="text-2xl md:text-5xl font-bold pb-6">{@html parser.translateHTMLString("お問い合わせはこちら")}</h1>
			<button class="btn btn-primary">CONTACT</button>
		</div>
	</div>
</div>
