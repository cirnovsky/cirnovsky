---
date: '2023-10-16'
title: 'Solution Set -「LOC 4326」'

---

[Link.](http://222.180.160.110:1024/contest/4326)

### A. 路径 (path)

设 $f_u$ 表示到 $u$ 时凑出的路径节点个数. 以拓扑序转移即可.

### B. 异或 (xor)

先差分, 将区间操作转化为双点 (或单点) 操作. 把双点操作抽象成连边, 每个连通块的步数下界是连通块大小减一, 上界是连通块大小.

> **结论**: 取得下界当且仅当连通块异或和为零.
>
> **证明**:
>
> - 必要性: 因为是一个连通块, 又只进行了大小减一次操作, 因此每次操作都是双点. 因此连通块异或和不变, 因此连通块异或和是 $0$;
> - 充分性: 当连通块异或和为 $0$, 设最后一个元素为 $x$, 则前面元素的异或和也为 $x$, 每次操作选择一个未被选择过的非最后一个元素的元素, 令其与最后一个元素均异或其, 操作次数为连通块大小减一.

答案即为 $n$ 减去最大的异或和为零的子序列划分数. 状压即可.

### C. 距离 (distance)

我甚至没学过点分树...

考虑单点. 建出点分树, 令 $d(x, y)$ 表示原树上 $x, y$ 的距离, $f(p)$ 表示目前已经插入点集且在点分树中 $p$ 的子树里的点中, 距离 $p$ 最近的点. 那么对于一个询问 $a$, 枚举 $a$ 和 $a$ 在点分树上的祖先 $p$, 答案就是 $d(a, p) + \min(f(p))$, 注意我们不需要排除 $a$ 本身在的这棵子树, 因为 $p$ 是 $a$ 和 $x$ 的 LCA 的祖先, 若 $x$ 和 $a$ 在 $p$ 的同一棵子树里, 答案一定更劣.

再考虑点对. 对于一个询问 $(a, b)$, 把路径拆成 $x \rightarrow p \rightarrow a$ 和 $y \rightarrow q \rightarrow b$. 设 $f(p, q)$ 表示与 $f(p)$ 类似的含义, 预处理出来我们就可以回答询问了. 但是 $\mathcal O(n^2)$ 的空间并不能承受, 于是把询问挂载在 $a$ 到根的路径上, 求 $f_p(q)$ 即可.

说着简单, 代码还是有点难度的, 尤其我对点分树完全不熟悉...

### D. 花之舞 (dance)

不会.

---

> / 即使我们分隔　在遥远的两端 /
>
> / 我会始终凝望　你存在的方向 /
>
> / 很感谢你曾经赋予给我的最特殊的意义 /
>
> / 为我描画翅膀　去向蔚蓝之上 /
>
> / 闪烁最动人的星光 /
>
> —— [Evalia - *星辰* ft. 星尘](https://vocadb.net/S/346475)