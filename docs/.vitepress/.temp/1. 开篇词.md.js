import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1. 开篇词","description":"","frontmatter":{},"headers":[],"relativePath":"1. 开篇词.md","filePath":"1. 开篇词.md"}');
const _sfc_main = { name: "1. 开篇词.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-开篇词" tabindex="-1">1. 开篇词 <a class="header-anchor" href="#_1-开篇词" aria-label="Permalink to &quot;1. 开篇词&quot;">​</a></h1><p>一直做前端开发，都会有成为全栈工程师的想法，而 Nest 就是一个很好的途径，它是 Node 最流行的企业级开发框架，提供了 IOC、AOP、微服务等架构特性。</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/1-1.png" alt="" loading="lazy"></p><p>我们会学习 Nest 全部功能，并且会顺带把 mysql、mongodb、redis、rabbitmq、nacos 等后端中间件学一遍，也会学习 pm2、docker、docker compose 等部署方案，并做几个综合的全栈项目：</p><p><strong>会议室预订系统</strong> ：这是一个单体应用，主要是练习使用 mysql + typeorm + redis + docker + nest 开发后端服务</p><p><strong>考试系统</strong> ：这是微服务架构的项目，练习使用 RabbitMQ + MySQL + Redis + Docker Compose + etcd + Nest 进行开发。</p><p><strong>聊天室项目</strong> ：这是 websocket 项目，练习使用 websocket + mongodb + redis + docker compose + nginx + nest 开发 ws 项目</p><p>课程前面部分是 Nest 基础，会讲解 Nest 各种功能的使用，包括 IOC、AOP、全局模块、动态模块、自定义 provider、middleware、pipe、interceptor、guard 等功能，还有 Nest CLI 的使用，Nest 项目的调试。</p><p>接下来会讲 docker 和 mysql、redis 等中间件的使用以及 typeorm 这个 orm 库的使用，还有 jwt、session 登录和 RBAC 权限控制，还会学习 pm2 部署，然后做第一个项目实战：会议室预订系统</p><p>然后开始微服务部分，会讲 Nest 如何开发微服务，如何创建 monorepo 项目，会讲微服务相关的中间件，比如用 rabbitmq 做削峰填谷，用 etcd、nacos 做配置中心和注册中心，还会学习 passport 做身份认证和 Docker Compose 部署多个项目以及 nginx，然后开发第二个实战项目：问卷系统</p><p>之后会学习 WebSocket，我们会自己实现 WebSocket 协议来深入理解它，之后学习 Nest 里如何启动 WebSocket 服务，学习 mongodb，之后会做第三个实战项目：聊天室项目</p><p>然后开始学习 graphql，学习 graphql 的基础以及如何在 Nest 里使用，学习第二个消息中间件 kafka</p><p>之后学习 ElasticSearch，学习如何用它做全文检索、它和 mysql 的关系</p><p>还有不定期的加餐，比如 oauth2.0 做授权，用它实现三方登录等</p><p>相信等你学完这本小册后，就已经是一个真正意义上的全栈工程师了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("1. 开篇词.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _1_____ as default
};
