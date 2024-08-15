/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_CL1E8Usi.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../../chunks/MainLayout_Du3HwRpC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> ${id} </section> ` })}`;
}, "/workspaces/9Darbis-astro/src/pages/job/[id].astro", void 0);

const $$file = "/workspaces/9Darbis-astro/src/pages/job/[id].astro";
const $$url = "/job/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
