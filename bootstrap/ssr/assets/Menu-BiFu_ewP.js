import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  props: {
    canLogin: { type: Boolean },
    canRegister: { type: Boolean },
    laravelVersion: {},
    phpVersion: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Menu" }, null, _parent));
      _push(`<div><img id="background" class="absolute -left-20 top-0 max-w-[877px]" src=""><div class="relative min-h-screen items-center justify-center"><div class="relative w-full"><header class="grid grid-cols-2 items-center gap-2 px-48 py-10 lg:grid-cols-3"><nav>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("welcome"),
        class: "rounded-md px-3 py-2 hover:text-red-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Good Food `);
          } else {
            return [
              createTextVNode(" Good Food ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></header><main class="mt-6"><p class="text-center">Welcome to the Menu Page</p><p class="text-center">Explore our delicious offerings!</p></main>`);
      if (_ctx.canLogin) {
        _push(`<footer class="bg-slate-300 px-1 py-16 text-center text-sm"> Laravel v${ssrInterpolate(_ctx.laravelVersion)} (PHP v${ssrInterpolate(_ctx.phpVersion)}) `);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "rounded-md px-3 py-2 hover:text-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Dashboard `);
              } else {
                return [
                  createTextVNode(" Dashboard ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "rounded-md px-3 py-2 hover:text-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Log in `);
              } else {
                return [
                  createTextVNode(" Log in ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (_ctx.canRegister) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "rounded-md px-3 py-2 hover:text-red-500"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
