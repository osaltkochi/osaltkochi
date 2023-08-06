#+TITLE: PRML 第1章 演習 1.11-1.20
#+HTML_MATHJAX: align:"left" mathml:nil path:"http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
#+OPTIONS: author:nil timestamp:nil
#+OPTIONS: num:nil toc:2 \n:t
* PRML 第1章 演習 1.11-1.20
** DONE 1.11 対数尤度関数からサンプル平均とサンプル分散を求める
(1.54) 対数尤度関数
\begin{align*}
    \ln p(x|μ,σ^2) = - \frac{1}{2σ^2} \sum_{n=1}^N (x_n - μ)^2
                    - \frac{N}{2} \ln σ^2 - \frac{N}{2} \ln (2π)
\end{align*}
\begin{align*}
    \frac{∂}{∂μ} \ln p(x|μ,σ^2) ∝ & \frac{∂}{∂μ} \sum_{n=1}^N (x_n - μ)^2 \\
                                   = &  \sum_{n=1}^N \frac{∂}{∂μ} (x_n - μ)^2 \\
                                   = &  -2μ \sum_{n=1}^N (x_n - μ) \\
                                   = &  -2μ [\sum_{n=1}^N x_n - Nμ] \\
                                 0 = &  \sum_{n=1}^N μ_{ML} (x_n - μ_{ML}) \\
                            μ_{ML} = &  0, \frac{1}{N} \sum_{n=1}^N x_n    & \text{(1.55)}
\end{align*}
\begin{align*}
    \frac{∂}{∂(σ^2)} \ln p(x|μ,σ^2)
                        = & [\frac{∂}{∂(σ^2)} -\frac{1}{2σ^2}] \sum_{n=1}^N (x_n - μ)^2
                            - \frac{N}{2} \frac{∂}{∂(σ^2)} \ln σ^2 \\
                        = & \frac{1}{2σ^4} \sum_{n=1}^N (x_n - μ)^2 - \frac{N}{2σ^2} \\
                      0 = & \frac{1}{2σ_{ML}^4} \sum_{n=1}^N (x_n - μ_{ML})^2 - \frac{N}{2σ_{ML}^2} \\
    \frac{N}{2σ_{ML}^2} = & \frac{1}{2σ_{ML}^4} \sum_{n=1}^N (x_n - μ_{ML})^2 \\
             N σ_{ML}^2 = & \sum_{n=1}^N (x_n - μ_{ML})^2 \\
               σ_{ML}^2 = & \frac{1}{N} \sum_{n=1}^N (x_n - μ_{ML})^2   & \text{(1.56)}
\end{align*}

** DONE 1.12 [www] ガウス分布の下での2つのデータ点の積の平均値
\begin{align*}
    E[x]   = & ∫_{-∞}^∞ N(x|μ,σ^2)x dx   = & μ         & \text{(1.49)} \\
    E[x^2] = & ∫_{-∞}^∞ N(x|μ,σ^2)x^2 dx = & μ^2 + σ^2 & \text{(1.50)}
\end{align*}
\(n = m\)の場合、\(x_n\)と\(x_m\)は同じ試行の結果なので、\(E[x_n x_m]\)は\(E[x^2]\)と同じ。
\begin{align*}
    E[x_n x_m] = μ^2 + σ^2
\end{align*}
\(n ≠ m\)の場合、\(x_n\)と\(x_m\)は独立した試行の結果なので、
\begin{align*}
    E[x_n x_m] = E[x_n] E[x_m]
\end{align*}
\(E[x_n]\)、\(E[x_m]\)は\(E[x]\)と同じ。
\begin{align*}
    E[x_n x_m] = E[x]^2 = μ^2
\end{align*}
まとめると
\begin{align*}
    E[x_n x_m] = μ^2 + δ_{nm}σ^2
\end{align*}

** TODO 1.13 ガウス分布の分散の推定値
ガウス分布の分散の推定量
\begin{align*}
    σ_{ML}^2 = \frac{1}{N} \sum_{n=1}^N (x_n - μ_{ML})^2 & \text{(1.56)}
\end{align*}
平均の最尤推定値 μ_{ML} を真の値 μ で置き換える。
\begin{align*}
    σ_{ML}^2 = \frac{1}{N} \sum_{n=1}^N (x_n - μ)^2
\end{align*}
期待値をとる。
\begin{align*}
    E[σ_{ML}^2] = & ∫ p(x|μ,σ^2) σ_{ML}^2 dx \\
                = & \frac{1}{N} ∫ [\prod_{n=1}^N N(x_n|μ,σ^2)] [\sum_{n=1}^N (x_n - μ)^2] dx
\end{align*}

** DONE 1.14 D次元多項式の2次の項の独立パラメータの数
任意の\(w_{ij}\)に対して、次の方程式を満たす\(w^S_{ij}\)、\(w^A_{ij}\)が存在するか否かを問うている。
\begin{align*}
      w_{ij} = & w^S_{ij} + w^A_{ij} \\
    w^S_{ij} = & w^S_{ji} \\
    w^A_{ij} = & -w^A_{ji} \\
\end{align*}
\(w^S_{ij}\)、\(w^A_{ij}\)を以下のように定義すると、上記の条件を満たす。
\begin{align*}
    w^S_{ij} = & (w_{ij} + w_{ji})/2 \\
    w^A_{ij} = & (w_{ij} - w_{ji})/2 \\
\end{align*}

\begin{align*}
      & \sum_{i=1}^D \sum_{j=1}^D w_{ij} x_i x_j \\
    = & \sum_{i=1}^D \sum_{j=1}^D (w^S_{ij} + w^A_{ij}) x_i x_j \\
    = & \sum_{i=1}^D \sum_{j=1}^D w^S_{ij} x_i x_j
      + \sum_{i=1}^D \sum_{j=1}^D w^A_{ij} x_i x_j \\
    = & \sum_{i=1}^D \sum_{j=1}^D w^S_{ij} x_i x_j \\
\end{align*}

\(w^S_{ij}\)は\(D^2\)個のパラメータを含むが、
\(w^S_{ij} = w^S_{ji}\)という\(D(D-1)/2\)個の独立な方程式を満たさなければならないので、
独立なパラメータの数は
\begin{align*}
      & D^2 - D(D-1)/2 \\
    = & D^2/2 + D/2 \\
    = & D(D+1)/2 \\
\end{align*}

** DONE 1.15 [www] M次のD次元多項式の独立なパラメータの数
D次元の多項式のM次の項
\begin{align*}
    \sum_{i_1=1}^D \sum_{i_2=1}^D ... \sum_{i_M=1}^D
        w_{i_1 i_2 ... i_M} x_{i_1} x_{i_2} ... x_{i_M}    & \text{(1.133)}
\end{align*}

*** DONE (1.134)の証明
以下の式が成り立つことを証明する。
\begin{align*}
    \sum_{i_1=1}^D \sum_{i_2=1}^{i_1} ... \sum_{i_M=1}^{i_{M-1}}
        \tilde{w}_{i_1 i_2 ... i_M} x_{i_1} x_{i_2} ... x_{i_M}   & \text{(1.134)}
\end{align*}

\(x_{i_1} x_{i_2} ... x_{i_M}\)の掛け算の順序を並べ替えたものは等しい。
そこで、常に添字が減少する順序に並べ替えることにする。
並べ替えた添字を\(j_1, j_2, ..., j_M\)とすると、
\begin{align*}
   j_1 ≧ j_2, j_2 ≧ j_3, ..., j_{M-1} ≧ j_M
\end{align*}
が成り立つ。
この条件を満たすようにすべての項の和をとったものが(1.134)である。

*** DONE (1.135)の証明
\begin{align*}
    n(D,M) = \sum_{i=1}^D n(i,M-1)    & \text{(1.135)}
\end{align*}

(1.134)は冗長性のない和なので、
その項の数がすなわち独立なパラメータの数である。
項の数は各項を1で置き換えることにより得られる。
\begin{align*}
    n(D,M)   = & \sum_{i_1=1}^D \sum_{i_2=1}^{i_1} ... \sum_{i_M=1}^{i_{M-1}} 1 \\
    n(i,M-1) = & \sum_{i_1=1}^i \sum_{i_2=1}^{i_1} ... \sum_{i_{(M-1)}=1}^{i_{(M-1)-1}} 1 \\
\end{align*}

(1.135)の右辺から出発し、上の式を用いて\(n(i,M-1)\)を展開し、
適当に添字を付け替えれば、(1.135)の左辺が得られる。
\begin{align*}
      & \sum_{i=1}^D n(i,M-1) \\
    = & \sum_{i=1}^D \sum_{i_1=1}^i \sum_{i_2=1}^{i_1} ... \sum_{i_{M-1}=1}^{i_{(M-1)-1}} 1 \\
    = & \sum_{i_1=1}^D \sum_{i_2=1}^{i_1} \sum_{i_3=1}^{i_2} ... \sum_{i_M=1}^{i_{M-1}} 1
      & i→i_1, i_n→i_{n+1} \\
    = & n(D,M) \\
\end{align*}

*** DONE (1.136)の証明
\begin{align*}
    \sum_{i=1}^D \frac{(i+M-2)!}{(i-1)!(M-1)!} = \frac{(D+M-1)!}{(D-1)!M!} & \text{(1.136)}
\end{align*}

\(D=1\)と任意の\(M\)の場合に成り立つことを示す。
\begin{align*}
    左辺 = & \sum_{i=1}^D \frac{(i+M-2)!}{(i-1)!(M-1)!} \\
         = & \sum_{i=1}^1 \frac{(i+M-2)!}{(i-1)!(M-1)!} \\
         = & \frac{(1+M-2)!}{(1-1)!(M-1)!} \\
         = & \frac{(M-1)!}{0!(M-1)!} \\
         = & 1 \\
\end{align*}

\begin{align*}
    右辺 = & \frac{(D+M-1)!}{(D-1)!M!} \\
         = & \frac{(1+M-1)!}{(1-1)!M!} \\
         = & \frac{M!}{0!M!} \\
         = & 1 \\
\end{align*}

\(D=d\)と任意の\(M\)の場合に成り立つという仮定のもとで、
\(D=d+1\)と任意の\(M\)の場合に成り立つことを示す。
\begin{align*}
    左辺 = & \sum_{i=1}^D \frac{(i+M-2)!}{(i-1)!(M-1)!} \\
         = & \sum_{i=1}^{d+1} \frac{(i+M-2)!}{(i-1)!(M-1)!} \\
         = & \frac{(d+1+M-2)!}{(d+1-1)!(M-1)!} + \sum_{i=1}^d \frac{(i+M-2)!}{(i-1)!(M-1)!} \\
         = & \frac{(d+1+M-2)!}{(d+1-1)!(M-1)!} + \frac{(d+M-1)!}{(d-1)!M!}
           & \text{帰納法の仮定より} \\
         = & \frac{(d+M-1)!}{d!(M-1)!} + \frac{(d+M-1)!}{(d-1)!M!} \\
         = & \frac{(d+M-1)!M}{d!M!} + \frac{(d+M-1)!d}{d!M!} \\
         = & \frac{(d+M-1)!(M+d)}{d!M!} \\
         = & \frac{(d+M)!}{d!M!} \\
\end{align*}

\begin{align*}
    右辺 = & \frac{(D+M-1)!}{(D-1)!M!} \\
         = & \frac{(d+1+M-1)!}{(d+1-1)!M!} \\
         = & \frac{(d+M)!}{d!M!} \\
\end{align*}

よって、数学的帰納法により、任意の\(D\)、\(M\)について(1.136)が成り立つ。

*** DONE (1.137)の証明
\begin{align*}
    n(D,M) = \frac{(D+M-1)!}{(D-1)!M!}    (1.137)
\end{align*}

\(M=2\)と任意の\(D≧1\)の場合に成り立つことを示す。
\begin{align*}
    左辺 = & n(D,M) \\
         = & n(D,2) \\
         = & \sum_{i_1=1}^D \sum_{i_2=1}^{i_1} 1 \\
         = & \sum_{i_1=1}^D i_1 \\
         = & \frac{(D+1)D}{2} \\
\end{align*}

\begin{align*}
    右辺 = & \frac{(D+M-1)!}{(D-1)!M!} \\
         = & \frac{(D+2-1)!}{(D-1)!2!} \\
         = & \frac{(D+1)!}{(D-1)!2} \\
         = & \frac{(D+1)D!D}{D!2} \\
         = & \frac{(D+1)D}{2} \\
\end{align*}

\(M-1\)次で成り立っているという仮定のもとで、
\(M\)次の場合に成り立つことを示す。
\begin{align*}
    左辺 = & n(D,M) \\
         = & \sum_{i=1}^D n(i,M-1)                           & \text{(1.135)より} \\
         = & \sum_{i=1}^D \frac{(i+(M-1)-1)!}{(i-1)!(M-1)!}  & \text{帰納法の仮定より} \\
         = & \sum_{i=1}^D \frac{(i+M-2)!}{(i-1)!(M-1)!} \\
         = & \frac{(D+M-1)!}{(D-1)!M!}                       & \text{(1.136)より} \\
\end{align*}

よって、数学的帰納法により、任意の\(D\)、\(M\)について(1.137)が成り立つ。

** TODO 1.16 M次までのすべての項における独立なパラメータの数
*** DONE 
\(M\)次までのすべての項における独立パラメータの数
\begin{align*}
    N(D,M) = & \sum_{m=0}^M n(D,m)    & \text{(1.138)}
\end{align*}

*** DONE \(N(D,M) = (D+M)!/D!M!\) (1.139)の証明
\(M=0\)と任意の\(D≧1\)の場合に成り立つことを示す。
\begin{align*}
    左辺 = & N(D,0) \\
         = & \sum_{m=0}^0 n(D,m) \\
         = & n(D,0) \\
         = & (D+0-1)!/(D-1)!0!    & \text{(1.137)より} \\
         = & 1 \\
    右辺 = & (D+0)!/D!0! \\
         = & 1 \\
\end{align*}

\(M\)次で成り立つという仮定のもとで\(M+1\)次の場合に成り立つことを示す。
\begin{align*}
          & N(D,M+1) \\
        = & \sum_{m=0}^{M+1} n(D,m) \\
        = & n(D,M+1) + \sum_{m=0}^M n(D,m) \\
        = & n(D,M+1) + N(D,M) \\
        = & n(D,M+1) + \frac{(D+M)!}{D!M!}                           & \text{帰納法の仮定より} \\
        = & \frac{(D+(M+1)-1)!}{(D-1)!(M+1)!} + \frac{(D+M)!}{D!M!}  & \text{(1.137)より} \\
        = & \frac{D(D+M)!}{D!(M+1)!} + \frac{(D+M)!(M+1)}{D!(M+1)!} \\
        = & \frac{(D+(M+1))!}{D!(M+1)!} \\
\end{align*}

よって、数学的帰納法により、任意の\(D\)、\(M\)について(1.139)が成り立つ。

*** TODO 
\begin{align*}
    D≫M のとき O(N(D,M)) = & D^M \\
    M≫D のとき O(N(D,M)) = & M^D \\
\end{align*}

\begin{align*}
    N(D,M) = & (D+M)!/D!M! \\
           = & \prod_{i=D+M}^{} \\
\end{align*}
\(D≫M\)のとき
\begin{align*}
    N(D,M) ≒ & (D+M)^(D+M)e^{-(D+M)}/D^De^{-D}M! \\
            = & (D+M)^(D+M)e^{-M}/D^DM! \\
\end{align*}

*** DONE 
>>> import math
>>> math.factorial(10+3)/math.factorial(10)/math.factorial(3)
286L
>>> math.factorial(100+3)/math.factorial(100)/math.factorial(3)
176851L

10^3=1000
100^3=1000000

** DONE 1.17 [www] ガンマ関数と階乗
ガンマ関数
\begin{align*}
    Γ(x) = ∫_0^∞ u^{x-1}e^{-u} du
\end{align*}

部分積分の公式
\begin{align*}
    ∫_a^b f(x)g'(x)dx = [f(x)g(x)]_a^b - ∫_a^b f'(x)g(x)dx
\end{align*}

\begin{align*}
    Γ(x+1) = & ∫_0^∞ u^xe^{-u} du \\
           = & -[u^xe^{-u}]_0^∞ - x ∫_0^∞ u^{x-1}e^{-u} du \\
           = & x Γ(x)
\end{align*}

\begin{align*}
    Γ(1) = & ∫_0^∞ e^{-u} du \\
         = & -[e^{-u}]_0^∞ \\
         = & -(e^{-∞} - e^0) \\
         = & -(0 - 1) \\
         = & 1
\end{align*}

\begin{align*}
    Γ(x+1) = & x Γ(x) \\
    Γ(1)   = & 1
\end{align*}
これは \(x!\) の定義そのものである。

** TODO 1.18 [www] D次元単位球の表面積と体積
\begin{align*}
    \prod_{i=1}^D ∫_{-∞}^∞ e^{-x_i^2} dx_i = S_D ∫_0^∞ e^{-r^2}r^{D-1} dr    & \text{(1.142)}
\end{align*}

*** DONE \(S_D = \frac{2π^{D/2}}{Γ(D/2)}\) の証明
\begin{align*}
    ∫_{-∞}^∞ exp(-x^2/2σ^2)dx = (2πσ^2)^{1/2}    & \text{(1.126)}
\end{align*}
\(σ^2 = 1/2\)を代入すると
\begin{align*}
    ∫_{-∞}^∞ exp(-x^2)dx = π^{1/2}
\end{align*}

(1.142)左辺
\begin{align*}
    \prod_{i=1}^D ∫_{-∞}^∞ e^{-x_i^2} dx_i = & \prod_{i=1}^D π^{1/2} \\
                                              = & π^{D/2}
\end{align*}

(1.142)右辺の積分で、\(r^2=u\)とおくと\(du=2rdr\)
\begin{align*}
    ∫_0^∞ e^{-r^2}r^{D-1} dr = & ∫_0^∞ \frac{e^{-u}r^{D-1}}{2r} du \\
                               = & ∫_0^∞ \frac{e^{-u}r^{D-2}}{2} du \\
                               = & \frac{1}{2} ∫_0^∞ e^{-u}u^{D/2-1} du \\
                               = & \frac{Γ(D/2)}{2}
\end{align*}
これらを(1.142)に代入すると
\begin{align*}
    π^{D/2} = & S_D \frac{Γ(D/2)}{2} \\
        S_D = & \frac{2π^{D/2}}{Γ(D/2)}
\end{align*}

*** TODO \(V_D = \frac{S_D}{D}\) の証明
\begin{align*}
    V_D = & S_D ∫_0^1 r^{D-1} dr \\
        = & S_D \left[ \frac{r^D}{D} \right]_0^1 \\
        = & \frac{S_D}{D} \\
\end{align*}

:TODO: $ V_D = & S_D ∫_0^1 r^{D-1} dr $ これはなぜ？

*** DONE \(D=2\)および\(D=3\)の場合
\(D=2\)のとき
\begin{align*}
    S_D = & 2π^{D/2}/Γ(D/2) \\
        = & 2π^{2/2}/Γ(2/2) \\
        = & 2π
\end{align*}
\begin{align*}
    V_D = & S_D/D \\
        = & 2π/2 \\
        = & π
\end{align*}

\(D=3\)のとき
\begin{align*}
    S_D = & 2π^{D/2}/Γ(D/2) \\
        = & 2π^{3/2}/Γ(3/2) \\
        = & 2π^{3/2}/\sqrt{π}/2 \\
        = & 2π^{3/2}π^{-1/2}/2 \\
        = & 4π
\end{align*}
\begin{align*}
    V_D = & S_D/D \\
        = & 4π/3
\end{align*}

** TODO 1.19 D次元超立方体の体積
*** DONE 
\begin{align*}
    \text{立方体の体積} = & \prod_{i=1}^D ∫_{-a}^{a} dx_i \\
                        = & (2a)^D
\end{align*}

\begin{align*}
        \frac{ \text{球の体積} }{ \text{立方体の体積} }
    = & \frac{ 2π^{D/2}a^D }{ DΓ(D/2)(2a)^D } \\
    = & \frac{ 2π^{D/2} }{ DΓ(D/2)2^D } \\
    = & \frac{ π^{D/2} }{ D2^{D-1}Γ(D/2) } \\
\end{align*}

*** TODO 
スターリングの公式
\(x≫1\)のとき
\begin{align*}
    Γ(x+1) ≒ (2π)^{1/2}e^{-x}x^{x+1/2}
\end{align*}

\(D→∞\)のとき
\begin{align*}
      & \frac{ π^{D/2} }{ D2^{D-1}Γ(D/2) } \\
    = & \frac{ π^{D/2} }{ D2^{D-1}(2π)^{1/2}e^{-D/2}(D/2)^{D/2+1/2} } \\
    = & \frac{ π^{D/2} }{ D2^{D-1}(2π)^{1/2}e^{-D/2}(D/2)^{(D+1)/2} } \\
    = & \frac{ π^{D/2}e^{D/2}2^{(D+1)/2} }{ D2^{D-1}(2π)^{1/2}D^{(D+1)/2} } \\
    = & \frac{ π^{D/2}e^{D/2}2^{(D+1)/2} }{ 2^{D-1}(2π)^{1/2}D^{(D+3)/2} } \\
    = & \frac{ π^{(D-1)/2}e^{D/2}2^{-D/2+1} }{ D^{(D+3)/2} } \\
\end{align*}

*** DONE 
立方体の中心から1つの頂点までの距離
\begin{align*}
    d_1 = & a \\
    d_D = & \sqrt{d_{D-1}^2 + a^2} \\
    d_D = & \sqrt{Da^2} \\
    d_D = & a\sqrt{D} \\
\end{align*}
中心から側面までの距離で割った比
\begin{align*}
    d_D/a = & \sqrt{D}
\end{align*}
\(D→∞\)のとき\(d_D/a→∞\)。

** TODO 1.20 [www] 高次元ガウス分布の振る舞い
D次元ガウス分布
\begin{align*}
    p(x) = & 1/(2πσ^2)^{D/2} exp(-||x||^2/2σ^2)    & \text{(1.147)}
\end{align*}
\begin{align*}
    p(r) = & S_Dr^{D-1}/(2πσ^2)^{D/2} exp(-r^2/2σ^2)    & \text{(1.148)}
\end{align*}

(1.147)を極座標に変換する。
