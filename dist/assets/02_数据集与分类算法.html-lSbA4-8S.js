import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c as t,f as r}from"./app-VKLC1A-x.js";const p="/mynotes/assets/估计器的工作流程-KXp4yCLP.png",s="/mynotes/assets/混淆矩阵-caD1E7sm.png",n={},a=r('<h1 id="数据集与分类算法" tabindex="-1"><a class="header-anchor" href="#数据集与分类算法" aria-hidden="true">#</a> 数据集与分类算法</h1><p><strong>机器学习</strong>：机器学习就是从<em><strong>数据</strong></em>中自动分析获得<em><strong>规律（模型）</strong></em>，并利用规律<em><strong>对未知数据进行预测</strong></em></p><ul><li><p><strong>数据类型</strong></p><ul><li><em><strong>离散型数据</strong></em>：由记录不同类别个体的数目所得到的数据，又称计数数据，所有这些数据全部都是整数，而且不能再细分，也不能进一步提高他们的精确度</li><li><em><strong>连续型数据</strong></em>：变量可以在某个范围内取任一数，即变量的取值可以是连续的，如，长度、时间、质量值等，这类整数通常是非整数，含有小数部分</li></ul><p><em><strong>注</strong></em>：只要记住一点，离散型是区间内不可分，连续型是区间内可分</p></li><li><p><strong>机器学习算法分类</strong></p><ul><li><p><strong>监督学习</strong>：特征值+目标值</p><ul><li><p><em><strong>分类</strong></em>（目标值是离散型）：k-近邻算法、贝叶斯分类、决策树与随机森林、逻辑回归、神经网络</p></li><li><p><em><strong>回归</strong></em>（目标值是连续型）：线性回归、岭回归</p></li><li><p><em><strong>标注</strong></em>：隐马尔可夫模型（不做要求）</p></li></ul></li><li><p><strong>无监督学习</strong>：只有特征值（无目标值）</p><ul><li><em><strong>聚类</strong></em>：k-means</li></ul></li></ul></li></ul><h2 id="sklearn数据集" tabindex="-1"><a class="header-anchor" href="#sklearn数据集" aria-hidden="true">#</a> sklearn数据集</h2><h3 id="数据集划分" tabindex="-1"><a class="header-anchor" href="#数据集划分" aria-hidden="true">#</a> 数据集划分</h3><p>机器学习一般的数据集会划分为两个部分：</p><p><em><strong>训练数据</strong></em>：训练集，用于训练，构建模型，一般占比为75%</p><p><em><strong>测试数据</strong></em>：测试集，在模型检验时使用，用于评估模型是否有效，一般占比为25%</p><h3 id="数据集的api" tabindex="-1"><a class="header-anchor" href="#数据集的api" aria-hidden="true">#</a> 数据集的API</h3><ul><li><p><code>sklearn.datasets</code></p><p>加载获取流行的数据集</p><ul><li><p><code>sklearn.datasets.load_*()</code></p><p>获取小规模数据集，数据包含在datasets目录里</p></li><li><p><code>sklearn.datasets.fetch_*(data_home=None)</code></p><p>获取大规模数据集，需要从网络上下载</p><p>函数的第一个参数是data_home，表示数据集存放的目录，默认是<code>~/scikit_learn_data/</code></p></li></ul></li><li><p><strong>获取数据集返回的类型和属性</strong></p><p><code>load_*</code>和<code>fetch_*</code>返回的数据类型是<code>datasets.base.Bunch</code>，一种字典格式的数据，其中包含的属性有：</p><p><em><strong>1&gt;</strong></em> <code>data</code>：数据集特征值，是[n_samples * n_features]的二维numpy.ndarray数组</p><p><em><strong>2&gt;</strong></em> <code>target</code>：数据集目标值，是n_samples的一维numpy.ndarray数组</p><p><em><strong>3&gt;</strong></em> <code>DESCR</code>：数据描述</p><p><em><strong>4&gt;</strong></em> <code>feature_names</code>：特征值的名称，新闻数据、手写数字、回归数据集没有</p><p><em><strong>5&gt;</strong></em> <code>target_names</code>：目标值的类别名称，回归数据集没有</p></li><li><p><code>sklearn.datasets.clear_data_home(data_home=None)</code></p><p>清除目录下的所有数据</p></li></ul><h3 id="数据集分割" tabindex="-1"><a class="header-anchor" href="#数据集分割" aria-hidden="true">#</a> 数据集分割</h3><ul><li><p><strong>数据集分割的API</strong>：</p><p><code>sklearn.model_selection.train_test_split(*arrays, **options)</code></p><blockquote><p><code>x</code>：数据集的特征值</p><p><code>y</code>：数据集的目标值</p><p><code>test_size</code>：测试集占整个数据集的比例，一般为float，0.25</p><p><code>random_state</code>：随机数种子，不同的种子会造成不同的随机采样结果，相同的种子采样结果相同</p><p><strong>返回值</strong>：返回四个结果，分别为：训练集特征值、测试集特征值、训练集目标值、测试集目标值(默认随机选取)</p></blockquote></li></ul><h2 id="转换器与估计器" tabindex="-1"><a class="header-anchor" href="#转换器与估计器" aria-hidden="true">#</a> 转换器与估计器</h2><h3 id="转换器" tabindex="-1"><a class="header-anchor" href="#转换器" aria-hidden="true">#</a> 转换器</h3><p><em><strong>1&gt;</strong></em> 特征工程中的实例化使用的是一个转换器类（Transformer）</p><p><em><strong>2&gt;</strong></em> 调用<code>fit_transform()</code>将输入的数据直接进行转换，作用相当于<code>fit()</code>+<code>transform()</code>，其中<code>fit()</code>在输入数据时只是进行平均值、方差等基本计算，在调用<code>transform()</code>时才会进行数据转换，同时在对文档建立分类词频矩阵时，两者不能同时使用</p><h3 id="估计器" tabindex="-1"><a class="header-anchor" href="#估计器" aria-hidden="true">#</a> 估计器</h3><p>在sklearn中，估计器(estimator)是一个重要的角色，分类器和回归器都属于estimator，是一类实现了算法的API</p><ul><li><p><strong>用于分类的估计器</strong></p><p><code>sklearn.neighbors</code>：k-近邻算法</p><p><code>sklearn.naive_bayes</code>：贝叶斯</p><p><code>sklearn.linear_model.LogisticRegression</code>：逻辑回归</p></li><li><p><strong>用于回归的估计器</strong></p><p><code>sklearn.linear_model.LinearRegression</code>：线性回归</p><p><code>sklearn.linear_model.Ridge</code>：岭回归</p></li></ul><p>估计器的工作流程：</p><img src="'+p+'" alt="估计器的工作流程" style="zoom:33%;"><h2 id="分类算法" tabindex="-1"><a class="header-anchor" href="#分类算法" aria-hidden="true">#</a> 分类算法</h2><h3 id="k近邻算法-knn" tabindex="-1"><a class="header-anchor" href="#k近邻算法-knn" aria-hidden="true">#</a> k近邻算法(KNN)</h3><p><strong>定义</strong>：如果一个样本在特征空间中的k个最相似（即特征空间中最邻近）的样本中的大多数属于某一个类别，则该样本也属于这个类别</p><p><strong>来源</strong>：KNN算法最早是由Cover和Hart提出的一种分类算法</p><p><strong>距离计算公式</strong>：比如说：a(a1,a2,a3)、b(b1,b2,b3)，它们之间的距离为：<code>√((a1 − b1)^2 + (a2 − b2)^2 + (a3 − b3)^2)</code>，又叫<em><strong>欧式距离</strong></em></p><p><em><strong>注</strong></em>：k近邻算法在使用前需要对数据进行<em><strong>标准化处理</strong></em></p><ul><li><p><strong>k近邻算法的API</strong></p><p><code>sklearn.neighbors.KNeighborsClassifier(n_neighbors=5, algorithm=&#39;auto&#39;)</code></p><blockquote><p><code>n_neighbors</code>：int，可选（默认=5），k_neighbors查询默认使用的邻居数</p><p><code>algorithm</code>：{&#39;auto&#39;, &#39;ball_tree&#39;, &#39;kd_tree&#39;, &#39;brute&#39;}，可选用于计算最近邻居的算法：&#39;ball_tree&#39;会使用&#39;BallTree&#39;，&#39;kd_tree&#39;会使用&#39;KDTree&#39;，&#39;auto&#39;将尝试根据传递给<code>fit()</code>方法的值来决定最合适的算法（不同实现方式效率也不同）</p></blockquote><ul><li><p><strong>常用的方法</strong>：</p><ul><li><p><code>KNeighborsClassifier.fit(x_train, y_train)</code></p></li><li><p><code>KNeighborsClassifier.predict(x_test)</code>：获取预测结果</p></li><li><p><code>KNeighborsClassifier.score(x_test, y_test)</code>：获取预测的准确率</p></li></ul></li></ul></li><li><p><strong>总结</strong></p><ul><li><p><strong>n_neighbors取值大小的影响</strong>：</p><p><em><strong>值取很小</strong></em>：容易受异常点影响</p><p><em><strong>值取很大</strong></em>：容易受最近数据太多导致比例变化</p></li><li><p><strong>k-近邻算法优缺点</strong>：</p><p><em><strong>优点</strong></em>：简单，易于理解，易于实现，无需估计参数，无需训练</p><p><em><strong>缺点</strong></em>：懒惰算法，对测试样本分类时的计算量大，内存开销大；必须指定K值，K值选择不当则分类精度不能保证</p></li><li><p><strong>使用场景</strong>：小数据场景，几千～几万样本，具体场景具体业务去测试</p></li></ul></li></ul><h3 id="朴素贝叶斯算法" tabindex="-1"><a class="header-anchor" href="#朴素贝叶斯算法" aria-hidden="true">#</a> 朴素贝叶斯算法</h3><ul><li><p><strong>联合概率和条件概率</strong></p><ul><li><p><em><strong>联合概率</strong></em>：包含多个条件，且所有条件同时成立的概率</p><p>记作：<code>P(A,B)</code></p><p>特性：<code>P(A,B) = P(A) * P(B)</code></p></li><li><p><em><strong>条件概率</strong></em>：事件A在另外一个事件B已经发生的条件下发生的概率</p><p>记作：<code>P(A|B)</code></p><p>特性：<code>P(A1,A2|B) = P(A1|B) * P(A2|B)</code></p><p><em><strong>注</strong></em>：此条件概率的成立要求各事件之间相互独立</p></li></ul></li><li><p><strong>朴素贝叶斯公式</strong></p><p><code>P(C│W) = P(W│C) * P(C) / P(W)</code></p><p><em><strong>注</strong></em>：W为给定文档的特征值（频数统计，预测文档提供），C为文档类别</p><p>公式可以理解为：<code>P(C│F1,F2,...) = P(F1,F2,...│C) * P(C) / P(F1,F2,...)</code></p><p>公式分为三部分：</p><ul><li><p><code>P(C)</code>：类别C的概率 = (该类别下的文档数/总文档数)</p></li><li><p><code>P(W│C)</code>：类别C下特征（被预测文档中出现的词）的概率</p><ul><li><p>计算方法：<code>P(F1│C) = Ni / N</code>，（在训练文档中去计算）</p><blockquote><p>Ni为词F1在类别C下的所有文档中出现的次数和</p><p>N为所属类别C下的所有文档中所有词出现的次数和</p></blockquote></li></ul></li><li><p><code>P(F1,F2,...)</code>：预测文档中每个词的概率</p></li></ul></li><li><p><strong>拉普拉斯平滑系数</strong></p><p><code>P(F1│C) = (Ni + α) / (N + αm)</code></p><blockquote><p><em><strong>注</strong></em>：α为指定的系数，一般为1；m为训练文档中统计出的特征词的个数</p></blockquote></li><li><p><strong>朴素贝叶斯的API</strong></p><p><code>sklearn.naive_bayes.MultinomialNB(alpha=1.0)</code></p><blockquote><p><code>alpha</code>：拉普拉斯平滑系数，无需进行设置或修改</p></blockquote></li><li><p><strong>朴素贝叶斯算法的优缺点</strong></p><ul><li><p><em><strong>优点</strong></em>：</p><p>朴素贝叶斯模型发源于古典数学理论，有稳定的分类效率</p><p>对缺失数据不太敏感，算法比较简单，常用于文本分类</p><p>分类准确度高，速度快</p></li><li><p><em><strong>缺点</strong></em>：</p><p>默认文章中的词汇是完全独立的关系，实际并非如此</p><p>对于文本的分类效果不如神经网络</p></li></ul></li></ul><h2 id="分类模型评估" tabindex="-1"><a class="header-anchor" href="#分类模型评估" aria-hidden="true">#</a> 分类模型评估</h2><ul><li><p><code>estimator.score(x_test, y_test)</code>：一般最常见使用的是准确率，即预测结果正确的百分比</p></li><li><p><strong>混淆矩阵</strong></p><p>在分类任务下，预测结果（Predicted Condition）与真实结果（True Condition）之间存在四种不同的组合，构成混淆矩阵（适用于多分类）</p><img src="'+s+'" alt="混淆矩阵" style="zoom:20%;"></li><li><p><strong>精确率与召回率</strong></p><ul><li><em><strong>精确率</strong></em>（Precision）：预测结果为正例的样本中真实结果也为正例的比例（查得准），相当于预测为正例的结果中有多少是真实的正例。结果为：<code>TP / (TP + FP)</code></li><li><em><strong>召回率</strong></em>（Recall）：真实结果为正例的样本中预测结果也为正例的比例（查的全，对正样本的区分能力），相当于从真实的正例中找出了多少。结果为：<code>TP / (TP + FN)</code></li></ul></li><li><p><strong>其他分类标准</strong></p><p><code>F1-score</code>：反映了模型的稳健型</p><p><code>F1 = 2TP / (2TP + FN + FP) = 2 * Precision * Recall / (Precision + Recall)</code></p></li><li><p><strong>分类模型评估的API</strong></p><p><code>sklearn.metrics.classification_report(y_true, y_pred, labels=None, target_names=None)</code></p><blockquote><p><code>y_true</code>：真实的目标值</p><p><code>y_pred</code>：预测的目标值</p><p><code>labels</code>：数据中对应的实际的目标值结果</p><p><code>target_names</code>：与目标值对应的显示的名称</p><p><strong>返回值</strong>：每个类别的精确率与召回率</p></blockquote></li></ul><h2 id="模型的选择与调优" tabindex="-1"><a class="header-anchor" href="#模型的选择与调优" aria-hidden="true">#</a> 模型的选择与调优</h2><h3 id="交叉验证" tabindex="-1"><a class="header-anchor" href="#交叉验证" aria-hidden="true">#</a> 交叉验证</h3><p><strong>目的</strong>：为了让被评估的模型更加准确可信</p><p><strong>工作原理</strong>：将拿到的训练集的数据进行n等分，每次取其中的一份作为验证集，其余的作为训练集，通过n次测试，每次都更换不同的验证集，最终得到n次模型的结果，取平均值作为最终的结果，又称n折交叉验证（一般选用n=10，即10折交叉验证）</p><h3 id="网格搜索" tabindex="-1"><a class="header-anchor" href="#网格搜索" aria-hidden="true">#</a> 网格搜索</h3><p>网格搜索，又称为超参数搜索。通常情况下，在调用算法时有一些参数是需要手动指定的（如k-近邻算法中的K值），这种参数就叫做<em><strong>超参数</strong></em>。但是手动指定的过程非常繁杂，所以需要对模型预设几种超参数组合，<em><strong>每种超参数组合都采用交叉验证来进行评估</strong></em>，最后选出最优的超参数组合来建立模型</p><ul><li><p><strong>网格搜索的API</strong></p><p><code>sklearn.model_selection.GridSearchCV(estimator, param_grid=None, cv=None)</code></p><blockquote><p>对估计器的指定参数值进行详尽搜索</p><p><code>estimator</code>：估计器对象</p><p><code>param_grid</code>：估计器的参数，dict，<code>{&#39;n_neighbors&#39;: [1, 3, 5]}</code></p><p><code>cv</code>：指定几折交叉验证</p></blockquote><ul><li><p><strong>常用的方法</strong>：</p><p><code>fit(x_train, y_train)</code>：输入训练数据</p><p><code>score(x_test, y_test)</code>：获取准确率</p></li><li><p><strong>结果分析（属性）</strong>：</p><p><code>best_score_</code>：在交叉验证中测试的最好结果</p><p><code>best_estimator_</code>：最好的参数模型</p><p><code>best_params_</code>：最优的参数组合</p><p><code>cv_results_</code>：每次交叉验证后的验证集准确率结果和训练集准确率结果</p></li></ul></li></ul><h2 id="决策树和随机森林" tabindex="-1"><a class="header-anchor" href="#决策树和随机森林" aria-hidden="true">#</a> 决策树和随机森林</h2><h3 id="决策树" tabindex="-1"><a class="header-anchor" href="#决策树" aria-hidden="true">#</a> 决策树</h3><p><strong>信息熵</strong>：单位为比特（bit），计算公式：<code>H(x) = -∑P(x)log(2,P(x))</code></p><p>信息和消除不确定性是相联系的，信息越多，不确定性越低，信息熵越小</p><p><strong>信息增益</strong>：得知一个条件之后，减少的信息熵的大小</p><p>特征A对训练数据集D的信息增益<code>g(D,A)</code>，定义为集合D的信息熵<code>H(D)</code>与特征A给定条件下D的条件熵<code>H(D|A)</code>之差，计算公式：<code>g(D,A) = H(D) - H(D|A)</code></p><p>条件熵的计算公式：<code>H(D|A) = ∑(Di / D)H(Di)</code></p><ul><li><p><strong>决策树的API</strong></p><p><code>sklearn.tree.DecisionTreeClassifier(criterion=&#39;gini&#39;, max_depth=None, random_state=None)</code></p><blockquote><p><code>criterion</code>：默认是<code>gini</code>系数，也可以选择信息增益的熵<code>entropy</code></p><p><code>max_depth</code>：树的深度大小</p><p><code>random_state</code>：随机数种子</p></blockquote><ul><li><strong>常用的方法</strong>：<code>decision_path</code>：返回决策树的路径</li></ul></li><li><p><strong>将决策树的结构保存到本地的API</strong></p><p><code>sklearn.tree.export_graphviz(estimator, out_file=&lt;filename&gt;, feature_names=[])</code></p><blockquote><p><code>estimator</code>：估计器对象</p><p><code>out_file</code>：导出的文件名，需要导出成<code>.dot</code>格式，不能直接导出为图片</p><p><code>feature_names</code>：特征值的名称，按照顺序可以将其更改为中文或其他内容</p></blockquote><p><em><strong>注</strong></em>：<code>.dot</code>格式的文件需要借助Graphviz软件将其转换为pdf或png文件</p><p>Graphviz官网：https://graphviz.gitlab.io/</p><p>转换命令：<code>dot -Tpng tree.dot -o tree.png</code></p></li><li><p><strong>决策树的优缺点以及改进</strong></p><ul><li><p><em><strong>优点</strong></em>：</p><p>简单的理解和解释，树木可视化</p><p>需要很少的数据准备，其他技术通常需要数据归一化</p></li><li><p><em><strong>缺点</strong></em>：</p><p>决策树可能不稳定，因为数据的小变化可能会导致完全不同的树被生成</p></li><li><p><em><strong>改进</strong></em>：</p><p>减枝cart算法（决策树的API中已经实现）</p><p>随机森林</p></li></ul><p><em><strong>注</strong></em>：由于决策树具有很好的分析能力，所以经常被用在企业的重要决策中</p></li></ul><h3 id="随机森林" tabindex="-1"><a class="header-anchor" href="#随机森林" aria-hidden="true">#</a> 随机森林</h3><p><strong>集成学习方法</strong>：通过建立几个模型组合来解决单一的预测问题。工作原理是生成<em><strong>多个分类器/模型</strong></em>，各自独立地学习和作出预测，这些预测最后结合成单预测，因此优于任何一个单分类做出的预测</p><p><strong>随机森林</strong>：在机器学习中，随机森林是一个<em><strong>包含多个决策树</strong></em>的分类器，并且其输出的类别是由多数决策树输出的结果来确定的</p><ul><li><p><strong>随机森林的API</strong></p><p><code>sklearn.ensemble.RandomForestClassifier(n_estimators=10, criterion=&#39;gini&#39;, max_depth=None, max_features=&#39;auto&#39;, bootstrap=True, random_state=None)</code></p><blockquote><p><code>n_estimators</code>：int，决策树的数量，可选参数（默认为100），一般可以设置为120、200、300、500、800、1200</p><p><code>criteria</code>：str，分割特征的测量方法，可选参数（默认为gini）</p><p><code>max_depth</code>：int或None，树的最大深度，可选参数（默认为None），一般可以设置为5、8、15、25、30</p><p><code>max_features</code>：str，每个决策树的最大特征数量（默认为auto），其他可选的有：</p><p>​ auto：max_features=sqrt(n_features)</p><p>​ sqrt：max_features=sqrt(n_features)，同auto</p><p>​ log2：max_features=log2(n_features)</p><p>​ None：max_features=n_features</p><p><code>bootstrap</code>：bool，是否在构建决策树时采用放回抽样，可选参数（默认为True）</p></blockquote></li><li><p><strong>随机森林的优点</strong></p><p>在当前所有算法中，具有极好的准确率</p><p>能够有效地运行在大数据集上</p><p>能够处理具有高维特征的输入样本，而且不需要降维</p><p>能够评估各个特征在分类问题上的重要性</p></li></ul>',51),d=[a];function i(c,l){return o(),t("div",null,d)}const h=e(n,[["render",i],["__file","02_数据集与分类算法.html.vue"]]);export{h as default};
