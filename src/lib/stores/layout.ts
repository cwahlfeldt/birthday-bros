import { writable } from 'svelte/store';

interface AppLayout {
    bgColor: string,
    title: string,
    onDark: boolean,
    layout: string,
}

export const layoutStore = writable<AppLayout>({
    bgColor: 'slate',
    title: 'Birthday Bros',
    onDark: false,
    layout: 'col',
})