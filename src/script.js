let language = 'hinglish';
let belief = '';
const userInput = document.getElementById('userInput');
const predictBtn = document.getElementById('predictBtn');
const resultContainer = document.getElementById('result');
const resultText = resultContainer.querySelector('.result-text');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');

document.querySelectorAll('.belief-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.belief-option').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        belief = option.dataset.belief;
        checkReady();
    });
});

userInput.addEventListener('input', checkReady);

function checkReady() {
    predictBtn.disabled = !(belief && userInput.value.trim());
}

themeToggle.addEventListener('click', toggleTheme);
langToggle.addEventListener('click', toggleLanguage);

function toggleTheme() {
    let body = document.body;
    if(body.getAttribute('data-theme') === 'light'){
        body.setAttribute('data-theme','dark');
        themeToggle.innerText = 'Light Mode';
    } else {
        body.setAttribute('data-theme','light');
        themeToggle.innerText = 'Dark Mode';
    }
}

function toggleLanguage() {
    language = language === 'hinglish' ? 'banglish' : 'hinglish';
    langToggle.innerText = language.charAt(0).toUpperCase() + language.slice(1);
}

function getRandom(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

const hinglishResponses = {
astrology:[
"Bilkul ho sakta hai 🔮✨, planets tumhare favor me hain aur aaj ka din lucky lag raha hai! 🍀",
"Planets thode against hain 😅, par tension mat lo, try toh kar sakte ho! 🌙",
"Aaj ka star alignment mast hai ⭐️, agar try kiya toh shayad kuch amazing ho jaye! 🌈",
"Destiny thodi tricky hai 😎, par tumhare efforts se kuch magic ho sakta hai! ✨",
"Nahi yaar, planets mood me nahi 🌌, bas chill maro aur chai peeyo ☕️",
"Aaj Jupiter tumhare liye smile kar raha hai 😏, bas confidence rakho 💪",
"Venus ka influence strong hai 💖, love aur luck dono ka combo ready hai 💘",
"Mars bolta hai: 'Abhi try karo, failure bhi funny hoga 😂' 🔥",
"Moon ka mood weird hai 🌙, bas thoda sa patience rakho ⏳",
"Sun ke rays kehta hai: 'Glow karo, luck automatically aayega ☀️'",
"Mercury bolta hai: 'Communication ka time hai 🗣️, kisi se baat karo'",
"Saturn ke rules strict hai 😅, par try karne mein maza hi maza hai 😎",
"Planets bolte hai: 'Aaj ke liye plan change kar lo, surprise milega 🎉'",
"Rahu aur Ketu thoda naughty hai 😜, so random chance high hai 🎲",
"Lucky color: purple 💜, lucky snack: samosa 🥟, bas try karo 😏",
"Astro vibes: high energy ⚡, low patience 😅, bas thoda chill karo 🛋️",
"Tumhare stars tumhe LOL bol rahe hai 🤣, toh hasi ke saath try karo 😂",
"Yeh prediction sirf entertainment ke liye hai 😎, par fun guarantee hai 🎈",
"Aaj ka cosmic energy level: 9000 🚀, try mat karoge toh regret hoga 😬",
"Star alignment ke hisaab se: 50% chance success, 50% chance funny fail 😆"
],
aukatism:[
"Arey bhai, aukat nahi 💸, par haan, imagination free hai 😜",
"Nahi hoga, duniya thodi cruel hai 😅, par try kar ke maza toh aayega! 🎉",
"Yeh tumhari aukat se bahar hai 🏚️, chill maar aur Netflix lagao 🍿",
"Forget it yaar, duniya ke rules strict hai 🙃, par attitude mast rakho 😎",
"Chhodo re, impossible 😬, par hasi aayegi jab try karoge 😂",
"Aukat ke chart me zero dikh raha hai 😵, bas relax karo 😌",
"Society ke norms ke hisaab se impossible 🤷, par imagination unlimited 🌈",
"Log bolenge: 'Arey tu kyun try kar raha hai?' 😅, bas ignore karo 😎",
"Finance check: empty wallet 💸, but dreams full 😎, try karo phir bhi",
"Universe bol raha hai: 'Yeh tumhare bas ka nahi' 🤣, phir bhi funny hoga 😆",
"Try karna hai toh secretly karo 🤫, warna shame level high ho sakta hai 😜",
"Aukat low, confidence high 😎, bas hasi enjoy karo 😂",
"Karma check: pending 🤷, ab try karna ka matlab random result 🌪️",
"Duniya bolegi: 'Tum kar sakte ho?' 😏, bas smile karo aur enjoy karo 😎",
"Aaj ki aukat: potato 🥔, bas yeh samajh ke chill maro 😅",
"Log confuse honge: 'Yeh insaan seriously kar raha hai?' 🤣, hasi pakka hai 😂",
"Reality check: low probability, fun high 😎",
"Tumhare stars bhi bol rahe: 'Aukat low, swag high 😎' 😂",
"Ab try karoge toh epic fail 😆, par funny stories milegi 📝",
"Zero chance, full entertainment 🎉, bas hasi enjoy karo 😏"
],
chotist:[
"Baccha hai, masti karo 👶, duniya badi hai, abhi khel khelo 🧸",
"Yeh tumhare bas ki baat nahi 🤷, par try kar ke stories ban jaayengi! 📖",
"Chhote ho, socho phir try karo 🍼, par shayad result funny ho 😅",
"Try mat karo, chill maar 😎, phir bhi imagination unlimited hai 🌈",
"Nahi hoga beta 😬, par philosophical swag sikh jao 🧘‍♂️",
"School level challenge hai 🏫, bas play karo aur hasi enjoy karo 😂",
"Drawing aur imagination high hai 🎨, action low 😅, phir bhi try karo 😎",
"Tumhare toys bhi bol rahe: 'Abhi wait karo 🧸', patience sikho 😌",
"Chhota hai, par ideas mast hai 💡, bas fun ke liye try karo 😆",
"Philosophy lesson: Har fail ek adventure hai 🌿, hasi milegi 😏",
"Chocolate ke promise ke saath try karo 🍫, result sweet ya funny 😅",
"Parents ke rules strict hai 👀, par imagination limitless 🌈",
"Game level: Beginner 🕹️, try karna fun guaranteed 🎉",
"Mini swag activate 👶😎, result cute or funny hoga 😂",
"School ka homework bhi easier lagega 😜, try karo aur enjoy karo 😆",
"Story likho, try mat karo 📖, tab bhi duniya funny lagegi 😏",
"Toy car ke engine ready 🏎️, par road tricky hai 😅, bas fun karo 😂",
"Mini philosopher vibes 🧘‍♂️, life lesson: Hasi zindagi ka magic ✨",
"Fail karoge toh cute drama 😍, succeed bhi na cute hoga 😎",
"Game over ka matlab hai restart 💥, bas hasi enjoy karo 😆"
],
gambler:[
"Chance hai, par risky 🎲, agar luck favor me hua toh jackpot milega 💰",
"High stake, low reward 😅, par thrill mast milega 🔥",
"Roll the dice baby 🎰, destiny aaj tumhare favor me hai! 🍀",
"Risk hai, reward bhi hai 💎, socho aur decide karo wisely 😎",
"Aaj unlucky lag raha hai 🌧️, bas chill karo aur popcorn lo 🍿",
"Lucky number: 7️⃣, unlucky snacks: 0️⃣, try kar ke dekhlo 😏",
"Roulette ready hai 🎡, tumhare spin ka wait hai 😎",
"Poker face on 😎, universe call karega 😜, bas enjoy karo 🎉",
"High risk, high fun ⚡, bas excitement enjoy karo 😆",
"Dice ke results unpredictable 🎲, bas hasi ready rakho 😂",
"Slot machine vibes 🎰, result surprise hoga 🎉",
"Casino energy ⚡, bas patience rakho 😅, phir try karo",
"All in 🤞, ya toh jackpot 💰 ya funny fail 😂",
"Luck index: medium 🍀, thrill index: high 🔥",
"Dice bola: 'Try karo, agar fail bhi hoga toh epic hoga 😆' 🎲",
"Fortune cookie: 'Hasi hi asli jackpot hai 😏' 🍪",
"Card game ready 🃏, par outcome totally random 🌪️",
"Risk-taker ke liye perfect day ⚡, bas hasi enjoy karo 😎",
"Universe ke gamble rules 🤷, bas fun high 😜",
"Roll karlo, ya wait karo 😅, entertainment guaranteed 🎉"
],
random:[
"Ho sakta hai ya nahi 🤷‍♂️, universe ka mood aaj thoda weird hai 🌌",
"Definitely maybe 😎, soch samajh ke try karo ya na karo 😂",
"Ask later ⏳, timing kaafi important hai 🕰️",
"100% uncertain 😂, bas hasi aayegi jab try karoge 😅",
"Kuch bhi ho sakta hai 🌈, par expectations low rakho 😎",
"Aaj ka vibe: random 🤪, try karo toh maza aayega 🎉",
"Universe bol raha hai: 'Surprise ready hai 🎁', bas dekho 😂",
"Random ka combo: chance high 🎲, result funny 😆",
"Sab kuch possible hai 🌪️, bas attitude mast rakho 😎",
"Chaos energy 💥, expect unexpected 😜, hasi pakka 😏",
"Luck meter fluctuating ⚡, bas wait aur enjoy karo 🎉",
"Random cosmic signals 🌌, bas hasi ready rakho 😂",
"Unexpected twist 🔄, result aayega entertaining 😅",
"Universe ka troll mode on 😎, bas fun ke liye try karo 😏",
"Sab kuch ajeeb hoga 🌈, bas hasi enjoy karo 😆",
"Probability: 50-50 🤷, entertainment: 100% 🎉",
"Random ka magic ✨, outcome funny ya epic 😂",
"Universe bol raha hai: 'Just chill bro 😎', bas hasi enjoy karo 😏",
"Try karo ya wait karo ⏳, dono cases funny guaranteed 😆",
"Kuch bhi ho sakta hai, bas hasi ready rakho 😜"
],
philosopher:[
"Koshish karna hi jeevan ka maksad 🧘‍♂️, fail ho bhi jao, lesson milega 📖",
"Har haar mein seekh hai 🌿, soch samajh ke try karo 😌",
"Yeh bhi ek anubhav hai 🌊, life ka flow follow karo 🌟",
"Soch samajh ke action lo 🤔, aur hasi ke saath enjoy karo 😎",
"Har moment valuable hai 💎, aaj ka lesson mast hoga!",
"Philosophy check: 100% truths 😏, fun 200% 😂",
"Life lesson: 'Fail bhi swag hai' 🧘‍♂️, bas try karo 😅",
"Universe ka wisdom 🌌, result koi bhi ho, hasi milegi 😎",
"Har experience ka value hai 📖, bas attitude mast rakho 🎉",
"Zen mode on 🧘‍♂️, results irrelevant, fun important 😏",
"Think, meditate, act 🤔, result funny ya enlightening 😎",
"Life ka mantra: Hasi + Experience = Happiness 😂",
"Existential vibes 🌿, outcome funny ho ya philosophical 😏",
"Har moment ka flavor alag hai 🌈, bas enjoy karo 😎",
"Philosopher ka swag 🧘‍♂️, lesson aur hasi dono guaranteed 😂",
"Universe ke secrets 🌌, result ko ignore karo, fun ready rakho 😅",
"Meditate, breathe, try 😌, funny story milegi 😏",
"Lesson aur maza combo 🎉, bas follow karo 🤓",
"Cosmic laughter 😂, enjoy every prediction 😎",
"Philosophy ka final word: 'Hasi hi asli success 😏' 🌟"
]
};

const banglishResponses = {
astrology:[
"Shotti possible 🔮✨, planets tumi’r favor e ase, aaj lucky day 🍀",
"Planets kichu against ase 😅, kintu tension koro na, try kora free 🌙",
"Aaj star alignment mast 🌟, jodi try koro, shayad magic hoye jabe 🌈",
"Destiny kichu tricky 😎, kintu effort dile result fun hote pare ✨",
"Na hobe, planets mood nai 🌌, chai ar biscuit khaw ☕️🍪",
"Jupiter tumar side e smile kortese 😏, confidence rakho 💪",
"Venus bolteshe 💖, love ar luck combo ready 💘",
"Mars bollo: 'Try koro, fail o funny hobe 😆' 🔥",
"Moon er mood weird 🌙, patience rakho ⏳",
"Sun rays bollo: 'Glow koro, luck automatic ashbe ☀️'",
"Mercury bolteshe: 'Barta koro 🗣️, kotha bolo karo ke sath'",
"Saturn strict 😅, kintu try korle fun high 😎",
"Planets bolteshe: 'Plan change koro, surprise ase 🎉'",
"Rahu ar Ketu mischievous 😜, random chance high 🎲",
"Lucky color: purple 💜, lucky snack: samosa 🥟, try koro 😏",
"Astro vibes: high energy ⚡, low patience 😅, chill koro 🛋️",
"Tumar stars LOL kortese 🤣, hasi sathe try koro 😂",
"Entertainment purpose 😎, fun guarantee 🎈",
"Cosmic energy level: 9000 🚀, try na korle regret 😬",
"Star alignment: 50% success, 50% funny fail 😆"
],
aukatism:[
"Tumar aukat nai 💸, kintu imagination free 😜",
"Na hobe, dunia cruel 😅, try korle maja pabe 🎉",
"Aukat er baire 🏚️, chill koro, Netflix lagao 🍿",
"Impossible 🙃, attitude bhalo rakho 😎",
"Chhodo re 😬, hasi asbe try korle 😂",
"Aukat chart zero 😵, relax koro 😌",
"Society rules on, impossible 🤷, imagination unlimited 🌈",
"Log bolbe: 'Keno try koro?' 😅, ignore koro 😎",
"Finance empty 💸, dreams full 😎, try korle fun 😆",
"Universe bolteshe: 'Tumar bashe nai' 🤣, phir o try 😂",
"Secretly try koro 🤫, shame high hote pare 😜",
"Aukat low, confidence high 😎, hasi enjoy koro 😂",
"Karma pending 🤷, try korle random result 🌪️",
"Duniya bolbe: 'Tumi korte parbe?' 😏, smile koro 😎",
"Aaj aukat: potato 🥔, bas chill 😅",
"Log confuse: 'Eita serious?' 🤣, hasi pakka 😂",
"Reality check: low chance, high fun 😎",
"Tumar stars bolteshe: 'Aukat low, swag high 😎' 😂",
"Try korle epic fail 😆, funny story pabe 📝",
"Zero chance, full entertainment 🎉, bas hasi enjoy 😏"
],
chotist:[
"Baccha ho, masti koro 👶, duniya boro 🌈, khel khelo 🧸",
"Eita tumar bashe na 🤷, try korle stories banbe 📖",
"Chhoto, bhabho then try 🍼, result funny 😅",
"Try na koro, chill 😎, imagination unlimited 🌈",
"Na hobe beta 😬, philosophical swag nite parbe 🧘‍♂️",
"School level challenge 🏫, play koro, hasi enjoy 😂",
"Drawing high 🎨, action low 😅, try koro 😎",
"Tumar toys bolteshe: 'Wait koro 🧸', patience sikho 😌",
"Chhoto, ideas mast 💡, bas fun try 😆",
"Philosophy lesson: Fail = adventure 🌿, hasi milegi 😏",
"Chocolate promise 🍫, result sweet/funny 😅",
"Parents strict 👀, imagination limitless 🌈",
"Game level: Beginner 🕹️, fun guaranteed 🎉",
"Mini swag 👶😎, result cute/funny 😂",
"School homework easy lage 😜, try & enjoy 😆",
"Story likho, try na koro 📖, duniya funny 😏",
"Toy car engine ready 🏎️, road tricky 😅, fun koro 😂",
"Mini philosopher vibes 🧘‍♂️, lesson & fun guaranteed ✨",
"Fail → cute drama 😍, success → cute 😎",
"Game over = restart 💥, hasi enjoy 😆"
],
gambler:[
"Chance ase, risky 🎲, lucky hoile jackpot 💰",
"High stake, low reward 😅, thrill mast 🔥",
"Dice roll 🎰, destiny favor e 🍀",
"Risk & reward 💎, wisely decide 😎",
"Aaj unlucky 🌧️, chill & popcorn 🍿",
"Lucky number 7️⃣, snack 0️⃣, try 😏",
"Roulette ready 🎡, tumar spin wait 😎",
"Poker face on 😎, universe call 😜, enjoy 🎉",
"High risk, high fun ⚡, excitement enjoy 😆",
"Dice unpredictable 🎲, hasi ready 😂",
"Slot machine vibes 🎰, surprise 🎉",
"Casino energy ⚡, patience rakho 😅, try",
"All in 🤞, jackpot 💰 or funny fail 😂",
"Luck index medium 🍀, thrill high 🔥",
"Dice bollo: 'Try, fail o epic 😆' 🎲",
"Fortune cookie: 'Hasi jackpot 😏' 🍪",
"Card game ready 🃏, outcome random 🌪️",
"Risk-taker perfect day ⚡, fun enjoy 😎",
"Universe gamble 🤷, fun high 😜",
"Roll or wait 😅, entertainment guaranteed 🎉"
],
random:[
"Hoite pare or na 🤷‍♂️, universe weird 🌌",
"Definitely maybe 😎, try or na 😂",
"Ask later ⏳, timing important 🕰️",
"100% uncertain 😂, hasi pakka 😅",
"Kichu hoite pare 🌈, expectation low 😎",
"Aaj vibe: random 🤪, try maza 🎉",
"Universe bolteshe: 'Surprise ready 🎁', dekho 😂",
"Random combo: chance high 🎲, result funny 😆",
"Everything possible 🌪️, attitude mast 😎",
"Chaos 💥, expect unexpected 😜, hasi 😏",
"Luck fluctuating ⚡, wait & enjoy 🎉",
"Random cosmic signals 🌌, hasi ready 😂",
"Unexpected twist 🔄, entertaining 😅",
"Troll mode 😎, fun try 😏",
"Sab ajeeb 🌈, hasi enjoy 😆",
"Probability 50-50 🤷, entertainment 100% 🎉",
"Random magic ✨, outcome funny/epic 😂",
"Universe bolteshe: 'Just chill 😎', hasi enjoy 😏",
"Try/wait ⏳, funny guaranteed 😆",
"Kichu hoite pare, hasi ready 😜"
],
philosopher:[
"Chesta jeevoner uddeshyo 🧘‍♂️, fail hoileo lesson 📖",
"Har har e siksha 🌿, soch & try 😌",
"Experience 🌊, life flow follow 🌟",
"Soch & action 🤔, hasi sathe enjoy 😎",
"Moment valuable 💎, lesson mast!",
"Philosophy: 100% truths 😏, fun 200% 😂",
"Life lesson: 'Fail o swag' 🧘‍♂️, try 😅",
"Universe wisdom 🌌, result any, hasi milegi 😎",
"Experience value 📖, attitude mast 🎉",
"Zen mode 🧘‍♂️, results irrelevant 😏, fun important",
"Think, meditate, act 🤔, result funny/enlightening 😎",
"Life mantra: Hasi + Experience = Happiness 😂",
"Existential vibes 🌿, outcome funny/philosophical 😏",
"Moment flavor alag 🌈, enjoy 😎",
"Philosopher swag 🧘‍♂️, lesson & hasi guaranteed 😂",
"Universe secrets 🌌, ignore result, fun ready 😅",
"Meditate, breathe, try 😌, funny story 😏",
"Lesson & maza combo 🎉, follow 🤓",
"Cosmic laughter 😂, enjoy prediction 😎",
"Final word: 'Hasi asli success 😏' 🌟"
]
};

const easterEggsHinglish = [
"Oops! Universe just trolled you 😂, dono haath pakdo aur chill maro 🌀",
"Alien vibes detected 👽, result unpredictable, try karo aur laugh karo 🤣",
"Breaking news: Tumhari prediction viral ho rahi hai 🌐, LOL guaranteed 😆",
"Epic fail incoming 🚀, par story mast banega 📖",
"Magic random mode ON ✨, reality check skip karo 😜",
"Time traveler spotted ⏳, bas imagine karo aur hasi enjoy 😎",
"Unicorns approve 🦄, bas fantasy level high rakho 🌈",
"Dragon spotted 🐉, outcome spicy hoga 🌶️, try karo 😏",
"Cat walked on keyboard 🐱, so prediction now 50% LOL 😹",
"Random dance party 💃🕺, result bhi funny, enjoy 😂"
];

const easterEggsBanglish = [
"Oops! Universe troll korsi 😂, dui haat dhoro ar chill 🌀",
"Alien vibes detect korsi 👽, result unpredictable, try ar laugh 🤣",
"Breaking news: tumar prediction viral 🌐, LOL guaranteed 😆",
"Epic fail ashche 🚀, kintu story mast 📖",
"Magic random mode ON ✨, reality ignore 😜",
"Time traveler spotted ⏳, imagine ar hasi enjoy 😎",
"Unicorns approve 🦄, fantasy level high 🌈",
"Dragon spotted 🐉, outcome spicy 🌶️, try 😏",
"Cat keyboard e hoise 🐱, so prediction 50% LOL 😹",
"Random dance party 💃🕺, result funny, enjoy 😂"
];

function getRandom(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

predictBtn.addEventListener('click', () => {
    const input = userInput.value.trim();
    if(!input || !belief) return;

    resultContainer.classList.remove('show');
    resultText.innerHTML = '<div class="loading"><div class="loading-dot"></div><div class="loading-dot"></div></div>';

    setTimeout(() => {
        let responses = language === 'hinglish' ? hinglishResponses[belief] : banglishResponses[belief];
        let eggs = language === 'hinglish' ? easterEggsHinglish : easterEggsBanglish;
        let finalText = Math.random() < 0.15 ? getRandom(eggs) : getRandom(responses);
        resultText.innerHTML = `<span class="prediction-icon">🔮</span> ${finalText}`;
        resultContainer.classList.add('show');
    }, 1200);
});

predictBtn.addEventListener('click', () => {
    const input = userInput.value.trim();
    if(!input || !belief) return;

    resultContainer.classList.remove('show');
    resultText.innerHTML = '<div class="loading"><div class="loading-dot"></div><div class="loading-dot"></div></div>';

    setTimeout(() => {
        let responses = language === 'hinglish' ? hinglishResponses[belief] : banglishResponses[belief];
        let eggs = language === 'hinglish' ? easterEggsHinglish : easterEggsBanglish;
        let finalText = Math.random() < 0.15 ? getRandom(eggs) : getRandom(responses);
        resultText.innerHTML = `<span class="prediction-icon">🔮</span> ${finalText}`;
        resultContainer.classList.add('show');
    }, 1200);
});