<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
<title>PRML 第1章 演習 1.21-1.30</title>
<meta  http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta  name="generator" content="Org-mode" />
<style type="text/css">
 <!--/*--><![CDATA[/*><!--*/
  .title  { text-align: center; }
  .todo   { font-family: monospace; color: red; }
  .done   { color: green; }
  .tag    { background-color: #eee; font-family: monospace;
            padding: 2px; font-size: 80%; font-weight: normal; }
  .timestamp { color: #bebebe; }
  .timestamp-kwd { color: #5f9ea0; }
  .right  { margin-left: auto; margin-right: 0px;  text-align: right; }
  .left   { margin-left: 0px;  margin-right: auto; text-align: left; }
  .center { margin-left: auto; margin-right: auto; text-align: center; }
  .underline { text-decoration: underline; }
  #postamble p, #preamble p { font-size: 90%; margin: .2em; }
  p.verse { margin-left: 3%; }
  pre {
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px #eee;
    padding: 8pt;
    font-family: monospace;
    overflow: auto;
    margin: 1.2em;
  }
  pre.src {
    position: relative;
    overflow: visible;
    padding-top: 1.2em;
  }
  pre.src:before {
    display: none;
    position: absolute;
    background-color: white;
    top: -10px;
    right: 10px;
    padding: 3px;
    border: 1px solid black;
  }
  pre.src:hover:before { display: inline;}
  pre.src-sh:before    { content: 'sh'; }
  pre.src-bash:before  { content: 'sh'; }
  pre.src-emacs-lisp:before { content: 'Emacs Lisp'; }
  pre.src-R:before     { content: 'R'; }
  pre.src-perl:before  { content: 'Perl'; }
  pre.src-java:before  { content: 'Java'; }
  pre.src-sql:before   { content: 'SQL'; }

  table { border-collapse:collapse; }
  caption.t-above { caption-side: top; }
  caption.t-bottom { caption-side: bottom; }
  td, th { vertical-align:top;  }
  th.right  { text-align: center;  }
  th.left   { text-align: center;   }
  th.center { text-align: center; }
  td.right  { text-align: right;  }
  td.left   { text-align: left;   }
  td.center { text-align: center; }
  dt { font-weight: bold; }
  .footpara:nth-child(2) { display: inline; }
  .footpara { display: block; }
  .footdef  { margin-bottom: 1em; }
  .figure { padding: 1em; }
  .figure p { text-align: center; }
  .inlinetask {
    padding: 10px;
    border: 2px solid gray;
    margin: 10px;
    background: #ffffcc;
  }
  #org-div-home-and-up
   { text-align: right; font-size: 70%; white-space: nowrap; }
  textarea { overflow-x: auto; }
  .linenr { font-size: smaller }
  .code-highlighted { background-color: #ffff00; }
  .org-info-js_info-navigation { border-style: none; }
  #org-info-js_console-label
    { font-size: 10px; font-weight: bold; white-space: nowrap; }
  .org-info-js_search-highlight
    { background-color: #ffff00; color: #000000; font-weight: bold; }
  /*]]>*/-->
</style>
<script type="text/javascript">
/*
@licstart  The following is the entire license notice for the
JavaScript code in this tag.

Copyright (C) 2012-2013 Free Software Foundation, Inc.

The JavaScript code in this tag is free software: you can
redistribute it and/or modify it under the terms of the GNU
General Public License (GNU GPL) as published by the Free Software
Foundation, either version 3 of the License, or (at your option)
any later version.  The code is distributed WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

As additional permission under GNU GPL version 3 section 7, you
may distribute non-source (e.g., minimized or compacted) forms of
that code without the copy of the GNU GPL normally required by
section 4, provided you include this license notice and a URL
through which recipients can access the Corresponding Source.


@licend  The above is the entire license notice
for the JavaScript code in this tag.
*/
<!--/*--><![CDATA[/*><!--*/
 function CodeHighlightOn(elem, id)
 {
   var target = document.getElementById(id);
   if(null != target) {
     elem.cacheClassElem = elem.className;
     elem.cacheClassTarget = target.className;
     target.className = "code-highlighted";
     elem.className   = "code-highlighted";
   }
 }
 function CodeHighlightOff(elem, id)
 {
   var target = document.getElementById(id);
   if(elem.cacheClassElem)
     elem.className = elem.cacheClassElem;
   if(elem.cacheClassTarget)
     target.className = elem.cacheClassTarget;
 }
/*]]>*///-->
</script>
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/javascript">
<!--/*--><![CDATA[/*><!--*/
    MathJax.Hub.Config({
        // Only one of the two following lines, depending on user settings
        // First allows browser-native MathML display, second forces HTML/CSS
        //  config: ["MMLorHTML.js"], jax: ["input/TeX"],
            jax: ["input/TeX", "output/HTML-CSS"],
        extensions: ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js",
                     "TeX/noUndefined.js"],
        tex2jax: {
            inlineMath: [ ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"], ["\\begin{displaymath}","\\end{displaymath}"] ],
            skipTags: ["script","noscript","style","textarea","pre","code"],
            ignoreClass: "tex2jax_ignore",
            processEscapes: false,
            processEnvironments: true,
            preview: "TeX"
        },
        showProcessingMessages: true,
        displayAlign: "left",
        displayIndent: "2em",

        "HTML-CSS": {
             scale: 100,
             availableFonts: ["STIX","TeX"],
             preferredFont: "TeX",
             webFont: "TeX",
             imageFont: "TeX",
             showMathMenu: true,
        },
        MMLorHTML: {
             prefer: {
                 MSIE:    "MML",
                 Firefox: "MML",
                 Opera:   "HTML",
                 other:   "HTML"
             }
        }
    });
/*]]>*///-->
</script>
</head>
<body>
<div id="content">
<h1 class="title">PRML 第1章 演習 1.21-1.30</h1>
<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">PRML 第1章 演習 1.21-1.30</a>
<ul>
<li><a href="#sec-1-1"><span class="done DONE">DONE</span> 1.21 \(p(\text{誤り})≦∫\{p(x,C_1)p(x,C_2)\}^{1/2}dx\)の証明</a></li>
<li><a href="#sec-1-2"><span class="done DONE">DONE</span> 1.22 [www] 損失行列\(L_{kj}=1-I_{kj}\)の期待値の最小化と事後確率の最大化</a></li>
<li><a href="#sec-1-3"><span class="todo TODO">TODO</span> 1.23 損失行列とクラスの確率分布が与えられたときに期待損失を最小にする決定規準</a></li>
<li><a href="#sec-1-4"><span class="done DONE">DONE</span> 1.24 [www] 棄却オプションがある場合に期待損失を最小とする決定規準</a></li>
<li><a href="#sec-1-5"><span class="done DONE">DONE</span> 1.25 [www] 多変数の目的変数の回帰問題</a></li>
<li><a href="#sec-1-6"><span class="done DONE">DONE</span> 1.26 多変数の目的変数の回帰問題</a></li>
<li><a href="#sec-1-7"><span class="todo TODO">TODO</span> 1.27 [www] ミンコフスキー損失を用いた回帰</a></li>
<li><a href="#sec-1-8"><span class="todo TODO">TODO</span> 1.28 \(h\)と\(p\)の間の関数関係\(h(p)\)</a></li>
<li><a href="#sec-1-9"><span class="done DONE">DONE</span> 1.29 [www] \(H[x]≦\ln M\)の証明</a></li>
<li><a href="#sec-1-10"><span class="done DONE">DONE</span> 1.30 二つのガウス分布のKLダイバージェンス</a></li>
</ul>
</li>
</ul>
</div>
</div>
<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1">PRML 第1章 演習 1.21-1.30</h2>
<div class="outline-text-2" id="text-1">
</div><div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="done DONE">DONE</span> 1.21 \(p(\text{誤り})≦∫\{p(x,C_1)p(x,C_2)\}^{1/2}dx\)の証明</h3>
<div class="outline-text-3" id="text-1-1">
</div><div id="outline-container-sec-1-1-1" class="outline-4">
<h4 id="sec-1-1-1"><span class="done DONE">DONE</span> \(a≦b\)ならば\(a≦(ab)^{1/2}\)</h4>
<div class="outline-text-4" id="text-1-1-1">
\begin{align*}
              a ≦ & b \\
            a^2 ≦ & ab            & \text{ \(a\)は非負だから} \\
    (a^2)^{1/2} ≦ & (ab)^{1/2}    & \text{ \(f(x) = x^{1/2}\)は単調増加だから} \\
              a ≦ & (ab)^{1/2} \\
\end{align*}
</div>
</div>

<div id="outline-container-sec-1-1-2" class="outline-4">
<h4 id="sec-1-1-2"><span class="done DONE">DONE</span> \(p(\text{誤り})≦∫\{p(x,C_1)p(x,C_2)\}^{1/2}dx\)の証明</h4>
<div class="outline-text-4" id="text-1-1-2">
<p>
誤識別率が最小になるように決定領域を選ぶと、<br  />
</p>
\begin{align*}
    x ∈ R_1 ⇒ p(x,C_2) ≦ p(x,C_1) ⇒ p(x,C_2) ≦ \{p(x,C_1)p(x,C_2)\}^{1/2} \\
    x ∈ R_2 ⇒ p(x,C_1) ≦ p(x,C_2) ⇒ p(x,C_1) ≦ \{p(x,C_1)p(x,C_2)\}^{1/2} \\
\end{align*}
<p>
ここで\(a≦b\)ならば\(a≦(ab)^{1/2}\)を用いている。<br  />
それぞれの範囲で\(x\)について積分すると<br  />
</p>
\begin{align*}
    ∫_{R_1} p(x,C_2) dx ≦ ∫_{R_1} \{p(x,C_1)p(x,C_2)\}^{1/2} dx \\
    ∫_{R_2} p(x,C_1) dx ≦ ∫_{R_2} \{p(x,C_1)p(x,C_2)\}^{1/2} dx \\
\end{align*}
<p>
両辺を足して<br  />
</p>
\begin{align*}
    ∫_{R_1} p(x,C_2) dx + ∫_{R_2} p(x,C_1) dx
                   ≦ & ∫_{R_1} \{p(x,C_1)p(x,C_2)\}^{1/2} dx +
                        ∫_{R_2} \{p(x,C_1)p(x,C_2)\}^{1/2} dx \\
    p(\text{誤り}) ≦ & ∫ \{p(x,C_1)p(x,C_2)\}^{1/2} dx
\end{align*}
</div>
</div>
</div>

<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="done DONE">DONE</span> 1.22 [www] 損失行列\(L_{kj}=1-I_{kj}\)の期待値の最小化と事後確率の最大化</h3>
<div class="outline-text-3" id="text-1-2">
<p>
(1.81)で与えられる<br  />
</p>
\begin{align*}
    \sum_k L_{kj}p(C_k|x) \\
\end{align*}
<p>
この量が最小になるクラス j に x を割り当てるのが<br  />
期待損失を最小化する決定規則である。<br  />
\(L_{kj} = 1-I_{kj}\)を代入すると<br  />
</p>
\begin{align*}
        \sum_k L_{kj}p(C_k|x)
    = & \sum_k (1-I_{kj})p(C_k|x) \\
    = & \sum_k p(C_k|x) - p(C_j|x) \\
\end{align*}
<p>
この量が最小になるという事は、<br  />
第1項の和は決定規則によらず一定だから、<br  />
第2項\(p(C_j|x)\)が最大になるように割り当てるということである。<br  />
</p>

<p>
この損失行列は、<br  />
正解か誤りかのみで損失を評価し、<br  />
正解および誤りの内容を評価しない<br  />
損失行列であると解釈できる。<br  />
</p>
</div>
</div>

<div id="outline-container-sec-1-3" class="outline-3">
<h3 id="sec-1-3"><span class="todo TODO">TODO</span> 1.23 損失行列とクラスの確率分布が与えられたときに期待損失を最小にする決定規準</h3>
<div class="outline-text-3" id="text-1-3">
<p>
期待損失<br  />
</p>
\begin{align*}
    E[L] = \sum_k \sum_j \int_{R_j} L_{kj} p(x,C_k) dx    & \text{(1.80)}
\end{align*}
<p>
これを最小化するには、各\(x\)ごとに<br  />
</p>
\begin{align*}
    \sum_k L_{kj} p(x,C_k)
\end{align*}
<p>
が最小になる\(j\)を求め、\(R_j\)が\(x\)を含むように\(R_j\)を決めればよい。<br  />
乗法定理\(p(x,C_k) = p(x|C_k)p(C_k)\)を用いて<br  />
</p>
\begin{align*}
    \sum_k L_{kj} p(x|C_k)p(C_k)
\end{align*}
</div>
</div>

<div id="outline-container-sec-1-4" class="outline-3">
<h3 id="sec-1-4"><span class="done DONE">DONE</span> 1.24 [www] 棄却オプションがある場合に期待損失を最小とする決定規準</h3>
<div class="outline-text-3" id="text-1-4">
</div><div id="outline-container-sec-1-4-1" class="outline-4">
<h4 id="sec-1-4-1">期待損失を最小とする決定規準</h4>
<div class="outline-text-4" id="text-1-4-1">
<p>
与えられた\(x\)に対して<br  />
式(1.81)の量\(\sum_k L_{kj} p(C_k|x)\)が最小になるようなクラス\(j\)を見つける。<br  />
その量が\(λ\)より小さければ\(x\)をクラス\(j\)に割り当て、<br  />
さもなくば棄却する。<br  />
</p>
</div>
</div>

<div id="outline-container-sec-1-4-2" class="outline-4">
<h4 id="sec-1-4-2">\(L_{kj}=1-I_{kj}\)ならば、1.5.3節の棄却規準に帰着することの証明</h4>
<div class="outline-text-4" id="text-1-4-2">
<p>
\(L_{kj}=1-I_{kj}\)ならば、<br  />
式(1.81)の量は以下のように表される。<br  />
</p>
\begin{align*}
      & \sum_k L_{kj} p(C_k|x) \\
    = & \sum_k (1 - I_{kj}) p(C_k|x) \\
    = & \sum_k p(C_k|x) - \sum_k I_{kj} p(C_k|x) \\
    = & 1 - p(C_j|x) \\
\end{align*}
<p>
この量が最小になる\(j\)は、\(p(C_j|x)\)が最大になる\(j\)である。<br  />
期待損失を最小とする決定規準は、<br  />
\(1 - p(C_j|x)\)の最小値が\(λ\)より小さければ、<br  />
\(x\)をクラス\(j\)に割り当て、さもなくば棄却する、ということになる。<br  />
これは、<br  />
\(p(C_j|x)\)の最大値が\(1 - λ\)より大きければ、<br  />
\(x\)をクラス\(j\)に割り当て、さもなくば棄却する、ということと同値である。<br  />
</p>
\begin{align*}
    1 - p(C_j|x) ≦ & λ \\
        p(C_j|x) ≧ & 1 - λ \\
\end{align*}
</div>
</div>

<div id="outline-container-sec-1-4-3" class="outline-4">
<h4 id="sec-1-4-3">\(λ\)と棄却しきい値\(θ\)との関係</h4>
<div class="outline-text-4" id="text-1-4-3">
\begin{align*}
    θ = 1 - λ
\end{align*}
</div>
</div>
</div>

<div id="outline-container-sec-1-5" class="outline-3">
<h3 id="sec-1-5"><span class="done DONE">DONE</span> 1.25 [www] 多変数の目的変数の回帰問題</h3>
<div class="outline-text-3" id="text-1-5">
\begin{align*}
    \newcommand{\x}{{\bf x}}
    \newcommand{\y}{{\bf y}}
    \newcommand{\t}{{\bf t}}
    E[L(\t,\y(\x))] = ∫∫ \|\y(\x)-\t\|^2 p(\x,\t) d\x d\t \\
\end{align*}
<p>
付録Dより、\(F[y]=∫_{x_1}^{x_2}G(y(x),x)dx\)ならば、停留条件は\(\frac{∂G(y(x),x)}{∂y(x)}=0\)。<br  />
ここで\(G(\y(\x),\x)=∫\|\y(\x)-\t\|^2p(\x,\t)d\t\)だから、<br  />
</p>
\begin{align*}
    \frac{∂}{∂\y(\x)} ∫\|\y(\x)-\t\|^2p(\x,\t)d\t = & 0 \\
    \frac{∂}{∂y_i(\x)} ∫(\sum_j(y_j(\x)-t_j)^2)p(\x,\t)d\t = & 0 \\
    2 ∫(y_i(\x)-t_i)p(\x,\t)d\t = & 0 \\
    ∫(y_i(\x)-t_i)p(\x,\t)d\t = & 0 \\
    ∫y_i(\x)p(\x,\t)d\t = & ∫t_i p(\x,\t)d\t \\
    y_i(\x)∫p(\x,\t)d\t = & ∫t_i p(\x,\t)d\t \\
            y_i(\x)p(\x) = & ∫t_i p(\x,\t)d\t \\
                 y_i(\x) = & ∫t_i \frac{p(\x,\t)}{p(\x)}d\t \\
                         = & ∫t_i p(\x|\t)d\t \\
                         = & E_\t[t_i|\x] \\
                  \y(\x) = & E_\t[\t|\x] \\
\end{align*}
</div>
</div>

<div id="outline-container-sec-1-6" class="outline-3">
<h3 id="sec-1-6"><span class="done DONE">DONE</span> 1.26 多変数の目的変数の回帰問題</h3>
<div class="outline-text-3" id="text-1-6">
\begin{align*}
    E[L(\t,\y(\x))] = & ∫∫\|\y(\x)-\t\|^2p(\x,\t)d\x d\t \\
                    = & ∫∫(\sum_i (y_i(\x)-t_i)^2)p(\x,\t)d\x d\t \\
                    = & ∫∫(\sum_i (y_i(\x) - E[t_i|\x] + E[t_i|\x] - t_i)^2)p(\x,\t)d\x d\t \\
                    = & ∫∫(\sum_i (A_i^2 + 2A_iB_i + B_i^2))p(\x,\t)d\x d\t \\
\end{align*}
<p>
ここで<br  />
</p>
\begin{align*}
    A_i = & (y_i(\x) - E[t_i|\x]) \\
    B_i = & (E[t_i|\x] - t_i) \\
\end{align*}

\begin{align*}
        ∫∫\sum_i A_i^2p(\x,\t)d\x d\t
    = & \sum_i ∫∫A_i^2p(\x,\t)d\x d\t \\
    = & \sum_i ∫∫A_i^2p(\x,\t)d\t d\x \\
    = & \sum_i ∫A_i^2∫p(\x,\t)d\t d\x \\
    = & \sum_i ∫A_i^2p(\x)d\x \\
\end{align*}

\begin{align*}
        ∫∫\sum_i 2A_iB_ip(\x,\t)d\x d\t
    = & 2\sum_i ∫∫A_iB_ip(\x,\t)d\x d\t \\
    = & 2\sum_i ∫∫A_i(E[t_i|\x] - t_i)p(\x,\t)d\t d\x \\
    = & 2\sum_i ∫∫(E[t_i|\x]A_i - t_iA_i)p(\x,\t)d\t d\x \\
    = & 2\sum_i ∫(∫E[t_i|\x]A_ip(\x,\t)d\t - ∫t_iA_ip(\x,\t)d\t)d\x \\
    = & 2\sum_i ∫(E[t_i|\x]A_i∫p(\x,\t)d\t - A_i∫t_ip(\x,\t)d\t)d\x \\
    = & 2\sum_i ∫(E[t_i|\x]A_ip(\x) - A_i∫t_ip(\x,\t)d\t)d\x \\
    = & 2\sum_i ∫(E[t_i|\x]A_ip(\x) - A_i∫t_ip(\t|\x)d\t p(\x))d\x \\
    = & 2\sum_i ∫(E[t_i|\x]A_ip(\x) - A_iE[t_i|\x]p(\x))d\x \\
    = & 0 \\
\end{align*}

\begin{align*}
        ∫∫\sum_i (E[t_i|\x] - t_i)^2p(\x,\t)d\x d\t
    = & \sum_i ∫∫(E[t_i|\x] - t_i)^2p(\x,\t)d\x d\t \\
    = & \sum_i ∫∫(E[t_i|\x] - t_i)^2p(\x,\t)d\t d\x \\
    = & \sum_i ∫∫(t_i - E[t_i|\x])^2p(\x,\t)d\t d\x \\
    = & \sum_i ∫∫(t_i - E[t_i|\x])^2p(\t|\x)p(\x)d\t d\x \\
    = & \sum_i ∫∫(t_i - E[t_i|\x])^2p(\t|\x)d\t p(\x)d\x \\
    = & \sum_i ∫var[t_i|\x]p(\x)d\x
\end{align*}
<p>
ここで<br  />
</p>
\begin{align*}
    var[t_i|\x] = ∫(t_i - E[t_i|\x])^2p(\t|\x)d\t
\end{align*}
<p>
まとめると<br  />
</p>
\begin{align*}
    E[L(\t,\y(\x))] = & \sum_i ∫(y_i(\x) - E[t_i|\x])^2p(\x)d\x +
                        \sum_i ∫var[t_i|\x]p(\x)d\x \\
\end{align*}

<p>
期待二乗損失\(E[L(\t,\y(\x))]\)を最小にする\(\y(\x)\)は\(\y(\x) = E[\t|\x]\)である。<br  />
</p>
</div>
</div>

<div id="outline-container-sec-1-7" class="outline-3">
<h3 id="sec-1-7"><span class="todo TODO">TODO</span> 1.27 [www] ミンコフスキー損失を用いた回帰</h3>
<div class="outline-text-3" id="text-1-7">
<p>
ミンコフスキー損失<br  />
</p>
\begin{align*}
    E[L_q] = & ∫∫|y(\x)-t|^qp(\x,t) d\x dt & \text{(1.91)}
\end{align*}

\begin{align*}
    E[L_q] = &   ∫∫_{t< y(\x)} (y(\x)-t)^q p(\x,t) d\x dt
             & - ∫∫_{t≧y(\x)} (y(\x)-t)^q p(\x,t) d\x dt
    \frac{δE[L_q]}{δy(\x)}
           = &   q ∫∫_{t< y(\x)} (y(\x)-t)^{q-1} p(\x,t) d\x dt
             & - q ∫∫_{t≧y(\x)} (y(\x)-t)^{q-1} p(\x,t) d\x dt
\end{align*}

<p>
\(q = 1\)の場合。<br  />
</p>
\begin{align*}
    E[L_1] = &   ∫∫_{t< y(\x)} (y(\x)-t) p(\x,t) d\x dt
             & - ∫∫_{t≧y(\x)} (y(\x)-t) p(\x,t) d\x dt
    \frac{δE[L_1]}{δy(\x)}
           = &   ∫∫_{t< y(\x)} p(\x,t) d\x dt
             & - ∫∫_{t≧y(\x)} p(\x,t) d\x dt
    δE[L_1]/δy(\x) = & 0 \\
    ∫∫_{t< y(\x)} p(\x,t) d\x dt - ∫∫_{t≧y(\x)} p(\x,t) d\x dt = & 0 \\
    ∫∫_{t< y(\x)} p(\x,t) d\x dt = ∫∫_{t≧y(\x)} p(\x,t) d\x dt
\end{align*}

<p>
\(q = 0\)の場合。<br  />
</p>
\begin{align*}
    E[L_0] = & ∫∫ p(\x,t) d\x dt \\
    \frac{δE[L_0]}{δy(\x)} = 0 \\
    δE[L_1]/δy(\x) = & 0 \\
    ∫∫_{t< y(\x)} p(\x,t) d\x dt - ∫∫_{t≧y(\x)} p(\x,t) d\x dt = & 0 \\
    ∫∫_{t< y(\x)} p(\x,t) d\x dt = ∫∫_{t≧y(\x)} p(\x,t) d\x dt
\end{align*}
</div>
</div>

<div id="outline-container-sec-1-8" class="outline-3">
<h3 id="sec-1-8"><span class="todo TODO">TODO</span> 1.28 \(h\)と\(p\)の間の関数関係\(h(p)\)</h3>
<div class="outline-text-3" id="text-1-8">
\begin{align*}
    p(x,y) = p(x)p(y) ⇒ h(x,y) = h(x) + h(y)
\end{align*}

\begin{align*}
    h(x,y) = & \tilde{h}(p(x,y)) \\
    h(x)   = & \tilde{h}(p(x)) \\
    h(y)   = & \tilde{h}(p(y)) \\
\end{align*}
</div>

<div id="outline-container-sec-1-8-1" class="outline-4">
<h4 id="sec-1-8-1"><span class="done DONE">DONE</span> \(h(p^2) = 2h(p)\)</h4>
<div class="outline-text-4" id="text-1-8-1">
\begin{align*}
    h(p^2) = & h(pp) \\
           = & h(p)h(p) \\
           = & 2h(p) \\
\end{align*}
</div>
</div>

<div id="outline-container-sec-1-8-2" class="outline-4">
<h4 id="sec-1-8-2"><span class="done DONE">DONE</span> \(h(p^n) = nh(p) ⇒ h(p^{n+1}) = (n+1)h(p)\)</h4>
<div class="outline-text-4" id="text-1-8-2">
\begin{align*}
    h(p^{n+1}) = & h(pp^n) \\
               = & h(p)h(p^n) \\
               = & h(p)nh(p) \\
               = & (n+1)h(p) \\
\end{align*}
</div>
</div>

<div id="outline-container-sec-1-8-3" class="outline-4">
<h4 id="sec-1-8-3"><span class="todo TODO">TODO</span> \(h(p^{n/m}) = (n/m)h(p)\)</h4>
<div class="outline-text-4" id="text-1-8-3">
<p>
TODO<br  />
</p>
</div>
</div>

<div id="outline-container-sec-1-8-4" class="outline-4">
<h4 id="sec-1-8-4"><span class="todo TODO">TODO</span> \(h(p) ∝ ln p\)</h4>
<div class="outline-text-4" id="text-1-8-4">
<p>
TODO<br  />
</p>
</div>
</div>
</div>

<div id="outline-container-sec-1-9" class="outline-3">
<h3 id="sec-1-9"><span class="done DONE">DONE</span> 1.29 [www] \(H[x]≦\ln M\)の証明</h3>
<div class="outline-text-3" id="text-1-9">
\begin{align*}
    H[x] = &  - \sum_{i=1}^M p(x_i) \ln p(x_i) \\
\end{align*}
<p>
\(-\ln x\)は真に凸な関数だから、イェンセンの不等式を用いて、<br  />
</p>
\begin{align*}
    H[x] ≦ & - \ln \sum_{i=1}^M p(x_i)^2
\end{align*}
<p>
ここで\(\sum_{i=1}^M p(x_i)^2\)を最大にする\(p(x_i)\)は<br  />
</p>
\begin{align*}
    \frac{∂}{∂p(x_i)} [\sum_{i=1}^M p(x_i)^2 - λ(\sum_{i=1}^M p(x_i) - 1)] = & 0 \\
                                                                2 p(x_i) - λ = & 0 \\
                                                                      p(x_i) = & λ/2 \\
\end{align*}
<p>
\(\sum_{i=1}^M p(x_i) = 1\)より<br  />
</p>
\begin{align*}
    p(x_i) = 1/M
\end{align*}
\begin{align*}
    H[x] ≦ & - \ln \sum_{i=1}^M (1/M) (1/M) \\
          = & \ln M
\end{align*}
</div>
</div>

<div id="outline-container-sec-1-10" class="outline-3">
<h3 id="sec-1-10"><span class="done DONE">DONE</span> 1.30 二つのガウス分布のKLダイバージェンス</h3>
<div class="outline-text-3" id="text-1-10">
\begin{align*}
    p(x) = & N(x|μ,σ^2) = \frac{1}{(2πσ^2)^{1/2}} \exp\{-\frac{1}{2σ^2} (x-μ)^2\} \\
    q(x) = & N(x|m,s^2) = \frac{1}{(2πs^2)^{1/2}} \exp\{-\frac{1}{2s^2} (x-m)^2\} \\
\end{align*}

\begin{align*}
    KL(p\|q) = & - \int p(x) \ln \frac{q(x)}{p(x)} dx \\
             = & - \int p(x) \ln q(x) dx + \int p(x) \ln p(x) dx \\
\end{align*}

\begin{align*}
        - \int p(x) \ln q(x) dx
    = & - \int p(x) \ln \left[\frac{1}{(2πs^2)^{1/2}} \exp\{-\frac{1}{2s^2} (x-m)^2\}\right] dx \\
    = & - \int p(x) \left[\ln \frac{1}{(2πs^2)^{1/2}} - \frac{1}{2s^2} (x-m)^2\right] dx \\
    = & - \int p(x) \ln \frac{1}{(2πs^2)^{1/2}} dx + \int p(x) \frac{1}{2s^2} (x-m)^2 dx \\
    = & - \ln \frac{1}{(2πs^2)^{1/2}} + \frac{1}{2s^2} \int p(x) (x-m)^2 dx \\
    = & \frac{1}{2} \ln (2πs^2) + \frac{1}{2s^2} \int p(x) (x-m)^2 dx \\
    = & \frac{1}{2} \ln (2πs^2) + \frac{1}{2s^2} \int p(x) (x^2 - 2xm + m^2) dx \\
    = & \frac{1}{2} \ln (2πs^2)
        + \frac{1}{2s^2} \{\int p(x) x^2 dx - 2m \int p(x) x dx + m^2 \int p(x)  dx\} \\
    = & \frac{1}{2} \ln (2πs^2) + \frac{1}{2s^2} \{μ^2 + σ^2 - 2mμ + m^2\} \\
    = & \frac{1}{2} \ln (2πs^2) + \frac{1}{2s^2} \{(μ - m)^2 + σ^2\} \\
\end{align*}

\begin{align*}
        - \int p(x) \ln p(x) dx
    = & \frac{1}{2} \ln (2πσ^2) + \frac{1}{2σ^2} \{(μ - μ)^2 + σ^2\} \\
    = & \frac{1}{2} \ln (2πσ^2) + \frac{1}{2} \\
\end{align*}

\begin{align*}
    KL(p\|q) = & \frac{1}{2} \ln (2πs^2) + \frac{1}{2s^2} \{(μ - m)^2 + σ^2\}
                 - (\frac{1}{2} \ln (2πσ^2) + \frac{1}{2}) \\
             = & \frac{s}{σ} + \frac{1}{2s^2} \{(μ - m)^2 + σ^2\} - \frac{1}{2} \\
\end{align*}
</div>
</div>
</div>
</div>
<div id="postamble" class="status">
<p class="creator"><a href="http://www.gnu.org/software/emacs/">Emacs</a> 24.4.4 (<a href="http://orgmode.org">Org</a> mode 8.2.10)</p>
<p class="validation"><a href="http://validator.w3.org/check?uri=referer">Validate</a></p>
</div>
</body>
</html>
