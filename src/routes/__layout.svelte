<script lang="ts">
	import '../app.css';
	import { layoutStore } from '$lib/stores/layout';
	import { session } from '$app/stores';
	import { supabaseClient } from '$lib/db';
	import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';
</script>

<svelte:head>
	<title>Email and Password Demo - Supabase Auth Helpers</title>
</svelte:head>

<SupaAuthHelper {supabaseClient} {session}>
	<!-- <div class="navbar-end">
				{#if $session?.user?.id}
					<a class="button" href="/api/auth/logout">Sign out</a>
				{/if}
			</div> -->
	<nav class="">
		<div class="absolute top-4 left-6 flex gap-6">
			<a href="/" class="font-300 {$layoutStore.onDark ? 'text-slate-900' : 'text-gray-50'}">
				<svg
					class="w-8 svg-standalone-icon"
					preserveAspectRatio="none"
					viewBox="203.26 115 143.47 143.47"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g fill-rule="evenodd">
						<path
							d="m329.72 131.24c-3.81-3.982-11.775-5.887-23.724-5.887h-65.975c-9.697 0-16.451 2.078-20.433 6.407-3.637 3.809-5.542 10.39-5.542 19.567v69.266c0 7.965 2.252 14.372 6.407 18.875 4.503 4.675 11.083 7.099 19.568 7.099h69.265c10.91 0 18.01-1.558 21.126-4.848 3.291-3.464 4.849-10.39 4.849-21.126l-31.862-40.001 31.862-29.265c0-9.697-1.732-16.45-5.541-20.087zm-32.901 20.087-56.798 52.123v-52.123zm5.195 69.266h-42.252l24.416-22.338z"
							fill={$layoutStore.onDark ? '#ffc72c' : '#3b82f6'}
						/>
					</g>
				</svg>
			</a>
		</div>

		<div class="absolute top-4 right-8 flex gap-6">
			<a
				href="login"
				class="font-300 text-lg {!$layoutStore.onDark ? 'text-slate-500' : 'text-gray-400'}"
				>login</a
			>
			<a
				href="signup"
				class="font-300 text-lg {!$layoutStore.onDark ? 'text-slate-500' : 'text-gray-400'}"
				>sign up</a
			>
		</div>
	</nav>

	<main class={$layoutStore.onDark ? 'bg-slate-900' : 'bg-gray-50'}>
		<div class="container mx-auto px-10 h-screen font-sans flex items-center max-w-7xl gap-8">
			<div
				class="{$layoutStore.layout === 'row'
					? 'flex flex-col'
					: 'grid grid-cols-[35%_65%] gap-12'} h-full max-h-96 items-start justify-center gap-12"
			>
				<h1
					class="w-full max-w-md font-heading font-semibold text-10xl leading-tighter mb-2 {$layoutStore.onDark
						? 'text-gray-50'
						: 'text-slate-700'}"
				>
					{@html $layoutStore.title}
				</h1>
				<div class="w-full flex h-screen max-h-96 flex-{$layoutStore.layout}">
					<slot />
				</div>
			</div>
		</div>
	</main>
</SupaAuthHelper>
