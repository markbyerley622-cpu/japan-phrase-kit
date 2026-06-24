/* =============================================
   Japan Phrase Kit — script.js
   ============================================= */

// ============ EMBEDDED SEED DATA (offline fallback) ============

const SEED_PHRASES = [
  {id:"jp-001",section:"Personal",category:"Conversation Repair",english:"Sorry, can you say that one more time?",hiragana:"すみません、もういっかいいってもらえますか？",kanji:"すみません、もう一回言ってもらえますか？",romaji:"Sumimasen, mou ikkai itte moraemasu ka?",notes:"Polite. Use when you missed what someone said.",politeness:"Polite",tags:["repair","listening"],created_at:"2026-06-23"},
  {id:"jp-002",section:"Personal",category:"Conversation Repair",english:"Can you speak slowly?",hiragana:"ゆっくりはなしてもらえますか？",kanji:"ゆっくり話してもらえますか？",romaji:"Yukkuri hanashite moraemasu ka?",notes:"Very useful if people speak too fast.",politeness:"Polite",tags:["repair","listening"],created_at:"2026-06-23"},
  {id:"jp-003",section:"Personal",category:"Conversation Repair",english:"Can you say it in simpler Japanese?",hiragana:"もうすこしかんたんなにほんごでおねがいします。",kanji:"もう少し簡単な日本語でお願いします。",romaji:"Mou sukoshi kantan na nihongo de onegaishimasu.",notes:"Use when you understand some Japanese but the sentence is too advanced.",politeness:"Polite",tags:["repair"],created_at:"2026-06-23"},
  {id:"jp-004",section:"Personal",category:"Conversation Repair",english:"I did not quite understand.",hiragana:"すみません、ちょっとわかりませんでした。",kanji:"すみません、ちょっと分かりませんでした。",romaji:"Sumimasen, chotto wakarimasen deshita.",notes:"Soft and natural.",politeness:"Polite",tags:["repair"],created_at:"2026-06-23"},
  {id:"jp-005",section:"Personal",category:"Conversation Repair",english:"What does that mean?",hiragana:"それはどういういみですか？",kanji:"それはどういう意味ですか？",romaji:"Sore wa dou iu imi desu ka?",notes:"Good for unknown words or phrases.",politeness:"Polite",tags:["meaning"],created_at:"2026-06-23"},
  {id:"jp-006",section:"Personal",category:"Conversation Repair",english:"How do you say this in Japanese?",hiragana:"これはにほんごでなんていいますか？",kanji:"これは日本語で何て言いますか？",romaji:"Kore wa nihongo de nante iimasu ka?",notes:"Point at something and use this.",politeness:"Polite",tags:["learning"],created_at:"2026-06-23"},
  {id:"jp-007",section:"Personal",category:"Conversation Repair",english:"Is this Japanese correct?",hiragana:"このにほんごはあっていますか？",kanji:"この日本語は合っていますか？",romaji:"Kono nihongo wa atteimasu ka?",notes:"Use to check a sentence you made.",politeness:"Polite",tags:["learning"],created_at:"2026-06-23"},
  {id:"jp-008",section:"Personal",category:"Conversation Repair",english:"Please correct my Japanese.",hiragana:"にほんごをなおしてください。",kanji:"日本語を直してください。",romaji:"Nihongo o naoshite kudasai.",notes:"Direct but polite enough.",politeness:"Polite",tags:["learning"],created_at:"2026-06-23"},
  {id:"jp-009",section:"Personal",category:"Conversation Repair",english:"Japanese is okay. I want to practice.",hiragana:"にほんごでだいじょうぶです。れんしゅうしたいです。",kanji:"日本語で大丈夫です。練習したいです。",romaji:"Nihongo de daijoubu desu. Renshuu shitai desu.",notes:"Use when someone switches to English.",politeness:"Polite",tags:["learning","confidence"],created_at:"2026-06-23"},
  {id:"jp-010",section:"Personal",category:"Conversation Repair",english:"I am still studying Japanese.",hiragana:"まだにほんごをべんきょうちゅうです。",kanji:"まだ日本語を勉強中です。",romaji:"Mada nihongo o benkyou-chuu desu.",notes:"Natural self-disclaimer.",politeness:"Polite",tags:["intro"],created_at:"2026-06-23"},
  {id:"jp-011",section:"Personal",category:"Conversation Repair",english:"I am not very good yet, but I want to speak Japanese.",hiragana:"まだじょうずじゃないですけど、にほんごではなしたいです。",kanji:"まだ上手じゃないですけど、日本語で話したいです。",romaji:"Mada jouzu janai desu kedo, nihongo de hanashitai desu.",notes:"Very useful. Friendly and honest.",politeness:"Polite",tags:["intro","learning"],created_at:"2026-06-23"},
  {id:"jp-012",section:"Personal",category:"Conversation Repair",english:"Can I think for a second?",hiragana:"ちょっとかんがえてもいいですか？",kanji:"ちょっと考えてもいいですか？",romaji:"Chotto kangaete mo ii desu ka?",notes:"Buys time naturally.",politeness:"Polite",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-013",section:"Personal",category:"Conversation Flow",english:"I see.",hiragana:"なるほど。",kanji:"なるほど。",romaji:"Naruhodo.",notes:"Conversation glue. Use often.",politeness:"Neutral",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-014",section:"Personal",category:"Conversation Flow",english:"That is true.",hiragana:"たしかに。",kanji:"確かに。",romaji:"Tashika ni.",notes:"Natural agreement.",politeness:"Neutral",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-015",section:"Personal",category:"Conversation Flow",english:"Really?",hiragana:"ほんとうですか？",kanji:"本当ですか？",romaji:"Hontou desu ka?",notes:"Keeps the conversation alive.",politeness:"Polite",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-016",section:"Personal",category:"Conversation Flow",english:"That is interesting.",hiragana:"おもしろいですね。",kanji:"面白いですね。",romaji:"Omoshiroi desu ne.",notes:"Useful reaction phrase.",politeness:"Polite",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-017",section:"Personal",category:"Conversation Flow",english:"That sounds good.",hiragana:"いいですね。",kanji:"いいですね。",romaji:"Ii desu ne.",notes:"Simple positive reaction.",politeness:"Polite",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-018",section:"Personal",category:"Conversation Flow",english:"That sounds difficult.",hiragana:"むずかしそうですね。",kanji:"難しそうですね。",romaji:"Muzukashisou desu ne.",notes:"Good empathy response.",politeness:"Polite",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-019",section:"Personal",category:"Conversation Flow",english:"By the way...",hiragana:"ちなみに、",kanji:"ちなみに、",romaji:"Chinami ni,",notes:"Use to change topic.",politeness:"Neutral",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-020",section:"Personal",category:"Conversation Flow",english:"And then?",hiragana:"それで？",kanji:"それで？",romaji:"Sore de?",notes:"Casual follow-up. Use with friendly people.",politeness:"Casual",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-021",section:"Personal",category:"Conversation Flow",english:"What about you?",hiragana:"あなたはどうですか？",kanji:"あなたはどうですか？",romaji:"Anata wa dou desu ka?",notes:"Polite but a bit direct. Often okay with learners.",politeness:"Polite",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-022",section:"Personal",category:"Conversation Flow",english:"How about you?",hiragana:"そちらはどうですか？",kanji:"そちらはどうですか？",romaji:"Sochira wa dou desu ka?",notes:"Softer than anata in some situations.",politeness:"Polite",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-023",section:"Personal",category:"Conversation Flow",english:"I think so too.",hiragana:"わたしもそうおもいます。",kanji:"私もそう思います。",romaji:"Watashi mo sou omoimasu.",notes:"Good agreement phrase.",politeness:"Polite",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-024",section:"Personal",category:"Conversation Flow",english:"I am not sure.",hiragana:"ちょっとわからないです。",kanji:"ちょっと分からないです。",romaji:"Chotto wakaranai desu.",notes:"Soft uncertainty.",politeness:"Polite",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-025",section:"Personal",category:"Conversation Flow",english:"Maybe.",hiragana:"たぶん。",kanji:"多分。",romaji:"Tabun.",notes:"Short and common.",politeness:"Neutral",tags:["flow"],created_at:"2026-06-23"},
  {id:"jp-026",section:"Personal",category:"Intro",english:"I am from Australia.",hiragana:"オーストラリアからきました。",kanji:"オーストラリアから来ました。",romaji:"Oosutoraria kara kimashita.",notes:"Standard travel intro.",politeness:"Polite",tags:["intro"],created_at:"2026-06-23"},
  {id:"jp-027",section:"Personal",category:"Intro",english:"I am from Brisbane.",hiragana:"ブリスベンしゅっしんです。",kanji:"ブリスベン出身です。",romaji:"Burisuben shusshin desu.",notes:"Your city intro.",politeness:"Polite",tags:["intro"],created_at:"2026-06-23"},
  {id:"jp-028",section:"Personal",category:"Intro",english:"My name is Riki.",hiragana:"リキです。",kanji:"リキです。",romaji:"Riki desu.",notes:"Simplest self-introduction.",politeness:"Polite",tags:["intro"],created_at:"2026-06-23"},
  {id:"jp-029",section:"Personal",category:"Intro",english:"Nice to meet you.",hiragana:"はじめまして。",kanji:"初めまして。",romaji:"Hajimemashite.",notes:"Use when meeting someone first time.",politeness:"Polite",tags:["intro"],created_at:"2026-06-23"},
  {id:"jp-030",section:"Personal",category:"Intro",english:"Please treat me well / nice to meet you.",hiragana:"よろしくおねがいします。",kanji:"よろしくお願いします。",romaji:"Yoroshiku onegaishimasu.",notes:"Used after introductions. No perfect English equivalent.",politeness:"Polite",tags:["intro"],created_at:"2026-06-23"},
  {id:"jp-031",section:"Personal",category:"Intro",english:"I am travelling in Japan for a few days.",hiragana:"すうじつかん、にほんをりょこうしています。",kanji:"数日間、日本を旅行しています。",romaji:"Suu-jitsu-kan, nihon o ryokou shiteimasu.",notes:"Useful current trip line.",politeness:"Polite",tags:["travel"],created_at:"2026-06-23"},
  {id:"jp-032",section:"Personal",category:"Intro",english:"I have been to Japan before.",hiragana:"まえににほんにきたことがあります。",kanji:"前に日本に来たことがあります。",romaji:"Mae ni nihon ni kita koto ga arimasu.",notes:"Good response to 'first time?'",politeness:"Polite",tags:["travel"],created_at:"2026-06-23"},
  {id:"jp-033",section:"Personal",category:"Intro",english:"This is not my first time in Japan.",hiragana:"にほんははじめてじゃないです。",kanji:"日本は初めてじゃないです。",romaji:"Nihon wa hajimete janai desu.",notes:"Natural answer.",politeness:"Polite",tags:["travel"],created_at:"2026-06-23"},
  {id:"jp-034",section:"Personal",category:"Intro",english:"I want to speak more Japanese this time.",hiragana:"こんかいはもっとにほんごをはなしたいです。",kanji:"今回はもっと日本語を話したいです。",romaji:"Konkai wa motto nihongo o hanashitai desu.",notes:"Good intention-setting phrase.",politeness:"Polite",tags:["learning"],created_at:"2026-06-23"},
  {id:"jp-035",section:"Personal",category:"Intro",english:"I like Japanese food and culture.",hiragana:"にほんのたべものとぶんかがすきです。",kanji:"日本の食べ物と文化が好きです。",romaji:"Nihon no tabemono to bunka ga suki desu.",notes:"Simple and useful.",politeness:"Polite",tags:["small talk"],created_at:"2026-06-23"},
  {id:"jp-036",section:"Personal",category:"Intro",english:"I do Muay Thai.",hiragana:"ムエタイをやっています。",kanji:"ムエタイをやっています。",romaji:"Muetai o yatteimasu.",notes:"Good personal interest line.",politeness:"Polite",tags:["martial arts"],created_at:"2026-06-23"},
  {id:"jp-037",section:"Personal",category:"Intro",english:"I like combat sports.",hiragana:"かくとうぎがすきです。",kanji:"格闘技が好きです。",romaji:"Kakutougi ga suki desu.",notes:"Broad term for combat sports.",politeness:"Polite",tags:["martial arts"],created_at:"2026-06-23"},
  {id:"jp-038",section:"Personal",category:"Intro",english:"I train Muay Thai in Australia.",hiragana:"オーストラリアでムエタイをれんしゅうしています。",kanji:"オーストラリアでムエタイを練習しています。",romaji:"Oosutoraria de Muetai o renshuu shiteimasu.",notes:"Better than 'play' martial arts.",politeness:"Polite",tags:["martial arts"],created_at:"2026-06-23"},
  {id:"jp-039",section:"Personal",category:"Recommendations",english:"Do you have any recommendations?",hiragana:"おすすめはありますか？",kanji:"おすすめはありますか？",romaji:"Osusume wa arimasu ka?",notes:"Broad recommendation request.",politeness:"Polite",tags:["recommendations"],created_at:"2026-06-23"},
  {id:"jp-040",section:"Personal",category:"Recommendations",english:"What food do you recommend?",hiragana:"おすすめのたべものはなんですか？",kanji:"おすすめの食べ物は何ですか？",romaji:"Osusume no tabemono wa nan desu ka?",notes:"Useful for locals.",politeness:"Polite",tags:["food"],created_at:"2026-06-23"},
  {id:"jp-041",section:"Personal",category:"Recommendations",english:"Is there a good restaurant nearby?",hiragana:"このちかくにいいレストランはありますか？",kanji:"この近くにいいレストランはありますか？",romaji:"Kono chikaku ni ii resutoran wa arimasu ka?",notes:"Good in hotels/shops.",politeness:"Polite",tags:["food","directions"],created_at:"2026-06-23"},
  {id:"jp-042",section:"Personal",category:"Recommendations",english:"Where do locals usually go?",hiragana:"じもとのひとはふつうどこにいきますか？",kanji:"地元の人は普通どこに行きますか？",romaji:"Jimoto no hito wa futsuu doko ni ikimasu ka?",notes:"Good for avoiding tourist traps.",politeness:"Polite",tags:["recommendations"],created_at:"2026-06-23"},
  {id:"jp-043",section:"Personal",category:"Recommendations",english:"I want to go somewhere not too touristy.",hiragana:"あまりかんこうきゃくがいないところにいきたいです。",kanji:"あまり観光客がいない所に行きたいです。",romaji:"Amari kankoukyaku ga inai tokoro ni ikitai desu.",notes:"Useful travel preference.",politeness:"Polite",tags:["travel"],created_at:"2026-06-23"},
  {id:"jp-044",section:"Personal",category:"Recommendations",english:"What is famous around here?",hiragana:"このへんでなにがゆうめいですか？",kanji:"この辺で何が有名ですか？",romaji:"Kono hen de nani ga yuumei desu ka?",notes:"Natural local question.",politeness:"Polite",tags:["recommendations"],created_at:"2026-06-23"},
  {id:"jp-045",section:"Personal",category:"Restaurant",english:"This one please.",hiragana:"これおねがいします。",kanji:"これお願いします。",romaji:"Kore onegaishimasu.",notes:"Point at menu/item.",politeness:"Polite",tags:["ordering"],created_at:"2026-06-23"},
  {id:"jp-046",section:"Personal",category:"Restaurant",english:"What do you recommend?",hiragana:"おすすめはなんですか？",kanji:"おすすめは何ですか？",romaji:"Osusume wa nan desu ka?",notes:"Restaurant staple.",politeness:"Polite",tags:["ordering"],created_at:"2026-06-23"},
  {id:"jp-047",section:"Personal",category:"Restaurant",english:"I will have this.",hiragana:"これにします。",kanji:"これにします。",romaji:"Kore ni shimasu.",notes:"Natural decision phrase.",politeness:"Polite",tags:["ordering"],created_at:"2026-06-23"},
  {id:"jp-048",section:"Personal",category:"Restaurant",english:"Can I get water?",hiragana:"おみずをもらえますか？",kanji:"お水をもらえますか？",romaji:"Omizu o moraemasu ka?",notes:"Polite request.",politeness:"Polite",tags:["restaurant"],created_at:"2026-06-23"},
  {id:"jp-049",section:"Personal",category:"Restaurant",english:"Can I get the bill please?",hiragana:"おかいけいおねがいします。",kanji:"お会計お願いします。",romaji:"Okaikei onegaishimasu.",notes:"Use when ready to pay.",politeness:"Polite",tags:["restaurant","payment"],created_at:"2026-06-23"},
  {id:"jp-050",section:"Personal",category:"Restaurant",english:"Can I pay by card?",hiragana:"カードではらえますか？",kanji:"カードで払えますか？",romaji:"Kaado de haraemasu ka?",notes:"Check card acceptance.",politeness:"Polite",tags:["payment"],created_at:"2026-06-23"},
  {id:"jp-051",section:"Personal",category:"Restaurant",english:"I cannot eat this ingredient.",hiragana:"このしょくざいはたべられません。",kanji:"この食材は食べられません。",romaji:"Kono shokuzai wa taberaremasen.",notes:"General dietary line.",politeness:"Polite",tags:["food"],created_at:"2026-06-23"},
  {id:"jp-052",section:"Personal",category:"Restaurant",english:"It was delicious.",hiragana:"おいしかったです。",kanji:"美味しかったです。",romaji:"Oishikatta desu.",notes:"Say after meal.",politeness:"Polite",tags:["restaurant"],created_at:"2026-06-23"},
  {id:"jp-053",section:"Personal",category:"Convenience Store",english:"Card please.",hiragana:"カードでおねがいします。",kanji:"カードでお願いします。",romaji:"Kaado de onegaishimasu.",notes:"Payment phrase.",politeness:"Polite",tags:["payment"],created_at:"2026-06-23"},
  {id:"jp-054",section:"Personal",category:"Convenience Store",english:"I do not need a bag.",hiragana:"ふくろはいりません。",kanji:"袋はいりません。",romaji:"Fukuro wa irimasen.",notes:"Common checkout phrase.",politeness:"Polite",tags:["checkout"],created_at:"2026-06-23"},
  {id:"jp-055",section:"Personal",category:"Convenience Store",english:"Can you warm this up?",hiragana:"これをあたためてもらえますか？",kanji:"これを温めてもらえますか？",romaji:"Kore o atatamete moraemasu ka?",notes:"For konbini food.",politeness:"Polite",tags:["checkout"],created_at:"2026-06-23"},
  {id:"jp-056",section:"Personal",category:"Convenience Store",english:"I need chopsticks.",hiragana:"おはしがほしいです。",kanji:"お箸が欲しいです。",romaji:"Ohashi ga hoshii desu.",notes:"Useful for takeaway food.",politeness:"Polite",tags:["checkout"],created_at:"2026-06-23"},
  {id:"jp-057",section:"Personal",category:"Convenience Store",english:"Can I have a receipt?",hiragana:"レシートをもらえますか？",kanji:"レシートをもらえますか？",romaji:"Reshiito o moraemasu ka?",notes:"Receipt request.",politeness:"Polite",tags:["checkout"],created_at:"2026-06-23"},
  {id:"jp-058",section:"Personal",category:"Directions",english:"Where is the station?",hiragana:"えきはどこですか？",kanji:"駅はどこですか？",romaji:"Eki wa doko desu ka?",notes:"Basic direction phrase.",politeness:"Polite",tags:["directions"],created_at:"2026-06-23"},
  {id:"jp-059",section:"Personal",category:"Directions",english:"Where is the bathroom?",hiragana:"トイレはどこですか？",kanji:"トイレはどこですか？",romaji:"Toire wa doko desu ka?",notes:"Essential.",politeness:"Polite",tags:["directions"],created_at:"2026-06-23"},
  {id:"jp-060",section:"Personal",category:"Directions",english:"Is it close from here?",hiragana:"ここからちかいですか？",kanji:"ここから近いですか？",romaji:"Koko kara chikai desu ka?",notes:"Ask distance.",politeness:"Polite",tags:["directions"],created_at:"2026-06-23"},
  {id:"jp-061",section:"Personal",category:"Directions",english:"Can I walk there?",hiragana:"あるいていけますか？",kanji:"歩いて行けますか？",romaji:"Aruite ikemasu ka?",notes:"Useful in cities.",politeness:"Polite",tags:["directions"],created_at:"2026-06-23"},
  {id:"jp-062",section:"Personal",category:"Directions",english:"Which train should I take?",hiragana:"どのでんしゃにのればいいですか？",kanji:"どの電車に乗ればいいですか？",romaji:"Dono densha ni noreba ii desu ka?",notes:"Train help.",politeness:"Polite",tags:["train"],created_at:"2026-06-23"},
  {id:"jp-063",section:"Personal",category:"Directions",english:"Does this train go to Shinjuku?",hiragana:"このでんしゃはしんじゅくにいきますか？",kanji:"この電車は新宿に行きますか？",romaji:"Kono densha wa Shinjuku ni ikimasu ka?",notes:"Replace Shinjuku with place name.",politeness:"Polite",tags:["train"],created_at:"2026-06-23"},
  {id:"jp-064",section:"Personal",category:"Directions",english:"I am lost.",hiragana:"まいごになりました。",kanji:"迷子になりました。",romaji:"Maigo ni narimashita.",notes:"Use if genuinely lost.",politeness:"Polite",tags:["directions","emergency"],created_at:"2026-06-23"},
  {id:"jp-065",section:"Personal",category:"Airport/Plane",english:"Where is the boarding gate?",hiragana:"とうじょうぐちはどこですか？",kanji:"搭乗口はどこですか？",romaji:"Toujouguchi wa doko desu ka?",notes:"Airport phrase.",politeness:"Polite",tags:["airport"],created_at:"2026-06-23"},
  {id:"jp-066",section:"Personal",category:"Airport/Plane",english:"What time does boarding start?",hiragana:"なんじにとうじょうがはじまりますか？",kanji:"何時に搭乗が始まりますか？",romaji:"Nanji ni toujou ga hajimarimasu ka?",notes:"Airport phrase.",politeness:"Polite",tags:["airport"],created_at:"2026-06-23"},
  {id:"jp-067",section:"Personal",category:"Airport/Plane",english:"Is this the line for this flight?",hiragana:"これはこのびんのれつですか？",kanji:"これはこの便の列ですか？",romaji:"Kore wa kono bin no retsu desu ka?",notes:"Useful at gate/check-in.",politeness:"Polite",tags:["airport"],created_at:"2026-06-23"},
  {id:"jp-068",section:"Personal",category:"Airport/Plane",english:"Can I have water please?",hiragana:"おみずをください。",kanji:"お水をください。",romaji:"Omizu o kudasai.",notes:"Plane/restaurant.",politeness:"Polite",tags:["plane"],created_at:"2026-06-23"},
  {id:"jp-069",section:"Personal",category:"Airport/Plane",english:"Can I change seats?",hiragana:"せきをかえられますか？",kanji:"席を変えられますか？",romaji:"Seki o kaeraremasu ka?",notes:"If needed on plane/train.",politeness:"Polite",tags:["plane"],created_at:"2026-06-23"},
  {id:"jp-070",section:"Personal",category:"Hotel",english:"I have a reservation.",hiragana:"よやくしています。",kanji:"予約しています。",romaji:"Yoyaku shiteimasu.",notes:"At hotel/restaurant.",politeness:"Polite",tags:["hotel"],created_at:"2026-06-23"},
  {id:"jp-071",section:"Personal",category:"Hotel",english:"Can I check in?",hiragana:"チェックインできますか？",kanji:"チェックインできますか？",romaji:"Chekku-in dekimasu ka?",notes:"Simple hotel phrase.",politeness:"Polite",tags:["hotel"],created_at:"2026-06-23"},
  {id:"jp-072",section:"Personal",category:"Hotel",english:"Can I leave my luggage here?",hiragana:"にもつをここにおけますか？",kanji:"荷物をここに置けますか？",romaji:"Nimotsu o koko ni okemasu ka?",notes:"Useful before/after check-in.",politeness:"Polite",tags:["hotel"],created_at:"2026-06-23"},
  {id:"jp-073",section:"Personal",category:"Hotel",english:"What time is checkout?",hiragana:"チェックアウトはなんじですか？",kanji:"チェックアウトは何時ですか？",romaji:"Chekku-auto wa nanji desu ka?",notes:"Hotel phrase.",politeness:"Polite",tags:["hotel"],created_at:"2026-06-23"},
  {id:"jp-074",section:"Personal",category:"Hotel",english:"The Wi-Fi is not working.",hiragana:"ワイファイがつかえません。",kanji:"Wi-Fiが使えません。",romaji:"Waifai ga tsukaemasen.",notes:"Hotel/cafe.",politeness:"Polite",tags:["hotel","tech"],created_at:"2026-06-23"},
  {id:"jp-075",section:"Personal",category:"Shopping",english:"How much is this?",hiragana:"これはいくらですか？",kanji:"これはいくらですか？",romaji:"Kore wa ikura desu ka?",notes:"Shopping staple.",politeness:"Polite",tags:["shopping"],created_at:"2026-06-23"},
  {id:"jp-076",section:"Personal",category:"Shopping",english:"Can I try this on?",hiragana:"これをしちゃくできますか？",kanji:"これを試着できますか？",romaji:"Kore o shichaku dekimasu ka?",notes:"Clothes shopping.",politeness:"Polite",tags:["shopping"],created_at:"2026-06-23"},
  {id:"jp-077",section:"Personal",category:"Shopping",english:"Do you have a bigger size?",hiragana:"もっとおおきいサイズはありますか？",kanji:"もっと大きいサイズはありますか？",romaji:"Motto ookii saizu wa arimasu ka?",notes:"Clothes/shoes.",politeness:"Polite",tags:["shopping"],created_at:"2026-06-23"},
  {id:"jp-078",section:"Personal",category:"Shopping",english:"I am just looking.",hiragana:"みているだけです。",kanji:"見ているだけです。",romaji:"Mite iru dake desu.",notes:"When staff approach you.",politeness:"Polite",tags:["shopping"],created_at:"2026-06-23"},
  {id:"jp-079",section:"Personal",category:"Emergency",english:"Please help me.",hiragana:"たすけてください。",kanji:"助けてください。",romaji:"Tasukete kudasai.",notes:"Emergency phrase.",politeness:"Polite",tags:["emergency"],created_at:"2026-06-23"},
  {id:"jp-080",section:"Personal",category:"Emergency",english:"I need a hospital.",hiragana:"びょういんがひつようです。",kanji:"病院が必要です。",romaji:"Byouin ga hitsuyou desu.",notes:"Medical emergency.",politeness:"Polite",tags:["emergency"],created_at:"2026-06-23"},
  {id:"jp-081",section:"Personal",category:"Emergency",english:"Please call an ambulance.",hiragana:"きゅうきゅうしゃをよんでください。",kanji:"救急車を呼んでください。",romaji:"Kyuukyuusha o yonde kudasai.",notes:"Emergency only.",politeness:"Polite",tags:["emergency"],created_at:"2026-06-23"},
  {id:"jp-082",section:"Personal",category:"Emergency",english:"I lost my phone.",hiragana:"けいたいをなくしました。",kanji:"携帯をなくしました。",romaji:"Keitai o nakushimashita.",notes:"Lost item report.",politeness:"Polite",tags:["emergency","lost"],created_at:"2026-06-23"},
  {id:"jp-083",section:"Personal",category:"Emergency",english:"I lost my wallet.",hiragana:"さいふをなくしました。",kanji:"財布をなくしました。",romaji:"Saifu o nakushimashita.",notes:"Lost item report.",politeness:"Polite",tags:["emergency","lost"],created_at:"2026-06-23"},
  {id:"jp-084",section:"Personal",category:"Emergency",english:"Where is the police box?",hiragana:"こうばんはどこですか？",kanji:"交番はどこですか？",romaji:"Kouban wa doko desu ka?",notes:"Kouban = small police box.",politeness:"Polite",tags:["emergency"],created_at:"2026-06-23"},
  {id:"jp-085",section:"Personal",category:"Family/Friends",english:"Can I visit you?",hiragana:"あいにいってもいいですか？",kanji:"会いに行ってもいいですか？",romaji:"Ai ni itte mo ii desu ka?",notes:"Warm and polite.",politeness:"Polite",tags:["family","friends"],created_at:"2026-06-23"},
  {id:"jp-086",section:"Personal",category:"Family/Friends",english:"Are you well?",hiragana:"おげんきですか？",kanji:"お元気ですか？",romaji:"Ogenki desu ka?",notes:"Polite check-in.",politeness:"Polite",tags:["family","friends"],created_at:"2026-06-23"},
  {id:"jp-087",section:"Personal",category:"Family/Friends",english:"I am going to Japan for a business meeting.",hiragana:"しごとのミーティングでにほんにいきます。",kanji:"仕事のミーティングで日本に行きます。",romaji:"Shigoto no miitingu de nihon ni ikimasu.",notes:"Useful exact trip reason.",politeness:"Polite",tags:["business","travel"],created_at:"2026-06-23"},
  {id:"jp-088",section:"Personal",category:"Family/Friends",english:"I would like to see you if you have time.",hiragana:"じかんがあれば、あいたいです。",kanji:"時間があれば、会いたいです。",romaji:"Jikan ga areba, aitai desu.",notes:"Polite and not pushy.",politeness:"Polite",tags:["family","friends"],created_at:"2026-06-23"},
  {id:"jp-089",section:"Business",category:"Work Intro",english:"I work online.",hiragana:"オンラインでしごとをしています。",kanji:"オンラインで仕事をしています。",romaji:"Onrain de shigoto o shiteimasu.",notes:"Simple work explanation.",politeness:"Polite",tags:["work"],created_at:"2026-06-23"},
  {id:"jp-090",section:"Business",category:"Work Intro",english:"I work in marketing and technology.",hiragana:"マーケティングとテクノロジーのしごとをしています。",kanji:"マーケティングとテクノロジーの仕事をしています。",romaji:"Maaketingu to tekunorojii no shigoto o shiteimasu.",notes:"Broad, clear business line.",politeness:"Polite",tags:["work","tech"],created_at:"2026-06-23"},
  {id:"jp-091",section:"Business",category:"Work Intro",english:"I help build online products.",hiragana:"オンラインのプロダクトをつくるしごとをしています。",kanji:"オンラインのプロダクトを作る仕事をしています。",romaji:"Onrain no purodakuto o tsukuru shigoto o shiteimasu.",notes:"Good for explaining startup/product work.",politeness:"Polite",tags:["work","product"],created_at:"2026-06-23"},
  {id:"jp-092",section:"Business",category:"Work Intro",english:"I am working on a startup project.",hiragana:"スタートアップのプロジェクトをやっています。",kanji:"スタートアップのプロジェクトをやっています。",romaji:"Sutaatoappu no purojekuto o yatteimasu.",notes:"Simple startup explanation.",politeness:"Polite",tags:["startup"],created_at:"2026-06-23"},
  {id:"jp-093",section:"Business",category:"Work Intro",english:"I am responsible for growth and partnerships.",hiragana:"グロースとパートナーシップをたんとうしています。",kanji:"グロースとパートナーシップを担当しています。",romaji:"Guroosu to paatonaashippu o tantou shiteimasu.",notes:"Matches your Noise role.",politeness:"Polite",tags:["work","growth","partnerships"],created_at:"2026-06-23"},
  {id:"jp-094",section:"Business",category:"Work Intro",english:"My role is to bring customers and partners to the product.",hiragana:"わたしのやくわりは、プロダクトにこきゃくとパートナーをつなげることです。",kanji:"私の役割は、プロダクトに顧客とパートナーをつなげることです。",romaji:"Watashi no yakuwari wa, purodakuto ni kokyaku to paatonaa o tsunageru koto desu.",notes:"Clear and professional.",politeness:"Polite",tags:["work","sales","partnerships"],created_at:"2026-06-23"},
  {id:"jp-095",section:"Business",category:"Work Intro",english:"I also help with sales, customer feedback, and launch strategy.",hiragana:"セールス、こきゃくのフィードバック、ローンチせんりゃくもてつだっています。",kanji:"セールス、顧客のフィードバック、ローンチ戦略も手伝っています。",romaji:"Seerusu, kokyaku no fiidobakku, roonchi senryaku mo tetsudatteimasu.",notes:"Good expansion sentence.",politeness:"Polite",tags:["sales","strategy"],created_at:"2026-06-23"},
  {id:"jp-096",section:"Business",category:"Work Intro",english:"I am learning coding and building websites.",hiragana:"コーディングをべんきょうして、ウェブサイトをつくっています。",kanji:"コーディングを勉強して、ウェブサイトを作っています。",romaji:"Koodingu o benkyou shite, webusaito o tsukutteimasu.",notes:"Use for your current building work.",politeness:"Polite",tags:["coding","websites"],created_at:"2026-06-23"},
  {id:"jp-097",section:"Business",category:"Work Intro",english:"I am building landing pages and product demos.",hiragana:"ランディングページとプロダクトデモをつくっています。",kanji:"ランディングページとプロダクトデモを作っています。",romaji:"Randingu peeji to purodakuto demo o tsukutteimasu.",notes:"Current practical work.",politeness:"Polite",tags:["landing page","product"],created_at:"2026-06-23"},
  {id:"jp-098",section:"Business",category:"Work Intro",english:"I am trying to improve my Japanese for business conversations.",hiragana:"ビジネスのかいわのために、にほんごをもっとよくしたいです。",kanji:"ビジネスの会話のために、日本語をもっと良くしたいです。",romaji:"Bijinesu no kaiwa no tame ni, nihongo o motto yoku shitai desu.",notes:"Sets context for practice.",politeness:"Polite",tags:["business","learning"],created_at:"2026-06-23"},
  {id:"jp-099",section:"Business",category:"Combat Reviews",english:"Combat Reviews is a combat sports platform.",hiragana:"コンバットレビューズは、かくとうぎのプラットフォームです。",kanji:"Combat Reviewsは、格闘技のプラットフォームです。",romaji:"Konbatto Rebyuuzu wa, kakutougi no purattofoomu desu.",notes:"Simple product definition.",politeness:"Polite",tags:["combat reviews"],created_at:"2026-06-23"},
  {id:"jp-100",section:"Business",category:"Combat Reviews",english:"It is a dashboard for fight fans.",hiragana:"ファイトファンのためのダッシュボードです。",kanji:"ファイトファンのためのダッシュボードです。",romaji:"Faito fan no tame no dasshuboodo desu.",notes:"Core positioning.",politeness:"Polite",tags:["combat reviews","positioning"],created_at:"2026-06-23"},
  {id:"jp-101",section:"Business",category:"Combat Reviews",english:"Users can follow rankings, schedules, news, predictions, and discussions in one place.",hiragana:"ユーザーはランキング、スケジュール、ニュース、よそう、ディスカッションをひとつのばしょでみられます。",kanji:"ユーザーはランキング、スケジュール、ニュース、予想、ディスカッションを一つの場所で見られます。",romaji:"Yuuzaa wa rankingu, sukejuuru, nyuusu, yosou, disukasshon o hitotsu no basho de miraremasu.",notes:"Full feature sentence.",politeness:"Polite",tags:["combat reviews","features"],created_at:"2026-06-23"},
  {id:"jp-102",section:"Business",category:"Combat Reviews",english:"The goal is to make combat sports easier to follow.",hiragana:"もくひょうは、かくとうぎをもっとフォローしやすくすることです。",kanji:"目標は、格闘技をもっとフォローしやすくすることです。",romaji:"Mokuhyou wa, kakutougi o motto foroo shiyasuku suru koto desu.",notes:"Simple mission.",politeness:"Polite",tags:["combat reviews","mission"],created_at:"2026-06-23"},
  {id:"jp-103",section:"Business",category:"Combat Reviews",english:"Combat sports information is scattered across social media, news sites, and promotion pages.",hiragana:"かくとうぎのじょうほうは、SNS、ニュースサイト、プロモーションのページにばらばらになっています。",kanji:"格闘技の情報は、SNS、ニュースサイト、プロモーションのページにばらばらになっています。",romaji:"Kakutougi no jouhou wa, SNS, nyuusu saito, puromoushon no peeji ni barabara ni natteimasu.",notes:"Problem statement.",politeness:"Polite",tags:["problem"],created_at:"2026-06-23"},
  {id:"jp-104",section:"Business",category:"Combat Reviews",english:"We want to put the fight week experience into one clean dashboard.",hiragana:"ファイトウィークのたいけんを、ひとつのきれいなダッシュボードにまとめたいです。",kanji:"ファイトウィークの体験を、一つのきれいなダッシュボードにまとめたいです。",romaji:"Faito wiiku no taiken o, hitotsu no kirei na dasshuboodo ni matometai desu.",notes:"Clear product vision.",politeness:"Polite",tags:["vision"],created_at:"2026-06-23"},
  {id:"jp-105",section:"Business",category:"Combat Reviews",english:"Fans can make predictions before fight night.",hiragana:"ファンはしあいのまえに、かちまけをよそうできます。",kanji:"ファンは試合の前に、勝ち負けを予想できます。",romaji:"Fan wa shiai no mae ni, kachimake o yosou dekimasu.",notes:"Prediction feature.",politeness:"Polite",tags:["predictions"],created_at:"2026-06-23"},
  {id:"jp-106",section:"Business",category:"Combat Reviews",english:"They can also see what the community thinks.",hiragana:"コミュニティがどうかんがえているかもみられます。",kanji:"コミュニティがどう考えているかも見られます。",romaji:"Komyuniti ga dou kangaeteiru ka mo miraremasu.",notes:"Community sentiment.",politeness:"Polite",tags:["community"],created_at:"2026-06-23"},
  {id:"jp-107",section:"Business",category:"Combat Reviews",english:"We are building a waitlist before launch.",hiragana:"ローンチのまえにウェイトリストをつくっています。",kanji:"ローンチの前にウェイトリストを作っています。",romaji:"Roonchi no mae ni weito risuto o tsukutteimasu.",notes:"Useful during current phase.",politeness:"Polite",tags:["launch"],created_at:"2026-06-23"},
  {id:"jp-108",section:"Business",category:"Combat Reviews",english:"The landing page is designed to collect early users.",hiragana:"ランディングページは、はやいだんかいのユーザーをあつめるためにつくっています。",kanji:"ランディングページは、早い段階のユーザーを集めるために作っています。",romaji:"Randingu peeji wa, hayai dankai no yuuzaa o atsumeru tame ni tsukutteimasu.",notes:"Explain landing page goal.",politeness:"Polite",tags:["landing page"],created_at:"2026-06-23"},
  {id:"jp-109",section:"Business",category:"Combat Reviews",english:"We want users to sign up with their contact details.",hiragana:"ユーザーにれんらくさきをとうろくしてもらいたいです。",kanji:"ユーザーに連絡先を登録してもらいたいです。",romaji:"Yuuzaa ni renrakusaki o touroku shite moraitai desu.",notes:"Waitlist conversion line.",politeness:"Polite",tags:["waitlist"],created_at:"2026-06-23"},
  {id:"jp-110",section:"Business",category:"Noise",english:"Noise is an AI communication operating system.",hiragana:"ノイズは、AIコミュニケーション・オペレーティングシステムです。",kanji:"Noiseは、AIコミュニケーション・オペレーティングシステムです。",romaji:"Noizu wa, AI komyunikeeshon opereetingu shisutemu desu.",notes:"High-level positioning.",politeness:"Polite",tags:["noise","ai"],created_at:"2026-06-23"},
  {id:"jp-111",section:"Business",category:"Noise",english:"It helps companies turn communication into execution.",hiragana:"かいしゃがコミュニケーションをじっこうにつなげるのをたすけます。",kanji:"会社がコミュニケーションを実行につなげるのを助けます。",romaji:"Kaisha ga komyunikeeshon o jikkou ni tsunageru no o tasukemasu.",notes:"Core Noise brand line in Japanese.",politeness:"Polite",tags:["noise","execution"],created_at:"2026-06-23"},
  {id:"jp-112",section:"Business",category:"Noise",english:"The problem is not just too many messages.",hiragana:"もんだいは、ただメッセージがおおすぎることではありません。",kanji:"問題は、ただメッセージが多すぎることではありません。",romaji:"Mondai wa, tada messeeji ga oosugiru koto dewa arimasen.",notes:"Positioning contrast.",politeness:"Polite",tags:["noise","problem"],created_at:"2026-06-23"},
  {id:"jp-113",section:"Business",category:"Noise",english:"The real problem is that communication does not turn into action.",hiragana:"ほんとうのもんだいは、コミュニケーションがこうどうにつながらないことです。",kanji:"本当の問題は、コミュニケーションが行動につながらないことです。",romaji:"Hontou no mondai wa, komyunikeeshon ga koudou ni tsunagaranai koto desu.",notes:"Clear problem line.",politeness:"Polite",tags:["noise","positioning"],created_at:"2026-06-23"},
  {id:"jp-114",section:"Business",category:"Noise",english:"Noise connects email, Slack, Teams, WhatsApp, Telegram, and other channels.",hiragana:"ノイズは、メール、スラック、チームズ、ワッツアップ、テレグラムなどのチャンネルをつなげます。",kanji:"Noiseは、メール、Slack、Teams、WhatsApp、Telegramなどのチャンネルをつなげます。",romaji:"Noizu wa, meeru, Surakku, Chiimuzu, Wattsuappu, Tereguramu nado no channeru o tsunagemasu.",notes:"Channel list.",politeness:"Polite",tags:["noise","channels"],created_at:"2026-06-23"},
  {id:"jp-115",section:"Business",category:"Noise",english:"AI helps prioritize important conversations.",hiragana:"AIがたいせつなかいわをゆうせんしてくれます。",kanji:"AIが大切な会話を優先してくれます。",romaji:"AI ga taisetsu na kaiwa o yuusen shite kuremasu.",notes:"Feature explanation.",politeness:"Polite",tags:["noise","ai"],created_at:"2026-06-23"},
  {id:"jp-116",section:"Business",category:"Noise",english:"It can summarize conversations and suggest next steps.",hiragana:"かいわをようやくして、つぎのステップをていあんできます。",kanji:"会話を要約して、次のステップを提案できます。",romaji:"Kaiwa o youyaku shite, tsugi no suteppu o teian dekimasu.",notes:"Feature explanation.",politeness:"Polite",tags:["noise","ai","summary"],created_at:"2026-06-23"},
  {id:"jp-117",section:"Business",category:"Noise",english:"We are targeting companies first, not individual users.",hiragana:"さいしょはこじんユーザーではなく、かいしゃをターゲットにしています。",kanji:"最初は個人ユーザーではなく、会社をターゲットにしています。",romaji:"Saisho wa kojin yuuzaa dewa naku, kaisha o taagetto ni shiteimasu.",notes:"Enterprise-first strategy.",politeness:"Polite",tags:["noise","strategy"],created_at:"2026-06-23"},
  {id:"jp-118",section:"Business",category:"Noise",english:"We want design partners who can give real feedback.",hiragana:"ほんとうのフィードバックをくれるデザインパートナーをさがしています。",kanji:"本当のフィードバックをくれるデザインパートナーを探しています。",romaji:"Hontou no fiidobakku o kureru dezain paatonaa o sagashiteimasu.",notes:"Sales/partnership line.",politeness:"Polite",tags:["noise","partnerships"],created_at:"2026-06-23"},
  {id:"jp-119",section:"Business",category:"Noise",english:"The long-term vision is an operating system for modern work.",hiragana:"ちょうきてきなビジョンは、げんだいのしごとのためのオペレーティングシステムです。",kanji:"長期的なビジョンは、現代の仕事のためのオペレーティングシステムです。",romaji:"Chouki-teki na bijon wa, gendai no shigoto no tame no opereetingu shisutemu desu.",notes:"Big vision line.",politeness:"Polite",tags:["noise","vision"],created_at:"2026-06-23"},
  {id:"jp-120",section:"Business",category:"Coding / Tech",english:"I am building this with HTML, CSS, and JavaScript.",hiragana:"HTML、CSS、ジャバスクリプトでこれをつくっています。",kanji:"HTML、CSS、JavaScriptでこれを作っています。",romaji:"HTML, CSS, Jabasukuriputo de kore o tsukutteimasu.",notes:"Coding explanation.",politeness:"Polite",tags:["coding"],created_at:"2026-06-23"},
  {id:"jp-121",section:"Business",category:"Coding / Tech",english:"It is a static website.",hiragana:"これはスタティックなウェブサイトです。",kanji:"これはスタティックなウェブサイトです。",romaji:"Kore wa sutatikku na webusaito desu.",notes:"Tech term; static website is also understood as loanword.",politeness:"Polite",tags:["coding","web"],created_at:"2026-06-23"},
  {id:"jp-122",section:"Business",category:"Coding / Tech",english:"The website works offline after it loads once.",hiragana:"このサイトはいちどよみこめば、オフラインでもつかえます。",kanji:"このサイトは一度読み込めば、オフラインでも使えます。",romaji:"Kono saito wa ichido yomikomeba, ofurain demo tsukaemasu.",notes:"PWA/offline app explanation.",politeness:"Polite",tags:["pwa","offline"],created_at:"2026-06-23"},
  {id:"jp-123",section:"Business",category:"Coding / Tech",english:"I want to make it work like an app on my phone.",hiragana:"スマホでアプリみたいにつかえるようにしたいです。",kanji:"スマホでアプリみたいに使えるようにしたいです。",romaji:"Sumaho de apuri mitai ni tsukaeru you ni shitai desu.",notes:"PWA goal.",politeness:"Polite",tags:["pwa","mobile"],created_at:"2026-06-23"},
  {id:"jp-124",section:"Business",category:"Coding / Tech",english:"I am learning how to deploy websites with GitHub Pages.",hiragana:"ギットハブページズでウェブサイトをこうかいするほうほうをべんきょうしています。",kanji:"GitHub Pagesでウェブサイトを公開する方法を勉強しています。",romaji:"GitHub Pages de webusaito o koukai suru houhou o benkyou shiteimasu.",notes:"Explain deployment learning.",politeness:"Polite",tags:["github","deployment"],created_at:"2026-06-23"},
  {id:"jp-125",section:"Business",category:"Coding / Tech",english:"I use AI tools to help me build faster.",hiragana:"AIツールをつかって、もっとはやくつくっています。",kanji:"AIツールを使って、もっと早く作っています。",romaji:"AI tsuuru o tsukatte, motto hayaku tsukutteimasu.",notes:"AI workflow line.",politeness:"Polite",tags:["ai","coding"],created_at:"2026-06-23"},
  {id:"jp-126",section:"Business",category:"Coding / Tech",english:"I am not an expert yet, but I am improving quickly.",hiragana:"まだせんもんかではないですが、はやくじょうたつしています。",kanji:"まだ専門家ではないですが、早く上達しています。",romaji:"Mada senmonka dewa nai desu ga, hayaku joutatsu shiteimasu.",notes:"Humble but confident.",politeness:"Polite",tags:["learning"],created_at:"2026-06-23"},
  {id:"jp-127",section:"Business",category:"Coding / Tech",english:"The app saves data locally on the phone.",hiragana:"このアプリはスマホのなかにデータをほぞんします。",kanji:"このアプリはスマホの中にデータを保存します。",romaji:"Kono apuri wa sumaho no naka ni deeta o hozon shimasu.",notes:"LocalStorage/IndexedDB in simple words.",politeness:"Polite",tags:["offline","storage"],created_at:"2026-06-23"},
  {id:"jp-128",section:"Business",category:"Coding / Tech",english:"Later I want to connect it to a database.",hiragana:"あとでデータベースにつなげたいです。",kanji:"後でデータベースにつなげたいです。",romaji:"Ato de deetabeesu ni tsunagetai desu.",notes:"Backend future line.",politeness:"Polite",tags:["database","backend"],created_at:"2026-06-23"},
  {id:"jp-129",section:"Business",category:"SaaS / Product",english:"SaaS means software that people use online as a service.",hiragana:"SaaSは、インターネットでサービスとしてつかうソフトウェアのことです。",kanji:"SaaSは、インターネットでサービスとして使うソフトウェアのことです。",romaji:"SaaS wa, intaanetto de saabisu toshite tsukau sofutowea no koto desu.",notes:"Simple SaaS explanation.",politeness:"Polite",tags:["saas"],created_at:"2026-06-23"},
  {id:"jp-130",section:"Business",category:"SaaS / Product",english:"The product is still early, so user feedback is very important.",hiragana:"プロダクトはまだはやいだんかいなので、ユーザーのフィードバックがとてもたいせつです。",kanji:"プロダクトはまだ早い段階なので、ユーザーのフィードバックがとても大切です。",romaji:"Purodakuto wa mada hayai dankai nanode, yuuzaa no fiidobakku ga totemo taisetsu desu.",notes:"Startup/product line.",politeness:"Polite",tags:["product","feedback"],created_at:"2026-06-23"},
  {id:"jp-131",section:"Business",category:"SaaS / Product",english:"We are testing the idea with real users first.",hiragana:"まずはほんとうのユーザーとアイデアをテストしています。",kanji:"まずは本当のユーザーとアイデアをテストしています。",romaji:"Mazu wa hontou no yuuzaa to aidea o tesuto shiteimasu.",notes:"Validation line.",politeness:"Polite",tags:["product","testing"],created_at:"2026-06-23"},
  {id:"jp-132",section:"Business",category:"SaaS / Product",english:"The main question is whether users actually need this.",hiragana:"いちばんたいせつなしつもんは、ユーザーがほんとうにこれをひつようとしているかです。",kanji:"一番大切な質問は、ユーザーが本当にこれを必要としているかです。",romaji:"Ichiban taisetsu na shitsumon wa, yuuzaa ga hontou ni kore o hitsuyou to shiteiru ka desu.",notes:"Product validation sentence.",politeness:"Polite",tags:["product","validation"],created_at:"2026-06-23"},
  {id:"jp-133",section:"Business",category:"SaaS / Product",english:"A landing page helps us see if people are interested before the full product is ready.",hiragana:"ランディングページは、プロダクトがかんせいするまえに、ひとびとがきょうみをもつかをみるためにやくにたちます。",kanji:"ランディングページは、プロダクトが完成する前に、人々が興味を持つかを見るために役に立ちます。",romaji:"Randingu peeji wa, purodakuto ga kansei suru mae ni, hitobito ga kyoumi o motsu ka o miru tame ni yaku ni tachimasu.",notes:"Landing page explanation.",politeness:"Polite",tags:["landing page","validation"],created_at:"2026-06-23"},
  {id:"jp-134",section:"Business",category:"SaaS / Product",english:"We measure interest by waitlist signups.",hiragana:"ウェイトリストのとうろくで、きょうみのつよさをはかります。",kanji:"ウェイトリストの登録で、興味の強さを測ります。",romaji:"Weito risuto no touroku de, kyoumi no tsuyosa o hakarimasu.",notes:"Conversion measurement.",politeness:"Polite",tags:["waitlist","metrics"],created_at:"2026-06-23"},
  {id:"jp-135",section:"Business",category:"SaaS / Product",english:"The first version does not need every feature.",hiragana:"さいしょのバージョンには、すべてのきのうはひつようありません。",kanji:"最初のバージョンには、すべての機能は必要ありません。",romaji:"Saisho no baajon ni wa, subete no kinou wa hitsuyou arimasen.",notes:"MVP mindset.",politeness:"Polite",tags:["mvp"],created_at:"2026-06-23"},
  {id:"jp-136",section:"Business",category:"SaaS / Product",english:"We need to build the simplest useful version first.",hiragana:"まずは、いちばんシンプルでやくにたつバージョンをつくるひつようがあります。",kanji:"まずは、一番シンプルで役に立つバージョンを作る必要があります。",romaji:"Mazu wa, ichiban shinpuru de yaku ni tatsu baajon o tsukuru hitsuyou ga arimasu.",notes:"MVP sentence.",politeness:"Polite",tags:["mvp"],created_at:"2026-06-23"},
  {id:"jp-137",section:"Business",category:"SaaS / Product",english:"Good design makes the product easier to understand.",hiragana:"いいデザインは、プロダクトをもっとわかりやすくします。",kanji:"良いデザインは、プロダクトをもっと分かりやすくします。",romaji:"Ii dezain wa, purodakuto o motto wakariyasuku shimasu.",notes:"Design line.",politeness:"Polite",tags:["design"],created_at:"2026-06-23"},
  {id:"jp-138",section:"Business",category:"SaaS / Product",english:"If people understand the value quickly, they are more likely to sign up.",hiragana:"ひとびとがすぐにかちをりかいできれば、とうろくしやすくなります。",kanji:"人々がすぐに価値を理解できれば、登録しやすくなります。",romaji:"Hitobito ga sugu ni kachi o rikai dekireba, touroku shiyasuku narimasu.",notes:"Conversion principle.",politeness:"Polite",tags:["conversion"],created_at:"2026-06-23"},
  {id:"jp-139",section:"Business",category:"Business Conversation",english:"What kind of work do you do?",hiragana:"どんなおしごとをしていますか？",kanji:"どんなお仕事をしていますか？",romaji:"Donna oshigoto o shiteimasu ka?",notes:"Polite question.",politeness:"Polite",tags:["conversation"],created_at:"2026-06-23"},
  {id:"jp-140",section:"Business",category:"Business Conversation",english:"What industry are you in?",hiragana:"どのぎょうかいでしごとをしていますか？",kanji:"どの業界で仕事をしていますか？",romaji:"Dono gyoukai de shigoto o shiteimasu ka?",notes:"Business question.",politeness:"Polite",tags:["conversation"],created_at:"2026-06-23"},
  {id:"jp-141",section:"Business",category:"Business Conversation",english:"Are you interested in startups?",hiragana:"スタートアップにきょうみがありますか？",kanji:"スタートアップに興味がありますか？",romaji:"Sutaatoappu ni kyoumi ga arimasu ka?",notes:"Useful networking question.",politeness:"Polite",tags:["conversation","startup"],created_at:"2026-06-23"},
  {id:"jp-142",section:"Business",category:"Business Conversation",english:"Have you used AI tools before?",hiragana:"AIツールをつかったことがありますか？",kanji:"AIツールを使ったことがありますか？",romaji:"AI tsuuru o tsukatta koto ga arimasu ka?",notes:"Good tech conversation starter.",politeness:"Polite",tags:["conversation","ai"],created_at:"2026-06-23"},
  {id:"jp-143",section:"Business",category:"Business Conversation",english:"What tools do you use for work?",hiragana:"しごとではどんなツールをつかっていますか？",kanji:"仕事ではどんなツールを使っていますか？",romaji:"Shigoto dewa donna tsuuru o tsukatteimasu ka?",notes:"Good for learning pain points.",politeness:"Polite",tags:["conversation","research"],created_at:"2026-06-23"},
  {id:"jp-144",section:"Business",category:"Business Conversation",english:"What is the biggest problem in your workflow?",hiragana:"しごとのながれで、いちばんおおきなもんだいはなんですか？",kanji:"仕事の流れで、一番大きな問題は何ですか？",romaji:"Shigoto no nagare de, ichiban ookina mondai wa nan desu ka?",notes:"Customer discovery style question.",politeness:"Polite",tags:["research","workflow"],created_at:"2026-06-23"},
  {id:"jp-145",section:"Business",category:"Business Conversation",english:"Can I ask you a few questions about your work?",hiragana:"しごとについて、いくつかしつもんしてもいいですか？",kanji:"仕事について、いくつか質問してもいいですか？",romaji:"Shigoto ni tsuite, ikutsuka shitsumon shite mo ii desu ka?",notes:"Permission before discovery questions.",politeness:"Polite",tags:["research"],created_at:"2026-06-23"},
  {id:"jp-146",section:"Business",category:"Business Conversation",english:"That feedback is very helpful.",hiragana:"そのフィードバックはとてもたすかります。",kanji:"そのフィードバックはとても助かります。",romaji:"Sono fiidobakku wa totemo tasukarimasu.",notes:"Good response to feedback.",politeness:"Polite",tags:["feedback"],created_at:"2026-06-23"},
  {id:"jp-147",section:"Business",category:"Business Conversation",english:"Can I show you a quick demo?",hiragana:"かんたんなデモをみせてもいいですか？",kanji:"簡単なデモを見せてもいいですか？",romaji:"Kantan na demo o misete mo ii desu ka?",notes:"Useful in meetings.",politeness:"Polite",tags:["demo"],created_at:"2026-06-23"},
  {id:"jp-148",section:"Business",category:"Business Conversation",english:"I would like to hear your honest opinion.",hiragana:"しょうじきないけんをききたいです。",kanji:"正直な意見を聞きたいです。",romaji:"Shoujiki na iken o kikitai desu.",notes:"Feedback prompt.",politeness:"Polite",tags:["feedback"],created_at:"2026-06-23"},
  {id:"jp-149",section:"Business",category:"Business Conversation",english:"This is still an early version.",hiragana:"これはまだはやいだんかいのバージョンです。",kanji:"これはまだ早い段階のバージョンです。",romaji:"Kore wa mada hayai dankai no baajon desu.",notes:"Set expectations.",politeness:"Polite",tags:["mvp"],created_at:"2026-06-23"},
  {id:"jp-150",section:"Business",category:"Business Conversation",english:"We are improving it based on user feedback.",hiragana:"ユーザーのフィードバックをもとに、かいぜんしています。",kanji:"ユーザーのフィードバックを基に、改善しています。",romaji:"Yuuzaa no fiidobakku o moto ni, kaizen shiteimasu.",notes:"Product iteration line.",politeness:"Polite",tags:["feedback","iteration"],created_at:"2026-06-23"},
  {id:"jp-151",section:"Business",category:"Business Conversation",english:"Can we stay in contact?",hiragana:"れんらくをとりつづけてもいいですか？",kanji:"連絡を取り続けてもいいですか？",romaji:"Renraku o toritsuzukete mo ii desu ka?",notes:"Networking follow-up.",politeness:"Polite",tags:["networking"],created_at:"2026-06-23"},
  {id:"jp-152",section:"Business",category:"Business Conversation",english:"Can I send you the link later?",hiragana:"あとでリンクをおくってもいいですか？",kanji:"後でリンクを送ってもいいですか？",romaji:"Ato de rinku o okutte mo ii desu ka?",notes:"Good CTA in person.",politeness:"Polite",tags:["follow up"],created_at:"2026-06-23"},
  {id:"jp-153",section:"Business",category:"Business Conversation",english:"Thank you for your time.",hiragana:"おじかんありがとうございます。",kanji:"お時間ありがとうございます。",romaji:"Ojikan arigatou gozaimasu.",notes:"Polite meeting close.",politeness:"Polite",tags:["meeting"],created_at:"2026-06-23"}
];

// ============ BUSINESS LEVELS ============
// Merged into phrase objects in loadData(). Separate from SEED_PHRASES to keep it clean.

const BUSINESS_LEVELS = {
  'jp-089': {
    simple:  { japanese: 'インターネットを使って仕事をしています。', reading: 'いんたーねっとをつかってしごとをしています。', romaji: 'Intaanetto o tsukatte shigoto o shiteimasu.', note: 'Easy for anyone to understand.' },
    startup: { japanese: 'オンラインで仕事をしています。', reading: 'おんらいんでしごとをしています。', romaji: 'Onrain de shigoto o shiteimasu.', note: 'Natural in startup and tech circles.' },
    formal:  { japanese: 'リモートで業務を行っています。', reading: 'りもーとでぎょうむをおこなっています。', romaji: 'Rimooto de gyoumu o okonatte imasu.', note: 'Professional phrasing for business meetings.' }
  },
  'jp-090': {
    simple:  { japanese: 'ウェブでの集客と技術の仕事をしています。', reading: 'ウェブでのしゅうきゃくとぎじゅつのしごとをしています。', romaji: 'Webu de no shuukyaku to gijutsu no shigoto o shiteimasu.', note: 'Uses native Japanese 集客 for marketing.' },
    startup: { japanese: 'マーケティングとテクノロジーの仕事をしています。', reading: 'まーけてぃんぐとてくのろじーのしごとをしています。', romaji: 'Maaketingu to tekunorojii no shigoto o shiteimasu.', note: 'Natural startup phrasing.' },
    formal:  { japanese: 'マーケティング戦略と技術開発を担当しています。', reading: 'まーけてぃんぐせんりゃくとぎじゅつかいはつをたんとうしています。', romaji: 'Maaketingu senryaku to gijutsu kaihatsu o tantou shiteimasu.', note: 'Precise role description for formal introductions.' }
  },
  'jp-091': {
    simple:  { japanese: 'インターネットで使えるサービスを作る仕事をしています。', reading: 'いんたーねっとでつかえるさーびすをつくるしごとをしています。', romaji: 'Intaanetto de tsukaeru saabisu o tsukuru shigoto o shiteimasu.', note: 'Clear for any audience.' },
    startup: { japanese: 'オンラインのプロダクトを開発しています。', reading: 'おんらいんのぷろだくとをかいはつしています。', romaji: 'Onrain no purodakuto o kaihatsu shiteimasu.', note: 'Natural startup language.' },
    formal:  { japanese: 'ウェブサービスの企画・開発に携わっています。', reading: 'ウェブさーびすのきかく・かいはつにたずさわっています。', romaji: 'Webu saabisu no kikaku kaihatsu ni tazusawatte imasu.', note: 'Shows depth of involvement.' }
  },
  'jp-092': {
    simple:  { japanese: '新しい会社を立ち上げるためのプロジェクトに取り組んでいます。', reading: 'あたらしいかいしゃをたちあげるためのぷろじぇくとにとりくんでいます。', romaji: 'Atarashii kaisha o tachiageru tame no purojekuto ni torikunde imasu.', note: 'Explains what startup means in plain terms.' },
    startup: { japanese: 'スタートアップのプロジェクトをやっています。', reading: 'すたーとあっぷのぷろじぇくとをやっています。', romaji: 'Sutaatoappu no purojekuto o yatteimasu.', note: 'Natural startup phrasing.' },
    formal:  { japanese: 'ベンチャー事業の立ち上げに携わっています。', reading: 'べんちゃーじぎょうのたちあげにたずさわっています。', romaji: 'Benchaa jigyou no tachiage ni tazusawatte imasu.', note: 'Formal alternative using venture business language.' }
  },
  'jp-093': {
    simple:  { japanese: 'お客さんや協力してくれる会社を増やす仕事をしています。', reading: 'おきゃくさんやきょうりょくしてくれるかいしゃをふやすしごとをしています。', romaji: 'Okyakusan ya kyouryoku shite kureru kaisha o fuyasu shigoto o shiteimasu.', note: 'Very plain human explanation.' },
    startup: { japanese: 'グロースとパートナーシップを担当しています。', reading: 'ぐろーすとぱーとなーしっぷをたんとうしています。', romaji: 'Guroosu to paatonaashippu o tantou shiteimasu.', note: 'Natural startup terminology.' },
    formal:  { japanese: '事業成長と提携先の開拓を担当しています。', reading: 'じぎょうせいちょうとていけいさきのかいたくをたんとうしています。', romaji: 'Jigyou seichou to teikeisaki no kaitaku o tantou shiteimasu.', note: 'Strong business Japanese using native terms.' }
  },
  'jp-094': {
    simple:  { japanese: '私の仕事は、お客さんや協力会社をサービスにつなげることです。', reading: 'わたしのしごとは、おきゃくさんやきょうりょくがいしゃをさーびすにつなげることです。', romaji: 'Watashi no shigoto wa, okyakusan ya kyouryoku gaisha o saabisu ni tsunageru koto desu.', note: 'Plain and clear.' },
    startup: { japanese: '顧客とパートナーをプロダクトにつなげるのが私の役割です。', reading: 'こきゃくとぱーとなーをぷろだくとにつなげるのがわたしのやくわりです。', romaji: 'Kokyaku to paatonaa o purodakuto ni tsunageru no ga watashi no yakuwari desu.', note: 'Cleaner startup version.' },
    formal:  { japanese: '顧客獲得と提携関係の構築が私の担当領域です。', reading: 'こきゃくかくとくとていけいかんけいのこうちくがわたしのたんとうりょういきです。', romaji: 'Kokyaku kakutoku to teikeikanke no kouchiku ga watashi no tantou ryouiki desu.', note: 'Formal business Japanese for senior meetings.' }
  },
  'jp-095': {
    simple:  { japanese: '販売や、お客さんの意見集め、サービスを始める計画も手伝っています。', reading: 'はんばいや、おきゃくさんのいけんあつめ、さーびすをはじめるけいかくもてつだっています。', romaji: 'Hanbai ya, okyakusan no iken atsume, saabisu o hajimeru keikaku mo tetsudatteimasu.', note: 'All natural Japanese equivalents.' },
    startup: { japanese: 'セールス、顧客フィードバック、ローンチ戦略も担当しています。', reading: 'せーるす、こきゃくふぃーどばっく、ろーんちせんりゃくもたんとうしています。', romaji: 'Seerusu, kokyaku fiidobakku, roonchi senryaku mo tantou shiteimasu.', note: 'Natural mix of startup terms.' },
    formal:  { japanese: '営業、顧客意見の収集、サービス展開戦略も担当しています。', reading: 'えいぎょう、こきゃくいけんのしゅうしゅう、さーびすてんかいせんりゃくもたんとうしています。', romaji: 'Eigyou, kokyaku iken no shuushuu, saabisu tenkai senryaku mo tantou shiteimasu.', note: 'All native Japanese terms.' }
  },
  'jp-096': {
    simple:  { japanese: 'プログラムの書き方を勉強しながら、ウェブページを作っています。', reading: 'ぷろぐらむのかきかたをべんきょうしながら、ウェブぺーじをつくっています。', romaji: 'Puroguramu no kakikata o benkyou shi nagara, webu peeji o tsukutteimasu.', note: 'Explains coding in simple terms.' },
    startup: { japanese: 'コーディングを学びながら、ウェブサイトを作っています。', reading: 'こーでぃんぐをまなびながら、ウェブさいとをつくっています。', romaji: 'Koodingu o manabi nagara, webu saito o tsukutteimasu.', note: 'Natural and direct.' },
    formal:  { japanese: 'プログラミングを習得しながら、ウェブサービスの開発に取り組んでいます。', reading: 'ぷろぐらみんぐをしゅうとくしながら、ウェブさーびすのかいはつにとりくんでいます。', romaji: 'Puroguramingu o shuutoku shi nagara, webu saabisu no kaihatsu ni torikunde imasu.', note: 'Professional phrasing.' }
  },
  'jp-097': {
    simple:  { japanese: 'サービスの紹介ページとデモ画面を作っています。', reading: 'さーびすのしょうかいぺーじとでもがめんをつくっています。', romaji: 'Saabisu no shoukai peeji to demo gamen o tsukutteimasu.', note: 'Natural Japanese equivalents.' },
    startup: { japanese: 'ランディングページとプロダクトデモを作っています。', reading: 'らんでぃんぐぺーじとぷろだくとでもをつくっています。', romaji: 'Randingu peeji to purodakuto demo o tsukutteimasu.', note: 'Current startup terminology.' },
    formal:  { japanese: '製品紹介ページとデモンストレーション資料を作成しています。', reading: 'せいひんしょうかいぺーじとでもんすとれーしょんしりょうをさくせいしています。', romaji: 'Seihin shoukai peeji to demonsutoreeshon shiryou o sakusei shiteimasu.', note: 'Formal business language.' }
  },
  'jp-099': {
    simple:  { japanese: 'Combat Reviewsは、格闘技ファンのための情報サービスです。', reading: 'Combat Reviewsは、かくとうぎファンのためのじょうほうサービスです。', romaji: 'Combat Reviews wa, kakutougi fan no tame no jouhou saabisu desu.', note: 'Clear and simple for any audience.' },
    startup: { japanese: 'Combat Reviewsは、格闘技ファン向けのプラットフォームです。', reading: 'Combat Reviewsは、かくとうぎファンむけのプラットフォームです。', romaji: 'Combat Reviews wa, kakutougi fan-muke no purattofoomu desu.', note: 'Startup and product language.' },
    formal:  { japanese: 'Combat Reviewsは、格闘技に特化した総合情報サービスです。', reading: 'Combat Reviewsは、かくとうぎにとっかしたそうごうじょうほうサービスです。', romaji: 'Combat Reviews wa, kakutougi ni tokka shita sougou jouhou saabisu desu.', note: 'Professional company description.' }
  },
  'jp-100': {
    simple:  { japanese: '格闘技ファンが試合情報をまとめて見られるサービスです。', reading: 'かくとうぎファンがしあいじょうほうをまとめてみられるサービスです。', romaji: 'Kakutougi fan ga shiai jouhou o matomete mirareru saabisu desu.', note: 'Explains what a dashboard means in plain terms.' },
    startup: { japanese: '格闘技ファン向けのダッシュボードです。', reading: 'かくとうぎファンむけのダッシュボードです。', romaji: 'Kakutougi fan-muke no dasshuboodo desu.', note: 'Current startup language.' },
    formal:  { japanese: '格闘技に関する情報を一元管理・閲覧できるサービスです。', reading: 'かくとうぎにかんするじょうほうをいちげんかんり・えつらんできるサービスです。', romaji: 'Kakutougi ni kansuru jouhou o ichigen kanri etsuran dekiru saabisu desu.', note: 'Formal Japanese for presentations.' }
  },
  'jp-101': {
    simple:  { japanese: 'ランキング、試合日程、ニュース、予想、みんなの意見を一つのサイトで確認できます。', reading: 'ランキング、しあいにってい、ニュース、よそう、みんなのいけんをひとつのサイトでかくにんできます。', romaji: 'Rankingu, shiai nittei, nyuusu, yosou, minna no iken o hitotsu no saito de kakunin dekimasu.', note: 'Uses 試合日程 for schedules and みんなの意見 for discussions.' },
    startup: { japanese: 'ランキング、スケジュール、ニュース、予想、ディスカッションを一か所で確認できます。', reading: 'ランキング、スケジュール、ニュース、よそう、ディスカッションをいっかしょでかくにんできます。', romaji: 'Rankingu, sukejuuru, nyuusu, yosou, disukasshon o ikkasho de kakunin dekimasu.', note: 'Natural startup/product language.' },
    formal:  { japanese: '試合情報・ランキング・最新ニュース・予測・コミュニティ議論を一元的に閲覧できます。', reading: 'しあいじょうほう・ランキング・さいしんニュース・よそく・コミュニティぎろんをいちげんてきにえつらんできます。', romaji: 'Shiai jouhou rankingu saishin nyuusu yosoku komyuniti giron o ichigen-teki ni etsuran dekimasu.', note: 'More formal and comprehensive.' }
  },
  'jp-102': {
    simple:  { japanese: '格闘技をもっと気軽に楽しめるようにすることが目的です。', reading: 'かくとうぎをもっときがるにたのしめるようにすることがもくてきです。', romaji: 'Kakutougi o motto kigaru ni tanoshimeru you ni suru koto ga mokuteki desu.', note: 'Warm and natural phrasing.' },
    startup: { japanese: '格闘技をもっと簡単にフォローできるようにすることが目標です。', reading: 'かくとうぎをもっとかんたんにフォローできるようにすることがもくひょうです。', romaji: 'Kakutougi o motto kantan ni foroo dekiru you ni suru koto ga mokuhyou desu.', note: 'Uses フォロー for following — natural startup language.' },
    formal:  { japanese: '格闘技ファンが効率的に情報収集・試合追跡できる環境の提供を目標としています。', reading: 'かくとうぎファンがこうりつてきにじょうほうしゅうしゅう・しあいついせきできるかんきょうのていきょうをもくひょうとしています。', romaji: 'Kakutougi fan ga kouritsu-teki ni jouhou shuushuu shiai tsuiseki dekiru kankyou no teikyou o mokuhyou to shiteimasu.', note: 'Full formal goal statement.' }
  },
  'jp-103': {
    simple:  { japanese: '格闘技の情報は、色々なサイトにバラバラにあって見つけにくいです。', reading: 'かくとうぎのじょうほうは、いろいろなサイトにバラバラにあってみつけにくいです。', romaji: 'Kakutougi no jouhou wa, iroiro na saito ni barabara ni atte mitsukenikui desu.', note: 'Simple problem description.' },
    startup: { japanese: '格闘技の情報は、SNS、ニュースサイト、プロモーションページに分散しています。', reading: 'かくとうぎのじょうほうは、SNS、ニュースサイト、プロモーションページにぶんさんしています。', romaji: 'Kakutougi no jouhou wa, SNS, nyuusu saito, puromoushon peeji ni bunsan shiteimasu.', note: 'Cleaner current version.' },
    formal:  { japanese: '格闘技情報は各種SNS・ニュースメディア・プロモーションサイトに分散しており、効率的な情報収集が困難な状況です。', reading: 'かくとうぎじょうほうはかくしゅSNS・ニュースメディア・プロモーションサイトにぶんさんしており、こうりつてきなじょうほうしゅうしゅうがこんなんなじょうきょうです。', romaji: 'Kakutougi jouhou wa kakushu SNS nyuusu media puromoushon saito ni bunsan shite ori, kouritsu-teki na jouhou shuushuu ga konnan na joukyou desu.', note: 'Formal problem framing.' }
  },
  'jp-104': {
    simple:  { japanese: '試合に関する情報を、全部一つのサイトにまとめたいです。', reading: 'しあいにかんするじょうほうを、ぜんぶひとつのサイトにまとめたいです。', romaji: 'Shiai ni kansuru jouhou o, zenbu hitotsu no saito ni matometai desu.', note: 'Very clear goal.' },
    startup: { japanese: '試合週のすべての情報を、きれいなダッシュボードにまとめたいです。', reading: 'しあいしゅうのすべてのじょうほうを、きれいなダッシュボードにまとめたいです。', romaji: 'Shiai-shuu no subete no jouhou o, kirei na dasshuboodo ni matometai desu.', note: 'Startup vision statement.' },
    formal:  { japanese: '試合週に関わる全情報を一元的に整理し、最適な閲覧環境を提供することを目指しています。', reading: 'しあいしゅうにかかわるぜんじょうほうをいちげんてきにせいりし、さいてきなえつらんかんきょうをていきょうすることをめざしています。', romaji: 'Shiai-shuu ni kakawaru zen-jouhou o ichigen-teki ni seiri shi, saiteki na etsuran kankyou o teikyou suru koto o mezashiteimasu.', note: 'Full formal vision.' }
  },
  'jp-107': {
    simple:  { japanese: 'サービスが始まる前に、事前申し込みリストを作っています。', reading: 'サービスがはじまるまえに、じぜんもうしこみリストをつくっています。', romaji: 'Saabisu ga hajimaru mae ni, jizen moushikomi risuto o tsukutteimasu.', note: 'Explains waitlist naturally.' },
    startup: { japanese: 'ローンチ前にウェイトリストを作っています。', reading: 'ローンチまえにウェイトリストをつくっています。', romaji: 'Roonchi mae ni weito risuto o tsukutteimasu.', note: 'Natural startup language.' },
    formal:  { japanese: 'サービス公開前の事前登録受付を開始しています。', reading: 'サービスこうかいまえのじぜんとうろくうけつけをかいしています。', romaji: 'Saabisu koukai mae no jizen touroku uketsuке o kaishi shiteimasu.', note: 'Formal announcement style.' }
  },
  'jp-108': {
    simple:  { japanese: 'サービスが完成する前に、興味を持つ人がいるか確かめるためのページを作っています。', reading: 'サービスがかんせいするまえに、きょうみをもつひとがいるかたしかめるためのページをつくっています。', romaji: 'Saabisu ga kansei suru mae ni, kyoumi o motsu hito ga iru ka tashikameru tame no peeji o tsukutteimasu.', note: 'Clear purpose for any audience.' },
    startup: { japanese: 'ランディングページで、ローンチ前にユーザーの関心を確認します。', reading: 'ランディングページで、ローンチまえにユーザーのかんしんをかくにんします。', romaji: 'Randingu peeji de, roonchi mae ni yuuzaa no kanshin o kakunin shimasu.', note: 'Startup language.' },
    formal:  { japanese: '製品リリース前に、潜在顧客の関心度を測定するための紹介ページを設置しています。', reading: 'せいひんリリースまえに、せんざいこきゃくのかんしんどをそくていするためのしょうかいページをせっちしています。', romaji: 'Seihin rirriisu mae ni, senzai kokyaku no kanshin-do o sokuteisuru tame no shoukai peeji o secchi shiteimasu.', note: 'Very formal product management language.' }
  },
  'jp-110': {
    simple:  { japanese: 'Noiseは、会社のやり取りをAIで整理するサービスです。', reading: 'Noiseは、かいしゃのやりとりをAIでせいりするサービスです。', romaji: 'Noise wa, kaisha no yaritori o AI de seiri suru saabisu desu.', note: 'Very easy to understand for anyone.' },
    startup: { japanese: 'Noiseは、AIを活用したコミュニケーション管理サービスです。', reading: 'Noiseは、AIをかつようしたコミュニケーションかんりサービスです。', romaji: 'Noise wa, AI o katsuyou shita komyunikeeshon kanri saabisu desu.', note: 'Natural tech language.' },
    formal:  { japanese: 'Noiseは、AI技術を活用した企業向けコミュニケーション基盤サービスです。', reading: 'Noiseは、AIぎじゅつをかつようしたきぎょうむけコミュニケーションきばんサービスです。', romaji: 'Noise wa, AI gijutsu o katsuyou shita kigyou-muke komyunikeeshon kiban saabisu desu.', note: 'Full formal description.' }
  },
  'jp-111': {
    simple:  { japanese: '会社のメールやチャットから、次にやることを見つけやすくします。', reading: 'かいしゃのメールやチャットから、つぎにやることをみつけやすくします。', romaji: 'Kaisha no meeru ya chatto kara, tsugi ni yaru koto o mitsukeya-suku shimasu.', note: 'Very plain and clear.' },
    startup: { japanese: '社内コミュニケーションを整理して、実行につなげます。', reading: 'しゃないコミュニケーションをせいりして、じっこうにつなげます。', romaji: 'Shanai komyunikeeshon o seiri shite, jikkou ni tsunagemasu.', note: 'Natural startup phrase.' },
    formal:  { japanese: '社内の情報共有を体系化し、業務実行を支援するサービスです。', reading: 'しゃないのじょうほうきょうゆうをたいけいかし、ぎょうむじっこうをしえんするサービスです。', romaji: 'Shanai no jouhou kyouyuu o taikei-ka shi, gyoumu jikkou o shien suru saabisu desu.', note: 'Formal description.' }
  },
  'jp-112': {
    simple:  { japanese: '問題は、メッセージが多すぎることだけではありません。', reading: 'もんだいは、メッセージがおおすぎることだけではありません。', romaji: 'Mondai wa, messeeji ga oosugiru koto dake dewa arimasen.', note: 'Direct and simple.' },
    startup: { japanese: '問題は、ただメッセージが多すぎることではありません。', reading: 'もんだいは、ただメッセージがおおすぎることではありません。', romaji: 'Mondai wa, tada messeeji ga oosugiru koto dewa arimasen.', note: 'Current version — already natural.' },
    formal:  { japanese: '課題はメッセージの量だけではなく、情報の整理と優先度の把握にあります。', reading: 'かだいはメッセージのりょうだけではなく、じょうほうのせいりとゆうせんどのはあくにあります。', romaji: 'Kadai wa messeeji no ryou dake dewa naku, jouhou no seiri to yuusendo no haaku ni arimasu.', note: 'States the real problem clearly in formal Japanese.' }
  },
  'jp-113': {
    simple:  { japanese: '本当の問題は、話し合いが実際の仕事につながらないことです。', reading: 'ほんとうのもんだいは、はなしあいがじっさいのしごとにつながらないことです。', romaji: 'Hontou no mondai wa, hanashiai ga jissai no shigoto ni tsunagaranai koto desu.', note: 'Uses 話し合い for communication — very natural.' },
    startup: { japanese: '本当の問題は、コミュニケーションが行動につながらないことです。', reading: 'ほんとうのもんだいは、コミュニケーションがこうどうにつながらないことです。', romaji: 'Hontou no mondai wa, komyunikeeshon ga koudou ni tsunagaranai koto desu.', note: 'Natural startup phrasing.' },
    formal:  { japanese: '根本的な課題は、社内コミュニケーションが具体的な業務実行につながっていないことです。', reading: 'こんぽんてきなかだいは、しゃないコミュニケーションがぐたいてきなぎょうむじっこうにつながっていないことです。', romaji: 'Konpon-teki na kadai wa, shanai komyunikeeshon ga gutai-teki na gyoumu jikkou ni tsunagatte inai koto desu.', note: 'Very formal and precise.' }
  },
  'jp-114': {
    simple:  { japanese: 'Noiseは、メール、チャット、各種メッセージアプリをまとめて使えます。', reading: 'Noiseは、メール、チャット、かくしゅメッセージアプリをまとめてつかえます。', romaji: 'Noise wa, meeru, chatto, kakushu messeeji apuri o matomete tsukaemasu.', note: 'Generalizes the tool names for any audience.' },
    startup: { japanese: 'Noiseは、メール、Slack、Teams、WhatsApp、Telegramなどと連携します。', reading: 'Noiseは、メール、Slack、Teams、WhatsApp、Telegramなどとれんけいします。', romaji: 'Noise wa, meeru, Slack, Teams, WhatsApp, Telegram nado to renkei shimasu.', note: 'Specific integrations — natural startup language.' },
    formal:  { japanese: 'Noiseは、主要なビジネスコミュニケーションツールとのシステム連携に対応しています。', reading: 'Noiseは、しゅようなビジネスコミュニケーションツールとのシステムれんけいにたいおうしています。', romaji: 'Noise wa, shuyou na bijinesu komyunikeeshon tsuuru to no shisutemu renkei ni taiou shiteimasu.', note: 'Formal system integration description.' }
  },
  'jp-115': {
    simple:  { japanese: 'AIが大切なメッセージを選んで、先に見せてくれます。', reading: 'AIがたいせつなメッセージをえらんで、さきにみせてくれます。', romaji: 'AI ga taisetsu na messeeji o erande, saki ni misete kuremasu.', note: 'Very clear explanation.' },
    startup: { japanese: 'AIが重要な会話を優先して表示します。', reading: 'AIがじゅうようなかいわをゆうせんしてひょうじします。', romaji: 'AI ga juuyou na kaiwa o yuusen shite hyouji shimasu.', note: 'Clean feature description.' },
    formal:  { japanese: 'AI技術により、業務上重要なコミュニケーションを自動的に優先順位付けします。', reading: 'AIぎじゅつにより、ぎょうむじょうじゅうようなコミュニケーションをじどうてきにゆうせんじゅんいづけします。', romaji: 'AI gijutsu ni yori, gyoumu-jou juuyou na komyunikeeshon o jidou-teki ni yuusen jun-i-zuke shimasu.', note: 'Formal feature description.' }
  },
  'jp-116': {
    simple:  { japanese: '会話の内容をまとめて、次にやることを教えてくれます。', reading: 'かいわのないようをまとめて、つぎにやることをおしえてくれます。', romaji: 'Kaiwa no naiyou o matomete, tsugi ni yaru koto o oshiete kuremasu.', note: 'Very natural and clear.' },
    startup: { japanese: '会話を要約して、次のアクションを提案できます。', reading: 'かいわをようやくして、つぎのアクションをていあんできます。', romaji: 'Kaiwa o youyaku shite, tsugi no akushon o teian dekimasu.', note: 'Natural startup language.' },
    formal:  { japanese: '会話内容を自動で要約し、業務上の次のアクションを提案する機能を備えています。', reading: 'かいわないようをじどうでようやくし、ぎょうむじょうのつぎのアクションをていあんするきのうをそなえています。', romaji: 'Kaiwa naiyou o jidou de youyaku shi, gyoumu-jou no tsugi no akushon o teian suru kinou o sonaete imasu.', note: 'Formal feature spec.' }
  },
  'jp-117': {
    simple:  { japanese: '最初は個人ではなく、会社向けに作っています。', reading: 'さいしょはこじんではなく、かいしゃむけにつくっています。', romaji: 'Saisho wa kojin dewa naku, kaisha-muke ni tsukutteimasu.', note: 'Simple and direct.' },
    startup: { japanese: 'まず個人ユーザーより、企業をターゲットにしています。', reading: 'まずこじんユーザーより、きぎょうをターゲットにしています。', romaji: 'Mazu kojin yuuzaa yori, kigyou o taagetto ni shiteimasu.', note: 'Startup language.' },
    formal:  { japanese: '当初は個人利用者ではなく、法人顧客を主要ターゲットとして事業展開しています。', reading: 'とうしょはこじんりようしゃではなく、ほうじんこきゃくをしゅようターゲットとしてじぎょうてんかいしています。', romaji: 'Tousho wa kojin riyousha dewa naku, houjin kokyaku o shuyou taagetto to shite jigyou tenkai shiteimasu.', note: 'Very formal business strategy.' }
  },
  'jp-118': {
    simple:  { japanese: '本音で意見を言ってくれる協力者を探しています。', reading: 'ほんねでいけんをいってくれるきょうりょくしゃをさがしています。', romaji: 'Honne de iken o itte kureru kyouryokusha o sagashiteimasu.', note: 'Human and natural.' },
    startup: { japanese: '率直なフィードバックをくれるデザインパートナーを探しています。', reading: 'そっちょくなフィードバックをくれるデザインパートナーをさがしています。', romaji: 'Socchoku na fiidobakku o kureru dezain paatonaa o sagashiteimasu.', note: 'Standard startup partner language.' },
    formal:  { japanese: '実際にご使用いただき、率直なご意見をいただける協力企業を募集しています。', reading: 'じっさいにごしようしていただき、そっちょくなごいけんをいただけるきょうりょくきぎょうをぼしゅうしています。', romaji: 'Jissai ni go-shiyou shite itadaki, socchoku na go-iken o itadakeru kyouryoku kigyou o boshuu shiteimasu.', note: 'Formal business solicitation.' }
  },
  'jp-119': {
    simple:  { japanese: '将来は、現代の仕事全体を支えるサービスにしたいです。', reading: 'しょうらいは、げんだいのしごとぜんたいをささえるサービスにしたいです。', romaji: 'Shourai wa, gendai no shigoto zentai o sasaeru saabisu ni shitai desu.', note: 'Clear and human vision.' },
    startup: { japanese: '長期的なビジョンは、現代の仕事のためのオペレーティングシステムです。', reading: 'ちょうきてきなビジョンは、げんだいのしごとのためのオペレーティングシステムです。', romaji: 'Chouki-teki na bijon wa, gendai no shigoto no tame no opereetingu shisutemu desu.', note: 'Startup vision language.' },
    formal:  { japanese: '長期ビジョンとして、現代のビジネス環境を支える統合型業務基盤の構築を目指しています。', reading: 'ちょうきビジョンとして、げんだいのビジネスかんきょうをささえるとうごうがたぎょうむきばんのこうちくをめざしています。', romaji: 'Chouki bijon to shite, gendai no bijinesu kankyou o sasaeru tougou-gata gyoumu kiban no kouchiku o mezashiteimasu.', note: 'Very formal ambitious vision.' }
  },
  'jp-120': {
    simple:  { japanese: 'HTML、CSS、ジャバスクリプトでウェブページを作っています。', reading: 'HTML、CSS、ジャバスクリプトでウェブページをつくっています。', romaji: 'HTML, CSS, Jabasukuriputo de webu peeji o tsukutteimasu.', note: 'Spells out JavaScript in kana for clarity.' },
    startup: { japanese: 'HTML、CSS、JavaScriptでこれを作っています。', reading: 'HTML、CSS、JavaScriptでこれをつくっています。', romaji: 'HTML, CSS, JavaScript de kore o tsukutteimasu.', note: 'Direct and natural.' },
    formal:  { japanese: 'HTML、CSS、JavaScriptを使用してフロントエンド開発を行っています。', reading: 'HTML、CSS、JavaScriptをしようしてフロントエンドかいはつをおこなっています。', romaji: 'HTML, CSS, JavaScript o shiyou shite furonto-endo kaihatsu o okonatte imasu.', note: 'Technical formal.' }
  },
  'jp-121': {
    simple:  { japanese: 'サーバーを使わないウェブサイトです。', reading: 'サーバーをつかわないウェブサイトです。', romaji: 'Saabaa o tsukawanai webu saito desu.', note: 'Explains what static means in plain Japanese.' },
    startup: { japanese: 'スタティックなウェブサイトです。', reading: 'スタティックなウェブサイトです。', romaji: 'Sutatikku na webu saito desu.', note: 'Current version.' },
    formal:  { japanese: 'サーバーサイドの処理を必要としない静的ウェブサイトです。', reading: 'サーバーサイドのしょりをひつようとしないせいてきウェブサイトです。', romaji: 'Saabaa-saido no shori o hitsuyou to shinai seiteki webu saito desu.', note: 'Full technical formal.' }
  },
  'jp-122': {
    simple:  { japanese: '一度開けば、インターネットがなくても使えます。', reading: 'いちどひらけば、インターネットがなくてもつかえます。', romaji: 'Ichido hirakeba, intaanetto ga nakute mo tsukaemasu.', note: 'Very clear.' },
    startup: { japanese: '一度読み込めば、オフラインでも使えます。', reading: 'いちどよみこめば、オフラインでもつかえます。', romaji: 'Ichido yomikomeba, ofurain de mo tsukaemasu.', note: 'Natural and direct.' },
    formal:  { japanese: '初回アクセス後、インターネット接続がない環境でも動作可能です。', reading: 'しょかいアクセスご、インターネットせつぞくがないかんきょうでもどうさかのうです。', romaji: 'Shokai akusesu go, intaanetto setsuzoku ga nai kankyou de mo dousa kanou desu.', note: 'Technical formal.' }
  },
  'jp-125': {
    simple:  { japanese: 'AIを使って、もっと速く作れるようにしています。', reading: 'AIをつかって、もっとはやくつくれるようにしています。', romaji: 'AI o tsukatte, motto hayaku tsukureru you ni shiteimasu.', note: 'Simple and clear.' },
    startup: { japanese: 'AIツールを使って、開発スピードを上げています。', reading: 'AIツールをつかって、かいはつスピードをあげています。', romaji: 'AI tsuuru o tsukatte, kaihatsu supiido o ageteimasu.', note: 'Natural startup phrasing.' },
    formal:  { japanese: 'AI支援ツールを活用し、開発効率の向上を図っています。', reading: 'AIしえんツールをかつようし、かいはつこうりつのこうじょうをはかっています。', romaji: 'AI shien tsuuru o katsuyou shi, kaihatsu kouritsu no koujou o hakatte imasu.', note: 'Formal and precise.' }
  },
  'jp-129': {
    simple:  { japanese: 'インターネットを通じて月額などで使う業務用ソフトのことです。', reading: 'インターネットをつうじてげつがくなどでつかうぎょうむようソフトのことです。', romaji: 'Intaanetto o tsuujite getsugaku nado de tsukau gyoumuyou sofuto no koto desu.', note: 'Explains SaaS with subscription model.' },
    startup: { japanese: 'SaaSは、ネット上でサービスとして使うソフトウェアのことです。', reading: 'SaaSは、ネットじょうでサービスとしてつかうソフトウェアのことです。', romaji: 'SaaS wa, netto-jou de saabisu to shite tsukau sofutowea no koto desu.', note: 'Cleaner startup explanation.' },
    formal:  { japanese: 'SaaSとは、クラウド上でサービスとして提供されるソフトウェアの総称です。', reading: 'SaaSとは、クラウドじょうでサービスとしてていきょうされるソフトウェアのそうしょうです。', romaji: 'SaaS wa, kuraudo-jou de saabisu to shite teikyou sareru sofutowea no soushou desu.', note: 'Formal textbook definition.' }
  },
  'jp-130': {
    simple:  { japanese: 'サービスはまだ始まったばかりなので、使う人の意見がとても大切です。', reading: 'サービスはまだはじまったばかりなので、つかうひとのいけんがとてもたいせつです。', romaji: 'Saabisu wa mada hajimatta bakari nanode, tsukau hito no iken ga totemo taisetsu desu.', note: 'Very natural.' },
    startup: { japanese: 'プロダクトはまだ初期段階なので、ユーザーのフィードバックが非常に重要です。', reading: 'プロダクトはまだしょきだんかいなので、ユーザーのフィードバックがひじょうにじゅうようです。', romaji: 'Purodakuto wa mada shoki dankai nanode, yuuzaa no fiidobakku ga hijou ni juuyou desu.', note: 'Startup language.' },
    formal:  { japanese: '現在はサービス開発の初期段階にあるため、お客様からのご意見を最優先としています。', reading: 'げんざいはサービスかいはつのしょきだんかいにあるため、おきゃくさまからのごいけんをさいゆうせんとしています。', romaji: 'Genzai wa saabisu kaihatsu no shoki dankai ni aru tame, okyakusama kara no go-iken o saiyuusen to shiteimasu.', note: 'Formal/keigo — very respectful.' }
  },
  'jp-131': {
    simple:  { japanese: 'まず実際に使う人にアイデアを試してもらっています。', reading: 'まずじっさいにつかうひとにアイデアをためしてもらっています。', romaji: 'Mazu jissai ni tsukau hito ni aidea o tameshite moratte imasu.', note: 'Simple and honest.' },
    startup: { japanese: 'まず実際のユーザーとアイデアの検証をしています。', reading: 'まずじっさいのユーザーとアイデアのけんしょうをしています。', romaji: 'Mazu jissai no yuuzaa to aidea no kenshou o shiteimasu.', note: 'Startup language.' },
    formal:  { japanese: 'まず実際のお客様を対象に、サービス仮説の検証を行っています。', reading: 'まずじっさいのおきゃくさまをたいしょうに、サービスかせつのけんしょうをおこなっています。', romaji: 'Mazu jissai no okyakusama o taishou ni, saabisu kasetsu no kenshou o okonatte imasu.', note: 'Formal business Japanese.' }
  },
  'jp-132': {
    simple:  { japanese: '一番大切な問いは、本当に使う人がこれを必要とするかどうかです。', reading: 'いちばんたいせつなといは、ほんとうにつかうひとがこれをひつようとするかどうかです。', romaji: 'Ichiban taisetsu na toi wa, hontou ni tsukau hito ga kore o hitsuyou to suru ka dou ka desu.', note: 'Very natural.' },
    startup: { japanese: '最も重要な問いは、ユーザーが本当にこれを必要としているかどうかです。', reading: 'もっともじゅうようなといは、ユーザーがほんとうにこれをひつようとしているかどうかです。', romaji: 'Mottomo juuyou na toi wa, yuuzaa ga hontou ni kore o hitsuyou to shiteiru ka dou ka desu.', note: 'Better phrasing for startup context.' },
    formal:  { japanese: '最重要課題は、このサービスに対する実際のニーズを検証することです。', reading: 'さいじゅうようかだいは、このサービスにたいするじっさいのニーズをけんしょうすることです。', romaji: 'Saijuuyou kadai wa, kono saabisu ni taisuru jissai no niizu o kenshou suru koto desu.', note: 'Formal.' }
  },
  'jp-133': {
    simple:  { japanese: 'サービスが完成する前に、興味を持つ人がいるか確かめるためのページです。', reading: 'サービスがかんせいするまえに、きょうみをもつひとがいるかたしかめるためのページです。', romaji: 'Saabisu ga kansei suru mae ni, kyoumi o motsu hito ga iru ka tashikameru tame no peeji desu.', note: 'Clear purpose.' },
    startup: { japanese: 'ランディングページで、ローンチ前にユーザーの関心を確認します。', reading: 'ランディングページで、ローンチまえにユーザーのかんしんをかくにんします。', romaji: 'Randingu peeji de, roonchi mae ni yuuzaa no kanshin o kakunin shimasu.', note: 'Startup language.' },
    formal:  { japanese: '製品リリース前に、潜在顧客の関心度を測定するための紹介ページを設置しています。', reading: 'せいひんリリースまえに、せんざいこきゃくのかんしんどをそくていするためのしょうかいページをせっちしています。', romaji: 'Seihin rirriisu mae ni, senzai kokyaku no kanshin-do o sokuteisuru tame no shoukai peeji o secchi shiteimasu.', note: 'Formal product management language.' }
  },
  'jp-134': {
    simple:  { japanese: '申し込んでくれた人の数で、どれくらい人気があるか測っています。', reading: 'もうしこんでくれたひとのかずで、どれくらいにんきがあるかはかっています。', romaji: 'Moushikonde kureta hito no kazu de, dore kurai ninki ga aru ka hakatte imasu.', note: 'Very plain.' },
    startup: { japanese: '事前登録数で関心の強さを測っています。', reading: 'じぜんとうろくすうでかんしんのつよさをはかっています。', romaji: 'Jizen touroku-suu de kanshin no tsuyosa o hakatte imasu.', note: 'Clean startup metric.' },
    formal:  { japanese: '事前登録申込数を指標として、潜在顧客の需要を定量的に測定しています。', reading: 'じぜんとうろくもうしこみすうをしひょうとして、せんざいこきゃくのじゅようをていりょうてきにそくていしています。', romaji: 'Jizen touroku moushikomi-suu o shihyou to shite, senzai kokyaku no juyou o teiryou-teki ni sokuteishiteimasu.', note: 'Very formal metric description.' }
  },
  'jp-135': {
    simple:  { japanese: '最初に作るものは、必要な機能だけで十分です。', reading: 'さいしょにつくるものは、ひつようなきのうだけでじゅうぶんです。', romaji: 'Saisho ni tsukuru mono wa, hitsuyou na kinou dake de juubun desu.', note: 'Clear and simple.' },
    startup: { japanese: '最初のバージョンには、すべての機能は必要ありません。', reading: 'さいしょのバージョンには、すべてのきのうはひつようありません。', romaji: 'Saisho no baajon ni wa, subete no kinou wa hitsuyou arimasen.', note: 'Natural startup MVP mindset.' },
    formal:  { japanese: '初期バージョンにおいては、最小限の機能実装で十分です。', reading: 'しょきバージョンにおいては、さいしょうげんのきのうじっそうでじゅうぶんです。', romaji: 'Shoki baajon ni oite wa, saishougen no kinou jissou de juubun desu.', note: 'Formal MVP principle.' }
  },
  'jp-136': {
    simple:  { japanese: 'まず一番シンプルで役に立つものから作ることが大切です。', reading: 'まずいちばんシンプルでやくにたつものからつくることがたいせつです。', romaji: 'Mazu ichiban shinpuru de yaku ni tatsu mono kara tsukuru koto ga taisetsu desu.', note: 'Very clear.' },
    startup: { japanese: 'まず最小限の機能で動く版を作ることが重要です。', reading: 'まずさいしょうげんのきのうでうごくばんをつくることがじゅうようです。', romaji: 'Mazu saishougen no kinou de ugoku ban o tsukuru koto ga juuyou desu.', note: 'MVP concept in startup language.' },
    formal:  { japanese: 'まず最小実行可能製品（MVP）の開発から着手することが重要です。', reading: 'まずさいしょうじっこうかのうせいひん（MVP）のかいはつからちゃくしゅすることがじゅうようです。', romaji: 'Mazu saishou jikkou kanou seihin (MVP) no kaihatsu kara chakushu suru koto ga juuyou desu.', note: 'Formal with MVP term explained.' }
  },
  'jp-139': {
    simple:  { japanese: 'どんなお仕事をされていますか？', reading: 'どんなおしごとをされていますか？', romaji: 'Donna oshigoto o sarete imasu ka?', note: 'Very polite — ideal for first meeting.' },
    startup: { japanese: 'どんなお仕事をしていますか？', reading: 'どんなおしごとをしていますか？', romaji: 'Donna oshigoto o shiteimasu ka?', note: 'Natural polite inquiry.' },
    formal:  { japanese: 'どのようなお仕事をされているのでしょうか？', reading: 'どのようなおしごとをされているのでしょうか？', romaji: 'Dono you na oshigoto o sarete iru no deshou ka?', note: 'Very polite formal inquiry.' }
  },
  'jp-143': {
    simple:  { japanese: '仕事でどんなツールを使っていますか？', reading: 'しごとでどんなツールをつかっていますか？', romaji: 'Shigoto de donna tsuuru o tsukatte imasu ka?', note: 'Simple and natural.' },
    startup: { japanese: '仕事ではどんなツールを使っていますか？', reading: 'しごとではどんなツールをつかっていますか？', romaji: 'Shigoto dewa donna tsuuru o tsukatte imasu ka?', note: 'Current version.' },
    formal:  { japanese: '業務ではどのようなツールをご使用されていますか？', reading: 'ぎょうむではどのようなツールをごしようされていますか？', romaji: 'Gyoumu dewa dono you na tsuuru o go-shiyou sarete imasu ka?', note: 'Formal and polite.' }
  },
  'jp-144': {
    simple:  { japanese: '仕事の中で、一番困っていることは何ですか？', reading: 'しごとのなかで、いちばんこまっていることはなんですか？', romaji: 'Shigoto no naka de, ichiban komatte iru koto wa nan desu ka?', note: 'Very human and approachable.' },
    startup: { japanese: '仕事の流れで、一番大きな問題は何ですか？', reading: 'しごとのながれで、いちばんおおきなもんだいはなんですか？', romaji: 'Shigoto no nagare de, ichiban ookina mondai wa nan desu ka?', note: 'Current version.' },
    formal:  { japanese: '業務プロセスにおける最大の課題は何でしょうか？', reading: 'ぎょうむプロセスにおけるさいだいのかだいはなんでしょうか？', romaji: 'Gyoumu purosesu ni okeru saidai no kadai wa nan deshou ka?', note: 'Very formal discovery question.' }
  },
  'jp-145': {
    simple:  { japanese: '仕事について、少し聞いてもいいですか？', reading: 'しごとについて、すこしきいてもいいですか？', romaji: 'Shigoto ni tsuite, sukoshi kiite mo ii desu ka?', note: 'Natural and simple.' },
    startup: { japanese: '仕事について、いくつか質問してもいいですか？', reading: 'しごとについて、いくつかしつもんしてもいいですか？', romaji: 'Shigoto ni tsuite, ikutsuka shitsumon shite mo ii desu ka?', note: 'Current version.' },
    formal:  { japanese: 'お仕事について、いくつかお聞きしてもよろしいでしょうか？', reading: 'おしごとについて、いくつかおききしてもよろしいでしょうか？', romaji: 'Oshigoto ni tsuite, ikutsuka okiki shite mo yoroshii deshou ka?', note: 'Very polite formal.' }
  },
  'jp-146': {
    simple:  { japanese: 'その意見、とても助かります。', reading: 'そのいけん、とてもたすかります。', romaji: 'Sono iken, totemo tasukarimasu.', note: 'Very natural — uses 意見 for feedback.' },
    startup: { japanese: 'そのフィードバックはとても助かります。', reading: 'そのフィードバックはとてもたすかります。', romaji: 'Sono fiidobakku wa totemo tasukarimasu.', note: 'Current version.' },
    formal:  { japanese: '貴重なご意見をいただき、大変ありがとうございます。', reading: 'きちょうなごいけんをいただき、たいへんありがとうございます。', romaji: 'Kichou na go-iken o itadaki, taihen arigatou gozaimasu.', note: 'Very formal thank you for feedback.' }
  },
  'jp-147': {
    simple:  { japanese: '少しだけ見てもらえますか？', reading: 'すこしだけみてもらえますか？', romaji: 'Sukoshi dake mite moraemasu ka?', note: 'Natural and simple.' },
    startup: { japanese: '簡単なデモを見せてもいいですか？', reading: 'かんたんなデモをみせてもいいですか？', romaji: 'Kantan na demo o misete mo ii desu ka?', note: 'Current version.' },
    formal:  { japanese: '少々お時間をいただいて、デモをご覧いただけますか？', reading: 'しょうしょうおじかんをいただいて、デモをごらんいただけますか？', romaji: 'Shoushou ojikan o itadaite, demo o go-ran itadakemasu ka?', note: 'Formal demo request.' }
  },
  'jp-148': {
    simple:  { japanese: '正直なところ、どう思いますか？', reading: 'しょうじきなところ、どうおもいますか？', romaji: 'Shoujiki na tokoro, dou omoimasu ka?', note: 'Direct and human.' },
    startup: { japanese: '率直なご意見を聞かせてください。', reading: 'そっちょくなごいけんをきかせてください。', romaji: 'Socchoku na go-iken o kikasete kudasai.', note: 'Natural startup phrasing.' },
    formal:  { japanese: '忌憚のないご意見をお聞かせいただけますか？', reading: 'きたんのないごいけんをおきかせいただけますか？', romaji: 'Kitan no nai go-iken o okikase itadakemasu ka?', note: 'Very formal — standard business feedback request.' }
  },
  'jp-150': {
    simple:  { japanese: 'お客さんの意見をもとに、サービスをよくしています。', reading: 'おきゃくさんのいけんをもとに、サービスをよくしています。', romaji: 'Okyakusan no iken o moto ni, saabisu o yoku shiteimasu.', note: 'Very natural.' },
    startup: { japanese: 'ユーザーのフィードバックをもとに、改善しています。', reading: 'ユーザーのフィードバックをもとに、かいぜんしています。', romaji: 'Yuuzaa no fiidobakku o moto ni, kaizen shiteimasu.', note: 'Current version.' },
    formal:  { japanese: 'お客様のご意見をもとに、継続的にサービスの改善を行っています。', reading: 'おきゃくさまのごいけんをもとに、けいぞくてきにサービスのかいぜんをおこなっています。', romaji: 'Okyakusama no go-iken o moto ni, keizoku-teki ni saabisu no kaizen o okonatte imasu.', note: 'Formal commitment statement.' }
  },
  'jp-151': {
    simple:  { japanese: '連絡先を教えてもらえますか？', reading: 'れんらくさきをおしえてもらえますか？', romaji: 'Renrakusaki o oshiete moraemasu ka?', note: 'Direct and natural.' },
    startup: { japanese: '今後も連絡を取り合えますか？', reading: 'こんごもれんらくをとりあえますか？', romaji: 'Kongo mo renraku o tori-aemasu ka?', note: 'Natural follow-up.' },
    formal:  { japanese: '今後ともご連絡をいただけますと幸いです。', reading: 'こんごともごれんらくをいただけますとさいわいです。', romaji: 'Kongo tomo go-renraku o itadakemasu to saiwai desu.', note: 'Very formal and polite closing.' }
  },
  'jp-152': {
    simple:  { japanese: 'あとでサイトのリンクを送ってもいいですか？', reading: 'あとでサイトのリンクをおくってもいいですか？', romaji: 'Ato de saito no rinku o okutte mo ii desu ka?', note: 'Simple and direct.' },
    startup: { japanese: 'あとでリンクをお送りしてもいいですか？', reading: 'あとでリンクをおおくりしてもいいですか？', romaji: 'Ato de rinku o o-okuri shite mo ii desu ka?', note: 'Slightly more polite.' },
    formal:  { japanese: '後ほど詳細をメールにてお送りしてもよろしいでしょうか？', reading: 'のちほどしょうさいをメールにておおくりしてもよろしいでしょうか？', romaji: 'Nochihodo shousai o meeru nite o-okuri shite mo yoroshii deshou ka?', note: 'Formal follow-up.' }
  },
  'jp-153': {
    simple:  { japanese: '時間を取ってくれてありがとうございます。', reading: 'じかんをとってくれてありがとうございます。', romaji: 'Jikan o totte kurete arigatou gozaimasu.', note: 'Warm and human.' },
    startup: { japanese: 'お時間ありがとうございました。', reading: 'おじかんありがとうございました。', romaji: 'Ojikan arigatou gozaimashita.', note: 'Current version — already natural.' },
    formal:  { japanese: '本日はお忙しい中、お時間をいただき誠にありがとうございました。', reading: 'ほんじつはおいそがしいなか、おじかんをいただきまことにありがとうございました。', romaji: 'Honjitsu wa oisogashii naka, ojikan o itadaki makoto ni arigatou gozaimashita.', note: 'Very formal business close.' }
  }
};

// ============ APP STATE ============

const State = {
  allPhrases: [],
  customPhrases: [],
  favorites: new Set(),
  reviewStats: {},
  settings: { showKanji: true, showRomaji: true, largeText: false },
  currentView: 'home',
  personalFilter: 'all',
  businessFilter: 'all',
  practiceConfig: { mode: 'en-to-jp', filter: 'all', category: '' },
  practiceSession: { deck: [], index: 0, revealed: false, againCount: 0, goodCount: 0, easyCount: 0 },
  businessLevel: 'simple'
};

// ============ STORAGE ============

function saveToStorage() {
  try {
    localStorage.setItem('jpk_custom', JSON.stringify(State.customPhrases));
    localStorage.setItem('jpk_favorites', JSON.stringify([...State.favorites]));
    localStorage.setItem('jpk_stats', JSON.stringify(State.reviewStats));
    localStorage.setItem('jpk_settings', JSON.stringify(State.settings));
    localStorage.setItem('jpk_biz_level', State.businessLevel);
  } catch(e) { console.warn('Storage save failed', e); }
}

function loadFromStorage() {
  try {
    const custom = localStorage.getItem('jpk_custom');
    if (custom) State.customPhrases = JSON.parse(custom);
    const favs = localStorage.getItem('jpk_favorites');
    if (favs) State.favorites = new Set(JSON.parse(favs));
    const stats = localStorage.getItem('jpk_stats');
    if (stats) State.reviewStats = JSON.parse(stats);
    const settings = localStorage.getItem('jpk_settings');
    if (settings) State.settings = { ...State.settings, ...JSON.parse(settings) };
    const bizLevel = localStorage.getItem('jpk_biz_level');
    if (bizLevel) State.businessLevel = bizLevel;
  } catch(e) { console.warn('Storage load failed', e); }
}

// ============ DATA LOADING ============

async function loadData() {
  loadFromStorage();
  let seedPhrases = SEED_PHRASES;
  try {
    const res = await fetch('./japan_phrase_kit_seed.json');
    if (res.ok) {
      const data = await res.json();
      if (data.phrases && Array.isArray(data.phrases)) {
        seedPhrases = data.phrases;
      }
    }
  } catch(e) {
    // Offline or local file — use embedded seed
  }
  // Merge seed + custom, avoiding duplicates
  const seedIds = new Set(seedPhrases.map(p => p.id));
  const uniqueCustom = State.customPhrases.filter(p => !seedIds.has(p.id));
  State.allPhrases = [...seedPhrases, ...uniqueCustom];
  // Attach business level data
  State.allPhrases.forEach(p => {
    if (BUSINESS_LEVELS[p.id]) p.businessLevels = BUSINESS_LEVELS[p.id];
  });
  return State.allPhrases;
}

function getAllPhrases() {
  return State.allPhrases;
}

function getPhrase(id) {
  return State.allPhrases.find(p => p.id === id);
}

function isCustomPhrase(id) {
  return State.customPhrases.some(p => p.id === id);
}

// ============ SEARCH & FILTER ============

function searchPhrases(query, phrases) {
  if (!query || query.trim() === '') return phrases;
  const q = query.toLowerCase().trim();
  return phrases.filter(p =>
    (p.english && p.english.toLowerCase().includes(q)) ||
    (p.hiragana && p.hiragana.includes(q)) ||
    (p.romaji && p.romaji.toLowerCase().includes(q)) ||
    (p.kanji && p.kanji.includes(q)) ||
    (p.notes && p.notes.toLowerCase().includes(q)) ||
    (p.category && p.category.toLowerCase().includes(q)) ||
    (p.section && p.section.toLowerCase().includes(q)) ||
    (p.politeness && p.politeness.toLowerCase().includes(q)) ||
    (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
  );
}

function filterPhrases(filter, phrases) {
  if (filter === 'all' || !filter) return phrases;
  if (filter === 'favorites') return phrases.filter(p => State.favorites.has(p.id));
  if (filter.startsWith('category:')) {
    const cat = filter.slice(9);
    return phrases.filter(p => p.category === cat);
  }
  if (filter === 'Personal' || filter === 'Business') {
    return phrases.filter(p => p.section === filter);
  }
  return phrases;
}

// ============ PHRASE CARD RENDERING ============

function cap(s) { return s ? s[0].toUpperCase() + s.slice(1) : ''; }

function createPhraseCard(phrase) {
  const isCustom = isCustomPhrase(phrase.id);
  const isFav = State.favorites.has(phrase.id);
  const card = document.createElement('div');
  card.className = 'phrase-card' + (isFav ? ' favorited' : '');
  card.dataset.id = phrase.id;

  const hasLevels = phrase.section === 'Business' && phrase.businessLevels;
  const sectionClass = phrase.section === 'Personal' ? 'badge-personal' : 'badge-business';
  const tags = Array.isArray(phrase.tags) ? phrase.tags : [];
  const japaneseHidden = !State.settings.showKanji ? 'hidden-setting' : '';
  const romajiHidden = !State.settings.showRomaji ? 'hidden-setting' : '';

  // Pick display content based on active level (or fall back to base phrase fields)
  let dispJapanese, dispReading, dispRomaji, dispNote;
  if (hasLevels) {
    const lvl = State.businessLevel || 'simple';
    const ld = phrase.businessLevels[lvl] || phrase.businessLevels.simple || {};
    dispJapanese = ld.japanese || phrase.kanji || '';
    dispReading  = ld.reading  || phrase.hiragana || '';
    dispRomaji   = ld.romaji   || phrase.romaji || '';
    dispNote     = ld.note     || phrase.notes || '';
  } else {
    dispJapanese = phrase.kanji || '';
    dispReading  = phrase.hiragana || '';
    dispRomaji   = phrase.romaji || '';
    dispNote     = phrase.notes || '';
  }

  const levelBadge = hasLevels
    ? `<span class="badge badge-level">${cap(State.businessLevel || 'simple')}</span>`
    : '';

  // Build "Show all levels" panel for business phrases
  let altHtml = '';
  if (hasLevels) {
    const levelDefs = [
      { key: 'simple',  label: 'Simple' },
      { key: 'startup', label: 'Startup' },
      { key: 'formal',  label: 'Formal' }
    ];
    const rows = levelDefs.map(({ key, label }) => {
      const d = phrase.businessLevels[key];
      if (!d) return '';
      return `<div class="alt-level">
        <div class="alt-level-label">${label}</div>
        <div class="alt-japanese">${escHtml(d.japanese)}</div>
        <div class="alt-reading">${escHtml(d.reading)}</div>
        <div class="alt-romaji">${escHtml(d.romaji)}</div>
        ${d.note ? `<div class="alt-note">${escHtml(d.note)}</div>` : ''}
      </div>`;
    }).join('');
    altHtml = `
      <button class="show-alt-btn">Show all levels ▼</button>
      <div class="alt-panel hidden">${rows}</div>`;
  }

  card.innerHTML = `
    <div class="card-meta">
      <span class="badge ${sectionClass}">${phrase.section}</span>
      <span class="badge badge-category">${phrase.category}</span>
      ${phrase.politeness ? `<span class="badge badge-politeness">${phrase.politeness}</span>` : ''}
      ${levelBadge}
      ${isCustom ? '<span class="badge badge-custom">My Phrase</span>' : ''}
    </div>
    <div class="card-english">${escHtml(phrase.english)}</div>
    ${dispJapanese && dispJapanese !== dispReading
      ? `<div class="card-japanese ${japaneseHidden}">${escHtml(dispJapanese)}</div>`
      : ''}
    <div class="card-reading">${escHtml(dispReading)}</div>
    <div class="card-romaji ${romajiHidden}">${escHtml(dispRomaji)}</div>
    ${dispNote ? `<div class="card-notes">${escHtml(dispNote)}</div>` : ''}
    ${tags.length ? `<div class="card-tags">${tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join('')}</div>` : ''}
    ${altHtml}
    <div class="card-actions">
      <button class="card-action-btn btn-fav ${isFav ? 'fav-active' : ''}" data-action="fav" data-id="${phrase.id}" aria-label="Favorite">
        <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        ${isFav ? 'Saved' : 'Save'}
      </button>
      <button class="card-action-btn btn-copy" data-action="copy" data-id="${phrase.id}" aria-label="Copy">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copy
      </button>
      <button class="card-action-btn btn-practice-phrase" data-action="practice-one" data-id="${phrase.id}" aria-label="Practice">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>
        Practice
      </button>
      ${isCustom ? `
      <button class="card-action-btn btn-edit" data-action="edit" data-id="${phrase.id}" aria-label="Edit">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        Edit
      </button>
      <button class="card-action-btn btn-delete" data-action="delete" data-id="${phrase.id}" aria-label="Delete">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
        Delete
      </button>` : ''}
    </div>
  `;
  return card;
}

function renderPhraseList(phrases, container) {
  container.innerHTML = '';
  if (!phrases.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">日</div><div class="empty-state-text">No phrases found.<br>Try a different search or filter.</div></div>`;
    return;
  }
  const frag = document.createDocumentFragment();
  phrases.forEach(p => frag.appendChild(createPhraseCard(p)));
  container.appendChild(frag);
}

// ============ NAVIGATION ============

function navigate(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById('view-' + view);
  if (target) { target.classList.add('active'); target.scrollTop = 0; }
  const navBtn = document.querySelector(`.nav-btn[data-view="${view}"]`);
  if (navBtn) navBtn.classList.add('active');
  State.currentView = view;

  if (view === 'personal') renderSectionView('personal');
  if (view === 'business') renderSectionView('business');
  if (view === 'settings') updateSettingsInfo();
  if (view === 'home') updateHomeStats();
}

// ============ SECTION VIEWS ============

function renderSectionView(section) {
  const sectionCap = section === 'personal' ? 'Personal' : 'Business';
  const phrases = getAllPhrases().filter(p => p.section === sectionCap);
  const filter = section === 'personal' ? State.personalFilter : State.businessFilter;
  const searchEl = document.getElementById(section + '-search');
  const query = searchEl ? searchEl.value : '';
  let filtered = filterPhrases(filter, phrases);
  filtered = searchPhrases(query, filtered);
  renderPhraseList(filtered, document.getElementById(section + '-phrase-list'));
}

// ============ HOME VIEW ============

function updateHomeStats() {
  const all = getAllPhrases();
  const personal = all.filter(p => p.section === 'Personal');
  const business = all.filter(p => p.section === 'Business');
  const favs = all.filter(p => State.favorites.has(p.id));
  document.getElementById('stat-total').textContent = all.length;
  document.getElementById('stat-personal').textContent = personal.length;
  document.getElementById('stat-business').textContent = business.length;
  document.getElementById('stat-favorites').textContent = favs.length;
}

function initHomeSearch() {
  const input = document.getElementById('home-search');
  const results = document.getElementById('home-search-results');
  const stats = document.getElementById('home-stats');
  const quickGrid = document.querySelector('.quick-grid');
  const continueBtn = document.querySelector('.continue-btn');

  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (!q) {
      results.classList.add('hidden');
      stats.style.display = '';
      quickGrid.style.display = '';
      continueBtn.style.display = '';
      return;
    }
    stats.style.display = 'none';
    quickGrid.style.display = 'none';
    continueBtn.style.display = 'none';
    results.classList.remove('hidden');
    const found = searchPhrases(q, getAllPhrases());
    renderPhraseList(found, results);
  });
}

// ============ ADD PHRASE ============

function generateId() {
  return 'custom-' + Date.now() + '-' + Math.random().toString(36).slice(2,7);
}

function openAddForm(phraseToEdit) {
  navigate('add');
  const form = document.getElementById('add-phrase-form');
  form.reset();
  document.getElementById('edit-phrase-id').value = '';
  document.getElementById('form-submit-btn').textContent = 'Save Phrase';
  document.getElementById('form-error').classList.add('hidden');
  document.querySelector('.view-title').textContent = 'Add Phrase';

  if (phraseToEdit) {
    document.getElementById('edit-phrase-id').value = phraseToEdit.id;
    document.getElementById('form-section').value = phraseToEdit.section || '';
    document.getElementById('form-english').value = phraseToEdit.english || '';
    document.getElementById('form-hiragana').value = phraseToEdit.hiragana || '';
    document.getElementById('form-romaji').value = phraseToEdit.romaji || '';
    document.getElementById('form-kanji').value = phraseToEdit.kanji || '';
    document.getElementById('form-category').value = phraseToEdit.category || '';
    document.getElementById('form-notes').value = phraseToEdit.notes || '';
    document.getElementById('form-tags').value = Array.isArray(phraseToEdit.tags) ? phraseToEdit.tags.join(', ') : '';
    document.getElementById('form-politeness').value = phraseToEdit.politeness || '';
    document.getElementById('form-submit-btn').textContent = 'Update Phrase';
    document.querySelector('.view-title').textContent = 'Edit Phrase';
  }
}

function handleAddSubmit(e) {
  e.preventDefault();
  const errEl = document.getElementById('form-error');
  errEl.classList.add('hidden');

  const section = document.getElementById('form-section').value.trim();
  const english = document.getElementById('form-english').value.trim();
  const hiragana = document.getElementById('form-hiragana').value.trim();
  const romaji = document.getElementById('form-romaji').value.trim();
  const kanji = document.getElementById('form-kanji').value.trim();
  const category = document.getElementById('form-category').value.trim();
  const notes = document.getElementById('form-notes').value.trim();
  const tagsRaw = document.getElementById('form-tags').value.trim();
  const politeness = document.getElementById('form-politeness').value;

  const errors = [];
  if (!section) errors.push('Section is required.');
  if (!english) errors.push('English meaning is required.');
  if (!hiragana) errors.push('Hiragana is required.');
  if (!romaji) errors.push('Romaji is required.');
  if (!category) errors.push('Category is required.');
  if (!politeness) errors.push('Politeness level is required.');

  if (errors.length) {
    errEl.textContent = errors.join(' ');
    errEl.classList.remove('hidden');
    return;
  }

  const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
  const editId = document.getElementById('edit-phrase-id').value;

  if (editId) {
    const idx = State.customPhrases.findIndex(p => p.id === editId);
    if (idx >= 0) {
      State.customPhrases[idx] = { ...State.customPhrases[idx], section, english, hiragana, romaji, kanji, category, notes, tags, politeness };
      const allIdx = State.allPhrases.findIndex(p => p.id === editId);
      if (allIdx >= 0) State.allPhrases[allIdx] = State.customPhrases[idx];
    }
    showToast('Phrase updated.');
  } else {
    const newPhrase = { id: generateId(), section, english, hiragana, romaji, kanji, category, notes, tags, politeness, created_at: new Date().toISOString().slice(0,10) };
    State.customPhrases.push(newPhrase);
    State.allPhrases.push(newPhrase);
    showToast('Phrase saved.');
  }

  saveToStorage();
  updateHomeStats();
  document.getElementById('add-phrase-form').reset();
  navigate(section.toLowerCase());
}

// ============ FAVORITES ============

function toggleFavorite(id) {
  if (State.favorites.has(id)) {
    State.favorites.delete(id);
    showToast('Removed from favorites.');
  } else {
    State.favorites.add(id);
    showToast('Added to favorites.');
  }
  saveToStorage();
  updateHomeStats();
  // Re-render current section
  if (State.currentView === 'personal') renderSectionView('personal');
  if (State.currentView === 'business') renderSectionView('business');
}

// ============ COPY ============

function copyPhrase(id) {
  const p = getPhrase(id);
  if (!p) return;
  const text = `${p.english}\n${p.hiragana}\n${p.romaji}${p.kanji && p.kanji !== p.hiragana ? '\n' + p.kanji : ''}${p.notes ? '\nNote: ' + p.notes : ''}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard.'));
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied to clipboard.');
  }
}

// ============ DELETE ============

function deletePhrase(id) {
  showConfirm('Delete this phrase? This cannot be undone.', () => {
    State.customPhrases = State.customPhrases.filter(p => p.id !== id);
    State.allPhrases = State.allPhrases.filter(p => p.id !== id);
    State.favorites.delete(id);
    delete State.reviewStats[id];
    saveToStorage();
    updateHomeStats();
    if (State.currentView === 'personal') renderSectionView('personal');
    if (State.currentView === 'business') renderSectionView('business');
    showToast('Phrase deleted.');
  });
}

// ============ CARD ACTION DELEGATION ============

function handleCardAction(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const { action, id } = btn.dataset;
  if (action === 'fav') toggleFavorite(id);
  else if (action === 'copy') copyPhrase(id);
  else if (action === 'edit') { const p = getPhrase(id); if (p) openAddForm(p); }
  else if (action === 'delete') deletePhrase(id);
  else if (action === 'practice-one') startPracticeWith([id]);
}

// ============ PRACTICE ============

function getPracticeDeck(config) {
  let phrases = getAllPhrases();
  if (config.filter === 'Personal' || config.filter === 'Business') {
    phrases = phrases.filter(p => p.section === config.filter);
  } else if (config.filter === 'favorites') {
    phrases = phrases.filter(p => State.favorites.has(p.id));
  }
  if (config.category) {
    phrases = phrases.filter(p => p.category === config.category);
  }
  // Shuffle
  return [...phrases].sort(() => Math.random() - 0.5);
}

function startPracticeWith(ids) {
  const deck = ids.map(id => getPhrase(id)).filter(Boolean);
  State.practiceSession = { deck, index: 0, revealed: false, againCount: 0, goodCount: 0, easyCount: 0 };
  navigate('practice');
  showPracticeSession();
}

function startPractice() {
  const mode = document.querySelector('input[name="practice-mode"]:checked').value;
  const filter = document.querySelector('input[name="practice-filter"]:checked').value;
  const category = document.getElementById('practice-category-select').value;
  const bizLevelEl = document.querySelector('input[name="practice-biz-level"]:checked');
  if (bizLevelEl) {
    State.businessLevel = bizLevelEl.value;
    saveToStorage();
    // Sync the level bar buttons
    document.querySelectorAll('.biz-level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === State.businessLevel));
    const descEl = document.getElementById('biz-level-desc');
    const bizLevelDescs = { simple: 'Simple — everyday plain Japanese, easy for any speaker', startup: 'Startup — natural katakana-heavy tech wording', formal: 'Formal — mature business Japanese with kanji and native terms' };
    if (descEl) descEl.textContent = bizLevelDescs[State.businessLevel] || '';
  }
  State.practiceConfig = { mode, filter, category };
  const deck = getPracticeDeck(State.practiceConfig);
  if (!deck.length) { showToast('No phrases match these settings.'); return; }
  State.practiceSession = { deck, index: 0, revealed: false, againCount: 0, goodCount: 0, easyCount: 0 };
  showPracticeSession();
}

function showPracticeSession() {
  document.getElementById('practice-setup').classList.add('hidden');
  document.getElementById('practice-complete').classList.add('hidden');
  document.getElementById('practice-session').classList.remove('hidden');
  showCurrentCard();
}

function showCurrentCard() {
  const { deck, index } = State.practiceSession;
  const total = deck.length;
  const phrase = deck[index];
  const mode = State.practiceConfig.mode || 'en-to-jp';

  document.getElementById('practice-progress-fill').style.width = ((index / total) * 100) + '%';
  document.getElementById('practice-counter').textContent = `${index + 1} / ${total}`;

  document.getElementById('flashcard-front').classList.remove('hidden');
  document.getElementById('flashcard-back').classList.add('hidden');
  document.getElementById('rating-buttons').classList.add('hidden');

  let promptLabel = 'English';
  let promptText = phrase.english;
  if (mode === 'hira-to-en') { promptLabel = 'Hiragana'; promptText = phrase.hiragana; }
  if (mode === 'romaji-to-en') { promptLabel = 'Romaji'; promptText = phrase.romaji; }

  document.getElementById('prompt-label').textContent = promptLabel;
  document.getElementById('prompt-text').textContent = promptText;

  // Pick level-aware answer content
  const levelData = (phrase.section === 'Business' && phrase.businessLevels)
    ? (phrase.businessLevels[State.businessLevel] || phrase.businessLevels.simple || null)
    : null;
  const ansJapanese = levelData ? levelData.japanese : (phrase.kanji && phrase.kanji !== phrase.hiragana ? phrase.kanji : '');
  const ansReading  = levelData ? levelData.reading  : phrase.hiragana;
  const ansRomaji   = levelData ? levelData.romaji   : phrase.romaji;
  const ansNotes    = levelData ? (levelData.note || '') : (phrase.notes || '');

  document.getElementById('answer-english').textContent = mode !== 'en-to-jp' ? phrase.english : '';
  document.getElementById('answer-english').style.display = mode !== 'en-to-jp' ? '' : 'none';
  document.getElementById('answer-hiragana').textContent = ansReading;
  document.getElementById('answer-romaji').textContent = ansRomaji;
  document.getElementById('answer-kanji').textContent = ansJapanese && ansJapanese !== ansReading ? ansJapanese : '';
  document.getElementById('answer-kanji').style.display = ansJapanese && ansJapanese !== ansReading ? '' : 'none';
  document.getElementById('answer-notes').textContent = ansNotes;
  document.getElementById('answer-notes').style.display = ansNotes ? '' : 'none';

  State.practiceSession.revealed = false;
}

function revealCard() {
  if (State.practiceSession.revealed) return;
  State.practiceSession.revealed = true;
  document.getElementById('flashcard-front').classList.add('hidden');
  document.getElementById('flashcard-back').classList.remove('hidden');
  document.getElementById('rating-buttons').classList.remove('hidden');
}

function rateCard(rating) {
  const { deck, index } = State.practiceSession;
  const phrase = deck[index];
  if (!phrase) return;

  if (!State.reviewStats[phrase.id]) State.reviewStats[phrase.id] = { timesReviewed: 0, lastReviewed: null, easyCount: 0, againCount: 0 };
  const stat = State.reviewStats[phrase.id];
  stat.timesReviewed++;
  stat.lastReviewed = new Date().toISOString().slice(0,10);
  if (rating === 'easy') { stat.easyCount++; State.practiceSession.easyCount++; }
  if (rating === 'again') { stat.againCount++; State.practiceSession.againCount++; }
  if (rating === 'good') State.practiceSession.goodCount++;
  saveToStorage();

  const next = index + 1;
  if (next >= deck.length) {
    showSessionComplete();
  } else {
    State.practiceSession.index = next;
    showCurrentCard();
  }
}

function showSessionComplete() {
  document.getElementById('practice-session').classList.add('hidden');
  document.getElementById('practice-complete').classList.remove('hidden');
  const { deck, againCount, goodCount, easyCount } = State.practiceSession;
  document.getElementById('session-stats').innerHTML = `
    <div class="stat-line"><span>Cards reviewed</span><span>${deck.length}</span></div>
    <div class="stat-line"><span>Easy</span><span>${easyCount}</span></div>
    <div class="stat-line"><span>Good</span><span>${goodCount}</span></div>
    <div class="stat-line"><span>Again</span><span>${againCount}</span></div>
  `;
  document.getElementById('practice-progress-fill').style.width = '100%';
}

function populatePracticeCategorySelect() {
  const sel = document.getElementById('practice-category-select');
  const cats = [...new Set(getAllPhrases().map(p => p.category))].sort();
  sel.innerHTML = '<option value="">All categories</option>';
  cats.forEach(c => {
    const o = document.createElement('option');
    o.value = c;
    o.textContent = c;
    sel.appendChild(o);
  });
}

// ============ SETTINGS ============

function updateSettingsInfo() {
  const all = getAllPhrases();
  document.getElementById('info-phrase-count').textContent = all.length;
  document.getElementById('info-custom-count').textContent = State.customPhrases.length;
  const cacheStatus = 'serviceWorker' in navigator ? 'Service worker active' : 'Not available';
  document.getElementById('info-cache-status').textContent = cacheStatus;

  document.getElementById('toggle-kanji').checked = State.settings.showKanji;
  document.getElementById('toggle-romaji').checked = State.settings.showRomaji;
  document.getElementById('toggle-large-text').checked = State.settings.largeText;
}

function applySettings() {
  document.body.classList.toggle('large-text', State.settings.largeText);
  // Sync business level bar to saved state
  document.querySelectorAll('.biz-level-btn').forEach(b => b.classList.toggle('active', b.dataset.level === State.businessLevel));
  const bizLevelDescs = { simple: 'Simple — everyday plain Japanese, easy for any speaker', startup: 'Startup — natural katakana-heavy tech wording', formal: 'Formal — mature business Japanese with kanji and native terms' };
  const descEl = document.getElementById('biz-level-desc');
  if (descEl) descEl.textContent = bizLevelDescs[State.businessLevel] || '';
}

// ============ EXPORT / IMPORT ============

function exportJSON() {
  const data = {
    app: 'Japan Phrase Kit',
    exported_at: new Date().toISOString(),
    custom_phrases: State.customPhrases,
    favorites: [...State.favorites],
    review_stats: State.reviewStats,
    settings: State.settings
  };
  downloadFile(JSON.stringify(data, null, 2), 'japan-phrase-kit-backup.json', 'application/json');
}

function exportCSV() {
  const phrases = getAllPhrases();
  const header = [
    'ID','Section','Category','English','Hiragana','Romaji','Japanese','Notes','Politeness','Tags',
    'simple_japanese','simple_reading','simple_romaji','simple_note',
    'startup_japanese','startup_reading','startup_romaji','startup_note',
    'formal_japanese','formal_reading','formal_romaji','formal_note'
  ];
  const rows = [header];
  phrases.forEach(p => {
    const bl = p.businessLevels || {};
    const s = bl.simple  || {};
    const t = bl.startup || {};
    const f = bl.formal  || {};
    rows.push([
      p.id, p.section, p.category,
      csvCell(p.english), csvCell(p.hiragana), csvCell(p.romaji), csvCell(p.kanji),
      csvCell(p.notes), p.politeness, (p.tags || []).join(';'),
      csvCell(s.japanese), csvCell(s.reading), csvCell(s.romaji), csvCell(s.note),
      csvCell(t.japanese), csvCell(t.reading), csvCell(t.romaji), csvCell(t.note),
      csvCell(f.japanese), csvCell(f.reading), csvCell(f.romaji), csvCell(f.note)
    ]);
  });
  const csv = rows.map(r => r.join(',')).join('\n');
  downloadFile(csv, 'japan-phrase-kit.csv', 'text/csv');
}

function csvCell(val) {
  if (!val) return '';
  return '"' + String(val).replace(/"/g,'""') + '"';
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function importJSON(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.custom_phrases && Array.isArray(data.custom_phrases)) {
        State.customPhrases = data.custom_phrases;
      }
      if (data.favorites && Array.isArray(data.favorites)) {
        State.favorites = new Set(data.favorites);
      }
      if (data.review_stats) State.reviewStats = data.review_stats;
      if (data.settings) State.settings = { ...State.settings, ...data.settings };
      // Rebuild allPhrases
      const seedIds = new Set(SEED_PHRASES.map(p => p.id));
      const uniqueCustom = State.customPhrases.filter(p => !seedIds.has(p.id));
      State.allPhrases = [...SEED_PHRASES, ...uniqueCustom];
      State.allPhrases.forEach(p => { if (BUSINESS_LEVELS[p.id]) p.businessLevels = BUSINESS_LEVELS[p.id]; });
      saveToStorage();
      applySettings();
      updateHomeStats();
      showToast('Backup imported successfully.');
    } catch(err) {
      showToast('Import failed. Invalid file.');
    }
  };
  reader.readAsText(file);
}

// ============ MODAL ============

let pendingConfirmCallback = null;

function showConfirm(message, onConfirm) {
  document.getElementById('modal-message').textContent = message;
  document.getElementById('confirm-modal').classList.remove('hidden');
  pendingConfirmCallback = onConfirm;
}

function hideModal() {
  document.getElementById('confirm-modal').classList.add('hidden');
  pendingConfirmCallback = null;
}

// ============ TOAST ============

let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add('hidden'), 2200);
}

// ============ ONLINE / OFFLINE STATUS ============

function updateOnlineStatus() {
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  if (navigator.onLine) {
    dot.className = 'online';
    text.textContent = 'Online';
  } else {
    dot.className = 'offline';
    text.textContent = 'Offline — app running from cache';
  }
}

// ============ UTILITY ============

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ============ SERVICE WORKER REGISTRATION ============

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  }
}

// ============ EVENT LISTENERS ============

function initEvents() {
  // Bottom nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });

  // Filter chips — personal
  document.querySelectorAll('.filter-chip[data-view="personal"]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-view="personal"]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      State.personalFilter = chip.dataset.filter;
      renderSectionView('personal');
    });
  });

  // Filter chips — business
  document.querySelectorAll('.filter-chip[data-view="business"]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-view="business"]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      State.businessFilter = chip.dataset.filter;
      renderSectionView('business');
    });
  });

  // Personal search
  document.getElementById('personal-search').addEventListener('input', e => {
    renderSectionView('personal');
  });

  // Business search
  document.getElementById('business-search').addEventListener('input', e => {
    renderSectionView('business');
  });

  // Card actions (event delegation)
  document.getElementById('app').addEventListener('click', handleCardAction);

  // Add phrase form
  document.getElementById('add-phrase-form').addEventListener('submit', handleAddSubmit);
  document.getElementById('form-cancel-btn').addEventListener('click', () => {
    navigate(State.currentView === 'add' ? 'home' : State.currentView);
  });

  // Quick buttons on home
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const { section, category } = btn.dataset;
      if (section === 'Personal') {
        State.personalFilter = 'category:' + category;
        navigate('personal');
        document.querySelectorAll('.filter-chip[data-view="personal"]').forEach(c => {
          c.classList.toggle('active', c.dataset.filter === 'category:' + category);
        });
      } else {
        State.businessFilter = 'category:' + category;
        navigate('business');
        document.querySelectorAll('.filter-chip[data-view="business"]').forEach(c => {
          c.classList.toggle('active', c.dataset.filter === 'category:' + category);
        });
      }
    });
  });

  // Continue practice button
  document.getElementById('continue-practice-btn').addEventListener('click', () => navigate('practice'));

  // Home stat cards
  document.getElementById('stat-personal-card').addEventListener('click', () => { State.personalFilter = 'all'; navigate('personal'); });
  document.getElementById('stat-business-card').addEventListener('click', () => { State.businessFilter = 'all'; navigate('business'); });
  document.getElementById('stat-fav-card').addEventListener('click', () => { State.personalFilter = 'favorites'; navigate('personal'); });

  // Practice buttons
  document.getElementById('start-practice-btn').addEventListener('click', startPractice);
  document.getElementById('flashcard').addEventListener('click', revealCard);
  document.getElementById('flashcard').addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') revealCard(); });
  document.getElementById('rating-buttons').addEventListener('click', e => {
    const btn = e.target.closest('[data-rating]');
    if (btn) rateCard(btn.dataset.rating);
  });
  document.getElementById('end-session-btn').addEventListener('click', () => {
    document.getElementById('practice-session').classList.add('hidden');
    document.getElementById('practice-setup').classList.remove('hidden');
    document.getElementById('practice-complete').classList.add('hidden');
  });
  document.getElementById('practice-again-btn').addEventListener('click', () => {
    startPractice();
  });
  document.getElementById('back-to-setup-btn').addEventListener('click', () => {
    document.getElementById('practice-complete').classList.add('hidden');
    document.getElementById('practice-setup').classList.remove('hidden');
  });

  // Settings toggles
  document.getElementById('toggle-kanji').addEventListener('change', e => {
    State.settings.showKanji = e.target.checked;
    saveToStorage();
    document.querySelectorAll('.card-japanese').forEach(el => el.classList.toggle('hidden-setting', !e.target.checked));
  });
  document.getElementById('toggle-romaji').addEventListener('change', e => {
    State.settings.showRomaji = e.target.checked;
    saveToStorage();
    document.querySelectorAll('.card-romaji').forEach(el => el.classList.toggle('hidden-setting', !e.target.checked));
  });
  document.getElementById('toggle-large-text').addEventListener('change', e => {
    State.settings.largeText = e.target.checked;
    saveToStorage();
    applySettings();
  });

  // Business level bar
  const bizLevelDescs = {
    simple:  'Simple — everyday plain Japanese, easy for any speaker',
    startup: 'Startup — natural katakana-heavy tech wording',
    formal:  'Formal — mature business Japanese with kanji and native terms'
  };
  document.querySelectorAll('.biz-level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.biz-level-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      State.businessLevel = btn.dataset.level;
      saveToStorage();
      const descEl = document.getElementById('biz-level-desc');
      if (descEl) descEl.textContent = bizLevelDescs[State.businessLevel] || '';
      renderSectionView('business');
    });
  });

  // Show/hide alternative levels panel (event delegation on #app)
  document.getElementById('app').addEventListener('click', e => {
    const altBtn = e.target.closest('.show-alt-btn');
    if (!altBtn) return;
    e.stopPropagation();
    const panel = altBtn.nextElementSibling;
    if (panel && panel.classList.contains('alt-panel')) {
      panel.classList.toggle('hidden');
      altBtn.textContent = panel.classList.contains('hidden') ? 'Show all levels ▼' : 'Hide levels ▲';
    }
  });

  // Export / Import
  document.getElementById('export-json-btn').addEventListener('click', exportJSON);
  document.getElementById('export-csv-btn').addEventListener('click', exportCSV);
  document.getElementById('import-json-input').addEventListener('change', e => {
    if (e.target.files[0]) importJSON(e.target.files[0]);
    e.target.value = '';
  });

  // Reset buttons
  document.getElementById('reset-custom-btn').addEventListener('click', () => {
    showConfirm('Delete all your custom phrases? Seed phrases are not affected.', () => {
      State.customPhrases = [];
      State.allPhrases = State.allPhrases.filter(p => SEED_PHRASES.some(s => s.id === p.id));
      saveToStorage();
      updateHomeStats();
      showToast('Custom phrases deleted.');
    });
  });
  document.getElementById('reset-stats-btn').addEventListener('click', () => {
    showConfirm('Clear all practice stats?', () => {
      State.reviewStats = {};
      saveToStorage();
      showToast('Practice stats cleared.');
    });
  });

  // Modal
  document.getElementById('modal-confirm').addEventListener('click', () => {
    if (pendingConfirmCallback) pendingConfirmCallback();
    hideModal();
  });
  document.getElementById('modal-cancel').addEventListener('click', hideModal);
  document.getElementById('confirm-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('confirm-modal')) hideModal();
  });

  // Online/offline
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
}

// ============ BOOT ============

async function boot() {
  registerSW();
  await loadData();
  applySettings();
  updateOnlineStatus();
  updateHomeStats();
  initHomeSearch();
  populatePracticeCategorySelect();
  initEvents();
  navigate('home');
}

document.addEventListener('DOMContentLoaded', boot);
