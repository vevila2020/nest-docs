import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Nest通关秘籍","tagline":"最流行的 Node 企业级框架","actions":[{"theme":"brand","text":"马上开始","link":"/1. 开篇词"}]},"features":[{"title":"🚀适宜人群","details":"想进阶全栈的前端工程师；想学习 MySQL、Redis、RabbitMQ 等后端中间件的 JS 工程师；想学习 Docker、Docker Compose 部署方案的 JS 工程师。"},{"title":"✅会议室预订系统","details":"这是一个单体应用，主要是练习使用 MySQL + TypeORM + Redis + Docker + Nest 进行开发。"},{"title":"✅博客项目","details":"这个是 ElasticSearch 项目，练习使用 ElasticSearch + MySQL + Redis + Docker Compose + Nginx + Nest 进行开发。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
