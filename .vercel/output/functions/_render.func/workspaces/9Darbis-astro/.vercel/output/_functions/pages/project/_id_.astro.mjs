/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../../chunks/astro/server_CL1E8Usi.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$MainLayout } from '../../chunks/MainLayout_Du3HwRpC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$LineTodo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LineTodo;
  const { todoEntry, locale } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex items-center justify-between gap-x-6 py-5"> <div${addAttribute(`flex-none ${todoEntry.flexIndent}`, "class")}></div> <div class="flex-grow"> <div class="flex items-start gap-x-3"> <p class="text-sm font-semibold leading-6 text-gray-900">${todoEntry.title}</p> <p class="mt-0.5 whitespace-nowrap rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">${todoEntry.progressStatus}</p> </div> <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500"> <p class="whitespace-nowrap">Due on <time datetime="2023-03-17T00:00Z">${todoEntry.deadlineDate}</time></p> <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current"> <circle cx="1" cy="1" r="1"></circle> </svg> <p class="truncate">Responsible person: ${todoEntry.person} </p> </div> </div> <div class="flex flex-none items-center gap-x-4"> <a href="/job/1233-2137-3127-2318" class="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">View<span class="sr-only">, GraphQL API</span></a> <div class="relative flex-none"> <button type="button" class="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true"> <span class="sr-only">Open options</span> <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"></path> </svg> </button> <!--
          Dropdown menu, show/hide based on menu state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        --> <div class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none" style="display:none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-0-button" tabindex="-1"> <!-- Active: "bg-gray-50", Not Active: "" --> <a href="#" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="options-menu-0-item-0">Edit<span class="sr-only">, GraphQL API</span></a> <a href="#" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="options-menu-0-item-1">Move<span class="sr-only">, GraphQL API</span></a> <a href="#" class="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabindex="-1" id="options-menu-0-item-2">Delete<span class="sr-only">, GraphQL API</span></a> </div> </div> </div> </li>`;
}, "/workspaces/9Darbis-astro/src/components/sections/projects/todo/LineTodo.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  Astro2.params;
  const todo1 = {
    title: "General Estimation and Plan",
    progressStatus: "Done",
    deadlineDate: "March 17, 2023",
    person: "Leslie Alexander",
    flexIndent: "w-1/24"
  };
  const todo2 = {
    title: "Detailed Estimation and Plan",
    progressStatus: "Done",
    deadlineDate: "March 19, 2023",
    person: "Leslie Alexander",
    flexIndent: "w-1/12"
  };
  const todo3 = {
    title: "Designer",
    progressStatus: "Done",
    deadlineDate: "March 29, 2023",
    person: "Leslie Alexander",
    flexIndent: "w-1/12"
  };
  const todo4 = {
    title: "Electrical Phase 1",
    progressStatus: "In Progress",
    deadlineDate: "April 03, 2023",
    person: "Leslie Alexander",
    flexIndent: "w-1/24"
  };
  const todo4x1 = {
    title: "Electrical Inspection",
    progressStatus: "Planned",
    deadlineDate: "April 04, 2023",
    person: "Leslie Alexander",
    flexIndent: "w-1/24"
  };
  const todo5 = {
    title: "Bath Toilet and Shower piping",
    progressStatus: "Planned",
    deadlineDate: "April 10, 2023",
    person: "Leslie Alexander",
    flexIndent: "w-1/12"
  };
  const todo6 = {
    title: "Floor Sound Insulation and Sound Proofing",
    progressStatus: "Planned",
    deadlineDate: "April 14, 2023",
    person: "Leslie Alexander",
    flexIndent: "w-1/24"
  };
  const todo7 = {
    title: "Pouring cement floor",
    progressStatus: "Planned",
    deadlineDate: "April 14, 2023",
    person: "Leslie Alexander",
    flexIndent: "w-1/24"
  };
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> <section class="mx-auto max-w-[85rem] space-y-8 px-4 pt-16 sm:px-6 lg:px-8 2xl:max-w-full"> <!--Page header--> <div class="mx-auto max-w-3xl text-left sm:text-center"> <h3 class="block text-balance text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl">
Buto Renovacija
</h3> <p class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400">
Kaunas, Birzelio 23-sios g. 3-32
</p> <p class="mt-4 text-pretty text-lg text-neutral-600 dark:text-neutral-400">
Here you can see your current projects and checkup on progress of them.
</p> </div> </section> <hr> <ul role="list" class="divide-y divide-gray-100"> ${renderComponent($$result2, "LineTodo", $$LineTodo, { "todoEntry": todo1 })} ${renderComponent($$result2, "LineTodo", $$LineTodo, { "todoEntry": todo2 })} ${renderComponent($$result2, "LineTodo", $$LineTodo, { "todoEntry": todo3 })} ${renderComponent($$result2, "LineTodo", $$LineTodo, { "todoEntry": todo4 })} ${renderComponent($$result2, "LineTodo", $$LineTodo, { "todoEntry": todo4x1 })} ${renderComponent($$result2, "LineTodo", $$LineTodo, { "todoEntry": todo5 })} ${renderComponent($$result2, "LineTodo", $$LineTodo, { "todoEntry": todo6 })} ${renderComponent($$result2, "LineTodo", $$LineTodo, { "todoEntry": todo7 })} </ul> </section> ` })}`;
}, "/workspaces/9Darbis-astro/src/pages/project/[id].astro", void 0);

const $$file = "/workspaces/9Darbis-astro/src/pages/project/[id].astro";
const $$url = "/project/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
