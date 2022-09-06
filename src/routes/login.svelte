<script lang="ts">
	import { layoutStore } from '$lib/stores/layout';

	export let errors: Record<string, string> = null;
	export let values: Record<string, string> = null;

	$layoutStore = {
		...$layoutStore,
		onDark: true,
		layout: 'col',
		title: 'Login'
	};
</script>

<!-- <section class="columns mt-6 pt-6">
	<div class="column is-half is-offset-one-quarter">
		<h1 class="title">Sign in</h1>
		{#if errors}
			<div class="block notification is-danger">{errors.form}</div>
		{/if}
		<form method="post">
			<div class="field">
				<label for="email" class="label">Email</label>
				<p class="control">
					<input
						id="email"
						name="email"
						value={values?.email ?? ''}
						class="input"
						type="email"
						placeholder="Email"
						required
					/>
				</p>
			</div>
			<div class="field">
				<label for="password" class="label">Password</label>
				<p class="control">
					<input
						id="password"
						name="password"
						value={values?.password ?? ''}
						class="input"
						type="password"
						placeholder="Password"
						required
					/>
				</p>
			</div>
			<div class="field">
				<p class="control">
					<button class="button is-fullwidth is-link">Sign in</button>
				</p>
			</div>
		</form>

		<div class="mt-6">
			<p class="has-text-centered">
				Don't have an account? <a href="/signup">Sign up</a>
			</p>
		</div>
	</div>
</section> -->

<div class="login">
	{#if errors}
		<div class="bg-red py-3 px-4 font-sans uppercase text-white">{errors.form}</div>
	{/if}
	<form action="/sign-up" method="POST">
		<p class="mb-8 text-gray-400">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam eaque, illum incidunt quo
			deleniti non minima in ratione temporibus doloremque perferendis ducimus accusamus cumque
			suscipit architecto, tempora, facere eveniet.
		</p>
		<div class="grid grid-cols-2 gap-5">
			<div class="flex-1">
				<label for="email" class="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-300"
					>Email</label
				>
				<input
					type="email"
					name="email"
					value={values?.email ?? ''}
					id="email"
					class="bg-slate-50 flex-1 border border-slate-300 text-white text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
					placeholder="doe@gmail.com"
				/>
			</div>
			<div class="flex-1">
				<label
					for="password"
					class="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-300">Password</label
				>
				<input
					type="password"
					name="password"
					value={values?.password ?? ''}
					id="password"
					class="bg-slate-50 flex-1 border border-slate-300 text-white text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
					placeholder="password..."
				/>
			</div>
			<button
				type="submit"
				class="bg-blue-50 text-xl grid-rows-5 leading-none tracking-wider h-42 self-end font-heading flex-1 border border-slate-300 text-white rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-blue-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
			>
				{ $layoutStore.title }
			</button>
		</div>
	</form>
</div>
