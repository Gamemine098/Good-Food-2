<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
    phpVersion: string;
}>();
</script>

<template>
    <Head title="Menu" />
    <div>
        <img
            id="background"
            class="absolute -left-20 top-0 max-w-[877px]"
            src=""
        />
        <div class="relative min-h-screen items-center justify-center">
            <div class="relative w-full">
                <header
                    class="grid grid-cols-2 items-center gap-2 px-48 py-10 lg:grid-cols-3"
                >
                    <nav>
                        <Link
                            :href="route('welcome')"
                            class="rounded-md px-3 py-2 hover:text-red-500"
                        >
                            Good Food
                        </Link>
                    </nav>
                </header>

                <main class="mt-6">
                    <p class="text-center">Welcome to the Menu Page</p>
                    <p class="text-center">Explore our delicious offerings!</p>
                </main>

                <footer
                    v-if="canLogin"
                    class="bg-slate-300 px-1 py-16 text-center text-sm"
                >
                    Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
                    <Link
                        v-if="$page.props.auth.user"
                        :href="route('dashboard')"
                        class="rounded-md px-3 py-2 hover:text-red-500"
                    >
                        Dashboard
                    </Link>

                    <template v-else>
                        <Link
                            :href="route('login')"
                            class="rounded-md px-3 py-2 hover:text-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="rounded-md px-3 py-2 hover:text-red-500"
                        >
                            Register
                        </Link>
                    </template>
                </footer>
            </div>
        </div>
    </div>
</template>
