const contented = [
    {
        id: 1,
        sub: "Authentic Dua for Breaking Dua",
        arb: "ذَهَبَ الظَمَأُ،وَابْتَلْتِ الْعُرُوقُ، وَثَبَتِ الْأَجْرُ إِنْ شَاءَ اللَّهُ تَعَالَي",
        translt: "Dhahabadh dhoma-u, wa abtalatil 'uruuq wa thabatal- ajr in sha Allaah",
        mng: "The Thirst is gone, the veins are moistened, and the reward has been earned if Allah wills",
        ref: "(Hadith Abu Dawud 2357)"
    },
    {
        id: 2,
        sub:"Dua For Protection from the grave, Trials and Dajjal",
        arb: "اللَّهُمَّ إِنِّي أَعُوذُبِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
        translt: "Allahumma 'innee 'a'uuthu bika min adhaabil-qabri, wa min adhaabil jahannam, wa min fitnatil-mahyaa walmamaati, wa min sharri fitnatil-maseehid-dajaal",
        mng: "O Allah! I seek refuge with Thee from the torment of the Hell, from the torment of the grave, from the trial of life and death and from the evil of the trial of the False Messial",
        ref: "(Sahih Muslim 588a)"
    },
    {
        id: 3,
        sub:"Dua Against Entering Fire<br/>Dua For Seeking Paradise",
        arb: " اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةُ<br/> اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
        translt: "*Allahumma Ajirni minan-naar<br />*Allahumma inni as'alukal-jannah",
        mng: "*O Allah, save me from the fire (Jahannam) <br />*O Allah, I ask You for Paradise",
        ref: "(Tirmidhi, Inb Majah & An-Nasa)"
    },
    {
        id: 4,
        sub:"",
        arb: "رَبَنَّا تَقَبَّلْ مِنَّا  إِنّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
        translt: "Rabbana taqabbal minna, innaka antas Sami'ul -Alim",
        mng: "Our Lord! Accept (this service) from us",
        ref: "(Qur'an 2:127)"
    },
    {
        id: 5,
        sub:"Dua before entering toilet",
        arb: "اللَّهُمُّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَباَءِثِ",
        translt: "Allahumma innee a'uudhu bika minal-khutubhi wal-khabaa'ith",
        mng: "O Allah,I seek refuge with you from all evil-doers",
        ref: "(Muslim 375)"
    }, 
    
    {
        id: 6,
        sub:"Dua for many things",
        arb: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَا، والتُّقَي وَالْعَفَافَ، وَالْغِنَي",
        translt: "Allahumma inni as'aluka-huda, wat-tuqo, wal-'afafa, wal-ghina",
        mng: "O Allah! I beseech You for guidance, piety, chastity and contentment.",
        ref: "(Muslim)"
    },
    {
        id: 7,
        sub:"Dua for Jannah",
        arb: "رَبِّ ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ",
        translt: "Rabbi ibni lee 'indaka baytan fiil-jannah",
        mng: "My Lord, build for me near You a house in Paradise",
        ref: "(Qur'an 66:11)"
    },
    {
        id: 8,
        sub:"Dua for leaving the Masjid",
        arb: "السَّلَامُ عَلي رَسُولِ اللهِ، اللّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
        translt: "As-salaamu 'alaa rosuul-lil-laah, Allahumma innee as'aluke min fad-lik",
        mng: "Peace be upon the Messsenger of Allah. O Allah, I ask You from Your Favour",
        ref: "(Abu Dawud 465)"
    },
    {
        id: 9,
        sub:"Dua for entering the Masjid",
        arb: "السَّلَامُ عَلي رَسُولِ اللهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
        translt: "As-salaamu 'alaa rosuulillaah, Allahumma-maf-tah lee abwaaba rahmatik",
        mng: "Peace be upon the Messenger of Allah. O Allah, Open for the gates of Your Mercy",
        ref: "(Abu Dawud 465)"
    },
    {
        id: 10,
        sub:"Dua when in Difficulty",
        arb: "يَا حَيُّ يَا قَيٌومُ بِرَحْمَتِكَ أَسْتَغِيثْ",
        translt: "Ya Hayyu Ya Qayyum, bi Rahmatika astagheeth",
        mng: "O Living, O Substaining, in You I seek relief!",
        ref: "(Sunan Tirmidhi, 3600)"
    },
    {
        id: 11,
        sub:"Dua before Sleep",
        arb: "بِاسْمِكَ أَمُوتُ وَأَحْيَا",
        translt: "Bismika amutu wa ahya",
        mng: "In Your name Oh Allah, I live and I die",
        ref: "(Sahih al-Bukhari 6312)"
    },
    {
        id: 12,
        sub:"Dua after awakened for sleep",
        arb: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
        translt: "Alhamdulillaahi ladhi ahyaana ba'da ma amataana wa ilaihin-nushuur",
        mng: "All praise be to Allah, who gave us life after killing us (sleep is a form of death) and to Him will we be raised and returned",
        ref: "(Sahih al-Bukhari 6312)"
    },
    {
        id: 13,
        sub:"Dua for good Knowledge/ Provision/ Deeds",
        arb: "اللَّهُمَّ إِنِي أَسْأَلُكَ عِلْمًا نَافِعًا، وَ رِزْقًا طَيِّبًا، وَ عَمَلاً مُتَقَبَّلاً",
        translt: "Allahumma innee as'aluka 'ilman naafi'an, wa 'amalan",
        mng: "In Your name Oh Allah, I live and I die",
        ref: "(Sahih al-Bukhari 6312)"
    },
    {
        id: 14,
        sub:"Dua after every salah",
        arb: "اللَّهُمَّ أَعِنِي عَلَي ذِكْرِكَ، وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        translt: "Allahumma a'innee 'ala dhikrika, wa shukrika, wa husni i'badatika",
        mng: "O Allah,help me remember You, to be grateful to You, and to worship You in an excellent manner",
        ref: "(Abu Dawud 1422)"
    },
    {
        id: 15,
        sub:"Dua for Firmness in Religion",
        arb: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَي  دِيْنِكَ",
        translt: "Yaa Muqallibal Quloob Thabbit Qalbee 'alaa Deenik.",
        mng: "Oh Turner of the hearts, keep my heart firm upon your religion.",
        ref: "(Saheeh Muslim 6418)"
    },
    {
        id: 16,
        sub:"Dua Against a wrong company",
        arb: "رَبَّنَا لَا تَجْعَلْنَا مَعَ الْقَوْمِ الظَّا لِمِينَ",
        translt: "Rabbana la taj'alna ma'al qawwmi-dhalimeen",
        mng: "Our Lord! Send us not to the company of the wrong-doers.",
        ref: "(Qur'an 7:47)"
    },
    {
        id: 17,
        sub:"",
        arb: "رَبَّنَا لَا تُؤَا خِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
        translt: "Rabbana la tu'akhidhna in-nasina aw akhto'naa",
        mng: "Our Lord! Condemn us not if we forget or fall into error.",
        ref: "(Qur'an 2:286)"
    },
    {
        id: 18,
        sub:"",
        arb: "رَبَّنَا لَغَفُورٌ شَكُورٌ",
        translt: "Rabbana La Ghafurun Shakur",
        mng: `Our Lord is indeed Oft-Forgiving<br />Ready to appreciate (good deeds and to recompense)`,
        ref: "(Qur'an 35:34)"
    },
    {
        id: 19,
        sub:"",
        arb: "رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
        translt: "Rabbana wa taqobbal Du'aa",
        mng: "Oh our Lord! And accept my Prayer",
        ref: "(Qur'an 14:40)"
    },
    {
        id: 20,
        sub:"",
        arb: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translt: "Rabbana atina fid-dunya hasanatan wa fil aakhirooti hasanatan waqina 'adhaaban-naar",
        mng: "Our Lord! Give us in this world that which is good and in the Hereafter that which is good, and save us from the torment of the Fire!",
        ref: "(Qur'an 2:201)"
    },
    {
        id: 21,
        sub: "Prayer to say to a family who invites you to break your fast with them",
        arb: "",
        translt: "'Aftaraa 'indakumus-soo'imuuna, wa akala to'aamakuml-aberoor, wasollat alaykumul-malaaikah",
        mng: "With you, those who are fasting have broken their fast, you have fed those who are righteous, and the angels recite their prayers upon you",
        ref: "(Abu Dawud 3/367)"
    },
    {
        id: 22,
        arb: "",
        translt: "",
        mng: "",
        ref: "()"
    },
    {
        id: 23,
        arb: "",
        translt: "",
        mng: "",
        ref: "()"
    },
    {
        id: 24,
        arb: "",
        translt: "",
        mng: "",
        ref: "()"
    },
    {
        id: 25,
        arb: "",
        translt: "",
        mng: "",
        ref: "()"
    },
    {
        id: 26,
        arb: "",
        translt: "",
        mng: "",
        ref: "()"
    },
    {
        id: 27,
        arb: "",
        translt: "",
        mng: "",
        ref: "()"
    },
    {
        id: 28,
        arb: "",
        translt: "",
        mng: "",
        ref: "()"
    },
    {
        id: 29,
        arb: "",
        translt: "",
        mng: "",
        ref: "()"
    },
    {
        id: 30,
        arb: "",
        translt: "",
        mng: "",
        ref: "()"
    },
]

let cd = new Date(2022, 03, 01, 00, 00, 00, 00);
let x = setInterval(() => {

    let current = new Date();
    let diff = cd - current;
    let day = Math.floor(((((diff / 1000) / 60) / 60) / 24));
    let hour = Math.floor((((((diff / 1000) / 60) / 60) / 24) - day) * 24);
    let min = Math.floor((((((((diff / 1000) / 60) / 60) / 24) - day) * 24) - hour) * 60);
    let sec = Math.floor((((((((((diff / 1000) / 60) / 60) / 24) - day) * 24) - hour) * 60) - min) * 60);

    if (day < 10) {
        day = `0${day}`;
    }
    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }

    

    document.querySelector("#d").innerHTML = day;
    document.querySelector("#h").innerHTML = hour;
    document.querySelector("#m").innerHTML = min;
    document.querySelector("#s").innerHTML = sec;
    let showDay = document.querySelector("#showDay");
    showDay.innerHTML = day;

    function show(f) {
        let arab = document.querySelector('.arabic');
        let subtitle = document.querySelector('.sub');
        let trnlit = document.querySelector('.transliteration');
        let trans = document.querySelector('.translation');
        let ref = document.querySelector('.ref');
        arab.innerHTML = contented[f].arb;
        trnlit.innerHTML = contented[f].translt;
        trans.innerHTML = contented[f].mng;
        ref.innerHTML = contented[f].ref;
        subtitle.innerHTML = contented[f].sub;
        return f;
    }
    dur = 32;
    if (day == dur - 1) {show(0);}else if (day == dur - 2) {show(1)}else if (day == dur - 3) {show(2)}else if (day == dur - 4) {show(3)}else if (day == dur - 5) {show(4)}else if (day == dur - 6) {show(5)}else if (day == dur - 7) {show(6)}else if (day == dur - 8) {show(7)}else if (day == dur - 9) {show(8)}else if (day == dur - 10) {show(9)}else if (day == dur - 11) {show(10)}else if (day == dur - 12) {show(11)}else if (day == dur - 13) {show(12)}else if (day == dur - 14) {show(13)}else if (day == dur - 15) {show(14)}else if (day == dur - 16) {show(15)}else if (day == dur - 17) {show(16)}else if (day == dur - 18) {show(17)}else if (day == dur - 19) {show(18)}else if (day == dur - 20) {show(19)}
    let pb = document.querySelector('.page-body');
    let cover = document.querySelector('.coverpage');

    if (diff < 0) {
        pb.style.display = "none";
        cover.style.display = "block";
        clearInterval(x);
    }else{
        pb.style.display = "block";
        cover.style.display = "none";

    }

}, 1000);