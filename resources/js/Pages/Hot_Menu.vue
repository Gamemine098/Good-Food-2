<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
}>();
</script>

<template>
    <Head title="Hot Menu" />
    <div>
        <img
            id="background"
            class="absolute -left-20 top-0 max-w-[877px]"
            src=""
        />
        <div class="relative min-h-screen items-center justify-center">
            <div class="relative w-full">
                <!-- Navbar -->
                <header class="py-8 text-center">
                    <nav class="flex gap-4 px-48">
                        <Link
                            :href="route('Welcome')"
                            class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                        >
                            <h1 class="text-xl font-bold">Good Food</h1></Link
                        >
                        <Link
                            :href="route('Menu')"
                            class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                            >Menu</Link
                        >
                        <h1 class="text-xl">Hot Menu</h1>
                        <Link
                            :href="route('Forms')"
                            class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                            >Forms</Link
                        >
                        <Link
                            :href="route('About')"
                            class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                            >About</Link
                        >
                        <Link
                            :href="route('Contact')"
                            class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                            >Contact</Link
                        >
                    </nav>
                </header>

                <!-- Main Content -->
                <main class="my-2">
                    <h1>Hello World!</h1>
                </main>

                <!-- Footer -->
                <footer
                    v-if="canLogin"
                    class="bg-gray-600 px-1 py-16 text-center text-sm text-white"
                >
                    <div>
                        <h1>สาขาวิชาเทคโนโลยีสารสนเทศ</h1>
                        <p>
                            ผลิตและพัฒนากำลังคนสายอาชีพด้านเทคโนโลยีสารสนเทศ
                            ให้เป็นกำลังคนที่มีคุณภาพและสมรรถนะสูง
                            เพื่อเป็นกำลังหลักสำคัญในการเพิ่มขีดความสามารถในการแข่งขันของประเทศ.
                        </p>
                    </div>
                    <br />
                    <div>
                        Copyright © 2025 สาขาวิชาเทคโนโลยีสารสนเทศ
                        วิทยาลัยเทคนิคเชียงใหม่ | All Rights Reserved
                    </div>
                    <Link
                        v-if="$page.props.auth.user"
                        :href="route('dashboard')"
                        class="rounded-md px-3 py-2 hover:text-red-500"
                    >
                        Dashboard
                    </Link>

                    <div v-else>
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
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
