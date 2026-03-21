import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"33. 图书管理系统：项目总结.md","filePath":"33. 图书管理系统：项目总结.md"}');
const _sfc_main = { name: "33. 图书管理系统：项目总结.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>这是我们学完 Nest 基础后的第一个实战项目。</p><p>功能比较简单：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/33-1.png" alt="" loading="lazy"></p><p>但是前后端都有，比较完整。</p><p>我们通过 json 文件实现了数据的保存，并通过动态模块，实现了在 book 和 user 模块里分别可以指定不同的文件存储路径。</p><p>基于 multer 实现了文件上传，并自定义了文件名的格式。</p><p>实现了用户模块的登录、注册，图书模块的列表、新增、删除、修改、详情接口。</p><p>然后前端部分通过 create-vite 创建项目，用 react-router-dom 实现路由，用 antd 作为组件库，axios 发请求。</p><p>对接后端接口实现了登录、注册、图书管理页面。</p><p>这样，前后端功能就都实现并打通了。</p><p>整体测试下：</p><p>先注册个账号：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/33-2.png" alt="" loading="lazy"></p><p>用这个账号登录：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/33-3.png" alt="" loading="lazy"></p><p>根据书名搜索图书：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/33-4.png" alt="" loading="lazy"></p><p>新增图书：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/33-5.png" alt="" loading="lazy"></p><p>编辑图书：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/33-6.png" alt="" loading="lazy"></p><p>删除图书：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/33-7.png" alt="" loading="lazy"></p><p>做完这个小项目，你可能对学的基础知识用在哪就有更具体的了解了。</p><p>但其实还有很多优化的点：</p><ul><li>登录之后怎么保存登录状态？比如有的接口需要登录才能访问，怎么控制？</li></ul><p>这需要用 session + cookie 或 jwt 的方式来实现登录状态的保存。</p><ul><li>数据保存在文件里并不方便，还有啥更好的方式？</li></ul><p>保存在 mysql 数据库，用 TypeORM 作为 ORM 框架。</p><ul><li>后端接口怎么提供 api 文档？</li></ul><p>这需要用 swagger</p><ul><li>文件保存在文件目录下，如果磁盘空间满了怎么办？</li></ul><p>可以换用 minio 或者阿里 OSS 等对象存储服务。</p><ul><li>怎么部署？</li></ul><p>前端用 nginx，后端代码用 docker 和 docker compose</p><ul><li>如何实现验证码？</li></ul><p>可以用 nodemailer 发送邮件，然后用 redis 保存验证码数据。</p><p>是不是感觉这些东西都没接触过？</p><p>这些都是后面要学的知识点。</p><p>所以说，这个项目只是对前面一些基础的练习，但是想要做比较完善的项目，还是要学习方方面面的知识的。</p><p>接下来的章节我们就开始学习这些知识。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("33. 图书管理系统：项目总结.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _33_____________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _33_____________ as default
};
