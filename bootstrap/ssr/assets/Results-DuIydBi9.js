import { defineComponent, computed, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./bg-2-DIgs2r2g.js";
import { Head, Link } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Results",
  __ssrInlineRender: true,
  props: {
    gender: String,
    age: String,
    weight: String,
    exercise: String,
    goal: String,
    reason: String,
    reason_not_healthy: String,
    health_interest: String
  },
  setup(__props) {
    const props = __props;
    const genderText = computed(() => {
      if (props.gender === "male") {
        return "ชาย";
      } else if (props.gender === "female") {
        return "หญิง";
      } else {
        return "อื่นๆ";
      }
    });
    const exerciseText = computed(() => {
      if (props.exercise === "low") {
        return "น้อย/ไม่ออกกำลังกาย";
      } else if (props.exercise === "moderate1") {
        return "ปานกลาง/1-3 ครั้งต่อสัปดาห์";
      } else if (props.exercise === "moderate2") {
        return "ปานกลาง/4-5 ครั้งต่อสัปดาห์";
      } else if (props.exercise === "high") {
        return "มาก/ทุกวัน";
      } else {
        return "ไม่ระบุ";
      }
    });
    const goalText = computed(() => {
      if (props.goal === "muscle_gain") {
        return "เพิ่มกล้ามเนื้อ";
      } else if (props.goal === "fat_loss") {
        return "ลดไขมัน";
      } else if (props.goal === "muscle_maintenance") {
        return "รักษากล้ามเนื้อ";
      } else {
        return "ไม่ระบุ";
      }
    });
    const reasonText = computed(() => {
      if (props.reason === "healthy") {
        return "เพื่อให้สุขภาพแข็งแรง";
      } else if (props.reason === "weight_loss") {
        return "ต้องการลดน้ำหนัก";
      } else if (props.reason === "try") {
        return "อยากลอง";
      } else if (props.reason === "influence") {
        return "รับประทานตามคนใกล้ชิด";
      } else {
        return "ไม่ระบุ";
      }
    });
    const reasonNotHealthyText = computed(() => {
      if (props.reason_not_healthy === "taste") {
        return "รสชาติไม่อร่อย";
      } else if (props.reason_not_healthy === "hard_to_find") {
        return "หารับประทานยาก";
      } else if (props.reason_not_healthy === "expensive") {
        return "ราคาแพง";
      } else {
        return "ไม่ระบุ";
      }
    });
    const healthInterestText = computed(() => {
      if (props.health_interest === "exercise") {
        return "การออกกำลังกาย";
      } else if (props.health_interest === "healthy_eating") {
        return "รับประทานอาหารเพื่อสุขภาพ";
      } else if (props.health_interest === "supplements") {
        return "การรับประทานอาหารเสริม";
      } else {
        return "ไม่ระบุ";
      }
    });
    const male_low_musclegain = computed(() => {
      return props.gender === "male" && props.exercise === "low" && props.goal === "muscle_gain";
    });
    const male_moderate1_musclegain = computed(() => {
      return props.gender === "male" && props.exercise === "moderate1" && props.goal === "muscle_gain";
    });
    const male_moderate2_musclegain = computed(() => {
      return props.gender === "male" && props.exercise === "moderate2" && props.goal === "muscle_gain";
    });
    const male_high_musclegain = computed(() => {
      return props.gender === "male" && props.exercise === "high" && props.goal === "muscle_gain";
    });
    const male_low_fat_loss = computed(() => {
      return props.gender === "male" && props.exercise === "low" && props.goal === "fat_loss";
    });
    const male_moderate1_fat_loss = computed(() => {
      return props.gender === "male" && props.exercise === "moderate1" && props.goal === "fat_loss";
    });
    const male_moderate2_fat_loss = computed(() => {
      return props.gender === "male" && props.exercise === "moderate2" && props.goal === "fat_loss";
    });
    const male_high_fat_loss = computed(() => {
      return props.gender === "male" && props.exercise === "high" && props.goal === "fat_loss";
    });
    const male_low_muscle_maintenance = computed(() => {
      return props.gender === "male" && props.exercise === "low" && props.goal === "muscle_maintenance";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Results" }, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="fixed -z-10"><div><header class="fixed top-0 z-10 w-full text-center"><nav class="mx-2 my-2 flex items-center justify-between gap-6 rounded-xl border border-black/10 bg-white/50 px-14 py-7 shadow-md backdrop-blur-xl"><div class="flex items-center gap-4"><svg height="33px" width="33px" version="1.1" id="Capa_1" viewBox="0 0 320.718 320.718" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M304.379,171.685c-6.832-1.982-13.496-2.859-21.13-2.859c-28.589,0-54.084,14.214-70.084,37.686 c0-0.001,0-0.001,0-0.001c9,14.464,19.373,43.49,7.203,75.204c7.565-2.472,14.592-5.434,20.885-8.812 c2.964-4.646,13.099-21.798,18.288-47.575c-3.365-0.25-7.082-1.137-10.728-3.282c-7.089-4.171-11.561-11.677-13.319-22.309 c-0.678-4.097,2.102-7.969,6.2-8.647c4.098-0.675,7.973,2.094,8.65,6.193c0.997,6.026,3.058,9.996,6.123,11.799 c1.731,1.019,3.705,1.294,5.407,1.276c0.883-8.495,1.162-17.666,0.502-27.438c-0.279-4.144,2.854-7.73,6.998-8.011 c4.135-0.251,7.73,2.854,8.011,6.998c2.015,29.851-3.711,54.489-10.151,71.971C292.357,229.024,301.358,196.167,304.379,171.685z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M304.405,171.49c0.19-1.554,0.35-3.06,0.494-4.541C304.754,168.431,304.595,169.938,304.405,171.49 z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M304.985,166.14c0.162-1.736,0.298-3.424,0.405-5.044 C305.283,162.716,305.148,164.402,304.985,166.14z"></path></g><g><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M195.769,204.543c-9.079-13.633-20.883-25.129-35.552-32.548c-2.11-1.068-3.596-3.065-4.01-5.394 c-2.868-16.124-13.233-36.862-30.211-51.966c1.629,1.452,3.207,2.947,4.714,4.493c-3.171-2.243-6.517-4.294-10.055-6.083 c-20.415-10.323-43.245-9.934-66.073,1.103c-3.155,2.191-10.192,5.631-27.245,13.456c0.624,62.138,13.408,106.293,38.96,134.375 c0.802,0.952,1.616,1.887,2.445,2.806c8.218,6.096,17.071,10.748,26.169,14.261c-5.027-6.817-10.39-15.191-14.98-24.821 c-9.257-19.42-12.923-38.862-11.053-57.722c-3.218-2.927-8.028-7.963-11.876-14.806c-5.934-10.551-10.737-27.442,0.082-47.988 c1.936-3.675,6.485-5.087,10.159-3.151c3.675,1.936,5.086,6.484,3.15,10.159c-8.604,16.341-3.608,29.355,2.12,37.419 c2.946-9.846,7.467-19.47,13.572-28.776c2.279-3.475,6.941-4.441,10.414-2.162c3.473,2.279,4.441,6.941,2.162,10.413 C84.41,179.331,80.122,202.323,85.797,226.2c8.705-4.288,23.264-15.437,26.143-42.699c0.438-4.129,4.117-7.101,8.27-6.689 c4.131,0.437,7.125,4.138,6.689,8.27c-3.814,36.124-24.661,50.334-36.498,55.551c0.944,2.367,1.972,4.74,3.107,7.121 c9.537,20.009,22.965,34.187,27.367,38.531c15.719,2.931,30.988,3.528,43.731,3.528c13.641,0,25.955-1.17,37.102-3.283 c0.092-0.202,0.189-0.403,0.3-0.598C224.825,245.734,195.779,204.558,195.769,204.543z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M67.46,263.823c-0.479-0.367-0.961-0.728-1.435-1.105C66.499,263.096,66.981,263.456,67.46,263.823 z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M119.637,109.502c-1.298-0.953-2.633-1.864-3.995-2.746 C117.002,107.639,118.34,108.549,119.637,109.502z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M125.15,113.909c-1.321-1.146-2.679-2.256-4.078-3.328 C122.468,111.655,123.83,112.763,125.15,113.909z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M114.105,105.758c-1.856-1.143-3.753-2.235-5.722-3.231 C110.352,103.523,112.25,104.614,114.105,105.758z"></path></g><g><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M293.182,110.308c0.11,0.769,0.224,1.533,0.321,2.319 C293.406,111.842,293.292,111.077,293.182,110.308z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M293.738,114.762c0.088,0.827,0.182,1.646,0.257,2.491 C293.92,116.409,293.826,115.589,293.738,114.762z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M292.48,105.999c0.133,0.723,0.266,1.446,0.387,2.185 C292.746,107.445,292.613,106.723,292.48,105.999z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M294.402,123.555c0.102,2.226,0.16,4.506,0.174,6.84 C294.563,128.062,294.505,125.782,294.402,123.555z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M294.543,135.047c0.02-1.047,0.046-2.102,0.048-3.129C294.589,132.945,294.563,134,294.543,135.047 z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M294.149,119.33c0.067,0.905,0.141,1.8,0.192,2.724C294.29,121.13,294.215,120.235,294.149,119.33z "></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M290.65,97.933c0.175,0.636,0.346,1.278,0.509,1.929C290.996,99.21,290.825,98.568,290.65,97.933z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M291.636,101.871c0.155,0.681,0.308,1.365,0.45,2.062 C291.943,103.235,291.79,102.552,291.636,101.871z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M281.759,78.401c0.215,0.298,0.415,0.62,0.626,0.927C282.174,79.021,281.974,78.699,281.759,78.401 z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M283.593,81.148c0.241,0.388,0.466,0.8,0.699,1.2C284.06,81.948,283.834,81.536,283.593,81.148z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M289.522,94.182c0.194,0.591,0.381,1.19,0.564,1.796C289.904,95.373,289.716,94.773,289.522,94.182 z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M146.266,114.03c-1.577-1.854-3.204-3.681-4.922-5.448 C143.062,110.349,144.687,112.178,146.266,114.03z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M279.786,86.745c-8.865-10.501-19.678-12.651-25.084-13.26c-6.69,7.534-8.044,13.246-10.657,24.415 c-0.527,2.249-1.091,4.659-1.746,7.275c-0.541,2.163-2.015,3.974-4.024,4.944c-2.008,0.97-4.344,0.998-6.374,0.079 c-11.737-5.314-24.234-8.009-37.145-8.009c-18.625,0-34.006,4.188-47.486,13.008c-0.053-0.064-0.11-0.125-0.162-0.189 c12.054,14.469,19.913,31.106,23.16,45.291c12.131,6.711,22.639,15.836,30.951,26.831c7.636-11.536,17.642-21.384,29.41-28.873 c15.787-10.042,34.063-15.351,52.854-15.351c3.754,0,7.297,0.195,10.749,0.582c0.132-2.251,0.217-4.448,0.278-6.617 C293.821,114.577,288.844,97.475,279.786,86.745z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M285.285,84.099c0.24,0.452,0.467,0.923,0.698,1.388C285.752,85.023,285.526,84.551,285.285,84.099 z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M288.251,90.623c0.212,0.546,0.414,1.105,0.616,1.666 C288.666,91.727,288.463,91.169,288.251,90.623z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M286.839,87.261c0.228,0.5,0.444,1.016,0.662,1.531C287.283,88.277,287.067,87.761,286.839,87.261z "></path></g><g><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M122.922,45.422c-0.353-0.076-0.707-0.153-1.064-0.225 C122.215,45.269,122.568,45.346,122.922,45.422z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M237.781,60.17c-20.244-13.099-43.408-19.746-69.096-19.746c-13.909,0-27.429,2.171-40.258,6.365 l0,0c18.351,5.313,31.085,16.55,37.346,33.066c8.994-2.393,18.628-3.586,28.982-3.586c12.027,0,23.75,2.006,34.96,5.971 c1.989-8.471,3.797-15.439,8.521-22.761C238.089,59.708,237.924,59.94,237.781,60.17z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M238.882,58.498c0.636-0.937,1.298-1.878,2.041-2.833C240.18,56.62,239.515,57.562,238.882,58.498z "></path></g><g><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M125.87,61.833c0.391,0.129,0.777,0.275,1.165,0.412C126.646,62.108,126.261,61.961,125.87,61.833z "></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M110.425,58.757c0.419,0.039,0.839,0.078,1.261,0.124 C111.263,58.835,110.845,58.795,110.425,58.757z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M128.646,62.832c0.41,0.16,0.813,0.336,1.219,0.506C129.46,63.168,129.056,62.992,128.646,62.832z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M123.057,60.982c0.301,0.083,0.599,0.182,0.899,0.269 C123.656,61.164,123.358,61.065,123.057,60.982z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M113.263,59.07c0.424,0.054,0.847,0.105,1.272,0.166C114.109,59.175,113.687,59.123,113.263,59.07z "></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M119.198,60.064c0.354,0.074,0.708,0.139,1.061,0.219 C119.906,60.204,119.552,60.139,119.198,60.064z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M116.17,59.496c0.409,0.068,0.817,0.13,1.226,0.205C116.986,59.625,116.578,59.563,116.17,59.496z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M131.363,63.988c0.414,0.19,0.823,0.394,1.231,0.596C132.186,64.382,131.778,64.179,131.363,63.988 z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M143.669,72.567c0.306,0.316,0.619,0.621,0.916,0.95C144.289,73.188,143.975,72.883,143.669,72.567 z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M142.442,71.334c-0.336-0.316-0.684-0.612-1.03-0.913 C141.758,70.722,142.106,71.018,142.442,71.334z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M145.877,75.069c0.23,0.286,0.473,0.555,0.696,0.851C146.35,75.624,146.107,75.355,145.877,75.069z "></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M136.58,66.818c0.392,0.248,0.782,0.502,1.166,0.764C137.361,67.32,136.972,67.067,136.58,66.818z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M134.012,65.313c0.407,0.219,0.808,0.448,1.208,0.681C134.82,65.761,134.419,65.532,134.012,65.313 z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M103.365,58.375c-0.371-0.006-0.742-0.014-1.108-0.016 C102.622,58.362,102.994,58.369,103.365,58.375z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M139.047,68.513c0.373,0.277,0.746,0.554,1.111,0.846C139.793,69.067,139.421,68.79,139.047,68.513 z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M86.421,59.41c0.162-0.022,0.324-0.045,0.493-0.067C86.745,59.365,86.585,59.387,86.421,59.41z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M84.98,59.619c0.119-0.018,0.241-0.037,0.366-0.055C85.22,59.582,85.101,59.6,84.98,59.619z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M82.763,59.985c0.016-0.003,0.034-0.006,0.049-0.009C82.796,59.979,82.779,59.982,82.763,59.985z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M83.76,59.813c0.067-0.011,0.139-0.023,0.209-0.034C83.898,59.79,83.828,59.801,83.76,59.813z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M57.59,82.309c-1.125,0.261-2.26,0.546-3.405,0.856C55.33,82.854,56.464,82.571,57.59,82.309z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M48.165,85.026v0.001c2-0.547,3.173-1.027,4.737-1.478C51.339,83.999,50.165,84.479,48.165,85.026z "></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M146.597,75.954c-21.685-14.143-55.375-6.94-55.825-6.84c-0.025,0.006-0.05,0.006-0.074,0.011 c-0.027,0.006-0.054,0.016-0.081,0.021c-8.155,1.653-20.84,6.054-27.719,12.076c-1.297,0.221-2.61,0.481-3.934,0.767 c23.673-5.124,42.994,0.435,56.207,7.116c5.278,2.67,10.204,5.827,14.783,9.333c6.72-5.587,13.916-10.083,21.624-13.542 C150.243,81.516,148.555,78.555,146.597,75.954z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M92.223,58.764c0.144-0.012,0.28-0.026,0.426-0.038C92.503,58.738,92.368,58.752,92.223,58.764z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M97.242,58.445c0.256-0.01,0.524-0.016,0.784-0.025C97.765,58.429,97.498,58.435,97.242,58.445z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M99.696,58.374c0.327-0.006,0.662-0.007,0.994-0.009C100.357,58.367,100.023,58.368,99.696,58.374z "></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M104.912,58.412c0.388,0.013,0.781,0.029,1.173,0.047 C105.692,58.441,105.301,58.424,104.912,58.412z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M89.979,58.978c0.201-0.021,0.394-0.043,0.601-0.064C90.373,58.935,90.181,58.957,89.979,58.978z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M88.09,59.193c0.189-0.023,0.374-0.046,0.569-0.069C88.463,59.146,88.28,59.169,88.09,59.193z"></path><path style="${ssrRenderStyle({ "fill": "#84bd93" })}" d="M107.636,58.541c0.409,0.025,0.819,0.053,1.231,0.083 C108.454,58.594,108.045,58.566,107.636,58.541z"></path></g><path style="${ssrRenderStyle({ "fill": "#3f2d20" })}" d="M309.196,145.291c2.249-35.769-3.77-62.371-17.918-79.128c-9.224-10.927-21.459-17.198-36.38-18.65 c-25.28-20.713-56.449-31.649-90.292-31.649c-32.322,0-62.803,10.398-88.268,30.088c-7.727,1.781-34.179,9.045-41.126,26.285 c-0.195,0.482-0.339,0.983-0.43,1.495l-3.351,18.869c-4.983,2.573-16.592,8.051-27.037,12.826C1.717,106.652,0,109.325,0,112.269 c0,76.01,17.256,128.012,52.752,158.976c34.537,30.126,80.378,33.61,111.854,33.61c51.296,0,91.167-15.401,118.51-45.775 c23.078-25.637,36.078-61.262,37.596-103.028C320.9,150.77,317.138,147.976,309.196,145.291z M277.385,181.907 c-0.28-4.144-3.875-7.249-8.01-6.998c-4.144,0.28-7.277,3.866-6.998,8.01c0.66,9.772,0.382,18.943-0.501,27.438 c-1.703,0.018-3.675-0.258-5.407-1.276c-3.065-1.803-5.125-5.773-6.121-11.799c-0.678-4.099-4.549-6.869-8.647-6.193 c-4.098,0.678-6.87,4.55-6.193,8.647c1.759,10.633,6.245,18.139,13.334,22.31c3.646,2.145,7.393,3.032,10.757,3.282 c-5.189,25.777-15.266,42.93-18.23,47.576c-6.293,3.377-13.203,6.34-20.768,8.811c14.017-36.524-3.134-69.496-10.192-80.749 c14.766-26.638,42.379-43.017,73.074-43.017c8.011,0,14.693,0.951,21.908,3.147c-1.645,24.825-9.194,64.131-38.156,92.782 C273.674,236.396,279.401,211.758,277.385,181.907z M202.008,285.931c-0.112,0.196-0.209,0.397-0.301,0.598 c-11.146,2.113-23.46,3.283-37.101,3.283c-12.743,0-28.012-0.597-43.731-3.528c-4.402-4.344-17.829-18.523-27.366-38.531 c-1.135-2.382-2.163-4.754-3.107-7.121c11.837-5.217,32.684-19.427,36.498-55.551c0.436-4.132-2.559-7.833-6.689-8.27 c-4.153-0.411-7.832,2.561-8.27,6.689c-2.879,27.262-17.438,38.411-26.143,42.699c-5.675-23.877-1.387-46.87,12.864-68.589 c2.279-3.472,1.311-8.135-2.162-10.413c-3.472-2.279-8.135-1.312-10.414,2.162c-6.106,9.306-10.627,18.929-13.572,28.776 c-5.728-8.063-10.724-21.078-2.12-37.419c1.936-3.675,0.525-8.223-3.15-10.159c-3.674-1.936-8.223-0.524-10.159,3.151 c-10.819,20.546-6.016,37.437-0.082,47.988c3.847,6.843,8.658,11.879,11.876,14.806c-1.87,18.86,1.796,38.302,11.053,57.722 c4.59,9.629,9.953,18.004,14.98,24.82c-11.394-4.4-22.421-10.546-32.271-19.137c-31.303-27.306-46.884-74.054-47.574-142.824 c17.053-7.825,24.09-11.265,27.245-13.456c22.827-11.036,45.658-11.426,66.073-1.103c27.501,13.907,44.068,42.963,47.823,64.074 c0.414,2.329,1.9,4.327,4.01,5.394c14.669,7.419,26.474,18.914,35.552,32.548C195.779,204.558,224.825,245.734,202.008,285.931z M81.098,60.309c0.028-0.006,0.054-0.016,0.081-0.022c0.024-0.005,0.049-0.005,0.075-0.011c0.578-0.129,55.875-11.953,70.325,24.62 c-7.709,3.459-14.904,7.955-21.624,13.541c-4.579-3.507-9.505-6.664-14.783-9.333c-15.19-7.68-38.447-13.895-67.117-4.077 l1.382-7.783C53.541,68.762,70.88,62.38,81.098,60.309z M279.785,75.866c11.302,13.388,16.259,36.684,14.446,67.622 c-3.453-0.387-6.996-0.582-10.749-0.582c-18.791,0-37.067,5.309-52.854,15.351c-11.769,7.488-21.774,17.337-29.41,28.873 c-8.312-10.995-18.82-20.12-30.951-26.831c-3.74-16.338-13.579-35.937-28.924-51.718c14.876-11.744,32.002-17.271,53.412-17.271 c12.911,0,25.407,2.695,37.145,8.009c2.03,0.918,4.366,0.891,6.374-0.079c2.008-0.97,3.482-2.781,4.024-4.944 c0.655-2.616,1.219-5.026,1.746-7.275c2.613-11.169,3.967-16.882,10.657-24.415C260.108,63.215,270.92,65.366,279.785,75.866z M229.716,82.24c-11.21-3.965-22.932-5.971-34.96-5.971c-10.355,0-19.989,1.193-28.982,3.586c-7.6-20.049-24.715-32.339-49.87-35.669 c-2.411-0.319-4.789-0.538-7.11-0.681c17.252-8.281,36.147-12.6,55.813-12.6c28.792,0,54.425,8.328,76.316,24.76C234.093,64.453,232.046,72.313,229.716,82.24z"></path></g></g></svg>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("Welcome"),
        class: "text-2xl transition-colors hover:text-green-500 hover:transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-xl font-bold"${_scopeId}>Good Food</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-xl font-bold" }, "Good Food")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("Menu"),
        class: "text-xl transition-colors hover:text-green-400 hover:transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` เมนูอาหาร `);
          } else {
            return [
              createTextVNode(" เมนูอาหาร ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("Forms"),
        class: "text-xl transition-colors hover:text-green-400 hover:transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` แบบทดสอบ `);
          } else {
            return [
              createTextVNode(" แบบทดสอบ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("About"),
        class: "text-xl transition-colors hover:text-green-400 hover:transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` เกี่ยวกับเรา `);
          } else {
            return [
              createTextVNode(" เกี่ยวกับเรา ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("Welcome"),
        class: "text-xl transition-colors hover:text-green-400 hover:transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ติดต่อเรา `);
          } else {
            return [
              createTextVNode(" ติดต่อเรา ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav></header><main class="overflow-x-hidden pb-20 pt-40 backdrop-blur-sm"><div class="container mx-56 rounded-lg bg-white/60 p-4 shadow-lg backdrop-blur-lg"><h2 class="mb-4 text-2xl font-bold transition-all hover:text-lime-600 hover:transition-all"> คำตอบที่คุณเลือก </h2><div class="my-4"><p class="text-xl"><strong>เพศ:</strong> ${ssrInterpolate(genderText.value)}</p><p class="text-xl"><strong>อายุ:</strong> ${ssrInterpolate(__props.age)}</p><p class="text-xl"><strong>น้ำหนัก:</strong> ${ssrInterpolate(__props.weight)}</p><p class="text-xl"><strong>ระดับการออกกำลังกาย:</strong> ${ssrInterpolate(exerciseText.value)}</p><p class="text-xl"><strong>เป้าหมาย:</strong> ${ssrInterpolate(goalText.value)}</p><p class="text-xl"><strong>สาเหตุที่รับประทานเพื่อสุขภาพ:</strong> ${ssrInterpolate(reasonText.value)}</p><p class="text-xl"><strong>สาเหตุที่ไม่รับประทานเพื่อสุขภาพ:</strong> ${ssrInterpolate(reasonNotHealthyText.value)}</p><p class="text-xl"><strong>ความสนใจในสุขภาพทางด้านใด:</strong> ${ssrInterpolate(healthInterestText.value)}</p></div><div class="mb-2 text-2xl font-bold transition-all hover:text-lime-600 hover:transition-all"> คำแนะนำ </div>`);
      if (male_low_musclegain.value) {
        _push(`<div class="text-xl"><p>กินโปรตีนให้มากขึ้น (1.6-2.2 กรัม/กก.)</p><p>เพิ่มคาร์บและไขมันดี เพื่อให้มีพลังงานเพียงพอ</p><p> แม้จะออกกำลังกายน้อย ก็ควรฝึกเวทเบา ๆ 2-3 ครั้ง/สัปดาห์ </p><p>ดื่มน้ำเยอะ ๆ และพักผ่อนให้เพียงพอ</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (male_moderate1_musclegain.value) {
        _push(`<div class="text-xl"><p>กินโปรตีน 1.6-2.2 กรัม/กก. และแคลอรีให้เพียงพอ</p><p>ฝึกเวท 3 ครั้ง/สัปดาห์ + คาร์ดิโอพอเหมาะ</p><p> เพิ่มน้ำหนัก/จำนวนครั้งเรื่อย ๆ (Progressive Overload) </p><p>พักผ่อนให้เพียงพอ และดื่มน้ำเยอะ ๆ</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (male_moderate2_musclegain.value) {
        _push(`<div class="text-xl"><p>กินโปรตีน 1.8-2.4 กรัม/กก. + แคลอรีให้เกินเล็กน้อย</p><p> ฝึกเวท 4-5 ครั้ง/สัปดาห์ (Push-Pull-Legs หรือ Split Routine) </p><p>เพิ่มน้ำหนักหรือจำนวนครั้งทุกสัปดาห์</p><p>พักผ่อนให้เพียงพอและดื่มน้ำมาก ๆ</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (male_high_musclegain.value) {
        _push(`<div class="text-xl"><p> กินโปรตีน 2.0-2.5 กรัม/กก. + แคลอรีให้เกิน TDEE 15-20% </p><p>ฝึกเวททุกวัน (Bro Split หรือ Upper-Lower)</p><p>มีวันฝึกเบา ๆ เพื่อป้องกันอาการโอเวอร์เทรนนิ่ง</p><p>พักผ่อนให้เพียงพอและดื่มน้ำมาก ๆ</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (male_low_fat_loss.value) {
        _push(`<div class="text-xl"><p>กินแคลอรีต่ำกว่าที่เผาผลาญ 300-500 kcal/วัน</p><p>เลือกโปรตีนสูง คาร์บเชิงซ้อน ไขมันดี</p><p>ออกกำลังกายเบา ๆ เช่น เดินเร็ว และบอดี้เวท</p><p>นอนให้พอ ดื่มน้ำเยอะ ๆ และลดของหวาน</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (male_moderate1_fat_loss.value) {
        _push(`<div class="text-xl"><p>กินแคลอรีต่ำกว่าที่เผาผลาญ 300-500 kcal/วัน</p><p>โปรตีนสูง + คาร์บเชิงซ้อน + ไขมันดี</p><p>ฝึกเวท 2-3 ครั้ง/สัปดาห์ + คาร์ดิโอเสริม</p><p>ดื่มน้ำเยอะ ๆ และพักผ่อนให้เพียงพอ</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (male_moderate2_fat_loss.value) {
        _push(`<div class="text-xl"><p>กินแคลอรีต่ำกว่าที่เผาผลาญ 300-500 kcal/วัน</p><p>โปรตีนสูง + คาร์บเชิงซ้อน + ไขมันดี</p><p>ฝึกเวท 4-5 ครั้ง/สัปดาห์ + คาร์ดิโอเสริม</p><p>ดื่มน้ำเยอะ ๆ และพักผ่อนให้เพียงพอ</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (male_high_fat_loss.value) {
        _push(`<div class="text-xl"><p>กินแคลอรีต่ำกว่าที่เผาผลาญ 300-500 kcal/วัน</p><p>โปรตีนสูง + คาร์บเชิงซ้อน + ไขมันดี</p><p>ออกกำลังกายทุกวัน (เวท + คาร์ดิโอ สลับกัน)</p><p>ดื่มน้ำเยอะ ๆ และพักผ่อนให้เพียงพอ</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (male_low_muscle_maintenance.value) {
        _push(`<div class="text-xl"><p>กินแคลอรีให้ใกล้เคียง TDEE + โปรตีนสูง</p><p>เคลื่อนไหวร่างกายเป็นประจำ แม้จะไม่ออกกำลังกายหนัก</p><p>ดื่มน้ำเยอะ ๆ และนอนหลับให้เพียงพอ</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("Forms")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="mt-5 rounded bg-green-500 px-4 py-2 text-white transition-all hover:shadow-md hover:transition-all"${_scopeId}> ทำแบบทดสอบอีกครั้ง </button>`);
          } else {
            return [
              createVNode("button", { class: "mt-5 rounded bg-green-500 px-4 py-2 text-white transition-all hover:shadow-md hover:transition-all" }, " ทำแบบทดสอบอีกครั้ง ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main><footer class="w-full cursor-default bg-black px-1 py-16 text-white"><div class="sm:mx-5 lg:mx-36"><h1 class="text-left text-xl font-bold transition-colors hover:text-red-500 hover:transition-colors"> สาขาวิชาเทคโนโลยีสารสนเทศ </h1><div class="mt-2 text-left"><p>ผลิตและพัฒนากำลังคนสายอาชีพด้านเทคโนโลยีสารสนเทศ</p><p>ให้เป็นกำลังคนที่มีคุณภาพและสมรรถนะสูง</p><p> เพื่อเป็นกำลังหลักสำคัญในการเพิ่มขีดความสามารถในการแข่งขันของประเทศ. </p></div></div><br><div class="mt-3 columns-2 text-right text-sm lg:container sm:mx-5 lg:mx-36"><img src="https://it.cmtc.ac.th/wp-content/uploads/2024/07/logo_footer_itcmtc2024.png" alt="it logo" loading="lazy"><span>Copyright © 2025 สาขาวิชาเทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคเชียงใหม่</span></div></footer></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Results.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
