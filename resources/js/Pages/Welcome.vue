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
        <div class="relative min-h-screen items-center justify-center">
            <div class="relative w-full">
                <!-- Navbar -->
                <header class="text-center">
                    <nav class="flex gap-6 px-48 py-7 shadow-md">
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
                <main class="my-20">
                    <div
                        class="flex columns-2 items-center justify-center gap-36"
                    >
                        <div>
                            <h1
                                class="text-3xl transition-all hover:text-lime-600 hover:transition-all"
                            >
                                อาหารเพื่อสุขภาพ
                            </h1>
                            <p class="mt-1 text-2xl">
                                ทำแบบทดสอบเพื่อเราสามารถแนะนำอาหารให้ฟรี
                            </p>
                            <Link
                                :href="route('Forms')"
                                class="btn rounded-md px-3 py-2"
                            >
                                <button
                                    class="mt-3 h-10 w-44 rounded-lg bg-lime-300 text-center text-xl transition-all hover:shadow-md hover:transition-all"
                                >
                                    ทำแบบทดสอบ
                                </button>
                            </Link>
                        </div>
                        <img
                            src="https://i2-prod.getsurrey.co.uk/incoming/article30904976.ece/ALTERNATES/s615/0_GettyImages-1398073318.jpg"
                            alt="Healthy Food"
                            loading="lazy"
                            class="rounded-lg shadow-md"
                        />
                    </div>
                </main>

                <!-- Footer -->
                <footer
                    v-if="canLogin"
                    class="w-full bg-black px-1 py-16 text-white"
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
                            loading="lazy"
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
