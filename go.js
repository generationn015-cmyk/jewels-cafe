const SAVE="jewels-cafe-save";
const ART="https://jewels-cafe.netlify.app/";
const FACES=["cust1.png","cust2.png","cust3.png","cust4.png"];
const MEAN={Descriptive:"Descriptive stats only summarize the data you already have. No claim about people you did not measure.",Inferential:"Inferential stats use a sample to say something about a population.",Population:"The population is every unit the question is about.",Sample:"The sample is the units you actually measured.",Parameter:"A parameter is a number about the whole population. It is usually unknown.",Statistic:"A statistic is a number calculated from the sample.",SRS:"A simple random sample gives every sample of that size the same chance.",Stratified:"Split into groups, then take a random sample from EVERY group.",Cluster:"Randomly pick some whole clusters, then use everyone inside them.",Systematic:"Random start on a list, then take every kth name.",Convenience:"Whoever is easiest to reach. Often biased.",Voluntary:"People choose themselves. Often biased.",Experiment:"The researcher assigns a treatment, then measures the response.",Observational:"The researcher only watches. No treatment is assigned.",Qualitative:"Labels or categories, not amounts.",Quantitative:"Counts or measurements.",Nominal:"Names with no natural order.",Ordinal:"Ranks, but the gaps are not equal units.",Interval:"Equal steps, but zero does not mean none.",Ratio:"Equal steps and a true zero, so twice as much is real.",Mean:"Add the values and divide by how many. Not resistant.",Median:"Middle value once the data are ordered. Resistant.",Mode:"The value that occurs most often.",Range:"Maximum minus minimum.",IQR:"Q3 minus Q1, the middle 50%. Resistant.","Bar chart":"Separate bars for categories.",Histogram:"Touching bars over number intervals.","Skewed right":"A long tail toward the large values.","Pie chart":"Each category as a part of one whole.",r:"Linear strength and direction, from -1 to 1.",Slope:"Predicted change in y when x goes up by 1.",Association:"Two variables move together. That is not cause.",Causation:"A change in x produces a change in y.",Complement:"P(not A) = 1 minus P(A).",Independent:"Knowing one event happened does not change the other.",Disjoint:"Cannot happen on the same trial.",Binomial:"Count of successes in n independent yes/no trials with the same p.",Normal:"A mound curve named by a mean and a standard deviation.",CLT:"For large n, the sampling distribution of the sample mean is about Normal.",Unbiased:"The sampling distribution is centered at the parameter.",Wider:"A higher confidence level makes a wider interval.",Narrower:"A bigger sample size makes a narrower interval.",H0:"The default claim. Usually no effect or no difference.",Ha:"The claim the study is trying to find evidence for.","P-value":"Chance of a result at least this extreme if H0 is true.","Reject H0":"P-value is smaller than alpha. The data do not fit H0.","Type I":"Reject H0 when H0 is actually true.","Type II":"Fail to reject H0 when Ha is actually true.",Paired:"Two measurements on the same person, or matched pairs.","Two-sample":"Two independent groups. Different people in each.",Counts:"Chi-square uses frequencies, not means.",F:"Between-group variation divided by within-group variation.",Ranks:"Replace the raw numbers with ranks when Normal is shaky."};
function K(n,book,b,say,dishes,qs){return {n:n,book:book,b:b,say:say,dishes:dishes,orders:qs.map(function(x){return {p:x[0],w:x[1]}})}}
const CH=[
K("1A","Ch 1 Nature of Statistics","A SAMPLE is the people you actually measured. A PARAMETER is a number about everyone. A STATISTIC is a number from the sample. DESCRIPTIVE only talks about the data in hand. INFERENTIAL uses the sample to talk about the population.","A sample is what you measured. A parameter describes everyone.","Descriptive,Inferential,Population,Sample,Parameter,Statistic".split(","),[
["A cafe surveys 92 students. Their average sleep is 6.4 hours. What kind of number is 6.4?","Statistic"],
["We want the true mean sleep of EVERY student at the school, not just the 92. What is that unknown number called?","Parameter"],
["Those 92 students are the ones we actually asked. What is that group called?","Sample"],
["Every student at the school is who the question is about. What is that whole group called?","Population"],
["We say only: these 92 students averaged 6.4 hours. We make no claim about the whole campus. What kind of statement is that?","Descriptive"],
["From those 92 students we say: Michigan students sleep 6.4 hours. We are speaking for people we did not measure. What kind of statement is that?","Inferential"]
]),
K("1B","Ch 1 Sampling","SRS: every group of that size is equally likely. Stratified: sample from EVERY group. Cluster: take whole randomly chosen clusters. Systematic: random start, then every kth name. Convenience and voluntary are often biased. An experiment assigns a treatment.","SRS gives every sample of that size the same chance.","SRS,Stratified,Cluster,Systematic,Convenience,Voluntary,Experiment,Observational".split(","),[
["The cafe puts every student number in a hat and draws 40. Every group of 40 is equally likely. What sampling method is that?","SRS"],
["They split students by year (first, second, third, fourth) and pick 15 at random from EACH year. What method is that?","Stratified"],
["They pick 3 dorms at random and survey everyone who lives in those 3 dorms. What method is that?","Cluster"],
["They pick a random start on the roster, then take every 10th name. What method is that?","Systematic"],
["They only ask the people sitting at the front table because it is easy. What method is that?","Convenience"],
["A teacher randomly assigns some students a review video and others a worksheet, then measures the quiz. What kind of study is that?","Experiment"]
]),
K("1C","Ch 1 Variable type","Qualitative = labels. Quantitative = amounts. Nominal = names, no order. Ordinal = ranks. Interval = equal steps but zero is not none. Ratio = equal steps and a true zero.","Ratio has a true zero. Interval zero is not none.","Qualitative,Quantitative,Nominal,Ordinal,Interval,Ratio".split(","),[
["A guest's favorite topping (chocolate, vanilla, berry) is a label, not an amount. What kind of variable is that?","Qualitative"],
["A guest's height in inches is a measurement. What kind of variable is that?","Quantitative"],
["Jersey numbers are used only as names, not as amounts. What level of measurement is that?","Nominal"],
["Year in school: first, second, third, fourth. There is order, but the gaps are not equal units. What level is that?","Ordinal"],
["Temperature in degrees F. Equal steps, but 0 F does not mean no heat. What level is that?","Interval"],
["Weight in pounds. Zero means none, and 20 lb is twice 10 lb. What level is that?","Ratio"]
]),
K("2","Ch 2 Graphs","Use a bar chart or pie chart for categories. Use a histogram for numbers in bins. Right-skewed means a long tail toward the large values.","A histogram uses touching bars over number intervals.","Bar chart,Pie chart,Histogram,Skewed right".split(","),[
["We counted favorite drink: latte, tea, cocoa. Which graph is built for those categories?","Bar chart"],
["We put sleep hours into bins like 5-6, 6-7, 7-8. Which graph uses touching bars on a number line?","Histogram"],
["Most tips are small, but a few huge tips pull a long tail to the right. What shape is that?","Skewed right"],
["We want each topping as a slice of one whole pie. Which graph is that?","Pie chart"]
]),
K("3","Ch 3 Numbers that summarize","Mean = add and divide. It is pulled by extremes. Median = middle of the ordered list. It resists extremes. Mode = most common. Range = max minus min. IQR = Q3 minus Q1.","The median resists extreme tips.","Mean,Median,Mode,Range,IQR".split(","),[
["Add every tip and divide by how many tips there are. What number is that?","Mean"],
["Line the tips up from smallest to largest and take the middle one. What number is that?","Median"],
["Which value shows up more than any other?","Mode"],
["Biggest tip minus smallest tip. What is that called?","Range"],
["Q3 minus Q1, the spread of the middle half of the tips. What is that called?","IQR"]
]),
K("4","Ch 4 Scatterplots","r measures linear strength from -1 to 1. Slope is how much predicted y changes when x goes up by 1. Association is not the same as causation.","A tight scatterplot is not proof of cause.","r,Slope,Association,Causation".split(","),[
["A number between -1 and 1 that says how tight and which way a straight-line pattern is. What is that number?","r"],
["In the line y-hat = a + b x, b is the predicted change in y when x goes up by 1. What is b called?","Slope"],
["Study hours and quiz scores move together. That is not enough to say one makes the other happen. What word is that?","Association"],
["A change in x actually produces a change in y. What word is that?","Causation"]
]),
K("5","Ch 5 Probability","A probability sits between 0 and 1. Complement: P(not A) = 1 - P(A). Independent: one event does not change the other. Disjoint: they cannot happen on the same trial.","P(not A) = 1 - P(A).","Complement,Independent,Disjoint".split(","),[
["P(late) = 0.2. What is P(not late)? Use the rule that uses 1 minus P(A). What rule is that?","Complement"],
["Knowing the first muffin is blueberry does not change the chance the next one is blueberry (with replacement). What word describes those events?","Independent"],
["A ticket cannot be both on time and late on the same trip. What word describes those events?","Disjoint"]
]),
K("6","Ch 6 Random variables","Binomial: n independent yes/no trials, same success chance p. Normal: a mound curve named by a mean and a standard deviation.","About 68% of a Normal sits within 1 sd of the mean.","Binomial,Normal".split(","),[
["We flip a fair coin 10 times and count heads. Same p each time, two outcomes, independent trials. What model is that count?","Binomial"],
["A mound-shaped curve completely described by a mean and a standard deviation. What model is that?","Normal"]
]),
K("7","Ch 7 Sampling distributions","A statistic changes from sample to sample. The CLT says: for large n, the sample mean looks about Normal. Unbiased means the sampling distribution is centered at the parameter.","The CLT is about the shape of the sample mean, not one person.","CLT,Unbiased".split(","),[
["We take many random samples of size 80 and plot their means. For large n those means form a mound. What theorem is that?","CLT"],
["On average, the sample mean hits the true population mean. What word describes that estimator?","Unbiased"]
]),
K("8","Ch 8 Confidence intervals","A confidence interval is estimate plus or minus a margin of error. Higher confidence makes a wider interval. A bigger sample makes a narrower interval. 95% is about the method, not this one interval.","95% confidence is about the method, not this one interval.","Wider,Narrower".split(","),[
["We switch from 90% confidence to 99% confidence, same data. Does the interval get wider or narrower?","Wider"],
["We keep 95% confidence but survey many more guests. Does the interval get wider or narrower?","Narrower"]
]),
K("9","Ch 9 Tests of significance","H0 is the default (usually no effect). Ha is what the study looks for. The P-value is the chance of a result this extreme if H0 is true. Reject H0 when P-value is smaller than alpha. Type I = false reject. Type II = miss Ha.","Failing to reject H0 is not proof that H0 is true.","H0,Ha,P-value,Reject H0,Type I,Type II".split(","),[
["The default claim: the new drink does not change mean tip. What is that claim called?","H0"],
["The claim we hope the data support: the new drink does change mean tip. What is that called?","Ha"],
["Assuming H0 is true, the chance of a result at least this far from H0. What is that chance called?","P-value"],
["The P-value is 0.02 and alpha is 0.05. What decision do we make about H0?","Reject H0"],
["We reject H0, but H0 was actually true. What error is that?","Type I"],
["Ha is true, but we fail to reject H0. What error is that?","Type II"]
]),
K("10","Ch 10 Comparing two groups","Two-sample: different people in each group. Paired: two measures on the same person, or matched pairs. Do not run a two-sample t on paired data.","Do not run a two-sample t on paired differences.","Two-sample,Paired".split(","),[
["Morning shift vs night shift. Different workers in each group. What design is that?","Two-sample"],
["Each guest rates the drink before and after a new recipe. Same person twice. What design is that?","Paired"]
]),
K("11","Ch 11 Chi-square","Chi-square uses counts in a table, not means. Expected count = (row total times column total) / n.","Do not put means into a chi-square table.","Counts".split(","),[
["We have a table of how many guests chose each topping by day. Chi-square needs frequencies. What does it use?","Counts"]
]),
K("12","Ch 12 ANOVA","H0: all group means are equal. F = between-group variation / within-group variation. Many separate t-tests inflate Type I error.","ANOVA first, then follow-up which groups differ.","F".split(","),[
["We compare mean wait time for 4 kitchens. The ANOVA statistic is between-group variation over within-group variation. What letter is that?","F"]
]),
K("13","Ch 13 Inference for regression","H0 for the slope: the population slope is 0. Check a residual plot. Do not use the line for an x-value outside the data.","Check residuals before trusting the slope.","Slope".split(","),[
["In y-hat = a + b x, the predicted change in y when x goes up by 1 is called what?","Slope"]
]),
K("14","Ch 14 Nonparametrics","When the Normal condition is shaky, replace the raw numbers with ranks. If the mound is fine, the usual t is still OK.","If Normal is fine, the usual t is still OK.","Ranks".split(","),[
["Tips are badly skewed, so we stop using the raw dollars and line them up from smallest to largest. What do we replace the raw numbers with?","Ranks"]
])
];
const S={ci:0,coins:0,lives:3,served:0,goal:4,holding:null,run:false,paused:false,name:"",ready:false,done:{},order:null};
function $(id){return document.getElementById(id)}
function persist(){try{localStorage.setItem(SAVE,JSON.stringify({name:S.name,ci:S.ci,coins:S.coins,ready:S.ready,done:S.done}))}catch(e){}}
function restore(){try{var p=JSON.parse(localStorage.getItem(SAVE)||"null");if(!p)return;S.name=p.name||"";S.ci=Math.min(CH.length-1,Number(p.ci)||0);S.coins=p.coins||0;S.ready=!!p.ready;S.done=p.done||{};if(S.name && $("btnCont"))$("btnCont").hidden=false}catch(e){}}
function hideAll(){["boot","profile","teach","pick","settings","recipe"].forEach(function(id){var el=$(id);if(el)el.hidden=true});if($("paused"))$("paused").hidden=true}
function newGame(){hideAll();$("profile").hidden=false;try{$("pName").focus()}catch(e){}}
function clockIn(){S.name=(($("pName")&&$("pName").value)||"").trim()||"Chef";persist();openTeach()}
function contGame(){if(S.ready)startShift();else openTeach()}
function openTeach(){hideAll();$("teach").hidden=false;$("teachK").textContent=CH[S.ci].book;$("teachT").textContent=CH[S.ci].n;$("teachB").textContent=CH[S.ci].b}
function fillPick(){S.run=false;hideAll();$("pick").hidden=false;$("chList").innerHTML=CH.map(function(c,i){return "<button class='btn booth' type='button' onclick='pickCh("+i+")'>"+c.n+" · "+c.book+(S.done[c.n]?" *":"")+"</button>"}).join("")}
function pickCh(i){S.ci=i;S.ready=false;persist();openTeach()}
function goTitle(){S.run=false;hideAll();$("boot").hidden=false;if(S.name)$("btnCont").hidden=false}
function openMenu(){if($("settings"))$("settings").hidden=false}
function closeMenu(){if($("settings"))$("settings").hidden=true}
function togglePause(){if(S.paused)resumeRush();else{S.paused=true;if($("settings"))$("settings").hidden=true;if($("paused"))$("paused").hidden=false}}
function resumeRush(){S.paused=false;if($("paused"))$("paused").hidden=true;if($("settings"))$("settings").hidden=true;if(!S.run)startShift();else if($("coach"))$("coach").textContent="Rush on. Read the ticket, cook the word, Serve."}
function spawn(){S.order=CH[S.ci].orders[S.served%CH[S.ci].orders.length]}
function startShift(){S.run=true;S.paused=false;S.ready=true;S.served=0;S.lives=3;S.holding=null;S.goal=4;persist();hideAll();spawn();draw();$("coach").textContent="Read the whole ticket. Cook the word that answers it. Then Serve."}
function draw(){var c=CH[S.ci];$("hCh").textContent=c.n;$("hMoney").textContent="$"+S.coins+"  "+S.served+"/"+S.goal;$("hLife").textContent="***".slice(0,Math.max(0,S.lives));var o=S.order;var face=ART+FACES[(S.served+S.ci)%4];$("slots").innerHTML=o?"<div><div class='ticket'>"+o.p+"</div><div class='who'><img src='"+face+"' alt='guest'></div></div>":"<div class='ticket'>Waiting</div>";$("heldName").textContent=S.holding||"nothing";$("menu").innerHTML=c.dishes.map(function(d){return "<button class='dish"+(S.holding===d?" on":"")+"' type='button' onclick='cook(\""+d+"\")'>"+d+"</button>"}).join("")}
function cook(d){if(S.paused)resumeRush();S.holding=d;$("coach").textContent=d+" — "+(MEAN[d]||" Read the ticket again, then Serve.");draw()}
function serve(){if(S.paused)resumeRush();if(!S.run||!S.order){$("coach").textContent="Start a rush first.";return}if(!S.holding){$("coach").textContent="Cook a word first.";return}if(S.holding===S.order.w){S.coins+=8;S.served++;S.holding=null;if(S.served>=S.goal){S.run=false;S.done[CH[S.ci].n]=true;persist();hideAll();$("recipe").hidden=false;$("recLine").textContent=CH[S.ci].say;return}spawn();draw();$("coach").textContent="Yes. "+(MEAN[S.order.w]||"")}else{$("coach").textContent="Not "+S.holding+". The book answer is "+S.order.w+". "+(MEAN[S.order.w]||"");S.holding=null;draw()}}
function nextRush(){S.ci=Math.min(CH.length-1,S.ci+1);S.ready=false;persist();openTeach()}
restore();
