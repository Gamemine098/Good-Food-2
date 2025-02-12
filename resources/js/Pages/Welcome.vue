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
                <!-- Navbar -->
                <header class="py-8 text-center">
                    <nav class="flex gap-4 px-48">
                        <h1 class="text-xl font-bold">Good Food</h1>
                        <p class="text-xl font-bold">|</p>
                        <Link
                            :href="route('Menu')"
                            class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                            >เมนูอาหาร</Link
                        >
                        <Link
                            :href="route('Hot_Menu')"
                            class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                            >เมนูแนะนำ</Link
                        >
                        <Link
                            :href="route('Forms')"
                            class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                            >แบบทดสอบ</Link
                        >
                        <Link
                            :href="route('About')"
                            class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                            >เกี่ยวกับเรา</Link
                        >
                        <Link
                            :href="route('Contact')"
                            class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                            >ติดต่อเรา</Link
                        >
                    </nav>
                </header>

                <!-- Main Content -->
                <main class="container mx-auto my-7 min-h-screen">
                    <div class="">
                        <h1 class="text-3xl">อาหารเพื่อสุขภาพ</h1>
                        <p class="text-2xl">
                            ทำแบบทดสอบเพื่อเราสามารถแนะนำอาหารให้ฟรี
                        </p>
                        <Link
                            :href="route('Forms')"
                            class="btn m-auto rounded-md px-3 py-2"
                        >
                            <button
                                class="w-44 rounded-lg bg-lime-300 text-center text-2xl"
                            >
                                ทำแบบทดสอบ
                            </button>
                        </Link>
                    </div>
                </main>

                <!-- Footer -->
                <footer
                    v-if="canLogin"
                    class="sticky w-full bg-black px-1 py-16 text-white"
                >
                    <div class="mx-36">
                        <h1
                            class="text-left text-xl font-bold transition-colors hover:text-red-500 hover:transition-colors"
                        >
                            สาขาวิชาเทคโนโลยีสารสนเทศ
                        </h1>
                        <div class="mt-2 text-left">
                            <p>
                                ผลิตและพัฒนากำลังคนสายอาชีพด้านเทคโนโลยีสารสนเทศ
                            </p>
                            <p>ให้เป็นกำลังคนที่มีคุณภาพและสมรรถนะสูง</p>
                            <p>
                                เพื่อเป็นกำลังหลักสำคัญในการเพิ่มขีดความสามารถในการแข่งขันของประเทศ.
                            </p>
                        </div>
                    </div>
                    <br />
                    <div
                        class="container mx-36 mt-3 columns-2 text-right text-sm"
                    >
                        <img
                            src="https://it.cmtc.ac.th/wp-content/uploads/2024/07/logo_footer_itcmtc2024.png"
                            alt="it logo"
                        />
                        <span
                            >Copyright © 2025 สาขาวิชาเทคโนโลยีสารสนเทศ
                            วิทยาลัยเทคนิคเชียงใหม่</span
                        >
                        <div class="mt-2">
                            <Link
                                v-if="$page.props.auth.user"
                                :href="route('dashboard')"
                                class="px-3 py-2 transition-colors hover:text-red-500 hover:transition-colors"
                            >
                                Dashboard
                            </Link>

                            <div v-else>
                                <Link
                                    :href="route('login')"
                                    class="px-3 py-2 transition-colors hover:text-red-500 hover:transition-colors"
                                >
                                    Log in
                                </Link>

                                <Link
                                    v-if="canRegister"
                                    :href="route('register')"
                                    class="px-3 py-2 transition-colors hover:text-red-500 hover:transition-colors"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>
