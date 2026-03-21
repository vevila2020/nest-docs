import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"155. 考试系统：需求分析.md","filePath":"155. 考试系统：需求分析.md"}');
const _sfc_main = { name: "155. 考试系统：需求分析.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>这节开始，我们来做微服务的实战项目：考试系统。</p><p>大概有这些功能：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-1.png" alt="" loading="lazy"></p><p>用户可以注册、登录、修改密码。</p><p>登录后可以查看考试列表，可以创建新的考试，也可以删除考试。</p><p>删除的考试会放到回收站。</p><p>试卷的编辑器是一个类似低代码的拖拽编辑的形式，有多种题型，编辑后可以保存试卷。</p><p>编辑的时候可以给每个题目设置分数、正确答案、答案解析。</p><p>保存试卷后点击发布，就可以把试卷链接发给用户了，用户答题后会保存答卷数据。</p><p>会自动判卷，并给出分数，这时可以查看正确答案和题解。</p><p>后台可以查看所有的答题数据和成绩单，可以导出成绩单为 excel。</p><p>还可以查看成绩排行榜。</p><p>这就是考试系统的全部功能。</p><p>其实我们这个系统是参考<a href="https://www.wjx.cn/" target="_blank" rel="noreferrer">问卷星</a>的考试来设计的。</p><p>据说它有 300 万家企业和国内 90% 的高校在用：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-2.png" alt="" loading="lazy"></p><p>是很知名的一个问卷调查平台。</p><p>我们就不做原型图了，直接照着问卷星的来写就行。</p><p>登录后进入后台管理可以看到所有问卷列表：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-3.png" alt="" loading="lazy"></p><p>它的问卷类型支持考试：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-4.png" alt="" loading="lazy"></p><p>创建考试后，进入编辑器，可以添加不同的题型：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-5.png" alt="" loading="lazy"></p><p>每道题目都可以设置分数、答案解析：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-6.png" alt="" loading="lazy"></p><p>保存后，点击发布，会生成链接和二维码：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-7.png" alt="" loading="lazy"></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-8.png" alt="" loading="lazy"></p><p>用户扫码后就可以答题了：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-9.png" alt="" loading="lazy"></p><p>并且答完点提交会立刻判卷，给出分数，还可以查看正确答案和解析：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-10.png" alt="" loading="lazy"></p><p>我们再答一份，然后可以在后台看到所有的答卷数据：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-11.png" alt="" loading="lazy"></p><p>可以下载答卷数据为 excel：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-12.png" alt="" loading="lazy"></p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-13.png" alt="" loading="lazy"></p><p>可以查看考试排行榜：</p><p><img src="//liushuaiyang.oss-cn-shanghai.aliyuncs.com/nest-docs/image/155-14.png" alt="" loading="lazy"></p><p>这就是问卷星的考试系统的全部功能。</p><p>我们整体流程和他一样，只有一点不同：</p><p>它的问卷可以匿名答，我们的问卷要求登录之后作答，这样可以把问卷数据和用户关联。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>这节我们分析了下考试系统的需求。</p><p>主要有用户、考试、判断、分析，这四个模块。</p><p>功能主要有这些：</p><p>考试列表、考试编辑、考试删除、发布考试。</p><p>自动判卷、答题数据、成绩排行榜。</p><p>和问卷星类似，除了我们答卷需要登录。</p><p>整个项目的流程还是挺清晰的。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("155. 考试系统：需求分析.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _155___________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _155___________ as default
};
