// import { __VLS_componentsOption, __VLS_name, fetchPosts, items } from "./PostView.vue";

// function __VLS_template() {
// let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
// /* Components */
// let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
// let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
// let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
// let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
// /* Style Scoped */
// type __VLS_StyleScopedClasses = {};
// let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
// /* CSS variable injection */
// /* CSS variable injection end */
// let __VLS_resolvedLocalAndGlobalComponents!: {} &
// __VLS_WithComponent<'ui', typeof __VLS_localComponents, "Ui", "ui", "ui"> &
// __VLS_WithComponent<'RouterLink', typeof __VLS_localComponents, "RouterLink", "RouterLink", "RouterLink">;
// ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
// ({} as __VLS_IntrinsicElements).h1; ({} as __VLS_IntrinsicElements).h1;
// ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
// __VLS_components.Ui; __VLS_components.Ui; __VLS_components.ui; __VLS_components.ui;
// // @ts-ignore
// [ui, ui,];
// ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li; ({} as __VLS_IntrinsicElements).li;
// __VLS_components.RouterLink; __VLS_components.RouterLink;
// // @ts-ignore
// [RouterLink, RouterLink,];
// {
// const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
// const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
// ({} as __VLS_IntrinsicElements).div;
// ({} as __VLS_IntrinsicElements).div;
// const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
// ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
// const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
// let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
// {
// const __VLS_5 = ({} as __VLS_IntrinsicElements)["h1"];
// const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
// ({} as __VLS_IntrinsicElements).h1;
// ({} as __VLS_IntrinsicElements).h1;
// const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
// ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
// const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
// let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
// (__VLS_8.slots!).default;
// }
// {
// const __VLS_10 = ({} as __VLS_IntrinsicElements)["button"];
// const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
// ({} as __VLS_IntrinsicElements).button;
// ({} as __VLS_IntrinsicElements).button;
// const __VLS_12 = __VLS_11({ ...{ onClick: {} as any, }, class: ("btn btn-primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
// ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("btn btn-primary"), });
// const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
// let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
// let __VLS_15 = { 'click': __VLS_pickEvent(__VLS_14['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_11, typeof __VLS_12>).onClick) };
// __VLS_15 = {
// click: $event => {
// __VLS_ctx.fetchPosts();
// }
// };
// (__VLS_13.slots!).default;
// }
// {
// const __VLS_16 = ({} as __VLS_IntrinsicElements)["div"];
// const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
// ({} as __VLS_IntrinsicElements).div;
// ({} as __VLS_IntrinsicElements).div;
// const __VLS_18 = __VLS_17({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_17));
// ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{}, });
// const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
// let __VLS_20!: __VLS_NormalizeEmits<typeof __VLS_19.emit>;
// for (const [post, index] of __VLS_getVForSourceType((__VLS_ctx.items)!)) {
// {
// let __VLS_21!: 'Ui' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Ui : 'ui' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ui : (typeof __VLS_resolvedLocalAndGlobalComponents)['ui'];
// const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{}, key: ((index)), }));
// ({} as { ui: typeof __VLS_21; }).ui;
// ({} as { ui: typeof __VLS_21; }).ui;
// const __VLS_23 = __VLS_22({ ...{}, key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
// ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{}, key: ((index)), });
// const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
// let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>;
// {
// const __VLS_26 = ({} as __VLS_IntrinsicElements)["li"];
// const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
// ({} as __VLS_IntrinsicElements).li;
// ({} as __VLS_IntrinsicElements).li;
// const __VLS_28 = __VLS_27({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
// ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, });
// const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
// let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
// (post.userId);
// (__VLS_29.slots!).default;
// }
// {
// const __VLS_31 = ({} as __VLS_IntrinsicElements)["li"];
// const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
// ({} as __VLS_IntrinsicElements).li;
// ({} as __VLS_IntrinsicElements).li;
// const __VLS_33 = __VLS_32({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
// ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, });
// const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
// let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
// (post.id);
// (__VLS_34.slots!).default;
// }
// {
// const __VLS_36 = ({} as __VLS_IntrinsicElements)["li"];
// const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
// ({} as __VLS_IntrinsicElements).li;
// ({} as __VLS_IntrinsicElements).li;
// const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
// ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, });
// const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
// let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
// (post.title);
// (__VLS_39.slots!).default;
// }
// {
// const __VLS_41 = ({} as __VLS_IntrinsicElements)["li"];
// const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
// ({} as __VLS_IntrinsicElements).li;
// ({} as __VLS_IntrinsicElements).li;
// const __VLS_43 = __VLS_42({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
// ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, });
// const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
// let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
// {
// let __VLS_46!: 'RouterLink' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.RouterLink : (typeof __VLS_resolvedLocalAndGlobalComponents)['RouterLink'];
// const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({
// ...{}, to: ((https: __VLS_ctx.) => ) //jsonplaceholder.typicode.com/posts/post.id)), }));
// ({} as { RouterLink: typeof __VLS_46; }).RouterLink
// }({} as { RouterLink: typeof __VLS_46; }).RouterLink));
// const __VLS_48 = __VLS_47({
// ...{}, to: ((https: __VLS_ctx.) => ) //jsonplaceholder.typicode.com/posts/post.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
// ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({
// ...{}, to: ((https: __VLS_ctx. //jsonplaceholder.typicode.com/posts/post.id)), });
//                                     ,
//                                     , __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!) => ),
// let, __VLS_50: __VLS_NormalizeEmits < typeof __VLS_49.emit >  } (__VLS_49.slots!).default)
// } (__VLS_44.slots!).default);
// }
// (__VLS_24.slots!).default;
// }
// // @ts-ignore
// [fetchPosts, items, , , ,];
// }
// (__VLS_19.slots!).default;
// }
// (__VLS_3.slots!).default;
// }
// if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
// __VLS_styleScopedClasses["btn"];
// __VLS_styleScopedClasses["btn-primary"];
// }
// var __VLS_slots!: {};
// return __VLS_slots;
//     }
// const __VLS_internalComponent = (await import('vue')).defineComponent({
// setup() {
// return {
// items: items as typeof items,
// fetchPosts: fetchPosts as typeof fetchPosts,
// };
// },
// });
// export default (await import('vue')).defineComponent({
// setup() {
// return {};
// },
// });}
