<script lang="ts">
	import InfiniteLoading from "svelte-infinite-loading"

	const api = "https://hn.algolia.com/api/v1/search_by_date?tags=story"

	let page = 1
	let list = []

	function infiniteHandler({ detail: { loaded, complete } }) {
		fetch(`${api}&page=${page}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.hits.length) {
					page += 1
					list = [...list, ...data.hits]
					loaded()
				} else {
					complete()
				}
			})
	}
</script>

{#each list as item, index}
	<div class="hacker-news-item" data-num={index + 1}>
		<a target="_blank" href={item.url}>{item.title}</a>
		<p>
			<span>{item.points}</span>
			points by
			<a target="_blank" href="https://news.ycombinator.com/user?id={item.author}"
				>{item.author}</a
			>
			|
			<a target="_blank" href="https://news.ycombinator.com/item?id={item.objectID}"
				>{item.num_comments} comments</a
			>
		</p>
	</div>
{/each}

<InfiniteLoading on:infinite={infiniteHandler} />

<style>
	.hacker-news-item {
		margin: 10px 0;
		padding: 0 10px 0 40px;
		line-height: 16px;
		font-size: 14px;
	}
	.hacker-news-item::before {
		content: attr(data-num) ".";
		float: left;
		margin-left: -40px;
		width: 32px;
		color: #888;
		text-align: right;
	}
	.hacker-news-item > a {
		color: #333;
		text-decoration: none;
	}
	.hacker-news-item > a:hover {
		color: #000;
	}
	.hacker-news-item p {
		margin: 0;
		font-size: 12px;
	}
	.hacker-news-item p,
	.hacker-news-item p a {
		color: #888;
	}
	.hacker-news-item p a:not(:hover) {
		text-decoration: none;
	}
</style>
