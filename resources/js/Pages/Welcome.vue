<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
}>();
</script>

<template>
    <Head title="Welcome" />
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
                        <h1 class="text-xl">Good Food</h1>
                    </nav>
                </header>

                <main class="mt-6">
                    <Link
                        :href="route('Menu')"
                        class="rounded-md px-3 py-2 hover:text-red-500"
                    >
                        Menu
                    </Link>
                </main>

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
