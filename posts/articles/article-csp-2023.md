---
date: '2023-10-22'
title: 'CSP 2023 游记'
category: 'Articles'
---



考前一天有点做不动题, 于是乎捯饬了半天博客, 加了个比较重要的功能. 现在这个博客在解析 M↓ 文档时可以获取 HTML Abstract Syntax Tree 了, 以后可以搞的事情就多了, 比如我目前先支持了内联图片和展示图片各用一个 CSS 类, 并且图片的加载模式全部改成了 Lazy loading 以提高网站效率. 果然自己造轮子才舒服, 用 unified.js 还是会出太多意料之外的问题, 光 JS 和 TS 混用就有很多 bugs 了. 顺便还找到了 `html-parse-stringify` 的小 bug, 第一次给开源社区做出了一点贡献?

第二天睡到了早上九点半的样子就起床了. 最近因为体育锻炼的时间很少, 于是早起或入睡前会做一做卷腹 / 仰卧自行车之类的核心训练, 免得停完课变成废人. 做完后看了看洛谷, 写了写博文. 下午到科技楼楼下, 听说张世林老师过来了, 就跑到操场去找他. 发现他正和其他数名同学相谈甚欢, 而时间不太允许了, 不得已又回到科技楼.

又不禁感慨, 时间实在不等人啊. 往年联赛前的等候时间, 都在和 LYC LJS 等人聊闲天. 如今我却成了在场辈分最高的人, 心生碌碌无为之感. 有诗云:

<div style="writing-mode: vertical-rl; margin-left: auto; margin-right:auto">
<p>《生查子·元夕》</p>
<p>—— 欧阳修</p>
<p>去年元夜时，</p>
<p>花市灯如昼。</p>
<p>月上柳梢头，</p>
<p>人约黄昏后。</p>
<p>今年元夜时，</p>
<p>月与灯依旧。</p>
<p>不见去年人，</p>
<p>泪湿春衫袖。</p>
</div>


拿到 PDF 后先看了眼题, 感觉比较传统. 然后花半个小时把前面两个题都写了. T2 的复杂度不太会证, 但想了想常见的字符串 Hack 方式, 感觉都叉不掉. 而大样例基本都在 0.05s 以下, 就懒得证了.

然而此刻的我没想到的是, 我整场考试的分都集中在这三十分钟了! 后面三个半小时都在调 T3, 中间留了一点时间去写 T4 部分分, 却发现小瞧了 T4 部分分的代码难度. 在考试的最后两分钟才把 T3 的前三个操作调对, 而第四个操作就只能听天由命了. 为什么这种题会没有无操作 4 的部分分呀, 感觉有点不合理. 不过也没有什么好说的, 如果我再年轻两年此时我就该指天骂地后抓狂般的后悔自责. 不过现在我已是半身入土的高二人了, 就算考得再差, 也基本能够释怀了, 何况本场考试只是 CSP.

不过即使释怀, 也需要总结问题. 其实 CSP 暴露出的问题和平时模拟赛是一样的: 部分分拿不稳. 平时模拟赛不喜欢打部分分. 导致考试的时间分配不合理. 在剩下的模拟赛中, 应该学会时间分配, 有取舍, 该打部分分时就不要总惦记着更多的分. 提高代码能力, 才有更好的基础.

---

Update: 下来调了一下 T3, 就只有一个地方没有 `-1`, 仅仅两个符号之差... 唉, 一失足成千古恨呐! 就当为 NOIP 攒 rp 吧...

---

> / 当万木俱焚 别走近我 /
>
> / 就 让所有的梦境 不坠落 /
>
> —— [Kide - *404 Not Found* ft. 赤羽](https://vocadb.net/S/243873)