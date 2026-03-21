import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"27. 图书管理系统：需求分析和原型图.md","filePath":"27. 图书管理系统：需求分析和原型图.md"}');
const _sfc_main = { name: "27. 图书管理系统：需求分析和原型图.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>学到这里，我们 Nest 基础的学习就告一段落了。</p><p>我们学了 nest cli、调试、provider、动态模块、ioc、aop、middleware、interceptor、pipe、自定义装饰器等。</p><p>但是在正式做项目之前还要学习一些别的知识：</p><p>mysql 做关系型数据库、redis 做缓存和临时数据存储、minio 做 OSS 服务、docker 和 docker compose 做部署、typeorm 做 ORM 框架等。</p><p>好像离项目还有很远。</p><p>其实也不是，就算不学数据库，我们现在掌握的 Nest 知识也能够做项目了。</p><p>这节开始我们做一个综合的小实战：图书管理系统。</p><p>当然，我们会尽量简化，目的只是为了把基础知识串联起来用一下，加深理解。</p><p>我们先来分析下需求：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/27-1.png" alt="" loading="lazy"></p><p>有用户和图书两个模块：</p><p>用户模块包含注册、登录。</p><p>图书模块包含图书列表、图书新增、图书修改、图书删除、图书详情。</p><p>然后来画下原型图：</p><h2 id="登录" tabindex="-1">登录 <a class="header-anchor" href="#登录" aria-label="Permalink to &quot;登录&quot;">​</a></h2><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/27-2.png" alt="" loading="lazy"></p><p>通过用户名、密码登录。</p><h2 id="注册" tabindex="-1">注册 <a class="header-anchor" href="#注册" aria-label="Permalink to &quot;注册&quot;">​</a></h2><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/27-3.png" alt="" loading="lazy"></p><p>注册需要填入用户名、密码、确认密码。</p><h2 id="书籍列表" tabindex="-1">书籍列表 <a class="header-anchor" href="#书籍列表" aria-label="Permalink to &quot;书籍列表&quot;">​</a></h2><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/27-4.png" alt="" loading="lazy"></p><p>登录后可以查看书籍列表，可以通过书名来模糊搜索。</p><h2 id="新增书籍" tabindex="-1">新增书籍 <a class="header-anchor" href="#新增书籍" aria-label="Permalink to &quot;新增书籍&quot;">​</a></h2><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/27-5.png" alt="" loading="lazy"></p><p>点击新增书籍按钮会有个弹窗，输入书名、作者、描述，上传封面后，点击新增就可以新增书籍。</p><h2 id="修改书籍" tabindex="-1">修改书籍 <a class="header-anchor" href="#修改书籍" aria-label="Permalink to &quot;修改书籍&quot;">​</a></h2><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/27-6.png" alt="" loading="lazy"></p><p>点击书籍列表里的修改按钮，可以修改书籍信息。</p><h2 id="书籍详情" tabindex="-1">书籍详情 <a class="header-anchor" href="#书籍详情" aria-label="Permalink to &quot;书籍详情&quot;">​</a></h2><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/27-7.png" alt="" loading="lazy"></p><p>点击书籍列表里的详情按钮，可以查看书籍详细信息。</p><p>原型图：<a href="https://js.design/f/jmJQ8y?mode=design&amp;p=FPRc1zBMPx&amp;linkelement=0-630" target="_blank" rel="noreferrer">https://js.design/f/jmJQ8y?mode=design&amp;p=FPRc1zBMPx&amp;linkelement=0-630</a></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>我们学完了 Nest 基础，现在做一个综合小实战巩固下。</p><p>我们分析了图书管理系统的需求，有登录、注册、书籍列表、书籍新增、书籍详情、书籍修改这些功能。</p><p>并且画了原型图。</p><p>下节开始，就通过这个实战项目来综合练习下前面学到的基础知识。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("27. 图书管理系统：需求分析和原型图.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _27_________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _27_________________ as default
};
