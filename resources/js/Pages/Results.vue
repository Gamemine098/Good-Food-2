<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const form = ref({
    gender: route.query.gender,
    age: route.query.age,
    weight: route.query.weight,
    exercise: route.query.exercise,
    goal: route.query.goal,
    reason: route.query.reason,
    reason_not_healthy: route.query.reason_not_healthy,
    health_interest: route.query.health_interest,
});
</script>

<template>
    <div>
        <header class="sticky top-0 text-center">
            <nav class="flex gap-6 bg-white px-48 py-7 shadow-md">
                <Link
                    :href="route('Welcome')"
                    class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                >
                    <h1 class="text-xl font-bold">Good Food</h1>
                </Link>
                <p class="text-xl font-bold">|</p>
                <Link
                    :href="route('Menu')"
                    class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                >
                    เมนูอาหาร
                </Link>
                <h1 class="text-xl underline">ผลลัพธ์</h1>
                <Link
                    :href="route('About')"
                    class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                >
                    เกี่ยวกับเรา
                </Link>
                <Link
                    :href="route('Contact')"
                    class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                >
                    ติดต่อเรา
                </Link>
            </nav>
        </header>
        <main class="my-2">
            <div class="container mx-56 p-4">
                <h2 class="mb-4 text-2xl font-bold">ผลลัพธ์</h2>
                <div class="mb-4">
                    <p><strong>เพศ:</strong> {{ form.gender }}</p>
                    <p><strong>อายุ:</strong> {{ form.age }}</p>
                    <p><strong>น้ำหนัก:</strong> {{ form.weight }}</p>
                    <p>
                        <strong>ระดับการออกกำลังกาย:</strong>
                        {{ form.exercise }}
                    </p>
                    <p><strong>เป้าหมาย:</strong> {{ form.goal }}</p>
                    <p>
                        <strong>สาเหตุที่รับประทานเพื่อสุขภาพ:</strong>
                        {{ form.reason }}
                    </p>
                    <p>
                        <strong>สาเหตุที่ไม่รับประทานเพื่อสุขภาพ:</strong>
                        {{ form.reason_not_healthy }}
                    </p>
                    <p>
                        <strong>ความสนใจในสุขภาพทางด้านใด:</strong>
                        {{ form.health_interest }}
                    </p>
                </div>
            </div>
        </main>
    </div>
</template>
