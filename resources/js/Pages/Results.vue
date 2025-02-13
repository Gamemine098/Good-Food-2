<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps({
    gender: String,
    age: String,
    weight: String,
    exercise: String,
    goal: String,
    reason: String,
    reason_not_healthy: String,
    health_interest: String,
});
const genderText = computed(() => {
    if (props.gender === 'male') {
        return 'ชาย';
    } else if (props.gender === 'female') {
        return 'หญิง';
    } else {
        return 'อื่นๆ';
    }
});

const exerciseText = computed(() => {
    if (props.exercise === 'low') {
        return 'น้อย/ไม่ออกกำลังกาย';
    } else if (props.exercise === 'moderate1') {
        return 'ปานกลาง/1-3 ครั้งต่อสัปดาห์';
    } else if (props.exercise === 'moderate2') {
        return 'ปานกลาง/4-5 ครั้งต่อสัปดาห์';
    } else if (props.exercise === 'high') {
        return 'หนัก/6-7 ครั้งต่อสัปดาห์';
    } else if (props.exercise === 'very_high') {
        return 'หนักมาก/2 ครั้งต่อวัน';
    } else {
        return 'ไม่ระบุ';
    }
});

const goalText = computed(() => {
    if (props.goal === 'muscle_gain') {
        return 'เพิ่มกล้ามเนื้อ';
    } else if (props.goal === 'fat_loss') {
        return 'ลดไขมัน';
    } else if (props.goal === 'muscle_maintenance') {
        return 'รักษากล้ามเนื้อ';
    } else {
        return 'ไม่ระบุ';
    }
});

const reasonText = computed(() => {
    if (props.reason === 'healthy') {
        return 'เพื่อให้สุขภาพแข็งแรง';
    } else if (props.reason === 'weight_loss') {
        return 'ต้องการลดน้ำหนัก';
    } else if (props.reason === 'try') {
        return 'อยากลอง';
    } else if (props.reason === 'influence') {
        return 'รับประทานตามคนใกล้ชิด';
    } else {
        return 'ไม่ระบุ';
    }
});

const reasonNotHealthyText = computed(() => {
    if (props.reason_not_healthy === 'taste') {
        return 'รสชาติไม่อร่อย';
    } else if (props.reason_not_healthy === 'hard_to_find') {
        return 'หารับประทานยาก';
    } else if (props.reason_not_healthy === 'expensive') {
        return 'ราคาแพง';
    } else {
        return 'ไม่ระบุ';
    }
});

const healthInterestText = computed(() => {
    if (props.health_interest === 'exercise') {
        return 'การออกกำลังกาย';
    } else if (props.health_interest === 'healthy_eating') {
        return 'รับประทานอาหารเพื่อสุขภาพ';
    } else if (props.health_interest === 'supplements') {
        return 'การรับประทานอาหารเสริม';
    } else {
        return 'ไม่ระบุ';
    }
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
                <Link
                    :href="route('Forms')"
                    class="text-xl transition-colors hover:text-green-400 hover:transition-colors"
                >
                    แบบทดสอบ
                </Link>
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
                    <p><strong>เพศ:</strong> {{ genderText }}</p>
                    <p><strong>อายุ:</strong> {{ age }}</p>
                    <p><strong>น้ำหนัก:</strong> {{ weight }}</p>
                    <p>
                        <strong>ระดับการออกกำลังกาย:</strong>
                        {{ exerciseText }}
                    </p>
                    <p><strong>เป้าหมาย:</strong> {{ goalText }}</p>
                    <p>
                        <strong>สาเหตุที่รับประทานเพื่อสุขภาพ:</strong>
                        {{ reasonText }}
                    </p>
                    <p>
                        <strong>สาเหตุที่ไม่รับประทานเพื่อสุขภาพ:</strong>
                        {{ reasonNotHealthyText }}
                    </p>
                    <p>
                        <strong>ความสนใจในสุขภาพทางด้านใด:</strong>
                        {{ healthInterestText }}
                    </p>
                </div>
            </div>
        </main>
    </div>
</template>
