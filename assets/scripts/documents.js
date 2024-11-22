const documents = [
  {
    createdAt: "Sat Apr 30 12:25:22 +0000 2022",
    idStr: "1520378777695571968",
    content:
      'Ouch <a href="https://twitter.com/professor_dave/status/1520041623438114816">https://twitter.com/professor_dave/status/1520041623438114816</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 23 16:07:54 +0000 2018",
    idStr: "967068507543306240",
    content:
      'Excited to receive my copy of the  @cctoilettalk #cctoilettalk zine "Lift the Lid" through the post today! Check it out, including my article on gender-neutral toilet signs (and transcultural communication). <a href="https://www.instagram.com/p/Bfi5aNxnyb8/">https://www.instagram.com/p/Bfi5aNxnyb8/</a>',
    favouriteCount: "3",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Feb 23 15:56:52 +0000 2018",
    idStr: "967065733422370816",
    content:
      '@krheyam Possibly also tied up with sex work, though I\'m not sure that\'s a prerequisite for travesti identification. From Borba 2015 "A sociolinguistics from the South? Discursive colonization, epistemological imbalances and rehearsed narratives at a Brazilian gender identity clinic": <div class="gallery"><ul><li><a href="../../tweets_media/967065733422370816-DWu1JZfX0AYpIj3.jpg"><img src="../../tweets_media/967065733422370816-DWu1JZfX0AYpIj3.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 22 22:37:16 +0000 2018",
    idStr: "966804106554888193",
    content:
      'Do check out this great zine on issues around the toilet for trans people, disabled people, truck drivers etc - including my own piece on gender-neutral toilet signs (and transcultural communication)! <a href="https://twitter.com/cctoilettalk/status/966299023698284546">https://twitter.com/cctoilettalk/status/966299023698284546</a>',
    favouriteCount: "9",
    retweetCount: "6",
  },
  {
    createdAt: "Thu Feb 08 19:01:04 +0000 2018",
    idStr: "961676269367840768",
    content:
      'Delighted to announce upcoming academic/activist conference "Gender in the Contemporary World: Articulation, Navigation and Change": <a href="https://contemporarygender.wordpress.com">https://contemporarygender.wordpress.com</a> #contemporarygender<br><br>Featuring @travisalabanza @GenderBen @megjohnbarker and 15 others!<br><br>3 March @QMUL @QMULLinguistics <div class="gallery"><ul><li><a href="../../tweets_media/961676269367840768-DViPZ0PXUAA7XMu.jpg"><img src="../../tweets_media/961676269367840768-DViPZ0PXUAA7XMu.jpg"></a></li></ul></div>',
    favouriteCount: "32",
    retweetCount: "19",
  },
  {
    createdAt: "Wed Jan 31 23:14:49 +0000 2018",
    idStr: "958841027128889344",
    content: "@noonbinary Or zine...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 29 17:21:50 +0000 2018",
    idStr: "958027419243483136",
    content:
      'Excited to see the launch of this fantastic zine on toilets and related issues around disability, gender, professional welfare etc! My own article on conveying gender neutrality (transculturally) is on pages 35-38 (36-39 according to Issuu)! #cctoilettalk <a href="https://twitter.com/cctoilettalk/status/957999718625357825">https://twitter.com/cctoilettalk/status/957999718625357825</a>',
    favouriteCount: "10",
    retweetCount: "5",
  },
  {
    createdAt: "Mon Jan 29 10:41:13 +0000 2018",
    idStr: "957926600988942337",
    content: "Candidates*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 29 10:40:37 +0000 2018",
    idStr: "957926447460515840",
    content: "Devoid*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 29 10:25:35 +0000 2018",
    idStr: "957922667402878976",
    content:
      "Spotted on a job description: \"Tenacity – never takes no for an answer\". That's not tenacity, it's empathy-void disregard for consent and a downright dangerous attitude, not something that should be validated as a requirement for job candidate #consent",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 15 16:12:59 +0000 2018",
    idStr: "952936662136508416",
    content:
      'I used to be an instant reply type of gxy in my youth<br>Now I\'m a perenial "apologies for the delay in getting back to you"',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 20 15:59:42 +0000 2017",
    idStr: "943511232417591296",
    content:
      'Thanks for the "Other" (though "Mx" would be nice), @EveryoneActive, but why do you need to distinguish between "Doctor (female)" and "Doctor (male)"? And what about non-binary doctors? @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/943511232417591296-DRgGVuBX4AAZJEQ.jpg"><img src="../../tweets_media/943511232417591296-DRgGVuBX4AAZJEQ.jpg"></a></li></ul></div>',
    favouriteCount: "11",
    retweetCount: "3",
  },
  {
    createdAt: "Mon Dec 11 15:30:07 +0000 2017",
    idStr: "940242297912004608",
    content:
      "@kirbyconrod @lexicondk @lzimman ... as per the comments on that thread, Rodrigo Borba sent me some stuff that isn't mentioned - I can share this if you like. And Jacq Jones mentioned there's often discussion in the Friends with Words group.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 06 12:46:39 +0000 2017",
    idStr: "938389220162449408",
    content:
      'Re: Pullumgate (singular they, neopronouns, non-binary people, @kirbyconrod), there are *loads* of people  researching pronouns in the Facebook groups Non-binary Linguistics Network and Queer Linguist(ic)s Network. Check them out!<br><br><a href="http://facebook.com/groups/queerlinguistics">http://facebook.com/groups/queerlinguistics</a><br><a href="http://facebook.com/groups/nonbinarylinguistics">http://facebook.com/groups/nonbinarylinguistics</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Dec 06 12:37:44 +0000 2017",
    idStr: "938386978462191617",
    content:
      'Great rebuttal by an awesome linguist to a silly linguist\'s silly thoughts on singular they. <a href="https://twitter.com/kirbyconrod/status/938226460770189318">https://twitter.com/kirbyconrod/status/938226460770189318</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Dec 02 03:27:16 +0000 2017",
    idStr: "936798895127986177",
    content: "@GreenLee_Anne Support them*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 01 17:46:38 +0000 2017",
    idStr: "936652776700080129",
    content:
      'Some awesome comics, a zine and various other stuff on trans and non-binary folk, gender and life from my friend @GreenLee_Anne. Check out their work and support our with your symbolic tokens of capitalism: <a href="https://www.facebook.com/onlytwocomics/">https://www.facebook.com/onlytwocomics/</a>',
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Dec 01 02:22:57 +0000 2017",
    idStr: "936420323309875201",
    content:
      '"Man up... man up" and glorifying crusades: a problematic week for #TheApprentice',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 20 11:43:17 +0000 2017",
    idStr: "932575068982513664",
    content:
      '@Wimbledon @CissexismDaily Hoping a contact form message will generate less silence than this tweet... <div class="gallery"><ul><li><a href="../../tweets_media/932575068982513664-DPErpwdW4AADhfC.jpg"><img src="../../tweets_media/932575068982513664-DPErpwdW4AADhfC.jpg"></a></li></ul></div>',
    favouriteCount: "7",
    retweetCount: "3",
  },
  {
    createdAt: "Fri Nov 17 16:32:39 +0000 2017",
    idStr: "931560724966633473",
    content:
      'Hey @ucu please allow more choice in your sexual orientation question. Three options is far too little, and how do I (explicitly) identify outside of the provided categories? <div class="gallery"><ul><li><a href="../../tweets_media/931560724966633473-DO2RcyxXUAAoKE9.jpg"><img src="../../tweets_media/931560724966633473-DO2RcyxXUAAoKE9.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Nov 09 22:05:42 +0000 2017",
    idStr: "928745440329289728",
    content:
      'Can non-binary folk attend @Wimbledon? Does writing a gender-neutral title on the form (where not provided as an option) void it? @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/928745440329289728-DOORC_aX0AAgufT.jpg"><img src="../../tweets_media/928745440329289728-DOORC_aX0AAgufT.jpg"></a></li></ul></div>',
    favouriteCount: "6",
    retweetCount: "3",
  },
  {
    createdAt: "Sat Nov 04 16:14:46 +0000 2017",
    idStr: "926845182611476481",
    content:
      'My thoughts on the premature labelling of Sam Smith as non-binary #SamSmith <a href="https://twitter.com/yndajas/status/926844522117718016">https://twitter.com/yndajas/status/926844522117718016</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 04 16:12:08 +0000 2017",
    idStr: "926844522117718016",
    content:
      'Short thoughts: avoiding linguistic imperialism in gender discourse <a href="http://yndajas.co/2017/11/04/short-thoughts-avoiding-linguistic-imperialism-gender-discourse/">http://yndajas.co/2017/11/04/short-thoughts-avoiding-linguistic-imperialism-gender-discourse/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 04 15:35:18 +0000 2017",
    idStr: "926835250193244167",
    content:
      'You might want to update your terminology re: trans people @visitlondon. "Transsexual" is long out of favour these days. @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/926835250193244167-DNzHuvsVQAEoyCR.jpg"><img src="../../tweets_media/926835250193244167-DNzHuvsVQAEoyCR.jpg"></a></li></ul></div>',
    favouriteCount: "5",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Oct 07 01:24:57 +0000 2017",
    idStr: "916474395283152896",
    content: "My wings are made of plastic.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 30 10:49:07 +0000 2017",
    idStr: "914079656617418755",
    content:
      "Issues inc. consent/burnout/hearing trans voices (@mixosaurus); pressuring for trans inclusion in academia (@GreenLee_Anne @CissexismDaily)",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 30 10:44:18 +0000 2017",
    idStr: "914078442081144837",
    content:
      "Love being at conference of friends talking trans. Great discussion of academic activism/activ. (in) acad. by @mixosaurus @GreenLee_Anne",
    favouriteCount: "5",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Sep 26 12:14:35 +0000 2017",
    idStr: "912651615236247553",
    content:
      'Is your gender corporate? Spotted on @Better_UK. Not spotted on @Better_UK: an option for my gender or my title... @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/912651615236247553-DKpjfAEXkAAtsGG.jpg"><img src="../../tweets_media/912651615236247553-DKpjfAEXkAAtsGG.jpg"></a></li></ul></div>',
    favouriteCount: "22",
    retweetCount: "8",
  },
  {
    createdAt: "Wed Sep 13 22:00:29 +0000 2017",
    idStr: "908088015960109057",
    content:
      'From first idea to final draft, the fourth line of my recently published poem "Cissexism is everywhere, every day": <a href="http://yndajas.co/2017/08/29/cissexism-everywhere-every-day/">http://yndajas.co/2017/08/29/cissexism-everywhere-every-day/</a> <div class="gallery"><ul><li><a href="../../tweets_media/908088015960109057-DJosySZXcAAwJQ4.jpg"><img src="../../tweets_media/908088015960109057-DJosySZXcAAwJQ4.jpg"></a></li><li><a href="../../tweets_media/908088015960109057-DJoszuVXgAAVylF.jpg"><img src="../../tweets_media/908088015960109057-DJoszuVXgAAVylF.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 08 16:03:07 +0000 2017",
    idStr: "906186144827801600",
    content:
      "Shout out to the No More Boys and Girls documentary by @thisfoolj from @megjohnbarker - brilliant (though less so on trans/NB issues) #nbday",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Sep 08 15:47:51 +0000 2017",
    idStr: "906182302618791938",
    content:
      "No face of non-binarity, but humourous acknowledgement of homogeneity among panel and AFAB NBs more generally in their presentation #nbday",
    favouriteCount: "6",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Sep 08 15:41:14 +0000 2017",
    idStr: "906180637593350145",
    content:
      "Shout out to @SabahChoudrey and @travisalabanza from @MxHHowitt for discourse on race and queerness - both very powerful voices! #nbday",
    favouriteCount: "7",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Sep 08 15:10:37 +0000 2017",
    idStr: "906172932807938053",
    content:
      "Would everyone (or no one) be trans if they read up enough on gender? asks @MxHHowitt (with an excited dance around the stage) #nbday",
    favouriteCount: "8",
    retweetCount: "4",
  },
  {
    createdAt: "Fri Sep 08 15:02:54 +0000 2017",
    idStr: "906170987988779008",
    content:
      'Attendees of #nbday may be interested in the Non-binary Academics Network, a group for academics who are non-binary: <a href="https://www.facebook.com/groups/1627520830862008/">https://www.facebook.com/groups/1627520830862008/</a>',
    favouriteCount: "5",
    retweetCount: "4",
  },
  {
    createdAt: "Fri Sep 08 14:41:11 +0000 2017",
    idStr: "906165525566324737",
    content: "... from @tray_yeadonlee and @MxHHowitt!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 08 14:38:35 +0000 2017",
    idStr: "906164868545482753",
    content:
      "Also good to see two presentations repeated/revised from #tnb2017, this time having had sufficient sleep the night before... #NBDay",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Sep 08 14:09:38 +0000 2017",
    idStr: "906157582942957568",
    content:
      'Using they/them/their - "get over it" says Francis Ray White #NBDay',
    favouriteCount: "6",
    retweetCount: "5",
  },
  {
    createdAt: "Fri Sep 08 14:08:02 +0000 2017",
    idStr: "906157182244102144",
    content:
      "* not exclusively, as in gender fluidity exists over both short and long time periods, so pronouns could change at any time... #NBDay",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Sep 08 14:05:46 +0000 2017",
    idStr: "906156613500891138",
    content:
      "Pronounarounds should be normalised in teaching contexts, especially (but not exclusively*) in new groups/combinations of people #NBDay",
    favouriteCount: "5",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Sep 08 13:49:01 +0000 2017",
    idStr: "906152396912562179",
    content:
      "Francis Ray White suggests June is a good time to change your name working in a university! #NBDay",
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Sep 08 13:47:42 +0000 2017",
    idStr: "906152064283226112",
    content: "@GenderBen By Francis Ray White. Whoops, missed the name!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 08 13:46:50 +0000 2017",
    idStr: "906151846649225217",
    content:
      "Exciting to see a great talk on teaching gender a second time a year or so on from @GenderBen's conference! A very welcome refresher! #NBDay",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Apr 06 16:10:27 +0000 2022",
    idStr: "1511738112040448002",
    content:
      'First project I worked on at @unepwcmc...<br><br>Tech stack: Vue, Nuxt and JavaScript frontend, with BEM-style SASS; WordPress backend (CMS/API)<br><br>#sustainability #environment #socialImpact<br>#javascript #vue #nuxt #wordpress #api <a href="https://twitter.com/unepwcmc/status/1511690396971196418">https://twitter.com/unepwcmc/status/1511690396971196418</a>',
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Apr 06 16:08:10 +0000 2022",
    idStr: "1511737537605390349",
    content:
      'Damn, need to teleport to Berkeley <a href="https://t.co/bXIZXaIXcB">https://t.co/bXIZXaIXcB</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 06 10:49:46 +0000 2022",
    idStr: "1511657408455716873",
    content:
      'So excited for this! <a href="https://twitter.com/krheyam/status/1511355950321569802">https://twitter.com/krheyam/status/1511355950321569802</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 08 13:34:20 +0000 2017",
    idStr: "906148700573097984",
    content:
      "Issues with equating gender and appearance (whilst often being important), inc. within - community policing of (not) being NB enough #nbday",
    favouriteCount: "8",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Sep 08 13:29:35 +0000 2017",
    idStr: "906147505401995264",
    content:
      "Accountability processes - others will always (mostly) evaluate us in binary terms, e.g. a woman's top @tray_yeadonlee #nbday",
    favouriteCount: "3",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Aug 29 00:31:42 +0000 2017",
    idStr: "902327865894719488",
    content:
      'I wrote a poem.<br>I w.a.p. on @CissexismDaily /normativity/transphobia.<br>I w.a.p. for first time in ~7 years.<br>I w.a.p.<br><a href="http://yndajas.co/2017/08/29/cissexism-everywhere-every-day/">http://yndajas.co/2017/08/29/cissexism-everywhere-every-day/</a>',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Aug 29 00:11:39 +0000 2017",
    idStr: "902322819534643200",
    content:
      'Cissexism is everywhere, every day <a href="http://yndajas.co/2017/08/29/cissexism-everywhere-every-day/">http://yndajas.co/2017/08/29/cissexism-everywhere-every-day/</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 25 21:15:46 +0000 2017",
    idStr: "901191393753825282",
    content:
      'Pool of tracks used for @BarWot opening DJ slot on 15/08/17 (26/33 tracks; 7 not on Spotify - see description): <a href="https://goo.gl/Ys3LDo">https://goo.gl/Ys3LDo</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 07 16:12:13 +0000 2017",
    idStr: "894592023419912193",
    content:
      "So my advice is: if you see a binary gender field on a form and you have the spoons to write a simple email, do it! @CissexismDaily [3/2]",
    favouriteCount: "8",
    retweetCount: "3",
  },
  {
    createdAt: "Mon Aug 07 16:11:27 +0000 2017",
    idStr: "894591831249485824",
    content:
      "~8/10 they'll reply. Of those, ~9/10 you'll be the first person to have brought it up, and ~8/10 they commit to change @CissexismDaily [2/2]",
    favouriteCount: "5",
    retweetCount: "3",
  },
  {
    createdAt: "Mon Aug 07 16:08:14 +0000 2017",
    idStr: "894591021396492288",
    content:
      "One thing I've learnt is never to be afraid of emailing a company to make gender fields on forms non-binary inclusive @CissexismDaily [1/2]",
    favouriteCount: "5",
    retweetCount: "5",
  },
  {
    createdAt: "Mon Jul 31 22:18:08 +0000 2017",
    idStr: "892147393164136449",
    content: "@bealerrr Just messaged you :)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 31 14:58:57 +0000 2017",
    idStr: "892036869894131712",
    content:
      "@Lavlang Tagging in case you are happy to retweet my tweet above!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 31 14:52:48 +0000 2017",
    idStr: "892035322808348672",
    content:
      'Thank you! I\'ll message you on Facebook about some further details :) <a href="https://twitter.com/essikert/status/892033908530978816">https://twitter.com/essikert/status/892033908530978816</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 31 14:41:40 +0000 2017",
    idStr: "892032521155825665",
    content:
      'Research participants needed: “Talking beyond the binary: queer and genderqueer speech” <a href="http://yndajas.co/2017/07/31/research-participants-needed-talking-beyond-binary-queer-genderqueer-speech/">http://yndajas.co/2017/07/31/research-participants-needed-talking-beyond-binary-queer-genderqueer-speech/</a>',
    favouriteCount: "5",
    retweetCount: "12",
  },
  {
    createdAt: "Tue Jul 25 18:28:43 +0000 2017",
    idStr: "889915331187290112",
    content:
      "@MarinaJ18 @pipsuxx @_entreparentese @Shey_is_Blue @Lavlang @stillicides See above and the response from @Shey_is_Blue :)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 25 18:27:18 +0000 2017",
    idStr: "889914973111169024",
    content:
      '@MarinaJ18 @pipsuxx @_entreparentese @Shey_is_Blue Also worth checking out Vinay Swamy\'s paper at @Lavlang 24 #LavLang24. See the programme and abstracts here: <a href="http://www.nottingham.ac.uk/conference/fac-arts/english/lavlang24/conference-programme.aspx">http://www.nottingham.ac.uk/conference/fac-arts/english/lavlang24/conference-programme.aspx</a> [2/2]',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 22 20:12:58 +0000 2017",
    idStr: "888854402827681794",
    content:
      'I did radical selflove at #TransPrideBrighton. If you\'re not transphobic see <a href="http://instagram.com/yndajas">http://instagram.com/yndajas</a> for photos #thisiswhattranslookslike',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 20 13:55:35 +0000 2017",
    idStr: "888034657127858177",
    content:
      "Spectacular keynotes on development of UK NB community (@megjohnbarker); intersectional issues in trans community (@SabahChoudrey) #tnb2017",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Jul 20 10:52:52 +0000 2017",
    idStr: "887988671697309697",
    content:
      "Great to see some linguistics represented at this conference from @jones_lucy! #tnb2017",
    favouriteCount: "7",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Jul 20 09:59:44 +0000 2017",
    idStr: "887975304282730496",
    content: "Nice content/trigger warning for theory from @MxHHowitt #tnb2017",
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Jul 20 09:49:39 +0000 2017",
    idStr: "887972766108045312",
    content:
      '... Earlier #transontrains selfiesm: <a href="https://www.instagram.com/p/BWwfSdPDMbn">https://www.instagram.com/p/BWwfSdPDMbn</a> #ThisIsWhatTransLooksLike',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 20 09:48:58 +0000 2017",
    idStr: "887972593000697857",
    content:
      "Also grateful for the space events like this provide to express non-binarity more outwardly than usually feels comfortable/safe #tnb2017",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 20 09:42:03 +0000 2017",
    idStr: "887970851349516288",
    content:
      "Excited to be at Annual Brighton Trans and Non-binary Conference 2017. Lots of great trans/NB-led research/work/thought! #tnb2017 [1/2]",
    favouriteCount: "5",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 19 16:43:08 +0000 2017",
    idStr: "887714431282577409",
    content:
      'I offer proofreading and editing services just so you know: <a href="http://yndajas.co/proofreading-and-editing">http://yndajas.co/proofreading-and-editing</a> #fundaqueer #givememoney',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 18 16:58:21 +0000 2017",
    idStr: "887355874217517056",
    content:
      'Great practice for minute/notetaking - providing pronouns after names/roles. Useful as reference guide for future audiences @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/887355874217517056-DFCFcHTXcAQpDlO.jpg"><img src="../../tweets_media/887355874217517056-DFCFcHTXcAQpDlO.jpg"></a></li></ul></div>',
    favouriteCount: "12",
    retweetCount: "4",
  },
  {
    createdAt: "Mon Jul 03 16:21:47 +0000 2017",
    idStr: "881910856002482176",
    content:
      'Was there a nod to The Wire\'s S01E04 fuck scene via Blue in Black Mirror S03E06 "Hated in the Nation" @charltonbrooker?',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 02 13:40:59 +0000 2017",
    idStr: "881508000313331712",
    content:
      'Simple internet activism: making the language of @Wikipedia gender-neutral/inclusive @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/881508000313331712-DDu-gpGXoAA9ylS.jpg"><img src="../../tweets_media/881508000313331712-DDu-gpGXoAA9ylS.jpg"></a></li></ul></div>',
    favouriteCount: "8",
    retweetCount: "3",
  },
  {
    createdAt: "Wed Jun 28 18:19:50 +0000 2017",
    idStr: "880128622534828033",
    content:
      'Kung Fu Kenny now... <a href="http://yndajas.co/gmedia/1vocalaaaa_kendrick_lamar_-_feel-wav/">http://yndajas.co/gmedia/1vocalaaaa_kendrick_lamar_-_feel-wav/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 25 09:37:38 +0000 2017",
    idStr: "878910044628189184",
    content: "Eid Mubarak!",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 19 01:17:10 +0000 2017",
    idStr: "876609772283457537",
    content:
      'Down with humans: <a href="https://youtu.be/Wy7Q6wazD_E">https://youtu.be/Wy7Q6wazD_E</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 14 20:42:54 +0000 2017",
    idStr: "875091198846881801",
    content:
      "And a reciprocal follow suggestion for the forever fabulous awesome academic, activist and TV/radio historian @krheyam #RainbowRollCall",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Jun 14 20:40:12 +0000 2017",
    idStr: "875090515896696833",
    content:
      "Also hit me up if you're: a queer linguist researching whatever; researching non-binary stuff; a non-binary academics #RainbowRollCall",
    favouriteCount: "6",
    retweetCount: "3",
  },
  {
    createdAt: "Wed Jun 14 20:38:41 +0000 2017",
    idStr: "875090135108526080",
    content:
      "I'm queer² and research queer and genderqueer speech. People interested in queer/non-binary linguistics hit me up #RainbowRollCall",
    favouriteCount: "18",
    retweetCount: "8",
  },
  {
    createdAt: "Wed Jun 14 13:07:39 +0000 2017",
    idStr: "874976630195843072",
    content:
      'Chris Dave 95th followed by Meg White 94th in 100 greatest drummers list... LOOOOOOL okay Rolling Stone: <a href="http://www.rollingstone.com/music/lists/100-greatest-drummers-of-all-time-20160331/chris-dave-20160328">http://www.rollingstone.com/music/lists/100-greatest-drummers-of-all-time-20160331/chris-dave-20160328</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 12 13:47:11 +0000 2017",
    idStr: "874261804960161792",
    content:
      'Thank you @ITV for offering "Mx" as a title and making non-binary people feel more welcome in using your services! @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/874261804960161792-DCIAbiLXgAA0CzD.jpg"><img src="../../tweets_media/874261804960161792-DCIAbiLXgAA0CzD.jpg"></a></li></ul></div>',
    favouriteCount: "19",
    retweetCount: "5",
  },
  {
    createdAt: "Fri Jun 09 02:11:10 +0000 2017",
    idStr: "872999479686909952",
    content: "Woohoo the big JC with more than four ten G!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 09 01:51:27 +0000 2017",
    idStr: "872994517439447040",
    content: "BBC hanging on willing Clegg to shed a tear.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 09 00:32:49 +0000 2017",
    idStr: "872974730508337152",
    content: "Woohoo @MhairiBlack!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 08 17:36:32 +0000 2017",
    idStr: "872869968391663616",
    content:
      'I think it needs to be quite a bit faster (taking faster to mean shorter) than the journey... <div class="gallery"><ul><li><a href="../../tweets_media/872869968391663616-DB0OmbfXYAE_f-f.jpg"><img src="../../tweets_media/872869968391663616-DB0OmbfXYAE_f-f.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 07 04:10:01 +0000 2017",
    idStr: "872304614003048449",
    content:
      'Tomorrow please vote red/green/yellow as needed to stop austerity; support positive politics for the future. More: <a href="https://m.facebook.com/story.php?story_fbid=1952876171601055&id=100006360725765">https://m.facebook.com/story.php?story_fbid=1952876171601055&id=100006360725765</a> <div class="gallery"><ul><li><a href="../../tweets_media/872304614003048449-DBsMaTCXUAcVCWn.jpg"><img src="../../tweets_media/872304614003048449-DBsMaTCXUAcVCWn.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 30 15:39:28 +0000 2017",
    idStr: "869579019376885762",
    content:
      'Adding my gender when the option isn\'t provided and passive aggressively bolding it #nonbinaryduties @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/869579019376885762-DBFdf0QXUAAuoSd.jpg"><img src="../../tweets_media/869579019376885762-DBFdf0QXUAAuoSd.jpg"></a></li></ul></div>',
    favouriteCount: "35",
    retweetCount: "5",
  },
  {
    createdAt: "Sun May 28 19:19:00 +0000 2017",
    idStr: "868909488807575552",
    content:
      'No thanks. <div class="gallery"><ul><li><a href="../../tweets_media/868909488807575552-DA78kteW0AAZ7cF.jpg"><img src="../../tweets_media/868909488807575552-DA78kteW0AAZ7cF.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 21 14:10:03 +0000 2017",
    idStr: "866295024459415554",
    content:
      'Jaaaaazz: <a href="https://youtube.com/watch?v=0GAsHvknO1k">https://youtube.com/watch?v=0GAsHvknO1k</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 17 13:03:47 +0000 2017",
    idStr: "864828794758103040",
    content: "Ideosexual: sexual attraction on the basis of ideology?",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 11 10:21:10 +0000 2017",
    idStr: "862613546668109825",
    content:
      'Facebook allows you to advertise​ to females, males or both. So where are all the non-binary people at @facebook? @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/862613546668109825-C_iecPUWAAAgbBk.jpg"><img src="../../tweets_media/862613546668109825-C_iecPUWAAAgbBk.jpg"></a></li></ul></div>',
    favouriteCount: "6",
    retweetCount: "5",
  },
  {
    createdAt: "Fri May 05 15:36:36 +0000 2017",
    idStr: "860518600112779266",
    content:
      'Proofreading service: "We provides" and "guarantee that your spelling [...] meeting". Ermm... <div class="gallery"><ul><li><a href="../../tweets_media/860518600112779266-C_EtFoRXYAAclSX.jpg"><img src="../../tweets_media/860518600112779266-C_EtFoRXYAAclSX.jpg"></a></li></ul></div>',
    favouriteCount: "5",
    retweetCount: "1",
  },
  {
    createdAt: "Fri May 05 14:03:16 +0000 2017",
    idStr: "860495109833588737",
    content:
      '#controversial #truth <a href="https://twitter.com/Fred_Delicious/status/706821622804647936">https://twitter.com/Fred_Delicious/status/706821622804647936</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 03 22:48:59 +0000 2017",
    idStr: "859902637604581376",
    content:
      'Poster I presented at #LavLang24 representing @QMULLinguistics now available on my website, under resources: <a href="http://yndajas.co/resources/">http://yndajas.co/resources/</a>',
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Wed May 03 22:00:02 +0000 2017",
    idStr: "859890320020049921",
    content:
      'The socialist in me says that "let June be the end of May" meme is great. The ironic pedant says the end of May is May.',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 02 22:21:06 +0000 2017",
    idStr: "859533232034938881",
    content: '"Wish to apologise" is a weird phrase. Why not just "apologise"?',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 01 13:08:08 +0000 2017",
    idStr: "859031686012653569",
    content:
      'Conference of 20 times less misgendering than normal over, but was so therapeutic. Safe spaces: important #LavLang24 <a href="https://youtu.be/TB54dZkzZOY">https://youtu.be/TB54dZkzZOY</a>',
    favouriteCount: "6",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Apr 30 13:28:54 +0000 2017",
    idStr: "858674524736425985",
    content:
      "Polari popular topic in LGBT History Month: @_paulbaker_ often invited to speak, e.g. for @yorklgbthistory @YUSU_LGBTQ in 2015 #LavLang24",
    favouriteCount: "5",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Apr 30 13:13:25 +0000 2017",
    idStr: "858670627477233665",
    content:
      'Want to carry on the queer linguistics conversation? Join the Queer Linguist(ic)s Network: <a href="https://www.facebook.com/groups/queerlinguistics">https://www.facebook.com/groups/queerlinguistics</a> @Lavlang #LavLang24',
    favouriteCount: "6",
    retweetCount: "9",
  },
  {
    createdAt: "Sun Apr 30 13:08:32 +0000 2017",
    idStr: "858669398730649601",
    content:
      "Eva Dossem idea for queer dictionary: usage examples first, then authorial interpretation, centring positionality #LavLang24",
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Apr 30 12:41:04 +0000 2017",
    idStr: "858662486597304322",
    content:
      'Eva Nossem (@Saar_Uni) calls on Scrabble to illustrate how dictionaries are taken as an authoritative source #LavLang24 <div class="gallery"><ul><li><a href="../../tweets_media/858662486597304322-C-qU-HzXoAAGtCJ.jpg"><img src="../../tweets_media/858662486597304322-C-qU-HzXoAAGtCJ.jpg"></a></li></ul></div>',
    favouriteCount: "5",
    retweetCount: "4",
  },
  {
    createdAt: "Sun Apr 30 12:25:56 +0000 2017",
    idStr: "858658679213760513",
    content:
      '"Every community is diverse" - so language documentation needs to reflect this, says Karen Parker #LavLang24',
    favouriteCount: "8",
    retweetCount: "4",
  },
  {
    createdAt: "Sun Apr 30 12:23:23 +0000 2017",
    idStr: "858658034008162304",
    content:
      "Karen Parker (@SOAS @latrobe), looking at language documentation, links anthropocentrism with queerphobia, cissexism etc #LavLang24",
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Apr 30 11:02:09 +0000 2017",
    idStr: "858637594640486401",
    content:
      "Hesitance from @mixosaurus to label news outlets left or right pre-analysis given current lack of evidently left-wing UK press #LavLang24",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Apr 30 10:48:36 +0000 2017",
    idStr: "858634182221811713",
    content:
      "Example of best practice from @mixosaurus: content warning for discussion of transphobia to avoid creating a violent space #LavLang24",
    favouriteCount: "6",
    retweetCount: "4",
  },
  {
    createdAt: "Sun Apr 30 10:30:15 +0000 2017",
    idStr: "858629565178146816",
    content:
      'Vinay Swamy (@Vassar) on viability of gender-neutral language in heavily bigendered French; pronouns; discussion of @AssignedMale #LavLang24 <div class="gallery"><ul><li><a href="../../tweets_media/858629565178146816-C-p3AlRXYAAo90O.jpg"><img src="../../tweets_media/858629565178146816-C-p3AlRXYAAo90O.jpg"></a></li><li><a href="../../tweets_media/858629565178146816-C-p3Bn9W0AAsTAu.jpg"><img src="../../tweets_media/858629565178146816-C-p3Bn9W0AAsTAu.jpg"></a></li></ul></div>',
    favouriteCount: "11",
    retweetCount: "9",
  },
  {
    createdAt: "Sat Apr 29 15:56:25 +0000 2017",
    idStr: "858349260080861184",
    content:
      'Discussion of sexual orientation OCD from incipient @QMULLinguistics PhD candidate @elvisgomes90, building on his work at @unil #LavLang24 <div class="gallery"><ul><li><a href="../../tweets_media/858349260080861184-C-l4EbIXkAUwJxa.jpg"><img src="../../tweets_media/858349260080861184-C-l4EbIXkAUwJxa.jpg"></a></li><li><a href="../../tweets_media/858349260080861184-C-l4FoMXoAQ6yoO.jpg"><img src="../../tweets_media/858349260080861184-C-l4FoMXoAQ6yoO.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "4",
  },
  {
    createdAt: "Sat Apr 29 14:01:12 +0000 2017",
    idStr: "858320265582972928",
    content:
      "Blase Provitola of @Columbia asks how progressive liberation groups can address issues of internal, intersectional homogeneity #LavLang24",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Apr 29 13:34:29 +0000 2017",
    idStr: "858313540691800064",
    content:
      "Trans and intersex inclusion reminder: genitals are not female or male #LavLang24",
    favouriteCount: "5",
    retweetCount: "5",
  },
  {
    createdAt: "Sat Apr 29 09:12:22 +0000 2017",
    idStr: "858247577267052544",
    content:
      'Linguistic landscapes in Chinese action films and asexuality by @RaymundVitorio and Mie Hiramoto @KingsCollegeLon @NUSingapore #LavLang24 <div class="gallery"><ul><li><a href="../../tweets_media/858247577267052544-C-kbnH_XgAQacKz.jpg"><img src="../../tweets_media/858247577267052544-C-kbnH_XgAQacKz.jpg"></a></li></ul></div>',
    favouriteCount: "4",
    retweetCount: "4",
  },
  {
    createdAt: "Sat Apr 29 08:37:30 +0000 2017",
    idStr: "858238800601939968",
    content:
      'Soon-to-be @QMULLinguistics PhD student @elvisgomes90 is presenting on sexual orientation OCD this afternoon. Don\'t miss it! #LavLang24 <a href="https://twitter.com/elvisgomes90/status/858160734160769024">https://twitter.com/elvisgomes90/status/858160734160769024</a>',
    favouriteCount: "6",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Apr 28 16:35:36 +0000 2017",
    idStr: "857996734613659648",
    content:
      'Important discussion of citation from @MaryAnnSaundrs @Katja_Thieme, e.g. avoiding deadnaming; recognising non-"academic" sources #LavLang24',
    favouriteCount: "2",
    retweetCount: "3",
  },
  {
    createdAt: "Fri Apr 28 15:41:18 +0000 2017",
    idStr: "857983066991669248",
    content:
      "Calder showing phonetic variation in /s/ over the period of transforming into drag, more/less normative depending on show night #LavLang24",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Apr 28 15:31:30 +0000 2017",
    idStr: "857980603232395264",
    content:
      "Overlap between drag and trans/non-binary communities reported by Jeremy Calder, looking at SoMa drag queens in San Francisco #LavLang24",
    favouriteCount: "5",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Apr 28 14:09:49 +0000 2017",
    idStr: "857960046680002560",
    content:
      "Fascinating to hear about stylistic sociophonetic variation in a homoromantic gray-asexual speaker from Julia Fine at @UCSB_Ling #LavLang24",
    favouriteCount: "4",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Apr 28 13:04:59 +0000 2017",
    idStr: "857943729554030593",
    content:
      '/s/ variation and gayness with @ZacBoyd_. First time I\'ve seen my own work cited by anyone other than me! #LavLang24 <div class="gallery"><ul><li><a href="../../tweets_media/857943729554030593-C-gHQq8XcAA9Ff2.jpg"><img src="../../tweets_media/857943729554030593-C-gHQq8XcAA9Ff2.jpg"></a></li></ul></div>',
    favouriteCount: "8",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Apr 28 13:01:53 +0000 2017",
    idStr: "857942948213870593",
    content:
      'Looking forward to presenting new angle on MA work later, representing @QMULLinguistics. Now for similar work from @ZacBoyd_ #LavLang24 <div class="gallery"><ul><li><a href="../../tweets_media/857942948213870593-C-gGiilWsAUQ1Ot.jpg"><img src="../../tweets_media/857942948213870593-C-gGiilWsAUQ1Ot.jpg"></a></li></ul></div>',
    favouriteCount: "13",
    retweetCount: "3",
  },
  {
    createdAt: "Fri Apr 28 10:26:34 +0000 2017",
    idStr: "857903864254795776",
    content:
      'Attendees of #LavLang24 and #lgas10 may be interested in the Queer Linguist(ic)s Network on Facebook: <a href="https://www.facebook.com/groups/queerlinguistics/">https://www.facebook.com/groups/queerlinguistics/</a>',
    favouriteCount: "1",
    retweetCount: "3",
  },
  {
    createdAt: "Fri Apr 28 10:02:51 +0000 2017",
    idStr: "857897892006252544",
    content:
      "Fantastic opening plenary: @HelenSauntson highlights shortcomings of UK sex/relationships education via queer applied linguistics #LavLang24",
    favouriteCount: "3",
    retweetCount: "4",
  },
  {
    createdAt: "Thu Apr 27 14:14:00 +0000 2017",
    idStr: "857598710179667968",
    content:
      'Erez Levon from @QMULLinguistics delivering plenary "Negotiating subjective conflict: language and the dialogical self" @LGaS_baal #lgas10 <div class="gallery"><ul><li><a href="../../tweets_media/857598710179667968-C-bNdNkW0AE9R_R.jpg"><img src="../../tweets_media/857598710179667968-C-bNdNkW0AE9R_R.jpg"></a></li><li><a href="../../tweets_media/857598710179667968-C-bNeOoW0AEuHYw.jpg"><img src="../../tweets_media/857598710179667968-C-bNeOoW0AEuHYw.jpg"></a></li></ul></div>',
    favouriteCount: "7",
    retweetCount: "3",
  },
  {
    createdAt: "Thu Apr 27 13:46:55 +0000 2017",
    idStr: "857591894100070401",
    content:
      "Interesting to hear of legal challenges for Indian Hijra and trans communities and struggle for self-definition from @ArpitaKanjilal #lgas10",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Apr 27 10:40:19 +0000 2017",
    idStr: "857544934416687104",
    content:
      "Reference to work by @ajmerrison in talk on neoliberal masculinity in online pick up artist community by @Dr_Bob82 @Mark_McGlashan #lgas10",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Apr 27 09:16:59 +0000 2017",
    idStr: "857523962011582464",
    content:
      "At @LGaS_baal meeting on language, discrimination and conflict representing @QMULLinguistics. Lots of interesting talks! #lgas10",
    favouriteCount: "6",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Apr 20 12:17:12 +0000 2017",
    idStr: "855032601454809088",
    content:
      'Interesting discussion of gender-neutral pronouns but disappointing lack of reference to non-binarity <a href="http://www.economist.com/news/books-and-arts/21719768-praise-singular-they-english-has-traditional-solution-gender-neutral-pronouns">http://www.economist.com/news/books-and-arts/21719768-praise-singular-they-english-has-traditional-solution-gender-neutral-pronouns</a> @TheEconomist',
    favouriteCount: "3",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Apr 19 20:36:23 +0000 2017",
    idStr: "854795837553221633",
    content:
      'Can you offer "Mx" for non-binary people and others @bookingcom and make the field optional please? Forced lying isn\'t fun @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/854795837553221633-C9zYRcyWAAAK4Qz.jpg"><img src="../../tweets_media/854795837553221633-C9zYRcyWAAAK4Qz.jpg"></a></li></ul></div>',
    favouriteCount: "12",
    retweetCount: "4",
  },
  {
    createdAt: "Wed Apr 19 14:26:14 +0000 2017",
    idStr: "854702683835576320",
    content:
      'I Am Gender. <div class="gallery"><ul><li><a href="../../tweets_media/854702683835576320-C9yDh2rXcAIqKiO.jpg"><img src="../../tweets_media/854702683835576320-C9yDh2rXcAIqKiO.jpg"></a></li></ul></div>',
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 15 14:58:30 +0000 2017",
    idStr: "853261254936453120",
    content:
      "People need to stop: taking dictionaries as gospel; basing arguments on that flawed assumption. They're working documents with cultural lag.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 14 19:03:08 +0000 2017",
    idStr: "852960431681437698",
    content:
      'Ermm, these are no more descriptive than what I wrote. Thanks Word... <div class="gallery"><ul><li><a href="../../tweets_media/852960431681437698-C9ZS5TTW0AI0zYr.jpg"><img src="../../tweets_media/852960431681437698-C9ZS5TTW0AI0zYr.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 04 16:22:47 +0000 2017",
    idStr: "849296198678835202",
    content:
      "@AskPS_UK Looks like you might have missed this - can you advise?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 31 02:16:20 +0000 2017",
    idStr: "847633630184710144",
    content:
      'I can\'t complete your bus survey @TfL. Please recognise non-binary people in future research @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/847633630184710144-C8NmSSqUIAANCKL.jpg"><img src="../../tweets_media/847633630184710144-C8NmSSqUIAANCKL.jpg"></a></li></ul></div>',
    favouriteCount: "8",
    retweetCount: "3",
  },
  {
    createdAt: "Thu Mar 30 17:23:32 +0000 2017",
    idStr: "847499547450392576",
    content:
      'In @Independent: "Barnier, who speaks fluent if accented English" - as opposed to unaccented (default/neutral?) British English speakers?',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 30 11:02:58 +0000 2017",
    idStr: "847403774280835073",
    content:
      "@stonewalluk @ScottishTrans This article on toilet signs I published yesterday may be of interest to you.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 30 11:01:01 +0000 2017",
    idStr: "847403283287126017",
    content:
      "@simpsontraining @theFoxFisher @nonbinaryuk @nonbinaryorg @cnlester This article on toilet signs I published yesterday may be of interest.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 29 14:51:25 +0000 2017",
    idStr: "847098876922384384",
    content:
      "@MxActivist This article on toilet signs I just published may be of interest to you.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 29 14:38:08 +0000 2017",
    idStr: "847095535588818944",
    content:
      "@BeyondTheBinary @CissexismDaily @everydaytrans @EDTransphobia This article on toilet signs I just published may be of interest.",
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Mar 29 14:33:03 +0000 2017",
    idStr: "847094257576001536",
    content:
      'I wrote a thing on picking the right sign for gender-neutral toilets. Scintillating stuff. Do read. <a href="https://twitter.com/yndajas/status/847093834454618112">https://twitter.com/yndajas/status/847093834454618112</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 29 14:31:23 +0000 2017",
    idStr: "847093834454618112",
    content:
      'Toilet worries: representing gender neutrality (transculturally) <a href="http://yndajas.co/2017/03/29/toilet-worries-representing-gender-neutrality-transculturally/">http://yndajas.co/2017/03/29/toilet-worries-representing-gender-neutrality-transculturally/</a> <div class="gallery"><ul><li><a href="../../tweets_media/847093834454618112-C8F7WfmV4AQ1Lbj.jpg"><img src="../../tweets_media/847093834454618112-C8F7WfmV4AQ1Lbj.jpg"></a></li></ul></div>',
    favouriteCount: "13",
    retweetCount: "11",
  },
  {
    createdAt: "Wed Mar 22 19:23:33 +0000 2017",
    idStr: "844630647134150656",
    content:
      'Summary of PhD thesis "Talking beyond the binary" current direction now available via first link on resources page: <a href="http://yndajas.co/resources">http://yndajas.co/resources</a>',
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 21 16:45:13 +0000 2017",
    idStr: "844228413451882497",
    content: "What do felt, dance, starfish and trade ships have in common?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 21 12:53:12 +0000 2017",
    idStr: "844170023480496129",
    content:
      'Yesterday @JBPersonalBrand spoke on "real women" nonsense: <a href="http://www.huffingtonpost.co.uk/jess-bradley/trans-women_b_15486434.html">http://www.huffingtonpost.co.uk/jess-bradley/trans-women_b_15486434.html</a> …. 21 years ago it was lesbians: <a href="https://www.jstor.org/stable/3810266">https://www.jstor.org/stable/3810266</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 17 12:35:49 +0000 2017",
    idStr: "842716098084700160",
    content:
      "MP from ruling party as newspaper editor... what could possibly be wrong with that? *facepalm* #GeorgeOsborne #EveningStandard",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 16 22:10:05 +0000 2017",
    idStr: "842498228276940801",
    content: "Werner Herzog on Rick and Morty!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 16 14:10:10 +0000 2017",
    idStr: "842377455033819137",
    content:
      "One key point to acknowledge in free speech/freeze peach debates is that censorship and broadcast are not antonymous (opposite).",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 16 13:10:07 +0000 2017",
    idStr: "842362342688071681",
    content:
      'Read this whole thread from @anaisdpedica about universities policing staff/student "behaviour" on social media and talking about racism. <a href="https://twitter.com/anaisdpedica/status/841977294512099328">https://twitter.com/anaisdpedica/status/841977294512099328</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 12 22:53:01 +0000 2017",
    idStr: "841059482801168384",
    content:
      '"No, the Asian woman in that viral BBC video was not the nanny" <a href="https://mic.com/articles/170855/no-the-asian-woman-in-that-viral-bbc-video-was-not-the-nanny#.ckVKm1ecM">https://mic.com/articles/170855/no-the-asian-woman-in-that-viral-bbc-video-was-not-the-nanny#.ckVKm1ecM</a> via @msolis14 @Mic',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 11 17:39:45 +0000 2017",
    idStr: "840618259560951810",
    content: "... by which I mean blog *post*.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 11 17:31:02 +0000 2017",
    idStr: "840616064023171073",
    content:
      '... and the poll itself [2/2] <a href="https://twitter.com/CissexismDaily/status/840615194787233792">https://twitter.com/CissexismDaily/status/840615194787233792</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 11 17:30:44 +0000 2017",
    idStr: "840615988907384832",
    content:
      'Interested to know thoughts on this. My preference is C or D. Will probably do a follow-up blog about it at some point [1/2] <a href="https://twitter.com/CissexismDaily/status/840613676147200001">https://twitter.com/CissexismDaily/status/840613676147200001</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 11 04:23:23 +0000 2017",
    idStr: "840417848363212800",
    content: "Can you be pregnant without baby?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 09 17:27:36 +0000 2017",
    idStr: "839890424919642112",
    content: "Oh, and I've surpassed just 1000 followers. Yay!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 09 17:25:37 +0000 2017",
    idStr: "839889925818437632",
    content:
      'Homepage refresh at <a href="http://yndajas.co">http://yndajas.co</a>. Also updated metadata and got https:// working #geekout <div class="gallery"><ul><li><a href="../../tweets_media/839889925818437632-C6fi0qGXMAEeYhr.jpg"><img src="../../tweets_media/839889925818437632-C6fi0qGXMAEeYhr.jpg"></a></li><li><a href="../../tweets_media/839889925818437632-C6fi1xFWgAA0qU_.jpg"><img src="../../tweets_media/839889925818437632-C6fi1xFWgAA0qU_.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 27 12:40:43 +0000 2017",
    idStr: "836194351076225025",
    content: "Eternally a coach C traveller.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 24 14:36:06 +0000 2017",
    idStr: "835136225178697729",
    content:
      'Brilliant #yorklgbthistory (and @act4transhealth t-shirt) from @simpsontraining on trans-related language at York Lavender Linguistics! <a href="https://twitter.com/simpsontraining/status/835098909332627456">https://twitter.com/simpsontraining/status/835098909332627456</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Feb 24 01:32:35 +0000 2017",
    idStr: "834939047281840128",
    content:
      "@Femitheist My friend @GreenLee_Anne is here. They are here. Lee-Anne is cool. They are cool. There is actually systematicity, just complex.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 24 01:24:35 +0000 2017",
    idStr: "834937034137612289",
    content:
      "@Femitheist ... and etymology doesn't define contemporary use. Language changes. There's a whole field of academic inquiry devoted to that.",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Feb 23 15:54:49 +0000 2017",
    idStr: "834793646184660994",
    content:
      'The vile neoliberalism at the top of institutions that should be providing a public service: <a href="https://www.theguardian.com/education/2017/feb/23/university-vice-chancellors-average-pay-now-exceeds-275000">https://www.theguardian.com/education/2017/feb/23/university-vice-chancellors-average-pay-now-exceeds-275000</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 22 20:09:55 +0000 2017",
    idStr: "834495454071160843",
    content:
      'Updates to website: two new pages (resources; media, under new "experience" menu) and minor amendments throughout. <a href="http://yndajas.co">http://yndajas.co</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 16 13:57:11 +0000 2017",
    idStr: "832227325760651268",
    content:
      "@AltGent @MiroGriffiths @GreenLee_Anne Will, the influence is common but not actually necessary.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 16 13:44:31 +0000 2017",
    idStr: "832224140434296833",
    content:
      "@AltGent @MiroGriffiths @GreenLee_Anne If it was gospel language would never change, which is simply not the case.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 14 23:29:25 +0000 2017",
    idStr: "831646558668124162",
    content:
      "@AltGent @GreenLee_Anne ... difference in characteristics. They don't seek to eradicate difference.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 14 23:05:45 +0000 2017",
    idStr: "831640604526387200",
    content:
      "@AltGent @GreenLee_Anne And validity of categories not determined by presence/absence of purpose. Much in the world has no apparent purpose.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 14 22:42:45 +0000 2017",
    idStr: "831634815233490948",
    content: "Love a good anti-troll statistics lesson.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 14 22:33:40 +0000 2017",
    idStr: "831632529652404230",
    content:
      '@AltGent @GreenLee_Anne So 1 in 50 people called. This may also be of interest to you as a sex enthusiast: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4687544/">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4687544/</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 06 15:49:48 +0000 2022",
    idStr: "1500498891040559118",
    content:
      '👏 equality, diversity and inclusion checklist culture ≠ equity, inclusion and social justice <a href="https://twitter.com/professor_dave/status/1500397336052314113">https://twitter.com/professor_dave/status/1500397336052314113</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 14 21:38:58 +0000 2017",
    idStr: "831618764164694018",
    content:
      "... does unsolicited (queerphobic) hate mean you're famous in the Twittersphere?",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 14 21:35:10 +0000 2017",
    idStr: "831617806210826241",
    content:
      'Considered cancerous by an individual who wishes to promote traditional class meritocracy: my greatest achievement? <a href="https://twitter.com/AltGent/status/831593520532246528">https://twitter.com/AltGent/status/831593520532246528</a>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 08 19:21:35 +0000 2017",
    idStr: "829409863491006464",
    content:
      'Interesting/disappointing that Judith Butler is a user of "him and her"... @CissexismDaily',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 06 14:24:30 +0000 2017",
    idStr: "828610321824808960",
    content:
      "@TheHawkeWood @CissexismDaily @facebook ... so I unlinked all family connections. *Think* that might remove them from others' profiles.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 03 13:54:59 +0000 2017",
    idStr: "827515730933456896",
    content:
      'YG and Nipsey Hussle "FDT (Fuck Donald Trump)": <a href="https://youtu.be/WkZ5e94QnWk">https://youtu.be/WkZ5e94QnWk</a> via @YouTube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 03 11:21:46 +0000 2017",
    idStr: "827477173418209280",
    content:
      "@Mark0Connell But to clarify, I don't necessarily mean active protest. Obviously you can't actively protest everything. But support/reject.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 03 10:42:14 +0000 2017",
    idStr: "827467223002443776",
    content:
      "If you protest Trump platform of UK visit yet support Julie Bindel platform of LGBT History Month event then... cognitive dissonance.",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 01 19:42:49 +0000 2017",
    idStr: "826878492763680768",
    content: "... in a very crude assuming-all-views-are-equal kind of way.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 01 19:41:21 +0000 2017",
    idStr: "826878120523341825",
    content:
      'Tweet views ("impressions") in last 28 days: c11800. Website views over the same period: 106. So Twitter provides 111 times more exposure... <div class="gallery"><ul><li><a href="../../tweets_media/826878120523341825-C3mpH8PWAAIJ-UA.jpg"><img src="../../tweets_media/826878120523341825-C3mpH8PWAAIJ-UA.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 01 19:30:24 +0000 2017",
    idStr: "826875366958567424",
    content:
      '... but think I\'d still stick with "Kind regards", which feels to me the least hammy/jarring for general purpose, but still a bit hammy...',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 01 19:28:51 +0000 2017",
    idStr: "826874975546130433",
    content:
      'Interesting research from @Boomerang on response rate by email closing. Thankful closings most successful. <a href="http://blog.boomerangapp.com/2017/01/how-to-end-an-email-email-sign-offs">http://blog.boomerangapp.com/2017/01/how-to-end-an-email-email-sign-offs</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 01 19:25:51 +0000 2017",
    idStr: "826874220831502336",
    content:
      "@boomerang @lifehacker 2. One-to-one versus one-to-many emails? 3. Did you look at emails with no closing except for the sender's name?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 01 01:22:00 +0000 2017",
    idStr: "826601459223519232",
    content:
      '.@JustinBengry on government propaganda and exploitation of queer people/struggle (old post, but relevant again). <a href="https://twitter.com/JustinBengry/status/826475429020184577">https://twitter.com/JustinBengry/status/826475429020184577</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 31 19:38:15 +0000 2017",
    idStr: "826514955532980225",
    content:
      "If new identity-related categories/labels/words sound weird to you, just keep saying them and you'll get used to it. That's how words work.",
    favouriteCount: "11",
    retweetCount: "10",
  },
  {
    createdAt: "Tue Jan 31 17:00:38 +0000 2017",
    idStr: "826475289911914496",
    content:
      'Our world is "led" by some of the worst among us. <a href="https://twitter.com/netanyahu/status/825371795972825089">https://twitter.com/netanyahu/status/825371795972825089</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 31 16:14:49 +0000 2017",
    idStr: "826463757329190914",
    content:
      'Thanks for the mention @ysjulgbtstaff @ysjequality but don\'t think the lanyards were my idea, and HR made it happen! <a href="http://blog.yorksj.ac.uk/lgbt/2017/01/27/reflections-on-stonewall-top-100/">http://blog.yorksj.ac.uk/lgbt/2017/01/27/reflections-on-stonewall-top-100/</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 31 13:36:02 +0000 2017",
    idStr: "826423800648593408",
    content:
      '... don\'t use generic "he or she" at all, but particularly salient/ironically bad in queer contexts @nytimes @jwpetersNYT @CissexismDaily',
    favouriteCount: "8",
    retweetCount: "6",
  },
  {
    createdAt: "Tue Jan 31 13:33:31 +0000 2017",
    idStr: "826423164272070656",
    content:
      'When reporting LGBT/MOGAI/GRSM/queer issues, best not use generic "his or her" @nytimes @jwpetersNYT @CissexismDaily <a href="https://donotlink.it/KWwx">https://donotlink.it/KWwx</a>',
    favouriteCount: "9",
    retweetCount: "8",
  },
  {
    createdAt: "Tue Jan 31 13:11:23 +0000 2017",
    idStr: "826417595872116736",
    content:
      'Finally... ""Billions" will make TV history with gender non-conforming star and role" <a href="http://www.huffingtonpost.com/entry/billions-gender-non-binary-character_us_58531cf5e4b08debb78842cb">http://www.huffingtonpost.com/entry/billions-gender-non-binary-character_us_58531cf5e4b08debb78842cb</a>',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Jan 31 00:52:12 +0000 2017",
    idStr: "826231573917888513",
    content:
      'TW: Trump; fascism<br><br>This is a grim as fuck analysis by @yonatanzunger of the very start of the Trump presidency... <a href="https://medium.com/@yonatanzunger/trial-balloon-for-a-coup-e024990891d5#.w2hbsy4ef">https://medium.com/@yonatanzunger/trial-balloon-for-a-coup-e024990891d5#.w2hbsy4ef</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 30 21:07:27 +0000 2017",
    idStr: "826175014529593344",
    content:
      'The anti-Trump/May #MuslimBan protest carries on... with dance. <div class="gallery"><ul><li><video controls src="../../tweets_media/826175014529593344-VArUbmTW2KLha3wg.mp4"></video></li></ul></div>',
    favouriteCount: "4",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Jan 30 20:17:23 +0000 2017",
    idStr: "826162415968595968",
    content:
      'But wish Ed "controls on immigration" Miliband wasn\'t an invited speaker. Fuck that. #MuslimBan',
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Jan 30 20:16:11 +0000 2017",
    idStr: "826162110849761282",
    content: "So packed at the London #MuslimBan protest. Awesome turnout.",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 30 12:51:45 +0000 2017",
    idStr: "826050265874849792",
    content:
      '@GreenLee_Anne Complementary photographic evidence: <a href="http://i2.cdn.cnn.com/cnnnext/dam/assets/170128160233-federer-nadal-collage-exlarge-169.jpg">http://i2.cdn.cnn.com/cnnnext/dam/assets/170128160233-federer-nadal-collage-exlarge-169.jpg</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 30 03:26:27 +0000 2017",
    idStr: "825908002838441989",
    content:
      "Nadal and Federer wore the same outfit below the waist at the Australian Open final #AusOpen2017 #AusOpenFinal",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 29 16:38:05 +0000 2017",
    idStr: "825744837739737088",
    content:
      '@Philips Also please include "Mx" on title fields and make them optional. @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/825744837739737088-C3Wia4XWQAIVmoZ.jpg"><img src="../../tweets_media/825744837739737088-C3Wia4XWQAIVmoZ.jpg"></a></li></ul></div>',
    favouriteCount: "5",
    retweetCount: "4",
  },
  {
    createdAt: "Sun Jan 29 16:22:10 +0000 2017",
    idStr: "825740832678490115",
    content:
      'Gender fields should always have more than two options @Philips, but also: marketing is not a valid reason to ask/require gender. <div class="gallery"><ul><li><a href="../../tweets_media/825740832678490115-C3WeymnXAAMl1DZ.jpg"><img src="../../tweets_media/825740832678490115-C3WeymnXAAMl1DZ.jpg"></a></li></ul></div>',
    favouriteCount: "7",
    retweetCount: "4",
  },
  {
    createdAt: "Sat Jan 28 13:32:00 +0000 2017",
    idStr: "825335620356579328",
    content:
      'We updated the terminology at the Museum of Transology. No more passive verb-rooted adjective… <a href="https://www.instagram.com/p/BPz1DFeBRvB/">https://www.instagram.com/p/BPz1DFeBRvB/</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 27 00:14:05 +0000 2017",
    idStr: "824772431399239680",
    content:
      "... though there is valid critique of the over-infantalisation/de-sexualisation of kids, to which such attitudes may contribute. [3/3]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 27 00:12:02 +0000 2017",
    idStr: "824771914669363200",
    content:
      '* in contexts (cultural or otherwise) where people are uncomfortable using "adult" language to refer to genitalia... [2/3]',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 27 00:09:22 +0000 2017",
    idStr: "824771241152282624",
    content:
      'Good idea*, but be aware not all boys have willies and not all girls have vaginas @BBCNews <a href="http://www.bbc.co.uk/news/video_and_audio/features/magazine-38749364/38749364">http://www.bbc.co.uk/news/video_and_audio/features/magazine-38749364/38749364</a> @CissexismDaily',
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Jan 25 14:47:00 +0000 2017",
    idStr: "824267328992985089",
    content:
      'No surprise there... "3D TVs are dead" <a href="http://tcrn.ch/2k3ieCZ">http://tcrn.ch/2k3ieCZ</a> via @techcrunch',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 24 23:36:51 +0000 2017",
    idStr: "824038285416730625",
    content:
      "Poem on everyday thoughts of the radically-minded...<br><br>\"Shit Sandwich\"<br><br>You're shit<br>Your politics is shit<br>Your ideology is shit<br>You're shit",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 24 22:36:30 +0000 2017",
    idStr: "824023097368072194",
    content:
      "@dialect @ZacBoyd_ @JoFrhwld @Lavlang Look forward to your presentation!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 24 22:11:08 +0000 2017",
    idStr: "824016713494708225",
    content:
      "@QMULLinguistics @yorklgbthistory ...with a new angle on work conducted whilst at @UoYLangLing and in preparation for @Lavlang!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 24 22:04:18 +0000 2017",
    idStr: "824014991745490948",
    content:
      'Looking forward to rep\'ing @QMULLinguistics at York Lavender Linguistics for @yorklgbthistory on 24 February. See: <a href="https://www.facebook.com/events/1385219438168313/">https://www.facebook.com/events/1385219438168313/</a> <div class="gallery"><ul><li><a href="../../tweets_media/824014991745490948-C2984iTW8AA6nRg.jpg"><img src="../../tweets_media/824014991745490948-C2984iTW8AA6nRg.jpg"></a></li></ul></div>',
    favouriteCount: "9",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jan 20 12:18:50 +0000 2017",
    idStr: "822418104680640512",
    content:
      'Great to see this continue! Congratulations @FionaThompson16 @ysjequality @RyRyPB @dgarfield8 @mattharper88 @Silviya_L @HelenSauntson et al! <a href="https://twitter.com/YorkStJohn/status/822039101973073921">https://twitter.com/YorkStJohn/status/822039101973073921</a>',
    favouriteCount: "6",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 20 12:04:35 +0000 2017",
    idStr: "822414516440940545",
    content: "@Greenchutes Ah, just seen it!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 15 22:45:43 +0000 2017",
    idStr: "820763925839015936",
    content:
      "Hey follow @CissexismDaily and also tag in tweets about everyday cissexism, binarism, cisnormativity...",
    favouriteCount: "5",
    retweetCount: "3",
  },
  {
    createdAt: "Tue Jan 10 20:15:45 +0000 2017",
    idStr: "818914244129333249",
    content:
      'Yay! Pronouns for badges and more at @Lavlang! #trans #NB #nonbinary #inclusive #inclusivity <div class="gallery"><ul><li><a href="../../tweets_media/818914244129333249-C11eJB2XAAAHXYP.jpg"><img src="../../tweets_media/818914244129333249-C11eJB2XAAAHXYP.jpg"></a></li></ul></div>',
    favouriteCount: "7",
    retweetCount: "3",
  },
  {
    createdAt: "Tue Jan 03 00:32:53 +0000 2017",
    idStr: "816079850662490112",
    content:
      'Soundtrack to last-minute push to finish writing and pack before heading for bus in 3.5 hours: Herbie Hancock\'s "Chameleon"/"Head Hunters".',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 01 00:29:06 +0000 2017",
    idStr: "815354124313227264",
    content:
      "I literally don't care that it's not the same Gregorian year as it was 30 minutes ago.",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Dec 28 16:16:34 +0000 2016",
    idStr: "814143009780596737",
    content: "FIXING NEWS!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 27 15:22:38 +0000 2016",
    idStr: "813767051739365376",
    content: "@Maria_Munir Going well?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 27 13:01:42 +0000 2016",
    idStr: "813731583807078400",
    content:
      "Half an hour back in York. Bumped into three people I know. Small city.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 27 10:08:06 +0000 2016",
    idStr: "813687893319450625",
    content: "@JRKASSTAN @romper ... but still feminist issues!)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 27 10:07:40 +0000 2016",
    idStr: "813687784334622720",
    content:
      "@JRKASSTAN @romper (I'm thinking specifically of polygyny in Islam for the latter, which is pretty rare, but there is some kind of veto...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 27 10:06:13 +0000 2016",
    idStr: "813687422374514688",
    content:
      "@JRKASSTAN @romper ... consent and mutual rights are key in the former, but should note consent also (usually?) built into latter.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 27 01:40:30 +0000 2016",
    idStr: "813560153589092352",
    content:
      'Let\'s normalise poly(amory) (and talking about it). Monogamy/amory is not inherently more natural or healthy... <a href="https://www.romper.com/p/i-was-shamed-by-other-parents-for-being-a-polyamorous-mom-24618?llid=08QDW">https://www.romper.com/p/i-was-shamed-by-other-parents-for-being-a-polyamorous-mom-24618?llid=08QDW</a>',
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Dec 26 00:26:04 +0000 2016",
    idStr: "813179035878653953",
    content:
      '... and reify the underlying principle that celebrities are greater than "ordinary" people (who die every day).',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Dec 26 00:24:46 +0000 2016",
    idStr: "813178707607252995",
    content:
      "... don't attempt to make definitive lists of major deaths as you'll inevitably omit people outside of your own bias(es) (e.g. Western pop).",
    favouriteCount: "3",
    retweetCount: "3",
  },
  {
    createdAt: "Mon Dec 26 00:13:02 +0000 2016",
    idStr: "813175753324003328",
    content: "Don't forget Phife.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 18 00:57:39 +0000 2016",
    idStr: "810287880362934272",
    content: "@the_zoharr @CissexismDaily ... they just guessed?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 18 00:57:23 +0000 2016",
    idStr: "810287810641063937",
    content:
      "@the_zoharr @CissexismDaily Handed it in but they didn't process while I was there. Not heard anything since, so guessing it's fine or...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 13 17:07:42 +0000 2016",
    idStr: "808720062148464640",
    content:
      'Such great advice! <a href="https://twitter.com/CissexismDaily/status/807558383058423808">https://twitter.com/CissexismDaily/status/807558383058423808</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 13 17:05:22 +0000 2016",
    idStr: "808719474148970496",
    content:
      '!?!? <a href="https://twitter.com/queeracademic/status/616621769630199808">https://twitter.com/queeracademic/status/616621769630199808</a>',
    favouriteCount: "6",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Dec 13 16:41:28 +0000 2016",
    idStr: "808713457919033344",
    content:
      "@srpnor ... but I think I changed the gender field to blank. Of course, the systems are no doubt entirely different and incompatible...",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 13 16:32:51 +0000 2016",
    idStr: "808711290877280257",
    content:
      'GP registration fun... #nonbinary #binarism #cisnormativity #cissexism #health @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/808711290877280257-CzkeniiWQAAf9LM.jpg"><img src="../../tweets_media/808711290877280257-CzkeniiWQAAf9LM.jpg"></a></li></ul></div>',
    favouriteCount: "10",
    retweetCount: "3",
  },
  {
    createdAt: "Mon Dec 12 16:20:05 +0000 2016",
    idStr: "808345690384568321",
    content:
      '@JRKASSTAN ... and hypotheticals. Interesting they chose "ze"! But good to see awareness spreading!',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 09 19:42:34 +0000 2016",
    idStr: "807309482862768128",
    content: '"Colony Gin"? The fuck? #TheApprentice',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 05 23:13:00 +0000 2016",
    idStr: "805912889739636737",
    content:
      "Planet Earth II, episode five: the one where David Attenborough becomes fixated on grass #planetearth2",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 05 22:44:06 +0000 2016",
    idStr: "805905614085951489",
    content:
      '... one further improvement on trans question would be adding a "Sometimes/partially" option for genderfluid, demi/bigender etc people @QMSU <a href="https://twitter.com/yndajas/status/805823825728405505">https://twitter.com/yndajas/status/805823825728405505</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 05 17:22:02 +0000 2016",
    idStr: "805824564622135297",
    content:
      '... don\'t really agree that "Other" on forms is othering, but this wording avoids possible invalidating feelings @QMSU @redbrickteam [3/3]',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 05 17:20:19 +0000 2016",
    idStr: "805824131203825664",
    content:
      '... including alphabetical ordering on gender, "best describes", and "In another way" rather than "Other"... [2/3] @QMSU @redbrickteam',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 05 17:19:06 +0000 2016",
    idStr: "805823825728405505",
    content:
      'Quite like the wording of the gender and sexuality monitoring on this @QMSU @redbrickteam survey. Maybe imperfect, but a good step forward. <div class="gallery"><ul><li><a href="../../tweets_media/805823825728405505-Cy7cLMVW8AATdm2.jpg"><img src="../../tweets_media/805823825728405505-Cy7cLMVW8AATdm2.jpg"></a></li></ul></div>',
    favouriteCount: "12",
    retweetCount: "4",
  },
  {
    createdAt: "Fri Dec 02 13:20:20 +0000 2016",
    idStr: "804676577430740992",
    content:
      'Yorkies: get your @yorklgbthistory #YLGBTHM17 #YorkLGBTHistory event submissions in today! <a href="https://twitter.com/yorklgbthistory/status/804627132290895872">https://twitter.com/yorklgbthistory/status/804627132290895872</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 20 03:31:46 +0000 2022",
    idStr: "1495239731583623168",
    content:
      'ありがとうございます ☺️ the paper definitely has its limitations - would love to read more takes on the subject! <a href="https://twitter.com/anarchist_neko/status/1493913030022680578">https://twitter.com/anarchist_neko/status/1493913030022680578</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 26 20:50:49 +0000 2016",
    idStr: "802615616792383488",
    content:
      "... this form of the article title is nowhere to be found in its source code.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 26 20:49:55 +0000 2016",
    idStr: "802615390589239296",
    content:
      'Interesting. Article title is "Trump condemns Castro as \'brutal dictator\'" yet the Google preview seems to be pre-empting something else... <div class="gallery"><ul><li><a href="../../tweets_media/802615390589239296-CyN2FozWEAA8Kcg.jpg"><img src="../../tweets_media/802615390589239296-CyN2FozWEAA8Kcg.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 23 21:04:32 +0000 2016",
    idStr: "801531906718388229",
    content: "When people say they have no words then produce more words.",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Nov 22 22:00:13 +0000 2016",
    idStr: "801183530994659328",
    content:
      'From quantitative analysis of fairly big data regarding the label "TERF" to food porn: a well-varied day of output? <a href="https://www.instagram.com/p/BNIL60nha-p/">https://www.instagram.com/p/BNIL60nha-p/</a>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 22 19:31:53 +0000 2016",
    idStr: "801146200829235200",
    content:
      '... and the link to the article by @wordspinster for any onlookers: <a href="https://debuk.wordpress.com/2016/11/06/what-makes-a-word-a-slur/">https://debuk.wordpress.com/2016/11/06/what-makes-a-word-a-slur/</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Nov 22 19:31:04 +0000 2016",
    idStr: "801145994998116353",
    content:
      ".@wordspinster ... plus comparison with LGBT orthographic casing variation. Seems TERF/terf are more evenly distributed than LGBT/lgbt.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 22 19:28:20 +0000 2016",
    idStr: "801145307618742272",
    content:
      'A little afternoon data analysis regarding article by @wordspinster on whether #TERF is a slur, specifically the terf/Terf/TERF disctintion. <div class="gallery"><ul><li><a href="../../tweets_media/801145307618742272-Cx48lYiXgAEiL8z.jpg"><img src="../../tweets_media/801145307618742272-Cx48lYiXgAEiL8z.jpg"></a></li><li><a href="../../tweets_media/801145307618742272-Cx48lYfXAAAU4aV.jpg"><img src="../../tweets_media/801145307618742272-Cx48lYfXAAAU4aV.jpg"></a></li><li><a href="../../tweets_media/801145307618742272-Cx49LZjXUAAdzPr.jpg"><img src="../../tweets_media/801145307618742272-Cx49LZjXUAAdzPr.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 18 17:16:10 +0000 2016",
    idStr: "799662493455044609",
    content:
      'White person does hippity hoppity vocal-alongity: <a href="http://yndajas.co/wp-content/uploads/2016/11/A_Tribe_Called_Quest-Movin_Backwards.wav">http://yndajas.co/wp-content/uploads/2016/11/A_Tribe_Called_Quest-Movin_Backwards.wav</a> #ATCQ',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 17 17:46:57 +0000 2016",
    idStr: "799307855069409280",
    content:
      'Security question at @GoldsmithsUoL... <div class="gallery"><ul><li><a href="../../tweets_media/799307855069409280-Cxe2OFiXUAAWvSU.jpg"><img src="../../tweets_media/799307855069409280-Cxe2OFiXUAAWvSU.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 16 13:12:10 +0000 2016",
    idStr: "798876315646644224",
    content:
      'What does it actually mean to be a "national" or "international" conference or festival? Is it empty marketing?',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 11 04:18:19 +0000 2016",
    idStr: "796930026142834688",
    content:
      '"Kids..." by @ATCQ ft. Andre 3000 sounds like a sequel to @gorillaz "DoYaThing" #ATCQ #WeGotItFromHere #WeGotItFromHereThankYou4YourService',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 11 03:57:19 +0000 2016",
    idStr: "796924744415186944",
    content: "We got it from Here... Thank You 4 Your service #ATCQ",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 10 16:08:39 +0000 2016",
    idStr: "796746400696516609",
    content:
      '"We will travel to every corner of the globe." But a globe doesn\'t have corners #PlanetEarth',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 09 17:54:21 +0000 2016",
    idStr: "796410614839054336",
    content: "Hello.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 07 19:58:45 +0000 2016",
    idStr: "795717143417524225",
    content:
      "On one album: @ATCQ André 3000 @kendricklamar @AndersonPaak. How can it get any better?",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Nov 07 00:33:58 +0000 2016",
    idStr: "795424016467197952",
    content:
      'Legally I can be man or woman, but I\'m not, so maybe I should deed poll my first and middle names to "Fuck The" (for the cause) #tranarchy',
    favouriteCount: "6",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Nov 06 13:51:08 +0000 2016",
    idStr: "795262241876611072",
    content:
      "@grievesmith @GreenLee_Anne ... but yeah, not exactly ideal for fluidity.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 06 12:33:56 +0000 2016",
    idStr: "795242812795133952",
    content:
      'Different tablets for men and women, and none for non-binaries! @CissexismDaily @EverydaySexism @EvrydayFeminism <div class="gallery"><ul><li><a href="../../tweets_media/795242812795133952-CwlFG7zWgAARmu8.jpg"><img src="../../tweets_media/795242812795133952-CwlFG7zWgAARmu8.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 05 19:33:51 +0000 2016",
    idStr: "794986102880923648",
    content:
      "At @WeAreZizzi on Wigmore Street, @GreenLee_Anne and I had to choose between binary gendered *single cubicle* toilets. Why? @CissexismDaily",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Nov 04 12:59:46 +0000 2016",
    idStr: "794524541011820545",
    content:
      'Ermm... @CissexismDaily @EverydaySexism @EvrydayFeminism <div class="gallery"><ul><li><a href="../../tweets_media/794524541011820545-Cwa31NlXUAAzWXL.jpg"><img src="../../tweets_media/794524541011820545-Cwa31NlXUAAzWXL.jpg"></a></li></ul></div>',
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Nov 02 18:43:38 +0000 2016",
    idStr: "793886302089408513",
    content:
      'Drool... <a href="https://twitter.com/okayplayer/status/793878198186610689">https://twitter.com/okayplayer/status/793878198186610689</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 31 20:05:02 +0000 2016",
    idStr: "793182011917758464",
    content:
      'My supervisor briefly charting development of labels for LGBT/queer individuals, arriving at contemporary meanings of queer and genderqueer. <a href="https://twitter.com/QMULLinguistics/status/791950983899164672">https://twitter.com/QMULLinguistics/status/791950983899164672</a>',
    favouriteCount: "4",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Oct 31 19:01:21 +0000 2016",
    idStr: "793165983175307266",
    content:
      "Delighted to be (poster) presenting at @Lavlang 24, @UniofNottingham April 2017, representing @QMULLinguistics, building on @UniOfYork work.",
    favouriteCount: "5",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Oct 31 11:29:27 +0000 2016",
    idStr: "793052258766389248",
    content:
      'Vegan brunch and studying at @vegan_hippo in Soho. <div class="gallery"><ul><li><a href="../../tweets_media/793052258766389248-CwF8wz8XEAEnEIV.jpg"><img src="../../tweets_media/793052258766389248-CwF8wz8XEAEnEIV.jpg"></a></li></ul></div>',
    favouriteCount: "3",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Oct 30 00:22:57 +0000 2016",
    idStr: "792522141124161538",
    content: "@GreenLee_Anne ... though it's had a few facelifts.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 30 00:16:40 +0000 2016",
    idStr: "792520559909273600",
    content: "... with education pricing...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 30 00:16:27 +0000 2016",
    idStr: "792520505597329409",
    content:
      "I'd love to upgrade my seven-year old MacBook Pro... if it didn't cost me £2600 (£1000+ more than my current model)  to do so...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 27 13:43:55 +0000 2016",
    idStr: "791636549498732546",
    content:
      "Most memorable insight/soundbite: \"sex isn't binary, but it's bimodal\" (@solwunderwood) [2/2]",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 27 13:43:10 +0000 2016",
    idStr: "791636360146907136",
    content:
      'Great interview of/insights from @solwunderwood and @GenderBen on various sex and gender matters, 7:40-26:30: <a href="https://soundcloud.com/user-439011276/we-are-u-of-t-episode-1-trans-organising-at-u-of-t#t=7:40">https://soundcloud.com/user-439011276/we-are-u-of-t-episode-1-trans-organising-at-u-of-t#t=7:40</a> [1/2]',
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Oct 25 15:21:22 +0000 2016",
    idStr: "790936294117498882",
    content: 'Next up: "Lessons from a Starfish".',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 25 13:05:12 +0000 2016",
    idStr: "790902027631165440",
    content:
      'No shit: "Carter notes [] "transition," [] transgender argot for changing genders, [also] choreographic term for how movements are linked".',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 25 12:57:11 +0000 2016",
    idStr: "790900009415897088",
    content: "UK Government basically trolling [3/3]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 25 12:54:49 +0000 2016",
    idStr: "790899415972188160",
    content:
      "Petition clearly addressed irrelevance and insignificance of 2011 AV referendum, yet that's all the government bothered to focus on. [2/2]",
    favouriteCount: "1",
    retweetCount: "3",
  },
  {
    createdAt: "Tue Oct 25 12:53:45 +0000 2016",
    idStr: "790899148711161856",
    content:
      'Most bullshit response ever from government on this petition: <a href="https://petition.parliament.uk/petitions/168657">https://petition.parliament.uk/petitions/168657</a> [1/?]',
    favouriteCount: "2",
    retweetCount: "3",
  },
  {
    createdAt: "Tue Oct 25 12:48:12 +0000 2016",
    idStr: "790897751559118848",
    content:
      'Haha, thanks @LegendaryLGBT! <div class="gallery"><ul><li><a href="../../tweets_media/790897751559118848-CvnVTeFXEAAYCGP.jpg"><img src="../../tweets_media/790897751559118848-CvnVTeFXEAAYCGP.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 23 13:05:07 +0000 2016",
    idStr: "790177232148918272",
    content: "San Junipero... #BlackMirror",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 21 13:18:16 +0000 2016",
    idStr: "789455763743834112",
    content: "@jones_lucy ...by which I mean direct messaged!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 17 11:19:31 +0000 2016",
    idStr: "787976329396416512",
    content: "Yay - another qualification!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 16 13:57:20 +0000 2016",
    idStr: "787653656132849664",
    content:
      "When you're reading stuff on your phone right in front of you and reach to your side to pick up your phone to put some music on...",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 16 00:01:55 +0000 2016",
    idStr: "787443416418357248",
    content:
      "Directing marketing videos is totally what business people do, not the professional, expert, skilled videographers they hire #TheApprentice",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 15 17:25:05 +0000 2016",
    idStr: "787343549985615872",
    content: "What if you wrote your entire PhD in the sarcastic mode?",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 15 15:22:06 +0000 2016",
    idStr: "787312603735461888",
    content: "@ev_neferty But I thought you were leaving me to it?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 15 15:20:37 +0000 2016",
    idStr: "787312229980962817",
    content:
      "Trans people are entirely capable of undermining the very concepts that are the foundations of our validity...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 15 15:15:04 +0000 2016",
    idStr: "787310833005129728",
    content:
      "@ev_neferty You know sex is more than just external sex characteristics? There are gonads, hormones, chromosomes... these don't invalidate!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 15 15:03:16 +0000 2016",
    idStr: "787307863387570177",
    content: "How many people are you? How many do you embody?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 13 17:51:40 +0000 2016",
    idStr: "786625464219504640",
    content: "See: Magnus Hirschfeld. [5/5]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 13 17:51:19 +0000 2016",
    idStr: "786625377128984577",
    content:
      "... which housed the Museum of Sex, visited by school classes and tons of famous people, including Sergei Eisenstein. [4/5]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 13 17:49:49 +0000 2016",
    idStr: "786624998840479744",
    content:
      "The Scientific-Humanitarian Committee was founded by a gay Jewish socialist. He also established the Institute of Sexual Research... [3/?]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 13 17:38:34 +0000 2016",
    idStr: "786622170910695424",
    content:
      "... Einstein and Tolstoy supported the repeal of anti-gay law in Germany. See: the Scientific-Humanitarian Committee. [2/2]",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 13 17:37:32 +0000 2016",
    idStr: "786621906963214336",
    content:
      "Learned today: gay (probably just gay) and trans advocacy has been coupled at least as far back as 1897... [1/?]",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 13 15:45:43 +0000 2016",
    idStr: "786593768187138048",
    content:
      'Cited @meyrude and @baltimoresun in two updates to my April coming-out-as-genderqueer post: <a href="http://yndajas.co/2016/04/03/lavender-white-green/">http://yndajas.co/2016/04/03/lavender-white-green/</a> [search term: "update"].',
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Oct 13 12:51:17 +0000 2016",
    idStr: "786549870274502657",
    content:
      'I reckon André 3000 dropped "Solo (Reprise)" on Blonde just to mess up Google searches desperately seeking affirmation of a new solo album.',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 12 20:38:28 +0000 2016",
    idStr: "786305055225942016",
    content:
      'When describing a young-looking adult (self or other), why do people always opt for the age twelve ("they look like a twelve-year-old")?',
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Oct 11 22:02:12 +0000 2016",
    idStr: "785963739875012608",
    content:
      'List of most beautiful UK university campuses by @CultureTrip includes @UniOfYork but no @YorkStJohn! Prestige bias? <a href="https://theculturetrip.com/europe/united-kingdom/england/london/articles/the-most-beautiful-university-campuses-in-the-uk/">https://theculturetrip.com/europe/united-kingdom/england/london/articles/the-most-beautiful-university-campuses-in-the-uk/</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 11 21:17:46 +0000 2016",
    idStr: "785952558460395520",
    content:
      'No. <a href="https://twitter.com/Alpro/status/785497691447066624">https://twitter.com/Alpro/status/785497691447066624</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 11 16:49:38 +0000 2016",
    idStr: "785885080602365952",
    content:
      "TL;DR: I'm genderqueer; use they/them/their/themself to refer to me in the third person singular. [3/3]",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 11 16:49:33 +0000 2016",
    idStr: "785885057764306944",
    content:
      '... for those interested. <a href="http://yndajas.co/2016/04/03/lavender-white-green/">http://yndajas.co/2016/04/03/lavender-white-green/</a> [2/3]',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 11 16:49:05 +0000 2016",
    idStr: "785884938813878272",
    content:
      "Oh so apparently it's #NationalComingOutDay. My latest en-masse coming out was in April through this article, which I'll reshare here [1/?]",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 11 12:19:10 +0000 2016",
    idStr: "785817015059558400",
    content:
      'Please sign @GreenLee_Anne​\'s petition for non-binary visibility on UK passports: <a href="https://you.38degrees.org.uk/petitions/add-an-x-marker-to-british-passports">https://you.38degrees.org.uk/petitions/add-an-x-marker-to-british-passports</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Oct 10 11:40:02 +0000 2016",
    idStr: "785444777097564160",
    content: "A gender normative greeting card is one in five.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 10 11:39:30 +0000 2016",
    idStr: "785444641722302464",
    content: "A good greeting card is one in a million.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 06 11:51:12 +0000 2016",
    idStr: "783998035533688832",
    content: "Why are newspapers and their websites obsessed with age?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 06 11:21:54 +0000 2016",
    idStr: "783990662748377088",
    content: "Brilliant use of platform!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 06 11:21:27 +0000 2016",
    idStr: "783990551557406720",
    content:
      "So @common took a song about racism and modern slavery via thirteenth amendment and prison industrial complex to the @WhiteHouse. Wow!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 20:29:10 +0000 2016",
    idStr: "783765999531294721",
    content:
      "Don't ladies and gentlemen-ise your audience, and don't gender audiences members of unknown gender by way of instructing microphone rovers.",
    favouriteCount: "4",
    retweetCount: "4",
  },
  {
    createdAt: "Wed Oct 05 20:12:33 +0000 2016",
    idStr: "783761818959409156",
    content:
      "Political tweets are sponsored by fixed heating, which made home too warm to leave for the swimming pool.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 20:09:37 +0000 2016",
    idStr: "783761080585691136",
    content: "... with which spin it *may* be deemed radical.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 20:08:10 +0000 2016",
    idStr: "783760716079726596",
    content:
      "... which can alternatively be framed as removing the oppressive traits of the table in order to be able to sit at it. Spin.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 20:07:11 +0000 2016",
    idStr: "783760465361068033",
    content:
      "* as opposed to the liberal political sense of LGB/queer folks trying to get a seat at the table of their historical oppressors.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 09 14:40:24 +0000 2022",
    idStr: "1491421730820468737",
    content:
      'Sad not to be able to experience the endless warmth and truly beautiful spirit of Shay again in person, but the impact they had on everyone around them will stay with us forever. We will remember you, fondly <a href="https://twitter.com/Genderintell/status/1491404335510884357">https://twitter.com/Genderintell/status/1491404335510884357</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 30 14:21:28 +0000 2022",
    idStr: "1487793086159802376",
    content:
      "Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos! Vamos!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 24 12:17:59 +0000 2022",
    idStr: "1485587684127133697",
    content: "git tash",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 20:04:55 +0000 2016",
    idStr: "783759895745224704",
    content:
      "Conformity can promote homonormativity (in the homo as default queer identity sense*) as well as heteronormativity.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 20:03:20 +0000 2016",
    idStr: "783759497642840064",
    content:
      "But it's questionable what any such statistics really mean (issues of sampling, identity and labels, unconscious conformity...).",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 20:00:49 +0000 2016",
    idStr: "783758862583263234",
    content:
      'Despite around a half/50% supposedly identifying (on a survey, as opposed to in their heads) as not 100% straight (last year?). Blurriness. <a href="https://twitter.com/guardian/status/783752891660111872">https://twitter.com/guardian/status/783752891660111872</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 19:38:59 +0000 2016",
    idStr: "783753369592692737",
    content:
      'Labour calling Conservatives to account for their racist policy being less effective than prophesied. *facepalm* <a href="https://twitter.com/labourpress/status/783266273266429952">https://twitter.com/labourpress/status/783266273266429952</a>',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Oct 05 19:14:33 +0000 2016",
    idStr: "783747222408163332",
    content: "@yndajas whose*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 19:11:12 +0000 2016",
    idStr: "783746377486663680",
    content:
      "... those with ideologies or worldviews that are detached from reality, that's whose. Forcing binary order/systems onto polyary phenomena.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 19:03:57 +0000 2016",
    idStr: "783744554428207104",
    content:
      "Bewildering that the law *forces* inaccuracy. Challenges notions of the law being the provider of order. Who's order?",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Oct 05 19:02:25 +0000 2016",
    idStr: "783744167851749376",
    content: "GRC = gender recognition certificate.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 05 19:02:10 +0000 2016",
    idStr: "783744106312925185",
    content:
      "Law forces data inaccuracy with regard to all non-binary (e.g. legal gender on passports) and many binary trans people (those without GRCs).",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Oct 05 17:04:43 +0000 2016",
    idStr: "783714546250838017",
    content: "Drowning in a sea of black and navy.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 04 18:36:17 +0000 2016",
    idStr: "783375202621198336",
    content:
      "Some highlights: gender assignment at birth a ritualistic cultural act; power politics of policing social terms; eternal gender plurality!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 04 18:32:19 +0000 2016",
    idStr: "783374203600928769",
    content:
      'Excellent article on denial of correct pronouning for trans people by @GenderBen @solwunderwood: <a href="http://torontoist.com/2016/10/u-of-t-trans-rights/">http://torontoist.com/2016/10/u-of-t-trans-rights/</a> [1]',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Oct 03 22:33:39 +0000 2016",
    idStr: "783072552012902400",
    content:
      "(1) don't generalise local practices to whole cultures (2) check your own culture's (normalised) cruelties (3) recognise your bias [2]",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Oct 03 22:31:36 +0000 2016",
    idStr: "783072036344168448",
    content:
      'People who hate on China/Chinese people for localised food practices that go against your values because e.g. they\'re "pets" or cute... [1]',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 02 11:30:16 +0000 2016",
    idStr: "782543215471779841",
    content:
      'So so fine (minus some of the social politics of "Suede"): <a href="https://youtu.be/ferZnZ0_rSM">https://youtu.be/ferZnZ0_rSM</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 29 12:57:29 +0000 2016",
    idStr: "781478003972902912",
    content:
      'Awkward page number referencing: "undertaken by performer Rae Bourbon over her sixty-year career and impressively long life (484)."',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 27 14:50:30 +0000 2016",
    idStr: "780781666398797824",
    content:
      'Abstracts due Monday! <a href="https://twitter.com/Lavlang/status/777872946295627776">https://twitter.com/Lavlang/status/777872946295627776</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Sep 17 18:51:24 +0000 2016",
    idStr: "777218412577685506",
    content:
      "Urgh. That May deriding that Corbyn for believing in equality of outcome over equality of opportunity. Get with the times, May.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 17 18:34:48 +0000 2016",
    idStr: "777214234400792576",
    content:
      'Reflection. <div class="gallery"><ul><li><video controls src="../../tweets_media/777214234400792576-9A2ZHykvlyuV4Vr2.mp4"></video></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 18:36:17 +0000 2016",
    idStr: "763443869207916545",
    content:
      "Inconsistent use of en and em dashes is displeasing, though the fault largely lies with Microsoft Office and not users.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 13:04:55 +0000 2016",
    idStr: "763360477388935168",
    content:
      '.@nakd just added "Mx" to their system (only a few days after requesting and without any hassle; very good customer service!) @nonbinaryuk',
    favouriteCount: "4",
    retweetCount: "3",
  },
  {
    createdAt: "Wed Aug 10 00:18:08 +0000 2016",
    idStr: "763167511097569280",
    content:
      '@Jack15194 His response: "I totally support your efforts for equal rights for women"...',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 00:04:34 +0000 2016",
    idStr: "763164095902351360",
    content: "6000 (now +1) tweets!",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 00:00:33 +0000 2016",
    idStr: "763163087356723201",
    content:
      "#firstsevenjobs [3/3]<br>@YorkStJohn<br>5. Student Ambassador<br>6. YSJActive Graduate Intern<br>7. Academic Quality Support Officer",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 00:00:20 +0000 2016",
    idStr: "763163034407804928",
    content:
      "#firstsevenjobs [2/3]<br>@KreateHQ<br>3. Brand Ambassador<br>@YSJSU<br>4. Freecycle Co-ordinator",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 00:00:05 +0000 2016",
    idStr: "763162969249374208",
    content:
      "#firstsevenjobs [1/3]<br>@RuralInsurance<br>1. Business Support Technician <br>2. Business Support Administrator",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 09 23:54:16 +0000 2016",
    idStr: "763161507530153984",
    content:
      "Sports commentating: often get men [making assumptions here] commentating on women's sport, but do you ever get women commentating on men's?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 09 15:44:17 +0000 2016",
    idStr: "763038197878296582",
    content:
      '... though for me the issue is not the "gender-neutral" label but rather its naïve interpretation by clothing retailers. @letclothesbe [2/2]',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Aug 09 15:42:25 +0000 2016",
    idStr: "763037729340915712",
    content:
      'Good post on gender-neutral/all-gender clothing by @letclothesbe: <a href="https://letclothesbeclothes.uk/2016/08/03/gender-neutral-parenting-challenging-stereotypes-and-irresponsible-retailers-is-just-parenting/">https://letclothesbeclothes.uk/2016/08/03/gender-neutral-parenting-challenging-stereotypes-and-irresponsible-retailers-is-just-parenting/</a> [1/2]',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Aug 06 23:19:06 +0000 2016",
    idStr: "762065493905768448",
    content:
      'From <a href="https://m.facebook.com/story.php?story_fbid=10157181381740177&id=512210176">https://m.facebook.com/story.php?story_fbid=10157181381740177&id=512210176</a> <div class="gallery"><ul><li><a href="../../tweets_media/762065493905768448-CpNmhF-WIAAHCvw.jpg"><img src="../../tweets_media/762065493905768448-CpNmhF-WIAAHCvw.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 05 23:49:02 +0000 2016",
    idStr: "761710639073099777",
    content:
      '.@Topman @topmanUK I\'d suggest removing the "Mr/Mrs" from your automated emails - this is exclusive on many levels. <div class="gallery"><ul><li><a href="../../tweets_media/761710639073099777-CpIjwFfWYAAfKKc.jpg"><img src="../../tweets_media/761710639073099777-CpIjwFfWYAAfKKc.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 20 22:32:56 +0000 2016",
    idStr: "755893278520840192",
    content:
      "(But I'd still support Corbyn over the vast majority of other Labour MPs.)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 20 22:28:43 +0000 2016",
    idStr: "755892219018641408",
    content:
      'Seems Labour were whipped (presumably by Corbyn) not to support enacting proportional representation. Disappointing. <a href="https://twitter.com/wesstreeting/status/755739982472544256">https://twitter.com/wesstreeting/status/755739982472544256</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 19 18:31:04 +0000 2016",
    idStr: "755470026782769152",
    content:
      'Queer linguists/linguists doing queer stuff: you may be interested in this group I just created all for you! <a href="https://www.facebook.com/groups/queerlinguistics/">https://www.facebook.com/groups/queerlinguistics/</a>',
    favouriteCount: "9",
    retweetCount: "13",
  },
  {
    createdAt: "Tue Jul 19 17:02:18 +0000 2016",
    idStr: "755447686602588160",
    content:
      'The problem with the Blairites and shiny (New) Labour clique is that they are "for the party", not the people. <a href="https://twitter.com/angelaeagle/status/755444810803208192">https://twitter.com/angelaeagle/status/755444810803208192</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Jul 18 22:25:32 +0000 2016",
    idStr: "755166643135864833",
    content:
      'The result of today\'s vote is a travesty. Black provides a quick tour of so many key reasons why. <a href="https://twitter.com/MhairiBlack/status/755129093859840000">https://twitter.com/MhairiBlack/status/755129093859840000</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 13 09:42:46 +0000 2016",
    idStr: "753162746733039616",
    content:
      '[@ysjulgbtstaff] Update: discounted theatre tickets; LGBTQ people, faith and spirituality: <a href="https://wp.me/p4uHbe-v9">https://wp.me/p4uHbe-v9</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 28 21:20:32 +0000 2016",
    idStr: "747902527832723457",
    content:
      'And more on systemic racism by the brilliant @akalamusic and with very accessible explanation and exemplification: <a href="https://www.facebook.com/NUBIMAGAZINE/videos/vb.581943528524482">https://www.facebook.com/NUBIMAGAZINE/videos/vb.581943528524482</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 28 21:18:36 +0000 2016",
    idStr: "747902039800193024",
    content:
      'That incredible @iJesseWilliams speech on systemic racism: <a href="https://www.facebook.com/TheUPR/videos/vb.145154795561511">https://www.facebook.com/TheUPR/videos/vb.145154795561511</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 27 10:43:45 +0000 2016",
    idStr: "747379885786669057",
    content:
      '"Ignoring its members could condemn Labour to irrelevancy for a generation" | @DawnHFoster <a href="http://gu.com/p/4mm3f/stw">http://gu.com/p/4mm3f/stw</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 27 02:08:41 +0000 2016",
    idStr: "747250266928480256",
    content:
      'Pooh-y referendum: <a href="https://www.facebook.com/chickthing/posts/1250855811593499">https://www.facebook.com/chickthing/posts/1250855811593499</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 27 00:45:08 +0000 2016",
    idStr: "747229238730887172",
    content:
      '"The biggest Brexit irony, nailed in 140 characters" <a href="http://i100.io/YeTpHlg">http://i100.io/YeTpHlg</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 27 00:35:18 +0000 2016",
    idStr: "747226766784114688",
    content:
      'Share and critique: “Polyamorous relationships may be the future of love” <a href="http://yndajas.co/2016/06/27/share-critique-polyamorous-relationships-may-future-love/">http://yndajas.co/2016/06/27/share-critique-polyamorous-relationships-may-future-love/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 26 22:41:54 +0000 2016",
    idStr: "747198226395242496",
    content:
      'Short thoughts: EU referendum, the future, governance and education <a href="http://yndajas.co/2016/06/26/short-thoughts-eu-referendum-future-governance-education/">http://yndajas.co/2016/06/26/short-thoughts-eu-referendum-future-governance-education/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 25 09:14:51 +0000 2016",
    idStr: "746632739181436928",
    content:
      'Well that\'s a different honourific... <div class="gallery"><ul><li><a href="../../tweets_media/746632739181436928-ClySgmKXIAAn0m5.jpg"><img src="../../tweets_media/746632739181436928-ClySgmKXIAAn0m5.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 25 08:32:36 +0000 2016",
    idStr: "746622105618358272",
    content:
      'Great speech from @NicolaSturgeon on hopes for Scotland\'s future in the EU and a likely #indyref2 <a href="https://www.facebook.com/theSNP/videos/10154369452494078/">https://www.facebook.com/theSNP/videos/10154369452494078/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 24 19:46:38 +0000 2016",
    idStr: "746429343178559488",
    content:
      "Was there so much drive among Labour supporters for axing previous leaders when they were moving the national agenda over to the right?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 24 18:52:32 +0000 2016",
    idStr: "746415731378524161",
    content: "Divided Queendom. Time to split into a few (or many) republics?",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 24 07:44:15 +0000 2016",
    idStr: "746247552190791680",
    content:
      "Critical thinking/political literacy should feature strongly in compulsory education, not just be consigned to further/higher education.",
    favouriteCount: "5",
    retweetCount: "3",
  },
  {
    createdAt: "Wed Jun 22 13:57:35 +0000 2016",
    idStr: "745616729296896000",
    content:
      '[@ysjulgbtstaff] Are you the next secretary? <a href="https://wp.me/p4uHbe-uX">https://wp.me/p4uHbe-uX</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 22 13:49:05 +0000 2016",
    idStr: "745614587928580096",
    content:
      '[@ysjulgbtstaff] Being LGBT at York St John event - reflections by a straight cisgender ally, employee and a...: <a href="https://wp.me/p4uHbe-ux">https://wp.me/p4uHbe-ux</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 17 19:47:48 +0000 2016",
    idStr: "743892921670307842",
    content:
      "Just realised I used the @yorklgbthistory account to retweet critical commentary from @DrJillStein on Hillary Clinton. Whoopsies!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 16 15:09:43 +0000 2016",
    idStr: "743460555575468036",
    content:
      "Socially constructed is *not* to biologically determined as fake is to real.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 10 17:04:58 +0000 2016",
    idStr: "741315231117410304",
    content:
      'Interesting, albeit highly partisan: "... @DrJillStein blasts Hillary for already implementing Donald’s policies" <a href="http://www.salon.com/2016/06/09/clinton_helped_create_trump_green_partys_jill_stein_blasts_hillary_for_already_implementing_donalds_policies/">http://www.salon.com/2016/06/09/clinton_helped_create_trump_green_partys_jill_stein_blasts_hillary_for_already_implementing_donalds_policies/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 09 19:27:00 +0000 2016",
    idStr: "740988587055939584",
    content:
      'Does contrasting "disabled" with "able-bodied" make mental health invisible (what about "able-minded"?) or is mind to be inferred from body?',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 08 21:31:56 +0000 2016",
    idStr: "740657639718281216",
    content:
      "My great friend and @yorklgbthistory Lead Coordinator @krheyam star of tonight's 'Inside Versailles'. Check him out! <a href=\"http://bbc.in/25MZRAT\">http://bbc.in/25MZRAT</a>",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Jun 02 17:47:31 +0000 2016",
    idStr: "738426836984692737",
    content:
      'Interesting read from @krheyam on the dangers of appropriating histories, pinkwashing and decontextualisation. <a href="https://twitter.com/krheyam/status/738414478207913984">https://twitter.com/krheyam/status/738414478207913984</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 01 12:24:25 +0000 2016",
    idStr: "737983137154793476",
    content:
      'So @yorklgbthistory is now officially a registered charity! <a href="https://twitter.com/yorklgbthistory/status/737976345649647616">https://twitter.com/yorklgbthistory/status/737976345649647616</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 30 15:03:25 +0000 2016",
    idStr: "737298374290984960",
    content:
      'UK most corrupt country in the world according to Gomorrah writer @robertosaviano <a href="http://www.independent.co.uk/news/uk/home-news/roberto-saviano-britain-corrupt-mafia-hay-festival-a7054851.html">http://www.independent.co.uk/news/uk/home-news/roberto-saviano-britain-corrupt-mafia-hay-festival-a7054851.html</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 27 12:03:45 +0000 2016",
    idStr: "736165998013886464",
    content: 'Just typed "Londan Sociol"...',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 24 14:14:32 +0000 2016",
    idStr: "735111746462089220",
    content:
      'Radical: "Twitter drops media and @name replies from 140-character limit" <a href="http://www.engadget.com/2016/05/24/twitter-140-character-count-update/">http://www.engadget.com/2016/05/24/twitter-140-character-count-update/</a> via @engadget',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 16 17:20:17 +0000 2022",
    idStr: "1482764658641625091",
    content:
      'Picturing Nadal submitting his CV for job applications after retiring from tennis <a href="https://twitter.com/LorenzoAndreol4/status/1480558069478273028">https://twitter.com/LorenzoAndreol4/status/1480558069478273028</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 12 06:43:41 +0000 2022",
    idStr: "1481154902382555138",
    content:
      'Thread <a href="https://twitter.com/BenRothenberg/status/1479730371679850500">https://twitter.com/BenRothenberg/status/1479730371679850500</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 12 06:35:39 +0000 2022",
    idStr: "1481152878085652481",
    content:
      "He won't, but let's raise the profile of this <a href=\"https://twitter.com/MiddleEastEye/status/1480977426209460229\">https://twitter.com/MiddleEastEye/status/1480977426209460229</a>",
    favouriteCount: "12",
    retweetCount: "7",
  },
  {
    createdAt: "Sat May 21 12:57:13 +0000 2016",
    idStr: "734005126038466560",
    content:
      '"There Are Seven Continents. Or Six. Or Five. Or Four. Or Eight. (Oh, Never Mind.)" <a href="http://basementgeographer.com/there-are-seven-continents-or-six-or-five-or-four-or-eight-oh-never-mind/">http://basementgeographer.com/there-are-seven-continents-or-six-or-five-or-four-or-eight-oh-never-mind/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 18 18:44:30 +0000 2016",
    idStr: "733005357602082816",
    content:
      'Short thought: yes to LGBT-only student accommodation <a href="http://yndajas.co/2016/05/18/short-thought-yes-lgbt-student-accommodation/">http://yndajas.co/2016/05/18/short-thought-yes-lgbt-student-accommodation/</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 17 21:33:55 +0000 2016",
    idStr: "732685603679154177",
    content:
      '.@EqualityinHE Any plans to update "Trans staff and students in higher education", including to recognise non-binary identities?',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 17 10:46:32 +0000 2016",
    idStr: "732522683951251456",
    content:
      '[@ysjulgbtstaff] Update: IDAHOBIT; Stammtisch; @stonewalluk award: <a href="https://wp.me/p4uHbe-tj">https://wp.me/p4uHbe-tj</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 13 18:16:39 +0000 2016",
    idStr: "731186410896674817",
    content:
      ".@hyfreelance notes irony in banning a conference on Islamaphobia #ResistanceYork",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri May 13 18:12:36 +0000 2016",
    idStr: "731185389747249153",
    content:
      ".@hyfreelance touching on the differential use of language to promote implicit prejudice and selective dehumanisation #ResistanceYork",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri May 13 18:06:30 +0000 2016",
    idStr: "731183856364191744",
    content:
      ".@Arts4Palestine answers the question: what has Islam done for 'us'? Answer: an abundance of innovation, and then some. #ResistanceYork",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 13 17:57:12 +0000 2016",
    idStr: "731181514508107777",
    content:
      ".@Arts4Palestine observes that Muslims are only ever presented as perpetrators, never victims #ResistanceYork",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 13 17:52:51 +0000 2016",
    idStr: "731180419002081280",
    content:
      ".@Arts4Palestine provides examples of how Islamaphobia permeates mainstream media - not just on the right - overt or covert #ResistanceYork",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 13 17:48:48 +0000 2016",
    idStr: "731179402181120002",
    content:
      ".@Arts4Palestine outlining the stats on terrorism. To suggest it's a Muslim thing is ludicrous at best #ResistanceYork",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 11 21:41:24 +0000 2016",
    idStr: "730513162731147264",
    content:
      'TW: sexual assault. "My Father, Woody Allen, and the Danger of Questions Unasked (Guest Column)" <a href="http://www.hollywoodreporter.com/news/my-father-woody-allen-danger-892572">http://www.hollywoodreporter.com/news/my-father-woody-allen-danger-892572</a> via @thr',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 06 15:14:15 +0000 2016",
    idStr: "728603790375555072",
    content:
      '"There\'s now a petition to have David Attenborough re-named \'Boaty McBoatface\'" <a href="http://i100.io/KRCP0SP">http://i100.io/KRCP0SP</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 04 12:44:02 +0000 2016",
    idStr: "727841214708498432",
    content:
      'Yes. Yes. Yes. "There’s nowt wrong with dialects, nothing broke ass about slang" | @StanCarey <a href="http://gu.com/p/4tnzx/stw">http://gu.com/p/4tnzx/stw</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Tue May 03 00:05:45 +0000 2016",
    idStr: "727287995154485248",
    content:
      "Eww. Dirty feeling opening The Times and The Telegraph for academic research purposes (and not in incognito mode).",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 27 13:23:44 +0000 2016",
    idStr: "725314490678558720",
    content:
      "Heavy rain and hail are like an aural massage (when you're inside).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 15 11:42:10 +0000 2016",
    idStr: "720940276051742720",
    content:
      '.@SpareRoomUK Just emailed - want to place an ad but gender barrier. Appreciate a fix. @nonbinaryuk #NBinclusion <div class="gallery"><ul><li><a href="../../tweets_media/720940276051742720-CgFLXCcWwAEwm7m.jpg"><img src="../../tweets_media/720940276051742720-CgFLXCcWwAEwm7m.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 14 15:09:53 +0000 2016",
    idStr: "720630159649341440",
    content:
      '[@ysjulgbtstaff] Update: join the York LGBT History Month team; gender study: <a href="https://wp.me/p4uHbe-sN">https://wp.me/p4uHbe-sN</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 14 15:02:08 +0000 2016",
    idStr: "720628208370982914",
    content:
      'New @yorklgbthistory committee election - venue details: <a href="http://wp.me/p4LXYh-26O">http://wp.me/p4LXYh-26O</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 08 15:38:02 +0000 2016",
    idStr: "718462917037989888",
    content:
      "Hip hop (and authenticity) has featured in discussions a fair bit over the last two days! #LIB2016",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 08 15:09:27 +0000 2016",
    idStr: "718455722267250689",
    content:
      "British Asian speakers shifted style after re-reading researcher Devyani Sharma's own cultural identity #LIB2016",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 08 10:47:40 +0000 2016",
    idStr: "718389844964163585",
    content:
      'Kriol speakers sometimes positively identify as speakers of "broken English"! #LIB2016',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Apr 08 10:45:33 +0000 2016",
    idStr: "718389310626623488",
    content:
      "... specifically where the linguist is an outsider. Individual/group differences in response to researcher #LIB2016",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 08 10:44:02 +0000 2016",
    idStr: "718388929314078721",
    content:
      "Alternative effects of linguist presence: increased/decreased use of local forms to promote/mitigate insider/outsider dimension #LIB2016",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 08 10:03:41 +0000 2016",
    idStr: "718378774191022080",
    content:
      "Students in Belize love Kriol (a Creole) because no one tells them what is right or wrong #LIB2016",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Apr 08 09:20:28 +0000 2016",
    idStr: "718367898058768385",
    content: "False finish #LIB2016",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 08 08:50:56 +0000 2016",
    idStr: "718360466280615936",
    content: "Got Praat #LIB2016",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 07 15:03:48 +0000 2016",
    idStr: "718091913941938177",
    content:
      "@miefemoe @LHassert May be (tangentially) relevant to your work, @helenjattwood? (See tweet above.)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 07 15:02:22 +0000 2016",
    idStr: "718091553093324800",
    content:
      "Conversation analytic research on creating belonging in international teams through daily team talk by @miefemoe @LHassert #LIB2016",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 07 14:49:52 +0000 2016",
    idStr: "718088408652988416",
    content:
      "@annettezhao @AdamCSchembri @TeviTweets @ysjequality and @axiomaticalice?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 07 14:15:54 +0000 2016",
    idStr: "718079859562582016",
    content:
      "@annettezhao ... i.e the two have unique sociocultural meanings/associations, but with overlap. I think!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 07 14:12:49 +0000 2016",
    idStr: "718079084887207936",
    content:
      "@annettezhao ... but in the case of d/Deaf people who sign, I would've thought it would be dual (think that's how people I know identify)...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 07 14:06:33 +0000 2016",
    idStr: "718077506667036672",
    content:
      '... would have thought dual identification as "disabled person" and "sign language user" more common, but interesting distinction! #LIB2016',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 07 14:04:23 +0000 2016",
    idStr: "718076960698707968",
    content:
      'Now Hofer notes global trend toward cultural identity "sign/minority language user" rather than "disabled person" #LIB2016 [2/2]',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 07 14:01:09 +0000 2016",
    idStr: "718076149717463040",
    content:
      'Social model "disabled person" preferred over medical model "person with disability/ies" (in UK) #LIB2016 [1/2]',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 05 17:33:54 +0000 2016",
    idStr: "717404910640316418",
    content:
      'The sniggers when someone writes "causal" but they meant "casual" #linguageek #statsgeek',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:48:27 +0000 2016",
    idStr: "716804596014964736",
    content:
      "@ShagMeFrida @Missiamphetamin @GreenLee_Anne @AndrewNickolls @aimeec110 include he.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:47:03 +0000 2016",
    idStr: "716804243131383808",
    content:
      "@ShagMeFrida @Missiamphetamin @GreenLee_Anne @AndrewNickolls @aimeec110 And as I keep saying. Not a dude.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:46:08 +0000 2016",
    idStr: "716804010909560832",
    content:
      "@ShagMeFrida @Missiamphetamin @GreenLee_Anne @AndrewNickolls @aimeec110 etymological opposite of trans.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:36:27 +0000 2016",
    idStr: "716801572295090176",
    content:
      "To suggest those who knowingly and harmfully appropriate are being appropriate is wholly inappropriate.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:34:27 +0000 2016",
    idStr: "716801073009270784",
    content:
      "@Missiamphetamin @GreenLee_Anne @ShagMeFrida @AndrewNickolls @aimeec110 Gender...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:33:36 +0000 2016",
    idStr: "716800855287209984",
    content:
      "@ShagMeFrida @Missiamphetamin @GreenLee_Anne @AndrewNickolls @aimeec110 And they aren't less women either!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:16:19 +0000 2016",
    idStr: "716796505961734144",
    content:
      "@Missiamphetamin @GreenLee_Anne @ShagMeFrida @AndrewNickolls @aimeec110 various biological backgrounds.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:03:48 +0000 2016",
    idStr: "716793359109603328",
    content:
      "@ShagMeFrida @GreenLee_Anne @Missiamphetamin @AndrewNickolls @aimeec110 their womanhood.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:01:37 +0000 2016",
    idStr: "716792810159087616",
    content:
      "@ShagMeFrida @GreenLee_Anne @Missiamphetamin @AndrewNickolls @aimeec110 my sentiments with anything of sense or note?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:01:16 +0000 2016",
    idStr: "716792720740716545",
    content:
      "@ShagMeFrida @GreenLee_Anne @Missiamphetamin @AndrewNickolls @aimeec110 am I to assume that your personal retorts mean you don't contend...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 01:00:32 +0000 2016",
    idStr: "716792534131982336",
    content:
      "@ShagMeFrida @GreenLee_Anne @Missiamphetamin @AndrewNickolls @aimeec110 ... understanding of matters of privilege and prejudice. Also...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 00:54:07 +0000 2016",
    idStr: "716790921879273473",
    content:
      "@GreenLee_Anne @AndrewNickolls @aimeec110 @TheGreenParty hurled at those pushing the agenda forward. Where is the standing up?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 00:51:51 +0000 2016",
    idStr: "716790351781040128",
    content:
      "@ShagMeFrida @GreenLee_Anne @Missiamphetamin @AndrewNickolls @aimeec110 which is an outward manifestation of prejudice.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 03 13:11:03 +0000 2016",
    idStr: "716613987513737216",
    content:
      'Join the York LGBT History Month (@yorklgbthistory) team! <a href="http://wp.me/p4LXYh-26G">http://wp.me/p4LXYh-26G</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Apr 03 12:38:39 +0000 2016",
    idStr: "716605835871387648",
    content:
      "I'm not a man. I'm genderqueer. Read all about it...<br><br><a href=\"http://yndajas.co/2016/04/03/lavender-white-green/\">http://yndajas.co/2016/04/03/lavender-white-green/</a><br><br>PS: don't look at rest of site as horrifically out of date.",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 10 03:32:55 +0000 2021",
    idStr: "1447042432802205696",
    content:
      'Is this not a valid answer (ignoring the intended reference)? @RegexCrossword <div class="gallery"><ul><li><a href="../../tweets_media/1447042432802205696-FBTtJ2oWUAAPS1L.jpg"><img src="../../tweets_media/1447042432802205696-FBTtJ2oWUAAPS1L.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 31 13:27:33 +0000 2016",
    idStr: "715530975313264640",
    content:
      "Hey @YorkStJohn, it's International Trans Day of Visibility #TDoV. Shout out to all our current and prospective trans students?",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Mar 30 18:34:20 +0000 2016",
    idStr: "715245792613765120",
    content:
      "So it turns out I'm going to do that whole PhD thing from September at Queen Mary, University of London.<br><br>*cue last 5.5/84 months in York*",
    favouriteCount: "5",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 27 17:08:10 +0000 2016",
    idStr: "714136944855355396",
    content: "The funky diabetic! No! #goodbyePhife",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 23 16:20:19 +0000 2016",
    idStr: "712675352011677698",
    content:
      'OutWord Bound awards ceremony: <a href="http://wp.me/p4LXYh-26u">http://wp.me/p4LXYh-26u</a> @yorklgbthistory @YorkLGBT',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 23 16:17:46 +0000 2016",
    idStr: "712674708878024704",
    content:
      '[@ysjulgbtstaff] Update: OutWord Bound awards: <a href="https://wp.me/p4uHbe-sJ">https://wp.me/p4uHbe-sJ</a> @yorklgbthistory @YorkLGBT',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Mar 23 14:27:22 +0000 2016",
    idStr: "712646927989522433",
    content:
      '"Facebook: give the option for Polyamorous relationships" <a href="https://www.change.org/p/facebook-give-the-option-for-polyamorous-relationships">https://www.change.org/p/facebook-give-the-option-for-polyamorous-relationships</a> via @UKChange',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 22 17:38:23 +0000 2016",
    idStr: "712332609230131200",
    content:
      "Brilliant conference (#beyondbinaries2016). Loads of fascinating talks and thoughts on non-binarity. When's the next one, @GenderBen?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 17 13:11:21 +0000 2016",
    idStr: "710453467970727936",
    content:
      "@AdamCSchembri @ajmerrison @tillyflint8 @axiomaticalice ... responses to questions given in the language they were asked!",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 11 15:12:39 +0000 2016",
    idStr: "708309669442412544",
    content:
      '.@YorkFemSoc @York_Feminists Head of Equality and Diversity job going at @UniOfYork. To share in feminist networks? <a href="https://jobs.york.ac.uk/wd/plsql/wd_portal.show_job?p_web_site_id=3885&p_web_page_id=254824">https://jobs.york.ac.uk/wd/plsql/wd_portal.show_job?p_web_site_id=3885&p_web_page_id=254824</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Mar 11 14:06:57 +0000 2016",
    idStr: "708293133323386884",
    content:
      '""Stop naming us" say MPs who voted for disability benefit cuts" <a href="http://wp.me/p3hxMj-1Mq">http://wp.me/p3hxMj-1Mq</a> via @NewsToad',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 11 12:59:31 +0000 2016",
    idStr: "708276166327734273",
    content:
      "So the @guardian linked to a Telegraph article without indication. Annoying! I don't want to give right-wing rhetoric any traffic!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 10 17:51:21 +0000 2016",
    idStr: "707987217231306754",
    content:
      'I got an email from David Bowie about p-values. <div class="gallery"><ul><li><a href="../../tweets_media/707987217231306754-CdNGl68UEAI9247.jpg"><img src="../../tweets_media/707987217231306754-CdNGl68UEAI9247.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 10 14:31:51 +0000 2016",
    idStr: "707937011869548544",
    content:
      "Great response from @York_Feminists to @BBCYork's very poor decision to celebrate men on International Women's Day: <a href=\"https://yorkfeministnetwork.wordpress.com/2016/03/10/dont-forget-the-men-on-international-womens-day/\">https://yorkfeministnetwork.wordpress.com/2016/03/10/dont-forget-the-men-on-international-womens-day/</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 09 10:04:02 +0000 2016",
    idStr: "707507226416697344",
    content:
      'Actually two @GSAYork <div class="gallery"><ul><li><a href="../../tweets_media/707507226416697344-CdGSDJxWIAATq7i.jpg"><img src="../../tweets_media/707507226416697344-CdGSDJxWIAATq7i.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Mar 04 11:10:49 +0000 2016",
    idStr: "705712095640203264",
    content:
      '[@ysjulgbtstaff] Update: Go York event (Jesse Toksvig-Stewart, @uglyduckbooks); York Pride ideation: <a href="https://wp.me/p4uHbe-st">https://wp.me/p4uHbe-st</a>',
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Mar 01 13:47:57 +0000 2016",
    idStr: "704664472858796034",
    content:
      'Ridiculous brand fragmentation. Consolidate! <div class="gallery"><ul><li><a href="../../tweets_media/704664472858796034-Ccd4j5mW4AAL-_S.jpg"><img src="../../tweets_media/704664472858796034-Ccd4j5mW4AAL-_S.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 29 22:33:50 +0000 2016",
    idStr: "704434428274196480",
    content:
      "@RevRachelMann @yorklgbthistory ... and of course to @YorkAmnesty for organising and @ChaplaincyYSJ for hosting!",
    favouriteCount: "3",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Feb 29 22:30:33 +0000 2016",
    idStr: "704433604009598976",
    content:
      "@RevRachelMann Many thanks for providing a fitting finale to a busy but brilliant (or tiring but terrific!) @yorklgbthistory 2016!",
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Feb 29 22:25:35 +0000 2016",
    idStr: "704432353339424768",
    content:
      "Anglican @RevRachelMann's authenticity, articulacy and all-round awesomeness is an inspiration to this agnostic! #yorklgbthistory16",
    favouriteCount: "3",
    retweetCount: "3",
  },
  {
    createdAt: "Tue Feb 23 12:10:32 +0000 2016",
    idStr: "702103242184871936",
    content:
      'York LGBT History Month 2016: "Evaluating the Aquinian Natural Law paradigm for the Catholic Church’s disapprova...: <a href="http://wp.me/p4LXYh-26n">http://wp.me/p4LXYh-26n</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 20 14:12:36 +0000 2016",
    idStr: "701046801516855296",
    content:
      "York is devoid of sun and rain for now, but @YorkAltHis and @yorklgbthistory will make it rainbow all over the city this afternoon!",
    favouriteCount: "4",
    retweetCount: "4",
  },
  {
    createdAt: "Fri Feb 19 15:15:43 +0000 2016",
    idStr: "700700293768458241",
    content:
      '[@ysjulgbtstaff] Three final @yorklgbthistory 2016 #yorklgbthistory16 events at @YorkStJohn: <a href="https://wp.me/p4uHbe-sp">https://wp.me/p4uHbe-sp</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 19 14:49:34 +0000 2016",
    idStr: "700693713001951232",
    content:
      'Negotiating faith, gender identity and sexual orientation (@yorklgbthistory 2016 #yorklgbthistory16 closing night): <a href="http://wp.me/p4LXYh-26f">http://wp.me/p4LXYh-26f</a>',
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Feb 18 22:44:51 +0000 2016",
    idStr: "700450936372785153",
    content:
      'Check this out @krheyam @axiomaticalice @GenderBen. Quite a nice and simple yet thorough article (audio/text). <a href="https://twitter.com/AnsonMackay/status/688305137379602432">https://twitter.com/AnsonMackay/status/688305137379602432</a>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 12 16:06:50 +0000 2016",
    idStr: "698176446091497476",
    content:
      '[@ysjulgbtstaff] Being LGBT at York St John (York LGBT History Month): <a href="https://wp.me/p4uHbe-sk">https://wp.me/p4uHbe-sk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 09 18:08:19 +0000 2016",
    idStr: "697119853270953984",
    content: "@iwilsonysj @ClaireJysj Oh and mustn't forget the sugar or salt!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 03 20:49:35 +0000 2016",
    idStr: "694986111353946113",
    content:
      'York LGBT History Month: day of presentations: <a href="http://wp.me/s4LXYh-8057">http://wp.me/s4LXYh-8057</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 02 21:09:35 +0000 2016",
    idStr: "694628753612214272",
    content:
      'LGBT History Month Theatre: All The Nice Girls: <a href="http://wp.me/p4LXYh-25M">http://wp.me/p4LXYh-25M</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Jan 30 22:50:49 +0000 2016",
    idStr: "693567069111975936",
    content:
      'York LGBT History Month 2016 - nearly 50 events! <a href="http://wp.me/p4LXYh-25t">http://wp.me/p4LXYh-25t</a> #yorklgbthistory16',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 29 12:40:09 +0000 2016",
    idStr: "693051002254045184",
    content:
      '[@ysjulgbtstaff] Update: @yorklgbthistory 2016 #yorklgbthistory16; LGBT Aware York; Stonewall conference: <a href="https://wp.me/p4uHbe-s7">https://wp.me/p4uHbe-s7</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Jan 25 10:52:07 +0000 2016",
    idStr: "691574260968640512",
    content:
      'MA Sociolinguistics @UniOfYork graduation [4/4] <div class="gallery"><ul><li><a href="../../tweets_media/691574260968640512-CZj3H8hUsAApFU1.jpg"><img src="../../tweets_media/691574260968640512-CZj3H8hUsAApFU1.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 25 10:50:38 +0000 2016",
    idStr: "691573890095697920",
    content:
      'MA Sociolinguistics @UniOfYork graduation [3/4] <div class="gallery"><ul><li><a href="../../tweets_media/691573890095697920-CZj2w62UAAA9cjY.jpg"><img src="../../tweets_media/691573890095697920-CZj2w62UAAA9cjY.jpg"></a></li><li><a href="../../tweets_media/691573890095697920-CZj2xHgUkAAawOi.jpg"><img src="../../tweets_media/691573890095697920-CZj2xHgUkAAawOi.jpg"></a></li><li><a href="../../tweets_media/691573890095697920-CZj2xNQUUAAcOSR.jpg"><img src="../../tweets_media/691573890095697920-CZj2xNQUUAAcOSR.jpg"></a></li><li><a href="../../tweets_media/691573890095697920-CZj2ySKUUAADAd1.jpg"><img src="../../tweets_media/691573890095697920-CZj2ySKUUAADAd1.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 25 10:43:32 +0000 2016",
    idStr: "691572103645106176",
    content:
      'MA Sociolinguistics @UniOfYork graduation [2/?] <div class="gallery"><ul><li><a href="../../tweets_media/691572103645106176-CZj1Ig1UUAAgwFc.jpg"><img src="../../tweets_media/691572103645106176-CZj1Ig1UUAAgwFc.jpg"></a></li><li><a href="../../tweets_media/691572103645106176-CZj1KYkUMAE4uLk.jpg"><img src="../../tweets_media/691572103645106176-CZj1KYkUMAE4uLk.jpg"></a></li><li><a href="../../tweets_media/691572103645106176-CZj1KM4UMAEddtl.jpg"><img src="../../tweets_media/691572103645106176-CZj1KM4UMAEddtl.jpg"></a></li><li><a href="../../tweets_media/691572103645106176-CZj1JE4UEAEXBf6.jpg"><img src="../../tweets_media/691572103645106176-CZj1JE4UEAEXBf6.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 25 10:38:01 +0000 2016",
    idStr: "691570711945678848",
    content:
      'MA Sociolinguistics @UniOfYork graduation [1/?] <div class="gallery"><ul><li><a href="../../tweets_media/691570711945678848-CZjz4nHUkAIZAoY.jpg"><img src="../../tweets_media/691570711945678848-CZjz4nHUkAIZAoY.jpg"></a></li><li><a href="../../tweets_media/691570711945678848-CZjzz_-UMAEUM_t.jpg"><img src="../../tweets_media/691570711945678848-CZjzz_-UMAEUM_t.jpg"></a></li><li><a href="../../tweets_media/691570711945678848-CZjz5S8UUAEpEiy.jpg"><img src="../../tweets_media/691570711945678848-CZjz5S8UUAEpEiy.jpg"></a></li><li><a href="../../tweets_media/691570711945678848-CZjz5XHUMAAfsZM.jpg"><img src="../../tweets_media/691570711945678848-CZjz5XHUMAAfsZM.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 22 13:50:17 +0000 2016",
    idStr: "690531933663657984",
    content:
      'Apparently I got a *big* promotion... <div class="gallery"><ul><li><a href="../../tweets_media/690531933663657984-CZVDIkbWwAEISsT.jpg"><img src="../../tweets_media/690531933663657984-CZVDIkbWwAEISsT.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jan 19 15:10:59 +0000 2016",
    idStr: "689465081743015936",
    content:
      'Higher and higher! @YorkStJohn continues its ascent of @stonewalluk\'s Top 100 Employers: <a href="https://wp.me/p4uHbe-rO">https://wp.me/p4uHbe-rO</a> @ysjulgbtstaff @ysjequality',
    favouriteCount: "4",
    retweetCount: "4",
  },
  {
    createdAt: "Mon Jan 18 18:03:18 +0000 2016",
    idStr: "689146058824355840",
    content:
      "... force - families and partnerships into long-distance arrangements #noborders [3/3]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 18 18:03:05 +0000 2016",
    idStr: "689146003379859457",
    content:
      "... aware that existing immigration law has for many years forced - and continues to (with or without this added bonus) [2/3]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 18 18:02:18 +0000 2016",
    idStr: "689145804951580672",
    content:
      'Sign this petition to register your disagreement with racist, classist, ableist etcist policy, but also be <a href="https://petition.parliament.uk/petitions/118060">https://petition.parliament.uk/petitions/118060</a> [1/3]',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 11 15:29:42 +0000 2016",
    idStr: "686570688543649792",
    content:
      "Time to make films in @YorkStJohn Faculty of Arts for the first time in about four years, now with @FionaThompson16!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 11 04:36:19 +0000 2016",
    idStr: "686406258295975937",
    content: "PhD application: submitted.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 05 13:53:16 +0000 2016",
    idStr: "684372092289216512",
    content:
      'Interview I did some months back for @incnetworks/@IncNetworksMag about @ysjulgbtstaff: <a href="http://www.inclusivenetworks.co.uk/york-st-john-uni-lgbt-network/">http://www.inclusivenetworks.co.uk/york-st-john-uni-lgbt-network/</a> @ysjequality',
    favouriteCount: "3",
    retweetCount: "6",
  },
  {
    createdAt: "Tue Dec 29 20:46:33 +0000 2015",
    idStr: "681939383105224704",
    content:
      'Cartoon depiction of David Cameron\'s response to the floods by @BJennings90: <a href="http://gu.com/p/4fdt7/stw">http://gu.com/p/4fdt7/stw</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Dec 10 17:55:24 +0000 2015",
    idStr: "675010942959149056",
    content:
      '[@ysjulgbtstaff] Update: Stonewall Christian Role Models book launch; World AIDS Day fundraising: <a href="https://wp.me/p4uHbe-rp">https://wp.me/p4uHbe-rp</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 08 00:32:48 +0000 2015",
    idStr: "674023789701799940",
    content: "Officially a @BradfordUni/@Health_Bradford student.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 30 15:41:47 +0000 2015",
    idStr: "671353436554661889",
    content:
      '[@ysjulgbtstaff] Update: Worlds AIDS Day; LGBT staff Stammtisch (lunch): <a href="https://wp.me/p4uHbe-rf">https://wp.me/p4uHbe-rf</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 30 14:48:30 +0000 2015",
    idStr: "671340027834691584",
    content:
      '[@ysjulgbtstaff] Jo Thompson named @incnetworks Network Champion of the Year! <a href="https://wp.me/p4uHbe-rc">https://wp.me/p4uHbe-rc</a>',
    favouriteCount: "3",
    retweetCount: "3",
  },
  {
    createdAt: "Thu Nov 19 21:00:15 +0000 2015",
    idStr: "667447316043988993",
    content:
      "Congratulations @hayleyparker99's people at @AsdaLGBT on a highly commended network engagement initiative for trans staff! #INAwards2015",
    favouriteCount: "3",
    retweetCount: "3",
  },
  {
    createdAt: "Thu Nov 19 20:51:28 +0000 2015",
    idStr: "667445107818373122",
    content:
      "Congratulations to #INAwards2015 inspiring member of the year @DiversityChamp1 and highly commended @IndyHothi - very well deserved!",
    favouriteCount: "4",
    retweetCount: "3",
  },
  {
    createdAt: "Tue Nov 17 17:34:42 +0000 2015",
    idStr: "666670811185414144",
    content:
      '[@ysjulgbtstaff] Update: International Transgender Day of Remembrance (#TDoR); #NoBystanders pledge: <a href="https://wp.me/p4uHbe-r6">https://wp.me/p4uHbe-r6</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 09 14:19:09 +0000 2015",
    idStr: "663722495925690368",
    content:
      '"Why we should get three-day weekends – all the time" <a href="https://theconversation.com/why-we-should-get-three-day-weekends-all-the-time-46754">https://theconversation.com/why-we-should-get-three-day-weekends-all-the-time-46754</a> via @Spencer_DavidA @ConversationUK',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 09 12:28:54 +0000 2015",
    idStr: "663694752546750464",
    content:
      '"Lack of diversity in creative industries a business failure, says report" via @artspro <a href="http://www.artsprofessional.co.uk/news/lack-diversity-creative-industries-business-failure-says-report">http://www.artsprofessional.co.uk/news/lack-diversity-creative-industries-business-failure-says-report</a> @FionaThompson16',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 06 12:49:40 +0000 2015",
    idStr: "662612817007108096",
    content:
      'Last chance for Stonewall staff survey responses! <a href="https://wp.me/p4uHbe-r1">https://wp.me/p4uHbe-r1</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 01 19:40:24 +0000 2015",
    idStr: "660904238353027072",
    content:
      '[@yorklgbthistory] Celebrating the Second National Festival of LGBT History at York Explore! <a href="http://wp.me/p4LXYh-20F">http://wp.me/p4LXYh-20F</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 28 18:28:02 +0000 2015",
    idStr: "659436475575046144",
    content: "So I got a distinction on my sociolinguistics MA. Hurray!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 14 20:33:40 +0000 2015",
    idStr: "654394664221413376",
    content:
      'The Second National Festival of LGBT History is coming! <a href="http://wp.me/p4LXYh-20l">http://wp.me/p4LXYh-20l</a> @lgbthistoryfest @lgbthm @yorklgbthistory #lgbthm16',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 11 18:29:34 +0000 2015",
    idStr: "653276267450662912",
    content:
      "#comingoutday with which everyone is bestowed, and also not afraid of making my labels explicit regardless of anti-normative beliefs. [3/3]",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 11 18:27:41 +0000 2015",
    idStr: "653275795109056512",
    content:
      "#comingoutday non-cishet people no more have to come out than cishet people. Recognise this ideological approach is not an option [2/?]",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 11 18:26:24 +0000 2015",
    idStr: "653275472634245120",
    content:
      "#comingoutday Never really did; my circumstances just made it apparent. Always opted for the anti-cisheteronormative approach in which [1/?]",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 11 18:22:41 +0000 2015",
    idStr: "653274535085637636",
    content:
      'This weekend: ConSOLE XXIV (oral) abstract accepted (<a href="https://sites.google.com/a/york.ac.uk/consolexxiv/home">https://sites.google.com/a/york.ac.uk/consolexxiv/home</a>); applied for PGCert Diversity Management at @Health_Bradford',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 07 16:29:54 +0000 2015",
    idStr: "651796602500198400",
    content:
      '[LGBT Staff Network] Update: second birthday party; York LGBT History Month 2016 (@yorklgbthistory #ylgbthm16) <a href="https://wp.me/p4uHbe-q1">https://wp.me/p4uHbe-q1</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 02 22:17:57 +0000 2015",
    idStr: "650072254647283712",
    content:
      'Wish the whole world would watch "Earthlings", break the ignorance, check their privilege and, if able to, go abolitionist vegan.',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 02 11:26:57 +0000 2015",
    idStr: "649908424084430848",
    content:
      '"Why the phrase ‘first world problem’ is condescending to everyone" <a href="http://gu.com/p/4cqgz/stw">http://gu.com/p/4cqgz/stw</a> via @stevenpoole',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 27 23:42:22 +0000 2015",
    idStr: "648281555643801600",
    content:
      "Delivering iteration three of @krheyam and my trans and non-binary identities training tomorrow at @LeedsMedHealth! Important audience!",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Sep 27 23:38:00 +0000 2015",
    idStr: "648280458409680896",
    content:
      "Uh oh. Just made the first formal step towards a PhD application...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 24 16:37:40 +0000 2015",
    idStr: "647087515493658624",
    content: "Eid Mubarak!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 24 14:31:40 +0000 2015",
    idStr: "647055806387617797",
    content:
      "Interesting approach to reducing meat consumption, but totally misses the primary issue, tapping into egocentrism rather than empathy [2/2]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 24 14:31:20 +0000 2015",
    idStr: "647055720005902336",
    content:
      "New Shadow Secretary of State for Environment, Food and Rural Affairs Kerry McCarthy says we should treat meat eaters like smokers [1/?]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 23 07:52:58 +0000 2015",
    idStr: "646593082989764609",
    content:
      '[LGBT Staff Network] Update: Bi Visibility Day; Network Buzz feature; new research: <a href="https://wp.me/p4uHbe-pU">https://wp.me/p4uHbe-pU</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 21 12:38:06 +0000 2015",
    idStr: "645940063763845120",
    content: "Modern life ≈ dismissing notifications.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 20 14:04:05 +0000 2015",
    idStr: "645599313821745153",
    content:
      'Call for events - LGBT History Month 2016 in York: <a href="http://wp.me/p4LXYh-1ZX">http://wp.me/p4LXYh-1ZX</a> #lgbthm16 #ylgbthm16',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 14 14:14:09 +0000 2015",
    idStr: "643427517391609856",
    content:
      'So I did an interview for @incnetworks @NetworkBuzzMag Issue 6 <a href="http://issuu.com/inclusivenetworks/docs/network_buzz_issue_6/1">http://issuu.com/inclusivenetworks/docs/network_buzz_issue_6/1</a> #NetworkBuzz',
    favouriteCount: "5",
    retweetCount: "4",
  },
  {
    createdAt: "Tue Sep 01 20:00:58 +0000 2015",
    idStr: "638803756864405504",
    content:
      "Charles Mingus' 'Blues &amp; Roots' is my secret weapon for turbo-charging academic writing: <a href=\"https://www.youtube.com/watch?v=Y9KcMfQhn6w\">https://www.youtube.com/watch?v=Y9KcMfQhn6w</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 28 14:06:01 +0000 2015",
    idStr: "637264878940606464",
    content:
      'Agree with this on legalising doping, other than a preference for the reduction in reward/deglamourisation: <a href="http://theconversation.com/why-its-time-to-legalise-doping-in-athletics-46514">http://theconversation.com/why-its-time-to-legalise-doping-in-athletics-46514</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 26 16:22:35 +0000 2015",
    idStr: "636574471998955521",
    content:
      '[@ysjulgbtstaff] We\'re awesome!: <a href="https://wp.me/p4uHbe-py">https://wp.me/p4uHbe-py</a>',
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Aug 18 14:03:22 +0000 2015",
    idStr: "633640334636007424",
    content:
      '[@ysjulgbtstaff] Update: Stonewall Workplace Conference; staff survey; birthday party: <a href="https://wp.me/p4uHbe-pd">https://wp.me/p4uHbe-pd</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 13 16:18:12 +0000 2015",
    idStr: "631862326048722944",
    content:
      'Nice analysis/sarcasm: "Mark Steel: Blair\'s right! The last thing Labour needs is a leader people want to vote for" <a href="http://buff.ly/1EoJ2NR">http://buff.ly/1EoJ2NR</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 13 13:25:01 +0000 2015",
    idStr: "631818744289972224",
    content:
      'Democracy in action from Labour... "Mark Steel has been barred from voting in the Labour leadership contest" <a href="http://buff.ly/1IJKI8z">http://buff.ly/1IJKI8z</a>',
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Aug 10 18:17:51 +0000 2015",
    idStr: "630805273050005505",
    content:
      "I don't believe in painting anyone as inherently evil, but rather in painting everyone as inherently flawed.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 27 21:25:12 +0000 2015",
    idStr: "625778991698452480",
    content:
      'MacBook-style magnetic charging for Lightning/micro-USB on @Kickstarter: <a href="http://kck.st/1OdGZ4V">http://kck.st/1OdGZ4V</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Jul 27 17:42:04 +0000 2015",
    idStr: "625722838994055168",
    content:
      '"Comment: Why the UK’s gender recognition laws desperately need updating" via @qbnaith <a href="http://buff.ly/1OLxOsK">http://buff.ly/1OLxOsK</a> [4/4]',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 27 17:41:00 +0000 2015",
    idStr: "625722570097168384",
    content:
      "long-term equality of outcome), but we aren't even there yet. [3/4]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 27 17:40:13 +0000 2015",
    idStr: "625722373925400576",
    content:
      "We need to keep pushing for social equity even when the legal challenges have been overcome (until we reach and can guarantee [2/4]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 27 17:39:49 +0000 2015",
    idStr: "625722271957688321",
    content:
      "The Equality Act 2010 and the Gender Recognition Act 2004 did not offer or enable solutions to all equality issues. [1/4]",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 27 16:18:21 +0000 2015",
    idStr: "625701769683800065",
    content:
      'Agree. Agree. Agree. "Mhairi Black criticises Westminster\'s \'silly traditions\'": <a href="http://buff.ly/1S7Cuyw">http://buff.ly/1S7Cuyw</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 23 17:59:41 +0000 2015",
    idStr: "624277719145127936",
    content:
      'If you believe people should have the right to be legally recognised for who they are, sign this: <a href="https://petition.parliament.uk/petitions/104639">https://petition.parliament.uk/petitions/104639</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 22 11:03:31 +0000 2015",
    idStr: "623810600934731776",
    content:
      '"It is time that we stopped treating patriotism as a self-evidently good thing...." <a href="http://buff.ly/1HIHhi3">http://buff.ly/1HIHhi3</a> via @davidwearing #extremism',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 21 18:15:53 +0000 2015",
    idStr: "623557020197736448",
    content:
      "Compulsory title fields (sans blank)/no gender-neutral title option/the combination of the two = pet hate.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 21 12:12:58 +0000 2015",
    idStr: "623465691379826688",
    content:
      'What is the Labour Party for? <a href="http://buff.ly/1KhR9Df">http://buff.ly/1KhR9Df</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 20 14:19:03 +0000 2015",
    idStr: "623135032757121024",
    content:
      "... they probably overwhelmingly self-identify as men, too, amongst other things. Let's put measures in place to deal with men?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 20 14:17:34 +0000 2015",
    idStr: "623134657018757120",
    content:
      'Cameron says don\'t question extremism and Islam link as extremists identify as Muslims. Correlation, causation... <a href="http://buff.ly/1JbA7oI">http://buff.ly/1JbA7oI</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 17 10:23:26 +0000 2015",
    idStr: "621988571973570560",
    content:
      'Another great piece by @krheyam, this time on trigger warnings and their importance for equality: <a href="https://unbeseemingwords.wordpress.com/2015/05/19/trigger-warnings-arent-about-luxury-or-privilege-theyre-about-equality/">https://unbeseemingwords.wordpress.com/2015/05/19/trigger-warnings-arent-about-luxury-or-privilege-theyre-about-equality/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 17 10:08:24 +0000 2015",
    idStr: "621984790703681536",
    content:
      'Great post against policing women\'s language by linguist Deborah Cameron (@wordspinster), "Just don\'t do it": <a href="https://debuk.wordpress.com/2015/07/05/just-dont-do-it/">https://debuk.wordpress.com/2015/07/05/just-dont-do-it/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 15 22:39:41 +0000 2015",
    idStr: "621449081362235392",
    content:
      'So apparently my political coordinates are 61.1% Left, 86.1% Liberal: <a href="http://www.celebritytypes.com/chart.php?n1=61.1&n3=86.1">http://www.celebritytypes.com/chart.php?n1=61.1&n3=86.1</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 15 13:09:22 +0000 2015",
    idStr: "621305554141642752",
    content:
      'Just published the report of an audit of LGBT staff network structures in the north on the Campus North blog: <a href="https://campusnorthuk.wordpress.com/resources/">https://campusnorthuk.wordpress.com/resources/</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jul 14 11:54:13 +0000 2015",
    idStr: "620924257921470464",
    content:
      '[@ysjulgbtstaff] Update: Leeds Queer Film Festival; call for participants: <a href="https://wp.me/p4uHbe-op">https://wp.me/p4uHbe-op</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Jul 13 13:56:29 +0000 2015",
    idStr: "620592639289765888",
    content:
      '... <a href="http://www.theguardian.com/sport/2015/jul/12/lewis-hamilton-turned-away-from-centre-court-at-wimbledon">http://www.theguardian.com/sport/2015/jul/12/lewis-hamilton-turned-away-from-centre-court-at-wimbledon</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 13 13:56:24 +0000 2015",
    idStr: "620592614547529728",
    content:
      "Wimbledon: you're denied a particular seat if you don't adhere to rigid, antiquated notions of gender and sartorial expression.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 11 18:27:15 +0000 2015",
    idStr: "619936001486553088",
    content:
      'Reminder: second opportunity to join the @yorklgbthistory team! <a href="http://wp.me/p4LXYh-1YW">http://wp.me/p4LXYh-1YW</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 06 09:29:17 +0000 2015",
    idStr: "617988681178193920",
    content:
      'Great video from @YSJSU challenging sexual harassment: <a href="https://vimeo.com/128607450">https://vimeo.com/128607450</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 03 12:00:37 +0000 2015",
    idStr: "616939598317400064",
    content:
      '[LGBT Staff Network] York Pride 2015: <a href="https://wp.me/p4uHbe-o7">https://wp.me/p4uHbe-o7</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 29 11:15:14 +0000 2015",
    idStr: "615478625840664576",
    content:
      '[@ysjulgbtstaff] Update: Pride screening; older LGBT advocacy event: <a href="https://wp.me/p4uHbe-o5">https://wp.me/p4uHbe-o5</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 20 08:29:29 +0000 2015",
    idStr: "612175424014016512",
    content:
      '[@yorklgbthistory] @YorkPride 2015 - come join us! <a href="http://wp.me/p4LXYh-1Yi">http://wp.me/p4LXYh-1Yi</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 19 00:28:59 +0000 2015",
    idStr: "611692112829091840",
    content:
      'Flag up ready to greet @YorkPride paraders this Saturday in my absence! #RaiseYourRainbow #YorkCityOfRainbows <div class="gallery"><ul><li><a href="../../tweets_media/611692112829091840-CH0qunoWsAAI3Zi.jpg"><img src="../../tweets_media/611692112829091840-CH0qunoWsAAI3Zi.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Jun 17 23:12:00 +0000 2015",
    idStr: "611310354199658496",
    content: "Ramadan Mubarak!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 10 16:55:40 +0000 2021",
    idStr: "1436372815159218212",
    content:
      "@FanatixFour @AMcRaeJr @VictoryChants More (less?) seriously, will Insomniac gadget-ify Wolverine, and do you think we'll get to play Peter and Miles in Spider-Man 2?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 17 14:57:47 +0000 2015",
    idStr: "611185980125515777",
    content:
      '[@ysjulgbtstaff] @YorkPride 2015 - @YorkStJohn raises its rainbow! #RaiseYourRainbow #YorkCityOfRainbows <a href="https://wp.me/p4uHbe-nV">https://wp.me/p4uHbe-nV</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 14 16:57:15 +0000 2015",
    idStr: "610128879794008065",
    content:
      'York’s heritage: the LGBT community perspective <a href="http://wp.me/p4LXYh-1Yc">http://wp.me/p4LXYh-1Yc</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jun 12 10:51:33 +0000 2015",
    idStr: "609312072103559168",
    content:
      '[@ysjulgbtstaff] York Pride 2015 - do come! <a href="https://wp.me/p4uHbe-nK">https://wp.me/p4uHbe-nK</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 01 10:29:41 +0000 2015",
    idStr: "605320303749652480",
    content:
      '[LGBT Staff Network] Update: call for @lgbthistoryfest presentations; @YorkPride 2015: <a href="https://wp.me/p4uHbe-nz">https://wp.me/p4uHbe-nz</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 31 12:41:23 +0000 2015",
    idStr: "604991057793662976",
    content:
      'Meet the 2016 @yorklgbthistory team! <a href="http://wp.me/p4LXYh-1XZ">http://wp.me/p4LXYh-1XZ</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 28 23:22:53 +0000 2015",
    idStr: "604065336279748608",
    content:
      'Two upcoming events: @TheCoplaMusical and The Case of Alan Turing (@YorkAmnesty): <a href="http://wp.me/p4LXYh-1XN">http://wp.me/p4LXYh-1XN</a>',
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Thu May 28 17:55:47 +0000 2015",
    idStr: "603983017758044161",
    content:
      "\"We need to stop thinking what's right for me and start thinking about what's right for us\" - @ruth_hunt at @YorkStJohn/@ysjulgbtstaff",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Thu May 28 11:26:25 +0000 2015",
    idStr: "603885028594954240",
    content:
      '[LGBT Staff Network] Update: Ruth Hunt events; musical; talk; call for contributions: <a href="https://wp.me/p4uHbe-nw">https://wp.me/p4uHbe-nw</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 27 23:17:46 +0000 2015",
    idStr: "603701661161238528",
    content:
      'Second National Festival of LGBT History (@lgbthistoryfest) – February 2016: <a href="http://wp.me/p4LXYh-1XI">http://wp.me/p4LXYh-1XI</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 22 13:55:10 +0000 2015",
    idStr: "601748135451435008",
    content:
      "'Trans life: getting help from a gender clinic shouldn’t be a waiting game' <a href=\"http://gu.com/p/494en/stw\">http://gu.com/p/494en/stw</a>",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri May 22 13:54:47 +0000 2015",
    idStr: "601748041616490496",
    content:
      'Need change. "cost to the NHS" is irrelevant. \'NHS treats transgender people as second-class citizens, says watchdog\' <a href="http://gu.com/p/49255/stw">http://gu.com/p/49255/stw</a>',
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Fri May 22 11:52:25 +0000 2015",
    idStr: "601717247095263232",
    content:
      'Reminder: opportunity to join @yorklgbthistory team! <a href="http://wp.me/p4LXYh-1XG">http://wp.me/p4LXYh-1XG</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 22 09:40:41 +0000 2015",
    idStr: "601684094754398208",
    content:
      "'It is now illegal in France for supermarkets to throw away food' via @thejournal_ie <a href=\"http://jrnl.ie/2117599\">http://jrnl.ie/2117599</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 15 09:24:15 +0000 2015",
    idStr: "599143242085638146",
    content:
      'Spotted a @FionaThompson16 cameo on an @LGBTvManchester video of @QueerMediaUK/@LGBTHM 2015! <a href="https://www.youtube.com/watch?v=7uWL5PSvUjQ&t=7m50s">https://www.youtube.com/watch?v=7uWL5PSvUjQ&t=7m50s</a>',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Thu May 14 00:23:46 +0000 2015",
    idStr: "598644837433257984",
    content:
      "'Unrequited hate and the hierarchies of evil': <a href=\"http://wp.me/p5VMeN-3D\">http://wp.me/p5VMeN-3D</a>",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Thu May 14 00:23:09 +0000 2015",
    idStr: "598644682424356864",
    content:
      'Unrequited hate and the hierarchies of evil <a href="http://wp.me/p5VMeN-3D">http://wp.me/p5VMeN-3D</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 11 14:29:44 +0000 2015",
    idStr: "597770570084659200",
    content:
      '[@ysjulgbtstaff] Update: trans and non-binary talk/conversation; History Month opportunities: <a href="https://wp.me/p4uHbe-n7">https://wp.me/p4uHbe-n7</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 10 14:24:32 +0000 2015",
    idStr: "597406874443456513",
    content:
      'Join the @yorklgbthistory team!: <a href="http://wp.me/p4LXYh-1Xt">http://wp.me/p4LXYh-1Xt</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 09 18:18:36 +0000 2015",
    idStr: "597103388162191360",
    content:
      'Really hate unconsidered and un(positively)prejudiced use of devil\'s advocate journalistic methodologies: <a href="https://www.facebook.com/bbcdailyandsundaypolitics/videos/1128745163809007/">https://www.facebook.com/bbcdailyandsundaypolitics/videos/1128745163809007/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 09 15:05:14 +0000 2015",
    idStr: "597054726233051136",
    content:
      "Nice that this afternoon's journey (Guildhall-Fishergate-Micklegate) will be in territories 1/3, 2/2 and 1/3 @YorkGreens! #YorkGreensSurge",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 09 14:12:49 +0000 2015",
    idStr: "597041537265102848",
    content:
      'Gorgeous lunch my partner cooked up, similar to one of @sweetpotatosoul simple breakfast recipes. <div class="gallery"><ul><li><a href="../../tweets_media/597041537265102848-CEkeGzjWMAECtZE.jpg"><img src="../../tweets_media/597041537265102848-CEkeGzjWMAECtZE.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 09 02:25:01 +0000 2015",
    idStr: "596863414481362944",
    content:
      "... after three Labours, and @JuneTranmer also broke 1000 votes, as did many other candidates across the city! #YorkGreensSurge",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sat May 09 02:24:07 +0000 2015",
    idStr: "596863187930218496",
    content:
      "... a Guildhall victory from @DeniseCraghill* and a Micklegate victory from @Lars4Micklegate!<br><br>*I came a respectable fifth...",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sat May 09 02:22:35 +0000 2015",
    idStr: "596862801660026880",
    content:
      "So the @YorkGreens representation on the @CityofYork Council City has squared, with Fishergate holds from Andy D'Agorne and Dave Taylor...",
    favouriteCount: "2",
    retweetCount: "4",
  },
  {
    createdAt: "Fri May 08 14:50:52 +0000 2015",
    idStr: "596688722914979840",
    content:
      '[@ysjulgbtstaff] Update: trans and non-binary talk/conversation; training funding bid: <a href="https://wp.me/p4uHbe-mT">https://wp.me/p4uHbe-mT</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 05 22:27:29 +0000 2015",
    idStr: "595716472296583168",
    content:
      "'11 responses to the most common complaints about immigration' <a href=\"http://wp.me/p5UWFc-1O\">http://wp.me/p5UWFc-1O</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 05 10:47:40 +0000 2015",
    idStr: "595540357846204416",
    content:
      '[@ysjulgbtstaff] Study abroad – incoming and outgoing – and LGBT matters: <a href="https://wp.me/p4uHbe-mV">https://wp.me/p4uHbe-mV</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 27 09:35:37 +0000 2015",
    idStr: "592623123423342592",
    content:
      '[@ysjulgbtstaff] Update: Go York lectures; Stonewall Allies Programme: <a href="https://wp.me/p4uHbe-mG">https://wp.me/p4uHbe-mG</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 24 07:48:41 +0000 2015",
    idStr: "591509048282873857",
    content:
      "Time for electioneering at @YorkStJohn with @TheGreenParty Deputy Leader @Amelia_Womack!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 23 18:49:05 +0000 2015",
    idStr: "591312853644226560",
    content:
      ".@acaciathorns adding to the question about asylum seekers, asking about basic human rights for refugees #QueerstionTimeYork",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Apr 23 10:29:40 +0000 2015",
    idStr: "591187171337449472",
    content:
      "Looking forward to #QueerstionTimeYork tonight with @ysjulgbtstaff @FionaThompson16 @ysjequality et al. Go @GingranG! #viewsmyown",
    favouriteCount: "2",
    retweetCount: "3",
  },
  {
    createdAt: "Tue Apr 21 10:42:17 +0000 2015",
    idStr: "590465571587641344",
    content:
      '[@ysjulgbtstaff] Update: NHS service review; Queerstion Time; study abroad: <a href="https://wp.me/p4uHbe-mz">https://wp.me/p4uHbe-mz</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 18 11:48:52 +0000 2015",
    idStr: "589395164076048384",
    content: "@yndajas (I totally get it, but just saying.)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 18 11:47:29 +0000 2015",
    idStr: "589394819220426752",
    content:
      "Don't get how some people can passionately demonize those who kill certain animals then go eat a chicken or wear a cow.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 16:55:14 +0000 2015",
    idStr: "589109877865369600",
    content:
      "@yndajas ... due to independent businesses becoming increasingly unviable in central London as a result of rising rent prices.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 16:52:18 +0000 2015",
    idStr: "589109137465827330",
    content:
      'Sat in Covent Garden eating delicious takeaway from Food for Thought, probably for the last time ever! <div class="gallery"><ul><li><a href="../../tweets_media/589109137465827330-CCzvn8qWYAEyRYt.jpg"><img src="../../tweets_media/589109137465827330-CCzvn8qWYAEyRYt.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 15:23:01 +0000 2015",
    idStr: "589086669858611200",
    content:
      "Standing ovation for the courage of first out trans RAF pilot @AylaHoldom, her story bringing tears all around #EqualAtWork #historicmoment",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Apr 17 15:09:16 +0000 2015",
    idStr: "589083208144289792",
    content:
      "Importance of small actions and messages of inclusion and support highlighted by @AylaHoldom #EqualAtWork",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Apr 17 15:08:08 +0000 2015",
    idStr: "589082924282183680",
    content:
      ".@AylaHoldom thanks @stonewalluk for the move to support trans people, and the way it was brought about #EqualAtWork",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 14:59:44 +0000 2015",
    idStr: "589080811900694528",
    content:
      "A banker quoting @GeorgeThePoet to close a speech at #EqualAtWork #kudos (Benny Higgins)",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Apr 17 14:56:45 +0000 2015",
    idStr: "589080059455090688",
    content:
      "Great to have a plug for the fantastically gifted @GeorgeThePoet #EqualAtWork #spokenword",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 14:55:53 +0000 2015",
    idStr: "589079840701227008",
    content:
      "Trans inclusion (in a non-tokenistic manner) has made the @stonewalluk #EqualAtWork conference feel fantastically wholesome #NewStonewall",
    favouriteCount: "9",
    retweetCount: "4",
  },
  {
    createdAt: "Fri Apr 17 14:14:53 +0000 2015",
    idStr: "589069525317980161",
    content:
      'At least two speakers/facilitators have used the phrase "ladies and gentlemen" - please don\'t #EqualAtWork',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 13:47:32 +0000 2015",
    idStr: "589062642335141890",
    content:
      '"Apathy is rife" - this is the case everywhere, so as activists we need to be conscious of not letting it demotivate our work #EqualAtWork',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 12:27:45 +0000 2015",
    idStr: "589042564273197056",
    content:
      "Organisations need to be wary of role model fatigue; role models need to be wary they can't fight every battle #EqualAtWork #whoops",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Apr 17 12:25:19 +0000 2015",
    idStr: "589041951820898304",
    content:
      "Media very damaging by presenting a simplistic image of Islam, ignoring diversity within communities in favour of extremism #EqualAtWork",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Apr 17 11:40:01 +0000 2015",
    idStr: "589030549999788032",
    content:
      "Reverend Andy Marshall noting the huge impact of a chaplain engaged with LGBT matters. Great to have that at @YorkStJohn! #EqualAtWork",
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Apr 17 11:24:07 +0000 2015",
    idStr: "589026548658921472",
    content:
      "And now for a session on religion, ethnicity and sexual orientation #EqualAtWork",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 10:48:37 +0000 2015",
    idStr: "589017614292246528",
    content:
      "Anecdote: someone resigned as their organisation would not enable them to identify as anything other than a man or a woman #EqualAtWork",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 10:43:02 +0000 2015",
    idStr: "589016208948748289",
    content:
      "Treating people how *they* want to be treated, not just how *you* would want to be treated yourself - very important! #EqualAtWork",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 10:40:05 +0000 2015",
    idStr: "589015467794247680",
    content:
      "Good to have a big presence from 'allies' at this year's #EqualAtWork",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 10:37:57 +0000 2015",
    idStr: "589014931086909440",
    content:
      "Looking forward to facilitating a @ysjequality session on trans and non-binary identities at @YorkStJohn with @krheyam in May #EqualAtWork",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 10:24:30 +0000 2015",
    idStr: "589011546476515328",
    content:
      "Gender Recognition Act is outdated, leading to cumbersome gender record changing process, as was highlighted to me recently #EqualAtWork",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 10:22:14 +0000 2015",
    idStr: "589010973790490624",
    content:
      "Intersex and non-binary are not the same (though intersex does challenge the sex binary, but yes, non-binary is usually gender) #EqualAtWork",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 10:18:16 +0000 2015",
    idStr: "589009976124952576",
    content:
      "... and the need for gender-neutral titles (or no title at all) and pronouns #EqualAtWork #they",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 10:17:27 +0000 2015",
    idStr: "589009772596322305",
    content:
      "... and a good explanation of the fluidity of identity and how this relates to the gender concept #EqualAtWork",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 10:16:04 +0000 2015",
    idStr: "589009423076589568",
    content:
      "Good to have non-binary people validated at #EqualAtWork conference.",
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Apr 17 10:02:56 +0000 2015",
    idStr: "589006118585794560",
    content:
      "Now time for a session on getting things right for trans staff #EqualAtWork",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 17 08:47:56 +0000 2015",
    idStr: "588987244419112960",
    content: "Time for my first @stonewalluk  #EqualAtWork conference.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 15 22:12:45 +0000 2015",
    idStr: "588465008926789632",
    content:
      "@lisafriesem ... other writing on it, other than the Wikimedia page you linked to? Would be interested to read more conceptualisations!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 15 19:04:01 +0000 2015",
    idStr: "588417508811661314",
    content:
      'A @UniOfYork @YorkThinkTank poll shows @TheGreenParty @YorkGreens on top! <a href="https://twitter.com/bloodydogooder/status/588369074658349056">https://twitter.com/bloodydogooder/status/588369074658349056</a>',
    favouriteCount: "0",
    retweetCount: "3",
  },
  {
    createdAt: "Sun Apr 12 21:22:31 +0000 2015",
    idStr: "587365201428803584",
    content:
      'An interpretation of @sweetpotatosoul\'s recipe. <div class="gallery"><ul><li><a href="../../tweets_media/587365201428803584-CCa9iFMXIAAWmWN.jpg"><img src="../../tweets_media/587365201428803584-CCa9iFMXIAAWmWN.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 20 01:47:43 +0000 2022",
    idStr: "1582911408357793792",
    content:
      'Tech for good jobs where I work! <a href="https://twitter.com/abscond/status/1579832092208549888">https://twitter.com/abscond/status/1579832092208549888</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 20 01:34:01 +0000 2022",
    idStr: "1582907958710525952",
    content:
      'This is a really, really fantastic resource for anyone looking for ideas of what to build when learning a new programming language or framework, as well as for tips to get you started on building a bunch of different kinds of products, which is a great learning method in itself <a href="https://twitter.com/brett_codes/status/1581315052694818816">https://twitter.com/brett_codes/status/1581315052694818816</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 22 21:19:53 +0000 2022",
    idStr: "1573059534180024328",
    content:
      "@anarchist_neko @Sykality ... culturally constructed), perhaps space then works to represent something other than (or an absence of influence from) what this one planet decides to refer to as gender (or demarcate as genders)",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 22 00:26:34 +0000 2022",
    idStr: "1572744126764052481",
    content:
      "@Sykality @anarchist_neko Interested if you have any thoughts on how agender might fit into this model, though perhaps this does just highlight one of inherent imperfections of this particular method of visualisation!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 22 00:25:00 +0000 2022",
    idStr: "1572743733900201984",
    content:
      "@Sykality @anarchist_neko Perhaps if we extend the metaphor to the sports domain, while someone who experiences a definite association with a single gender might represent that 'island' at the Olympics, an agender person might be an independent Olympian: <a href=\"https://en.m.wikipedia.org/wiki/Independent_Olympians_at_the_Olympic_Games\">https://en.m.wikipedia.org/wiki/Independent_Olympians_at_the_Olympic_Games</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 22 00:16:34 +0000 2022",
    idStr: "1572741608671674370",
    content:
      '@Sykality @anarchist_neko ... absence of a position on the map, depending on how you conceptualise agender (or how it relates to you specifically), but that does render it a little invisible. Possibly a metaphor for agender in itself, but not ideal. This is where the "inherently imperfect" comes in 🤔',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 10 05:30:46 +0000 2021",
    idStr: "1436200455571484673",
    content:
      "Yet ten days ago it was looking like toilets would be the story of the tournament #USOpen #USOpen2021",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 10 05:29:37 +0000 2021",
    idStr: "1436200166508335109",
    content:
      "And another Latinx teenager and US Open debutant reached the quarter finals in men's singles, while more Brits are in the finals or semi-finals of men's doubles, mixed doubles and wheelchair events #USOpen #USOpen2021",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 11 12:14:46 +0000 2015",
    idStr: "586864967212752896",
    content:
      'Nailed it: "Follow your convictions – this could be the end of the politics of fear" | @GeorgeMonbiot <a href="http://gu.com/p/4596c/stw">http://gu.com/p/4596c/stw</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 10 00:08:00 +0000 2015",
    idStr: "586319683869093889",
    content:
      "People need to get this: 'Growth Fetish: Five Reasons Why Prioritizing Growth Is Bad Policy' <a href=\"http://huff.to/18GE8hU\">http://huff.to/18GE8hU</a> via @HuffPostPol",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 09 14:37:02 +0000 2015",
    idStr: "586175994211491840",
    content:
      "@sweetpotatosoul and tahini. The link was a load of recipes from different people, one from you. Do you remember/have the link?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 09 09:32:01 +0000 2015",
    idStr: "586099236661506048",
    content: "@iwilsonysj ... lesbians it seems a little strange.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 08 19:57:54 +0000 2015",
    idStr: "585894357640818691",
    content:
      "@guardian @alexispetridis the video mentions the fact it's been number one for a few centuries. The whole idea is that it *is* dated. [2/2]",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 08 13:58:19 +0000 2015",
    idStr: "585803864005341184",
    content:
      "Yeah. This. 'Change The Tune - Green Party 2015 Election Broadcast': <a href=\"https://youtu.be/PPgS7p40ERg\">https://youtu.be/PPgS7p40ERg</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 07 08:20:27 +0000 2015",
    idStr: "585356449171255296",
    content:
      "Going to work when on annual leave #volunteering #yorklgbthistory16 #lgbthm16",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 06 20:20:39 +0000 2015",
    idStr: "585175304337039363",
    content: "236-question survey drafted #dissertation",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 02 18:47:35 +0000 2015",
    idStr: "583702333651083265",
    content:
      "... a 'waste product': <a href=\"http://www.animalsaustralia.org/features/germany-stops-shredding-chicks.php\">http://www.animalsaustralia.org/features/germany-stops-shredding-chicks.php</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 02 18:47:03 +0000 2015",
    idStr: "583702197210324992",
    content:
      "Take note, egg eaters: male chicks are shredded alive at birth, even in free range and organic contexts (they are deemed...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 31 22:08:36 +0000 2015",
    idStr: "583028142748626945",
    content:
      "Check out @charliekiss in 'Trans Day of Visibility: 9 awesome trans people'! <a href=\"http://www.pinknews.co.uk/2015/03/31/cooltranspeople/\">http://www.pinknews.co.uk/2015/03/31/cooltranspeople/</a> via @pinknews",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 30 12:29:33 +0000 2015",
    idStr: "582520034968252417",
    content:
      '[@ysjulgbtstaff] Update: Queerstion Time; Leeds Queer Film Festival: <a href="http://wp.me/p4uHbe-m8">http://wp.me/p4uHbe-m8</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Mar 28 11:55:43 +0000 2015",
    idStr: "581786742916812800",
    content:
      "'Britain mourns a monster – because he was a king. Richard III’s burial was absurd' | @pollytoynbee<br><br><a href=\"http://gu.com/p/472h4\">http://gu.com/p/472h4</a>",
    favouriteCount: "12",
    retweetCount: "23",
  },
  {
    createdAt: "Sat Mar 28 11:53:51 +0000 2015",
    idStr: "581786275163803648",
    content:
      "'This Is What It Looks Like When Men Are Allowed To Take 480 Days Of Paternity Leave' <a href=\"http://www.buzzfeed.com/lynzybilling/this-is-what-it-looks-like-when-men-are-allowed-to-take-60-d?utm_term=.lqvl35NaGp\">http://www.buzzfeed.com/lynzybilling/this-is-what-it-looks-like-when-men-are-allowed-to-take-60-d?utm_term=.lqvl35NaGp</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 25 15:34:06 +0000 2015",
    idStr: "580754540200235008",
    content:
      '[@ysjulgbtstaff] Update: studying abroad; leadership masterclass: <a href="http://wp.me/p4uHbe-lY">http://wp.me/p4uHbe-lY</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 25 00:30:58 +0000 2015",
    idStr: "580527256524713984",
    content:
      'New website! <a href="http://wp.me/p5VMeN-3z">http://wp.me/p5VMeN-3z</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 22 01:18:34 +0000 2015",
    idStr: "579452071272968192",
    content:
      "I just uploaded 'A (very short) quantitative analysis of The Roots' discography' to @academia! <a href=\"https://www.academia.edu/11576272/A_very_short_quantitative_analysis_of_The_Roots_discography\">https://www.academia.edu/11576272/A_very_short_quantitative_analysis_of_The_Roots_discography</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 21 12:05:31 +0000 2015",
    idStr: "579252494175510528",
    content:
      'Wow, Sweden is ahead of the game in degenderfication and allowing people to just be people: <a href="http://www.mrfoxmagazine.com/parenting/scandi-sense/">http://www.mrfoxmagazine.com/parenting/scandi-sense/</a> via @mrfoxmag',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 20 13:08:30 +0000 2015",
    idStr: "578905958472122368",
    content:
      "... graded their sexual partners (Good Sex, Bad Sex) is strikingly close to where we're at. Wait for '<a href=\"http://RateMyFriends.com\">http://RateMyFriends.com</a>'...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 20 13:08:11 +0000 2015",
    idStr: "578905879145230336",
    content:
      'Wow: <a href="http://www.ratemyprofessors.com/">http://www.ratemyprofessors.com/</a>. We really have a grade everything culture. That episode of Tofu with the sketch where people ruthlessly...',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 19 21:09:34 +0000 2015",
    idStr: "578664635865370626",
    content:
      'Please stop calling same-sex marriage "equal marriage" (or worse, "gay marriage"), @YvetteCooperMP, @tinastowell and all #pinknewsdebate',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Mar 19 21:06:00 +0000 2015",
    idStr: "578663736178786304",
    content:
      "Brilliant to have @ChristieElanCan highlight issues for non-gendered people and explain how intersex is not the same on #pinknewsdebate!",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Mar 19 12:13:42 +0000 2015",
    idStr: "578529780095676416",
    content:
      '[@ysjulgbtstaff] Update: PinkNews election debate; York Pride volunteering; free LGBT films: <a href="http://wp.me/p4uHbe-lJ">http://wp.me/p4uHbe-lJ</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 16 08:04:42 +0000 2015",
    idStr: "577379952066228224",
    content:
      '[@ysjulgbtstaff] After our Stonewall success, where do we go next?: <a href="http://wp.me/p4uHbe-ln">http://wp.me/p4uHbe-ln</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 12 12:47:37 +0000 2015",
    idStr: "576001600067641344",
    content:
      '[@ysjulgbtstaff] Reminders: upcoming events; York LGBT History Month 2015 feedback: <a href="http://wp.me/p4uHbe-lp">http://wp.me/p4uHbe-lp</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 09 23:49:42 +0000 2015",
    idStr: "575081055251795969",
    content:
      'For the archives: York LGBT History Month 2015: <a href="http://wp.me/p4LXYh-1OZ">http://wp.me/p4LXYh-1OZ</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 09 10:45:46 +0000 2015",
    idStr: "574883770500837376",
    content:
      '[@ysjulgbtstaff] Update: York LGBT History Month 2015 feedback; York LGBT Forum SGM: <a href="http://wp.me/p4uHbe-la">http://wp.me/p4uHbe-la</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 06 17:56:26 +0000 2015",
    idStr: "573904990361751552",
    content:
      'Find out what your general election candidates have to say about LGBT (and other) issues! <a href="http://blog.yorksj.ac.uk/lgbt/2015/03/02/queerstion-time-the-lgbt-perspective-on-party-politics/">http://blog.yorksj.ac.uk/lgbt/2015/03/02/queerstion-time-the-lgbt-perspective-on-party-politics/</a> #QueerstionTimeYork',
    favouriteCount: "1",
    retweetCount: "3",
  },
  {
    createdAt: "Fri Mar 06 16:21:51 +0000 2015",
    idStr: "573881184050085888",
    content:
      'Great website for unconscious bias: <a href="http://lovehasnolabels.com/">http://lovehasnolabels.com/</a>. Their (@LoveHasNo_) skeleton-behind-a-screen video has gone viral.',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Mar 06 15:21:04 +0000 2015",
    idStr: "573865889222762496",
    content:
      'Good explanation of how the first-past-the-post system can provide unwarranted advantage or disadvantage: <a href="https://theconversation.com/the-2015-election-could-reignite-the-debate-about-electoral-reform-in-britain-37449">https://theconversation.com/the-2015-election-could-reignite-the-debate-about-electoral-reform-in-britain-37449</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 06 15:18:52 +0000 2015",
    idStr: "573865335054594048",
    content: "... though I wish the press would stop calling it 'gay pride'!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 06 15:18:36 +0000 2015",
    idStr: "573865267832492033",
    content:
      'Nice article in @yorkpress about this year\'s @YorkPride launch at @YorkStJohn and the #RaiseYourRainbow theme: <a href="http://www.yorkpress.co.uk/news/11839231.Venues_urged_to_fly_rainbow_flag_for_Gay_Pride/">http://www.yorkpress.co.uk/news/11839231.Venues_urged_to_fly_rainbow_flag_for_Gay_Pride/</a>',
    favouriteCount: "3",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Mar 06 13:26:16 +0000 2015",
    idStr: "573836997409701888",
    content:
      'Feedback: questionnaire and meeting: <a href="http://wp.me/p4LXYh-1OV">http://wp.me/p4LXYh-1OV</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 05 19:37:09 +0000 2015",
    idStr: "573567945928011776",
    content:
      "Powerful and important messages at @YorkPride 2015 launch. Now to celebrate the near-anniversary of same-sex marriage with @YorkLGBTQSoc!",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Mar 03 10:50:22 +0000 2015",
    idStr: "572710599898996737",
    content:
      '[@yorklgbthistory] Events this week: LGBT history talk (@SWPYork) and film (@YscYork): <a href="http://wp.me/p4LXYh-1OC">http://wp.me/p4LXYh-1OC</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 03 10:30:20 +0000 2015",
    idStr: "572705559075373056",
    content:
      '[@ysjulgbtstaff] Update: our journey; talk; film screenings; holiday: <a href="http://wp.me/p4uHbe-kE">http://wp.me/p4uHbe-kE</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 02 22:05:52 +0000 2015",
    idStr: "572518208906895360",
    content:
      "[3/3] but the commentary on the latter touches on a lot of contemporary societal issues (within and beyond the realms of the queer).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 02 22:05:42 +0000 2015",
    idStr: "572518164984143872",
    content:
      "[2/3] Kind of queerly conflating queer as an identity and queer as bizarreness…",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 02 22:05:13 +0000 2015",
    idStr: "572518047023566848",
    content:
      "[1/3] 'Yes, I'm queer - but you are too – video': <a href=\"http://gu.com/p/464n3/stw\">http://gu.com/p/464n3/stw</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 02 15:20:27 +0000 2015",
    idStr: "572416184055824384",
    content:
      '[LGBT Staff Network] Queerstion Time: the LGBT perspective on party politics: <a href="http://wp.me/p4uHbe-kG">http://wp.me/p4uHbe-kG</a> #QueerstionTimeYork',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Feb 28 14:52:25 +0000 2015",
    idStr: "571684352486203392",
    content:
      "Time to check out the penultimate @yorklgbthistory #yorklgbthistory15 event with @YorkAltHis @krheyam et al.",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Feb 28 14:35:36 +0000 2015",
    idStr: "571680118558629888",
    content:
      'And so it begins, @axiomaticalice. Time to get @Killermann-ised. <div class="gallery"><ul><li><a href="../../tweets_media/571680118558629888-B-8ECEoXAAAGuVZ.jpg"><img src="../../tweets_media/571680118558629888-B-8ECEoXAAAGuVZ.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 27 10:50:31 +0000 2015",
    idStr: "571261087749971968",
    content:
      "Please sign this: 'Few hours to speak out against Northern Ireland's “no gays allowed” bill' <a href=\"https://go.allout.org/en/a/northern-ireland/\">https://go.allout.org/en/a/northern-ireland/</a>",
    favouriteCount: "0",
    retweetCount: "3",
  },
  {
    createdAt: "Thu Feb 26 23:29:36 +0000 2015",
    idStr: "571089730517016577",
    content:
      '@FionaThompson16 @RoseBoneCrone See <a href="http://oddballmagazine.com/2014/11/18/poem-by-rose-drew/">http://oddballmagazine.com/2014/11/18/poem-by-rose-drew/</a> - but you need to experience it live!',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Feb 26 13:27:00 +0000 2015",
    idStr: "570938079550300160",
    content:
      "'Life is a learning process, and I've much still to learn' by @natalieben. Admission of human flaws by a politician: <a href=\"http://gu.com/p/465ha\">http://gu.com/p/465ha</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 23 17:07:06 +0000 2015",
    idStr: "569906306863251456",
    content:
      '... submit questions via the hashtag #QueerstionTimeYork <a href="http://queerstiontimeyork.eventbrite.co.uk">http://queerstiontimeyork.eventbrite.co.uk</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Feb 23 17:05:05 +0000 2015",
    idStr: "569905801160212480",
    content:
      'Two month\'s today, we bring you Queerstion Time: the LGBT perspective on party politics! For information, see <a href="http://queerstiontimeyork.eventbrite.co.uk">http://queerstiontimeyork.eventbrite.co.uk</a>',
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Feb 23 13:02:59 +0000 2015",
    idStr: "569844873378934786",
    content:
      '[LGBT Staff Network] Update: upcoming History Month and other events: <a href="http://wp.me/p4uHbe-ks">http://wp.me/p4uHbe-ks</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 23 12:40:54 +0000 2015",
    idStr: "569839316064546816",
    content:
      'Events this week (23-28 February 2015): <a href="http://wp.me/p4LXYh-1Oy">http://wp.me/p4LXYh-1Oy</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 21 18:59:00 +0000 2015",
    idStr: "569209689411604480",
    content: "@axiomaticalice #trendsetter",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 21 18:52:55 +0000 2015",
    idStr: "569208161648971777",
    content:
      'Oh, look what I have, @axiomaticalice! <div class="gallery"><ul><li><a href="../../tweets_media/569208161648971777-B-Y7zXfIAAARVIO.jpg"><img src="../../tweets_media/569208161648971777-B-Y7zXfIAAARVIO.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 19 02:45:05 +0000 2015",
    idStr: "568239819752677377",
    content:
      "Okay, thirty-three references for my master's dissertation and I've not even finished the proposal! #whoops #LotsToRead",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 19 00:42:48 +0000 2015",
    idStr: "568209047524134912",
    content: "A belated happy new year to Chinese friends!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 19 00:38:30 +0000 2015",
    idStr: "568207964064108544",
    content:
      'Good support for trans people in light of @stonewalluk changes, except for the non-binary erasure, by @OwenJones84: <a href="http://gu.com/p/45qdx">http://gu.com/p/45qdx</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 19 00:31:36 +0000 2015",
    idStr: "568206227479662593",
    content:
      'Interesting thoughts from @arthur_affect on race/ethnicity in music industry in the context of the \'Ye: <a href="http://www.salon.com/2015/02/17/kanye_west_vs_white_mediocrity_the_real_story_behind_beck_beyonce_and_snl_40/">http://www.salon.com/2015/02/17/kanye_west_vs_white_mediocrity_the_real_story_behind_beck_beyonce_and_snl_40/</a> via @Salon',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 18 15:12:06 +0000 2015",
    idStr: "568065424736309248",
    content:
      '... self-congratulatory celebration of its outputs." Very true, @KatLindner! Article on lack of diversity in Oscars: <a href="http://theconversation.com/why-are-we-so-surprised-at-the-oscars-lack-of-diversity-36029">http://theconversation.com/why-are-we-so-surprised-at-the-oscars-lack-of-diversity-36029</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 18 15:11:07 +0000 2015",
    idStr: "568065178614534145",
    content:
      '"The Oscars are, after all, an occasion for the white, male-dominated Hollywood film industry to engage in a... (@KatLindner)',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 16 15:42:43 +0000 2015",
    idStr: "567348353999306753",
    content:
      "Very interesting piece @ConversationUK by @NicolaRollock: 'Why is it so hard to talk about race in UK universities?' <a href=\"http://theconversation.com/why-is-it-so-hard-to-talk-about-race-in-uk-universities-37299\">http://theconversation.com/why-is-it-so-hard-to-talk-about-race-in-uk-universities-37299</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 16 13:23:50 +0000 2015",
    idStr: "567313404319105024",
    content:
      '[@ysjulgbtstaff] Update: upcoming History Month events; LGBT and faith events: <a href="http://wp.me/p4uHbe-ke">http://wp.me/p4uHbe-ke</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 16 10:38:26 +0000 2015",
    idStr: "567271782013362176",
    content:
      'Events this week (16-22 February 2015): <a href="http://wp.me/p4LXYh-1Op">http://wp.me/p4LXYh-1Op</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 15 11:27:49 +0000 2015",
    idStr: "566921819794714624",
    content:
      "@iwilsonysj @nathanchenery @yorklgbthistory ... wealth of different groups all doing different things. But yeah, communities don't always.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 15 11:23:51 +0000 2015",
    idStr: "566920823060332544",
    content:
      "@iwilsonysj @nathanchenery @yorklgbthistory ... a more organic, vibrant and diverse entity.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Feb 13 00:15:28 +0000 2015",
    idStr: "566027840978972672",
    content:
      "Great night at 'T is for trans' for #yorklgbthistory15 (@yorklgbthistory) with @axiomaticalice @krheyam et al.!",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Feb 11 19:24:49 +0000 2015",
    idStr: "565592309837074434",
    content:
      "Really useful synthesis (or overview #jargon) of public relations best practice by @RichardAbbott at tonight's #GoYorkMasterclass",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 11 18:11:20 +0000 2015",
    idStr: "565573815699525632",
    content:
      "Anti-jargon, pro-clarity: great start to this #GoYorkMasterclass by @RichardAbbott #GoYork",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 11 18:05:25 +0000 2015",
    idStr: "565572329552769024",
    content:
      "Time for a Go York Business Masterclass on managing reputation online and offline from @RichardAbbott of @CicadaComms.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 11 12:58:58 +0000 2015",
    idStr: "565495206272053248",
    content:
      "Brilliant reason @KellieMaloneyMe joined Celebrity Big Brother: to normalise the trans community #alloutyork #yorklgbthistory15",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 11 12:57:51 +0000 2015",
    idStr: "565494924377071617",
    content:
      "Terrible media treatment leaving @KellieMaloneyMe little choice but to come out #alloutyork #yorklgbthistory15",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Feb 11 12:55:00 +0000 2015",
    idStr: "565494210489761792",
    content: "talking*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 11 12:53:12 +0000 2015",
    idStr: "565493755802030080",
    content:
      "Now @KellieMaloneyMe taking about her personal story of being trans in the macho world of boxing #alloutyork #yorklgbthistory15",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Feb 11 12:46:19 +0000 2015",
    idStr: "565492025844596736",
    content:
      "Good to see the (or a) trans flag prominent in the #alloutyork branding #yorklgbthistory15",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Feb 11 12:43:50 +0000 2015",
    idStr: "565491397000986624",
    content:
      ".@Kersten1england welcoming attendees to #alloutyork for #yorklgbthistory15, noting how far we've come and how far we have to go.",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Feb 11 07:59:30 +0000 2015",
    idStr: "565419843663699970",
    content:
      "Looking forward to today's #AllOut conference at @YorkStJohn for #yorklgbthistory15 and talking about @ysjulgbtstaff #AllOutYork",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Feb 10 12:06:47 +0000 2015",
    idStr: "565119687697391616",
    content:
      "Yes yes yes yes yes! 'Finally, Some Positive Political Posters About Immigration!' <a href=\"http://huff.to/1xYhL0d\">http://huff.to/1xYhL0d</a> via @HuffPostUK",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 10 11:38:06 +0000 2015",
    idStr: "565112468356472832",
    content:
      "@DrTommy79 @MeiWilshire @yorklgbthistory ... I'd imagine the Centre for Medical Humanities at @UniOfYork would be a good place to start.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 10 11:36:34 +0000 2015",
    idStr: "565112081369018368",
    content:
      "@DrTommy79 @MeiWilshire @yorklgbthistory ... for this year, but perhaps next year one of the universities could host a talk.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 10 10:09:50 +0000 2015",
    idStr: "565090255565365248",
    content:
      '[LGBT Staff Network] Update: upcoming History Month events; film: <a href="http://wp.me/p4uHbe-k9">http://wp.me/p4uHbe-k9</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Sep 10 05:25:37 +0000 2021",
    idStr: "1436199159736975362",
    content:
      'A court named after the 1968 Black American champion has been graced by two Black North American men facing off in the fourth round (one still going), two former Black women\'s singles champions and a Black teenage rising star #USOpen #USOpen2021 <a href="https://thegrio.com/2021/09/06/no-losers-us-open-black-men-tiafoe-aliassime">https://thegrio.com/2021/09/06/no-losers-us-open-black-men-tiafoe-aliassime</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 10 04:57:51 +0000 2021",
    idStr: "1436192172760604672",
    content:
      "US Open women's singles final is a 19-year-old Ecuadorian Filipina Canadian (with Peruvian grandparents) versus an 18-year-old Chinese Romanian Brit born in Canada 🤎🇪🇨🇵🇭🇨🇦🇵🇪🎾🇨🇳🇷🇴🇬🇧🇨🇦🤎 #USOpen #USOpen2021",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 08 23:40:38 +0000 2015",
    idStr: "564569522926276609",
    content:
      'Events this week (9-15 February 2015): <a href="http://wp.me/p4LXYh-1Od">http://wp.me/p4LXYh-1Od</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 07 19:47:22 +0000 2015",
    idStr: "564148432747892736",
    content:
      "Would strongly recommend @RackMountRecord @HugoGlenwright as sound technicians - excellent work at the #yorklgbthistory15 launch!",
    favouriteCount: "3",
    retweetCount: "5",
  },
  {
    createdAt: "Fri Feb 06 23:28:40 +0000 2015",
    idStr: "563841737769353218",
    content:
      "Great to see so many people enjoy the #yorklgbthistory15 launch! Many thanks all to those who helped out! See you at the events to come!",
    favouriteCount: "4",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Feb 02 13:15:58 +0000 2015",
    idStr: "562237993889460225",
    content:
      '[LGBT Staff Network] Update: upcoming #yorklgbthistory15 events; World AIDS Day stall: <a href="http://wp.me/p4uHbe-jQ">http://wp.me/p4uHbe-jQ</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 02 12:54:13 +0000 2015",
    idStr: "562232519496450048",
    content:
      'Events this week (2-8 February 2015): <a href="http://wp.me/p4LXYh-1NW">http://wp.me/p4LXYh-1NW</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Feb 01 14:04:55 +0000 2015",
    idStr: "561887927194886144",
    content:
      "*Clay Davis catchphrase* '10 things you thought were vegan that aren't' <a href=\"http://m.deliciousliving.com/blog/10-things-you-thought-were-vegan-arent\">http://m.deliciousliving.com/blog/10-things-you-thought-were-vegan-arent</a> via @deliciousliving",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jan 29 23:16:22 +0000 2015",
    idStr: "560939539913793537",
    content:
      'Oh my- what- did this really just happen? !!! Fantastico! @Selfridges London to only stock gender-neutral clothing: <a href="http://www.pinknews.co.uk/2015/01/28/selfridges-london-announces-it-will-only-stock-gender-neutral-clothing/">http://www.pinknews.co.uk/2015/01/28/selfridges-london-announces-it-will-only-stock-gender-neutral-clothing/</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 27 15:38:47 +0000 2015",
    idStr: "560099607745933312",
    content:
      '... and the food from @eehbanhmi. Please come back to @ysjsuwhatson @YSJSU @YorkStJohn, @blinkcafes! #ysjfoodmarket <div class="gallery"><ul><li><a href="../../tweets_media/560099607745933312-B8XfoAMCcAEuuR1.jpg"><img src="../../tweets_media/560099607745933312-B8XfoAMCcAEuuR1.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Jan 27 14:52:55 +0000 2015",
    idStr: "560088064408948736",
    content:
      "Lovely to gorgeous street food - @eehbanhmi - with a vegan option pop up outside my office!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 27 12:19:45 +0000 2015",
    idStr: "560049521351491584",
    content:
      "'Talking About Teaching 2015 #YSJTAT' by @PhilVincent @YSJADD @YSJTEL <a href=\"http://blog.yorksj.ac.uk/moodle/2015/01/27/talking-about-teaching-2015-ysjtat/\">http://blog.yorksj.ac.uk/moodle/2015/01/27/talking-about-teaching-2015-ysjtat/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 21:47:43 +0000 2015",
    idStr: "558742904139960320",
    content:
      '[3/3] … good words from @GreenBenali and the LGBTIQ Greens committee: <a href="http://www.pinknews.co.uk/2015/01/23/green-party-lgbtiq-group-condemns-candidate-after-transgender-row/">http://www.pinknews.co.uk/2015/01/23/green-party-lgbtiq-group-condemns-candidate-after-transgender-row/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 21:46:56 +0000 2015",
    idStr: "558742704730169344",
    content:
      "[2/?] … it should be about doing what's right for all. Rupert Read is wrong, he's a Green, and we aren't afraid to say it…",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 21:46:19 +0000 2015",
    idStr: "558742549784174593",
    content:
      "[1/?] @TheGreenParty is not afraid to be self-critical - politics shouldn't be about bigging up your own and getting one over the rest…",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 21:25:57 +0000 2015",
    idStr: "558737425636548609",
    content: "@yorkstjohn @storify @philvincent Talking about Teaching*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 21:20:53 +0000 2015",
    idStr: "558736147732762624",
    content:
      'Lots of useful ideas at today\'s #YSJTAT (@YorkStJohn Taking about Teaching). @Storify composite by @PhilVincent: <a href="https://storify.com/PhilVincent/talking-about-teaching-2015">https://storify.com/PhilVincent/talking-about-teaching-2015</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 18:53:39 +0000 2015",
    idStr: "558699095423221761",
    content:
      "Mainstream media don't care about good news enough. @oneandother have a better philosophy.",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 18:08:05 +0000 2015",
    idStr: "558687631815737344",
    content:
      'I\'d rather support people who care about everywhere, not just here. <div class="gallery"><ul><li><a href="../../tweets_media/558687631815737344-B8Dbbp7IcAA2gy1.jpg"><img src="../../tweets_media/558687631815737344-B8Dbbp7IcAA2gy1.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 18:03:39 +0000 2015",
    idStr: "558686514679656448",
    content:
      '@marijedavidson @FionaThompson16 @HelenSauntson ... then people decide what to go to and have open discussions: <a href="http://en.m.wikipedia.org/wiki/Unconference">http://en.m.wikipedia.org/wiki/Unconference</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 18:01:36 +0000 2015",
    idStr: "558685999182929921",
    content:
      "@marijedavidson @FionaThompson16 @HelenSauntson ... at the start of the conference, participants can take spaces and choose topics...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 16:42:06 +0000 2015",
    idStr: "558665990704480256",
    content:
      "Just read about the concept of the unconference - very interesting! Ever come across it, @FionaThompson16 @HelenSauntson @marijedavidson?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 16:06:20 +0000 2015",
    idStr: "558656990596304896",
    content:
      "The @ysjulgbtstaff Steering Group come out on top in the #YSJTAT game, @FionaThompson16 @HelenSauntson!",
    favouriteCount: "2",
    retweetCount: "3",
  },
  {
    createdAt: "Fri Jan 23 15:53:38 +0000 2015",
    idStr: "558653792947019776",
    content:
      "Dai stresses the importance of openness and honesty in developing inclusivity - don't pretend you can make changes if you can't #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 15:50:31 +0000 2015",
    idStr: "558653010122137600",
    content:
      "Dai talks about language and identity and notes that in Wales, you can often choose your language for assessment submission #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 15:48:53 +0000 2015",
    idStr: "558652597020921856",
    content:
      "Amanda notes her line manager is starting to learn sign language, which is a really impressive example of inclusivity #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 15:47:25 +0000 2015",
    idStr: "558652229599887360",
    content:
      "Amanda notes that she is really happy to have had Dai join the team - before she was excluded from office chat #YSJTAT",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 15:41:56 +0000 2015",
    idStr: "558650849174773761",
    content:
      "Dai makes the key point that people must ask individuals how they can be inclusive - not assume or be afraid to ask! #YSJTAT",
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jan 23 15:40:03 +0000 2015",
    idStr: "558650375310684160",
    content:
      "Dai touches on designing an incisive built environment - deaf people often bump into things as they are busy reading sign language #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 15:37:49 +0000 2015",
    idStr: "558649812879691778",
    content:
      "Dai and Amanda touch on issues of identity mismatch when using an interpreter if the latter vocalises the language of the former #YSJTAT",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 15:34:09 +0000 2015",
    idStr: "558648889541410816",
    content:
      "... therefore often not available and have to book well in advance, limiting flexibility in collaborative work #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 15:33:35 +0000 2015",
    idStr: "558648747350327296",
    content:
      "Dai says the best inclusive practice is interpreting, but access to interpreters is problematic: not nearly enough... #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 15:31:43 +0000 2015",
    idStr: "558648280348098560",
    content:
      "Dai O'Brien touches on the pertinent issue of Disabled Students Allowance and access to funding for support #YSJTAT",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 15:27:47 +0000 2015",
    idStr: "558647289175367681",
    content:
      "... initially couldn't complete assessment in sign language, but later could and was able to express ideas fully #YSJTAT",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 15:26:59 +0000 2015",
    idStr: "558647086292684800",
    content:
      "Amanda Smith states she initially felt a little excluded and isolated at @YorkStJohn, but has seen important changes... #YSJTAT",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 15:17:50 +0000 2015",
    idStr: "558644782906757120",
    content:
      "Amanda Smith notes that she had to rely on her parents and herself to learn due to the poor approach in established schools #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 15:15:25 +0000 2015",
    idStr: "558644178335596544",
    content:
      "Amanda Smith talks about being taught (as deaf students) in school with an oral and not signed approach - inappropriate! #YSJTAT",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 15:13:56 +0000 2015",
    idStr: "558643802479812608",
    content:
      "Amanda Smith talks about being a victim of (bad) inclusive practice - being taught French in a deaf unit through lipreading #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 14:43:57 +0000 2015",
    idStr: "558636257606393856",
    content:
      "Looking forward to the final keynote, hearing BSL teachers' perspectives #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 14:40:37 +0000 2015",
    idStr: "558635420662394881",
    content:
      "Important that the creative form is used to enhance the message - need to meet the learning outcomes. Style enabling substance #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 14:35:04 +0000 2015",
    idStr: "558634020435918848",
    content:
      "Issue around encouraging students to try edgy, risky presentations if they know they can pass with a PowerPoint - try in first year? #YSJTAT",
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jan 23 14:31:06 +0000 2015",
    idStr: "558633023558545410",
    content: "Assessment choice has led to higher student attainment #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 14:26:28 +0000 2015",
    idStr: "558631858062512128",
    content:
      "But by not forcing students to break from traditional forms of presentation - offering choice - enables inclusivity #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 14:25:18 +0000 2015",
    idStr: "558631565128122368",
    content:
      "Creative forms of presentation make theoretical concepts more digestible - more accessible. #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 14:24:03 +0000 2015",
    idStr: "558631250156871681",
    content:
      "Encouraging creative forms of presentations can help students to better communicate key theoretical messages #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 14:22:21 +0000 2015",
    idStr: "558630821490618368",
    content:
      "Ongoing assessment taxonomy work in Registry has the potential to enable such flexibility within broad areas #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 14:20:33 +0000 2015",
    idStr: "558630369831174144",
    content:
      "Peter Raymond talking about providing choice within limits -sticking to a presentation, but not confined to PowerPoint! #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 14:16:08 +0000 2015",
    idStr: "558629257283657730",
    content: "Time to learn about assessment choice with Peter Raymond #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 14:10:14 +0000 2015",
    idStr: "558627771673767936",
    content:
      "Issues around recording live lectures and confidentiality - should expectations/disclosure agreements be set out at the start? #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 14:08:26 +0000 2015",
    idStr: "558627321465552897",
    content:
      "Feedback can be sought on an issue-by-issue basis and in bite-size form to maximise engagement #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 14:06:09 +0000 2015",
    idStr: "558626745537298432",
    content:
      "Students want their feedback to be key to all kinds of university decisions - those relating to study, those relating to catering... #YSJTAT",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 14:04:03 +0000 2015",
    idStr: "558626215826051072",
    content:
      "Need to consider individual student preferences about the form of feedback #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 13:55:15 +0000 2015",
    idStr: "558624000298188801",
    content:
      "Need to share this Prezi on the student dream for learning, teaching and assessment, @YSJSU_Laura and @YSJSU_Gabby - great research! #YSJTAT",
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jan 23 13:52:44 +0000 2015",
    idStr: "558623369596514307",
    content:
      "Giving students roles in group work is a great way to make sure everyone engages in discussion #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 13:51:47 +0000 2015",
    idStr: "558623131347480576",
    content:
      "Students like the flipped classroom and time to discuss what the content they're presented with #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 13:50:55 +0000 2015",
    idStr: "558622912341876737",
    content:
      "Incorporating media into lectures is a good way to diversify and avoid soporific blandness! #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 13:49:10 +0000 2015",
    idStr: "558622473269567488",
    content:
      "Communication is vital to education. Students suggest establishing minimum expectations for (engaging) lectures #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 13:47:53 +0000 2015",
    idStr: "558622149473501184",
    content:
      "Nice improvised paper PowerPoint by @YSJSU_Gabby and @YSJSU_Laura - innovation! #YSJTAT",
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jan 23 13:46:50 +0000 2015",
    idStr: "558621882367627265",
    content:
      "Time to learn about the student dream for inclusive learning, teaching and assessment with @YSJSU_Laura and @YSJSU_Gabby #YSJTAT",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 13:38:00 +0000 2015",
    idStr: "558619660095332352",
    content:
      "Need to consider how to support autistic spectrum students to integrate with others - important for group work #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 13:26:44 +0000 2015",
    idStr: "558616827400843264",
    content:
      "Students with autism/aspergers might think they need to read everything on the reading list, creating anxiety - clarify expectations #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 13:25:32 +0000 2015",
    idStr: "558616523724820480",
    content:
      "Need to be sensitive to anxiety that can be an issue for people with autism/aspergers #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 13:23:33 +0000 2015",
    idStr: "558616026213253121",
    content:
      "Need to be conscious of the concrete way of thinking often associated with autism/aspergers - how to accommodate this #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 13:17:02 +0000 2015",
    idStr: "558614385493811200",
    content:
      "My retweeting has thrust you into the lead, @FionaThompson16! #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 12:28:18 +0000 2015",
    idStr: "558602119864152066",
    content:
      "Kerry Sorby notes @OpenBadges don't improve attainment - but is that the ultimate goal? Noted engagement is another factor #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 12:25:50 +0000 2015",
    idStr: "558601498368954368",
    content:
      "Need for clarity - step-by-step instructions - about what is required to earn specific @OpenBadges #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 12:21:37 +0000 2015",
    idStr: "558600439412060160",
    content:
      "The metadata benefit of @OpenBadges over paper certificates noted by @iwilsonysj #YSJTAT",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 12:20:59 +0000 2015",
    idStr: "558600277851652098",
    content:
      "Noted you can embed @OpenBadges in your @LinkedIn profile - must do that! #YSJTAT",
    favouriteCount: "3",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jan 23 12:20:25 +0000 2015",
    idStr: "558600137417981953",
    content:
      "Issue of employers understanding what @OpenBadges are and their value, raised by Liz Whitaker in careers #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 12:10:32 +0000 2015",
    idStr: "558597649298104321",
    content:
      "Eden Marrison notes @OpenBadges provide a sense of achievement and can be used with content complementary to that in lectures #YSJTAT",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jan 23 12:07:30 +0000 2015",
    idStr: "558596886974971904",
    content:
      "Kerry Sorby noted that @OpenBadges led students to actively seek learning - asking for additional opportunity to engage #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 12:05:03 +0000 2015",
    idStr: "558596268264812545",
    content:
      "Occupational therapy company endorsed one of the @OpenBadges - added value #YSJTAT",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 12:02:22 +0000 2015",
    idStr: "558595595246764032",
    content:
      "Kerry Sorby notes that the flipped classroom approach didn't result in less engagement in timetabled contact #YSJTAT",
    favouriteCount: "0",
    retweetCount: "4",
  },
  {
    createdAt: "Fri Jan 23 12:00:47 +0000 2015",
    idStr: "558595195357634560",
    content: "@yndajas Teaching, not rescuing...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 12:00:13 +0000 2015",
    idStr: "558595051576905728",
    content:
      "Kerry Sorby talks about using @OpenBadges as a way of monitoring/assuring engagement in a flipped classroom approach #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 11:55:37 +0000 2015",
    idStr: "558593895547019264",
    content:
      'The @OpenBadges anatomy graphic cited by @danielmackley (as always!): <a href="http://classhack.com/post/45364649211/open-badge-anatomy-updated">http://classhack.com/post/45364649211/open-badge-anatomy-updated</a> #YSJTAT',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 11:52:35 +0000 2015",
    idStr: "558593130690543616",
    content:
      "Time to learn about @OpenBadges with @danielmackley et al. #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 11:45:08 +0000 2015",
    idStr: "558591255643693056",
    content: "4. Mutuality #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 11:44:54 +0000 2015",
    idStr: "558591197284159489",
    content:
      "3. Breaking down barriers between rescuing, learning and research #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 11:43:59 +0000 2015",
    idStr: "558590969587974144",
    content:
      "2. Fostering inclusivity though engagement and interaction #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 11:42:41 +0000 2015",
    idStr: "558590641866039296",
    content:
      "Headlines from the workshop: 1. Inclusivity as an invisible presence #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 11:39:15 +0000 2015",
    idStr: "558589776497221632",
    content:
      'Interesting point by @StuClarkPage - language of inclusivity is problematic. "Protected characteristics" - is it about protection? #YSJTAT',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 11:38:20 +0000 2015",
    idStr: "558589546854875137",
    content:
      "Interesting to learn about Converge Communitas choir, enabling mental health service users to engage with music alongside students #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 11:14:46 +0000 2015",
    idStr: "558583616851415040",
    content:
      "These ideas of inclusivity and embracing diversity are highlighted on the International Centre for Community Music's main webpage #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 11:12:53 +0000 2015",
    idStr: "558583142177849344",
    content:
      'Community music seeks to celebrate difference "in a safe, positive, and nurturing environment" #YSJTAT',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 11:11:55 +0000 2015",
    idStr: "558582899260555264",
    content:
      "Inclusion one of the five key ideas of community music, alongside diversity - encouraging interaction and engaging populations #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 10:45:23 +0000 2015",
    idStr: "558576218933841921",
    content:
      "Great overview of inclusive practice by Chris Bradsha in the first keynote - lots of important points raised #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 10:42:48 +0000 2015",
    idStr: "558575569223573505",
    content:
      "Chris Bradshaw notes the need to do more than write policy (because no one reads them!) #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Sep 01 17:05:34 +0000 2021",
    idStr: "1433113817840590851",
    content: "Viral**********",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 01 16:46:22 +0000 2021",
    idStr: "1433108986828570625",
    content:
      'Is it obligatory to follow up your first vital tweet with "wow didn\'t expect this to blow up lol"?',
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 10:36:00 +0000 2015",
    idStr: "558573861282017280",
    content:
      "Chris Bradshaw touches on the move towards assessment choice, empowering students #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 10:35:28 +0000 2015",
    idStr: "558573725600448512",
    content:
      "Chris Bradshaw notes the issue of being inclusive of those from other cultures who are used to different approaches to learning #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 10:29:51 +0000 2015",
    idStr: "558572313193746432",
    content:
      "Chris Bradshaw touches on the issue of Eurocentric curricula #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 10:21:39 +0000 2015",
    idStr: "558570249021579264",
    content:
      "Chris Bradshaw talking about forming discipline-based groups to identify issues of and approaches to inclusivity relevant to them #YSJTAT",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 10:16:44 +0000 2015",
    idStr: "558569009038520320",
    content:
      "Chris Bradshaw notes nobody ever says equality is a bad thing, but often never do anything about it #YSJTAT",
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jan 23 10:12:51 +0000 2015",
    idStr: "558568034080915456",
    content:
      "Live-tweeting and minute-taking transferrable/interchangeable skills?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 10:08:29 +0000 2015",
    idStr: "558566933810143232",
    content:
      "Chris Bradshaw suggests surveying students who drop out to find out why they drop out, and the same for those who don't apply #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 10:07:20 +0000 2015",
    idStr: "558566644885508096",
    content:
      "Chris Bradshaw noting the issue of traditional gender imbalances in certain subjects #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 10:04:13 +0000 2015",
    idStr: "558565862656188416",
    content:
      "Chris Bradshaw argues curriculum design, curriculum delivery and assessment shouldn't be isolated - they are inherently linked #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 10:02:29 +0000 2015",
    idStr: "558565424947036160",
    content:
      "Inclusivity is not about just opening a course up to everybody, it's about designing it for everybody, notes Chris Bradshaw #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 10:01:04 +0000 2015",
    idStr: "558565069181976576",
    content: "Equality is not treating everybody the same #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 09:56:48 +0000 2015",
    idStr: "558563995595341824",
    content:
      "Chris Bradshaw notes there's likely more students who are LGB than disabled, but we don't talk about their needs nearly as much #YSJTAT",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 09:49:21 +0000 2015",
    idStr: "558562121265709056",
    content:
      "Chris Bradshaw touches on the issue that we actually need to reach out to the people who don't engage with events on inclusivity #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 09:44:44 +0000 2015",
    idStr: "558560959422537728",
    content:
      "The importance of the theme of inclusivity emphasised by @MandyAsghar and now @alyson_tobin #YSJTAT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jan 23 09:41:01 +0000 2015",
    idStr: "558560023002230784",
    content:
      'Taking a picture of the #YSJTAT game whilst @MandyAsghar mentions it and tweeting about it #recursivity <div class="gallery"><ul><li><a href="../../tweets_media/558560023002230784-B8BnYFiIAAA24EH.jpg"><img src="../../tweets_media/558560023002230784-B8BnYFiIAAA24EH.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jan 23 09:35:51 +0000 2015",
    idStr: "558558721719422976",
    content: "Great to see a packed audience at #YSJTAT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 23 09:03:45 +0000 2015",
    idStr: "558550642210643968",
    content:
      "Definitely on your tail now, @iwilsonysj - one point in it! #YSJTAT",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Jan 22 21:24:52 +0000 2015",
    idStr: "558374764327477248",
    content:
      'Fellow Guildhall @YorkGreens candidate @JuneTranmer on why our York Central general election candidate is best: <a href="https://yorkgreenparty.wordpress.com/2015/01/21/guildhall-candidate-june-tranmer-on-why-the-greens-are-the-best-choice-for-york-central/">https://yorkgreenparty.wordpress.com/2015/01/21/guildhall-candidate-june-tranmer-on-why-the-greens-are-the-best-choice-for-york-central/</a>',
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Jan 22 20:30:08 +0000 2015",
    idStr: "558360992002744320",
    content:
      '10 days until the first #yorklgbthistory15 event. Help spread the word with your cover photo: <a href="http://yorklgbthistory.org.uk/wp-content/uploads/2015/01/banner.Twitter.personal.jpg">http://yorklgbthistory.org.uk/wp-content/uploads/2015/01/banner.Twitter.personal.jpg</a> <div class="gallery"><ul><li><a href="../../tweets_media/558360992002744320-B7vrVuJCEAAW4q9.jpg"><img src="../../tweets_media/558360992002744320-B7vrVuJCEAAW4q9.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Jan 22 12:43:16 +0000 2015",
    idStr: "558243497309138945",
    content:
      'Prize for most captivating, clear and concise #YSJTAT session description must go to @YSJSU_Laura @YSJSU_Gabby! <div class="gallery"><ul><li><a href="../../tweets_media/558243497309138945-B79HgJ3CUAABVLs.png"><img src="../../tweets_media/558243497309138945-B79HgJ3CUAABVLs.png"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Jan 22 11:51:50 +0000 2015",
    idStr: "558230555087880192",
    content:
      '... and an overview of the @EquallyOurs guide, including a link to the handy one-page summary, here: <a href="http://www.equally-ours.org.uk/resources/guide-talking-human-rights/">http://www.equally-ours.org.uk/resources/guide-talking-human-rights/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jan 22 11:50:10 +0000 2015",
    idStr: "558230136982888448",
    content:
      'Very interesting practical guide to talking about (and communicating the importance of) human rights by @EquallyOurs: <a href="http://www.equally-ours.org.uk/blog/wp-content/uploads/2014/10/A-practical-guide-to-communicating-human-rights-FINAL.pdf">http://www.equally-ours.org.uk/blog/wp-content/uploads/2014/10/A-practical-guide-to-communicating-human-rights-FINAL.pdf</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jan 22 10:59:34 +0000 2015",
    idStr: "558217402610360320",
    content:
      'Jumped into the top five of the #YSJTAT (see @YSJADD) conference game leaderboard! Watch out, @FionaThompson16! <a href="https://www.rise.global/display/view/7909/2325316/full">https://www.rise.global/display/view/7909/2325316/full</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 21 13:07:50 +0000 2015",
    idStr: "557887291797295105",
    content:
      "Looking forward to the annual @YSJADD Talking about Teaching (#YSJTAT) conference on Friday; great to have inclusivity as the theme.",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Jan 21 02:13:59 +0000 2015",
    idStr: "557722745153519616",
    content:
      "I was asked yesterday what the difference between @TheGreenParty and UKIP was. Okay...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 19 08:07:02 +0000 2015",
    idStr: "557086820232466433",
    content:
      '[LGBT Staff Network] Update: Talking about Teaching 2015; working abroad event contributions: <a href="http://wp.me/p4uHbe-j0">http://wp.me/p4uHbe-j0</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 18 22:53:46 +0000 2015",
    idStr: "556947583571329025",
    content:
      "'If @TheGreenParty has the best policies, why does hardly anyone vote for them?' by @Angry_Voice <a href=\"http://anotherangryvoice.blogspot.com/2014/05/green-party-best-policies.html\">http://anotherangryvoice.blogspot.com/2014/05/green-party-best-policies.html</a>",
    favouriteCount: "8",
    retweetCount: "14",
  },
  {
    createdAt: "Wed Jan 14 23:55:47 +0000 2015",
    idStr: "555513642381479936",
    content:
      'In offence of one-size-fits-all flattery. <div class="gallery"><ul><li><a href="../../tweets_media/555513642381479936-B7WUtrGCQAAEJ9R.png"><img src="../../tweets_media/555513642381479936-B7WUtrGCQAAEJ9R.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 14 15:40:53 +0000 2015",
    idStr: "555389096906850305",
    content:
      '[@ysjulgbtstaff] York St John University (@YorkStJohn) in @stonewalluk\'s top 100 organisations for LGB-friendliness: <a href="http://wp.me/p4uHbe-ji">http://wp.me/p4uHbe-ji</a>',
    favouriteCount: "2",
    retweetCount: "3",
  },
  {
    createdAt: "Tue Jan 13 17:55:18 +0000 2015",
    idStr: "555060532362100736",
    content:
      'Oh! I\'m here: <a href="http://york.greenparty.org.uk/people/guildhall-candidates-2015.html#yndajas">http://york.greenparty.org.uk/people/guildhall-candidates-2015.html#yndajas</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 13 00:42:47 +0000 2015",
    idStr: "554800692368797696",
    content:
      "Dissertation proposal submitted + @yorklgbthistory programme released and promoted + discovery of mystery achievement = fruitful day!",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 12 10:27:03 +0000 2015",
    idStr: "554585340229746689",
    content:
      '[LGBT Staff Network] Thirty events across York to mark LGBT History Month 2015: <a href="http://wp.me/p4uHbe-jc">http://wp.me/p4uHbe-jc</a> #yorklgbthistory15',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 12 08:29:54 +0000 2015",
    idStr: "554555860488572928",
    content:
      'Press release: thirty events to take place across York to mark LGBT History Month 2015: <a href="http://wp.me/p4LXYh-1Nl">http://wp.me/p4LXYh-1Nl</a> #yorklgbthistory15',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Jan 07 21:37:39 +0000 2015",
    idStr: "552942162875146240",
    content:
      "[@yorklgbthistory] 'Violette' at @CityScreenYork: <a href=\"http://wp.me/p4LXYh-1MX\">http://wp.me/p4LXYh-1MX</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 05 11:28:20 +0000 2015",
    idStr: "552064046539608064",
    content:
      '[@ysjulgbtstaff] Update: Strategic Plan consultation; invitation for contributions; film: <a href="http://wp.me/p4uHbe-iC">http://wp.me/p4uHbe-iC</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 02 01:11:52 +0000 2015",
    idStr: "550821744588898304",
    content:
      'Look what I found, @ysjequality! <div class="gallery"><ul><li><a href="../../tweets_media/550821744588898304-B6Tpb4rIIAAnmsl.jpg"><img src="../../tweets_media/550821744588898304-B6Tpb4rIIAAnmsl.jpg"></a></li><li><a href="../../tweets_media/550821744588898304-B6TpczEIUAAHI29.jpg"><img src="../../tweets_media/550821744588898304-B6TpczEIUAAHI29.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jan 01 22:21:15 +0000 2015",
    idStr: "550778809579233280",
    content: "Ninety outgoing emails is enough for one night.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 27 23:16:53 +0000 2014",
    idStr: "548980868945936385",
    content:
      'The awesome @ETHEREALSTORY with "APPLE STORE HUSTLE": <a href="http://youtu.be/hgrwZq_JGdA">http://youtu.be/hgrwZq_JGdA</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 24 10:32:14 +0000 2014",
    idStr: "547701275971047425",
    content:
      "This is so wrong: 'Theresa May backs student visa crackdown' <a href=\"http://www.bbc.co.uk/news/uk-politics-30570248\">http://www.bbc.co.uk/news/uk-politics-30570248</a>",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Dec 24 01:51:58 +0000 2014",
    idStr: "547570345780060160",
    content:
      "'What if Downton Abbey told the truth about Britain?' by @pollytoynbee: <a href=\"http://gu.com/p/44dx3/stw\">http://gu.com/p/44dx3/stw</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 20 02:43:11 +0000 2014",
    idStr: "546133685016489985",
    content:
      'Department of Language and Linguistic Science at @UniOfYork ranks second in the country for world-leading research: <a href="http://www.york.ac.uk/language/news/departmental/york-research-ref-2014/">http://www.york.ac.uk/language/news/departmental/york-research-ref-2014/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 19 18:34:37 +0000 2014",
    idStr: "546010729741303810",
    content:
      "¡ನಾನೇ | это я | walao, itu saya | soy yo | it's me! '[@YorkGreens announce] Guildhall local election candidates': <a href=\"http://york.greenparty.org.uk/news/14/york-green-party-announces-guildhall-local-election-candidates.html\">http://york.greenparty.org.uk/news/14/york-green-party-announces-guildhall-local-election-candidates.html</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 16 17:22:38 +0000 2014",
    idStr: "544905453398786048",
    content: "Happy Hanukkah!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 15 16:02:31 +0000 2014",
    idStr: "544522904596410369",
    content:
      "#illridewithyou is nice! (Anti-racist, anti-Islamophobic response to the #sydneysiege.)",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 15 16:00:09 +0000 2014",
    idStr: "544522305834336257",
    content: "Enter the #BlackMessiah.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 15 14:46:45 +0000 2014",
    idStr: "544503837189758977",
    content:
      'The Black Messiah cometh! <div class="gallery"><ul><li><a href="../../tweets_media/544503837189758977-B453WKMCEAAxqf6.jpg"><img src="../../tweets_media/544503837189758977-B453WKMCEAAxqf6.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 15 14:20:28 +0000 2014",
    idStr: "544497219458859008",
    content:
      '.@charliekiss, @TheGreenParty general election candidate at @islingtongreens, on his background and diversity issues: <a href="http://islington.greenparty.org.uk/news/2014/12/13/charlie-kiss-first-trans-man-to-stand-for-election-to-uk-parliament/">http://islington.greenparty.org.uk/news/2014/12/13/charlie-kiss-first-trans-man-to-stand-for-election-to-uk-parliament/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 15 14:09:42 +0000 2014",
    idStr: "544494510647283712",
    content:
      "I think I had a dream that @TheGreenParty won a majority in the upcoming elections. (Or was it a vision?)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 15 04:07:42 +0000 2014",
    idStr: "544343014777561088",
    content:
      "Less than an hour until the new D'Angelo (and the Vanguard) album drops!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 15 00:16:18 +0000 2014",
    idStr: "544284779412459520",
    content: "RSS is the future!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 14 03:42:10 +0000 2014",
    idStr: "543974198717472769",
    content:
      "So… we need to sort ourselves out: 'Earth faces sixth ‘great extinction’…' by @RobinMcKie for @guardian <a href=\"http://www.theguardian.com/environment/2014/dec/14/earth-faces-sixth-great-extinction-with-41-of-amphibians-set-to-go-the-way-of-the-dodo\">http://www.theguardian.com/environment/2014/dec/14/earth-faces-sixth-great-extinction-with-41-of-amphibians-set-to-go-the-way-of-the-dodo</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 13 20:12:56 +0000 2014",
    idStr: "543861146315653120",
    content: "… seems very un-Conservative, but fair enough!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 13 20:11:02 +0000 2014",
    idStr: "543860668026220544",
    content:
      "Interesting, pro-collaboration rhetoric: 'Universities need more collaboration, less competition' <a href=\"http://www.timeshighereducation.co.uk/news/universities-need-more-collaboration-less-competition/2017464.article\">http://www.timeshighereducation.co.uk/news/universities-need-more-collaboration-less-competition/2017464.article</a> via @timeshighered",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 13 20:01:37 +0000 2014",
    idStr: "543858299750187008",
    content:
      "'A brief history of trans parliamentarians' by @zoeimogen <a href=\"http://www.complicity.co.uk/blog/2014/12/a-brief-history-of-trans-parliamentarians/\">http://www.complicity.co.uk/blog/2014/12/a-brief-history-of-trans-parliamentarians/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 13 19:13:23 +0000 2014",
    idStr: "543846159727357953",
    content:
      '.@charliekiss speaks on issues of diversity in politics and being a trans parliamentary candidate for @TheGreenParty: <a href="http://www.pinknews.co.uk/2014/12/13/transgender-green-candidate-theres-a-woeful-lack-of-trans-politcians/">http://www.pinknews.co.uk/2014/12/13/transgender-green-candidate-theres-a-woeful-lack-of-trans-politcians/</a>',
    favouriteCount: "7",
    retweetCount: "13",
  },
  {
    createdAt: "Sat Dec 13 15:21:32 +0000 2014",
    idStr: "543787814195064832",
    content:
      'Super chronos, or perfect time (see top right). <div class="gallery"><ul><li><a href="../../tweets_media/543787814195064832-B4vsIpWCUAISWn8.png"><img src="../../tweets_media/543787814195064832-B4vsIpWCUAISWn8.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 19:13:53 +0000 2014",
    idStr: "543483897783533568",
    content: "150+ unread emails down to four, that feels good...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 18:49:06 +0000 2014",
    idStr: "543477663101644801",
    content:
      "... so effectively all higher education institutions will have the opportunity to engage with Athena SWAN as a measure of gender equality.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 18:47:46 +0000 2014",
    idStr: "543477327964176384",
    content:
      "Interesting, @EqualityinHE's Athena SWAN is to absorb the new gender equality charter mark and drop it's sole focus on STEM(M) disciplines.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 18:32:29 +0000 2014",
    idStr: "543473478247391232",
    content: "Propaganda or just weird: @UKGovTweets?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 18:31:18 +0000 2014",
    idStr: "543473181022257153",
    content:
      'Terrible heading (cheesy, self-important and Great Britain ≠ United Kingdom), but interesting @bisgovuk infographic. <div class="gallery"><ul><li><a href="../../tweets_media/543473181022257153-B38Jp2yCQAAGIms.jpg"><img src="../../tweets_media/543473181022257153-B38Jp2yCQAAGIms.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 18:12:32 +0000 2014",
    idStr: "543468457644535808",
    content:
      "Interesting: 'HIV evolves into less deadly form' by @ClareWilsonMed for @newscientist <a href=\"http://www.newscientist.com/article/dn26643-hiv-evolves-into-less-deadly-form.html\">http://www.newscientist.com/article/dn26643-hiv-evolves-into-less-deadly-form.html</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 17:02:20 +0000 2014",
    idStr: "543450792112312322",
    content:
      "Dystopia or utopia? '5 Trends That Will Change How You Use Social Media in 2015' by @invoker for @TIME/@Techland: <a href=\"http://wp.me/p5HMd-f49c\">http://wp.me/p5HMd-f49c</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 01:28:50 +0000 2014",
    idStr: "543215868575227904",
    content:
      "... and by 'same' in those etymological derivations I meant 'different'! 'Same' is homo.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 01:18:43 +0000 2014",
    idStr: "543213325656403968",
    content:
      "... case again the language we use is reinforcing biological sex (not gender here) as important over any other characteristic.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 01:17:53 +0000 2014",
    idStr: "543213114209345536",
    content:
      "... it means [same of biological sex], where it can only act as an adjective with an inferred [romantic or sexual attraction], in which...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 01:16:18 +0000 2014",
    idStr: "543212715037450240",
    content:
      "... relating to the act of having sex], in which case we have added gender and/or biological sex where it is morphologically absent, or...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 01:15:21 +0000 2014",
    idStr: "543212476050206722",
    content:
      "... continue to use. The etymology of traditional sexual orientation labels is interesting. Take 'heterosexual' - it either means [same...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 01:09:26 +0000 2014",
    idStr: "543210987282001920",
    content:
      "... with titles. We exacerbate the divide and promote the importance of these characteristics on who we can be through the language we...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 01:08:12 +0000 2014",
    idStr: "543210676190445568",
    content:
      "Why should a pronoun denote someone's gender and/or sex any more than it should denote their hair colour, height or race? Same principle...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 01:06:50 +0000 2014",
    idStr: "543210335290023936",
    content:
      "... race than gender, but the traditional thinking around sexual orientation pushes gender and/or sex to the forefront.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 00:59:10 +0000 2014",
    idStr: "543208403834007552",
    content:
      "... characteristics might be more significant to some people. Some people's levels of attraction might be more influenced by height or...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 00:58:08 +0000 2014",
    idStr: "543208143594192897",
    content:
      "... sex are the most important characteristics that determine our attraction, as a result of traditional classifications, when other...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 00:57:08 +0000 2014",
    idStr: "543207894108610562",
    content:
      "... other characteristics that impact levels of attraction may have as much it as little importance. We also assume that gender and/or...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 00:54:25 +0000 2014",
    idStr: "543207208608350208",
    content:
      "... categorised. We exaggerate our perceptions of the differences between people with different gender-based sexual orientations, when...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 00:53:18 +0000 2014",
    idStr: "543206927694839809",
    content:
      "... exaggerate the significance of gender and sex in determining who we are, who we can be, and who we like and how who we like should be...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 12 00:51:27 +0000 2014",
    idStr: "543206463062441984",
    content:
      "Traditional pronouns and sexual orientation labels only take account of gender and/or sex. I believe that this is inhibitory. It makes us...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 11 18:56:36 +0000 2014",
    idStr: "543117162756702209",
    content:
      "Does a car license plate serve any purpose other than aiding discipline/the tracking of agents of perceived disorder?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 09 21:23:38 +0000 2014",
    idStr: "542429389166608384",
    content: "I don't like 'Mr'.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 09 21:23:21 +0000 2014",
    idStr: "542429317863444480",
    content: "Fun fact: vegans don't like anything that is vegan by default.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 09 20:10:27 +0000 2014",
    idStr: "542410972044853250",
    content: '#misheardlyrics "I\'m just being hot-ist", @Outkast - Hey Ya!',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 09 08:27:17 +0000 2014",
    idStr: "542234014652706817",
    content:
      '[LGBT Staff Network] Update: meetings and deadline; live theatre broadcast: <a href="http://wp.me/p4uHbe-ih">http://wp.me/p4uHbe-ih</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 07 00:20:31 +0000 2014",
    idStr: "541386736728018945",
    content: "@superfemmejade etc. to refer to a person of unknown*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 07 00:19:30 +0000 2014",
    idStr: "541386482796478464",
    content: "@superfemmejade … gender.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 06 22:33:49 +0000 2014",
    idStr: "541359884336635904",
    content:
      "Non-binary inclusivity 101: never use she/he, her/him or hers/his.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 06 22:14:06 +0000 2014",
    idStr: "541354923280310276",
    content:
      'Or rather, firefighters are helping ensure pigs aren\'t rescued from murder after experiencing considerable trauma. <div class="gallery"><ul><li><a href="../../tweets_media/541354923280310276-B4NHbw9IIAAIgHR.png"><img src="../../tweets_media/541354923280310276-B4NHbw9IIAAIgHR.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 06 22:09:16 +0000 2014",
    idStr: "541353707322245120",
    content:
      '"[H]eld the seat with a majority of more than 6,000 and 40 percent of the vote" - revise your maths!',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 05 15:17:59 +0000 2014",
    idStr: "540887817216589824",
    content:
      "@FionaThompson16 @SusannaRustin Article linked above might be of interest for our design and human geography people, amongst others.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 05 15:16:57 +0000 2014",
    idStr: "540887558503530496",
    content:
      "Interesting, @FionaThompson16: 'If women built cities, what would our urban landscape look like?' by @SusannaRustin <a href=\"http://gu.com/p/43n4f\">http://gu.com/p/43n4f</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 09 02:28:47 +0000 2021",
    idStr: "1424558244484108292",
    content:
      'Uhmm... #PokemonUNITE #NintendoSwitch<br><br>Image description: Pokémon UNITE scorecard where it shows us winning with a lower score. Surrender? <div class="gallery"><ul><li><a href="../../tweets_media/1424558244484108292-E8UMLI7VoA4nWtH.jpg"><img src="../../tweets_media/1424558244484108292-E8UMLI7VoA4nWtH.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 04 12:18:29 +0000 2014",
    idStr: "540480255228919809",
    content:
      "Very interesting piece exploring intersectionality: 'Black, gay and shot dead in his own car...' <a href=\"http://gu.com/p/43njq/stw\">http://gu.com/p/43njq/stw</a> by @ZachStafford",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Dec 03 15:02:05 +0000 2014",
    idStr: "540159042241699840",
    content:
      "I wonder what it would be like to have standard working hours of 12:00-19:00/20:00.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 03 14:50:46 +0000 2014",
    idStr: "540156193046798336",
    content:
      'So much in here is why I became sceptical of most representations of the news about a decade ago: <a href="http://anotherangryvoice.blogspot.co.uk/2014/12/trust-social-media-mainstream-press-bbc.html">http://anotherangryvoice.blogspot.co.uk/2014/12/trust-social-media-mainstream-press-bbc.html</a> via @Angry_Voice.',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 02 10:36:08 +0000 2014",
    idStr: "539729725480914947",
    content:
      '[LGBT Staff Network] Update: World AIDS Day event; survey: <a href="http://wp.me/p4uHbe-i8">http://wp.me/p4uHbe-i8</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 01 19:24:47 +0000 2014",
    idStr: "539500376966594560",
    content:
      '#cortedepelonuevoalaselfie <div class="gallery"><ul><li><a href="../../tweets_media/539500376966594560-B3ywuRFCcAA9xP2.jpg"><img src="../../tweets_media/539500376966594560-B3ywuRFCcAA9xP2.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 30 23:02:59 +0000 2014",
    idStr: "539192899729379328",
    content:
      "Okay, time to update a slideshow for @ysjulgbtstaff's World AIDS Day stall tomorrow…",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 29 17:00:27 +0000 2014",
    idStr: "538739274959835136",
    content: "I did a study last night.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 26 22:16:47 +0000 2014",
    idStr: "537731721827852288",
    content:
      "\"Make money, but the money you make don't make you\" - wise words from @VicMensa's dad.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 26 22:03:02 +0000 2014",
    idStr: "537728262651125760",
    content:
      "Day five (of five) of black and white photo challenge, nominated by @Trudijackson2: 'Winter' <a href=\"https://www.flickr.com/photos/yndajas/15698198460/in/photostream/\">https://www.flickr.com/photos/yndajas/15698198460/in/photostream/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 25 22:16:24 +0000 2014",
    idStr: "537369236877082624",
    content:
      "Day four (of five) of black and white photo challenge, nominated by @Trudijackson2: 'Zebras' <a href=\"https://www.flickr.com/photos/yndajas/15691883960/\">https://www.flickr.com/photos/yndajas/15691883960/</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 25 19:15:35 +0000 2014",
    idStr: "537323730641649664",
    content:
      '"Liechtenstein is one of the few countries in the world with more registered companies than citizens" #taxdodge',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 24 22:49:54 +0000 2014",
    idStr: "537015280086839296",
    content:
      "Day three (of five) of black and white photo challenge, nominated by @Trudijackson2: 'Hexafoliate' <a href=\"https://www.flickr.com/photos/yndajas/15684190008/\">https://www.flickr.com/photos/yndajas/15684190008/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 24 18:06:11 +0000 2014",
    idStr: "536943880181403648",
    content:
      "That moment when you realise someone you know and used to deal with professionally is involved in UKIP #nauseating",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 23 23:50:53 +0000 2014",
    idStr: "536668239993270272",
    content:
      'New cover (sing-along) on my Soundcloud (Toyface - Flight): <a href="https://soundcloud.com/yndajas/toyface-flight-sing-along">https://soundcloud.com/yndajas/toyface-flight-sing-along</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Nov 23 20:42:29 +0000 2014",
    idStr: "536620827933151235",
    content:
      "… short attention spans will be in ten years. All videos ten seconds maximum; writing no more than 140 characters?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 23 20:41:32 +0000 2014",
    idStr: "536620585301065729",
    content:
      'Oh wow, I just read "[i]f you don’t have the attention span for the full video, you can watch the condensed version here" - I wonder how…',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 23 20:30:38 +0000 2014",
    idStr: "536617843258064896",
    content:
      '… and bonus photos: <a href="https://www.flickr.com/photos/yndajas/">https://www.flickr.com/photos/yndajas/</a> (the first to the fourth, and the sixth).',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 23 20:29:11 +0000 2014",
    idStr: "536617478009659393",
    content:
      "Day two (of five) of black and white photo challenge, nominated by @Trudijackson2: 'палёт' <a href=\"https://www.flickr.com/photos/yndajas/15239832904/\">https://www.flickr.com/photos/yndajas/15239832904/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 23 01:28:48 +0000 2014",
    idStr: "536330492212420608",
    content:
      "… minus the three videos made for @TheYorkMind, as they aren't hosted on my account.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 23 01:25:17 +0000 2014",
    idStr: "536329606471892992",
    content:
      "@lauren_ld91 @nejh @DanCamp4 See above - your work included! #ThrowbackSunday",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 23 01:20:36 +0000 2014",
    idStr: "536328429231439875",
    content:
      'All my YouTube videos now have proper* subtitles (except those without any speech): <a href="https://www.youtube.com/user/yndajas/videos">https://www.youtube.com/user/yndajas/videos</a> #accessibility<br><br>* not automatic',
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Nov 22 20:21:04 +0000 2014",
    idStr: "536253049753567232",
    content:
      "… and the laughter and smirks, as though it's all just a game that Skinner is making UKIP lose, rather than a serious matter. #disconnected",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 22 20:19:44 +0000 2014",
    idStr: "536252711113867264",
    content:
      'Quite a nice video, apart from the childish and self-important murmur, babble and groan in the background: <a href="http://www.bbc.co.uk/news/uk-politics-30141159">http://www.bbc.co.uk/news/uk-politics-30141159</a>…',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 22 17:15:48 +0000 2014",
    idStr: "536206425970995200",
    content:
      '… bonus video from day one of the five-day black and white photo challenge: <a href="http://www.youtube.com/watch?v=e7SHvcMN63w">http://www.youtube.com/watch?v=e7SHvcMN63w</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 22 13:47:22 +0000 2014",
    idStr: "536153969236516864",
    content:
      "Day one (of five) of black and white photo challenge, nominated by @Trudijackson2: 'arachnida' <a href=\"https://flic.kr/p/pShEKg\">https://flic.kr/p/pShEKg</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 21 17:14:59 +0000 2014",
    idStr: "535843832500600832",
    content: "Sung, you're such a perf.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 21 10:33:44 +0000 2014",
    idStr: "535742852303564800",
    content:
      '[LGBT Staff Network] York St John University makes @stonewalluk #NoBystanders pledge: <a href="http://wp.me/p4uHbe-hT">http://wp.me/p4uHbe-hT</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Nov 20 17:16:51 +0000 2014",
    idStr: "535481911008067585",
    content:
      "Brilliant to see 37 @YorkStJohn staff, students and alumni making @stonewalluk #NoBystanders pledges today! @ysjulgbtstaff @ysjequality",
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Nov 20 10:17:24 +0000 2014",
    idStr: "535376354045620224",
    content:
      "Remember all those killed by transphobic violence today for Transgender Day of Remembrance #TDoR2014 @YorkPride @YorkLGBT @HLGBT_York",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Nov 20 09:55:17 +0000 2014",
    idStr: "535370787503734784",
    content:
      'On average, more than one anti-Muslim hate crime a day in London over the last two and a half years: <a href="http://tellmamauk.org/infographic-showing-the-peaks-and-troughs-on-anti-muslim-hate-crimes/">http://tellmamauk.org/infographic-showing-the-peaks-and-troughs-on-anti-muslim-hate-crimes/</a> via @TellMamaUK',
    favouriteCount: "0",
    retweetCount: "4",
  },
  {
    createdAt: "Thu Nov 20 08:20:41 +0000 2014",
    idStr: "535346981372035073",
    content:
      '[LGBT Staff Network] Update: #nobystanders pledge; World AIDS Day stall and event; Campus North resources: <a href="http://wp.me/p4uHbe-hi">http://wp.me/p4uHbe-hi</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 19 23:03:55 +0000 2014",
    idStr: "535206867732267008",
    content:
      "[2/2] welcoming place for our LGBT community.” Nice for the progress to be acknowledged, but taking the credit is more than a bit bold.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 19 23:03:32 +0000 2014",
    idStr: "535206770076315648",
    content:
      "[1/2] In Cllr James Alexander's resignation letter, he said: \"I am particularly proud that under my leadership York has become a more…",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 18 17:18:53 +0000 2014",
    idStr: "534757649762381824",
    content:
      'Slides from (LGBT) community engagement session delivered on behalf of @ysjulgbtstaff @YorkStJohn at Campus North: <a href="http://www.slideshare.net/yndajas/campus-north-141105communityengagement">http://www.slideshare.net/yndajas/campus-north-141105communityengagement</a>',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Nov 18 10:00:27 +0000 2014",
    idStr: "534647311696031745",
    content:
      'Not sure I agree with some of the conclusions on pronouns, but interesting article on adoption of Mx: <a href="http://gu.com/p/43cmg/tw">http://gu.com/p/43cmg/tw</a> via @guardian',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 17 02:08:26 +0000 2014",
    idStr: "534166140516573184",
    content:
      'The 02:00 scruffy hair bathroom selfie. <div class="gallery"><ul><li><a href="../../tweets_media/534166140516573184-B2m9RLcIYAAkzlt.jpg"><img src="../../tweets_media/534166140516573184-B2m9RLcIYAAkzlt.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 16 23:13:41 +0000 2014",
    idStr: "534122160621883392",
    content:
      'What kind of advertising is this? Something out of the pre-cookie era! <div class="gallery"><ul><li><a href="../../tweets_media/534122160621883392-B2mVRmrIYAA9rOt.jpg"><img src="../../tweets_media/534122160621883392-B2mVRmrIYAA9rOt.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 13 11:13:56 +0000 2014",
    idStr: "532853866841116674",
    content:
      '[LGBT Staff Network/@ysjulgbtstaff] York LGBT Forum (@YorkLGBT): AGM on 13 November: <a href="http://wp.me/p4uHbe-hm">http://wp.me/p4uHbe-hm</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 12 12:23:15 +0000 2014",
    idStr: "532508922486480896",
    content: "More gorgeous vegan food at @WentworthColl today!",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Nov 11 20:34:01 +0000 2014",
    idStr: "532270041723858944",
    content:
      'National LGBT History Month (@LGBTHM) launch: <a href="http://yorklgbthistory.org.uk/2014/11/10/national-lgbt-history-month-launch/">http://yorklgbthistory.org.uk/2014/11/10/national-lgbt-history-month-launch/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 09 22:28:54 +0000 2014",
    idStr: "531574176768090112",
    content: "A certain subfield brings about a saddening laugh of despair.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 09 21:28:55 +0000 2014",
    idStr: "531559080935305216",
    content: "208 lines of script, and done.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 09 21:14:30 +0000 2014",
    idStr: "531555455173419008",
    content: "202 lines of script later…",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 09 00:46:55 +0000 2014",
    idStr: "531246520260382720",
    content:
      "… the number of generations you have to go up to find a common ancestor.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 09 00:46:40 +0000 2014",
    idStr: "531246460596391936",
    content:
      "… you are the less related you are to the individual at the centre point), the forward/backward axis, I'm not sure of the name, but it's…",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 09 00:43:22 +0000 2014",
    idStr: "531245627070742528",
    content:
      "Okay, on that three-dimensional chart, the vertical axis is generational, the left/right is inter/intra-familial (further from the centre…",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 09 00:31:18 +0000 2014",
    idStr: "531242591812321280",
    content: "… or, hi, my name's Ynda and I'm a workaholic.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 09 00:28:40 +0000 2014",
    idStr: "531241927711416321",
    content:
      'The messy (and facial) hair look. <div class="gallery"><ul><li><a href="../../tweets_media/531241927711416321-B19Zt-vIUAEmvQ_.jpg"><img src="../../tweets_media/531241927711416321-B19Zt-vIUAEmvQ_.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 08 22:54:46 +0000 2014",
    idStr: "531218298382200832",
    content:
      'David Kato Memorial Lecture: <a href="http://wp.me/p4LXYh-1LD">http://wp.me/p4LXYh-1LD</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 08 22:47:31 +0000 2014",
    idStr: "531216473281544192",
    content:
      "Okay, good bulk of a master's by research thesis proofread, now time for my own formative assignments and some @yorklgbthistory work.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 08 20:36:21 +0000 2014",
    idStr: "531183463538655232",
    content:
      '... or maybe: <div class="gallery"><ul><li><a href="../../tweets_media/531183463538655232-B18kiZfCYAA7UBI.jpg"><img src="../../tweets_media/531183463538655232-B18kiZfCYAA7UBI.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 08 20:23:43 +0000 2014",
    idStr: "531180283190861826",
    content:
      'Axes of relationships. <div class="gallery"><ul><li><a href="../../tweets_media/531180283190861826-B18hpUvCAAAzPpz.jpg"><img src="../../tweets_media/531180283190861826-B18hpUvCAAAzPpz.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 08 13:58:17 +0000 2014",
    idStr: "531083288136675328",
    content:
      'The @ahorapodemos example is one to take note of: <a href="http://anotherangryvoice.blogspot.co.uk/2014/11/why-vote-more-of-same-aav.html">http://anotherangryvoice.blogspot.co.uk/2014/11/why-vote-more-of-same-aav.html</a> via @Angry_Voice <div class="gallery"><ul><li><a href="../../tweets_media/531083288136675328-B17Jb5-IQAA4oY8.jpg"><img src="../../tweets_media/531083288136675328-B17Jb5-IQAA4oY8.jpg"></a></li></ul></div>',
    favouriteCount: "3",
    retweetCount: "14",
  },
  {
    createdAt: "Fri Nov 07 21:42:58 +0000 2014",
    idStr: "530837842059341824",
    content: "Why did nobody ever tell me that lentils are so easy to cook?",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Nov 07 13:36:34 +0000 2014",
    idStr: "530715434496974849",
    content:
      'Six months until national and (@CityofYork) local elections. I\'m voting @TheGreenParty/@YorkGreens - what about you? <a href="http://www.yorkpress.co.uk/news/11587166.POLL__How_will_York_vote_in_May_/">http://www.yorkpress.co.uk/news/11587166.POLL__How_will_York_vote_in_May_/</a>',
    favouriteCount: "3",
    retweetCount: "3",
  },
  {
    createdAt: "Thu Nov 06 22:42:21 +0000 2014",
    idStr: "530490398813454336",
    content:
      '#bbcqt - last week Caroline Lucas was on.  Why not keep coverage impartial and #invitethegreens to #TVDebates? <a href="http://thndr.it/1wNQbG4">http://thndr.it/1wNQbG4</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 06 22:28:50 +0000 2014",
    idStr: "530486994632441856",
    content: "Who addresses their boss 'boss'? #badwriting",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 06 01:20:19 +0000 2014",
    idStr: "530167765068308480",
    content:
      '"Under the current law, farmers are only allowed to use two dogs to flush out fox dens before shooting the foxes" - wait, that\'s not a ban!',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 06 01:17:46 +0000 2014",
    idStr: "530167123553697795",
    content:
      '"There is a very specific issue around pest control" - yes, we certainly need to stop being pests.',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 06 01:13:34 +0000 2014",
    idStr: "530166062659022848",
    content:
      "... threat to lamb, the food, is all that's really cared about by pro-fox hunters. No need to pretend the presence of lamb empathy.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Nov 06 01:11:01 +0000 2014",
    idStr: "530165424705372160",
    content:
      '"New evidence [...] of a growing threat to lambs from a rising fox population" - as opposed to the usual harmonious human-led slaughter?',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Nov 03 21:15:10 +0000 2014",
    idStr: "529381293214420992",
    content:
      'Via @vegansidekick. <div class="gallery"><ul><li><a href="../../tweets_media/529381293214420992-B1i9eTOIAAA0oTZ.jpg"><img src="../../tweets_media/529381293214420992-B1i9eTOIAAA0oTZ.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 03 08:02:21 +0000 2014",
    idStr: "529181773150683137",
    content:
      '[LGBT Staff Network] Supporting trans staff: research, policy and partnership: <a href="http://wp.me/p4uHbe-gz">http://wp.me/p4uHbe-gz</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 02 21:59:25 +0000 2014",
    idStr: "529030042232553472",
    content:
      'Any cats want one of these jawns for @madedotcom? <div class="gallery"><ul><li><a href="../../tweets_media/529030042232553472-B1d-Am7IQAEQKCY.jpg"><img src="../../tweets_media/529030042232553472-B1d-Am7IQAEQKCY.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 02 19:13:26 +0000 2014",
    idStr: "528988272048226304",
    content:
      'Sophie Hicks of @yorkcityfc on the 2014 @yorklgbthistory campaign: <a href="http://wp.me/p4LXYh-62">http://wp.me/p4LXYh-62</a> @YorkPride',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 02 16:03:15 +0000 2014",
    idStr: "528940407502426112",
    content:
      "Correct title: 'What is the point of the Labour Party?' @Angry_Voice",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 02 16:01:23 +0000 2014",
    idStr: "528939938755379200",
    content: '"than the pursuit of power for its own sake." [4/4] @Angry_Voice',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 02 16:00:32 +0000 2014",
    idStr: "528939724778778625",
    content:
      '"that it exists only to seek and maintain political power. The party leadership isn\'t driven by any objective other" [3/4*] @Angry_Voice',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 02 15:58:54 +0000 2014",
    idStr: "528939316710756353",
    content:
      '"The Labour Party has become nothing more than an empty power structure, so far divorced from its founding principles" [2/3] @Angry_Voice',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 02 15:56:40 +0000 2014",
    idStr: "528938752916590592",
    content:
      "Great post by @Angry_Voice, 'What is the point on the Labour Party': <a href=\"http://anotherangryvoice.blogspot.co.uk/2014/10/what-is-point-of-labour.html\">http://anotherangryvoice.blogspot.co.uk/2014/10/what-is-point-of-labour.html</a> [1/3]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 02 12:05:16 +0000 2014",
    idStr: "528880518000300032",
    content:
      '100% @TheGreenParty policy preferences; nearly a third of York Central participants similarly aligned. @YorkGreens <div class="gallery"><ul><li><a href="../../tweets_media/528880518000300032-B1b2AtDIcAAuTm4.jpg"><img src="../../tweets_media/528880518000300032-B1b2AtDIcAAuTm4.jpg"></a></li><li><a href="../../tweets_media/528880518000300032-B1b2BRoIEAAfgGx.jpg"><img src="../../tweets_media/528880518000300032-B1b2BRoIEAAfgGx.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "3",
  },
  {
    createdAt: "Sat Nov 01 17:51:47 +0000 2014",
    idStr: "528605333011562496",
    content:
      "@sweetpotatosoul (By meat-free-alternative-free I mean using more natural ingredients, instead of processed meat alternatives.)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 01 17:50:29 +0000 2014",
    idStr: "528605009035137025",
    content:
      'Ready to learn some more meat-free-alternative-free vegan recipes using @sweetpotatosoul\'s eBook! <div class="gallery"><ul><li><a href="../../tweets_media/528605009035137025-B1X7cXfIQAAmNj5.jpg"><img src="../../tweets_media/528605009035137025-B1X7cXfIQAAmNj5.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 01 15:27:39 +0000 2014",
    idStr: "528569062310547456",
    content:
      "Today I add @thepharcyde and @GeorgeThePoet to my music collection. Time to go get vegan supplies and listen to them.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 01 13:17:02 +0000 2014",
    idStr: "528536191675936768",
    content:
      "[2/2] @nikirust Nice article. On your penultimate point, @MOBFrance/@mob_usa is a great example. On your last point, see @MyFitnessPal.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 01 13:15:11 +0000 2014",
    idStr: "528535725533179904",
    content:
      "[1/2] Happy World Vegan Day! See @NikiRust: 'World Vegan Day: how businesses can help more carnivores go vegan' <a href=\"http://gu.com/p/42pbh/stw\">http://gu.com/p/42pbh/stw</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 01 12:07:07 +0000 2014",
    idStr: "528518598315098112",
    content:
      '[@yorklgbthistory] Introductory meetings for school outreach volunteering: <a href="http://wp.me/p4LXYh-1LK">http://wp.me/p4LXYh-1LK</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Oct 31 12:52:59 +0000 2014",
    idStr: "528167750263259136",
    content: "Gorgeous vegan risotto at @WentworthColl!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 30 12:17:17 +0000 2014",
    idStr: "527796380937379841",
    content:
      '[LGBT Staff Network] Update: World AIDS Day event; lecture; film; show; conference: <a href="http://wp.me/p4uHbe-gw">http://wp.me/p4uHbe-gw</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 27 12:44:11 +0000 2014",
    idStr: "526715986628472833",
    content:
      "Article on using music as an engaging pedagogical tool in school and at university (by @iwilsonysj): 'Music Mania!' <a href=\"http://wilsonwaffling.co.uk/music-mania/\">http://wilsonwaffling.co.uk/music-mania/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 27 08:18:48 +0000 2014",
    idStr: "526649197831790592",
    content:
      '[LGBT Staff Network] Meeting Kylie – my role model and equality champion (by @HelenSauntson): <a href="http://wp.me/p4uHbe-gm">http://wp.me/p4uHbe-gm</a>',
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Oct 25 19:00:42 +0000 2014",
    idStr: "526085964901253120",
    content:
      'Tomorrow - free gay history walk in conjunction with @YorkLGBT: <a href="http://wp.me/p4LXYh-1Li">http://wp.me/p4LXYh-1Li</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 25 12:55:23 +0000 2014",
    idStr: "525994027791831040",
    content:
      'Proud club night returns with a Halloween special: <a href="http://wp.me/p4LXYh-1Lj">http://wp.me/p4LXYh-1Lj</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 24 15:05:24 +0000 2014",
    idStr: "525664360568745984",
    content:
      "The prevalence of skinny jeans (on those that would typically be perceived as men) seems to have taken a steep hike this academic year.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 22 15:19:08 +0000 2014",
    idStr: "524943040327462912",
    content:
      "Off to @leedsbeckett for a Black History Month event: Celebrating Race Equality and Diversity in Education.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 21 18:00:49 +0000 2014",
    idStr: "524621342990020610",
    content:
      '[@yorklgbthistory] Open meeting: <a href="http://wp.me/p4LXYh-6f">http://wp.me/p4LXYh-6f</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 21 14:07:03 +0000 2014",
    idStr: "524562512369299459",
    content:
      'Examples of everyday inclusion (and barriers): <a href="http://www.touretteshero.com/2013/09/19/everyday-inclusion/">http://www.touretteshero.com/2013/09/19/everyday-inclusion/</a> via @Touretteshero',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 21 14:03:11 +0000 2014",
    idStr: "524561540830097409",
    content:
      'Tourettes and disability can act as an invisibility cloak: <a href="http://www.touretteshero.com/2014/10/20/the-cloak-of-invisibility/">http://www.touretteshero.com/2014/10/20/the-cloak-of-invisibility/</a> via @Touretteshero #exclusion #inclusion',
    favouriteCount: "0",
    retweetCount: "3",
  },
  {
    createdAt: "Mon Oct 20 00:46:35 +0000 2014",
    idStr: "523998679192334336",
    content:
      "Website redesign complete (@yorklgbthistory; except maybe for the colour scheme); now to reestablish contact with the outside world.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Oct 18 20:26:57 +0000 2014",
    idStr: "523570952278638593",
    content:
      '[@yorklgbthistory] Play based on the life of Anne Lister by @HLGBT_York: <a href="http://wp.me/p4LXYh-68">http://wp.me/p4LXYh-68</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 18 16:16:03 +0000 2014",
    idStr: "523507812207697920",
    content: "Helvetica Neue is so much easier on the eyes than Lucida Grande.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 17 13:42:46 +0000 2014",
    idStr: "523106850414149632",
    content:
      '[LGBT Staff Network] Update: sport; events; social media; study/work abroad: <a href="http://wp.me/p4uHbe-fk">http://wp.me/p4uHbe-fk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 17 10:20:26 +0000 2014",
    idStr: "523055932373499904",
    content: "The youth of today think all hashes are hashtags!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 17 09:14:18 +0000 2014",
    idStr: "523039286695043072",
    content:
      'Interesting to see 2011 @CityofYork local election results: <a href="http://en.wikipedia.org/wiki/York_Council_election,_2011">http://en.wikipedia.org/wiki/York_Council_election,_2011</a> @YorkGreens @DeniseCraghill @JuneTranmer @Lars4Micklegate',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 16 23:33:47 +0000 2014",
    idStr: "522893197094035456",
    content:
      'What MA students do. <div class="gallery"><ul><li><a href="../../tweets_media/522893197094035456-B0GwlyiIMAAMsAB.png"><img src="../../tweets_media/522893197094035456-B0GwlyiIMAAMsAB.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 16 23:29:04 +0000 2014",
    idStr: "522892008361185281",
    content:
      "… inflict pain or inhibit fundamental freedoms. [*with the possible exception of ending suffering]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 16 23:28:18 +0000 2014",
    idStr: "522891815121588224",
    content:
      "I don't necessarily think death is a bad thing, per se, but I don't believe anyone should get to decide another being's end point*…",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 16 23:23:09 +0000 2014",
    idStr: "522890520474165248",
    content: "Why do we define sexual orientation only in terms of gender/sex?",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 14 22:00:56 +0000 2014",
    idStr: "522145053070729216",
    content:
      'Two LGBT history-themed public lectures at the University of York: <a href="http://wp.me/p4LXYh-5X">http://wp.me/p4LXYh-5X</a> via @yorklgbthistory',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 14 19:55:05 +0000 2014",
    idStr: "522113384679223297",
    content:
      'Nice video by @NoMorePage3: <a href="https://www.youtube.com/watch?v=NZOqGycB6GU">https://www.youtube.com/watch?v=NZOqGycB6GU</a> #agendafeminista @YSJSU_VPWD @YSJSU_Laura @YSJSU_Gabby @axiomaticalice @Admiralsmallhat',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 13 15:33:28 +0000 2014",
    idStr: "521685157494140928",
    content: "平等",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 12 14:35:50 +0000 2014",
    idStr: "521308264899035136",
    content:
      'My top three reasons to vote @TheGreenParty: citizen\'s income, democratic reform, free education... <a href="http://www.reasonstovotegreen.org.uk/?policies=citizens-income:democratic-reform:free-education">http://www.reasonstovotegreen.org.uk/?policies=citizens-income:democratic-reform:free-education</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 12 13:53:46 +0000 2014",
    idStr: "521297679956340737",
    content:
      "Really gorgeous food at @Bicis_y_mas! (New vegetarian and vegan café/bike shop.)",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Jul 28 20:25:56 +0000 2021",
    idStr: "1420480664839892998",
    content:
      'Item recommendations (see top comment here for key translations: <a href="https://www.reddit.com/r/PokemonUnite/comments/ot6ndk/recommended_builds_for_each_pokemon_by_the_rank_1">https://www.reddit.com/r/PokemonUnite/comments/ot6ndk/recommended_builds_for_each_pokemon_by_the_rank_1</a>) <a href="https://twitter.com/bocky_sub/status/1419933287418499078">https://twitter.com/bocky_sub/status/1419933287418499078</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 26 14:19:36 +0000 2021",
    idStr: "1419663698252107781",
    content:
      'Umm, that was interesting... #PokemonUNITE #NintendoSwitch<br><br>Image description: Pokémon UNITE scorecard with 37 kills and 36 assists <div class="gallery"><ul><li><a href="../../tweets_media/1419663698252107781-E7OonDQVgAgTk2P.jpg"><img src="../../tweets_media/1419663698252107781-E7OonDQVgAgTk2P.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 11 21:09:35 +0000 2014",
    idStr: "521044966177796097",
    content:
      'For people whose legs stopped growing at ten: <a href="http://www.dresslily.com/casual-style-v-neck-color-splicing-zipper-embellished-short-sleeves-polyester-sportsuit-product569261.html">http://www.dresslily.com/casual-style-v-neck-color-splicing-zipper-embellished-short-sleeves-polyester-sportsuit-product569261.html</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 11 20:20:13 +0000 2014",
    idStr: "521032542410260480",
    content:
      'Okay… so items in @CityofYork full council meetings get guillotined yet there\'s time to talk about slimming: <a href="http://www.yorkpress.co.uk/news/11529745.display/">http://www.yorkpress.co.uk/news/11529745.display/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 11 14:46:22 +0000 2014",
    idStr: "520948529540636673",
    content: "So @julietband is still on Twitter, @jerryfizzlepop!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 11 14:35:04 +0000 2014",
    idStr: "520945685638574080",
    content:
      'Incredible mix of Marvin Gaye with @MosDefOfficial: ‘Yasiin Gaye - Peculiar Mathematics’ by @amerigo615: <a href="https://soundcloud.com/amerigomusic/yasiin-gaye-peculiar">https://soundcloud.com/amerigomusic/yasiin-gaye-peculiar</a>',
    favouriteCount: "3",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Oct 10 22:21:18 +0000 2014",
    idStr: "520700626683310080",
    content:
      "Sorry to hear of @david3012's loss from @TheRetreatYork. Don't know the details of the events, but David is most definitely a good soul.",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Oct 09 18:25:34 +0000 2014",
    idStr: "520278917140467712",
    content:
      "And now about schools outreach work in development (possible collaboration with @yorklgbthistory here) (@hannah_smith13's @YorkLGBT talk).",
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Oct 09 18:22:39 +0000 2014",
    idStr: "520278180591308801",
    content:
      "Hannah notes York has moved up from 32th/48 to 20th/45 in @stonewalluk's Education Equality Index (@hannah_smith13's @YorkLGBT talk).",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 09 18:20:49 +0000 2014",
    idStr: "520277720442609664",
    content:
      "... including the @YorkPride LGBT Community Pot-funded @ItGetsBetter books purchased for York's schools (@hannah_smith13 @YorkLGBT talk).",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 09 18:18:38 +0000 2014",
    idStr: "520277170317701120",
    content:
      "The wonderful @hannah_smith13 currently delivering a brilliant presentation on all the great work of the @YorkLGBT Schools Subgroup.",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 09 12:05:09 +0000 2014",
    idStr: "520183180796522496",
    content:
      'Interesting how distinctions exist between forms of some personal pronouns but not others: <a href="http://po.st/WQpQnN">http://po.st/WQpQnN</a> via @po_st',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 09 10:22:43 +0000 2014",
    idStr: "520157402705199104",
    content:
      '[LGBT Staff Network] York LGBT Forum: meeting on 9 October: <a href="http://blog.yorksj.ac.uk/lgbt/2014/10/08/york-lgbt-forum-meeting-on-9-october/">http://blog.yorksj.ac.uk/lgbt/2014/10/08/york-lgbt-forum-meeting-on-9-october/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 09 09:10:05 +0000 2014",
    idStr: "520139123533705218",
    content:
      "'Sfumato' - nice word: <a href=\"http://www.oxforddictionaries.com/definition/english/sfumato\">http://www.oxforddictionaries.com/definition/english/sfumato</a> via @OxfordWords",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 21:43:55 +0000 2014",
    idStr: "519604057711734784",
    content:
      "... post-#greensurge. A few thoughts. Overall a highly motivational and inspirational talk, with a brilliant Q&amp;A session [@natalieben talk]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 21:42:28 +0000 2014",
    idStr: "519603689669943298",
    content:
      "... race. An issue @ShahrarAli highlighted in his election campaign, and one I hope progress can be made on... [@natalieben talk]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 21:40:33 +0000 2014",
    idStr: "519603211242438656",
    content:
      "... not only needs addressing in governmental bodies, but also internally in @TheGreenParty with characteristics like... [@natalieben talk]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 21:39:15 +0000 2014",
    idStr: "519602880827777026",
    content:
      "... However measures should be put in place to ensure governing bodies are representative and not homogenous. This...  [@natalieben talk]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 21:37:07 +0000 2014",
    idStr: "519602343088623616",
    content:
      "... in that gender is spectral, so such a principle would miss out those who identify neither as men nor women... [@natalieben talk]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 21:35:21 +0000 2014",
    idStr: "519601898530144256",
    content:
      "... gender equality in representation in the form of dictating at least as many women as there are men is problematic... [@natalieben talk]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 21:31:33 +0000 2014",
    idStr: "519600942895755265",
    content:
      "... I'd like to see the abolition of animal farming (though that's not likely to be popular!). [3/3] the concept of... [@natalieben talk]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 21:30:22 +0000 2014",
    idStr: "519600648182972416",
    content:
      "... hour, though it may be easier for people to relate to existing systems. [2/3] instead of tackling factory farming... [@natalieben talk]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 21:28:19 +0000 2014",
    idStr: "519600131188867073",
    content:
      "Enjoyed the @natalieben talk tonight. A few thoughts... [1/3] I'd say basic (or citizen's) income should take precedence over £10 per...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 17:12:43 +0000 2014",
    idStr: "519535807003377664",
    content:
      ".@natalieben about to speak at @UniOfYork for @UoYGreenParty/@YorkGreens event.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 07 08:31:08 +0000 2014",
    idStr: "519404545059741696",
    content:
      '"[S]haring and collaboration are two important aspects of learning" in \'Why I waffle...\' by @iwilsonysj: <a href="http://wilsonwaffling.co.uk/why-i-waffle/">http://wilsonwaffling.co.uk/why-i-waffle/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 06 19:25:41 +0000 2014",
    idStr: "519206881383157760",
    content: "So, 61 pages on syntax to read tonight...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 06 17:57:10 +0000 2014",
    idStr: "519184605631741952",
    content:
      "Brilliant article by @DavidDCain about the failure of the traditional values of being a 'man': <a href=\"http://www.independent.co.uk/life-style/health-and-families/features/dear-young-men-the-old-stereotypes-of-what-it-is-to-be-a-man-are-a-load-of-rubbish-9775874.html\">http://www.independent.co.uk/life-style/health-and-families/features/dear-young-men-the-old-stereotypes-of-what-it-is-to-be-a-man-are-a-load-of-rubbish-9775874.html</a> #agendafeminista",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 06 11:03:13 +0000 2014",
    idStr: "519080431912640514",
    content:
      '[LGBT Staff Network] Beneath the rainbow lanyard: <a href="http://wp.me/p4uHbe-el">http://wp.me/p4uHbe-el</a> (by @iwilsonysj)',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 05 21:47:24 +0000 2014",
    idStr: "518880157957115905",
    content: "... depressing, chilling; love it.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 05 19:17:14 +0000 2014",
    idStr: "518842367907213312",
    content: "So, second film of the week at @CityScreenYork: Ida.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 05 17:00:44 +0000 2014",
    idStr: "518808017362362369",
    content:
      "[@yorklgbthistory] 'No Barnfield in Banned Books Week: avoiding censorship in early modern England': <a href=\"http://wp.me/p4LXYh-5N\">http://wp.me/p4LXYh-5N</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 05 14:01:53 +0000 2014",
    idStr: "518763006118084608",
    content: "A belated Eid Mubarak to Muslim friends.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 04 23:01:58 +0000 2014",
    idStr: "518536533310464000",
    content: "Feels weird to be back in class again next week at @UniOfYork.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 03 17:21:03 +0000 2014",
    idStr: "518088351854129153",
    content:
      "Meeting with @MeiWilshire for an update on @HLGBT_York's contribution to @yorklgbthistory 2015.",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Oct 03 14:37:54 +0000 2014",
    idStr: "518047294655307777",
    content:
      "Interesting to (superficially aesthetically) consider diversity looking at @LeedsMusic's 'OUR PEOPLE' page: <a href=\"http://www.lcm.ac.uk/why-leeds-college-of-music/People\">http://www.lcm.ac.uk/why-leeds-college-of-music/People</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 03 09:19:57 +0000 2014",
    idStr: "517967281318416384",
    content:
      '[LGBT Staff Network] Update: LGBT Staff Network birthday party; two public lectures: <a href="http://wp.me/p4uHbe-f0">http://wp.me/p4uHbe-f0</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 03 07:00:22 +0000 2014",
    idStr: "517932150717288449",
    content:
      "PRESS RELEASE (@yorklgbthistory): 'Plans underway for city-wide LGBT History Month campaign': <a href=\"http://wp.me/p4LXYh-5H\">http://wp.me/p4LXYh-5H</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 02 20:55:18 +0000 2014",
    idStr: "517779884417228800",
    content:
      "So @YorkStJohn work done, @YorkPride meeting done, dinner eaten and still time for a little bit of @yorklgbthistory work!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 02 17:50:48 +0000 2014",
    idStr: "517733450775023616",
    content:
      "Oh my god! There's a World Vegan Day! Awesome excuse to push the ethical agenda.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 01 23:14:47 +0000 2014",
    idStr: "517452596794372097",
    content:
      'Pull ups. Impressed, @YSJActive? <div class="gallery"><ul><li><a href="../../tweets_media/517452596794372097-By5cYt_IgAAUfdO.jpg"><img src="../../tweets_media/517452596794372097-By5cYt_IgAAUfdO.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 01 12:08:28 +0000 2014",
    idStr: "517284910605025280",
    content:
      "Lilting is a really good, underrated, understated film with often really natural- and authentic-feeling interactions. Well worth a watch.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Sep 29 10:52:25 +0000 2014",
    idStr: "516540999410413568",
    content:
      "@GSAYork Correction: Wentworth Edge busy for the @GSAYork jazz night.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Sep 28 19:37:38 +0000 2014",
    idStr: "516310786533515264",
    content:
      "Great to see @GSAYork busy (at capacity!) For the welcome week jazz night.",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Sep 26 01:25:52 +0000 2014",
    idStr: "515311259286536192",
    content: "Can we disband the armed forces already?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 26 01:25:29 +0000 2014",
    idStr: "515311159982178304",
    content:
      "Aspirations/perfect world: vegan; free food/drink, probably monilessness; identities/characteristics not barriers/limiting factors.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 25 19:24:19 +0000 2014",
    idStr: "515220269510955008",
    content: "This place is positively brimming with queers, @BridgewaterHall.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 25 12:42:34 +0000 2014",
    idStr: "515119166790316032",
    content: "Page one, page two, page four. Not missing anything.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 24 14:58:43 +0000 2014",
    idStr: "514791042801868800",
    content:
      '[LGBT Staff Network] An international perspective: <a href="http://wp.me/p4uHbe-ea">http://wp.me/p4uHbe-ea</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 24 09:57:54 +0000 2014",
    idStr: "514715340165894144",
    content: "I miss @MOBFrance.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 23 17:36:43 +0000 2014",
    idStr: "514468416867291136",
    content:
      "Repping @ysjulgbtstaff/@YorkStJohn and maybe @yorklgbthistory and @YorkPride at a @stonewalluk/@DWF_Law speed networking event tonight.",
    favouriteCount: "4",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Sep 23 12:22:31 +0000 2014",
    idStr: "514389345189761024",
    content: "@LGBTSU @LGBTysj ... and @YUSU_LGBTQ.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 23 12:22:04 +0000 2014",
    idStr: "514389234204299264",
    content:
      '.@LGBTSU\'s website (Weebly) is really awesome: <a href="http://lgbtsu.weebly.com/">http://lgbtsu.weebly.com/</a>. @LGBTysj, you might be interested.',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Sep 23 10:05:53 +0000 2014",
    idStr: "514354958708539392",
    content: "Nice new website, @YSJSU. Looking smart.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 22 11:38:32 +0000 2014",
    idStr: "514015888161255426",
    content:
      '[LGBT Staff Network] Update: Gay By Degree result; joint cinema trip; potential social at Monroe\'s: <a href="http://wp.me/p4uHbe-dK">http://wp.me/p4uHbe-dK</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Sep 22 10:43:45 +0000 2014",
    idStr: "514002103493087233",
    content:
      'Article in @yorkpress on @YorkStJohn\'s @stonewalluk Gay By Degree recognition: <a href="http://www.yorkpress.co.uk/education/news/11484340.York_St_John_University__is____gay_friendly___/">http://www.yorkpress.co.uk/education/news/11484340.York_St_John_University__is____gay_friendly___/</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Sep 21 22:42:06 +0000 2014",
    idStr: "513820494018400256",
    content: "Fabulous @BARCODEZEBRA1 gig at @fulfordarmsyork!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 21 17:00:35 +0000 2014",
    idStr: "513734546462736384",
    content:
      'Greg Stephenson (@greg2802) of @YorkPride on the 2014 @yorklgbthistory campaign: <a href="http://wp.me/p4LXYh-5y">http://wp.me/p4LXYh-5y</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 21 15:49:24 +0000 2014",
    idStr: "513716632913727490",
    content:
      "Holy cow. Insane reworking of @Outkast's 'Da Art of Storytellin'' with @GBguitar's 'Give Me The Night' by @GummySoul: <a href=\"http://vimeo.com/104573213\">http://vimeo.com/104573213</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 21 10:38:19 +0000 2014",
    idStr: "513638345445216256",
    content:
      "Just realised yesterday was my fifth anniversary of moving to York.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 20 22:51:34 +0000 2014",
    idStr: "513460486487429120",
    content:
      "Wish I could make sweet potato wedges from @axiomaticalice's recipe, but lack of ingredients means I have to settle for umami potato fries.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 20 21:31:41 +0000 2014",
    idStr: "513440383951335424",
    content:
      'Tappity: <a href="https://soundcloud.com/yndajas/140920b">https://soundcloud.com/yndajas/140920b</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Sep 20 19:45:12 +0000 2014",
    idStr: "513413586216321024",
    content:
      "This is cool. Photos of female 'masculinity' or butchness by @megallenstudio: <a href=\"http://everydayfeminism.com/2014/09/butch-looks-like/\">http://everydayfeminism.com/2014/09/butch-looks-like/</a> via @axiomaticalice",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 20 17:10:36 +0000 2014",
    idStr: "513374681030991872",
    content:
      "Nice choice, @questlove… and I caught that fist pump. @theroots and Stevie Wonder performing 'All Day Sucker': <a href=\"http://www.hulu.com/watch/689468\">http://www.hulu.com/watch/689468</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 20 16:24:48 +0000 2014",
    idStr: "513363155712761857",
    content:
      "@jem_face @alibakesblog @oneandother (Views my own, but our Gay By Degree page does acknowledge and near enough clarify this.)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 20 15:40:08 +0000 2014",
    idStr: "513351912813772800",
    content:
      'Nice piece on @YorkStJohn\'s  @stonewalluk Gay By Degree success by alumnus @alibakesblog/@oneandother: <a href="http://www.oneandother.com/news/666-york-st-john-recognised-as-one-of-the-uk-s-most-gay-friendly-universities">http://www.oneandother.com/news/666-york-st-john-recognised-as-one-of-the-uk-s-most-gay-friendly-universities</a> @ysjequality',
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Sep 18 23:25:19 +0000 2014",
    idStr: "512744205920133120",
    content: "Sleep is quite useful, you know.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 18 21:44:25 +0000 2014",
    idStr: "512718814081851393",
    content:
      'Whatever happened to the Kidd (@kiddulthood)? Genuine talent: \'Vince Kidd | "You and Me" - [Live Performance]: SBTV\' <a href="http://youtu.be/n_ewte95oSs">http://youtu.be/n_ewte95oSs</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 18 19:06:18 +0000 2014",
    idStr: "512679023223128064",
    content:
      ".@xOperaAmyx on @BBCYork talking about @YorkStJohn's success in @stonewalluk's Gay By Degree and inclusivity: <a href=\"http://www.bbc.co.uk/programmes/p0262sc4\">http://www.bbc.co.uk/programmes/p0262sc4</a>",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Sep 18 17:55:36 +0000 2014",
    idStr: "512661231203676160",
    content:
      "Enjoyed my third (or fourth?) International Welcome Reception at @YorkStJohn, networking and eating good food! Great speech by @YSJSU_Laura!",
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Sep 17 21:37:34 +0000 2014",
    idStr: "512354702260850690",
    content:
      "@FionaThompson16 ... a particular point in that circuit, and what put it there?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 17 21:06:32 +0000 2014",
    idStr: "512346892743618560",
    content:
      ".@FionaThompson16 Anything is possible but a beginning, but nothing is possible without a beginning!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 17 21:03:15 +0000 2014",
    idStr: "512346065123557376",
    content:
      "@FionaThompson16 ... by abstracting it rather randomly! But I'm not a physicist either, so this is just speculation of speculation!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 17 21:02:16 +0000 2014",
    idStr: "512345815549882368",
    content:
      "@FionaThompson16 ... the timelessness concept doesn't really hold up, and that it might be a case of trying to explain the unexplainable...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 17 21:01:17 +0000 2014",
    idStr: "512345571399434240",
    content:
      "@FionaThompson16 ... and I don't think I can be convinced that things can just exist without a beginning/bringing into being. I feel like...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 17 14:17:56 +0000 2014",
    idStr: "512244063853355008",
    content:
      'So we (@YorkStJohn) are one of six universities with top marks for LGB friendliness in @stonewalluk\'s Gay By Degree: <a href="http://www.theguardian.com/education/2014/sep/17/six-uk-universities-get-top-marks-for-gay-friendliness">http://www.theguardian.com/education/2014/sep/17/six-uk-universities-get-top-marks-for-gay-friendliness</a>',
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Sep 17 11:44:52 +0000 2014",
    idStr: "512205541821927424",
    content: "I think I just tried to scroll a physical page with my finger.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 17 11:39:40 +0000 2014",
    idStr: "512204233828220928",
    content:
      "Really impressed by the @LGBTysj stall at @YorkStJohn/@YSJSU freshers' fair! Looks fantastic!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 17 11:16:58 +0000 2014",
    idStr: "512198520883773440",
    content:
      '[LGBT Staff Network] Update: Stonewall survey; Campus North; new pages: <a href="http://wp.me/p4uHbe-d9">http://wp.me/p4uHbe-d9</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Sep 16 22:42:57 +0000 2014",
    idStr: "512008767450255360",
    content:
      'Excellent piece by @GreenBenali on why pride should be free: <a href="http://www.pinknews.co.uk/2014/09/16/comment-we-shouldnt-be-priced-out-of-pride/">http://www.pinknews.co.uk/2014/09/16/comment-we-shouldnt-be-priced-out-of-pride/</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Sep 16 12:02:14 +0000 2014",
    idStr: "511847525771673600",
    content:
      "Great to see rainbow lanyards - symbolising inclusivity - across campus as we welcome new students to @YorkStJohn! @YSJSU @ysjequality",
    favouriteCount: "4",
    retweetCount: "4",
  },
  {
    createdAt: "Tue Sep 16 11:50:36 +0000 2014",
    idStr: "511844596305772544",
    content:
      "@FionaThompson16 ... but how was it triggered? And what created the singularity before the bang?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 16 11:48:48 +0000 2014",
    idStr: "511844144017604609",
    content:
      "@FionaThompson16 ... and still doesn't really explain how the big bang happened. It says that the laws of physics were broken down by it...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 16 00:05:22 +0000 2014",
    idStr: "511667119441059840",
    content: "[6/6] a satisfactory answer!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 16 00:04:50 +0000 2014",
    idStr: "511666986490019840",
    content:
      "[5/?] concept of a timeless pre-universe (?) just brings about another question: what brought that into being? I don't think there can be...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 16 00:04:14 +0000 2014",
    idStr: "511666836761743360",
    content:
      "[4/?] progression in time. So if there is no time, how can there be a change in state? Regardless of whether it's valid or not, the...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 16 00:03:09 +0000 2014",
    idStr: "511666562659782656",
    content:
      "[3/?] In order for a bang to occur there must be a change in state from no bang to bang, and that change in state surely must constitute...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 16 00:02:39 +0000 2014",
    idStr: "511666436327370752",
    content:
      "[2/?] from one state to another and to move from one state to another necessitates a before and an after/a past and a present, i.e. time...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 16 00:01:55 +0000 2014",
    idStr: "511666252126097408",
    content:
      "[1/?] I'm sceptical of the idea that the big bang created time. Surely time is essentially a prerequisite for change: change is moving...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 16 00:00:47 +0000 2014",
    idStr: "511665968842813441",
    content:
      ".@FionaThompson16 So further to our conversation about origin theory earlier, here's a few further thoughts...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 14 17:04:24 +0000 2014",
    idStr: "511198794877124608",
    content:
      'Matt Harper on the 2014 @yorklgbthistory campaign: <a href="http://wp.me/p4LXYh-56">http://wp.me/p4LXYh-56</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 13 18:56:09 +0000 2014",
    idStr: "510864527483994112",
    content: "Wish I knew of @gillespeterson before now.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 13 18:54:39 +0000 2014",
    idStr: "510864148545404929",
    content:
      'Great @DJYodaUK (plus: @rootsmanuva; Kid Creole and the Coconuts) track and @tomson video. Sounds like @reggiewatts: <a href="https://www.youtube.com/watch?v=TMc07BZWBvE">https://www.youtube.com/watch?v=TMc07BZWBvE</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 13 18:45:55 +0000 2014",
    idStr: "510861954593062912",
    content:
      "This is wonderful (Caetano Veloso's 'Billie Jean'): <a href=\"https://www.youtube.com/watch?v=xPOqE7k56nc\">https://www.youtube.com/watch?v=xPOqE7k56nc</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 13 16:39:41 +0000 2014",
    idStr: "510830185156214784",
    content:
      "I like to riff off the rhythm of climbing stairs. Each step is a beat.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 13 12:33:41 +0000 2014",
    idStr: "510768278407766016",
    content:
      "Fundamental difference between rap and song the respective roots in rhythm and melody? @RapGeniusUK @RapGenius @okayplayer @questlove",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 12 19:33:06 +0000 2014",
    idStr: "510511438902087680",
    content:
      'Incredibly misleading and simply incorrect headline about @YorkGreens in @yorkpress: <a href="http://www.yorkpress.co.uk/news/11468944.display/">http://www.yorkpress.co.uk/news/11468944.display/</a>. We have offered nothing.',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Sep 12 19:05:39 +0000 2014",
    idStr: "510504528765267968",
    content:
      "Welcome to Twitter, @axiomaticalice (finally)! What a fantastic name!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 26 11:36:43 +0000 2021",
    idStr: "1419622706295758850",
    content:
      "🧐<br><br>I guess, technically, if you read the Bible in a language without pronouns, you might be able to remove the 'alt' from this (Republican) fact... <a href=\"https://twitter.com/lavern_spicer/status/1418873481245122561\">https://twitter.com/lavern_spicer/status/1418873481245122561</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 23 02:50:40 +0000 2021",
    idStr: "1418403157659373572",
    content:
      'Over 1000... #PokemonUNITE #NintendoSwitch<br><br>Image description: Pokémon UNITE score, with a victory of 1005 to 177 <div class="gallery"><ul><li><a href="../../tweets_media/1418403157659373572-E68uJ7DUYAMSt2Y.jpg"><img src="../../tweets_media/1418403157659373572-E68uJ7DUYAMSt2Y.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Jul 15 16:09:02 +0000 2021",
    idStr: "1415704972495409157",
    content:
      "The paucity of penicillin on the peninsula posed a peculiar predicament",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 12 12:33:34 +0000 2014",
    idStr: "510405861123301376",
    content:
      "... and putting measures in place to reduce the use of abbreviations.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 12 12:32:28 +0000 2014",
    idStr: "510405584689319937",
    content:
      "I should have included in my @YorkGreens candidate ballot statement that I would focus on outlawing non-predefined acronyms and initialisms.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 12 12:11:44 +0000 2014",
    idStr: "510400363846193152",
    content:
      "Someone randomly complimented my shoes as we walked past each other at @UniOfYork just now!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 12 10:12:29 +0000 2014",
    idStr: "510370356906168320",
    content:
      'Good to see @GSAYork swag in the @PARLAYConf delegate pack! #PARLAY2014 <div class="gallery"><ul><li><a href="../../tweets_media/510370356906168320-BxUzIAyCMAEEIEG.jpg"><img src="../../tweets_media/510370356906168320-BxUzIAyCMAEEIEG.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 23:54:42 +0000 2014",
    idStr: "510214884672671745",
    content: "Loving the new @TUoSLGBT logo!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 19:54:57 +0000 2014",
    idStr: "510154550083608577",
    content:
      "... ah that flipboard sheet @david3012 used was from @YSJSU resident support assistant (?) training.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 19:07:07 +0000 2014",
    idStr: "510142513701978113",
    content:
      "... for ideas about how you can support people at @YorkLGBT meeting (@david3012).",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 19:05:29 +0000 2014",
    idStr: "510142099124396033",
    content:
      ".@david3012 making use of leftover flipboard sheet of ideas from by @YSJSU sports and societies conference or welcome helpers (?) training..",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:56:13 +0000 2014",
    idStr: "510139770660737025",
    content:
      ".@YorkLGBT can;<br>[4] Fight mental health stigma within the LGBT community.<br>[5] Talk openly about mental health.<br>[6] Be visible.<br>(@david3012)",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:54:33 +0000 2014",
    idStr: "510139349661675521",
    content:
      ".@YorkLGBT can:<br>[1] Keep it on the agenda.<br>[2] Know who can help.<br>[3] Influence Health and Wellbeing Board.<br>(@david3012)<br>...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:52:46 +0000 2014",
    idStr: "510138900665622528",
    content: ".@david3012 highlights what @YorkLGBT can do...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:50:43 +0000 2014",
    idStr: "510138382836834304",
    content: "So I just set a reminder for 17 September 2015 #forwardthinking",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:49:15 +0000 2014",
    idStr: "510138015348690944",
    content:
      "[3] Train staff on the specific mental health needs if LGB people (@david3012).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:48:42 +0000 2014",
    idStr: "510137878547267584",
    content:
      "[2] Work alongside schools and other education organisations to focus on early intervention and tackle homophobic bullying (@david3012).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:47:14 +0000 2014",
    idStr: "510137509314318336",
    content:
      "[1] Identify patients who are LGB and take proactive steps to enable them to receive the best possible care (@david3012).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:46:28 +0000 2014",
    idStr: "510137315390685184",
    content: ".@david3012 highlights what services can do...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:39:33 +0000 2014",
    idStr: "510135572950949888",
    content:
      "As would be expected, bullying positively correlates and support negatively correlates with depression and attempted suicide (@david3012).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:36:20 +0000 2014",
    idStr: "510134766411468800",
    content:
      "Likelihood of attempting suicide correlates with the number of minority groups an individual belongs to, says @david3012 (via @stonewalluk).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:34:47 +0000 2014",
    idStr: "510134374676058112",
    content:
      "Young lesbian and bisexual women more likely to suffer from depression than young gay and bisexual men, says @david3012 (via @stonewalluk).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:33:26 +0000 2014",
    idStr: "510134033632997377",
    content:
      "Depression worse when being a lesbian or bisexual woman intersects with being black, says @david3012 (via @stonewalluk) at @YorkLGBT.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 18:31:17 +0000 2014",
    idStr: "510133494123855872",
    content:
      "Listening to @david3012 giving a talk on LGBT mental health at tonight's @YorkLGBT meeting. Currently referencing a @stonewalluk report.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 11 16:51:53 +0000 2014",
    idStr: "510108479642558465",
    content:
      '[LGBT Staff Network] York LGBT Forum: meeting on 11 September: <a href="http://wp.me/p4uHbe-dl">http://wp.me/p4uHbe-dl</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 10 22:28:13 +0000 2014",
    idStr: "509830733859651584",
    content:
      "Thanks for the article for @yorklgbthistory, @AnathemaJane; loved it!",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Sep 10 22:05:54 +0000 2014",
    idStr: "509825115467427840",
    content:
      'AJ McKenna (@AnathemaJane) on Tamikka Brents and the power of poetry (@yorklgbthistory): <a href="http://wp.me/p4LXYh-5n">http://wp.me/p4LXYh-5n</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 10 19:26:37 +0000 2014",
    idStr: "509785032723275776",
    content:
      "So @The_JamesJordan thinks two people of the same sex shouldn't dance together, and that a show shouldn't be hosted by two women. Sad.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 09 21:35:39 +0000 2014",
    idStr: "509455115468951552",
    content: "So I'm preparing a candidate ballot statement.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 07 17:04:13 +0000 2014",
    idStr: "508662030404841472",
    content:
      'Margaret Milburn on the 2014 @yorklgbthistory campaign: <a href="http://wp.me/p4LXYh-4W">http://wp.me/p4LXYh-4W</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 07 11:42:53 +0000 2014",
    idStr: "508581167009128448",
    content:
      "Overestimated the time it would take to get somewhere so accidentally on time.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 07 11:40:45 +0000 2014",
    idStr: "508580627135074304",
    content:
      "So all the cool cats will be hanging at @CityScreenYork for @PrideMovieUK at 14:00.",
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Sep 07 11:30:08 +0000 2014",
    idStr: "508577956391038977",
    content: "No, the biscuit is the breakfast, not the key.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 06 18:53:25 +0000 2014",
    idStr: "508327125158731776",
    content:
      "Housewarming party eight minutes ago. Should probably get up and stuff.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 06 11:21:20 +0000 2014",
    idStr: "508213356189458432",
    content:
      "I would love to hear the sounds of wild (as in, not emanating from a human-made device) water used as the backdrop to a hip hop album.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 06 02:12:14 +0000 2014",
    idStr: "508075169638670336",
    content:
      "Interesting: 'Why Life Does Not Really Exist' | Brainwaves, Scientific American Blog Network <a href=\"http://blogs.scientificamerican.com/brainwaves/2013/12/02/why-life-does-not-really-exist/\">http://blogs.scientificamerican.com/brainwaves/2013/12/02/why-life-does-not-really-exist/</a> via @sciam",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 23:29:03 +0000 2014",
    idStr: "508034103216967680",
    content:
      "Therefore the concept of existence is entirely illogical and impossible.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 23:28:35 +0000 2014",
    idStr: "508033986841837569",
    content:
      "What created the bang? If something created the bang, then it wasn't the beginning. Something cannot be created by nothing.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 23:26:40 +0000 2014",
    idStr: "508033502542311425",
    content:
      "Its infinite. How did the first component come about without something there to make it? The big bang theory is entirely insufficient.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 23:25:58 +0000 2014",
    idStr: "508033327983755264",
    content:
      "… in order to make something, you must first have its components. But in order to have its components, you must first have their components.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 23:24:19 +0000 2014",
    idStr: "508032909673267200",
    content:
      "/I believe that life is an illusion. Though how the illusion of existence in the absence of real existence exists, I don't know.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 23:23:04 +0000 2014",
    idStr: "508032598531403776",
    content: "So I don't really believe in the existence of anything.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 20:57:33 +0000 2014",
    idStr: "507995976314146816",
    content: "So I'm listening to some South Korean hip hop. K-hop?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 19:54:28 +0000 2014",
    idStr: "507980099484807168",
    content: "#keepingbusy #sleepdeprivation",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 19:50:28 +0000 2014",
    idStr: "507979092596387840",
    content:
      "… and then there's the obligatory making of an appearance for @PrideMovieUK at @CityScreenYork on Sunday, followed by some birthday drinks.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 19:48:40 +0000 2014",
    idStr: "507978640898785280",
    content:
      "… also, in the midst of drafting a constitution and applying for a bank account for @yorklgbthistory.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 05 19:47:46 +0000 2014",
    idStr: "507978415983845376",
    content:
      "Much to read ahead of my first @GSAYork Trustee Board meeting on Monday.",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Sep 05 19:30:23 +0000 2014",
    idStr: "507974042096107521",
    content:
      "'Turning red: A change of hue has helped [@TheGreenParty] win support' <a href=\"http://www.independent.co.uk/voices/editorials/turning-red-a-change-of-hue-has-helped-the-green-party-win-support-9710056.html\">http://www.independent.co.uk/voices/editorials/turning-red-a-change-of-hue-has-helped-the-green-party-win-support-9710056.html</a> via @Independent",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 03 16:23:38 +0000 2014",
    idStr: "507202265795407873",
    content:
      '[LGBT Staff Network] Update: networking; performances; call for articles: <a href="http://wp.me/p4uHbe-cw">http://wp.me/p4uHbe-cw</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 02 21:25:11 +0000 2014",
    idStr: "506915768383307776",
    content:
      "Congratulations to @ShahrarAli and @Amelia_Womack on their election as Deputy Leaders of @TheGreenParty!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 01 13:19:04 +0000 2014",
    idStr: "506431041645850625",
    content:
      'Very thoughtful piece on the Ice Bucket Challenge by @M4ttTh0mps0n <a href="http://savageminds.org/2014/08/27/is-the-als-ice-bucket-challenge-about-structural-inequality/">http://savageminds.org/2014/08/27/is-the-als-ice-bucket-challenge-about-structural-inequality/</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Aug 31 17:03:51 +0000 2014",
    idStr: "506125225889509376",
    content:
      'Sue Lister on the 2014 @yorklgbthistory campaign: <a href="http://wp.me/p4LXYh-44">http://wp.me/p4LXYh-44</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 31 15:59:49 +0000 2014",
    idStr: "506109110907990016",
    content:
      'Gorgeous song: ‘03 03[1]. 별이 빛나는 밤에 Feat. Mad Clown, 강선아’ by mad_clown <a href="https://soundcloud.com/mad_clown/03-03-1-feat-mad-clown-1">https://soundcloud.com/mad_clown/03-03-1-feat-mad-clown-1</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 30 13:14:51 +0000 2014",
    idStr: "505705207788240896",
    content:
      '15% off at @redbubble with code GET15. Buy my stuff? <a href="http://www.redbubble.com/people/yndajas">http://www.redbubble.com/people/yndajas</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 28 12:01:24 +0000 2014",
    idStr: "504961947386003456",
    content:
      'New adjective. <div class="gallery"><ul><li><a href="../../tweets_media/504961947386003456-BwH8M5JIQAAu-Bm.jpg"><img src="../../tweets_media/504961947386003456-BwH8M5JIQAAu-Bm.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 27 13:11:09 +0000 2014",
    idStr: "504617111096791040",
    content:
      "Fascinating and enlightening thoughts on change by @NishmaDoshi: 'Decolonising change: a theory of knowledge' <a href=\"http://www.nishmadoshi.net/2014/decolonising-change-a-theory-of-knowledge/\">http://www.nishmadoshi.net/2014/decolonising-change-a-theory-of-knowledge/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 26 19:34:43 +0000 2014",
    idStr: "504351252130844672",
    content:
      '#makingmymindup #gpex14 <div class="gallery"><ul><li><a href="../../tweets_media/504351252130844672-Bv_QxZeCAAAo4nz.jpg"><img src="../../tweets_media/504351252130844672-Bv_QxZeCAAAo4nz.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 26 09:27:37 +0000 2014",
    idStr: "504198468982689792",
    content:
      'Tribute to Lynn Jeffries (@LynnJeffries2) by York Independent Living Network (@YILN2), their Founding Director: <a href="http://wp.me/p13o7N-5L">http://wp.me/p13o7N-5L</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Aug 25 21:36:08 +0000 2014",
    idStr: "504019418394152960",
    content:
      'What to do to @yorklgbthistory:<br>- like (<a href="https://www.facebook.com/yorklgbthistory">https://www.facebook.com/yorklgbthistory</a>);<br>- follow (<a href="https://www.twitter.com/yorklgbthistory">https://www.twitter.com/yorklgbthistory</a>);<br>- check out (<a href="http://yorklgbthistory.org.uk">http://yorklgbthistory.org.uk</a>).',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Aug 25 19:33:45 +0000 2014",
    idStr: "503988618927804416",
    content:
      "Uh oh. Apparently, when registering for the @3SwansSportive, we'll be asked to 'sign on'.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 25 19:25:59 +0000 2014",
    idStr: "503986665049059329",
    content:
      'I\'m riding 30 miles on Sunday as part of the @3SwansSportive to raise money for @yorkshirecancer.<br>Donations welcome: <a href="https://www.justgiving.com/yndajas-sts/">https://www.justgiving.com/yndajas-sts/</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 24 20:54:02 +0000 2014",
    idStr: "503646438409371648",
    content:
      ".@giffgaff have 'members', not 'customers', and tell you if they think you should pay them less. ¡Muy bien!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 24 13:34:50 +0000 2014",
    idStr: "503535907904176128",
    content:
      'Nice, @PamelaDAnderson snubbed ice bucket challenge due to animal experiments: <a href="http://www.independent.co.uk/news/people/pamela-anderson-rejects-ice-bucket-challenge-because-of-als-experiments-on-animals-mice-had-holes-drilled-into-their-skulls-9685445.html">http://www.independent.co.uk/news/people/pamela-anderson-rejects-ice-bucket-challenge-because-of-als-experiments-on-animals-mice-had-holes-drilled-into-their-skulls-9685445.html</a>. Must look at <a href="http://humaneseal.org">http://humaneseal.org</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 24 11:03:47 +0000 2014",
    idStr: "503497896847634432",
    content:
      'Article by @kitheyam: \'"Ping! Gay people!" – or, why we need more LGBT history in schools\': <a href="http://wp.me/p4LXYh-4L">http://wp.me/p4LXYh-4L</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 22 17:03:40 +0000 2014",
    idStr: "502863686285795328",
    content:
      'An evening with Sarah Waters via @yorklgbthistory: <a href="http://wp.me/p4LXYh-4R">http://wp.me/p4LXYh-4R</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 21 16:08:18 +0000 2014",
    idStr: "502487367622877185",
    content: "We should move to writing time/dates like 14.08.21.17.05.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 21 13:25:06 +0000 2014",
    idStr: "502446296490192896",
    content:
      "Oh dear. (Also click on the link within the article for another oh dear.) 'Meet the experts! They're all men': <a href=\"http://i100.io/exDVFAe\">http://i100.io/exDVFAe</a>",
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Aug 21 07:03:49 +0000 2014",
    idStr: "502350340738404352",
    content:
      'Maddie Boden on the 2014 @yorklgbthistory campaign: <a href="http://wp.me/p4LXYh-3U">http://wp.me/p4LXYh-3U</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 18 18:57:17 +0000 2014",
    idStr: "501442726467231744",
    content:
      "No @Beyonce, let's not kill the farmer, that would be a bad idea #misheardlyrics",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Aug 18 15:15:56 +0000 2014",
    idStr: "501387024201691136",
    content:
      'New webpage offering support for LGBT students at @YorkStJohn: <a href="http://www.yorksj.ac.uk/student-services/student-services/further-support/lgbt-students.aspx">http://www.yorksj.ac.uk/student-services/student-services/further-support/lgbt-students.aspx</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Aug 18 11:45:54 +0000 2014",
    idStr: "501334165300592641",
    content:
      '[LGBT Staff Network] Update: author talk; York LGBT Forum vacancy; EU grant: <a href="http://wp.me/p4uHbe-c6">http://wp.me/p4uHbe-c6</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 18 00:07:54 +0000 2014",
    idStr: "501158508969357312",
    content:
      "That's enough work on the @yorklgbthistory for today (yesterday?); time to catch not enough sleep.",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Aug 17 19:58:52 +0000 2014",
    idStr: "501095839235051523",
    content:
      "I'd love to see a collaboration between @GeorgeThePoet and @ETHEREALSTORY.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 17 01:07:10 +0000 2014",
    idStr: "500811038909284352",
    content: "Seriously incredible dancer: @ETHEREALSTORY.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 16 22:25:07 +0000 2014",
    idStr: "500770257817321474",
    content:
      "Persuaded to take a rest from @yorklgbthistory work for Reason Breeds Monsters' brilliant farewell gig with @JuneTranmer and Dave Taylor.",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Aug 16 16:20:16 +0000 2014",
    idStr: "500678437959651328",
    content:
      "Time for @YorkGreens canvassing near Fishergate Bar. Will the weather hold out?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 16 13:31:22 +0000 2014",
    idStr: "500635933864390657",
    content:
      '@fionathompson16 Oh, I remember. Slightly different… but similar vocals (i.e. falsetto) in parts: <a href="https://www.youtube.com/watch?v=nNTyfVh3nmU">https://www.youtube.com/watch?v=nNTyfVh3nmU</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 16 13:19:47 +0000 2014",
    idStr: "500633017799692290",
    content: "@fionathompson16 … maybe I just know some of his songs.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 16 13:09:10 +0000 2014",
    idStr: "500630345872859136",
    content: "Africa is closer to mainland Europe than the United Kingdom.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 15 19:34:31 +0000 2014",
    idStr: "500364935743176706",
    content:
      'How I organise my life. <div class="gallery"><ul><li><a href="../../tweets_media/500364935743176706-BvGnQgIIQAAQah7.jpg"><img src="../../tweets_media/500364935743176706-BvGnQgIIQAAQah7.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 15 15:04:40 +0000 2014",
    idStr: "500297023103700992",
    content:
      'Just added the new @YorkLLit Twitter account to the LGBT York page: <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Aug 13 20:47:40 +0000 2014",
    idStr: "499658569873383424",
    content:
      'Just set up a Facebook page for @yorklgbthistory; check it out: <a href="https://www.facebook.com/yorklgbthistory">https://www.facebook.com/yorklgbthistory</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Aug 13 17:29:38 +0000 2014",
    idStr: "499608732385705984",
    content:
      "Fellow @YorkStJohn alumni, why did you choose the university? #ysjbecause",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Aug 13 16:48:02 +0000 2014",
    idStr: "499598262207524864",
    content:
      "I picked @YorkStJohn because of the wonderfully welcoming and warm community atmosphere and the beautiful city centre campus #ysjbecause",
    favouriteCount: "2",
    retweetCount: "3",
  },
  {
    createdAt: "Sun Jul 11 22:30:15 +0000 2021",
    idStr: "1414351357897809921",
    content:
      'I also had pizza tonight 🇮🇹 <a href="https://twitter.com/shaun_vids/status/1414342931507564546">https://twitter.com/shaun_vids/status/1414342931507564546</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 11 21:58:25 +0000 2021",
    idStr: "1414343345221120011",
    content: "Forza Italia!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 12 14:11:03 +0000 2014",
    idStr: "499196369907634176",
    content:
      '[LGBT Staff Network] Update: AGM and constitution; guidance for managers and more: <a href="http://wp.me/p4uHbe-bB">http://wp.me/p4uHbe-bB</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 11 21:26:33 +0000 2014",
    idStr: "498943578349907968",
    content:
      "Beautiful production, 'Panic Struck' by @SOMHIERO (Souls of Mischief): <a href=\"https://soundcloud.com/linearlabs/souls-of-mischief-panic\">https://soundcloud.com/linearlabs/souls-of-mischief-panic</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 11 09:08:16 +0000 2014",
    idStr: "498757784666529792",
    content:
      '[LGBT Staff Network] York LGBT Forum: July/August newsletter; meeting on 14 August: <a href="http://wp.me/p4uHbe-bH">http://wp.me/p4uHbe-bH</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 10 21:29:01 +0000 2014",
    idStr: "498581810402840577",
    content: "Check out @MisunderstoodAM; promising new hip hop act.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Aug 10 15:52:48 +0000 2014",
    idStr: "498497199479603202",
    content:
      "This is what 'string' music should sound like, @CHARGAUX's 'The Lone Ranger': <a href=\"http://vimeo.com/79121570\">http://vimeo.com/79121570</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 09 12:01:14 +0000 2014",
    idStr: "498076536520859648",
    content:
      'Compare:<br>1. Vladimir Putin: <a href="http://www.nytimes.com/2012/08/28/world/europe/for-russia-president-vladimir-putin-report-says-perks-are-piling-up.html">http://www.nytimes.com/2012/08/28/world/europe/for-russia-president-vladimir-putin-report-says-perks-are-piling-up.html</a><br>2. José Mujica: <a href="http://www.nytimes.com/2013/01/05/world/americas/after-years-in-solitary-an-austere-life-as-uruguays-president.html">http://www.nytimes.com/2013/01/05/world/americas/after-years-in-solitary-an-austere-life-as-uruguays-president.html</a><br>via @nytimes',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 08 12:56:22 +0000 2014",
    idStr: "497728021437349888",
    content:
      '@iwilsonysj @danielmackley ... <a href="https://www.google.com/url?q=http://www.yorksj.ac.uk/human-resources/hr/policies-and-procedures/c/cycle-scheme-web-site.aspx&sa=U&ei=fcjkU-z3HKis0QWCiYC4Bw&ved=0CAYQFjAB&client=internal-uds-cse&usg=AFQjCNGLZUJQBwPRk-2xewlRa86gud7iQQ">https://www.google.com/url?q=http://www.yorksj.ac.uk/human-resources/hr/policies-and-procedures/c/cycle-scheme-web-site.aspx&sa=U&ei=fcjkU-z3HKis0QWCiYC4Bw&ved=0CAYQFjAB&client=internal-uds-cse&usg=AFQjCNGLZUJQBwPRk-2xewlRa86gud7iQQ</a> and <a href="http://www.yorksj.ac.uk/human-resources/hr/working-at-ysj/pay--benefits.aspx">http://www.yorksj.ac.uk/human-resources/hr/working-at-ysj/pay--benefits.aspx</a>.',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 08 12:35:34 +0000 2014",
    idStr: "497722788053266432",
    content:
      "@danielmackley @PhilVincent ... to see if any others want to join, so hopefully we can find another four to make two teams!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 07 13:48:22 +0000 2014",
    idStr: "497378719968006144",
    content: "Üps E. Dézí.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 06 21:44:39 +0000 2014",
    idStr: "497136194577526786",
    content:
      'New @YorkGreens newsletters for Guildhall and Fishergate wards available at <a href="http://york.greenparty.org.uk/newsletters.html">http://york.greenparty.org.uk/newsletters.html</a>',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Aug 06 08:38:31 +0000 2014",
    idStr: "496938355574059008",
    content:
      'Petition to review educational policy and address why only 85 out of nearly 20,000 professors are black: <a href="http://www.change.org/en-GB/petitions/vince-cable-mp-review-educational-policy-and-address-why-there-are-just-85-black-professors-out-of-nearly-20-000">http://www.change.org/en-GB/petitions/vince-cable-mp-review-educational-policy-and-address-why-there-are-just-85-black-professors-out-of-nearly-20-000</a> via @Sha14u',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 05 22:29:26 +0000 2014",
    idStr: "496785075229319168",
    content:
      'Please help support @TheGreenParty\'s 2015 General Election campaign, add a #Twibbon now! <a href="http://twb.ly/1pGCOCz">http://twb.ly/1pGCOCz</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 05 12:50:33 +0000 2014",
    idStr: "496639395769106432",
    content:
      'Have your say on how @stonewalluk supports the trans community going forward: <a href="http://www.stonewall.org.uk/what_we_do/9710.asp">http://www.stonewall.org.uk/what_we_do/9710.asp</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 05 12:43:57 +0000 2014",
    idStr: "496637735558332416",
    content:
      '[LGBT Staff Network] Campus North March 2014: <a href="http://wp.me/p4uHbe-az">http://wp.me/p4uHbe-az</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 03 13:46:08 +0000 2014",
    idStr: "495928605566726144",
    content:
      'What’s going on in Palestine is wrong, but it’s not the only wrong: <a href="http://huff.to/1rSOeWj">http://huff.to/1rSOeWj</a> via @aliamjadrizvi',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 03 02:52:15 +0000 2014",
    idStr: "495764051264565248",
    content:
      "\"We don't do this shit for gay people. We don't do this shit for straight people. We do this for the whole world.\" @Outkast #LollaLive",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 03 01:54:31 +0000 2014",
    idStr: "495749524254887936",
    content:
      "Watching the #LollaLive stream of @Outkast. First tour in years, twenty years since the debut album, and they're still the best. #OutKast",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 02 15:27:08 +0000 2014",
    idStr: "495591635355320322",
    content:
      "Reworking of the 'Arthur' theme song by Chance The Rapper, Wyclef and Jessie Ware: <a href=\"http://www.okayplayer.com/news/chance-the-rapper-wyclef-jessie-ware-arthur-theme-song-mp3.html\">http://www.okayplayer.com/news/chance-the-rapper-wyclef-jessie-ware-arthur-theme-song-mp3.html</a> via @okayplayer",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 01 16:12:43 +0000 2014",
    idStr: "495240721893695491",
    content:
      'Mmm, homemade vegan pizza. <div class="gallery"><ul><li><a href="../../tweets_media/495240721893695491-Bt9yz4mIIAEQyza.jpg"><img src="../../tweets_media/495240721893695491-Bt9yz4mIIAEQyza.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Jul 31 21:18:23 +0000 2014",
    idStr: "494955256229666817",
    content:
      'My birthday present from @TheGreenParty: Green Party Executive ballot papers. <div class="gallery"><ul><li><a href="../../tweets_media/494955256229666817-Bt5vJ9iIQAAD7gd.jpg"><img src="../../tweets_media/494955256229666817-Bt5vJ9iIQAAD7gd.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 31 11:22:46 +0000 2014",
    idStr: "494805362042601473",
    content:
      'Fantastic track/performance by @LiamBailey: \'Okay Acoustic: Liam Bailey "On My Mind"\': <a href="http://youtu.be/E9wke2zS4HI">http://youtu.be/E9wke2zS4HI</a> via @okayplayer',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 31 06:33:28 +0000 2014",
    idStr: "494732559990128640",
    content:
      'Excellent articulation of how misguided and ill-thought-out the Women Against Feminism campaign is by @SpannerX23: <a href="http://iwantedwings.wordpress.com/2014/07/21/a-response-to-women-against-feminism/">http://iwantedwings.wordpress.com/2014/07/21/a-response-to-women-against-feminism/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 29 22:00:40 +0000 2014",
    idStr: "494241120717897729",
    content: "[3/3] Is the genius of J Dilla.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 29 22:00:18 +0000 2014",
    idStr: "494241029646983168",
    content:
      '[2/3] To the first minute of this: <a href="https://www.youtube.com/watch?v=NHohAy7c_SQ">https://www.youtube.com/watch?v=NHohAy7c_SQ</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 29 21:59:14 +0000 2014",
    idStr: "494240761698070528",
    content:
      '[1/3] This: <a href="https://www.youtube.com/watch?v=HPRKa5o1Orc">https://www.youtube.com/watch?v=HPRKa5o1Orc</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 29 21:14:54 +0000 2014",
    idStr: "494229605159821312",
    content:
      'The wonderful @CarolineLucas, MP for Brighton Pavilion, providing a message of support for @PrideBrighton <a href="https://www.youtube.com/watch?v=KvxYFiFKBZU">https://www.youtube.com/watch?v=KvxYFiFKBZU</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 28 16:32:14 +0000 2014",
    idStr: "493796080233222147",
    content:
      '[LGBT Staff Network] Stonewall Education for All 2014: <a href="http://blog.yorksj.ac.uk/lgbt/2014/07/28/stonewall-education-for-all-2014/">http://blog.yorksj.ac.uk/lgbt/2014/07/28/stonewall-education-for-all-2014/</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Jul 28 16:22:05 +0000 2014",
    idStr: "493793524547342336",
    content:
      '@AliRowan @lopwert New link: <a href="http://blog.yorksj.ac.uk/lgbt/2014/07/28/stonewall-education-for-all-2014/">http://blog.yorksj.ac.uk/lgbt/2014/07/28/stonewall-education-for-all-2014/</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 28 15:54:18 +0000 2014",
    idStr: "493786534118961152",
    content: "Eid Mubarak to Muslim friends and others!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 28 10:30:23 +0000 2014",
    idStr: "493705017569083392",
    content:
      "Congratulations to @ruth_hunt on dropping the 'Acting' from her title! I can see @stonewalluk having a bright future with her at the helm.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 25 22:44:15 +0000 2014",
    idStr: "492802537842425856",
    content:
      'Preach: \'Best response ever to being told "You look like the kind of girl who can swallow."\' (via @Upworthy) <a href="http://www.upworthy.com/this-girl-got-asked-if-she-could-deep-throat-her-response-got-her-a-standing-ovation?g=3&c=evf1">http://www.upworthy.com/this-girl-got-asked-if-she-could-deep-throat-her-response-got-her-a-standing-ovation?g=3&c=evf1</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 25 20:44:47 +0000 2014",
    idStr: "492772471943495680",
    content:
      "For Greens and the Green-curious: <a href=\"http://www.highexistence.com/10-reasons-why-earthships-are-fing-awesome/\">http://www.highexistence.com/10-reasons-why-earthships-are-fing-awesome/</a> Despite the name 'Earthships' this is for real. See @earthship_HQ.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 25 20:15:08 +0000 2014",
    idStr: "492765013388832769",
    content:
      '... the final design of the (gender-neutral toilet) signs: <a href="http://photos.prnewswire.com/prnvar/20140723/129966?max=400">http://photos.prnewswire.com/prnvar/20140723/129966?max=400</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jul 25 19:59:42 +0000 2014",
    idStr: "492761126677934080",
    content:
      'Gender-neutral sign in mass-production and donated to colleges in the USA: <a href="http://itspronouncedmetrosexual.com/2014/07/how-the-gender-neutral-bathroom-sign-i-made-is-being-manufactured-and-donated-to-colleges/">http://itspronouncedmetrosexual.com/2014/07/how-the-gender-neutral-bathroom-sign-i-made-is-being-manufactured-and-donated-to-colleges/</a> via @ActuallyMetro',
    favouriteCount: "2",
    retweetCount: "5",
  },
  {
    createdAt: "Thu Jul 24 11:09:23 +0000 2014",
    idStr: "492265280211795969",
    content:
      "Loving the new @BARCODEZEBRA1 EP 'Another Day'. Get it, and its predecessor on iTunes or via their website! @JessGardham @charlesdaykin",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Jul 23 13:37:02 +0000 2014",
    idStr: "491940049123307521",
    content:
      "@hayleyparker99 @stonewalluk Took me a few seconds to get it! You should do an abbreviation competition on Twitter - guess the motto!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 23 13:36:33 +0000 2014",
    idStr: "491939928138596353",
    content:
      "Just looking at your presentation @hayleyparker99, and impressed by the abbreviation PPBWTCBT for one of @stonewalluk's mottos!",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Jul 23 12:35:07 +0000 2014",
    idStr: "491924467116154880",
    content:
      "There are now two serving trans parliamentarians in Europe, both of which belong to their respective green parties @europeangreens.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 23 11:05:39 +0000 2014",
    idStr: "491901955644882945",
    content:
      'Presentations of the data from the same piece of research: <a href="http://www.theguardian.com/news/datablog/2014/jul/23/white-british-more-likely-university-offers-ethnicities-uk">http://www.theguardian.com/news/datablog/2014/jul/23/white-british-more-likely-university-offers-ethnicities-uk</a> via @ECUClaireH',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 23 11:03:51 +0000 2014",
    idStr: "491901500671942658",
    content:
      '.@BTEGJeremy suggests nameless @ucas_online application process to tackle "unconscious racial bias": <a href="http://www.theguardian.com/education/2014/jul/23/ethnic-minority-students-fewer-university-offers-research-shows">http://www.theguardian.com/education/2014/jul/23/ethnic-minority-students-fewer-university-offers-research-shows</a> via @ECUClaireH',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Jul 23 08:31:13 +0000 2014",
    idStr: "491863090393518080",
    content:
      "Recently I've been feeling like emails are missing a like/favourite-type function.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 21 22:31:18 +0000 2014",
    idStr: "491349725808168961",
    content: "Woohoo, the majority of thirty reminders dealt with!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 20 12:14:25 +0000 2014",
    idStr: "490832096827826176",
    content:
      "Shocking, or maybe not, how deeply rooted abuse is/was in society: 'The damage boarding schools do | Alex Renton' <a href=\"http://gu.com/p/4v2d8/tw\">http://gu.com/p/4v2d8/tw</a>",
    favouriteCount: "3",
    retweetCount: "6",
  },
  {
    createdAt: "Sat Jul 19 22:22:42 +0000 2014",
    idStr: "490622785925156864",
    content:
      "If two people swapped brains, would their memories and personalities transpose too?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 19 22:19:20 +0000 2014",
    idStr: "490621939023892480",
    content:
      "If you had a brain transplant, would you adopt the memory and personality of the donor? Is your brain the real you and the rest structure?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 19 12:26:08 +0000 2014",
    idStr: "490472658299940864",
    content:
      'Please help support @TheGreenParty\'s 2015 General Election campaign, add a #Twibbon now! <a href="http://twb.ly/1pGCOCz">http://twb.ly/1pGCOCz</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 19 00:05:12 +0000 2014",
    idStr: "490286194979131392",
    content:
      "Nice track by @Tyler_Mae_ and video by @allthecoops: 'Tyler Mae - Pound Cake (Black Friday Freestyle)' <a href=\"http://youtu.be/-9GPm_P9E0s\">http://youtu.be/-9GPm_P9E0s</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 22:04:17 +0000 2014",
    idStr: "490255766000254977",
    content:
      "Some great points by all candidates, but I think I'm with @ShahrarAli and @Amelia_Womack #gpex14",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 22:03:15 +0000 2014",
    idStr: "490255506460909568",
    content:
      ".@PurpleGreenRob argues people are starting to get that we need an alternative, and that @TheGreenParty has it #gpex14",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jul 18 21:54:00 +0000 2014",
    idStr: "490253178085339136",
    content:
      ".@ShahrarAli points out the only non-white face in @TheGreenParty's magazine is in an advert for Amazonian investment; disappointing #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:48:53 +0000 2014",
    idStr: "490251889096024064",
    content:
      "Citizens' income should certainly be pushed, @WillDuckworthGP. Fantastic concept #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:45:27 +0000 2014",
    idStr: "490251026508042241",
    content:
      "Access to higher education an important issue, @markereiraguyer #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:44:00 +0000 2014",
    idStr: "490250659955232769",
    content:
      "Promoting NHS and job policies could certainly generate support, @Amelia_Womack #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:38:37 +0000 2014",
    idStr: "490249305270546432",
    content:
      "Equality, economy and environment as three key themes going into the election. Can't disagree with that, @ShahrarAli #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:31:03 +0000 2014",
    idStr: "490247399374610432",
    content:
      "Just don't be out off by disinterest - persevere and you'll find and generate support. Also, take action on issues people raise! #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:29:49 +0000 2014",
    idStr: "490247090325696513",
    content:
      "Talking to people via door-to-door knocking and other means is certainly fruitful, @ShahrarAli @PurpleGreenRob #gpex14 [1/2]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:24:28 +0000 2014",
    idStr: "490245745178869760",
    content:
      ".@Amelia_Womack realises that the BBC is not the primary route into the younger generations; celebrity is perhaps a better channel #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:20:50 +0000 2014",
    idStr: "490244828815708160",
    content:
      "Addressing inequalities elsewhere in the world is very important - it's not all about us @markereiraguyer #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:15:23 +0000 2014",
    idStr: "490243460394672128",
    content:
      "Yes, @TheGreenParty must stand for people being given equal respect regardless of where they were born, @ShahrarAli #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:12:47 +0000 2014",
    idStr: "490242805630255104",
    content:
      "Absolutely, @Amelia_Womack, we need to show we aren't a narrow single-issue party #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 21:10:29 +0000 2014",
    idStr: "490242224530411520",
    content:
      "Pushing one or two key messages instead of a broad range, @WillDuckworthGP @PurpleGreenRob, didn't really work for UKIP or Lib Dems #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 20:51:01 +0000 2014",
    idStr: "490237325537214467",
    content:
      "Personally, I'd argue people shouldn't earn twice what their colleagues earn, and probably no discrepancy at all #gpex14 [2/2]",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 20:49:31 +0000 2014",
    idStr: "490236950201499648",
    content:
      ".@TheGreenParty believes people shouldn't earn more than ten times their colleagues. Absolutely, @WillDuckworthGP #gpex14 [1/2]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 20:34:21 +0000 2014",
    idStr: "490233130390142976",
    content:
      ".@josiahmortimer of @YorkGreens getting in their first with the questions! #gpex14",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 19:59:44 +0000 2014",
    idStr: "490224422847279104",
    content:
      "Volunteer coordinator roles in every region, good idea @PurpleGreenRob #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 19:49:36 +0000 2014",
    idStr: "490221871787683840",
    content:
      "Agree that engaging the young and the 'working class' in politics and voting is important @markereiraguyer #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 19:42:20 +0000 2014",
    idStr: "490220040269357056",
    content:
      "I think part of what isolates younger generations from politics is the formal, business-like nature of mainstream politicians [2/2] #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 19:40:58 +0000 2014",
    idStr: "490219699792543744",
    content:
      "Keeping the language of politics simple is important @Amelia_Womack #gpex14 [1/2]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 19:37:15 +0000 2014",
    idStr: "490218763611299840",
    content:
      "Certainly need to work on diversity on the party @ShahrarAli #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 18 19:34:53 +0000 2014",
    idStr: "490218169106444290",
    content: "Time to watch the @TheGreenParty Deputy Leader hustings #gpex14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 17 21:17:39 +0000 2014",
    idStr: "489881642845356032",
    content:
      'Fancy a party that makes conscious effort to tackle sexism and objectification of women in the media? <a href="https://twitter.com/teamcaroline_1/status/489749173579677701">https://twitter.com/teamcaroline_1/status/489749173579677701</a> @TheGreenParty',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 17 11:15:13 +0000 2014",
    idStr: "489730035780444160",
    content:
      "@j_m_peters79 I do like Mx as a title, although personally I prefer to omit titles altogether.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 17 11:13:07 +0000 2014",
    idStr: "489729503783292929",
    content:
      "@j_m_peters79 But they don't need to be used without prejudice - there's a context in which they are appropriate.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 17 11:11:59 +0000 2014",
    idStr: "489729218272440320",
    content:
      "@j_m_peters79 ... of them, where recognised gender-neutral words already exist, but in other cases, I think they offer up some options.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 17 10:32:14 +0000 2014",
    idStr: "489719218611712000",
    content:
      'Fantastic article on language, education, sexuality and inclusion (including LGB silencing) by @HelenSauntson: <a href="http://blog.yorksj.ac.uk/lgbt/2014/07/17/silence-needs-to-be-challenged-too/">http://blog.yorksj.ac.uk/lgbt/2014/07/17/silence-needs-to-be-challenged-too/</a>',
    favouriteCount: "2",
    retweetCount: "3",
  },
  {
    createdAt: "Thu Jul 17 09:40:56 +0000 2014",
    idStr: "489706307789000704",
    content:
      'Guide to gender-neutral words for family, partners and titles (mix of in-dictionary words and queer neologisms): <a href="http://genderqueeries.tumblr.com/titles">http://genderqueeries.tumblr.com/titles</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 15 19:34:36 +0000 2014",
    idStr: "489130933262761985",
    content:
      "@terrymadeley ... I like the web-based module and programme catalogue at your place by the way!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 15 17:17:51 +0000 2014",
    idStr: "489096515944996865",
    content:
      '"...voted against gay marriage. When she was made minister for women, they had to remove "and equalities" from the title" - oh #GoveOUT',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 15 17:08:44 +0000 2014",
    idStr: "489094224101793792",
    content:
      '"And what qualifies Morgan for the job, apart from being a woman? She\'s not Michael Gove" (@guardian) #GoveOUT',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 15 17:03:21 +0000 2014",
    idStr: "489092870776053760",
    content: "By(e) Gove, cause for celebration! (I hope.) #GoveOUT",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jul 15 16:52:46 +0000 2014",
    idStr: "489090207216861185",
    content:
      "Learning lots of new stuff/being overwhelmed by stuff I know nothing about! #sitsconf",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jul 15 16:52:17 +0000 2014",
    idStr: "489090085334548480",
    content:
      "Very interesting to hear about the possibilities for (and from) managing the entire approval process via SITS #sitsconf",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jul 15 16:50:02 +0000 2014",
    idStr: "489089516133957632",
    content:
      'The view again [3/3] #sitsconf <div class="gallery"><ul><li><a href="../../tweets_media/489089516133957632-BsmYTM2CYAACCsb.jpg"><img src="../../tweets_media/489089516133957632-BsmYTM2CYAACCsb.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 15 16:49:43 +0000 2014",
    idStr: "489089436656091136",
    content:
      'The view [2/3] #sitsconf <div class="gallery"><ul><li><a href="../../tweets_media/489089436656091136-BsmYNwCCEAAqMX4.jpg"><img src="../../tweets_media/489089436656091136-BsmYNwCCEAAqMX4.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 15 16:49:11 +0000 2014",
    idStr: "489089303608569856",
    content:
      'Not too shabby digs [1/3] #sitsconf <div class="gallery"><ul><li><a href="../../tweets_media/489089303608569856-BsmYG76CAAE-K7j.jpg"><img src="../../tweets_media/489089303608569856-BsmYG76CAAE-K7j.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 12 18:08:08 +0000 2014",
    idStr: "488022010212392960",
    content:
      "@david3012 ... which are only the ones I set to be reminded of today. Plenty more for other days and times!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 12 17:34:44 +0000 2014",
    idStr: "488013602256076800",
    content: "I overwhelm myself with reminders of things to do.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 11 16:37:11 +0000 2014",
    idStr: "487636733358792704",
    content: "When one goes to sleep tonight, one might next arise on Sunday.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 11 16:34:04 +0000 2014",
    idStr: "487635946897436672",
    content: "Happiness is to require no stimulus; to need for nothing.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 11 10:34:03 +0000 2014",
    idStr: "487545345602105344",
    content:
      '[LGBT Staff Network] York Pride 2014: video and photos: <a href="http://wp.me/p4uHbe-a1">http://wp.me/p4uHbe-a1</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 08 09:58:57 +0000 2014",
    idStr: "486449351481630720",
    content:
      "@PhilVincent @insanefountain @Greganor @danielmackley Just recounted and it ended 535.8-463 miles!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 07 16:53:38 +0000 2014",
    idStr: "486191320147701760",
    content:
      "It's the @YorkPride AGM tonight. Interested in helping next year, or just want your voice heard? Come along, 19:30 at @ThomassofYork!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 07 13:41:40 +0000 2014",
    idStr: "486143010783371265",
    content:
      "Unless there are any unlogged rides, Registry has beaten ADD 475.8 miles to 455! @PhilVincent @danielmackley @Greganor @insanefountain",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 06 23:02:44 +0000 2014",
    idStr: "485921818587713536",
    content:
      "[2/2] We need to stop being competitive, tribal beings, and start being truly global citizens.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 06 23:02:26 +0000 2014",
    idStr: "485921742527815682",
    content:
      "[1/2] Very important messages here, albeit occasionally flawed: 'Which country does the most good for the world?' <a href=\"http://www.ted.com/talks/simon_anholt_which_country_does_the_most_good_for_the_world\">http://www.ted.com/talks/simon_anholt_which_country_does_the_most_good_for_the_world</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 06 21:46:13 +0000 2014",
    idStr: "485902563582033920",
    content:
      '\'The Notoroius B.I.G. - "Sky\'s The Limit"\': <a href="http://youtu.be/d3vOeCkeCNA">http://youtu.be/d3vOeCkeCNA</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 06 09:47:43 +0000 2014",
    idStr: "485721745295675392",
    content:
      "The biggest barrier to positive change is fervent and stubborn nonsensicality.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 05 14:00:47 +0000 2014",
    idStr: "485423043922362368",
    content:
      "The mainstream card industry is such a nasty mire of gender-stereotype reinforcement.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 05 13:32:35 +0000 2014",
    idStr: "485415949135527937",
    content:
      "... at least the mania is about the thing itself and not arbitrary tribalistic geographic support #letour #letouryorkshire #LeTourdeFrance",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 05 13:15:34 +0000 2014",
    idStr: "485411664742084608",
    content: "Don't get the hype #letour #letouryorkshire #LeTourdeFrance",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 04 14:47:54 +0000 2014",
    idStr: "485072515312930816",
    content:
      '.@AliceHoylePSHE @stonewalluk Rainbow lanyards - much more aesthetically pleasing than standard ones! #edforall <div class="gallery"><ul><li><a href="../../tweets_media/485072515312930816-BrtS1iVCAAEmacG.jpg"><img src="../../tweets_media/485072515312930816-BrtS1iVCAAEmacG.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 04 13:17:39 +0000 2014",
    idStr: "485049802997379072",
    content:
      ".@Luceopolis talking about the importance of addressing silencing of LGBT people; celebration and not just reaction to bullying #edforall",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jul 04 11:15:49 +0000 2014",
    idStr: "485019142169567232",
    content:
      '"Possible for get outcomes even if initial [resource] input is small" - Paul Daintry @stonewalluk #edforall',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 04 10:18:26 +0000 2014",
    idStr: "485004700467859456",
    content:
      "Now for a session on ''using 'gay' the right way': tackling homophobic language' @stonewalluk #edforall",
    favouriteCount: "2",
    retweetCount: "4",
  },
  {
    createdAt: "Fri Jul 04 09:55:00 +0000 2014",
    idStr: "484998803452604417",
    content:
      '... go to <a href="http://stonewall.org.uk/trans">http://stonewall.org.uk/trans</a> to feed in to the open consultation on @stonewalluk\'s role in supporting trans people #edforall',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jul 04 09:53:25 +0000 2014",
    idStr: "484998405719355392",
    content:
      ".@stonewalluk currently holding an open consultation on their role in supporting the trans community, with a round table in August #edforall",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jul 04 09:44:41 +0000 2014",
    idStr: "484996207497191424",
    content:
      "The wise Camila Batmanghelidjh (@KidsCompanyUK) talking of the importance of robust intervention to prevent cyclical bullying #edforall",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jul 04 09:34:43 +0000 2014",
    idStr: "484993699961921537",
    content:
      "\"If you thought you were a lesbian, you don't need to sleep with a man to prove it\" - @ruth_hunt's English teacher @stonewalluk #edforall",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 04 09:15:09 +0000 2014",
    idStr: "484988775131774976",
    content:
      "\"No such thing as 'boy's activities' or 'girl's activities'\" - @LukeTryl @stonewalluk #edforall",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 04 09:04:02 +0000 2014",
    idStr: "484985977824632833",
    content:
      "At the @stonewalluk #edforall conference on behalf of @YorkStJohn. Spotted a couple of familiar faces @hayleyparker99 @feekelife.",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jul 04 05:26:50 +0000 2014",
    idStr: "484931317906538496",
    content:
      "Just about managed to (naturally) wake up in time to catch the train to London for the @stonewalluk #edforall conference.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 01 17:50:31 +0000 2014",
    idStr: "484031306691780608",
    content:
      'Why equality work must go on despite legal inequalities becoming lesser and lesser. Things don\'t change on their own: <a href="http://youtu.be/IfesuLQLnzw">http://youtu.be/IfesuLQLnzw</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jul 01 08:29:01 +0000 2014",
    idStr: "483890000694878208",
    content:
      'Registry trailing ADD (@PhilVincent @danielmackley) 347-292.8 miles (@L2RYork). @Greganor @insanefountain, any help? <a href="https://www.lovetoride.net/york/companies/3701?a=1&locale=en-GB">https://www.lovetoride.net/york/companies/3701?a=1&locale=en-GB</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 29 22:36:05 +0000 2014",
    idStr: "483378398635380736",
    content:
      "So good. @akuanaru's 'Take A Ride' live (featuring @MosDefOfficial's 'Mathematics' sample of Fat Joe's 'John Blaze'): <a href=\"http://youtu.be/8rhBIsokxM8\">http://youtu.be/8rhBIsokxM8</a>",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Jun 29 19:39:54 +0000 2014",
    idStr: "483334061604483072",
    content:
      'Vegan meal for one... <div class="gallery"><ul><li><a href="../../tweets_media/483334061604483072-BrUlvBLCUAAk956.jpg"><img src="../../tweets_media/483334061604483072-BrUlvBLCUAAk956.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 28 22:04:55 +0000 2014",
    idStr: "483008165676867584",
    content:
      'Second charity bike ride. Cycling 30 miles to raise funds for @yorkshirecancer. Donations welcome: <a href="http://www.justgiving.com/yndajas-STS/">http://www.justgiving.com/yndajas-STS/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 27 15:09:45 +0000 2014",
    idStr: "482541299321425920",
    content:
      'A wonderfully frank @AngelHaze reflecting on the media\'s presentation of her relationship: <a href="http://www.independent.co.uk/news/people/angel-haze-on-ireland-baldwin-romance-an-interracial-gay-couple-i-mean-thats-just-weird-for-america-right-now-9566164.html">http://www.independent.co.uk/news/people/angel-haze-on-ireland-baldwin-romance-an-interracial-gay-couple-i-mean-thats-just-weird-for-america-right-now-9566164.html</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 27 12:15:19 +0000 2014",
    idStr: "482497401249595393",
    content: "New York LGBT History Month Twitter account: @yorklgbthistory.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 27 08:32:51 +0000 2014",
    idStr: "482441417407864833",
    content:
      'Registry dominating the top of the @L2RYork @YorkStJohn leaderboards. Where are you, @PhilVincent, @danielmackley? <a href="https://www.lovetoride.net/york/companies/3701?a=1&locale=en-GB">https://www.lovetoride.net/york/companies/3701?a=1&locale=en-GB</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 25 09:55:18 +0000 2014",
    idStr: "481737390260617216",
    content:
      '[LGBT Staff Network] Update: Staff Profile Volunteers Needed; LGBT Film and Discount Offer <a href="http://wp.me/s4uHbe-564">http://wp.me/s4uHbe-564</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 24 09:35:00 +0000 2014",
    idStr: "481369893804441602",
    content:
      "@PhilVincent Ah! Didn't read the previous tweet before! Hoping to do the Heart of York ride individually or as Registry there's interest.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 23 19:54:37 +0000 2014",
    idStr: "481163437494382594",
    content:
      "Mashed potato disaster! 'UPDATED - New pic - Instant mash spill blocks A64': <a href=\"http://www.yorkpress.co.uk/news/11293176.display/\">http://www.yorkpress.co.uk/news/11293176.display/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 22 20:47:14 +0000 2014",
    idStr: "480814288865480704",
    content:
      "'Clean Bandit - Rihanna (Live Session)': <a href=\"http://youtu.be/9tqV6g6vDoM\">http://youtu.be/9tqV6g6vDoM</a> via @cleanbandit",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 22 12:13:21 +0000 2014",
    idStr: "480684966716919808",
    content:
      "25km riden in under an hour at @YuCycle and £60 plus £15 from gift aid raised for the @UniOfYork Achieving Excellence Bursary Appeal.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 20 20:30:32 +0000 2014",
    idStr: "480085312656642048",
    content:
      'Scariest thing ever?<br><br><a href="http://telly.com/1LPNZ04">http://telly.com/1LPNZ04</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 20 18:01:21 +0000 2014",
    idStr: "480047768317472768",
    content:
      "Just heard some Multicultural London English in the underground @paulkerswill.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 20 17:33:35 +0000 2014",
    idStr: "480040780422463488",
    content:
      "First @YorkPride tomorrow since stepping down as Secretary; looking forward to it and repping @YorkStJohn and the LGBT Staff Network.",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Jun 20 11:34:27 +0000 2014",
    idStr: "479950400788115456",
    content:
      "Vegan food, hip hop and gender-neutral toilets; it doesn't get better than @MOBFrance!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 04 02:23:56 +0000 2021",
    idStr: "1411511061447069697",
    content:
      '🤦‍♀️ <a href="https://twitter.com/LouisPeitzman/status/1410978097990713344">https://twitter.com/LouisPeitzman/status/1410978097990713344</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 02 21:33:19 +0000 2021",
    idStr: "1411075539373285382",
    content:
      'Great thread. I wrote about toilet signs a few years ago here and in the @cctoilettalk zine: <a href="https://yndajas.co/articles/2017/03/29/toilet-worries-representing-gender-neutrality-transculturally">https://yndajas.co/articles/2017/03/29/toilet-worries-representing-gender-neutrality-transculturally</a> <a href="https://twitter.com/magmidd/status/1410909224490700801">https://twitter.com/magmidd/status/1410909224490700801</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Jun 26 23:12:22 +0000 2021",
    idStr: "1408926138794119169",
    content:
      'Old news but I was thinking about how... peculiar categorising Igor as a rap album is/was. But it\'s more than peculiar: <a href="https://twitter.com/Independent/status/1221751658159464449">https://twitter.com/Independent/status/1221751658159464449</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 26 10:45:19 +0000 2021",
    idStr: "1408738134624440327",
    content: "Are socks evidence of interdimensional travel?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 19 20:38:09 +0000 2014",
    idStr: "479724842401677312",
    content:
      "Luxembourg: le pays le plus libéral? 'Luxembourg passes equal marriage bill by 56-4 landslide' <a href=\"http://www.pinknews.co.uk/2014/06/18/luxembourg-passes-equal-marriage-bill-by-56-4-landslide/\">http://www.pinknews.co.uk/2014/06/18/luxembourg-passes-equal-marriage-bill-by-56-4-landslide/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 19 11:12:18 +0000 2014",
    idStr: "479582440345071616",
    content: "... it is fully vegan!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 18 21:34:43 +0000 2014",
    idStr: "479376690104532993",
    content: "@MeiWilshire May be able to make it now!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 18 19:13:03 +0000 2014",
    idStr: "479341037216100353",
    content:
      "Think I found heaven... hip hop-themed vegetarian (if only it was fully vegan) fast food joint: @MOBFrance.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 15 17:04:32 +0000 2014",
    idStr: "478221532767191040",
    content:
      'Selfies now have special gadgets... <div class="gallery"><ul><li><a href="../../tweets_media/478221532767191040-BqL78jXCQAA4v3q.jpg"><img src="../../tweets_media/478221532767191040-BqL78jXCQAA4v3q.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 15 15:36:43 +0000 2014",
    idStr: "478199430236340224",
    content:
      "Beautiful cityscape vector art and some quirky gifts at @artyglobe in Greenwich Market (and some wonderful jazz too).",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Jun 15 13:33:59 +0000 2014",
    idStr: "478168543851474944",
    content:
      'And stumbled across university number fourteen... <div class="gallery"><ul><li><a href="../../tweets_media/478168543851474944-BqLLwADIEAAHvQ-.jpg"><img src="../../tweets_media/478168543851474944-BqLLwADIEAAHvQ-.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 15 13:31:16 +0000 2014",
    idStr: "478167860859371521",
    content:
      'Having a bit of everything from @return2shasha at Greenwich Market. <div class="gallery"><ul><li><a href="../../tweets_media/478167860859371521-BqLLIjzIUAISfxx.jpg"><img src="../../tweets_media/478167860859371521-BqLLIjzIUAISfxx.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 14 21:48:44 +0000 2014",
    idStr: "477930663367409666",
    content:
      'Priorities... "@occupythemob: #Brazil have made their feelings clear regarding #WorldCup <div class="gallery"><ul><li><a href="../../tweets_media/477930663367409666-BqEcNP8CQAAv1_D.jpg"><img src="../../tweets_media/477930663367409666-BqEcNP8CQAAv1_D.jpg"></a></li></ul></div>"',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 14 21:38:45 +0000 2014",
    idStr: "477928152178888705",
    content:
      "Match countdown on BBC1... how sad... #ChillOut #DontCareWhoWins #Unpatriotic #NationlessWorld #OverpoliticisingTheWorldCup #WorldCup",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 14 11:31:00 +0000 2014",
    idStr: "477775208116649986",
    content:
      'Gorgeous vegan hot chocolate and soup at @CakesnTreatsUK, can\'t wait for a cupcake too <div class="gallery"><ul><li><a href="../../tweets_media/477775208116649986-BqFmBN3IMAAHkqm.jpg"><img src="../../tweets_media/477775208116649986-BqFmBN3IMAAHkqm.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 13 14:27:13 +0000 2014",
    idStr: "477457163217297408",
    content: "London is so queer.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 13 10:55:34 +0000 2014",
    idStr: "477403901671800832",
    content:
      "It would be interesting to study the prosody of conference papers, and quotes within them (and their markers).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 13 09:02:44 +0000 2014",
    idStr: "477375507663970304",
    content:
      "Second conference in a week, @NegativeRadical, and my first feminist one. University number twelve by my count.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 13 08:03:29 +0000 2014",
    idStr: "477360594186952704",
    content: "Another day, another university.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 12 22:03:27 +0000 2014",
    idStr: "477209592963670016",
    content:
      "Staying in a hotel reaffirms just how great it is to live without a television set and free from broadcast television.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 12 21:09:36 +0000 2014",
    idStr: "477196040949739520",
    content:
      "Covent Garden is surely one of the best spots for people-watching and reflection. Must have spent nearly an hour sat in one spot.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 12 10:59:01 +0000 2014",
    idStr: "477042382467510272",
    content:
      'Co-operative Bank/YouGov acknowledging those who don\'t identify with the binary gender system. <div class="gallery"><ul><li><a href="../../tweets_media/477042382467510272-Bp7Lgv6IcAAPyU5.jpg"><img src="../../tweets_media/477042382467510272-Bp7Lgv6IcAAPyU5.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 11 09:06:50 +0000 2014",
    idStr: "476651761499795457",
    content:
      '[LGBT Staff Network] York LGBT Forum: June Newsletter; Meeting on 12 June: <a href="http://wp.me/p4uHbe-8P">http://wp.me/p4uHbe-8P</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 10 19:15:37 +0000 2014",
    idStr: "476442577672364032",
    content:
      "Well done to all the award winners and nominees at the @YorkStJohn Celebrating Exceptional People awards. Proud to be a staff member!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 09 20:21:59 +0000 2014",
    idStr: "476096892019802113",
    content:
      "... and so is this: Electric Wire Hustle - 'Again': <a href=\"http://youtu.be/aDn_PW8gFbA\">http://youtu.be/aDn_PW8gFbA</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 09 20:16:44 +0000 2014",
    idStr: "476095571166363649",
    content:
      'Well... that is interesting: Bad Rabbits - "Doin\' It" (Official Music Video): <a href="http://youtu.be/wfxR0A32Ia0">http://youtu.be/wfxR0A32Ia0</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 09 08:39:52 +0000 2014",
    idStr: "475920199305023488",
    content:
      '[LGBT Staff Network] York Pride 2014: <a href="http://wp.me/p4uHbe-8E">http://wp.me/p4uHbe-8E</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 08 23:29:06 +0000 2014",
    idStr: "475781594813575169",
    content:
      "'21 Pointlessly Gendered Products': <a href=\"http://www.buzzfeed.com/erinchack/pointlessly-gendered-products\">http://www.buzzfeed.com/erinchack/pointlessly-gendered-products</a> via @ErinChack",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 08 19:06:21 +0000 2014",
    idStr: "475715470113669120",
    content:
      'Queen Badoula (@fatbellybella): <a href="https://www.youtube.com/watch?v=bx_RI28cWWQ">https://www.youtube.com/watch?v=bx_RI28cWWQ</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 07 07:03:49 +0000 2014",
    idStr: "475171252760756224",
    content: "So I'm a student trustee (from September) at @GSAYork.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 06 08:32:42 +0000 2014",
    idStr: "474831234003394560",
    content:
      "Don't forget to vote (if you haven't already) in the @yorkgsa elections: <a href=\"http://www.yorkgsa.org/\">http://www.yorkgsa.org/</a>. Closes today at 12:00.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 05 09:33:41 +0000 2014",
    idStr: "474484192081113088",
    content:
      "Check out the new HLGBT Performing Arts York Twitter account: @HLGBTA",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 02 08:44:38 +0000 2014",
    idStr: "473384684056240128",
    content:
      'Lots of buzz in York yesterday: <a href="https://www.flickr.com/photos/yndajas/14137026079/">https://www.flickr.com/photos/yndajas/14137026079/</a> @yorkpress @oneandother',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 02 08:42:49 +0000 2014",
    idStr: "473384227917291520",
    content:
      'Call for York filmmakers to make Shakespeare\'s sonnets: <a href="http://us1.campaign-archive2.com/?u=7b651d2aae5e30bdc4695ac8b&id=28a0a8ea3d&e=a3b7e99dba">http://us1.campaign-archive2.com/?u=7b651d2aae5e30bdc4695ac8b&id=28a0a8ea3d&e=a3b7e99dba</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 01 18:02:36 +0000 2014",
    idStr: "473162712659542016",
    content:
      'Raising money to support students at @UniOfYork from lower income families by riding 25km as part of @YuCycle 2014: <a href="http://www.justgiving.com/yndajas">http://www.justgiving.com/yndajas</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 30 21:37:41 +0000 2014",
    idStr: "472492065805582336",
    content:
      'Chimamanda Ngozi Adichie with @RyRyPB. <div class="gallery"><ul><li><a href="../../tweets_media/472492065805582336-Bo6hB1cIAAA3v7v.jpg"><img src="../../tweets_media/472492065805582336-Bo6hB1cIAAA3v7v.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 29 22:37:07 +0000 2014",
    idStr: "472144634714800128",
    content:
      'Running to be a student trustee at @yorkgsa.<br><br>See:<br> - official page: <a href="http://www.yorkgsa.org/site/representation">http://www.yorkgsa.org/site/representation</a><br> - @yorknouse article: <a href="http://www.nouse.co.uk/2014/05/28/gsa-election-candidates-announced/">http://www.nouse.co.uk/2014/05/28/gsa-election-candidates-announced/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 26 09:26:02 +0000 2014",
    idStr: "470858388549951488",
    content:
      "Shocking. Who are these people? Nearly three in every ten people (who voted)?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 25 14:14:55 +0000 2014",
    idStr: "470568699343028224",
    content:
      "'If Gay Guys Said the Shit Straight People Say...' <a href=\"http://youtu.be/0x805d-nwQI\">http://youtu.be/0x805d-nwQI</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 25 14:02:47 +0000 2014",
    idStr: "470565645944631296",
    content:
      "It's better to do something for someone than not do anything for anyone because you can't do everything for everyone.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 23 07:30:00 +0000 2014",
    idStr: "469742022333837312",
    content: "Genuinely feel sick. Who are these people?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 23 07:27:02 +0000 2014",
    idStr: "469741276733399040",
    content:
      "Oh. Looks like it's time to get active with @TheGreenParty @YorkGreens  again. #DestroyUKIP #LetsKickRacismOutOfTheUK",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 22 20:36:05 +0000 2014",
    idStr: "469577459823026177",
    content:
      'Spotted the Green Party strapline in a document I\'m reading for work! #VoteGreen @TheGreenParty @YorkGreens <div class="gallery"><ul><li><a href="../../tweets_media/469577459823026177-BoRGNdzCcAA-T1q.jpg"><img src="../../tweets_media/469577459823026177-BoRGNdzCcAA-T1q.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "3",
  },
  {
    createdAt: "Thu May 22 18:22:40 +0000 2014",
    idStr: "469543883618398209",
    content:
      'Time to vote smart (Green). #VoteGreen @TheGreenParty <div class="gallery"><ul><li><a href="../../tweets_media/469543883618398209-BoQnrE8IIAANj0s.jpg"><img src="../../tweets_media/469543883618398209-BoQnrE8IIAANj0s.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 21 17:24:16 +0000 2014",
    idStr: "469166800312471553",
    content:
      "Really enjoyed @stonewalluk's Role Models Programme! @ellis_cari @MadelineLasko @RyRyPB @xOperaAmyx @HelenSauntson @mattharper88 @WorldShax",
    favouriteCount: "3",
    retweetCount: "2",
  },
  {
    createdAt: "Tue May 20 21:37:19 +0000 2014",
    idStr: "468868094111535104",
    content:
      '"I discovered I was the first openly gay peer ever - and the youngest ever - when I was reading an article about me..." (Lord Alli)',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 20 19:58:29 +0000 2014",
    idStr: "468843223419748353",
    content:
      'Really shouldn\'t have bought this, but if @theroots @questlove release an album, what choice do you have? #ATYSYC <div class="gallery"><ul><li><a href="../../tweets_media/468843223419748353-BoGqbUCIIAEB8FB.jpg"><img src="../../tweets_media/468843223419748353-BoGqbUCIIAEB8FB.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 20 18:29:49 +0000 2014",
    idStr: "468820906438295552",
    content:
      'An enjoyable but majorly sanitised cover of D\'Angelo\'s classic: Adam Levine and Usher "Untitled (How Does It Feel)" <a href="http://youtu.be/tURromLRs6U">http://youtu.be/tURromLRs6U</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 20 18:15:19 +0000 2014",
    idStr: "468817257712594944",
    content:
      "What a phenomenal reflection: 'MAN' <a href=\"http://youtu.be/WfGMYdalClU\">http://youtu.be/WfGMYdalClU</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 20 07:30:26 +0000 2014",
    idStr: "468654969441492993",
    content:
      '[LGBT Staff Network] Update: LGBT Films; sexgen Seminar; Steering Group Minutes: <a href="http://wp.me/p4uHbe-6X">http://wp.me/p4uHbe-6X</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 19 18:16:27 +0000 2014",
    idStr: "468455158368976897",
    content:
      "Time to pay a surprise visit to somewhere I've not been in a while.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 19 11:37:49 +0000 2014",
    idStr: "468354837407473665",
    content:
      '[LGBT Staff Network] LGBT rights around the world: <a href="http://wp.me/p4uHbe-6C">http://wp.me/p4uHbe-6C</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 19 09:31:53 +0000 2014",
    idStr: "468323143925252096",
    content:
      "Fascinating, much work to do: 'Explore lesbian, gay, bisexual and transgender rights around the world' via @guardian <a href=\"http://www.theguardian.com/world/ng-interactive/2014/may/-sp-gay-rights-world-lesbian-bisexual-transgender\">http://www.theguardian.com/world/ng-interactive/2014/may/-sp-gay-rights-world-lesbian-bisexual-transgender</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 18 10:15:19 +0000 2014",
    idStr: "467971689293561856",
    content: "£6.50 to play tennis for an hour, hardly encouraging...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 16 16:23:55 +0000 2014",
    idStr: "467339671773933569",
    content:
      '<div class="gallery"><ul><li><a href="../../tweets_media/467339671773933569-BnxS9CFIEAELcdK.jpg"><img src="../../tweets_media/467339671773933569-BnxS9CFIEAELcdK.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 15 20:46:36 +0000 2014",
    idStr: "467043391562596352",
    content: "... and, of course, the best company @RyRyPB #Create14",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 15 20:45:52 +0000 2014",
    idStr: "467043206736392192",
    content:
      "#Create14 grand opening: fantastic work, speeches and event! @YSJArtsEvents @FionaThompson16 @alyson_tobin @Jordan_fisher92 @YorkStJohn",
    favouriteCount: "2",
    retweetCount: "3",
  },
  {
    createdAt: "Tue May 13 16:21:05 +0000 2014",
    idStr: "466251795858481152",
    content:
      'Woohoo! Record broken for number of visits in one day on the LGBT Staff Network blog: <a href="http://blog.yorksj.ac.uk/lgbt">http://blog.yorksj.ac.uk/lgbt</a> #sad',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 13 11:15:24 +0000 2014",
    idStr: "466174870124904448",
    content:
      'York St John University LGBT Staff Network: An Overview <a href="http://wp.me/p4uHbe-2n">http://wp.me/p4uHbe-2n</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue May 13 11:10:57 +0000 2014",
    idStr: "466173748216086528",
    content:
      'LGBT York: a guide to groups, organisations, venues and events <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a> @ysjequality @YorkStJohn @UniOfYork',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Tue May 13 11:10:20 +0000 2014",
    idStr: "466173594100563968",
    content:
      'LGBT York: a guide to groups, organisations, venues and events <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a> @YorkVision @BBCYork @BBCYorkshire',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 13 11:10:00 +0000 2014",
    idStr: "466173510768136192",
    content:
      'LGBT York: a guide to groups, organisations, venues and events <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a> @yorkpress @oneandother @yorknouse @theyorkeruk',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 13 11:08:13 +0000 2014",
    idStr: "466173059536523264",
    content:
      'LGBT York: a guide to groups, organisations, venues and events <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a> @stephenfry @AlanCarr @grahnort',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 13 11:07:33 +0000 2014",
    idStr: "466172895237267456",
    content:
      'LGBT York: a guide to groups, organisations, venues and events <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a> @GayTimesMag @hayleyparker99 @PeterTatchell',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 13 11:07:10 +0000 2014",
    idStr: "466172795429609473",
    content:
      'LGBT York: a guide to groups, organisations, venues and events <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a> @stonewalluk @pinknews @Pink_Paper @AttitudeMag',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 13 11:06:46 +0000 2014",
    idStr: "466172697517776896",
    content:
      'LGBT York: a guide to groups, organisations, venues and events <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a> @YUSU_LGBTQ @YSJSU @yorkunisu @YSJSU_VPWD @YSJSU_VPE',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 13 11:06:15 +0000 2014",
    idStr: "466172566189899776",
    content:
      'LGBT York: a guide to groups, organisations, venues and events <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a> @YorkPride @yorkshiremesmac @YorkLGBTQSoc @YSJLGBT',
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Tue May 13 11:05:34 +0000 2014",
    idStr: "466172393007091712",
    content:
      'LGBT York: a guide to groups, organisations, venues and events <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a> @MonroesCabaret @Proud_York @QueerDucks @YorkLGBT',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue May 13 11:02:46 +0000 2014",
    idStr: "466171690926764032",
    content:
      'LGBT York: a guide to groups, organisations, venues and events <a href="http://blog.yorksj.ac.uk/lgbt/lgbt-york/">http://blog.yorksj.ac.uk/lgbt/lgbt-york/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 12 15:11:11 +0000 2014",
    idStr: "465871816125186048",
    content:
      'Update: Meeting on 27 May; Campus North Meeting on 20 June <a href="http://wp.me/p4uHbe-5R">http://wp.me/p4uHbe-5R</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 11 21:24:13 +0000 2014",
    idStr: "465603305906122752",
    content:
      'Oh look, it\'s my photos and videos: <a href="http://sheffieldgreenparty.org.uk/2013/04/07/sheffield-greens-join-regional-backlash-against-nhs-privatisation/">http://sheffieldgreenparty.org.uk/2013/04/07/sheffield-greens-join-regional-backlash-against-nhs-privatisation/</a> | <a href="http://york.greenparty.org.uk/news/hundreds-turn-out-for-nhs-demo.html">http://york.greenparty.org.uk/news/hundreds-turn-out-for-nhs-demo.html</a> | <a href="http://sheffieldgreenparty.org.uk/2013/04/07/andrew-coopers-speech-to-the-save-nhs-demo-in-york/">http://sheffieldgreenparty.org.uk/2013/04/07/andrew-coopers-speech-to-the-save-nhs-demo-in-york/</a> @YorkGreens @SheffieldGreens',
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Sun May 11 21:21:50 +0000 2014",
    idStr: "465602706074513408",
    content:
      'Oh look, it\'s me: <a href="http://www.startingoutguide.org.uk/diversitychampions/york-st-john-university/">http://www.startingoutguide.org.uk/diversitychampions/york-st-john-university/</a> @stonewalluk',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 11 16:49:33 +0000 2014",
    idStr: "465534182702452738",
    content:
      'Photographs of nature and scenery in Knareborough for sale as prints, cards, phone/tablet cases, pillow cases...: <a href="http://www.redbubble.com/people/yndajas/portfolio">http://www.redbubble.com/people/yndajas/portfolio</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 10 21:06:57 +0000 2014",
    idStr: "465236574264119296",
    content:
      "So I had to scroll down nineteen tweets to get to something not related to #Eurovision. I realise this tweet is only joining the rest...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 10 10:07:10 +0000 2014",
    idStr: "465070531696660480",
    content: "Rain and sun every day; Britain's going tropical.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 08 21:06:08 +0000 2014",
    idStr: "464511592038932481",
    content:
      'So @RyRyPB just saw the food he made me and said "aww this looks nice; did you make it?"...',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 08 16:51:10 +0000 2014",
    idStr: "464447426167046144",
    content:
      "York Independent Living Network (@YILN2) event 'Disable People: Being Safe in York' on Monday 12 May <a href=\"http://wp.me/P13o7N-51\">http://wp.me/P13o7N-51</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 07 11:53:07 +0000 2014",
    idStr: "464010031927533568",
    content:
      "'Islamism' meaning 'Islam': \"This war on 'Islamism' only fuels hatred and violence\" via @SeumasMilne <br><a href=\"http://www.theguardian.com/commentisfree/2014/apr/23/war-islamism-hatred-violence-blair-cameron-toxic?CMP=twt_gu\">http://www.theguardian.com/commentisfree/2014/apr/23/war-islamism-hatred-violence-blair-cameron-toxic?CMP=twt_gu</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 06 12:09:16 +0000 2014",
    idStr: "463651708661284864",
    content:
      'York LGBT Forum: Bulletin #15; Meeting on 8 May <a href="http://wp.me/p4uHbe-3k">http://wp.me/p4uHbe-3k</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 03 15:44:39 +0000 2014",
    idStr: "462618751155073024",
    content:
      "Blue Ruin or Locke? @CityScreenYork @KermodeMovie @charltonbrooker",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 03 13:50:49 +0000 2014",
    idStr: "462590101965389825",
    content:
      "Querying cisgender: 'Activist Janet Mock Flips the Script, Asks Alicia Menendez to Prove Her Womanhood' <a href=\"http://fus.in/1fMlLch\">http://fus.in/1fMlLch</a> #trans",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 02 17:36:49 +0000 2014",
    idStr: "462284587201462272",
    content:
      '1 recycled, delabeled passata jar + 1 ruler + 1 sweet boyfriend = flower receiving virginity taken. Thanks @RyRyPB! <div class="gallery"><ul><li><a href="../../tweets_media/462284587201462272-BmpdYcdIgAAu2ko.jpg"><img src="../../tweets_media/462284587201462272-BmpdYcdIgAAu2ko.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 30 20:09:31 +0000 2014",
    idStr: "461598241952260096",
    content:
      "I got 77/100 on 'Quiz: how good is your taste in films' <a href=\"http://www.theguardian.com/film/filmblog/quiz/2014/apr/29/quiz-how-good-taste-films\">http://www.theguardian.com/film/filmblog/quiz/2014/apr/29/quiz-how-good-taste-films</a> via @GuardianQuiz",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 30 11:15:10 +0000 2014",
    idStr: "461463766836973568",
    content:
      'New York St John University LGBT Staff Network blog! Subscribe! Get in contact if interested in writing for it! <a href="http://blog.yorksj.ac.uk/lgbt/">http://blog.yorksj.ac.uk/lgbt/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 30 09:56:53 +0000 2014",
    idStr: "461444068937973760",
    content:
      'Stonewall Authentic Role Models Programme <a href="http://wp.me/p4uHbe-25">http://wp.me/p4uHbe-25</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 30 08:53:18 +0000 2014",
    idStr: "461428065470386176",
    content:
      'Subscribe! <a href="http://wp.me/p4uHbe-1W">http://wp.me/p4uHbe-1W</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 25 17:48:10 +0000 2014",
    idStr: "459750731151466496",
    content:
      'The beauty of invisible everyday symmetry and patterning. <div class="gallery"><ul><li><a href="../../tweets_media/459750731151466496-BmFc2qfCYAARZFX.png"><img src="../../tweets_media/459750731151466496-BmFc2qfCYAARZFX.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 22 18:13:36 +0000 2014",
    idStr: "458669967420829696",
    content:
      "Interesting observation from Dr Helen Fraser: 'What is Oscar Pistorius really saying?' <a href=\"http://forensictranscription.com.au/what-is-oscar-pistorius-saying/\">http://forensictranscription.com.au/what-is-oscar-pistorius-saying/</a> #OscarTrial",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Apr 21 11:42:45 +0000 2014",
    idStr: "458209217271595008",
    content:
      "@guardian @OwenJones84 @AlanCarr @grahnort @DoctorChristian @gareththomas14 ... performances of 'gay', none more authentic than the other.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 21 11:42:14 +0000 2014",
    idStr: "458209088116379649",
    content:
      "@guardian @OwenJones84 @AlanCarr @grahnort @DoctorChristian ... and @gareththomas14. There is an unlimited number of authentic...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 21 11:40:50 +0000 2014",
    idStr: "458208737686462465",
    content:
      "@guardian @OwenJones84 ... we shouldn't exclude the likes @AlanCarr and @grahnort, but rather include the likes of @DoctorChristian...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 21 11:39:07 +0000 2014",
    idStr: "458208304007618562",
    content:
      "'What Alan Carr taught me about gay men's prejudice' | Owen Jones <a href=\"http://gu.com/p/3zhyj/tw\">http://gu.com/p/3zhyj/tw</a> via @guardian @owenjones84 ...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 20 15:37:20 +0000 2014",
    idStr: "457905865870163968",
    content:
      'Lots* of /t/.<br><br>*1,428 tokens <div class="gallery"><ul><li><a href="../../tweets_media/457905865870163968-BlrO9XwCQAEgxg5.png"><img src="../../tweets_media/457905865870163968-BlrO9XwCQAEgxg5.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 20 11:34:57 +0000 2014",
    idStr: "457844869541941248",
    content:
      'Ahimsa-ful Easter egg. Thanks @RyRyPB! #ahimsa #veganEaster <div class="gallery"><ul><li><a href="../../tweets_media/457844869541941248-BlqXe3HIEAAJw4B.jpg"><img src="../../tweets_media/457844869541941248-BlqXe3HIEAAJw4B.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 19 21:05:18 +0000 2014",
    idStr: "457626014584033282",
    content:
      "Shocking, yet completely unremarkable. 'Bic Pens for Women': <a href=\"http://youtu.be/eCyw3prIWhc\">http://youtu.be/eCyw3prIWhc</a> via @TheEllenShow",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 04 22:11:21 +0000 2014",
    idStr: "452206816663859200",
    content:
      "'Europe doesn't need to be a shouting match': <a href=\"http://bit.ly/1lC2tgQ\">http://bit.ly/1lC2tgQ</a> #votegreen2014 @TheGreenParty",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 04 21:56:51 +0000 2014",
    idStr: "452203168768589825",
    content:
      "''Get your arse out, mate': we turn the tables on everyday sexism – video' <a href=\"http://gu.com/p/3z6b9/tw\">http://gu.com/p/3z6b9/tw</a> via @guardian",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 04 21:46:15 +0000 2014",
    idStr: "452200502235652096",
    content:
      "Good article on conventions of mapping: 'Why Google Maps gets Africa wrong' <a href=\"http://gu.com/p/3z2gh/tw\">http://gu.com/p/3z2gh/tw</a> via @guardian @ThinkAfricaFeed @jamesjwan",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 03 15:26:43 +0000 2014",
    idStr: "451742599485730816",
    content:
      "Boo: 'Not suitable for vegetarians: Walkers' new potato crisps range uses real ingredients - including meat' <a href=\"http://www.independent.co.uk/life-style/food-and-drink/news/not-suitable-for-vegetarians-walkers-new-potato-crisps-range-uses-real-ingredients--including-meat-8513660.html\">http://www.independent.co.uk/life-style/food-and-drink/news/not-suitable-for-vegetarians-walkers-new-potato-crisps-range-uses-real-ingredients--including-meat-8513660.html</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 27 19:18:43 +0000 2014",
    idStr: "449264271399333888",
    content: "@leighjohnston @PeterTatchell ... but received no explanation.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 17 17:21:43 +0000 2021",
    idStr: "1405576405002428421",
    content:
      "@carpanini88 @JonMorrisSmith @the_LTA Managed on the third try with a different card. Not sure why the original didn't work...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 17 12:31:47 +0000 2021",
    idStr: "1405503438616731652",
    content:
      "Image description: myWIMBLEDON registration form with a title field that includes the standard gendered titles, Dr, Prof and titles relating to 'nobility'.",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Jun 17 12:30:39 +0000 2021",
    idStr: "1405503155702489091",
    content:
      'How many times do I have to ask/tell tennis organisations to include non-binary people?<br><br>\'Nobility\' over non-binary inclusion at Wimbledon, it seems... <div class="gallery"><ul><li><a href="../../tweets_media/1405503155702489091-E4FZPluXMAAAqbM.jpg"><img src="../../tweets_media/1405503155702489091-E4FZPluXMAAAqbM.jpg"></a></li></ul></div>',
    favouriteCount: "12",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 10 10:41:30 +0000 2021",
    idStr: "1402938969172721664",
    content:
      'Amazing <a href="https://twitter.com/megstalter/status/1400151453629653001">https://twitter.com/megstalter/status/1400151453629653001</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 09 14:58:00 +0000 2021",
    idStr: "1402641132962594822",
    content: "I've lost to less people at the French Open than Nadal.",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jun 08 21:37:05 +0000 2021",
    idStr: "1402379175789531141",
    content:
      'The best comedian tennis player <a href="https://twitter.com/BastienFachan/status/1402375246821441540">https://twitter.com/BastienFachan/status/1402375246821441540</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 04 15:33:18 +0000 2021",
    idStr: "1400838077552201728",
    content:
      "On the few occasions I've been asked for grammatically judgements I always found it difficult to provide a 'straight' answer for this reason! <a href=\"https://twitter.com/phonotactician/status/1400600890889834498\">https://twitter.com/phonotactician/status/1400600890889834498</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 20 22:41:13 +0000 2014",
    idStr: "446778516525572096",
    content: "@yndajas ... people with a shared characteristic.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 20 22:41:00 +0000 2014",
    idStr: "446778458929385472",
    content:
      "@yndajas And I like the message that trans people are no more uniform and heterogenous in their experiences than any other group of...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 20 22:37:54 +0000 2014",
    idStr: "446777681984909313",
    content: "@yndajas Individuals*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 20 22:37:36 +0000 2014",
    idStr: "446777603362660352",
    content:
      "@yndajas ... important to be conscious not to be overly interrogative.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 20 22:36:59 +0000 2014",
    idStr: "446777450924900353",
    content:
      "@srpnor ... positive way to promote understanding, but you never know what specific individual's are comfortable talking about, so it's...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 20 22:16:47 +0000 2014",
    idStr: "446772368610820096",
    content:
      "Very interesting and informative: 'Things you wanted to know about trans people and were rude enough to ask' <a href=\"http://gu.com/p/3njj3/tw\">http://gu.com/p/3njj3/tw</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 05 11:59:59 +0000 2014",
    idStr: "441181325890838528",
    content:
      "'63 Black Harvard Students Share Their Experiences In A Powerful Photo Project': <a href=\"http://www.buzzfeed.com/alisonvingiano/21-black-harvard-students-share-their-experiences-through-a\">http://www.buzzfeed.com/alisonvingiano/21-black-harvard-students-share-their-experiences-through-a</a>  via @alivingiano",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 03 19:47:48 +0000 2014",
    idStr: "440574278811934720",
    content:
      'Just published an article on <a href="http://Academia.edu">http://Academia.edu</a>: Language policy in Belarus <a href="https://www.academia.edu/6271081/Language_policy_in_Belarus">https://www.academia.edu/6271081/Language_policy_in_Belarus</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 03 13:11:27 +0000 2014",
    idStr: "440474533221646336",
    content:
      "[3/3] … originate from the same location as the idiom; suppress individuality and creativity.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 03 13:11:21 +0000 2014",
    idStr: "440474509926473728",
    content:
      "[2/3] … which is particularly problematic for those for which the language of the idiom is not a first language and also those who do not…",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 03 13:10:55 +0000 2014",
    idStr: "440474401944109056",
    content:
      "[1/3] Idioms: negate the need for a proper understanding of the concept; are not easily understandable without privileged knowledge…",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 16:09:21 +0000 2014",
    idStr: "438707365492584448",
    content:
      "Hair-raising closing remarks from @FionaThompson16 #authyou #yorklgbthistory2014",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 13:58:07 +0000 2014",
    idStr: "438674340096528384",
    content:
      ".@mattharper88 and @simonrodgers also talking about what you can do to create an open environment #authyou #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Feb 26 13:56:34 +0000 2014",
    idStr: "438673948310765570",
    content:
      ".@ruth_hunt noting how explicit signaling is more powerful than over-considering the curriculum in education #authyou #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 13:52:44 +0000 2014",
    idStr: "438672984342265856",
    content:
      ".@ruth_hunt talking about the importance of signalling in challenging a heteronormative working environment #authyou #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 13:51:27 +0000 2014",
    idStr: "438672660684623872",
    content:
      "... and Kate Scott-Hughes talking about identifying a role model (without engaging in faux pas) #authyou #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 13:46:48 +0000 2014",
    idStr: "438671493141381121",
    content:
      "... @simonrodgers also providing his thoughts on what a role model is (with an anecdote about his faux pas) #authyou #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Feb 26 13:43:54 +0000 2014",
    idStr: "438670761369554944",
    content:
      ".@ruth_hunt answering a question about what it means to be a role model in the workplace #authyou #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 13:28:27 +0000 2014",
    idStr: "438666873866313728",
    content:
      "Kate Scott-Hughes sharing her own experiences of being LGBT in the workplace at @cpsuk #authyou #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Feb 26 13:19:30 +0000 2014",
    idStr: "438664619994124288",
    content:
      ".@simonrodgers reflecting on the work done and initiatives established by @AvivaPride #authyou #yorklgbthistory2014",
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Feb 26 13:15:37 +0000 2014",
    idStr: "438663643316912128",
    content:
      ".@ruth_hunt articulating the importance of being proactive in embedding a positive culture into the workplace #authyou #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 13:08:12 +0000 2014",
    idStr: "438661778206363648",
    content:
      ".@ruth_hunt speaking about @stonewalluk and providing a historical perspective at Authentic You #authyou #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 13:06:32 +0000 2014",
    idStr: "438661359883259904",
    content:
      "Authentic You opened with a few words about the journey at @jrf_uk from @juliaunwin #authyou #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 09:24:03 +0000 2014",
    idStr: "438605369485848576",
    content:
      '[3/3] XXY (Latin American film) screening plus Q&amp;A, 19:00 - 21:00: <a href="http://www.york.ac.uk/admin/eo/Events/LGBTHistoryMonth2014.htm">http://www.york.ac.uk/admin/eo/Events/LGBTHistoryMonth2014.htm</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 09:22:49 +0000 2014",
    idStr: "438605057861632000",
    content:
      '[2/3] The Discursive Construction of Sexuality, 17:15 - 18:30: <a href="http://www.yorksj.ac.uk/pdf/Colloquium%202013-14%20Sem%202%20updated.pdf">http://www.yorksj.ac.uk/pdf/Colloquium%202013-14%20Sem%202%20updated.pdf</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 26 09:18:55 +0000 2014",
    idStr: "438604075647897600",
    content:
      '[1/3] Three events today for #yorklgbthistory2014. Authentic You: Being Yourself at Work, 12:00-16:00: <a href="http://www.eventbrite.co.uk/e/authentic-you-being-yourself-at-work-tickets-10000970171">http://www.eventbrite.co.uk/e/authentic-you-being-yourself-at-work-tickets-10000970171</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 22 17:15:23 +0000 2014",
    idStr: "437274434429530112",
    content:
      "Time to watch the final Tonight Show Starring Jimmy Fallon (@jimmyfallon) of the week before evening celebrations for @RyRyPB's birthday.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 22 17:09:47 +0000 2014",
    idStr: "437273024900128768",
    content:
      "Enjoyed the York Gay Walk with @RyRyPB for #yorklgbthistory2014 (and good to see @HelenSauntson and @david3012 there too).",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 22 17:04:37 +0000 2014",
    idStr: "437271723344658432",
    content:
      'Just spotted something I designed in a window (for @YorkGreens). <div class="gallery"><ul><li><a href="../../tweets_media/437271723344658432-BhGAUL-IQAAAemT.jpg"><img src="../../tweets_media/437271723344658432-BhGAUL-IQAAAemT.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Feb 21 15:00:00 +0000 2014",
    idStr: "436877972654792704",
    content:
      'Tomorrow, York Gay Walk at 13:00 and Football v Homophobia match at 15:00, see: <a href="http://www.yorksj.ac.uk/pdf/A5_Land_.pdf">http://www.yorksj.ac.uk/pdf/A5_Land_.pdf</a> #yorklgbthistory2014 @YorkPride',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 21 14:58:36 +0000 2014",
    idStr: "436877622463971329",
    content:
      "Tonight/Saturday/Sunday, 'Breaking the Code', a drama about Alan Turing, 19:30 at @UniOfYork: <a href=\"https://www.facebook.com/events/703057886405026\">https://www.facebook.com/events/703057886405026</a> #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 20 23:50:01 +0000 2014",
    idStr: "436648971118055424",
    content:
      "[2/2] ... other than the prescriptive gender role undertone of the golden age of women dressing in long frocks.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 20 23:48:36 +0000 2014",
    idStr: "436648613880422400",
    content:
      "[1/2] Great article: 'I'm sick of awards ceremonies – they simply reflect our culture of entitlement | Suzanne Moore' <a href=\"http://gu.com/p/3mqkn/tw\">http://gu.com/p/3mqkn/tw</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 20 15:40:30 +0000 2014",
    idStr: "436525778189434881",
    content:
      "[3/2] ... the latter starting at 18:15 #yorklgbthistory2014 @LGBTHM",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 20 15:35:44 +0000 2014",
    idStr: "436524580447191040",
    content:
      '[2/2] Secondly, a talk about LGBT community music practices at @UniOfYork: <a href="http://www.york.ac.uk/admin/eo/Events/LGBTHistoryMonth2014.htm">http://www.york.ac.uk/admin/eo/Events/LGBTHistoryMonth2014.htm</a> #yorklgbthistory2014 @LGBTHM',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 20 15:34:04 +0000 2014",
    idStr: "436524158105976832",
    content:
      "[1/2] Two events tonight for #yorklgbthistory2014. Firstly, a screening of 'The Birdcage', 17:00 at @YSJSU <a href=\"https://www.facebook.com/events/664402883622407\">https://www.facebook.com/events/664402883622407</a> @LGBTHM",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 19 10:15:47 +0000 2014",
    idStr: "436081673953099777",
    content:
      'Online edition of Neutral Magazine is beautiful (@plumpdigital @YorkStJohn). Is this the one you worked on, @RyRyPB? <a href="http://neutralmagazine.com/">http://neutralmagazine.com/</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 19 09:53:56 +0000 2014",
    idStr: "436076174381297664",
    content:
      "Useful tips about Twitter lists: 'Day 8 of #YSJ10DoT: Using Twitter Lists' <a href=\"http://blog.yorksj.ac.uk/moodle/2014/02/19/day-8-of-ysj10dot/\">http://blog.yorksj.ac.uk/moodle/2014/02/19/day-8-of-ysj10dot/</a> via @YSJMahoodle @PhilVincent",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 18 10:40:03 +0000 2014",
    idStr: "435725390275829760",
    content:
      "Watching this I realise I often favour critiquing over comprehending audiovisual content: 'An Introduction to QAA': <a href=\"http://youtu.be/jSGOjELQJ7g\">http://youtu.be/jSGOjELQJ7g</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 18 10:07:23 +0000 2014",
    idStr: "435717171751034881",
    content:
      "Social event hosted by York St John University LGBT Staff Network tonight in our Arts Foyer from 17:00. All welcome. #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 18 10:01:06 +0000 2014",
    idStr: "435715589097537536",
    content:
      "Interesting stuff, even for experienced Tweeters: 'Day 7 of #YSJ10DoT: Hashtags' <a href=\"https://blog.yorksj.ac.uk/moodle/2014/02/18/day-7-of-ysj10dot/\">https://blog.yorksj.ac.uk/moodle/2014/02/18/day-7-of-ysj10dot/</a> via @MahoodleYSJ @DanielMackley",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 17 14:36:48 +0000 2014",
    idStr: "435422583941390336",
    content:
      'Black, female and postgraduate: why I cannot be the only one (by @janinebradders) <a href="http://gu.com/p/3ft68/tw">http://gu.com/p/3ft68/tw</a> via @guardian',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 17 10:30:13 +0000 2014",
    idStr: "435360530891427840",
    content:
      '[CFP] Writing South Africa Now: Twenty Years On <a href="http://writingsouthafricanow.wordpress.com/2014/02/13/call-for-papers-2014/">http://writingsouthafricanow.wordpress.com/2014/02/13/call-for-papers-2014/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 16 17:39:41 +0000 2014",
    idStr: "435106218424561665",
    content:
      "I don't need to be told what glasses or glasses cases are suitable for me to purchase based upon my actual or perceived gender or sex.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 15 22:18:31 +0000 2014",
    idStr: "434814002846105600",
    content:
      "Fantastic. 'Dallas sportscaster’s shocking response to Michael Sam coming out as gay': <a href=\"http://twentytwowords.com/dallas-sportscasters-shocking-response-to-michael-sam-coming-out-as-gay/\">http://twentytwowords.com/dallas-sportscasters-shocking-response-to-michael-sam-coming-out-as-gay/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 15 22:16:48 +0000 2014",
    idStr: "434813570849570816",
    content:
      "Ineptly singing and rapping along to 'The Truth' by Handsome Boy Modeling School (featuring J-Live &amp; Róisín Murphy): <a href=\"https://soundcloud.com/yndajas/handsome-boy-modeling-school\">https://soundcloud.com/yndajas/handsome-boy-modeling-school</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 15 22:16:01 +0000 2014",
    idStr: "434813374073810945",
    content:
      "Illuminating illustration of sexism through role reversal. Trigger warning: rape. 'OPPRESSED MAJORITY': <a href=\"http://youtu.be/V4UWxlVvT1A\">http://youtu.be/V4UWxlVvT1A</a>",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Feb 13 17:23:53 +0000 2014",
    idStr: "434015079517159424",
    content:
      'That\'ll do. <div class="gallery"><ul><li><a href="../../tweets_media/434015079517159424-BgXuakmIUAAvETP.jpg"><img src="../../tweets_media/434015079517159424-BgXuakmIUAAvETP.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 13 09:47:15 +0000 2014",
    idStr: "433900163292073985",
    content:
      'York LGBT Forum (@YorkLGBT) meeting tonight at 19:00 in PH/011 at York St John University #yorklgbthistory2014 <a href="http://www.yorksj.ac.uk/pdf/A5_Land_.pdf">http://www.yorksj.ac.uk/pdf/A5_Land_.pdf</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 12 14:16:59 +0000 2014",
    idStr: "433605657363611648",
    content:
      'Free article access: Religion and Spirituality in the LGBT Community (until end of 2014): <a href="http://explore.tandfonline.com/page/beh/lgbt2014">http://explore.tandfonline.com/page/beh/lgbt2014</a> | <a href="http://tandf.msgfocus.com/q/1H7KU0BKmDa0QQem1kY5a/wv">http://tandf.msgfocus.com/q/1H7KU0BKmDa0QQem1kY5a/wv</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 12 14:09:57 +0000 2014",
    idStr: "433603887354740737",
    content:
      "I often try to complete @nusuk surveys, but find many unanswerable questions. Think the survey designing needs a little more development.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 12 10:12:40 +0000 2014",
    idStr: "433544174910992384",
    content:
      "Be a panel member for the trial of the Equality Challenge Unit's (@EqualityinHE) planned gender equality charter mark.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 12 10:08:24 +0000 2014",
    idStr: "433543099839549440",
    content:
      "Take part in the consultation on the Equality Challenge Unit's (@EqualityinHE) planned race equality charter mark.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 12 09:53:10 +0000 2014",
    idStr: "433539266891632641",
    content:
      'Authentic You: Being Yourself at Work by @YorkStJohn, @jrf_uk and @CityofYork with @ruth_hunt #yorklgbthistory2014 <a href="http://www.eventbrite.co.uk/e/authentic-you-being-yourself-at-work-tickets-10000970171">http://www.eventbrite.co.uk/e/authentic-you-being-yourself-at-work-tickets-10000970171</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 11 17:51:06 +0000 2014",
    idStr: "433297152777793536",
    content:
      'Blackstar - Thieves in the Night: <a href="http://youtu.be/GjxtRehIz2Y">http://youtu.be/GjxtRehIz2Y</a> via @youtube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 11 10:21:47 +0000 2014",
    idStr: "433184081329651712",
    content:
      ".@MahoodleYSJ @bufvc_bob Is BoB essentially a catch-up service on a massive scale, with added te(a)chnology-enhanced-learnability? #YSJ10DoT",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 11 09:40:12 +0000 2014",
    idStr: "433173614519541761",
    content:
      "Joining in with #YSJ10DoT with @MahoodleYSJ - @PhilVincent and @DanielMackley!",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Feb 08 18:47:39 +0000 2014",
    idStr: "432224220656185345",
    content: "Overhearing pro-fracking rhetoric.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 08 18:38:31 +0000 2014",
    idStr: "432221923972751360",
    content:
      "Why are LGBT History Month and Black History Month in opposite months in the USA and the UK?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 08 18:28:17 +0000 2014",
    idStr: "432219348733005824",
    content:
      "Just over half way through 'Songs In The Key Of Life'; don't think it's going to match up to my impression of 'Innervisions'.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 05 09:30:53 +0000 2014",
    idStr: "430996942189916160",
    content:
      '[3/3] 19:30 at @UniOfYork: a talk about sexuality and faith from a personal perspective #yorklgbthistory2014 <a href="https://www.facebook.com/events/426499357483948/">https://www.facebook.com/events/426499357483948/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 05 09:28:50 +0000 2014",
    idStr: "430996427498471424",
    content:
      '[2/3] 19:00 at @UniOfYork: a talk on the history of law, religion and homosexuality in the UK #yorklgbthistory2014 <a href="http://www.yorksj.ac.uk/pdf/A5_Land_.pdf">http://www.yorksj.ac.uk/pdf/A5_Land_.pdf</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 05 09:26:12 +0000 2014",
    idStr: "430995764211232768",
    content:
      "[1/3] A very religious evening tonight for #yorklgbthistory2014: two events, both addressing faith and sexuality @LGBTHM",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 03 22:41:26 +0000 2014",
    idStr: "430471116457402368",
    content:
      "If you get 'nominated', grow up and do this: 'A South African NekNomination': <a href=\"http://youtu.be/x-wztJ4m6xE\">http://youtu.be/x-wztJ4m6xE</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 03 20:20:41 +0000 2014",
    idStr: "430435693496512512",
    content:
      'Wow. Incredible speech about why LGBT (and any equality-related) activism is about so much more than legal rights: <a href="http://youtu.be/WXayhUzWnl0">http://youtu.be/WXayhUzWnl0</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 03 13:30:33 +0000 2014",
    idStr: "430332482022416384",
    content:
      'Check out The University of Manchester\'s (@UoMLGBT) LGBT History Month events: <a href="http://documents.manchester.ac.uk/display.aspx?DocID=19249">http://documents.manchester.ac.uk/display.aspx?DocID=19249</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 03 13:25:36 +0000 2014",
    idStr: "430331237568225280",
    content:
      'Check out Leeds University Union\'s (@LeedsUniUnion @LeedsLGBT) LGBT History Month events: <a href="http://www.leedsuniversityunion.org.uk/campaigns/lgbthistorymonth/">http://www.leedsuniversityunion.org.uk/campaigns/lgbthistorymonth/</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Feb 03 13:22:47 +0000 2014",
    idStr: "430330527489351680",
    content:
      'Check out The University of Sheffield\'s (@TUoSLGBT) LGBT History Month events plus a few from the rest of Sheffield: <a href="http://sheffieldlgbtstaffnetwork.blogspot.co.uk/2014/01/lgbt-history-month-2014-february-1st.html">http://sheffieldlgbtstaffnetwork.blogspot.co.uk/2014/01/lgbt-history-month-2014-february-1st.html</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 03 11:20:26 +0000 2014",
    idStr: "430299735971221506",
    content:
      'A chance for students to input into equality policies at @YorkStJohn on Monday 10th February: <a href="http://bit.ly/1bjlo6K">http://bit.ly/1bjlo6K</a> @YSJSU @ysjequality',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 02 19:29:52 +0000 2014",
    idStr: "430060518011715585",
    content:
      "Excellent: 'Fleetways Taxis buy defibrillator units and train staff in first aid' <a href=\"http://www.yorkpress.co.uk/news/10980879.Fleetways_Taxis_buy_defibrillator_units_and_train_staff_in_first_aid\">http://www.yorkpress.co.uk/news/10980879.Fleetways_Taxis_buy_defibrillator_units_and_train_staff_in_first_aid</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 02 17:47:41 +0000 2014",
    idStr: "430034804663656448",
    content: "107 tabs, maybe that's a little unhealthy.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 02 11:45:46 +0000 2014",
    idStr: "429943722428473344",
    content:
      "Hilarious: 'Imran Khan Answers Questions About Being Gay &amp; Sec 377': <a href=\"http://youtu.be/cXqH7_dYM_k\">http://youtu.be/cXqH7_dYM_k</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 01 18:33:13 +0000 2014",
    idStr: "429683875384545280",
    content:
      'To celebrate a year of being vegan, I share this to show you why you should be too: <a href="http://www.youtube.com/watch?v=ksFlFuqeQVk">http://www.youtube.com/watch?v=ksFlFuqeQVk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 01 17:54:17 +0000 2014",
    idStr: "429674075976257537",
    content:
      'India Arie talks about the Grammy Awards as a popularity contest; too true: "India Arie knocks Grammys" <a href="http://www.jamaicaobserver.com/latestnews/India-Arie-knocks-Grammys">http://www.jamaicaobserver.com/latestnews/India-Arie-knocks-Grammys</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 01 13:41:42 +0000 2014",
    idStr: "429610510041251840",
    content:
      "One year a vegan this month, except for the occasional social vegetarianism.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 01 12:21:34 +0000 2014",
    idStr: "429590343923691520",
    content:
      'I\'m told I should be a humanitarian. <a href="http://www.buzzfeed.com/ashleyperez/what-career-should-you-have">http://www.buzzfeed.com/ashleyperez/what-career-should-you-have</a>  via @buzzfeed',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 01 11:36:31 +0000 2014",
    idStr: "429579009261699072",
    content:
      'Did early Christianity preach veganism, or at least see it as the diet of the truly divine and innocent? <a href="http://www.biblegateway.com/passage/?search=Genesis+1%3A29-31&version=NKJV">http://www.biblegateway.com/passage/?search=Genesis+1%3A29-31&version=NKJV</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 01 00:11:02 +0000 2014",
    idStr: "429406502827597824",
    content: "So proud of @RyRyPB for getting a job at @YorkStJohn!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 31 09:38:49 +0000 2014",
    idStr: "429186998604005376",
    content:
      'Archbishops of Canterbury and York urge Nigeria and Uganda to drop anti-gay laws <a href="http://www.pinknews.co.uk/2014/01/30/archbishops-of-canterbury-and-york-urge-nigeria-and-uganda-to-drop-anti-gay-laws/">http://www.pinknews.co.uk/2014/01/30/archbishops-of-canterbury-and-york-urge-nigeria-and-uganda-to-drop-anti-gay-laws/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jan 30 14:34:54 +0000 2014",
    idStr: "428899122528014337",
    content:
      'York LGBT History Month programme featuring over twenty events released #yorklgbthistory2014 @LGBTHM <a href="http://www.yorksj.ac.uk/pdf/A5_Land_.pdf">http://www.yorksj.ac.uk/pdf/A5_Land_.pdf</a>',
    favouriteCount: "0",
    retweetCount: "3",
  },
  {
    createdAt: "Tue Jan 28 20:01:05 +0000 2014",
    idStr: "428256433650401281",
    content:
      'Proud to call this guy (@owenwalker3) one of my best friends: <a href="http://www.bbc.co.uk/careers/trainee-schemes/jts">http://www.bbc.co.uk/careers/trainee-schemes/jts</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 27 22:33:36 +0000 2014",
    idStr: "427932429018333184",
    content:
      'A Tribe Called Quest - Push It Along: <a href="http://youtu.be/qRPvKh4JCLg">http://youtu.be/qRPvKh4JCLg</a> via @youtube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 22 20:55:47 +0000 2014",
    idStr: "426095875895488512",
    content:
      'Handsome Boy Modeling School - The Truth (feat. Roisin of Moloko &amp; J-Live): <a href="http://youtu.be/EheSOZHjHb8">http://youtu.be/EheSOZHjHb8</a> via @youtube',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 19 14:24:10 +0000 2014",
    idStr: "424910158137794560",
    content:
      "Time to listen to Stevie Wonder's 'Innervisions' for the first time.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jan 18 19:37:50 +0000 2014",
    idStr: "424626704871460865",
    content:
      'Don\'t normally share these things, but apparently I should live in Portland:       <a href="http://www.buzzfeed.com/ashleyperez/what-city-should-you-actually-live-in">http://www.buzzfeed.com/ashleyperez/what-city-should-you-actually-live-in</a> <div class="gallery"><ul><li><a href="../../tweets_media/424626704871460865-BeSTvQKCEAEFxk8.png"><img src="../../tweets_media/424626704871460865-BeSTvQKCEAEFxk8.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jan 18 12:34:58 +0000 2014",
    idStr: "424520289888661505",
    content:
      'Erykah Badu - Bag Lady &amp; Penitentiary Philosophy (Live) w/ band 2001: <a href="http://youtu.be/hn3Zs3zSxOU">http://youtu.be/hn3Zs3zSxOU</a> via @youtube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jan 18 10:14:27 +0000 2014",
    idStr: "424484924347785216",
    content:
      "Beautiful: 'Vows: Mr. Duckett and Dr. Jones': <a href=\"http://youtu.be/_DYn8FfcwvM\">http://youtu.be/_DYn8FfcwvM</a> via @youtube",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 11 21:05:07 +0000 2022",
    idStr: "1569069552683700226",
    content:
      '🏆🏆🏆 <a href="https://twitter.com/cheezyc64/status/1569045859081539584">https://twitter.com/cheezyc64/status/1569045859081539584</a>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 09 17:58:46 +0000 2022",
    idStr: "1568297878153732096",
    content:
      '👇🏻 <a href="https://twitter.com/ecomarxi/status/1568204164479569922">https://twitter.com/ecomarxi/status/1568204164479569922</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 03 23:41:10 +0000 2021",
    idStr: "1400598466204667906",
    content:
      "If a tree falls in a forest and no one is around to hear it, just check the logs",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jun 01 00:02:20 +0000 2021",
    idStr: "1399516627511742469",
    content:
      '👏👏👏 <a href="https://twitter.com/lksriv/status/1399441194678198278">https://twitter.com/lksriv/status/1399441194678198278</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jan 16 18:17:13 +0000 2014",
    idStr: "423881643641020416",
    content:
      "Lack of bike and iPod has made me resort to pronouncing the last three letters of car registration plates as phonetic transcriptions.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 15 12:24:08 +0000 2014",
    idStr: "423430399893573632",
    content:
      'I have no intention to become a flight attendant, but for £19 why not add a cabin crew diploma to the CV? <a href="http://www.groupon.co.uk/in/,32803626">http://www.groupon.co.uk/in/,32803626</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 14 13:06:38 +0000 2014",
    idStr: "423078705804480512",
    content:
      "Really enjoyed the first ever @YorkPride launch last night; an excellent event that made me proud to be a Pride alumnus! (No typos spotted!)",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jan 14 12:12:44 +0000 2014",
    idStr: "423065141324685312",
    content:
      'Check out <a href="http://twubs.com/yorklgbthistory2014">http://twubs.com/yorklgbthistory2014</a> for tweets about LGBT History Month 2014 in York and use the hashtag #yorklgbthistory2014',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 13 14:47:45 +0000 2014",
    idStr: "422741762856067072",
    content:
      "Planning any events in York for LGBT History Month (@LGBTHM)? Contact @YSJArtsEvents to join the collaborative campaign #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Mon Jan 13 14:46:36 +0000 2014",
    idStr: "422741474631897088",
    content:
      "Collaborative city-wide LGBT History Month (@LGBTHM) campaign in York is starting to shape up #yorklgbthistory2014",
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Jan 12 13:20:54 +0000 2014",
    idStr: "422357521253158913",
    content:
      "@DanCamp4 Though I think I prefer Orange is the New Black based on the first season; hopefully it will continue as it began.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 12 12:30:57 +0000 2014",
    idStr: "422344950965997568",
    content:
      "Only eight episodes of Weeds left to watch. I have a feeling that will probably be zero by the end of today.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jan 11 15:51:13 +0000 2014",
    idStr: "422032961425670144",
    content: "Are your words good? Do they make pointful statements?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jan 11 13:23:01 +0000 2014",
    idStr: "421995666533933056",
    content:
      "Well if this isn't a thinly-veiled statement, I don't know what is: Weeds - American Health Care: <a href=\"http://youtu.be/6j5TZYfG9tc\">http://youtu.be/6j5TZYfG9tc</a> via @youtube",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 10 23:34:58 +0000 2014",
    idStr: "421787281356115968",
    content:
      "@DanCamp4 And yeah, I'd have thought alcohol was worse than some illegal drugs.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 10 23:25:17 +0000 2014",
    idStr: "421784844561960962",
    content:
      "Alcohol, tobacco and illegal drugs don't interest me (though I have/do consume alcohol), but what does is why any legal distinction exists.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 10 23:00:56 +0000 2014",
    idStr: "421778716058869760",
    content:
      "I love hyphens but I'm not too fond of dashes; I prefer semi-colons.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 10 18:10:33 +0000 2014",
    idStr: "421705635173257217",
    content:
      "Nice coming home to tidiness thanks to @RyRyPB, but would be better if he were here #boyfriendinBirminghamwhichisnotinYork #catchyhashtags",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 10 14:22:02 +0000 2014",
    idStr: "421648127863435265",
    content:
      "We must obviously observe that you are neither obliged to obey nor object to the obviation of the need for obfuscation of obnoxious oblongs.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 08 18:01:35 +0000 2014",
    idStr: "420978606748082176",
    content:
      'Benefits Street: A healthy media would stand up to the powerful and wealthy. Ours targets the poor and voiceless <a href="http://www.independent.co.uk/voices/comment/benefits-street-a-healthy-media-would-stand-up-to-the-powerful-and-wealthy-ours-targets-the-poor-and-voiceless-9046773.html">http://www.independent.co.uk/voices/comment/benefits-street-a-healthy-media-would-stand-up-to-the-powerful-and-wealthy-ours-targets-the-poor-and-voiceless-9046773.html</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 07 14:35:52 +0000 2014",
    idStr: "420564447472533504",
    content:
      'Very powerful message from a farmer: The Importance of Our Evolution Beyond Killing for Food <a href="http://huff.to/1ctct1u">http://huff.to/1ctct1u</a> via @HuffPostGreen',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 03 18:11:21 +0000 2014",
    idStr: "419169125617770498",
    content: '"Jammin\' on the one."',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 01 23:13:02 +0000 2014",
    idStr: "418520265962688512",
    content:
      'Bandana-fied. <div class="gallery"><ul><li><a href="../../tweets_media/418520265962688512-Bc7h9uhCEAA-sO9.jpg"><img src="../../tweets_media/418520265962688512-Bc7h9uhCEAA-sO9.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 01 19:15:33 +0000 2014",
    idStr: "418460505418649600",
    content:
      'If only Miley Cyrus had met The Roots instead of whoever led her down the teen-star-turned-sour path: <a href="http://www.youtube.com/watch?v=2mjvfnUAfyo">http://www.youtube.com/watch?v=2mjvfnUAfyo</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 30 20:53:43 +0000 2013",
    idStr: "417760433781878784",
    content:
      'Indulging in a hearty vegan stew and stuffing with @RyRyPB. <div class="gallery"><ul><li><a href="../../tweets_media/417760433781878784-Bcwu5m6IIAAx9rx.jpg"><img src="../../tweets_media/417760433781878784-Bcwu5m6IIAAx9rx.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 30 16:21:52 +0000 2013",
    idStr: "417692021525348352",
    content: "@iwilsonysj @RyRyPB I forgot, oregano!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 30 13:28:57 +0000 2013",
    idStr: "417648504438149120",
    content:
      'This issue affects everyone; it affects men who then affect those around them, to varying degrees, explicit or not: <a href="http://www.upworthy.com/theres-something-absolutely-wrong-with-what-we-do-to-boys-before-they-grow-into-men?g=2">http://www.upworthy.com/theres-something-absolutely-wrong-with-what-we-do-to-boys-before-they-grow-into-men?g=2</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 30 12:39:03 +0000 2013",
    idStr: "417635946608070656",
    content:
      "@iwilsonysj @RyRyPB  minutes respectively. Then the whole thing was cooked together in the oven for about 10-12 minutes.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 30 12:38:25 +0000 2013",
    idStr: "417635785811054592",
    content:
      "@iwilsonysj @RyRyPB ... soy mozzarella cheese. The aubergine, peppers and sausages were pre-cooked in the oven for about 8, 4 and 15...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 29 19:10:40 +0000 2013",
    idStr: "417372113092489216",
    content:
      'Indulging in homemade vegan pizza with @RyRyPB. <div class="gallery"><ul><li><a href="../../tweets_media/417372113092489216-BcrNuZyIUAEaQjH.jpg"><img src="../../tweets_media/417372113092489216-BcrNuZyIUAEaQjH.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 27 14:01:54 +0000 2013",
    idStr: "416569631659528192",
    content:
      '<div class="gallery"><ul><li><a href="../../tweets_media/416569631659528192-Bcfz32bIQAAkwy2.jpg"><img src="../../tweets_media/416569631659528192-Bcfz32bIQAAkwy2.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 24 01:09:52 +0000 2013",
    idStr: "415288182142287872",
    content:
      "Seriously funky cover of Bill Withers' 'Just The Two Of Us' from The Philadelphia Experiment project/album: <a href=\"http://youtu.be/EV7v_1BVaig\">http://youtu.be/EV7v_1BVaig</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 23 17:42:03 +0000 2013",
    idStr: "415175482057834496",
    content:
      'A built up version of the track I tweeted yesterday, ‘22nd December 2013 Pt 2’: <a href="https://soundcloud.com/yndajas/22nd-december-2013-pt-2">https://soundcloud.com/yndajas/22nd-december-2013-pt-2</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 23 00:31:03 +0000 2013",
    idStr: "414916023221891072",
    content:
      '... following on from the little bit of music that I wrote for the piano, here\'s what it sounds like: <a href="https://soundcloud.com/yndajas/22nd-december-2013">https://soundcloud.com/yndajas/22nd-december-2013</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 22 23:03:24 +0000 2013",
    idStr: "414893963355512832",
    content:
      'In a slight diversion from my Belarusian language policy essay, I decided to learn to play and write for the piano. <div class="gallery"><ul><li><a href="../../tweets_media/414893963355512832-BcH_3IoCYAASPik.jpg"><img src="../../tweets_media/414893963355512832-BcH_3IoCYAASPik.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 22 11:53:47 +0000 2013",
    idStr: "414725450238152704",
    content:
      'Cover of OutKast\'s ‘Hey Ya’ by @Simon_Bolley and @ashley_dawes <a href="https://soundcloud.com/simon-bolley/hey-ya-ashley-1">https://soundcloud.com/simon-bolley/hey-ya-ashley-1</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 21 21:01:41 +0000 2013",
    idStr: "414500946497241088",
    content:
      'If anybody in York knows a Richard Brooke and family, let me know. They don\'t live here... <div class="gallery"><ul><li><a href="../../tweets_media/414500946497241088-BcCaahJIcAA_7Vk.jpg"><img src="../../tweets_media/414500946497241088-BcCaahJIcAA_7Vk.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Dec 21 20:44:21 +0000 2013",
    idStr: "414496585981390848",
    content:
      "With every 'why?' should be a 'why not?', but 'why not?' alone should never be 'why?'; with every 'why not?' should also be a 'why?'.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 21 13:40:38 +0000 2013",
    idStr: "414389951761891329",
    content:
      'Nina Simone - Central Park Blues: <a href="http://youtu.be/Y1c2zuDqcck">http://youtu.be/Y1c2zuDqcck</a> via @youtube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 20 23:28:57 +0000 2013",
    idStr: "414175618209546240",
    content:
      'Truly captivating: Nina Simone "Feelings" (Montreux Jazz Festival): <a href="http://youtu.be/mH5ZE3N8cxU">http://youtu.be/mH5ZE3N8cxU</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 20 23:01:39 +0000 2013",
    idStr: "414168751798366208",
    content:
      'J Dilla - Two Can Win: <a href="http://youtu.be/jMu47CsLm0M">http://youtu.be/jMu47CsLm0M</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 19 13:00:37 +0000 2013",
    idStr: "413655105175425024",
    content:
      'Main Source - Looking At The Front Door: <a href="http://youtu.be/z3aRrokORjY">http://youtu.be/z3aRrokORjY</a> via @youtube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 18 18:00:35 +0000 2013",
    idStr: "413368210142932992",
    content:
      'David Steindl-Rast: Want to be happy? Be grateful <a href="http://on.ted.com/bukx">http://on.ted.com/bukx</a> #TED',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 15 11:26:11 +0000 2013",
    idStr: "412181792431407104",
    content:
      '"#FirstWorldProblems are not problems". What starts as ironic humour soon becomes normalised through overuse. <a href="http://www.youtube.com/watch?v=fxyhfiCO_XQ">http://www.youtube.com/watch?v=fxyhfiCO_XQ</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 05 20:10:02 +0000 2013",
    idStr: "408689742260084736",
    content:
      "Done enough workwork for today, so it's time to leave work and go home to do homework.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 05 19:39:34 +0000 2013",
    idStr: "408682074187767808",
    content:
      'Fantastic picture and caption combination... <div class="gallery"><ul><li><a href="../../tweets_media/408682074187767808-BavuLjzIQAAcS26.jpg"><img src="../../tweets_media/408682074187767808-BavuLjzIQAAcS26.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 04 12:44:08 +0000 2013",
    idStr: "408215141977575424",
    content:
      "... I'm surprised by the lack of dominance by the latter though, considering how rare the former is.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 04 12:42:54 +0000 2013",
    idStr: "408214831716515840",
    content:
      "Very interesting; 'mensiversary' versus 'monthly anniversary'. Loving logical morphology, I favour the former. <a href=\"https://books.google.com/ngrams/graph?content=mensiversary%2Cmonthly+anniversary&year_start=1800&year_end=2008&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Cmensiversary%3B%2Cc0%3B.t1%3B%2Cmonthly%20anniversary%3B%2Cc0\">https://books.google.com/ngrams/graph?content=mensiversary%2Cmonthly+anniversary&year_start=1800&year_end=2008&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Cmensiversary%3B%2Cc0%3B.t1%3B%2Cmonthly%20anniversary%3B%2Cc0</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 03 18:26:38 +0000 2013",
    idStr: "407938947458039808",
    content:
      '<div class="gallery"><ul><li><a href="../../tweets_media/407938947458039808-BalKT4oIUAE030Z.jpg"><img src="../../tweets_media/407938947458039808-BalKT4oIUAE030Z.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 03 18:26:16 +0000 2013",
    idStr: "407938852494782464",
    content:
      '<div class="gallery"><ul><li><a href="../../tweets_media/407938852494782464-BalKOXOIYAEv4hH.jpg"><img src="../../tweets_media/407938852494782464-BalKOXOIYAEv4hH.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 02 18:54:40 +0000 2013",
    idStr: "407583610993377281",
    content:
      "In true happiness, I believe fun is second to making a positive impact, which in turn is second to love.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 01 16:34:35 +0000 2013",
    idStr: "407185969993891840",
    content:
      'No album, where did that come from? <div class="gallery"><ul><li><a href="../../tweets_media/407185969993891840-Baade3ECAAA807M.jpg"><img src="../../tweets_media/407185969993891840-Baade3ECAAA807M.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 30 16:09:58 +0000 2013",
    idStr: "406817388907474945",
    content:
      "I've had a week of aesthetic obsessiveness, making a Prezi on Cornish for my MA and a slideshow on World AIDS Day/the LGBT Staff Network.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 30 00:16:39 +0000 2013",
    idStr: "406577481014317056",
    content:
      'Check out this very useful, interesting and informative guide to cultural food in York by @HigherYork: <a href="http://higheryork.org/study/living-in-york/shopping/cultural-food-outlets/">http://higheryork.org/study/living-in-york/shopping/cultural-food-outlets/</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 23 19:58:01 +0000 2013",
    idStr: "404338066418307073",
    content:
      'Where\'d that come from? <div class="gallery"><ul><li><a href="../../tweets_media/404338066418307073-BZx_VDVIUAAcXJx.jpg"><img src="../../tweets_media/404338066418307073-BZx_VDVIUAAcXJx.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 17 17:39:47 +0000 2013",
    idStr: "402128950354137088",
    content:
      "Listening to D'Angelo's 'Brown Sugar' and 'Voodoo' as a single entity is a phenomenal aural experience.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 15 22:01:37 +0000 2013",
    idStr: "401470065947578368",
    content:
      '... Professor David Maughan Brown);<br>- had a few drinks (well, four hours\' worth) with colleagues.<br><a href="http://www.youtube.com/watch?v=ViK8PwbJmxo">http://www.youtube.com/watch?v=ViK8PwbJmxo</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 15 22:01:09 +0000 2013",
    idStr: "401469947546587136",
    content:
      "... but it's Howard Webb), which included two standing ovations for two phenomenal people (@martine_wright and...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 15 22:00:17 +0000 2013",
    idStr: "401469731707691008",
    content:
      "- shook Howard Webb's hand, processed behind him and sat next to him through the afternoon ceremony (not into football...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 15 21:59:40 +0000 2013",
    idStr: "401469575109173248",
    content:
      "- popped to @ElPianoYork to pick up a take-away lunch, and ate it inside the Minster;",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 15 21:58:48 +0000 2013",
    idStr: "401469359555477504",
    content:
      "So, today I:<br>- rushed over to the Minster after my seminars in time to catch @RyRyPB coming out of his graduation ceremony;",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 14 22:22:50 +0000 2013",
    idStr: "401113017636495361",
    content: "(3/3) * not including phrases, such as 'how come' or 'how far'",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 14 22:22:40 +0000 2013",
    idStr: "401112974892359680",
    content:
      "(2/3) how = in what way | when = at what time | where = in what location | who/m = which sentient being | why = for what reason",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 14 22:21:09 +0000 2013",
    idStr: "401112594544480257",
    content:
      "(1/3) Hypothesis: all question words* can be substituted for 'what' or 'which' plus other words.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 13 22:18:46 +0000 2013",
    idStr: "400749606511722496",
    content: "@iwilsonysj ... the ingredients.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 05 22:20:42 +0000 2013",
    idStr: "397850989757079552",
    content:
      "'Kids React To Gay Marriage' In New Video From The Fine Brothers <a href=\"http://huff.to/1aY7cCE\">http://huff.to/1aY7cCE</a> via @HuffPostGay",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 05 22:16:44 +0000 2013",
    idStr: "397849993173663745",
    content:
      "November is not only Movember, it's also World Vegan Month. Grow a moustache and try a vegan lifestyle all at once.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 29 21:36:48 +0000 2013",
    idStr: "395303227077693440",
    content:
      "Very much enjoyed hearing the inspiring stories of heroic black figures of recent centuries at #blackhistorymonthysj.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon May 31 03:33:32 +0000 2021",
    idStr: "1399207390684274697",
    content:
      '👏👏👏 <a href="https://twitter.com/GrildChzGrill/status/1399092983887110145">https://twitter.com/GrildChzGrill/status/1399092983887110145</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 29 18:34:38 +0000 2021",
    idStr: "1398709383291363332",
    content:
      'Source: <a href="https://www.gov.uk/government/publications/marriage-and-civil-partnership-in-england-and-wales/marriage-and-civil-partnership-in-england-and-wales-accessible-version">https://www.gov.uk/government/publications/marriage-and-civil-partnership-in-england-and-wales/marriage-and-civil-partnership-in-england-and-wales-accessible-version</a><br><br>[5/5]',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 29 18:34:37 +0000 2021",
    idStr: "1398709381240393741",
    content:
      '4: for adultery-motivated divorce, regardless of the genders of the married people, only cheating with "someone of the opposite [sic] sex" counts, and sexual polyamory/consensual non-monogamy would seemingly be grounds for divorce<br><br>[4/5; homophobia, polyamphobia]',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 29 18:34:37 +0000 2021",
    idStr: "1398709379675865097",
    content:
      "3: you can annul (void) the marriage if either person had an STI on wedding day, if either gets a gender recognition certificate or - *only* in 'opposite sex' marriages - if you haven't had sex since marrying<br><br>[3/5; slut-shaming, transphobia, acephobia, homophobia]",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 29 18:34:37 +0000 2021",
    idStr: "1398709377973080075",
    content:
      "2: on the certificate, until recently 'the' father of each person would be named; now 'the' father and mother<br><br>[2/5; patriarchy, sexism, children as property, homophobia]",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 29 18:34:36 +0000 2021",
    idStr: "1398709376463032328",
    content:
      'Some weird UK marriage things I found randomly reading the government\'s webpage today...<br><br>1: marriage notices, which must be given before marriage, display your "condition" and "occupation"<br><br>[1/5; ableism, classism]',
    favouriteCount: "5",
    retweetCount: "1",
  },
  {
    createdAt: "Sat May 29 15:06:53 +0000 2021",
    idStr: "1398657102952943618",
    content: "@BobWulff Oh the second image suggests the latter...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 23 18:48:28 +0000 2013",
    idStr: "393086539321720832",
    content:
      'If you are on giffgaff, or if you are interested, check out my friend\'s tool: giffgaff best tariff calculator <a href="http://giffgaff.screet.co.uk">http://giffgaff.screet.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 20 20:26:34 +0000 2013",
    idStr: "392024060764225536",
    content:
      "Does anyone have any tips for making ironing an intellectually-stimulating activity (on top of its current OCD-satisfying function)?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 19 18:27:41 +0000 2013",
    idStr: "391631754814951424",
    content:
      "Imagine a world where the highest salary was only 1.5 times the lowest; career progression would have more noble motives.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 19 17:08:53 +0000 2013",
    idStr: "391611923634356225",
    content:
      "I wonder if one day vehicles and houses will become Android (or similar) 'devices' that we log into with our Google (or similar) accounts.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 12 12:40:37 +0000 2013",
    idStr: "389007698618249216",
    content: "[aɪm gəʊɪŋ tuː siː bluː velvɪt wɪθ maɪ brʌðɜː tuːdeɪ]",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 21:14:30 +0000 2013",
    idStr: "386962694483353600",
    content: "@helenashead ... and interesting articles.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 21:14:20 +0000 2013",
    idStr: "386962652297064448",
    content:
      "@helenashead ... and I did find the first half of Fresh to be particularly commendable, with a mix of amusing, thought-provoking, useful...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 20:52:22 +0000 2013",
    idStr: "386957123919167488",
    content:
      "@helenashead Anyway, it's only my opinion; I'm sure many gain pleasure reading or contributing and there were a few articles of interest.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 20:40:27 +0000 2013",
    idStr: "386954124962439168",
    content:
      "@helenashead ... pointed out, but I feel when about thirteen of thirty-two pages make some reference to sex/drink/clubbing, it's too much.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 20:33:05 +0000 2013",
    idStr: "386952272392892416",
    content:
      "@helenashead ... think it's a reason not to run such an article, but it does somewhat serve to reinforce the other-ness of such a lifestyle.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 20:29:28 +0000 2013",
    idStr: "386951363604660224",
    content: "@helenashead ... in a new environment.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 20:29:14 +0000 2013",
    idStr: "386951301407322112",
    content:
      "@helenashead especially in the minds of freshers, many of which are only beginning their journey towards realising their identity...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 20:27:54 +0000 2013",
    idStr: "386950967175827456",
    content:
      "@helenashead ... dominance it is given is just too much. Also, there is a case to argue that the content dictates the interest...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 20:23:28 +0000 2013",
    idStr: "386949851734241280",
    content:
      "@jem_face @YorkVision ... the content to be significantly over-weighted towards that side of the culture. It's not exactly inspiring stuff.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 20:14:50 +0000 2013",
    idStr: "386947680141725696",
    content:
      ".@YorkVision seems shockingly keen to accept, reinforce and encourage the stereotypical drawing of students as sex- and drink-obsessed.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 06 10:49:06 +0000 2013",
    idStr: "386805306035937280",
    content:
      'Sign my second cousin\'s petition to make ecocide fifth crime banned under the Rome Statute of the ICC: <a href="http://campaigns.350.org/petitions/ecocide-is-a-crime-against-peace-and-needs-an-additional-international-law-to-stop-it?source=twitter-share-button">http://campaigns.350.org/petitions/ecocide-is-a-crime-against-peace-and-needs-an-additional-international-law-to-stop-it?source=twitter-share-button</a> via @350',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 05 18:24:59 +0000 2013",
    idStr: "386557648054648832",
    content:
      'Fascinating: James Flynn: Why our IQ levels are higher than our grandparents\' <a href="http://on.ted.com/emyC">http://on.ted.com/emyC</a> #TED via @tedtalks',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 05 10:02:02 +0000 2013",
    idStr: "386431074760663040",
    content:
      "Weekly shopping, specific shopping, @UniOfYork/@yorkunisu Freshers' Fair, learning to efficiently assimilate information... much to do.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 26 17:43:19 +0000 2013",
    idStr: "383285668925161472",
    content: "Learning to read.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 26 07:24:22 +0000 2013",
    idStr: "383129906453815296",
    content:
      '"#Hashtag" with Jimmy Fallon &amp; Justin Timberlake: <a href="http://youtu.be/57dzaMaouXA">http://youtu.be/57dzaMaouXA</a> via @LateNightJimmy @jimmyfallon @jtimberlake @questlove',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 24 14:26:52 +0000 2013",
    idStr: "382511456954363904",
    content: "Inadvertently attended an open day at @UniOfYork.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 24 14:26:15 +0000 2013",
    idStr: "382511299457847296",
    content:
      '<div class="gallery"><ul><li><a href="../../tweets_media/382511299457847296-BU7z__ZCQAAB9g4.jpg"><img src="../../tweets_media/382511299457847296-BU7z__ZCQAAB9g4.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 23 12:43:14 +0000 2013",
    idStr: "382122987308453889",
    content:
      "My last @YorkPride meeting tonight. If you're interested in taking my place as Secretary, come along: 19:30, top floor of Thomas's of York.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 23 12:40:03 +0000 2013",
    idStr: "382122188314509312",
    content: "Discovered yesterday that @RyRyPB is a closet HTML geek.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 14 12:51:19 +0000 2013",
    idStr: "378863531761737728",
    content:
      'Mick Hucknall\'s dancing and hair was so far ahead of its time that twenty two years on the trend is yet to emerge: <a href="http://youtu.be/DMgVS2j05HA">http://youtu.be/DMgVS2j05HA</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 11 21:21:25 +0000 2013",
    idStr: "377904740799361024",
    content:
      "Nearly three and a half hours into my second meeting of the day at which the governing document of an LGBT group is being scrutinised.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 11 13:27:28 +0000 2013",
    idStr: "377785466650501120",
    content:
      "It's surprisingly manageable to take minutes on a Nexus 7 (a seven-inch tablet) without using an external keyboard.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 10 19:23:38 +0000 2013",
    idStr: "377512710843273216",
    content:
      'Survey: A quarter of people in the UK disagree with homosexuality, but acceptance continues to rise <a href="http://www.pinknews.co.uk/2013/09/10/survey-a-quarter-of-people-in-the-uk-disagree-with-homosexuality-but-acceptance-continues-to-rise/">http://www.pinknews.co.uk/2013/09/10/survey-a-quarter-of-people-in-the-uk-disagree-with-homosexuality-but-acceptance-continues-to-rise/</a> via @PinkNews',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 10 13:14:58 +0000 2013",
    idStr: "377419933468327937",
    content:
      '"I have been starved out, felt up, teased, stalked, threatened and called Taylor Swift" @OITNB',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 10 10:49:04 +0000 2013",
    idStr: "377383216044593152",
    content:
      ".@netflix is to TV series binging what Walter White's blue meth is to addicts in @BreakingBad_AMC.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 09 11:38:34 +0000 2013",
    idStr: "377033284578209792",
    content:
      "Bearded twenty-something-year-old males clearly get preferential treatment in Apple store recruitment selection processes.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 09 11:36:41 +0000 2013",
    idStr: "377032808528900096",
    content:
      "What makes a better obstacle course out of a flock of tourists or a flock of elderly people?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 06 16:42:46 +0000 2013",
    idStr: "376022676328185856",
    content:
      "I just saw 'Where your number 1' on the side of a van. #CrimesAgainstLanguage",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 05 07:40:16 +0000 2013",
    idStr: "375523761627623424",
    content:
      'Use your feet. <div class="gallery"><ul><li><a href="../../tweets_media/375523761627623424-BTYg3v0IAAAllw5.jpg"><img src="../../tweets_media/375523761627623424-BTYg3v0IAAAllw5.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 04 09:57:08 +0000 2013",
    idStr: "375195819772620801",
    content:
      'I love that this is in the Oxford English Dictionary: <a href="http://oxforddictionaries.com/definition/english/boyf">http://oxforddictionaries.com/definition/english/boyf</a> via @OxfordWords',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 31 12:46:43 +0000 2013",
    idStr: "373788942489100289",
    content: "Heading to @YUMIYork!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 30 19:35:29 +0000 2013",
    idStr: "373529425578844160",
    content: "... with a touch of funk.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 30 19:34:52 +0000 2013",
    idStr: "373529270980988928",
    content: "Fabulous classic soul and R&amp;B at Plonkers.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 30 09:09:56 +0000 2013",
    idStr: "373372002226417664",
    content:
      "Can we not stop acting like Neanderthals in trying to resolve conflict? Don't fight fire with fire. #Syria",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 28 14:58:56 +0000 2013",
    idStr: "372735051709960192",
    content:
      'York Pride honours memory of transgender singer Chrisie Edkins in charity fundraiser <a href="http://www.pinknews.co.uk/2013/08/27/york-pride-honours-memory-of-transgender-singer-chrisie-edkins-in-charity-fundraiser/">http://www.pinknews.co.uk/2013/08/27/york-pride-honours-memory-of-transgender-singer-chrisie-edkins-in-charity-fundraiser/</a> via @PinkNews and @YorkPride',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 27 19:35:29 +0000 2013",
    idStr: "372442259968372737",
    content:
      'A photo of many vegetables... <div class="gallery"><ul><li><a href="../../tweets_media/372442259968372737-BSsuQx1CMAAJtTG.jpg"><img src="../../tweets_media/372442259968372737-BSsuQx1CMAAJtTG.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 27 17:29:08 +0000 2013",
    idStr: "372410466464985088",
    content: "Becoming a bearded brother.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 27 15:12:56 +0000 2013",
    idStr: "372376186766110721",
    content: "I believe the best films have very little non-diegetic sound.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 27 11:13:53 +0000 2013",
    idStr: "372316028098707456",
    content: "Just had that moment when you reply to an email you've sent.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 25 08:00:53 +0000 2013",
    idStr: "371542685456158720",
    content:
      'Erykah Badu - Cleva (Live): <a href="http://youtu.be/u2Kys3AFhqA">http://youtu.be/u2Kys3AFhqA</a> via @fatbellybella',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 23 07:49:01 +0000 2013",
    idStr: "370814920642035713",
    content:
      "Listening to 'Black on Both Sides' by @YasiinBey (then Mos Def) #ClassicHipHop",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 20 17:13:46 +0000 2013",
    idStr: "369869883783139329",
    content:
      '‘This closet is suffocating’, the life story of a young gay Muslim in Pakistan <a href="http://www.pinknews.co.uk/2013/07/31/this-closet-is-suffocating-the-life-story-of-a-young-gay-muslim-in-pakistan/">http://www.pinknews.co.uk/2013/07/31/this-closet-is-suffocating-the-life-story-of-a-young-gay-muslim-in-pakistan/</a> via @PinkNews and @Saaadiiii',
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Aug 20 16:03:38 +0000 2013",
    idStr: "369852233707315200",
    content: "Enrolled as a @UniOfYork student.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 18 11:39:46 +0000 2013",
    idStr: "369061052404617217",
    content:
      'Streamlined my website structure a bit: <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 17 16:59:30 +0000 2013",
    idStr: "368779128935182336",
    content:
      "...drinking milk subsidises the veal industry: male calves often taken from mothers, 3-18 weeks chained in tiny stalls, raised for veal.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 17 16:49:21 +0000 2013",
    idStr: "368776573136023552",
    content:
      '... "Cow\'s Milk: A Cruel and Unhealthy Product" <a href="http://bit.ly/n4XiWf">http://bit.ly/n4XiWf</a>  via @peta',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 17 16:47:45 +0000 2013",
    idStr: "368776170541551617",
    content:
      "Cows can live to about 20; factory farm conditions make them useless to the dairy industry by 4 or 5, at which point they're slaughtered.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 16 12:04:54 +0000 2013",
    idStr: "368342601197715456",
    content: "Goodbye volunteering. See you in two years.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 14 15:44:59 +0000 2013",
    idStr: "367673213574066176",
    content:
      "Looks like I'll be studying towards an MA in Linguistics at @UniOfYork come October.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 14 13:20:12 +0000 2013",
    idStr: "367636774782107649",
    content:
      'Stephen Fry compares Daily Mail Editor Paul Dacre to Mussolini in Sochi argument <a href="http://www.pinknews.co.uk/2013/08/13/stephen-fry-compares-daily-mail-editor-paul-dacre-to-mussolini-in-sochi-argument/">http://www.pinknews.co.uk/2013/08/13/stephen-fry-compares-daily-mail-editor-paul-dacre-to-mussolini-in-sochi-argument/</a> via @PinkNews',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 12 12:41:55 +0000 2013",
    idStr: "366902366131339265",
    content: "Royal School of Church Music... whatever floats your boat.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 12 12:40:14 +0000 2013",
    idStr: "366901940757602305",
    content: "Not much of a stop-and-chat kind of guy.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 12 12:11:49 +0000 2013",
    idStr: "366894792250114050",
    content:
      'Excellent Google translation: "...our Embrace England host and coordinator organizes the storage of all of our students in suitable hosts".',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 10 14:07:28 +0000 2013",
    idStr: "366199119523491840",
    content:
      "Listening to some LGBT poetry in Persian at York Lesbian Arts Festival.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 09 10:21:22 +0000 2013",
    idStr: "365779832849711104",
    content:
      'Stephen Fry warns David Cameron: Putin is making scapegoats of gay people, just as Hitler did Jews <a href="http://www.pinknews.co.uk/2013/08/07/stephen-fry-compares-russian-winter-olympics-to-nazi-hosted-1936-olympics-in-letter-to-david-cameron/">http://www.pinknews.co.uk/2013/08/07/stephen-fry-compares-russian-winter-olympics-to-nazi-hosted-1936-olympics-in-letter-to-david-cameron/</a> via @PinkNews',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 03 08:42:06 +0000 2013",
    idStr: "363580523525832704",
    content:
      'Photographers and filmmakers, there\'s a good deal on Canon lenses at @Groupon for the next few days: <a href="http://www.groupon.co.uk/in/,24960292">http://www.groupon.co.uk/in/,24960292</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 02 21:47:47 +0000 2013",
    idStr: "363415857495408641",
    content:
      'Jessie Ware - Live in Coachella (2013): <a href="http://youtu.be/LHuhfrnzyuY">http://youtu.be/LHuhfrnzyuY</a> via @Jessie_Ware',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 02 20:11:03 +0000 2013",
    idStr: "363391516577771521",
    content:
      "I don't like multiple versions of the same album. It would be more tidy to release additional tracks on a separate compilation album.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 20 08:28:59 +0000 2013",
    idStr: "358503791097679872",
    content:
      'Peter Tatchell: There are still aspects of discrimination in the equal marriage bill <a href="http://www.pinknews.co.uk/2013/07/17/peter-tatchell-there-are-still-aspects-of-discrimination-in-the-equal-marriage-bill/">http://www.pinknews.co.uk/2013/07/17/peter-tatchell-there-are-still-aspects-of-discrimination-in-the-equal-marriage-bill/</a> via @PinkNews',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 17 11:22:15 +0000 2013",
    idStr: "357460232143781890",
    content:
      'Display for a drop-in session on the staff LGBT network at @YorkStJohn. <div class="gallery"><ul><li><a href="../../tweets_media/357460232143781890-BPX0L-6CQAEZwYS.jpg"><img src="../../tweets_media/357460232143781890-BPX0L-6CQAEZwYS.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 15 10:09:06 +0000 2013",
    idStr: "356717047893340160",
    content:
      'Track of the Week (w/c 15th July 2013) | <a href="http://bit.ly/14Thy2Y">http://bit.ly/14Thy2Y</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 08 10:04:50 +0000 2013",
    idStr: "354179259889225728",
    content:
      'Track of the Week (w/c 8th July 2013) | <a href="http://REDACTED.co.uk/totw-080713/">http://REDACTED.co.uk/totw-080713/</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 01 10:03:46 +0000 2013",
    idStr: "351642277950652416",
    content:
      'Track of the Week (w/c 1st July 2013) | <a href="http://REDACTED.co.uk/totw-010713/">http://REDACTED.co.uk/totw-010713/</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 24 10:04:07 +0000 2013",
    idStr: "349105648996327424",
    content:
      'Track of the Week (w/c 24th June 2013) | <a href="http://bit.ly/11YmBvr">http://bit.ly/11YmBvr</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 23 11:47:38 +0000 2013",
    idStr: "348769312036777984",
    content:
      'Requiring slightly more effort to put something in landfill waste than recycling is subtle, yet no doubt effective. <div class="gallery"><ul><li><a href="../../tweets_media/348769312036777984-BNcT12jCcAAOUwl.jpg"><img src="../../tweets_media/348769312036777984-BNcT12jCcAAOUwl.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Jun 22 22:00:41 +0000 2013",
    idStr: "348561203527811073",
    content:
      "Alan Sugar: \"BS like 'I'm the greatest entrepreneur since sliced bread'\" - I didn't realise sliced bread was an entrepreneur.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 22 21:54:22 +0000 2013",
    idStr: "348559613324570624",
    content:
      "Think I might regret starting to watch another series of the contrived, formulaic, capitalist pantomime known as The Apprentice.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 22 18:20:45 +0000 2013",
    idStr: "348505855282511873",
    content:
      "Been looking at academic books for about forty five minutes. That's longer than I ever managed in three years of my undergraduate degree.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 19 20:49:20 +0000 2013",
    idStr: "347456084409200640",
    content: "Today I swallowed my first tablet.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 18 12:22:32 +0000 2013",
    idStr: "346966153765203968",
    content:
      "Looking for (a nice pair of) vegan shoes (for everyday use) is quite a task.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 17 21:56:49 +0000 2013",
    idStr: "346748291700105216",
    content:
      'Track of the Week (w/c 17th June 2013) | <a href="http://bit.ly/17TWSvw">http://bit.ly/17TWSvw</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 17 18:57:48 +0000 2013",
    idStr: "346703238197809154",
    content:
      "The two Nile Rodgers (@nilerodgers) and Pharrell WIlliams (@Pharrell) tracks stand out the most on first listen of Random Access Memories.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 10 10:26:41 +0000 2013",
    idStr: "344037897076363264",
    content:
      'Track of the Week (w/c 10th June 2013) | <a href="http://bit.ly/13RiEu8">http://bit.ly/13RiEu8</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 06 06:14:04 +0000 2013",
    idStr: "342524775668785152",
    content:
      "Off to a NUCCAT termly meeting today and a @YorkCVS Think Space event on generating income from community service tonight.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jun 04 17:48:23 +0000 2013",
    idStr: "341974727289622529",
    content:
      "Try standing over a glass or mug and pouring a drink with one eye closed.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 03 12:15:34 +0000 2013",
    idStr: "341528582788632576",
    content:
      'Pictures I took of the #YorkPride13 (@YorkPride) parade: <a href="http://www.yorkpride.org.uk/gallery/york-pride-2013-out-in-sport/parade-york-pride-2013/">http://www.yorkpride.org.uk/gallery/york-pride-2013-out-in-sport/parade-york-pride-2013/</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 03 10:11:46 +0000 2013",
    idStr: "341497428245102592",
    content:
      'Track of the Week (w/c 3rd June 2013) | <a href="http://bit.ly/11gph75">http://bit.ly/11gph75</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 03 07:45:57 +0000 2013",
    idStr: "341460732380053504",
    content:
      'Able-bodied people rely on cars way too much. It\'s just lazy on a day like this. <div class="gallery"><ul><li><a href="../../tweets_media/341460732380053504-BL0cuhqCAAEGmOo.jpg"><img src="../../tweets_media/341460732380053504-BL0cuhqCAAEGmOo.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 02 11:46:59 +0000 2013",
    idStr: "341159002475991041",
    content:
      "Whoops, time to start preparing for 7th June 2014, not 8th June 2014! (@YorkPride)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 01 19:27:11 +0000 2013",
    idStr: "340912430483927040",
    content:
      "So that's @YorkPride done for another year / so it's time to start planning 8th June 2014.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 01 09:02:52 +0000 2013",
    idStr: "340755316029415424",
    content: "Time for @YorkPride 2013.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 31 19:06:32 +0000 2013",
    idStr: "340544844533477376",
    content:
      'So it\'s @York pride tomorrow. Details at <a href="http://yorkpride.org.uk/york-pride-2013/">http://yorkpride.org.uk/york-pride-2013/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 26 16:06:23 +0000 2021",
    idStr: "1397584913042452482",
    content:
      'Thread <a href="https://twitter.com/mixosaurus/status/1397515512989552644">https://twitter.com/mixosaurus/status/1397515512989552644</a>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 26 16:00:01 +0000 2021",
    idStr: "1397583307550887938",
    content:
      'Yup, that\'s how the story went <a href="https://twitter.com/JuliaFtacek/status/1395351103991070721">https://twitter.com/JuliaFtacek/status/1395351103991070721</a>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 26 14:49:58 +0000 2021",
    idStr: "1397565679126122498",
    content:
      'From a list of objectionable things at pride events. 1000% truth <a href="https://twitter.com/mixosaurus/status/1397515516202426373">https://twitter.com/mixosaurus/status/1397515516202426373</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 31 11:52:57 +0000 2013",
    idStr: "340435731233255425",
    content: "Reading the dictionary.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 27 10:26:40 +0000 2013",
    idStr: "338964462813999105",
    content:
      'Track of the Week (w/c 27th May 2013) | <a href="http://bit.ly/13YvuFt">http://bit.ly/13YvuFt</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 26 21:08:30 +0000 2013",
    idStr: "338763600158154752",
    content:
      "Half-way through first listen of 'Black Radio' by @robertglasper. It's one truly beautiful audial experience.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 25 12:13:03 +0000 2013",
    idStr: "338266458658336768",
    content:
      'Not quite sunk in how soon Pride is yet; "@YorkPride: One week to go!! #Excited"',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 25 07:51:36 +0000 2013",
    idStr: "338200664960282624",
    content:
      'I\'m in the paper with @YorkPride  today "@yorkpress: York’s two top sporting clubs show support for gay parade <a href="http://bit.ly/1ai5lFd">http://bit.ly/1ai5lFd</a>"',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 23 10:23:24 +0000 2013",
    idStr: "337514091285475328",
    content: "Capitalisation!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 20 10:48:42 +0000 2013",
    idStr: "336433294528880640",
    content:
      'Track of the Week (w/c 20th May 2013) | <a href="http://bit.ly/12OA4Hi">http://bit.ly/12OA4Hi</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 16 16:25:12 +0000 2013",
    idStr: "335068422016737280",
    content:
      'The vegan stay-at-work-and-eat-in-the-canteen-to-escape-the-rain diet. <div class="gallery"><ul><li><a href="../../tweets_media/335068422016737280-BKZm9F5CIAEnLEb.jpg"><img src="../../tweets_media/335068422016737280-BKZm9F5CIAEnLEb.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 16 13:57:40 +0000 2013",
    idStr: "335031296222957569",
    content:
      "@owenwalker3 ... ah - I see @david3012 made comment. @groble @lauren_ld91 @D0m_Sm1th We may need to append an update to the vox pops.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 15 20:06:50 +0000 2013",
    idStr: "334761814334251008",
    content:
      "The second two digits equal double the first two digits in the three-digit numbers 124 and 248.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 14 20:46:03 +0000 2013",
    idStr: "334409292692221953",
    content:
      "Listening to J Dilla's 'Donuts'. Before that I listened to @KarriemRiggins' 'Alone Together'. Evening of hip hop beat tapes.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 13 12:48:46 +0000 2013",
    idStr: "333926795399282688",
    content:
      'Track of the Week (w/v 13th May 2013) | <a href="http://bit.ly/16ubsJp">http://bit.ly/16ubsJp</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 12 15:37:39 +0000 2013",
    idStr: "333606906780344321",
    content: "Think I'm going to train myself to be ambidextrous.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 10 20:54:28 +0000 2013",
    idStr: "332961862494855168",
    content:
      "Dear followers, please listen to 'Funky For You' by @common featuring @Bilal and @missjillscott: <a href=\"http://www.youtube.com/watch?v=UPpxpGf-LzQ\">http://www.youtube.com/watch?v=UPpxpGf-LzQ</a>. Yours ahimsally.",
    favouriteCount: "13",
    retweetCount: "15",
  },
  {
    createdAt: "Fri May 10 10:51:20 +0000 2013",
    idStr: "332810079214657537",
    content:
      "Equally enlightening talk from @wicaksono at @YSJDiversity, whetting my appetite for further linguistic study.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 10 10:48:11 +0000 2013",
    idStr: "332809284968660993",
    content:
      "At the @YSJDiversity Awareness Day. Very interesting keynote from Professor Robert Garvey.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 06 16:56:54 +0000 2013",
    idStr: "331452525255471104",
    content: "Think I'm going to need to start making music again soon.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 06 16:11:42 +0000 2013",
    idStr: "331441149443194880",
    content:
      'Track of the Week (w/c 6th May 2013) | <a href="http://bit.ly/18pFWLx">http://bit.ly/18pFWLx</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 05 14:56:44 +0000 2013",
    idStr: "331059893605912577",
    content:
      "=CONCATENATE([late childhood friend of Eminem and member of D12],'reading.')",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 02 16:59:00 +0000 2013",
    idStr: "330003499414859777",
    content:
      'Sign the petition to support the trial closure of Lendal Bridge to non-essential vehicles: <a href="http://democracy.york.gov.uk/mgEPetitionDisplay.aspx?ID=206">http://democracy.york.gov.uk/mgEPetitionDisplay.aspx?ID=206</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 02 15:00:03 +0000 2013",
    idStr: "329973566290403329",
    content: "Good day's filming done, now time to steward the Spark fun run.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 01 09:53:07 +0000 2013",
    idStr: "329533934302023681",
    content: "Too many ampersands!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 01 08:36:56 +0000 2013",
    idStr: "329514763010854912",
    content:
      'Please help support Green Party England &amp; Wales, add a #Twibbon now! <a href="http://twb.ly/RxEtHJ">http://twb.ly/RxEtHJ</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 01 08:36:40 +0000 2013",
    idStr: "329514697810395136",
    content:
      'Please help support HRC\'s #UnitedForMarriage, add a #Twibbon now! <a href="http://twb.ly/13t0vHr">http://twb.ly/13t0vHr</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 30 21:01:10 +0000 2013",
    idStr: "329339668191670272",
    content:
      'Great to see @D0m_Sm1th\'s cheerful and uplifting nature recognised in The @Independent on Sunday Happy List 2013! <a href="http://goo.gl/IkrJA">http://goo.gl/IkrJA</a>',
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Apr 30 20:31:09 +0000 2013",
    idStr: "329332115130970112",
    content:
      "Things like this should be permanent: 'Artists cover up tunnel with wallpaper' <a href=\"http://www.yorkpress.co.uk/news/10388440.Artists_cover_up_tunnel_with_wallpaper/\">http://www.yorkpress.co.uk/news/10388440.Artists_cover_up_tunnel_with_wallpaper/</a> @DeborahBowness",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 29 10:11:40 +0000 2013",
    idStr: "328813826990542848",
    content:
      'Track of the Week (w/c 29 April 2013) | <a href="http://bit.ly/153xX8h">http://bit.ly/153xX8h</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 28 19:28:04 +0000 2013",
    idStr: "328591459114700800",
    content:
      'Tree in the river. <div class="gallery"><ul><li><a href="../../tweets_media/328591459114700800-BI9kMO0CUAAGLS2.jpg"><img src="../../tweets_media/328591459114700800-BI9kMO0CUAAGLS2.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 26 19:48:09 +0000 2013",
    idStr: "327871741017862146",
    content:
      'Why you should vote Green: <a href="https://www.youtube.com/watch?v=4BcCi7Xr06M">https://www.youtube.com/watch?v=4BcCi7Xr06M</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 22 17:13:06 +0000 2013",
    idStr: "326383171996381184",
    content:
      "Anyone recommend a good shoulder rig for a 550D (hot shoe) for under £100?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 22 10:48:37 +0000 2013",
    idStr: "326286413299597312",
    content:
      'Track of the Week (w/c 22nd April 2013) | <a href="http://bit.ly/ZDou2p">http://bit.ly/ZDou2p</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 21 14:56:18 +0000 2013",
    idStr: "325986355106701313",
    content:
      'Great equal marriage speech by @williamson_nz: <a href="http://www.youtube.com/watch?v=pCDEiaoEP2U">http://www.youtube.com/watch?v=pCDEiaoEP2U</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 20 20:08:59 +0000 2013",
    idStr: "325702657190813696",
    content:
      "The first thing that comes to mind when I see the initialism BGT is sandwiches.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 20 20:05:32 +0000 2013",
    idStr: "325701791419346945",
    content:
      "Think I must have done a full day's work worth of volunteering today. Just need to summon the energy to walk home now.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 15 21:15:06 +0000 2013",
    idStr: "323907353844006913",
    content:
      'Being vegan doesn\'t mean losing recipes. <div class="gallery"><ul><li><a href="../../tweets_media/323907353844006913-BH7ABa6CQAEXHLX.jpg"><img src="../../tweets_media/323907353844006913-BH7ABa6CQAEXHLX.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 15 10:26:34 +0000 2013",
    idStr: "323744148249264128",
    content:
      'Track of the Week (w/c 15th April 2013) | <a href="http://bit.ly/114K1Rq">http://bit.ly/114K1Rq</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 13 22:32:39 +0000 2013",
    idStr: "323202097816408066",
    content: "@NYBrassBand and / or videographer at any future performances.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 11 17:06:24 +0000 2013",
    idStr: "322395215233163264",
    content:
      'Great deal... <div class="gallery"><ul><li><a href="../../tweets_media/322395215233163264-BHlgvXmCIAA3eK4.jpg"><img src="../../tweets_media/322395215233163264-BHlgvXmCIAA3eK4.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 09 22:38:23 +0000 2013",
    idStr: "321753988276039680",
    content:
      "\"If there's a cure for this, I don't want it, don't want it. If there's a remedy, I'll run from it, from it.\" <a href=\"http://www.youtube.com/watch?v=pZ2AjROAnv0\">http://www.youtube.com/watch?v=pZ2AjROAnv0</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 08 10:11:24 +0000 2013",
    idStr: "321203617015160832",
    content:
      'Track of the Week (w/c 8th April 2013) | <a href="http://bit.ly/12yukFN">http://bit.ly/12yukFN</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 02 21:32:41 +0000 2013",
    idStr: "319200739270483968",
    content: "Listening to Mama's Gun by @fatbellybella. It's just too good.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 01 10:26:24 +0000 2013",
    idStr: "318670678016540672",
    content:
      'Track of the Week (w/c 1st April 2013) | <a href="http://bit.ly/X83mQY">http://bit.ly/X83mQY</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 31 20:44:45 +0000 2013",
    idStr: "318463902398681088",
    content: "@josiahmortimer Looks like you can!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 31 20:44:08 +0000 2013",
    idStr: "318463747159113729",
    content:
      'Please help support Green Party England &amp; Wales, add a #Twibbon now! <a href="http://twb.ly/RxEtHJ">http://twb.ly/RxEtHJ</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 31 20:30:54 +0000 2013",
    idStr: "318460417255014400",
    content:
      'Please help support HRC\'s #UnitedForMarriage, add a #Twibbon now! <a href="http://twb.ly/13t0vHr">http://twb.ly/13t0vHr</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 27 21:22:07 +0000 2013",
    idStr: "317023752389021696",
    content:
      "@DanielRidsdale @greg2802 ... as the 'YSJSU Liaison Officer' you are invited to all future meetings.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 27 19:24:26 +0000 2013",
    idStr: "316994138748899331",
    content: "Time to minute my second three-hour-ish meeting of the day.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 27 12:32:35 +0000 2013",
    idStr: "316890493101420544",
    content:
      "I think the most common mistake I come across when proofreading is random capitalisation.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 26 14:41:49 +0000 2013",
    idStr: "316560627353124864",
    content:
      'Rapper A$AP Rocky: ‘It’s crazy’ that homosexuality is even an issue in hip-hop <a href="http://www.pinknews.co.uk/2013/03/25/rapper-aap-rocky-its-crazy-that-homosexuality-is-even-an-issue-in-hip-hop/">http://www.pinknews.co.uk/2013/03/25/rapper-aap-rocky-its-crazy-that-homosexuality-is-even-an-issue-in-hip-hop/</a> via @PinkNews',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 26 14:38:24 +0000 2013",
    idStr: "316559767659245569",
    content:
      'Mindful Matters - Giving People a Voice: <a href="http://youtu.be/G8Y1EJhir3E">http://youtu.be/G8Y1EJhir3E</a> via @TheYorkMind @D0m_Sm1th @lauren_ld91 @DanCamp4 @RolleyTom and @yndajas',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Mar 25 20:30:37 +0000 2013",
    idStr: "316286017332183040",
    content: "Just watched @GossipBoySeries. Slightly addictive...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 25 17:31:44 +0000 2013",
    idStr: "316241000802701318",
    content: "... and more work on @YHGreens newsletter.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 25 17:30:59 +0000 2013",
    idStr: "316240810028965888",
    content: "Tonight: vegan carbonara, take two.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 25 10:26:24 +0000 2013",
    idStr: "316133959534788610",
    content:
      'Track of the Week (w/c 25th March 2013) | <a href="http://bit.ly/ZOOMgW">http://bit.ly/ZOOMgW</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 24 19:37:25 +0000 2013",
    idStr: "315910240812036096",
    content:
      "Listening to @FatouDiawara and working on redesigning the @YHGreens newsletter.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 23 19:50:18 +0000 2013",
    idStr: "315551094363283456",
    content:
      'Talking about the importance of partnerships in mental health provision: Mindful Matters - Partnerships: <a href="http://youtu.be/Zb3cEaB_d6Q">http://youtu.be/Zb3cEaB_d6Q</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 18 17:19:58 +0000 2013",
    idStr: "313701321968582658",
    content: "Time for Aviva Pride.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 18 16:43:15 +0000 2013",
    idStr: "313692083175174144",
    content:
      'Second episode of Mindful Matters: <a href="http://www.youtube.com/watch?v=Zb3cEaB_d6Q">http://www.youtube.com/watch?v=Zb3cEaB_d6Q</a> via @TheYorkMind @D0m_Sm1th @lauren_ld91 @DanCamp4 @RolleyTom and @yndajas',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Mar 18 13:44:22 +0000 2013",
    idStr: "313647063491551232",
    content:
      'That took a while. <div class="gallery"><ul><li><a href="../../tweets_media/313647063491551232-BFpMV6yCIAAgWLj.png"><img src="../../tweets_media/313647063491551232-BFpMV6yCIAAgWLj.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 18 10:11:22 +0000 2013",
    idStr: "313593463721570304",
    content:
      'Track of the Week (w/c 18th March 2013) | <a href="http://bit.ly/133NuUw">http://bit.ly/133NuUw</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 17 23:25:57 +0000 2013",
    idStr: "313431036396711936",
    content:
      'David &amp; Tre\'Darrius Anderson Wedding 01.18.13: <a href="http://youtu.be/FXOUXJ7DD8w">http://youtu.be/FXOUXJ7DD8w</a> via @_ItsTrey and @GuysWithPride',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Mar 11 21:20:24 +0000 2013",
    idStr: "311225115629195264",
    content:
      '(Something I\'ve been working on.) Mindful Matters - Combatting Stigma: <a href="http://youtu.be/FUhQmNZceWE">http://youtu.be/FUhQmNZceWE</a> via @TheYorkMind',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 11 15:12:40 +0000 2013",
    idStr: "311132573420097537",
    content: "Managed to slip a little rhyme into a report.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 11 10:26:34 +0000 2013",
    idStr: "311060572164747264",
    content:
      'Track of the Week (w/c 11th March 2013) | <a href="http://bit.ly/ZeH5Q0">http://bit.ly/ZeH5Q0</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 10 16:28:33 +0000 2013",
    idStr: "310789281243344896",
    content: "नमस्ते",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 20 05:24:54 +0000 2021",
    idStr: "1395249148329406465",
    content:
      '👀 <a href="https://twitter.com/AchmatX/status/1395099803873333258">https://twitter.com/AchmatX/status/1395099803873333258</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 15 04:25:36 +0000 2021",
    idStr: "1393422287655800837",
    content: "Queen and Slim is underrated.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 06 18:41:50 +0000 2013",
    idStr: "309373272422768640",
    content:
      "Indeed RT @YorkPride: York Pride meeting tonight! Lots of exciting things to discuss!!!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 04 10:26:28 +0000 2013",
    idStr: "308523834858934272",
    content:
      'Track of the Week (w/c 4th March 2013) | <a href="http://bit.ly/162M0bG">http://bit.ly/162M0bG</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 03 12:31:46 +0000 2013",
    idStr: "308192977413623808",
    content: "Time to deliver @YorkGreens GreenLights.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 02 22:18:16 +0000 2013",
    idStr: "307978186032041985",
    content:
      '<a href="http://s.macgasm.net/wp-content/uploads/2012/02/copy-paste-job.jpg">http://s.macgasm.net/wp-content/uploads/2012/02/copy-paste-job.jpg</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 02 21:07:54 +0000 2013",
    idStr: "307960479559585793",
    content:
      'Budget fury of York\'s Green party councillors (From York Press) <a href="http://www.yorkpress.co.uk/news/10263484.Budget_fury_of_York_s_Green_party_councillors/?ref=twtrec">http://www.yorkpress.co.uk/news/10263484.Budget_fury_of_York_s_Green_party_councillors/?ref=twtrec</a> @yorkgreens',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 02 12:11:28 +0000 2013",
    idStr: "307825483293261824",
    content:
      'Darn Good Docs #1 | <a href="http://bit.ly/Wwowub">http://bit.ly/Wwowub</a> | <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 01 23:29:21 +0000 2013",
    idStr: "307633688269692928",
    content: "I am independently a vegan and socially a vegetarian.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 01 11:32:53 +0000 2013",
    idStr: "307453382988292096",
    content:
      'Oddities of English <a href="http://hub.me/a3lq">http://hub.me/a3lq</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 01 10:06:22 +0000 2013",
    idStr: "307431610909868032",
    content: "Deciphering code at work.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 28 22:27:27 +0000 2013",
    idStr: "307255721991495680",
    content:
      "... and commiserations to all the excellent candidates who fell short. You haven't lost anything. @YSJSU",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 28 22:25:26 +0000 2013",
    idStr: "307255216640774144",
    content:
      "Looks to be a very good team of sabbaticals at @YSJSU next year, supported by some excellent faculty chairs. Well done everyone.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 28 00:01:29 +0000 2013",
    idStr: "306916999798329345",
    content:
      "A certain catch-up service just decided to advertise the programme I'm watching to me. Clever.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 26 12:01:22 +0000 2013",
    idStr: "306373388870512641",
    content: "Just received a text message sent to me two days ago.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 25 13:33:53 +0000 2013",
    idStr: "306034282772713472",
    content:
      'Fleet Foxes - Mykonos | Track of the Week (w/c 25th February 2013) | Ynda Jas <a href="http://REDACTED.co.uk/totw-250213/">http://REDACTED.co.uk/totw-250213/</a> via @yndajas',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 25 12:26:18 +0000 2013",
    idStr: "306017275469778944",
    content: "At @ysjsu Question time in the library.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 25 11:56:56 +0000 2013",
    idStr: "306009882459533312",
    content:
      '"Capital punishment: why using random capitals is a crime!" <a href="http://www.jonathancrossfield.com/blog/2010/01/capital-punishment-why-using-random-capitals-is-a-crime.html">http://www.jonathancrossfield.com/blog/2010/01/capital-punishment-why-using-random-capitals-is-a-crime.html</a> via @Kimota',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 24 11:08:05 +0000 2013",
    idStr: "305635201353134080",
    content:
      "Back at work on @TheYorkMind videos, hoping to get them ready to export (for review) whilst I do some surverying with @YorkGreens later.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 23 20:42:46 +0000 2013",
    idStr: "305417437879361536",
    content: "Can @idriselba release this? @DJTrevorNelson @1Xtra",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Feb 23 20:28:05 +0000 2013",
    idStr: "305413743318298624",
    content: "Stringer Bell on @1Xtra !",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 23 13:08:06 +0000 2013",
    idStr: "305303018855862272",
    content:
      'MT @yorkpress: @YorkGreens in call for energy firm initiative <a href="http://bit.ly/1312XDZ">http://bit.ly/1312XDZ</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 23 00:31:16 +0000 2013",
    idStr: "305112554873683968",
    content:
      "Hoping to finally get back to work on @TheYorkMind videos this weekend.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 21 19:51:11 +0000 2013",
    idStr: "304679682647916544",
    content: "For me, being vegan is easy.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 20 17:16:47 +0000 2013",
    idStr: "304278439601528832",
    content:
      'Call Me Kuchu, a great film documenting Uganda\'s LGBT rights struggle, is released on Monday. <a href="http://callmekuchu.co.uk/">http://callmekuchu.co.uk/</a> #callmekuchu @dogwoof',
    favouriteCount: "0",
    retweetCount: "3",
  },
  {
    createdAt: "Mon Feb 18 22:41:03 +0000 2013",
    idStr: "303635266332147712",
    content: "At The Pink Pony for the first time ever.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 17 23:05:41 +0000 2013",
    idStr: "303279078956482560",
    content:
      'Hiya! <a href="http://www.youtube.com/watch?v=UUEnl3QNAkc&t=27m23s">http://www.youtube.com/watch?v=UUEnl3QNAkc&t=27m23s</a> via @charltonbrooker',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 10 19:15:26 +0000 2013",
    idStr: "300684416722808832",
    content:
      'I was born in the year of the goat. <div class="gallery"><ul><li><a href="../../tweets_media/300684416722808832-BCw-4kiCMAASunf.jpg"><img src="../../tweets_media/300684416722808832-BCw-4kiCMAASunf.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 10 18:10:21 +0000 2013",
    idStr: "300668040616476672",
    content: "At my first ever Chinese New Year event at @YSJSU",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 09 11:34:32 +0000 2013",
    idStr: "300206042011275264",
    content:
      'Black Thought Freestyling with ?uestlove (@questlove) : <a href="http://youtu.be/so4TuqRSye4">http://youtu.be/so4TuqRSye4</a> via @youtube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 08 17:31:15 +0000 2013",
    idStr: "299933425694040064",
    content: "Just saw male couple holding hands for the first time in ages.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 08 14:57:00 +0000 2013",
    idStr: "299894607775424512",
    content:
      "Just had some raisins for the first time in probably more than a decade.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 07 21:44:26 +0000 2013",
    idStr: "299634751004889088",
    content:
      "Cody ChesnuTT's guitar on The Roots' 'The Seed 2.0' is a prime example of rock styling complementing the Hip Hop genre.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 07 21:42:58 +0000 2013",
    idStr: "299634383533514753",
    content:
      "... great examples of classical stylings working well to complement the Hip Hop form.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 07 21:42:31 +0000 2013",
    idStr: "299634271545610241",
    content:
      "The intro (or interlude) to Kanye West's 'All of the Lights' track and the four part movement at the end of The Roots 'Undun' album are...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 07 21:38:01 +0000 2013",
    idStr: "299633138349522944",
    content:
      "... or a dramatic scene within a subtle and/or tense film), but not as a form themselves (e.g. rock music, classical music or blockbusters).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 07 21:37:39 +0000 2013",
    idStr: "299633044086747136",
    content:
      "For me, drama and spectacle only work as styles within a form (e.g. rock-style guitar or classical-style strings in Hip Hop music...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 07 12:47:20 +0000 2013",
    idStr: "299499586307887104",
    content:
      "My internal voice has become that of Aiden Gillen's, from his Queer as Folk character rather than Tommy Carcetti in The Wire.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 06 23:14:12 +0000 2013",
    idStr: "299294955858444288",
    content:
      "I have two different alarms that go off seven times each on weekday mornings.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 06 13:17:12 +0000 2013",
    idStr: "299144715989811200",
    content:
      'Natalie Bennett (@natalieben): After Gay Marriage, the Next Step Should Be Heterosexual Partnerships <a href="http://huff.to/11UG27S">http://huff.to/11UG27S</a> via @HuffPostUKPol',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 05 23:29:06 +0000 2013",
    idStr: "298936314773008384",
    content:
      "... not my type of show. Hopefully the increased interest in Netflix it may draw will prompt more content to be brought to the UK catalogue.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 05 23:28:07 +0000 2013",
    idStr: "298936070047944704",
    content:
      "House of Cards presents a promising model for the future direction of audio-visual content distribution, but I got bored watching it.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 05 23:21:43 +0000 2013",
    idStr: "298934456776003584",
    content:
      'It\'s concerning that free schools must teach pupils "about the nature and importance of marriage for family life and bringing up children".',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 05 22:57:01 +0000 2013",
    idStr: "298928243526991873",
    content:
      "The image of a fistulated cow should make any reasonable person consider for how long we can continue commodifying and enslaving animals.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 04 13:25:51 +0000 2013",
    idStr: "298422116636827648",
    content:
      'Designers: logo competition for @TheYorkMind - <a href="http://www.yorkmind.org.uk/york-advocacy-logo-competition/">http://www.yorkmind.org.uk/york-advocacy-logo-competition/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 03 21:47:35 +0000 2013",
    idStr: "298185991708086272",
    content:
      "#FavouriteArtists #1 OutKast (inc. @BigBoi). #2 The Roots (@theroots inc. @questlove). #3 Erykah Badu (@fatbellybella).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 03 21:35:31 +0000 2013",
    idStr: "298182956969783298",
    content:
      'The fantastic @BARCODEZEBRA1 being fantastic: <a href="http://www.youtube.com/watch?v=QSzmLJ7yctc">http://www.youtube.com/watch?v=QSzmLJ7yctc</a> (via @JessGardham)',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Feb 03 21:24:27 +0000 2013",
    idStr: "298180172111294464",
    content:
      'Mmm tasty vegan chocolate. <div class="gallery"><ul><li><a href="../../tweets_media/298180172111294464-BCNZSWYCMAE7Yot.jpg"><img src="../../tweets_media/298180172111294464-BCNZSWYCMAE7Yot.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 03 18:10:10 +0000 2013",
    idStr: "298131277985509376",
    content:
      'Interesting infographic on equality, focused on gender, race and sexuality (via @Upworthy) <a href="http://www.upworthy.com/more-proof-that-history-isnt-made-up-solely-of-old-straight-white-men?g=2">http://www.upworthy.com/more-proof-that-history-isnt-made-up-solely-of-old-straight-white-men?g=2</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 02 21:44:14 +0000 2013",
    idStr: "297822762033102848",
    content:
      "Starting to have visions of bovine imprisonment when I look at chocolate.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 02 21:29:11 +0000 2013",
    idStr: "297818973125349377",
    content: "Where are you going?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 27 13:30:50 +0000 2013",
    idStr: "295524267938963457",
    content: "Where did all the snow go?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jan 26 17:43:17 +0000 2013",
    idStr: "295225410009038848",
    content:
      'This disgusts me: Beauty pageant for babies and children - <a href="http://www.yorkpress.co.uk/news/10187802.Beauty_pageant_for_babies_and_children_criticised/?ref=twtrec">http://www.yorkpress.co.uk/news/10187802.Beauty_pageant_for_babies_and_children_criticised/?ref=twtrec</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jan 26 07:24:47 +0000 2013",
    idStr: "295069759811227648",
    content:
      "Whoops. When I decided to watch the first episode of Queer as Folk, I didn't realise I would have to watch them all in one night.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jan 24 22:52:09 +0000 2013",
    idStr: "294578361760632832",
    content: "Going to miss the crazy little Sri Lankan girl.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jan 24 22:15:04 +0000 2013",
    idStr: "294569029522296834",
    content:
      "Attended a free meditation talk / class on the art of positive thinking by <br>Gen Kelsang Thekchen from Madhyamaka. Positively enlightening.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 22 09:18:20 +0000 2013",
    idStr: "293648782963400704",
    content:
      '<div class="gallery"><ul><li><a href="../../tweets_media/293648782963400704-BBNAAyWCYAAxAzE.png"><img src="../../tweets_media/293648782963400704-BBNAAyWCYAAxAzE.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 22 09:03:13 +0000 2013",
    idStr: "293644981644709889",
    content: "Walked to work in a semi-meditative state.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 22 02:03:10 +0000 2013",
    idStr: "293539268712882176",
    content:
      "This is why I don't consume the 'news': Chimamanda Adichie: The danger of a single story #TED : <a href=\"http://on.ted.com/thA\">http://on.ted.com/thA</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jan 19 19:56:43 +0000 2013",
    idStr: "292722272890925056",
    content: "Introvertly eccentric.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 18 21:12:13 +0000 2013",
    idStr: "292378886757560320",
    content: "... and my hopes remain just that.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 18 19:35:46 +0000 2013",
    idStr: "292354612856516608",
    content: "So... Evil Eye... I can only hope for pleasant service.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jan 17 22:25:18 +0000 2013",
    idStr: "292034891347017729",
    content:
      'The seriously amazing @reggiewatts <a href="http://www.youtube.com/watch?v=a2DXfKosT3s">http://www.youtube.com/watch?v=a2DXfKosT3s</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 16 22:53:55 +0000 2013",
    idStr: "291679705940254721",
    content: "In February I must learn to live below the poverty line.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 15 00:54:09 +0000 2013",
    idStr: "290985186009702400",
    content: "Is it too late to make use of HMV Pure points?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 14 22:27:14 +0000 2013",
    idStr: "290948213706469377",
    content:
      "I wish Apple would turn their technologically-revolutionary minds towards ironing.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 14 22:21:20 +0000 2013",
    idStr: "290946728964812800",
    content:
      "I wonder is HMV's 'blue cross sale' was a coincidental or a conscious metaphor. @hmvtweets #HMV",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 14 22:20:16 +0000 2013",
    idStr: "290946461326254081",
    content:
      "Not HMW! Bought something from there today. Surely very much due to the tax-avoidance-fuelled low prices of Amazon.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 14 20:57:17 +0000 2013",
    idStr: "290925576179552258",
    content: "Tomorrow marks my return to full-time work.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 27 21:13:43 +0000 2021",
    idStr: "1387153008040071174",
    content:
      'And now available in a web-based, mUlTiMeDiA summary form for free: <a href="https://twitter.com/yndajas/status/1387151594572156928">https://twitter.com/yndajas/status/1387151594572156928</a> [6/4]',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 27 21:08:57 +0000 2021",
    idStr: "1387151805633679370",
    content:
      '@reubsjw @LilySimpson1312 And here it is: <a href="https://twitter.com/yndajas/status/1387151594572156928">https://twitter.com/yndajas/status/1387151594572156928</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 27 21:08:06 +0000 2021",
    idStr: "1387151594572156928",
    content:
      '✨ Now available as a web-based, mUlTiMeDiA summary for free over at <a href="http://sexuality.yndajas.co">http://sexuality.yndajas.co</a>!<br><br>A presentation to @ysjulgbtstaff prompted me to create a more interactive, concise version of the article, but it\'s there for anyone to view.<br><br>See original article for prettier words ✨ <a href="https://twitter.com/yndajas/status/1299781485113864194">https://twitter.com/yndajas/status/1299781485113864194</a>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jan 14 00:32:16 +0000 2013",
    idStr: "290617290146332673",
    content:
      '¡Increíble! @reggiewatts on Russell Howard\'s Good News: <a href="http://youtu.be/wBc6XhTYGYU">http://youtu.be/wBc6XhTYGYU</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 13 23:18:37 +0000 2013",
    idStr: "290598758637510656",
    content: "I want to learn percussion and French.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 13 18:13:30 +0000 2013",
    idStr: "290521973816172544",
    content: "Today I went to Broadway and back.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 08 22:50:03 +0000 2013",
    idStr: "288779629001576451",
    content: "Time to watch another episode of Alan Bennett's Talking Heads.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 08 22:26:04 +0000 2013",
    idStr: "288773593914036225",
    content:
      'Respect to @therealgokwan for this. "Gok Wan: I want to do Strictly — but let me dance with a man <a href="http://www.pinknews.co.uk/2013/01/08/gok-wan-i-want-to-do-strictly-but-let-me-dance-with-a-man/">http://www.pinknews.co.uk/2013/01/08/gok-wan-i-want-to-do-strictly-but-let-me-dance-with-a-man/</a>" via @PinkNews',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jan 06 22:06:48 +0000 2013",
    idStr: "288043967386361856",
    content:
      "\"I'm just a soul whose intentions are good. Oh lord, please don't let me be misunderstood.\"",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jan 05 20:28:09 +0000 2013",
    idStr: "287656753317957632",
    content:
      "Now it's time to watch 'Beats Rhymes and Life: The Travels of A Tribe Called Quest' and eat @QuornFoods carbonara.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jan 05 20:27:19 +0000 2013",
    idStr: "287656543414001664",
    content:
      "Green Light delivered on behalf of @YorkGreens, later editing to do for @TheYorkMind and agenda to set for @YorkPride.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 04 00:16:37 +0000 2013",
    idStr: "286989474339123201",
    content:
      'Love that fact that, as a gay man, this is my favourite track on @BigBoi\'s new album: She Said Ok (Explicit): <a href="http://youtu.be/ORw8pOOyx7s">http://youtu.be/ORw8pOOyx7s</a>',
    favouriteCount: "6",
    retweetCount: "8",
  },
  {
    createdAt: "Thu Jan 03 20:08:08 +0000 2013",
    idStr: "286926940789669889",
    content:
      "Super rough cuts for @TheYorkMind encoding and tickets for @CityScreenYork ordered.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jan 03 19:33:48 +0000 2013",
    idStr: "286918301400039424",
    content: "Should I go to see Life of Pi tonight?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 02 23:41:33 +0000 2013",
    idStr: "286618262857469954",
    content: "Clapping is very primitive.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jan 02 18:51:15 +0000 2013",
    idStr: "286545207858692096",
    content:
      "Didn't realise I had a @YorkGreens  meeting tonight. Volunteering for @TheYorkMind postponed to tomorrow. #SoMuchThingsToDoRightNow",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 22:01:13 +0000 2013",
    idStr: "286230622664552448",
    content:
      'Dizzee Rascal - Bassline Junkie: <a href="http://youtu.be/D1gl46hh3sQ">http://youtu.be/D1gl46hh3sQ</a> via @youtube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 21:53:00 +0000 2013",
    idStr: "286228556097413120",
    content:
      "If you choose to call your autobiography 'My Story', I dread to think how dull the content must be.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 21:25:43 +0000 2013",
    idStr: "286221685571588096",
    content:
      'NOW That\'s What I Call Side Parting <div class="gallery"><ul><li><a href="../../tweets_media/286221685571588096-A_jdG0fCEAAWl2o.jpg"><img src="../../tweets_media/286221685571588096-A_jdG0fCEAAWl2o.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 21:22:24 +0000 2013",
    idStr: "286220848216543232",
    content:
      'Chalking Inside Out <div class="gallery"><ul><li><a href="../../tweets_media/286220848216543232-A_jcWFGCEAAEGqy.png"><img src="../../tweets_media/286220848216543232-A_jcWFGCEAAEGqy.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 16:36:16 +0000 2013",
    idStr: "286148848445968384",
    content:
      'In case you didn\'t get enough Hootenanny: Track of the Week (w/c 31st December 2012) | Ynda Jas <a href="http://REDACTED.co.uk/totw-311212/">http://REDACTED.co.uk/totw-311212/</a> via @yndajas',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 14:37:47 +0000 2013",
    idStr: "286119031663108099",
    content:
      "York St John (@YorkStJohn) is very much a polyamorous entity; many people fall in love with it and it welcomes each and every one of them.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 02:51:30 +0000 2013",
    idStr: "285941287398547456",
    content:
      "Sleeplessness isn't aided by the brilliance of the music of @BigBoi; must listen to the entire (deluxe) album before resting my head, daily.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 01:21:44 +0000 2013",
    idStr: "285918698601058304",
    content:
      "There's one more syllable to utter when vocally denoting this year, compared to last year.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 01:08:05 +0000 2013",
    idStr: "285915264405630976",
    content:
      "... she looks a bit like Corinne Bailey Rae and sounds velvety a bit like Esperanza Spalding.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 01:06:23 +0000 2013",
    idStr: "285914834384588800",
    content: "Lianne La Havas is classy #Hootenanny",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jan 01 00:47:41 +0000 2013",
    idStr: "285910131340881920",
    content:
      "Goodbye to a year I would Yaasin Bey look back at with ambivalence, but one that has, in many ways, been positively progressive.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 29 16:37:54 +0000 2012",
    idStr: "285062094179667968",
    content:
      'David Simon: Barack Obama And The Death Of Normal <a href="http://davidsimon.com/inevitabilities-and-barack-obama/">http://davidsimon.com/inevitabilities-and-barack-obama/</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Dec 28 18:36:29 +0000 2012",
    idStr: "284729549760114689",
    content: "Tremendous Damage (@bigboi) is @frank_ocean -esque.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 28 18:22:41 +0000 2012",
    idStr: "284726076335333377",
    content:
      'Which iPod Classic skin should I get? <a href="http://pinterest.com/yndajas/ipod-classic-skins/">http://pinterest.com/yndajas/ipod-classic-skins/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 28 17:30:26 +0000 2012",
    idStr: "284712926722531329",
    content:
      "No longer need to lug around four bags for filmmaking, got a new bag that can carry it all in one.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 28 16:10:36 +0000 2012",
    idStr: "284692836807499777",
    content: "Vicious Lies and Dangerous Rumors by @BigBoi is brilliant.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 26 18:50:05 +0000 2012",
    idStr: "284008197969305600",
    content:
      'Free music news app launched (From York Press) @soundspheremag <a href="http://www.yorkpress.co.uk/news/10127696.Free_music_news_app_launched/?ref=twtrec">http://www.yorkpress.co.uk/news/10127696.Free_music_news_app_launched/?ref=twtrec</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Dec 25 23:33:45 +0000 2012",
    idStr: "283717194985115649",
    content:
      'Track of the Week (w/c 24th December 2012) | Ynda Jas <a href="http://REDACTED.co.uk/totw-241212/">http://REDACTED.co.uk/totw-241212/</a> via @yndajas',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 25 21:55:12 +0000 2012",
    idStr: "283692396485677056",
    content: 'My Grandma: "Oh have they changed Opal Fruits?"',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 25 19:41:31 +0000 2012",
    idStr: "283658754841509889",
    content:
      "Just did a little bit of editing @groble #VolunteeringOnChristmasDay",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 25 12:53:15 +0000 2012",
    idStr: "283556008889032706",
    content: "@yndajas @TPX1138 @david3012 their*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 25 11:24:18 +0000 2012",
    idStr: "283533622416400384",
    content:
      "Trying to press the back button on my iPod Touch. #HalfAndroidHalfiOS",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 24 01:39:29 +0000 2012",
    idStr: "283024061313982465",
    content:
      "Listening to some old school @CalvinHarris and reading The Wire Re-up.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 24 00:59:48 +0000 2012",
    idStr: "283014074084769793",
    content:
      'Track of the Week (w/c 24th December 2012) | Ynda Jas <a href="http://REDACTED.co.uk/totw-241212/">http://REDACTED.co.uk/totw-241212/</a> via @yndajas',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 20 22:16:39 +0000 2012",
    idStr: "281885852639055872",
    content: "@yndajas @CityScreenYork Idlewild*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 26 15:03:23 +0000 2021",
    idStr: "1386697421233823754",
    content:
      'Skootish, the comedian <div class="gallery"><ul><li><a href="../../tweets_media/1386697421233823754-Ez6J9LYXsAQTaIi.jpg"><img src="../../tweets_media/1386697421233823754-Ez6J9LYXsAQTaIi.jpg"></a></li></ul></div>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 17 19:57:16 +0000 2021",
    idStr: "1383509890811908103",
    content:
      'Image description: textbook question reads "Answer the questions. What are three of the major regions in which Native Americans lived?" Answer in ink reads "we still live here." <a href="https://twitter.com/According2Luke/status/1383113274405752833">https://twitter.com/According2Luke/status/1383113274405752833</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 17 19:44:38 +0000 2021",
    idStr: "1383506708417241091",
    content:
      'Some overlap with my own reasons for consciously uncoupling with institutionalised academia, and moving towards more of an open relationship with structured scholarship. Lots of important issues that make academia pretty unwelcoming, let alone issues with the scholarship itself. <a href="https://twitter.com/ZJAyres/status/1383318038502526984">https://twitter.com/ZJAyres/status/1383318038502526984</a>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 19 00:12:36 +0000 2012",
    idStr: "281190256622047233",
    content:
      "The majority of people are meat-eaters, yet the majority of the majority's most highly regarded humans are or were vegetarian.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 17 22:28:22 +0000 2012",
    idStr: "280801639617671168",
    content:
      'Track of the Week (w/c 17th December 2012) | Ynda Jas <a href="http://REDACTED.co.uk/totw-171212/">http://REDACTED.co.uk/totw-171212/</a> via @yndajas',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 17 21:45:20 +0000 2012",
    idStr: "280790809702432768",
    content:
      "Anyone know of a place to buy a (preferably white) clapperboard in York?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 16 22:38:32 +0000 2012",
    idStr: "280441811305123840",
    content:
      "The Apprentice would be much better if it was a documentary and not a drama.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 16 19:39:44 +0000 2012",
    idStr: "280396812865646592",
    content:
      "Becoming nocturnal is not good when you work three and a half days in normal office hours.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 16 19:08:43 +0000 2012",
    idStr: "280389007312048128",
    content:
      "For me, The Wire's (biggest) brilliance is in avoiding glorification or demonisation of either side of 'the game'; favouring humanisation.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 16 19:01:09 +0000 2012",
    idStr: "280387100241698818",
    content:
      '... more so in the \'more\' recent pre-mid-2009 photos. It\'s clear from this photo that Jazz has always been influential. <div class="gallery"><ul><li><a href="../../tweets_media/280387100241698818-A-QilQYCIAAjARy.jpg"><img src="../../tweets_media/280387100241698818-A-QilQYCIAAjARy.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 16 18:53:37 +0000 2012",
    idStr: "280385205922062336",
    content:
      "I don't see much myself in pictures pre-mid-2009. It's almost like looking at a stranger.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 15 23:35:29 +0000 2012",
    idStr: "280093751987298304",
    content: "In music, 'rap' is a verb, not an noun.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 15 19:31:49 +0000 2012",
    idStr: "280032432839876609",
    content:
      "Imagine going on holiday and paying for a tour of France and being shown Yorkshire.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 15 16:16:34 +0000 2012",
    idStr: "279983299022163968",
    content: "Maximum wage, how about that?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 15 00:44:06 +0000 2012",
    idStr: "279748635942588418",
    content:
      "Album of the year win in the only 'newspaper' I respect for definitely my favourite 'new' artist of 2012 <a href=\"http://gu.com/p/3c96h/tw\">http://gu.com/p/3c96h/tw</a> via @guardian",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Dec 14 19:05:46 +0000 2012",
    idStr: "279663489059000321",
    content: "Enjoying a nice Marks and Spencer curry. Thanks David Fleming.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 10 22:38:34 +0000 2012",
    idStr: "278267489316642816",
    content:
      'Stop the government-takeover of our Internet #ITU #HandsOffInternet #WCIT @ITU - Sign urgent petition @Avaaz &amp;RT <a href="http://www.avaaz.org/en/hands_off_our_internet_i/?wtTUxdb">http://www.avaaz.org/en/hands_off_our_internet_i/?wtTUxdb</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 10 21:12:29 +0000 2012",
    idStr: "278245828370501633",
    content:
      "Reading about the slow food concept / way of life whilst tucking into a takeaway pizza.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 10 20:17:37 +0000 2012",
    idStr: "278232021082439684",
    content:
      'Track of the Week (w/c 10th December 2012) | Ynda Jas <a href="http://REDACTED.co.uk/totw-101212/">http://REDACTED.co.uk/totw-101212/</a>  via @yndajas @JoshKumra',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 10 18:12:36 +0000 2012",
    idStr: "278200557494231040",
    content:
      'Shocking <a href="http://upload.wikimedia.org/wikipedia/en/e/e1/Silver-Spring-monkey.jpg">http://upload.wikimedia.org/wikipedia/en/e/e1/Silver-Spring-monkey.jpg</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Dec 10 17:46:05 +0000 2012",
    idStr: "278193883588997120",
    content: "The world isn't getting bigger, but the population is.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 09 00:27:05 +0000 2012",
    idStr: "277570025651580928",
    content:
      "Same can be said for 'The East' and 'The West' and the tendency to be UK-centric in mapping standards.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 09 00:12:28 +0000 2012",
    idStr: "277566345950920706",
    content:
      "That image was from @vladstudio, a very good graphic designer / artist.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 09 00:09:42 +0000 2012",
    idStr: "277565649843261440",
    content:
      "There's no 'actual' top or bottom, just a perceived one from the image conjured by mapping standards.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 09 00:08:03 +0000 2012",
    idStr: "277565232514203648",
    content:
      "So the Arctic is only at the top, and the Antarctic is only at the bottom, relative to our world mapping standards.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 09 00:06:05 +0000 2012",
    idStr: "277564737825419265",
    content:
      "If there's no 'end' in space, that means there's no boundaries; without boundaries, there's no absolute top, bottom, left, or right.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 09 00:04:22 +0000 2012",
    idStr: "277564306961338372",
    content:
      'Interesting: <a href="http://www.vladstudio.com/wallpaper/?upside_down_world_map">http://www.vladstudio.com/wallpaper/?upside_down_world_map</a>. Questions the perception of absoluteness in geography, which is actually very relative.',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 06 16:00:08 +0000 2012",
    idStr: "276717671377170432",
    content:
      'Desmond Tutu: Uganda should drop ‘totally unjust’ anti-gay law <a href="http://www.pinknews.co.uk/2012/12/05/desmond-tutu-uganda-should-drop-totally-unjust-anti-gay-law/">http://www.pinknews.co.uk/2012/12/05/desmond-tutu-uganda-should-drop-totally-unjust-anti-gay-law/</a> via @PinkNews',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 05 21:34:19 +0000 2012",
    idStr: "276439382997729280",
    content:
      "It would be good if I could sync iTunes with my CD collection, so that it donates to charity the CD copy of albums I've deleted.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 05 21:29:45 +0000 2012",
    idStr: "276438231522869249",
    content: "Stripping back my iTunes music collection.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 05 21:28:43 +0000 2012",
    idStr: "276437972516225024",
    content:
      "In Bruges probably being my favourite film, I really want to go to see and love Seven Psychopaths; not sure either will happen.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Dec 05 18:51:36 +0000 2012",
    idStr: "276398431713497088",
    content: "Joined both the Android and the @giffgaff communities.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 02 22:40:55 +0000 2012",
    idStr: "275368977771933696",
    content:
      "Language is very much a fluid, evolutionary mass that both shapes and is shaped by use.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 02 18:55:17 +0000 2012",
    idStr: "275312195624120320",
    content:
      "Living without neither a TV nor Facebook is a very positive experience for the mind.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 02 18:41:26 +0000 2012",
    idStr: "275308711847800832",
    content:
      "Concerned by the recent tendency to not trust myself to remember my age without thinking it through.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 01 20:48:47 +0000 2012",
    idStr: "274978372159950848",
    content:
      "I would like to see busking introduced to the @YorkStJohn campus by @YSJSU.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 01 17:42:00 +0000 2012",
    idStr: "274931365156356096",
    content: "iTunes actually looks nice for the first time in my memory.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 26 19:58:58 +0000 2012",
    idStr: "273153895218413568",
    content:
      'Track of the week: <a href="http://REDACTED.co.uk/totw-261112">http://REDACTED.co.uk/totw-261112</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 24 17:09:26 +0000 2012",
    idStr: "272386455790297088",
    content:
      "It's dark and just gone 5pm; so far I have checked one thing off a (not all-encompassing) list of six things I need to get done.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 24 16:55:31 +0000 2012",
    idStr: "272382954746019840",
    content:
      "Facebook purges productivity, curtails creativity and emaciates emotion.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 24 15:59:37 +0000 2012",
    idStr: "272368886605828096",
    content: "Be the definer, not the defined.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 15 17:26:22 +0000 2012",
    idStr: "269129226832199680",
    content: "So... Desmond Tutu said 'Hi' to me today.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 14 21:39:40 +0000 2012",
    idStr: "268830583302529024",
    content:
      "@yndajas @galadriel1010 Ah spotted Sandi is the honorary graduate. Did you enjoy the ceremony? I saw you as you got your degree.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 13 20:07:38 +0000 2012",
    idStr: "268445034121162753",
    content:
      'I can make your documents a lot more red - <a href="http://REDACTED.co.uk">http://REDACTED.co.uk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 13 18:04:29 +0000 2012",
    idStr: "268414045323939840",
    content:
      'This is not coverage-worthy - <a href="http://tinyurl.com/cqbcbqb">http://tinyurl.com/cqbcbqb</a> - it\'s like the local equivalent of glossy magazine stories.',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 10 14:25:53 +0000 2012",
    idStr: "267271865351933953",
    content: "Most enlightened tweeter - @UncleRUSH",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 10 14:16:35 +0000 2012",
    idStr: "267269524921917441",
    content:
      "Check out the sweet sounds of my first 'Practically Perfect Producer' on my blog - <a href=\"http://REDACTED.co.uk/ppp-1/\">http://REDACTED.co.uk/ppp-1/</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 09 00:26:41 +0000 2012",
    idStr: "266698289070608384",
    content:
      "So pleased for one of my best friends and excited for a trip to India next summer!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 05 22:22:28 +0000 2012",
    idStr: "265579863224745984",
    content:
      "Dreaming of a Gary Johnson or Jill Stein presidential victory, but Barack Obama would suffice.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 05 20:59:37 +0000 2012",
    idStr: "265559014929215489",
    content: "@yndajas @owenwalker3 ?*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 05 01:09:20 +0000 2012",
    idStr: "265259470341410816",
    content: "Moderately addicted to incense.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 04 17:59:06 +0000 2012",
    idStr: "265151196044607488",
    content: "@yndajas And even come Wednesday.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 04 17:56:56 +0000 2012",
    idStr: "265150650667651072",
    content:
      "Hoping that come Friday the USA will have its first female president.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Nov 03 15:55:40 +0000 2012",
    idStr: "264757748699394049",
    content:
      'York Pride | ‘Call Me Kuchu’ – follows the life of David Kato   <a href="http://www.yorkpride.org.uk/call-me-kuchu-follows-the-life-of-david-kato/">http://www.yorkpride.org.uk/call-me-kuchu-follows-the-life-of-david-kato/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 17 19:23:22 +0000 2021",
    idStr: "1383501359043862535",
    content:
      'Google Scholar is "extremely neat [...] for getting up-to-date alerts about how your work was cited" (Raclaw 2021) <a href="https://twitter.com/joshraclaw/status/1383457738135543817">https://twitter.com/joshraclaw/status/1383457738135543817</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 08 22:49:58 +0000 2021",
    idStr: "1380291858341957633",
    content:
      'Does spelling out BISTO in your CV make you an immediate hire? <div class="gallery"><ul><li><a href="../../tweets_media/1380291858341957633-EyfHxWuWUAAxaRH.png"><img src="../../tweets_media/1380291858341957633-EyfHxWuWUAAxaRH.png"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 11 12:48:48 +0000 2021",
    idStr: "1369993710054825989",
    content:
      '"supporting evidence"<br><br>(also destroy royalty) <a href="https://t.co/V67awfZUyK">https://t.co/V67awfZUyK</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 27 19:42:06 +0000 2021",
    idStr: "1365749065183592451",
    content:
      "Went to website to order food. Ended up spending ten minutes dissecting the login flow...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 02 19:18:05 +0000 2012",
    idStr: "264446297644351488",
    content:
      "Anyone good at presenting or know anyone who is? Need to be a good interviewer and be comfortable with a serious tone. Please RT.",
    favouriteCount: "0",
    retweetCount: "3",
  },
  {
    createdAt: "Tue Oct 30 23:00:17 +0000 2012",
    idStr: "263415055549358080",
    content: "I love the olfactory effect of daily incense burning.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 29 09:35:20 +0000 2012",
    idStr: "262850095148576768",
    content: "@yndajas @jgarlin relates to*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 28 21:33:19 +0000 2012",
    idStr: "262668389049319424",
    content:
      'Simulcara timeline - Curb Your Enthusiasm @HBO @jgarlin <div class="gallery"><ul><li><a href="../../tweets_media/262668389049319424-A6UvgheCQAAGwTR.jpg"><img src="../../tweets_media/262668389049319424-A6UvgheCQAAGwTR.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 15 09:55:29 +0000 2012",
    idStr: "257781732739256320",
    content:
      "Truth -&gt; “@DalaiLama: Once you have a genuine sense of concern for others, there’s no room for cheating, bullying or exploitation.”",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 14 21:57:33 +0000 2012",
    idStr: "257601062633095168",
    content:
      "Just finished watching The Ugly Truth, a nice bit of light entertainment and then Notorious comes on. AKA entire evening gone.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 14 18:15:46 +0000 2012",
    idStr: "257545248002150402",
    content: "Woohoo, Fanta Orange no longer contains fish.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 14 13:49:18 +0000 2012",
    idStr: "257478186449907713",
    content:
      "Just observed people were actually visiting my old poetry blog. How embarrassing.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 14 12:53:15 +0000 2012",
    idStr: "257464081638907904",
    content:
      "Bathrooms are like rock bands. They're made up of three or four distinct (although somewhat similar) parts that stay in a set position.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 07 10:06:22 +0000 2012",
    idStr: "254885370813104128",
    content: "Looney Tunes!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 06 23:20:02 +0000 2012",
    idStr: "254722714500218880",
    content: "How can Frank Ocean be beaten by No Direction? Shocking.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 06 23:10:27 +0000 2012",
    idStr: "254720301475176448",
    content:
      "Never thought quality and original would be two words that spring to mind when listening to a JLS song. Sound like Justin Timberlake.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 06 23:09:12 +0000 2012",
    idStr: "254719987959341056",
    content:
      "I could cope with the mild discomfort of disorderly respect for artists, but a performance from Green Day was a step too far.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 06 22:54:15 +0000 2012",
    idStr: "254716226826301440",
    content: "Beyoncé at her best beaten by a hideous sellout...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 06 22:47:51 +0000 2012",
    idStr: "254714617463439360",
    content: "Followed by No Direction...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 06 22:47:33 +0000 2012",
    idStr: "254714539445198848",
    content:
      "Two fabulous Kanye West (and Jay Z on one) songs given less credit than a song with Lil' Wayne in. #whyihavenorespectforawardsshows",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 06 22:43:56 +0000 2012",
    idStr: "254713631290322944",
    content:
      "I must create a new word to describe @frank_ocean... Fabtastimastifabuluzomazinbeauboldbrayabadabadoo. #FrankOcean",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 25 10:37:26 +0000 2012",
    idStr: "250544533870370816",
    content: "Start my new job in just under two hours.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 24 19:32:17 +0000 2012",
    idStr: "250316746576248834",
    content:
      "Talk about all things York with @talkyork Read articles and find out about all the best events around the city.",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Sep 23 18:48:14 +0000 2012",
    idStr: "249943274196967424",
    content: "Cannot believe I'm just about to watch Grease...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 21 21:55:56 +0000 2012",
    idStr: "249265732444102656",
    content:
      "Earlier in the day, I had fun working / volunteering almost a full day with the infamous Belarusian on print and web design stuff.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 21 21:53:32 +0000 2012",
    idStr: "249265129600987138",
    content:
      "As a vegetarian who doesn't drink beer, I actually managed to enjoy attending a beer-tasting event that served sausage and mash.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 19 22:27:12 +0000 2012",
    idStr: "248548825059438593",
    content: "I used to think woodlice were walking raisins #iusedtothink",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Sep 19 17:30:43 +0000 2012",
    idStr: "248474211545395200",
    content:
      "Does anyone have a spare room or know anyone who does? Need somewhere from the weekend of the 28th.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 19 15:06:36 +0000 2012",
    idStr: "248437946427011072",
    content:
      "Volunteered at @YSJVolunteering's freshers' fair stall, got a new job at @YorkStJohn and going to a @YorkGreens meeting tonight. Good day.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Sep 18 15:28:17 +0000 2012",
    idStr: "248081015313158145",
    content:
      "Would really love a @gojicafe milkshake. Think there should be a takeaway option. May have to go to Milkshack instead.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 23 20:51:12 +0000 2021",
    idStr: "1364316906010853377",
    content:
      "@krisknisely @queerterpreter @kirbyconrod @joshraclaw @VerbingNouns tagging in case you're interested/because I value your thoughts on this stuff!",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 23 20:46:06 +0000 2021",
    idStr: "1364315621392023555",
    content:
      '"Gender beyond the binary: visualisation, language and conceptual frameworks"<br><br><a href="https://yndajas.co/articles/2021/02/19/gender-beyond-the-binary-visualisation-language-and-conceptual-frameworks">https://yndajas.co/articles/2021/02/19/gender-beyond-the-binary-visualisation-language-and-conceptual-frameworks</a><br><br>Just tentatively putting this new blog post out here while thinking about whether to do anything more with it. Comments/feedback welcome!',
    favouriteCount: "5",
    retweetCount: "3",
  },
  {
    createdAt: "Fri Feb 19 05:59:23 +0000 2021",
    idStr: "1362642918817861632",
    content:
      'Looking for images for an article on methods of visualising gender and Google suggests male comes before female...<br><br>---<br><br>Image description: Google search for "gender femaleness maleness scale" - Google asks "Did you mean: gender maleness femaleness scale" <div class="gallery"><ul><li><a href="../../tweets_media/1362642918817861632-EukT6nZXAAMHF_I.png"><img src="../../tweets_media/1362642918817861632-EukT6nZXAAMHF_I.png"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 15 22:40:50 +0000 2021",
    idStr: "1361445392609591303",
    content:
      'Yuck <a href="https://twitter.com/bnuuyes/status/1361040465215320070">https://twitter.com/bnuuyes/status/1361040465215320070</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Sep 17 12:36:38 +0000 2012",
    idStr: "247675427181707264",
    content:
      "Thinking of joining York Racial Equality Network. Love that you can choose a white, black or yellow background to their website.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 17 10:47:38 +0000 2012",
    idStr: "247647997574402048",
    content:
      "Worked out how to turn the heat on for the alternative shower only after moving the giant spider from the main one.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 16 14:52:45 +0000 2012",
    idStr: "247347295325138944",
    content:
      "Hope all the freshers are getting settled into their new home in York; welcome to York St John! #ysjfreshers12 #ysjfreshers2012",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 15 16:59:46 +0000 2012",
    idStr: "247016873806405632",
    content:
      'Mr. Wendal! So laid back. Track of the Week (w/c 10th September 2012) | Ynda Jas <a href="http://REDACTED.co.uk/track-of-the-week-wc-10th-september-2012/">http://REDACTED.co.uk/track-of-the-week-wc-10th-september-2012/</a> via @yndajas',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 14 13:01:56 +0000 2012",
    idStr: "246594630974582784",
    content:
      "According to their new publicity, the canteen now make live action cooked meals. I'd like to see the animated ones.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 13 13:05:25 +0000 2012",
    idStr: "246233120750317569",
    content:
      "Just got followed by someone who's description is 'Love hot gay porn'. Weird. I am gay and I am a filmmaker, but they are not combined!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 13 09:45:00 +0000 2012",
    idStr: "246182682810257408",
    content:
      "Definitely have to pick up Carly Rae Jepson's record released on Monday. #Hardcore",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 11 16:40:42 +0000 2012",
    idStr: "245562523800190976",
    content:
      "Would like to observe the introduction of a metric time system into society and our societal infrastructure.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 10 19:38:51 +0000 2012",
    idStr: "245244968648732672",
    content:
      'Fifth track of the week; another classic: Track of the Week (w/c 10th September 2012) | Ynda Jas <a href="http://REDACTED.co.uk/track-of-the-week-wc-10th-september-2012/">http://REDACTED.co.uk/track-of-the-week-wc-10th-september-2012/</a> via @yndajas',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 10 16:22:09 +0000 2012",
    idStr: "245195465522573312",
    content:
      "@yndajas @samtunney @adammcskimming @danielridsdale @cath_s_93 @harry_rimmer Faculty Chair Development Day?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 10 13:28:03 +0000 2012",
    idStr: "245151653202898944",
    content:
      'Which one do I get? <a href="http://pinterest.com/yndajas/wallets/">http://pinterest.com/yndajas/wallets/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 10 07:33:42 +0000 2012",
    idStr: "245062480081076224",
    content: "The smell of Lynx Africa reminds me of school; particularly PE.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 09 20:44:47 +0000 2012",
    idStr: "244899173974032384",
    content:
      "Thought this was the #Paralympics closing ceremony, not a Coldplay gig.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Sep 09 20:41:50 +0000 2012",
    idStr: "244898430126792704",
    content: "@yndajas @shmelen I'm*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 09 20:05:06 +0000 2012",
    idStr: "244889186434420737",
    content:
      "André Three Stacks in an advert, didn't expect to see that. #André3000GilletteAdvert",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 09 14:12:14 +0000 2012",
    idStr: "244800385175412736",
    content:
      "Off to deliver Green Light, the newsletter of @YorkGreens, to east side Groves.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 09 12:53:34 +0000 2012",
    idStr: "244780588660310016",
    content: "Oman; it's hot.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 08 20:13:17 +0000 2012",
    idStr: "244528858286678018",
    content:
      "Enjoyed the family reunion earlier but just got attacked by a deceptively spicy curry.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 07 12:51:40 +0000 2012",
    idStr: "244055333478203393",
    content: "On a train journey this evening for the fourth weekend in a row.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 07 10:46:29 +0000 2012",
    idStr: "244023831277215744",
    content: "My @VegetarianShoes arrived today. They're very shiny.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 06 22:05:15 +0000 2012",
    idStr: "243832257524166656",
    content:
      "Got a little over-enthusiastic about switching to a network provider and bank that are good on ethics and spent two hours researching.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 05 17:16:42 +0000 2012",
    idStr: "243397256982700032",
    content:
      "I like neither of these bands, but I would love to hear a Guns N' Roses cover of Abba's 'Dancing Queen'.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 05 16:22:53 +0000 2012",
    idStr: "243383711620558848",
    content:
      "Passed two final exams today, making me a Microsoft Office Specialist Master.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 05 16:21:59 +0000 2012",
    idStr: "243383486126383104",
    content:
      'Wow: <a href="http://www.pinknews.co.uk/2012/09/05/australian-christian-lobbyist-gays-shouldnt-be-allowed-to-marry-because-they-are-more-likely-to-smoke/">http://www.pinknews.co.uk/2012/09/05/australian-christian-lobbyist-gays-shouldnt-be-allowed-to-marry-because-they-are-more-likely-to-smoke/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 03 21:32:25 +0000 2012",
    idStr: "242736831710498816",
    content: "Just ordered some vegetarian shoes.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Sep 02 13:50:52 +0000 2012",
    idStr: "242258292255096833",
    content:
      "Had a great time in Leeds yesterday with some amazing people. Goodbye and good luck @SamRobinson86 and @Osireion !",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 31 22:02:57 +0000 2012",
    idStr: "241657355148857344",
    content: "Going to Tropical World in Leeds tomorrow.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 30 12:46:55 +0000 2012",
    idStr: "241155033553580032",
    content: "Where's the 'thanks for the warm up' attitude gone?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 30 12:44:50 +0000 2012",
    idStr: "241154512616845312",
    content:
      "Continual verbal reinforcement of how the Paralympics is just as good as the Olympics suggests an underlying attitude suspecting it isn't.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 29 19:50:28 +0000 2012",
    idStr: "240899237381029889",
    content: "I'd like to see @DizzeeRascal write a new national anthem.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 27 19:23:44 +0000 2012",
    idStr: "240167733394808832",
    content:
      "Really should start proof-reading my application forms. Hope I don't make the same mistakes in my spoken English at the interview tomorrow!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 27 16:34:05 +0000 2012",
    idStr: "240125041172414464",
    content:
      "Just trashed over a quarter of my music collection stored on iTunes (equating to about 11GB / 1800 songs); hoping for less skips on shuffle.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 27 10:39:03 +0000 2012",
    idStr: "240035694666452992",
    content:
      "Third video of the week blog post, this time featuring a 'beautiful' song from Franco-Moroccan singer @HindiZahra <a href=\"http://bit.ly/OnTVsL\">http://bit.ly/OnTVsL</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 24 19:46:25 +0000 2012",
    idStr: "239086279889920000",
    content:
      'Check out my latest blog post, featuring a "laid-back, quaint little track" from @BigBoi <a href="http://bit.ly/Od2ind">http://bit.ly/Od2ind</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 24 13:24:10 +0000 2012",
    idStr: "238990081740898304",
    content:
      'What a hero: "Psychological tests for trans pilots in US is abandoned owing to a one-woman campaign" <a href="http://www.pinknews.co.uk/2012/08/23/psychological-tests-for-trans-pilots-in-us-is-abandoned-owing-to-a-one-woman-campaign/">http://www.pinknews.co.uk/2012/08/23/psychological-tests-for-trans-pilots-in-us-is-abandoned-owing-to-a-one-woman-campaign/</a> via @PinkNews',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 23 17:10:33 +0000 2012",
    idStr: "238684666830389248",
    content:
      "As the card left my hand making its way  into the dark chasm of the postbox, I had the sudden realisation I'd only put half a postcode on.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 22 06:54:59 +0000 2012",
    idStr: "238167365760716801",
    content: "You know it's early when you turn on the TV and The Hoobs is on.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 21 18:23:47 +0000 2012",
    idStr: "237978318190809088",
    content: "House viewing at 07.15. Freshers are getting keen.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 21 18:15:11 +0000 2012",
    idStr: "237976156098404352",
    content:
      "Now a Microsoft Office Specialist in Access, Excel, Word, PowerPoint and Outlook and I have a job interview on Tuesday at York St John.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 18 12:01:01 +0000 2012",
    idStr: "236794830959820800",
    content:
      "Second birthday celebrations long after my actual birthday. I may be gay, but for once, I actually feel like a queen.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 18 08:24:03 +0000 2012",
    idStr: "236740228751187969",
    content: "Hope the open day at @YorkStJohn goes well today.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 17 14:54:28 +0000 2012",
    idStr: "236476092825890817",
    content: "Can't wait to ditch the boxed iPod earphones again.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 17 14:50:16 +0000 2012",
    idStr: "236475036238766080",
    content: "#FF @WebDesignSelby @YorkGreens @YSJActive @YorkPride",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 16 22:07:48 +0000 2012",
    idStr: "236222755278839809",
    content:
      "Congratulations to all the new @YorkPride officers. Great to meet you all and welcome to the team.",
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Aug 16 22:05:21 +0000 2012",
    idStr: "236222137759854592",
    content:
      "So I've signed my life away to @YorkPride for another year. Now to secure a job so I can stay in the city.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 16 09:12:25 +0000 2012",
    idStr: "236027624160366593",
    content:
      '"The ladies changing area also comes with hairdryer and the latest GHD hair straightners." Why only ladies? @eborfitness #GenderStereotyping',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 15 17:39:52 +0000 2012",
    idStr: "235792941380149251",
    content:
      "Off to a @YorkGreens meeting, then I'll be applying for a third job in three days.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 14 16:42:20 +0000 2012",
    idStr: "235416074265456640",
    content:
      "I'm going to sleep indefinitely. That sounds really sinister, but really I'm just not setting my alarm.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 14 11:02:23 +0000 2012",
    idStr: "235330522556014592",
    content:
      "Loving the fact that my website appears second in Google's search results already when you input 'yndajas' or 'Ynda Jas'. #REDACTED.co.uk",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 14 11:00:15 +0000 2012",
    idStr: "235329985961943040",
    content:
      "@yndajas @RyRyPB Translated literally as 'part for whole' or 'whole for part'.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 14 00:16:56 +0000 2012",
    idStr: "235168088516067328",
    content:
      "Should be asleep, but instead I'm having a milkshake and watching housemates play Singstar.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 13 20:30:31 +0000 2012",
    idStr: "235111110779473920",
    content:
      "According to this job application, I'm a Microsoft Office Socialist.",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Aug 13 19:14:21 +0000 2012",
    idStr: "235091940620775424",
    content:
      'My first blog post featuring @WeWereFrontiers - <a href="http://REDACTED.co.uk/video-of-the-week-wc-13th-august/">http://REDACTED.co.uk/video-of-the-week-wc-13th-august/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 13 18:32:06 +0000 2012",
    idStr: "235081309947576321",
    content:
      'There\'s a link to @ROGUEFRAME on my site: <a href="http://REDACTED.co.uk/associates/">http://REDACTED.co.uk/associates/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 13 18:31:52 +0000 2012",
    idStr: "235081253056040960",
    content:
      'There\'s a link to @YSJSU on my site: <a href="http://REDACTED.co.uk/associates/">http://REDACTED.co.uk/associates/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 13 18:31:34 +0000 2012",
    idStr: "235081175671115776",
    content:
      'There\'s a link to @YorkPride on my site: <a href="http://REDACTED.co.uk/associates/">http://REDACTED.co.uk/associates/</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Aug 13 17:06:22 +0000 2012",
    idStr: "235059733478899712",
    content:
      'Totally agree with this guy: \'Why I quit Facebook - <a href="http://NYPOST.com">http://NYPOST.com</a>\' <a href="http://nyp.st/xBqZ8L">http://nyp.st/xBqZ8L</a> via @NYPostOpinion',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 10 04:33:05 +0000 2021",
    idStr: "1359359711187992576",
    content:
      "I submit the following for due consideration by the Global Committee on the Proliferation of Neopronouns:<br>- shey/shem/sheir<br>- hey/hem/heir",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 12 22:41:55 +0000 2012",
    idStr: "234781791582552065",
    content:
      "Would've liked to see @speechdebelle in the closing ceremony. #London2012 #Olympics2012",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 12 22:37:39 +0000 2012",
    idStr: "234780715223502848",
    content:
      "So who's looking forward to the second half of #London2012? #It'sNotOver #Paralympics2012",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Aug 12 22:26:39 +0000 2012",
    idStr: "234777947079327745",
    content:
      "Unlike most, when I watch the closing ceremony I'm looking forward to Jessie J and will skip over Muse. #ActuallyTalented #GoodMusic",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 12 20:33:31 +0000 2012",
    idStr: "234749476034719745",
    content:
      "Looking through an old application form  that I got an interview for and noticed four spelling mistakes.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 12 20:03:39 +0000 2012",
    idStr: "234741960412385280",
    content:
      'Bolt has six fingers (including thumb)! #PhotoshopDisasters <a href="http://bit.ly/OjMjIL">http://bit.ly/OjMjIL</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 12 19:35:56 +0000 2012",
    idStr: "234734986371166209",
    content:
      "Michael Phelps has the most medals, but he competes in seven events; Bolt competes in three. It's not all about quantity. #GreatestAthlete",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 12 19:07:33 +0000 2012",
    idStr: "234727841332350978",
    content:
      "Slow motion visuals + emotionally-charged epic-ly spoken voice over + emotion-invoking music = BBC montage = 50% #London2012 coverage.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 12 15:37:11 +0000 2012",
    idStr: "234674902643396610",
    content:
      "Off to the library to work on job applications and listen to 'Graduation' by @kanyewest. Can't wait for his latest to come in the post.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 12 03:34:50 +0000 2012",
    idStr: "234493117687009280",
    content:
      "I love this song: <a href=\"http://www.youtube.com/watch?v=MSzXbBRHJrM\">http://www.youtube.com/watch?v=MSzXbBRHJrM</a>. First heard it in the brilliant film 'Snow Cake'.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 11 19:02:35 +0000 2012",
    idStr: "234364204948267009",
    content:
      "Just won a second gold medal and his mind thinks to promote charity. #MoFarah #GoMo #Olympics2012 #London2012",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 11 18:47:04 +0000 2012",
    idStr: "234360300613279744",
    content: "Go Mo! #Olympic2012 #London2012",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 11 15:50:21 +0000 2012",
    idStr: "234315827552342016",
    content:
      'Looking to buy some vegetarian shoes, but which should I choose? <a href="http://bit.ly/NgQzZG">http://bit.ly/NgQzZG</a> #Vegetarianism #VegetarianLife',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 11 11:09:49 +0000 2012",
    idStr: "234245228838658048",
    content: "Tumblr, Wordpress or something else?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 11 11:07:13 +0000 2012",
    idStr: "234244577517768704",
    content: "Need to apply for four jobs this weekend.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 11 02:22:01 +0000 2012",
    idStr: "234112404521365504",
    content: "Said an indefinite goodbye to Facebook.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 09 08:29:02 +0000 2012",
    idStr: "233479993370505216",
    content:
      "Only had an hour's sleep after going to #London2012 in order to get back to attend training on my week off. #dedicated #Olypmics #fb",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 07 00:43:25 +0000 2012",
    idStr: "232638041175506945",
    content:
      "Just saw a cute little mouse pop out from under the washing machine. Now I can hear it scuttling about. #fb",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 06 23:48:06 +0000 2012",
    idStr: "232624117667471361",
    content:
      "Noticed @YSJSU finally took down the last of my three display boards worth of stuff from Holgate.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 06 23:19:26 +0000 2012",
    idStr: "232616902797705217",
    content:
      "Maybe he was drawn in by the Rastifarian practice of smoking marijuana religiously.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 06 23:14:16 +0000 2012",
    idStr: "232615604962590721",
    content:
      "Snoop Lion... hmm. I think the years of marijuana consumption have got to him but at the same time the single is reasonable.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 06 11:33:18 +0000 2012",
    idStr: "232439202288132096",
    content:
      "Just looked at cable of the iPod earphones and noticed it says 'Vietnam'. Not 'Made in Vietnam', just 'Vietnam'.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 05 17:33:51 +0000 2012",
    idStr: "232167548773335040",
    content: "Off to see York Mystery Plays.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 05 15:40:22 +0000 2012",
    idStr: "232138989665148928",
    content:
      "Serena Williams, at 30, has won four titles at Wimbledon in one year.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 05 15:17:21 +0000 2012",
    idStr: "232133194848280576",
    content: "Yay Murray finally won a big title! #London2012 #MagicMurray",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 05 15:16:25 +0000 2012",
    idStr: "232132959849820161",
    content: "Yay Murray finally won a big title! #London2012 #MagicMurray #",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 05 15:05:46 +0000 2012",
    idStr: "232130281551822848",
    content:
      "Murray's saving his energy for his big match later. #London2012 #MagicMurray",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 04 21:08:45 +0000 2012",
    idStr: "231859239587549184",
    content:
      "Mo Farah, Olympic champion and the only person to beat The Cube; is there anyone greater?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 04 20:49:56 +0000 2012",
    idStr: "231854507728982017",
    content: "Happy for Mo Farah, such a nice guy, well deserved!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 04 18:57:46 +0000 2012",
    idStr: "231826276724379650",
    content:
      "The system for calculating positions in the Olympics medals table is a joke. Russia have 25 medals but are behind countries with 4 and 5.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 04 16:55:28 +0000 2012",
    idStr: "231795500167340033",
    content:
      "Spent half an hour in Topman deciding what was worth buying and an hour in HMV deciding what wasn't.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 04 13:46:10 +0000 2012",
    idStr: "231747862273343488",
    content:
      "Not quite sinked in yet that I'm off work next week. Wonder if I'll be any less busy than if I would be if I was at work. #SerialVolunteer",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 03 20:11:04 +0000 2012",
    idStr: "231482336359886849",
    content:
      "Ooh it's like a tag team match on @the1mpounddrop with @officialsteps! #millionpounddrop",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 03 12:57:53 +0000 2012",
    idStr: "231373323492286466",
    content:
      "Forgot quite how abominable the iPod earphones, the ones that come with the device, are.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 31 19:21:34 +0000 2012",
    idStr: "230382717060128769",
    content:
      "... Foss reception and overheard it was my birthday. I've appreciated each and every one of your birthday wishes.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 31 19:21:29 +0000 2012",
    idStr: "230382696155725824",
    content:
      "Thank you to everyone who has wished me happy birthday today, including the random person who was waiting in...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 30 22:37:16 +0000 2012",
    idStr: "230069578045210624",
    content:
      'Guillermo del Toro (thanks @TPX1138) looks like Jabba the Hut: <a href="http://tinyurl.com/crrzjnj">http://tinyurl.com/crrzjnj</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 30 21:55:42 +0000 2012",
    idStr: "230059118856114177",
    content: "Almost forgot that I turn 21 in just over an hour.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 27 16:14:01 +0000 2012",
    idStr: "228885964913799168",
    content: "(Real) Indian-made curry plus (real) Indian-chosen Indian film.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 25 08:05:36 +0000 2012",
    idStr: "228038277691740160",
    content: "So we took in a stray dog. Just your average Tuesday night.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 21 10:11:21 +0000 2012",
    idStr: "226620369459625984",
    content:
      "Doign some last-minute printing and then it's time for Pride. Hope everyone enjoys it!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 20 23:53:45 +0000 2012",
    idStr: "226464946572115968",
    content:
      "#channelORANGE by @frank_ocean has the effect of wine if it were on fast forward - briskly becomes beautiful; gloriously grows graceful.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jan 01 04:05:21 +0000 2021",
    idStr: "1344857218148159495",
    content:
      'Oh my Chrome extension "Selected Text Readability" is in the #CS50 final projects gallery: <a href="https://cs50.harvard.edu/x/2021/gallery">https://cs50.harvard.edu/x/2021/gallery</a> <div class="gallery"><ul><li><a href="../../tweets_media/1344857218148159495-EqnkEybW8AAO4qK.jpg"><img src="../../tweets_media/1344857218148159495-EqnkEybW8AAO4qK.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 22 08:36:24 +0000 2020",
    idStr: "1341301548941537282",
    content:
      '@amolrajan @DeccaJourno It\'s almost like you were looking for any half-baked reason to highlight some badly-researched bigoted crock on an issue you "take absolutely no view whatsoever on"...',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 13 20:47:22 +0000 2020",
    idStr: "1338224014720905216",
    content:
      'Also on GitHub: <a href="https://github.com/yndajas/selected-text-readability">https://github.com/yndajas/selected-text-readability</a><br><br>Complimentary YouTube demo: <a href="https://www.youtube.com/watch?v=_AP_qb5wuMA">https://www.youtube.com/watch?v=_AP_qb5wuMA</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 13 20:46:10 +0000 2020",
    idStr: "1338223710210285569",
    content:
      'My first Chrome extension - Selected Text Readability - is available for free now: <a href="https://chrome.google.com/webstore/detail/selected-text-readability/gmmgeofdbimelpnapecnbdckopibaecl">https://chrome.google.com/webstore/detail/selected-text-readability/gmmgeofdbimelpnapecnbdckopibaecl</a><br><br>- estimate the readability of selected text on webpages<br>- originated as a @cs50 final project, inspired by a problem set<br>- went live a month ago? Google didn\'t tell me...',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Dec 07 14:58:41 +0000 2020",
    idStr: "1335961935687331846",
    content:
      'Non-binary is making sure your phone didn\'t autoincorrect "they" to "that" in your email signature.',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 20 16:32:07 +0000 2012",
    idStr: "226353808022835200",
    content: "Time for another photo call. #YorkPride2012 #YorkPride",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 19 23:14:01 +0000 2012",
    idStr: "226092561717141505",
    content:
      "One day till the biggest York Pride ever. #YorkPride2012 #tired #youbetterenjoyitorelse",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 17 18:18:05 +0000 2012",
    idStr: "225293308245716992",
    content: "Who in York owns a Canon EOS 550D?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 17 16:45:34 +0000 2012",
    idStr: "225270025915871233",
    content:
      "Nice to see York Pride pop up on the daily bulletin from Pink News.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 15 16:39:34 +0000 2012",
    idStr: "224543743682940930",
    content: "Fourth to last York Pride meeting prior to the big event.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 12 22:43:49 +0000 2012",
    idStr: "223548246235156481",
    content:
      "Been to a Council meeting for the first time tonight. The motion I was there to support got passed, but unfortunately no time for a debate.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 10 19:18:47 +0000 2012",
    idStr: "222771871614107649",
    content: "Well this better not become a habit...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 08 18:17:47 +0000 2012",
    idStr: "222031741987192832",
    content:
      "Should really think about adding words and not just photos to this Freecycle report.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 08 17:25:42 +0000 2012",
    idStr: "222018634896261120",
    content: "Take that Murray haters!",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Jul 08 14:57:04 +0000 2012",
    idStr: "221981231666044928",
    content:
      "David Beckham looks as though he's modelled himself on Daniel Day Lewis in There Will Be Blood.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 07 22:09:09 +0000 2012",
    idStr: "221727579902713856",
    content: "Anyone use Aperture or Adobe Lightroom?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 07 21:40:57 +0000 2012",
    idStr: "221720484918722560",
    content:
      "Has anyone ever won two grand slams in one day? #Tennis #Wimbledon2012",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 06 18:03:57 +0000 2012",
    idStr: "221303486569119744",
    content:
      "Installing a Windows copy of Microsoft Office on a Mac is about as rebellious as I get.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 06 14:05:25 +0000 2012",
    idStr: "221243456750747649",
    content: "Power cut at work, hope I saved everything!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 05 23:45:35 +0000 2012",
    idStr: "221027075350466561",
    content:
      "I think it's time to accept that this report isn't going to be done before bedtime. If only I had the motivation of a Moodle deadline...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 05 22:07:02 +0000 2012",
    idStr: "221002274309292032",
    content:
      "Interesting to see what faces pop up when you type 'ysjsu' into Google Images...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 05 17:27:39 +0000 2012",
    idStr: "220931963807219712",
    content:
      "Just had a hair cut; time to shower out the remains and then I have a Freecycle report to write.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 04 17:51:53 +0000 2012",
    idStr: "220575674048581632",
    content:
      "Got to cook dinner, take clothes to a drying machine and pick up clothes from the drying machine before a Green Party meeting at 8.30pm.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 26 16:03:49 +0000 2012",
    idStr: "217649375206326273",
    content: "Got an average of 66.58 on my degree. That'll do.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 24 22:08:29 +0000 2012",
    idStr: "217016370246856704",
    content: "So… three famous mentions / retweets in three days.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 24 21:33:07 +0000 2012",
    idStr: "217007469912797184",
    content: "Forza Italia! #ForzaItalia #Euro2012",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 24 14:19:23 +0000 2012",
    idStr: "216898317270007808",
    content:
      "Enjoyed Freecycle yesterday. Hope the seventy-three show up-ers scavenged some sensational stuff. Copious gratitude to the great volunteers!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 24 14:06:51 +0000 2012",
    idStr: "216895163233075200",
    content:
      "Mentioned by @the1mpounddrop on Friday, retweeted by @speechdebelle yesterday, who today?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 22 20:49:22 +0000 2012",
    idStr: "216271684527849472",
    content:
      "Going to go and make some food and listen to the new(ish) @speechdebelle alboom.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 22 19:40:24 +0000 2012",
    idStr: "216254330016243712",
    content:
      "Climbed a mountain on Tuesday. Ordered a Canon EOS 550D on Thursday.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 22 19:01:32 +0000 2012",
    idStr: "216244547892690944",
    content:
      "Just got mentioned by The Million Pound Drop Live - does that count as someone famous?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 22 18:34:04 +0000 2012",
    idStr: "216237635105071105",
    content: "Today I bought a Werner Herzog collection.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 11 16:56:34 +0000 2012",
    idStr: "212226830525153281",
    content: "Do I cook for one or get a takeaway?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 10 20:53:13 +0000 2012",
    idStr: "211924000346087424",
    content: "Bed at ten. Life working 9 - 5.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 09 20:23:51 +0000 2012",
    idStr: "211554221458341889",
    content:
      "Enjoyed Freecycling today - thanks to all the brilliant volunteers!<br><br>Remember to come get free stuff at the Freeshop on 23rd June.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 08 19:10:57 +0000 2012",
    idStr: "211173485702168576",
    content:
      "Didn't even realise that the Euro 2012 competition had started. Shows how much I care.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 08 18:16:59 +0000 2012",
    idStr: "211159907406323713",
    content: "Can't believe CHIC are on in Yorkshire! Tempted.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 07 07:44:39 +0000 2012",
    idStr: "210638386048933889",
    content: "Time for my first day as a graduate intern.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 06 19:52:18 +0000 2012",
    idStr: "210459116399890434",
    content:
      'Anyone heard of <a href="http://onlinemediacollection.com">http://onlinemediacollection.com</a>? They\'re selling Canon 550Ds for £216 - <a href="http://onlinemediacollection.com/product/canon-eos-550d-digital-slr-camera/">http://onlinemediacollection.com/product/canon-eos-550d-digital-slr-camera/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 30 22:07:44 +0000 2012",
    idStr: "207956486314397696",
    content:
      'In @yorkpress again. Lost count. <a href="http://www.yorkpress.co.uk/features/charity/9734268.York_students____fundraising_bonanza_for_charity/">http://www.yorkpress.co.uk/features/charity/9734268.York_students____fundraising_bonanza_for_charity/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 30 21:56:06 +0000 2012",
    idStr: "207953559642320896",
    content:
      "Thinking of offering to proof read work for free. Anyone want some help?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 30 21:48:34 +0000 2012",
    idStr: "207951662411808768",
    content: "Say one word.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 29 14:53:14 +0000 2012",
    idStr: "207484751047704576",
    content:
      "Officially the first of the new student interns. In other words, I have a full time (temporary) job. Yay!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 28 10:41:46 +0000 2012",
    idStr: "207059081473695745",
    content:
      "Got an interview tomorrow morning for the first 2012 York St John graduate internship.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 26 19:50:22 +0000 2012",
    idStr: "206472366342152192",
    content: "Genuinely tasty musical composition by Italy.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 26 19:34:06 +0000 2012",
    idStr: "206468272890183680",
    content:
      "Russian #Eurovision2012 entry is definitely my favourite artist ever in the whole world.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed May 23 10:17:09 +0000 2012",
    idStr: "205240947330662401",
    content:
      "Vince Kidd is incredible. So original. Can't stop listening to his stuff on YouTube. @kiddulthood",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 19 01:07:27 +0000 2012",
    idStr: "203653058448719872",
    content:
      "Somebody tell me what's the point in Instagram beyond making your images have odd edges and a dated feel.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri May 18 19:17:47 +0000 2012",
    idStr: "203565060692520961",
    content: "10 book cited in one paraphrase.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 17 23:48:33 +0000 2012",
    idStr: "203270813523247105",
    content:
      'Documentary about assistance dogs for the deaf and hard of hearing. Hearing Dogs: <a href="http://youtu.be/u_OGLDdW9kg">http://youtu.be/u_OGLDdW9kg</a> via @youtube',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu May 17 00:12:19 +0000 2012",
    idStr: "202914406382833664",
    content:
      'Amazing, this should happen more often: The Create 12 Experiment - Three Sides Theatre: <a href="http://youtu.be/wsXe60CCbcw">http://youtu.be/wsXe60CCbcw</a> via @youtube @3Sides_Theatre',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed May 16 22:49:26 +0000 2012",
    idStr: "202893550533357568",
    content:
      'BREAKING NEWS! <a href="http://www.yorkpress.co.uk/news/9708033.Tesco___s_beer_blunder/">http://www.yorkpress.co.uk/news/9708033.Tesco___s_beer_blunder/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 13 20:53:04 +0000 2012",
    idStr: "201777103404937216",
    content:
      "About to have Quorn fillets and vegetables with Chicken Tonight Country French sauce and gravy all on a bed of pasta.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 10 15:52:53 +0000 2012",
    idStr: "200614392482639872",
    content: "Craving golden syrup.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 10 15:42:52 +0000 2012",
    idStr: "200611874381897729",
    content:
      "I think a collage should be made out of all the obligatory dissertation hand-in photos, arranged chronologically.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 10 15:40:49 +0000 2012",
    idStr: "200611359656906752",
    content:
      "Just topped up on energy with Tesco Vegetarian Sausages and Beans. Now it's time to finally finish finishing the dissertation.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 10 13:23:04 +0000 2012",
    idStr: "200576693147152385",
    content:
      "Running totals: 9836 words, 23 items in the bibliography, 21 items in the videography.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 09 16:10:27 +0000 2012",
    idStr: "200256429062496256",
    content: "202 words to the lower limit.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 09 14:18:01 +0000 2012",
    idStr: "200228132836474880",
    content: "713 words to the lower limit.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 08 14:29:40 +0000 2012",
    idStr: "199868677993144320",
    content: "Listening to Maroon 5's 'Songs About Jane'. It's been a while.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 07 19:53:27 +0000 2012",
    idStr: "199587772170911745",
    content:
      "Can't believe it's been nearly a year and a half since I last played the drums.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 07 19:07:53 +0000 2012",
    idStr: "199576301999357953",
    content: "How many items in the bibliography for people so far?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 07 18:25:36 +0000 2012",
    idStr: "199565664661405696",
    content:
      "Finished subtitling Hearing Dogs. Now to nearly finish the dissertation.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 05 13:32:15 +0000 2012",
    idStr: "198767061609099264",
    content:
      "Enjoyed watching Bollywood-inspired dancing yesterday. Just subtitled half of the Hearing Dogs documentary. Now delivering Freecycle bags.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 04 12:12:32 +0000 2012",
    idStr: "198384615927447552",
    content:
      "Had final dissertation tutorial and now creating certificates for the Higher York awards.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 03 23:50:40 +0000 2012",
    idStr: "198197915871744000",
    content: "Woo hoo, two councillors to the Green Party!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 03 14:28:46 +0000 2022",
    idStr: "1566070704696614913",
    content: "@TrevLSteinberg All avenues*",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 02 19:01:56 +0000 2022",
    idStr: "1565777060072669185",
    content:
      'I\'m here for the revolution <a href="https://twitter.com/ChadNotChud/status/1565358222747353090">https://twitter.com/ChadNotChud/status/1565358222747353090</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 18 16:02:12 +0000 2020",
    idStr: "1329092553661063169",
    content:
      "@laurel_mack @JoFrhwld @typologianista @betsysneller @redbirdred Oh this is from 2019 but I'm only seeing it now, whoops",
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 17 13:34:08 +0000 2020",
    idStr: "1306587243587526656",
    content:
      '@Christianilbury @PhoneticsErica @lzimman I have a new paper out that is kind of related to this but not heavy on linguistic analysis. It\'s more a conceptual look and gender and sexuality and how the current language may be too limiting/narrow: <a href="https://www.budrich-journals.de/index.php/insep/article/view/35952">https://www.budrich-journals.de/index.php/insep/article/view/35952</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 17 13:32:13 +0000 2020",
    idStr: "1306586761619963904",
    content:
      "@Christianilbury @PhoneticsErica I'm a bit out of the loop, but I'd suggest consulting the Non-binary Linguistics Network and/or Queer Linguist(ic)s Network on Facebook for recommendations. Just checked and they're still pretty active, particularly the former<br><br>@lzimman would know a lot more about current stuff",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 03 19:52:18 +0000 2012",
    idStr: "198137931125358592",
    content:
      "Realised in the last hour I've talked to three people on Twitter called 'Dan' or a derivation. @DannyMCooper @DanielRidsdale @DanHolmes12",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 03 19:11:25 +0000 2012",
    idStr: "198127643151970304",
    content:
      "Dissertation fatigue kicking in. Time to make an energy-restoring creamy Quorn carbonara.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 03 11:03:13 +0000 2012",
    idStr: "198004782252818432",
    content:
      "For the first time in three years of university, I've bought a book (for academic purposes).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 02 23:06:21 +0000 2012",
    idStr: "197824374949167106",
    content:
      "I'm so cool that I'm reading about British awards for indexing books.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 02 22:35:30 +0000 2012",
    idStr: "197816613804851200",
    content:
      "Oh R. W. Connell, why can't you write in a more easily quotable manner?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 02 15:01:30 +0000 2012",
    idStr: "197702361702084608",
    content:
      "Just been in the edit suite, helping out as a marshall at the York St John Fun Run in about an hour then more dissertation work to follow.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 01 22:50:48 +0000 2012",
    idStr: "197458074867470336",
    content:
      '<a href="http://twitvid.com/DPGTV">http://twitvid.com/DPGTV</a> - Save me...',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 30 16:06:28 +0000 2012",
    idStr: "196993933467856898",
    content:
      'The film I\'m most proud of editing so far: Off The Street: Homelessness in York (Part One of Two): <a href="http://youtu.be/63lSs6R61c8">http://youtu.be/63lSs6R61c8</a> via @youtube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 30 09:06:37 +0000 2012",
    idStr: "196888275795980288",
    content: "Dissertation tutorial and then editing time.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 30 00:20:50 +0000 2012",
    idStr: "196755959194980352",
    content:
      'Set up a new Google+ profile which can be found here: <a href="http://bit.ly/IfcXL0">http://bit.ly/IfcXL0</a>.',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 29 23:31:17 +0000 2012",
    idStr: "196743487658541058",
    content:
      "Listening to Stereo Typical by @RizzleKicks and working on my Literature Review.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 29 22:23:22 +0000 2012",
    idStr: "196726397765566465",
    content:
      "Writing Literature Review and listening to a rock-ish album out of choice for the first time in years.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 29 01:01:03 +0000 2012",
    idStr: "196403690033254400",
    content:
      "Dissertation work done for today (yesterday). Time to watch Stand Up for the Week with Jake.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 28 23:09:43 +0000 2012",
    idStr: "196375672036409344",
    content:
      "Today: working on dissertation. Tomorrow: working on dissertation, editing film and proof-reading Jake's 5000 word assignment",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 27 13:47:38 +0000 2012",
    idStr: "195871830991585280",
    content:
      "Capturing some footage, doing dissertation work and listening to @QtipTheAbstract.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 25 20:48:05 +0000 2012",
    idStr: "195252867613995008",
    content:
      "Listening to @speechdebelle, waiting for food from Jake and doing some work.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 24 11:45:23 +0000 2012",
    idStr: "194753901331873793",
    content:
      "Decided to see if I can make it to 10,000 words of my dissertation by sleep time tomorrow.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 19 14:37:02 +0000 2012",
    idStr: "192985159245643778",
    content:
      "Applied for a job at @space109york earlier and now planning Freecycle stuff in Holgate, then off to Phoenix for bag preparing shortly.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 18 23:34:30 +0000 2012",
    idStr: "192758032889937920",
    content:
      "So then, completing a job application then watching The Apprentice before going to bed. Dissertation work tomorrow, Jake's birthday Friday!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 03 14:44:02 +0000 2012",
    idStr: "187188715481874434",
    content:
      "Hoping for better weather tomorrow for all those attending and working the visit day at @YorkStJohn.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 03 12:02:49 +0000 2012",
    idStr: "187148144872652801",
    content:
      'R. Kelly - Ignition: <a href="http://youtu.be/y6y_4_b6RS8">http://youtu.be/y6y_4_b6RS8</a> via @youtube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 03 11:55:07 +0000 2012",
    idStr: "187146205967556610",
    content:
      "Updating my CV and creating a few different versions for different types of jobs.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 03 09:18:41 +0000 2012",
    idStr: "187106838297313281",
    content:
      "Writing up a role description for a volunteering opportunity. Anyone interested in volunteering for the Freecycle project?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 02 11:00:47 +0000 2012",
    idStr: "186770144784158720",
    content:
      "Well I haven't tweeted in a long time. Currently working on my dissertation and looking for jobs for when I've finished my degree.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 16 11:44:06 +0000 2012",
    idStr: "170111204260454401",
    content:
      "Working on Volunteering stuff. Finishedt he latest issue of YSJ Involved, now sorting out National Student Volunteering Week with Anu.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 14 11:50:13 +0000 2012",
    idStr: "169387969449426944",
    content: "Working on the third issue/s of YSJ Involved.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 15 19:34:30 +0000 2011",
    idStr: "147399151662014464",
    content:
      "#FacebookTimeline definitely does not look anything remotely like Twitter, the only resemblance is the name. It looks like a clean MySpace.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 15 15:07:26 +0000 2011",
    idStr: "147331938804432896",
    content: "Thanks to @Spug_ for those namey things.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 15 15:06:51 +0000 2011",
    idStr: "147331792112848896",
    content: "Goth name (black and name of one of your pets): Black Tommy",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 15 15:06:32 +0000 2011",
    idStr: "147331714681810945",
    content:
      "Superhero name (Colour of your shirt and first item to your right): Blue Pillow",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 15 15:06:12 +0000 2011",
    idStr: "147331631605223424",
    content:
      "Your Star Trek name (first 3 letters of last name, first 2 of middle name, first 2 of first, last 3 of last): Lawjaanlaw",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 15 15:05:10 +0000 2011",
    idStr: "147331368899194880",
    content:
      "Your soap opera name (middle name and street you live on): James Stanley",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 15 15:04:45 +0000 2011",
    idStr: "147331263097864192",
    content:
      "Your detective name (favourite colour and favourite animal): Yellow Allofthem",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 15 15:03:23 +0000 2011",
    idStr: "147330919106220032",
    content:
      "Just noticed it says 'REV-10' under the spacebar. Hopefully that isn't the most interesting thing you've heard today.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 15 14:42:59 +0000 2011",
    idStr: "147325785827581952",
    content:
      "Looking at some pictures, the new Facebook profile layout takes us back to the days of MySpace (didn't Facebook kill MySpace?).",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Dec 13 14:05:12 +0000 2011",
    idStr: "146591503073034240",
    content:
      "Should really have either breakfast, brunch or lunch before embarking on the bulk of today's activities.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 13 14:02:28 +0000 2011",
    idStr: "146590814586404865",
    content: "Excited for the @YSJSU AGM @PhillGray?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 13 14:01:30 +0000 2011",
    idStr: "146590571597791232",
    content:
      "Tutorial, then @YSJSU AGM and finally York and District LGBT Forum meeting. Lots of meetings!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 11 21:21:06 +0000 2011",
    idStr: "145976423977459713",
    content: "I'm sure Tulisa wasn't dressed as a mermaid earlier...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 11 20:27:56 +0000 2011",
    idStr: "145963045536022528",
    content:
      "Why are there randoms clips of the whole series of The X Factor in the background to Westlife? Is it to hide the fact that they're so dull?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Dec 11 19:41:30 +0000 2011",
    idStr: "145951359223603200",
    content:
      "It Was A Good Day followed by Still D.R.E. to drown out the sound of the X Factor.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Dec 08 14:37:12 +0000 2011",
    idStr: "144787615550423040",
    content:
      "Enjoyed a masterclass with @snix011010, very useful. Also today, interviewing candidates for Freecycle Co-ordinator and have Union Council.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 03 20:26:37 +0000 2011",
    idStr: "143063612137811969",
    content: "Liking the new look YouTube!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 15 17:33:28 +0000 2011",
    idStr: "136497056331218945",
    content:
      "Anyone with decent camera (i.e. Canon 550D or better) interested in taking photos for OUTrageous in York this Friday? From midnight. Unpaid.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 15 17:31:50 +0000 2011",
    idStr: "136496642831552513",
    content:
      'Good news for @OneAndOtherYork - print version on the way - <a href="http://www.oneandother.com/articles/oneothers-big-news/">http://www.oneandother.com/articles/oneothers-big-news/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 15 15:15:59 +0000 2011",
    idStr: "136462454677966848",
    content:
      "Sitting at @helen_j12's old desk noting down opportunities for the next YSJinvolved magazine/e-zine and listening to music with Anu Priya.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Nov 11 20:30:03 +0000 2011",
    idStr: "135091943989452800",
    content:
      'Check out this video from @YSJSU <a href="http://www.youtube.com/watch?v=weuPVkP0V2o">http://www.youtube.com/watch?v=weuPVkP0V2o</a> - Tell Us What You Think!',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 10 15:28:32 +0000 2011",
    idStr: "134653676856942593",
    content:
      'OUTrageous gay/LGBT night in York - Friday 10pm-4am from @YorkPride. <a href="http://goo.gl/frCnz">http://goo.gl/frCnz</a> Please RT @Pink_Paper @pinknews @GayTimesMag.',
    favouriteCount: "0",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Nov 09 19:27:37 +0000 2011",
    idStr: "134351452477980672",
    content:
      'Nominate who you think deserves to be on the Yorkshire Pink Power List! <a href="http://bit.ly/sG6n1q">http://bit.ly/sG6n1q</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 07 21:00:15 +0000 2011",
    idStr: "133649988881358848",
    content:
      'Who would have thought it would be a conservative party that would be the first to have an LG(BT?) leader?<br><br><a href="http://bit.ly/uJhAEa">http://bit.ly/uJhAEa</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Nov 04 14:51:32 +0000 2011",
    idStr: "132470034290323457",
    content:
      "Been to a very interesting Warp Films talk as part of @asffest. Don't know why the ticket said 1 - 5pm when it was only till 2pm though.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 01 21:11:55 +0000 2011",
    idStr: "131478600070340608",
    content:
      "Listening to Kamaal the Abstract, an experimental album by Q-Tip (of A Tribe Called Quest fame).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 31 11:12:11 +0000 2011",
    idStr: "130965281794297856",
    content:
      "Reading a draft constitution. @DanielRidsdale's favourite past time.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Oct 25 18:45:52 +0000 2011",
    idStr: "128905128525840384",
    content:
      "At @YorkPride meeting.<br><br>First OUTrageous at Vanity LGBT night this Friday from 10pm.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Oct 24 18:56:00 +0000 2011",
    idStr: "128545290264383488",
    content: "For Business School, search 'YSJ Involved Business School'.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 24 18:55:38 +0000 2011",
    idStr: "128545197708685314",
    content:
      "Check out the new volunteering magazine 'YSJinvolved' - <a href=\"http://bit.ly/rHHNor\">http://bit.ly/rHHNor</a>",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Oct 21 13:50:40 +0000 2011",
    idStr: "127381289941729282",
    content:
      "@BenRogueFrame Tried briefly before with some application on Facebook which didn't seem to work.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 19 21:43:04 +0000 2011",
    idStr: "126775394434162688",
    content:
      "Training all day today as part of my new job as a Student Ambassador.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 13 23:07:41 +0000 2011",
    idStr: "124622361579368448",
    content:
      'Article in @soundspheremag about Oxjam event at @YSJSU this Saturday (and across York next Friday) <a href="http://bit.ly/o8ibwT">http://bit.ly/o8ibwT</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 10 15:07:59 +0000 2011",
    idStr: "123414481069027328",
    content:
      "Sorting out the YSJinvolved volunteering magazine. Finding opportunities to include. @YorkPride meeting 7pm, Exhibition Hotel conservatory.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Oct 10 09:14:59 +0000 2011",
    idStr: "123325643017560064",
    content:
      "Come along to @YorkPride open meeting tonight if interested in giving feedback or helping next year. 7pm, Exhibition Hotel conservatory.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 09 17:38:38 +0000 2011",
    idStr: "123090004787478530",
    content:
      "Enjoyed seeing @hungryghosts at The Basement for Oxjam last Thursday. Also enjoyed going for a curry with the @YSJSU crew on Friday.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Oct 09 17:36:59 +0000 2011",
    idStr: "123089586741190657",
    content:
      "Opportunities Fair on Thursday, find out about volunteering at various organisations.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 01 17:17:18 +0000 2011",
    idStr: "120185532834787328",
    content: "Off to help with ENTs.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 28 10:14:19 +0000 2011",
    idStr: "118991923070509056",
    content: "Listening to Dizzee Rascal whilst researching Queer Theory.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 28 09:59:04 +0000 2011",
    idStr: "118988082660913152",
    content:
      "So used to clicking on Volunteering folder that I go there when looking for uni-related work.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 27 14:13:55 +0000 2011",
    idStr: "118689831059587072",
    content:
      "Second Anniversary with Jake Furby today, going to Rustique on Castlegate tonight to celebrate.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 27 14:12:58 +0000 2011",
    idStr: "118689590545620994",
    content:
      "Spied on @ROGUEFRAME office today in a spare five minutes, and noticed @OrilloVideos and another film production company are next door/s.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Sep 27 09:37:46 +0000 2011",
    idStr: "118620333552041984",
    content:
      "Been working on a second draft of a new volunteering e-zine, as well as York Pride agendas and other stuff.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 23 17:52:19 +0000 2011",
    idStr: "117295241073139712",
    content: "(Campus tour of York St John University campus).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 23 17:51:58 +0000 2011",
    idStr: "117295155291234304",
    content:
      'Check out <a href="http://bit.ly/pfArcZ">http://bit.ly/pfArcZ</a> - nice work @CrackedLensPro',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 30 03:27:04 +0000 2020",
    idStr: "1299911489378230272",
    content:
      "@GenderBen And also thanks for recommending me for this issue in the first place!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 30 03:18:17 +0000 2020",
    idStr: "1299909278669692928",
    content:
      '@BridgetOLeary9 @kirbyconrod Here we go: <a href="https://www.researchgate.net/publication/343975047_Sexuality_in_a_non-binary_world_redefining_and_expanding_the_linguistic_repertoire">https://www.researchgate.net/publication/343975047_Sexuality_in_a_non-binary_world_redefining_and_expanding_the_linguistic_repertoire</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Sep 13 20:48:09 +0000 2011",
    idStr: "113715614861889536",
    content: "Anyone good at website design?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 06 15:45:06 +0000 2011",
    idStr: "111102632373919744",
    content:
      "Music video needs extras this Saturday. Contact @ROGUEFRAME to find out more.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Aug 30 18:47:06 +0000 2011",
    idStr: "108611718577537024",
    content:
      "At the first York Pride meeting for 2012 since the establishment of the new committee.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 26 12:53:56 +0000 2011",
    idStr: "107073288756404225",
    content:
      "Did some filming for @YSJSU earlier with @CrackedLensPro featuring @DanielRidsdale and @Libbymolineaux. Any students around 5th - 9th Sept?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 24 11:42:07 +0000 2011",
    idStr: "106330441363103744",
    content:
      "Been awarded a vimpact, the step up (an extra 100 hours) from the vfifty a couple of weeks ago.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 24 11:40:09 +0000 2011",
    idStr: "106329948498837504",
    content:
      "Off for a meeting about some videos for @YSJSU, filming tomorrow and Friday. Then hopefully a meeting about volunteering.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 20 20:17:36 +0000 2011",
    idStr: "105010616045027328",
    content:
      "Been planning and test shooting campus tour videos and halls to campus videos with @CrackedLensPro today. Should be good, look out for it!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 20 20:10:51 +0000 2011",
    idStr: "105008915678371841",
    content:
      "Follow @YSJSUVolunteer for the latest opportunities within university and beyond.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 19 14:08:56 +0000 2011",
    idStr: "104555448295899137",
    content:
      "Check out @YSJSUVolunteer for the latest info on finding volunteering opportunities. New opportunities will be tweeted when they arrive.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Aug 18 12:12:27 +0000 2011",
    idStr: "104163749455331328",
    content:
      "Well done everyone who got into York St John and other universities!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 17 20:05:44 +0000 2011",
    idStr: "103920467374641153",
    content:
      "What's that scramble of letters called that you see on things that are in development like a website or magazine? It's a mess of letters.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 17 16:02:56 +0000 2011",
    idStr: "103859361880883200",
    content: "Applied for the vimpact award.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 17 16:00:15 +0000 2011",
    idStr: "103858686455320578",
    content: '<a href="http://www.ysjsu.com/">http://www.ysjsu.com/</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 17 15:59:55 +0000 2011",
    idStr: "103858605459116032",
    content:
      "Check out the new @YSJSU website! P.s. that image that first comes up was edited by me as part of the new YSJSU Productions: Design team.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 17 12:47:33 +0000 2011",
    idStr: "103810192659058688",
    content:
      "The vimpact application process is significantly more rigorous than the vfifty.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 17 11:17:54 +0000 2011",
    idStr: "103787633704042497",
    content: "Been awarded the vfifty award.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Aug 15 14:53:57 +0000 2011",
    idStr: "103117229100515330",
    content: "Or perhaps a step towards resolving one.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 15 14:52:25 +0000 2011",
    idStr: "103116843186790400",
    content:
      "... the biggest (if not the biggest) equality issues of the current times.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 15 14:51:55 +0000 2011",
    idStr: "103116714526507010",
    content:
      "I believe the acceptance and acknowledgement of transgender, transexual and intersexual people in everyday language and thought is one of...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 13 19:35:38 +0000 2011",
    idStr: "102463341695475712",
    content: "Updated CV, now to apply for jobs.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 13 03:25:46 +0000 2011",
    idStr: "102219266660630529",
    content:
      "Finished some alterations on an image for the Students' Union, and a logo for Youth Project UK. Tomorrow the hunt for a job restarts.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 11 14:08:14 +0000 2011",
    idStr: "101656168904138752",
    content:
      "Done with the logo reworking for the day @ROGUEFRAME, now onto another image reworking.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 11 12:09:48 +0000 2011",
    idStr: "101626368319692800",
    content: "Finally getting somewhere with this logo @ROGUEFRAME.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 21:51:52 +0000 2011",
    idStr: "101410461433606144",
    content:
      "Officially the new Secretary for York Pride Action Group, Jake is now the Communications Support Officer.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 17:04:29 +0000 2011",
    idStr: "101338137753698304",
    content:
      "Finally getting somewhere with this logo, but I'm not convinced it looks any good. Will look for another method after this one's done.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 17:03:28 +0000 2011",
    idStr: "101337883394318336",
    content:
      "Applied for a Vfifty Award. If it gets approved, I'll be applying straight away for the Vimpact award for 100 hours volunteering.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 15:32:07 +0000 2011",
    idStr: "101314894468612096",
    content:
      "York and District LGBT Forum meeting tonight, discussing York Pride and establishing the 2012 committee.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 10 15:31:37 +0000 2011",
    idStr: "101314765778989057",
    content:
      "Just had a meeting with @YouthProjectUK about videos for the workshops they have in development. Exciting project!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 08 14:15:08 +0000 2011",
    idStr: "100570745205305344",
    content: "Must get this logo done today.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 04 19:02:25 +0000 2011",
    idStr: "99193490772213760",
    content:
      "Anyone interested in helping to organise and run Oxjam at York St John Students' Union this year. It's in October, students only I'm afraid.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Aug 04 18:50:24 +0000 2011",
    idStr: "99190465043247104",
    content: "It would involve*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 04 18:50:02 +0000 2011",
    idStr: "99190373603229697",
    content:
      "... Good experience to have if you are thinking of working in mentoring, training, consultancy or teaching in the future.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 04 18:49:05 +0000 2011",
    idStr: "99190135299641344",
    content:
      "... It would involves showing them various tips and tricks and steering them in the right direction. You can make the role want you want.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 04 18:48:12 +0000 2011",
    idStr: "99189912363999232",
    content:
      "Any incoming 2nd or 3rd year Film and Television Production students interested in becoming a consultant for incoming 1st and 2nd years?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 04 18:47:22 +0000 2011",
    idStr: "99189700903976960",
    content:
      "York Pride summary meeting went well yesterday and now looking forward to start immediate work on next year's event.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 04 18:46:18 +0000 2011",
    idStr: "99189431851958272",
    content:
      "Interviewed two candidates for the new role of Director of Library and ICT Services at York St John University on Tuesday. Very promising.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 04 18:45:14 +0000 2011",
    idStr: "99189166688051200",
    content:
      'Just updated LinkedIn - <a href="http://uk.linkedin.com/in/yndajas">http://uk.linkedin.com/in/yndajas</a> - feel as though I\'m missing a few bits and bobs though!',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 01 20:01:13 +0000 2011",
    idStr: "98121124377931776",
    content:
      'York Pride remembers murdered Ugandan gay rights campaigner <a href="http://www.pinknews.co.uk/2011/08/01/york-pride-remembers-murdered-ugandan-gay-rights-campaigner/">http://www.pinknews.co.uk/2011/08/01/york-pride-remembers-murdered-ugandan-gay-rights-campaigner/</a> via @PinkNews',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 01 19:48:43 +0000 2011",
    idStr: "98117975709724672",
    content:
      "Thanks for the follow @SpinningTopFilm, have you got any projects going on at the moment?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 31 12:55:41 +0000 2011",
    idStr: "97651647215448065",
    content:
      "Enjoyed Pride yesterday despite the very long tiring day! Enjoying birthday with Jake now!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 29 10:45:12 +0000 2011",
    idStr: "96894034773151744",
    content:
      "Just done a self-upgrade of the RAM in my MacBook Pro. Was surprisingly easy.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 28 13:59:26 +0000 2011",
    idStr: "96580528114909184",
    content:
      "Now have a Wacom Bamboo Pen tablet, so can start experimenting with drawing when making graphics.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 25 13:09:01 +0000 2011",
    idStr: "95480673938313216",
    content:
      "Sorting out some volunteering ideas for next year, including for @YSJFreecycle and a student branding team.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 19 09:28:12 +0000 2011",
    idStr: "93250776339726336",
    content:
      "Sorting out some volunteering opportunities today, as well as the new volunteering magazine.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 16 18:12:31 +0000 2011",
    idStr: "92295560316456961",
    content:
      "Worked on @YSJFreecycle today and yesterday, now got to catch up with volunteering preparation for next year.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 05 20:48:29 +0000 2011",
    idStr: "88348544074924032",
    content: "Doing a quick bit of logo making for York LGBT.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 05 19:39:03 +0000 2011",
    idStr: "88331072558989312",
    content:
      "Sorting out Volunteering stuff later, including a magazine, Oxjam and a new film consultant role.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 05 19:38:26 +0000 2011",
    idStr: "88330918858735617",
    content:
      "Decided on using the official 'Twitter' app (previously 'Tweetie').",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 05 18:10:05 +0000 2011",
    idStr: "88308682504404992",
    content:
      "'Echofon' is supposedly good, but not really liking it (at least compared to the Twitter app). Looks like it has a few good features though.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 05 18:05:07 +0000 2011",
    idStr: "88307432878637058",
    content:
      "Trying out Twitter clients on the Mac. Any preferences? This is the one called 'Twitter'.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 29 17:54:45 +0000 2011",
    idStr: "86130497981386753",
    content:
      "Off to York Pride Action Group meeting. Been a day of job searching today, tomorrow will likely be the same (plus added kit collection).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 23 08:14:10 +0000 2011",
    idStr: "83810061884993536",
    content:
      "Waiting for a delivery today. Hope it comes in good time so I don't miss a meeting this evening and have time to collect some RAG boxes.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 20 16:24:46 +0000 2011",
    idStr: "82846362546343936",
    content:
      "Waiting for Illustrator to render some 3D effects for preview, it takes so long!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 20 16:22:55 +0000 2011",
    idStr: "82845895309266946",
    content: "Creating logos for Höbgoblyn @ROGUEFRAME.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 16 14:52:25 +0000 2011",
    idStr: "81373567937286144",
    content:
      "Twitpic provides much clearer and more accurate images than Facebook's photo service.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 14 19:49:30 +0000 2011",
    idStr: "80723557033844736",
    content:
      "Designed various logos with Jake for York LGBT's new website, getting feedback at the Forum meeting tomorrow. Look out for them online soon!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 14 19:48:16 +0000 2011",
    idStr: "80723247842344960",
    content:
      "Finishing off remaining Groves-area Freecycle deliveries tonight with Jake. Also need to look at designing logos for Höbgoblyn.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 10 14:07:48 +0000 2011",
    idStr: "79188013833400320",
    content:
      "4pm till 5.30am on Höbgoblyn mostly in the cold last night. At least night shoots are now done and gone!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 08 13:40:41 +0000 2011",
    idStr: "78456412388331520",
    content:
      "More Freecycle delivering today (if I get the time). Look out for a @YSJFreecycle bag through your letterbox!",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jun 07 11:02:59 +0000 2011",
    idStr: "78054341952548864",
    content:
      "Off to sort out a booking for @ROGUEFRAME soon, then delivering Freecycle bags.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 31 12:08:38 +0000 2011",
    idStr: "75534145543077888",
    content: "Sorting out a jib booking for Höbgoblyn @ROGUEFRAME",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 28 15:27:03 +0000 2011",
    idStr: "74496914179108864",
    content: "Stage managed last night at @YSJSU Summer Ball. Fun but tiring!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 26 19:09:26 +0000 2011",
    idStr: "73828103364947968",
    content:
      "In The Press, it' not my camera though! And those guys aren't actors, they're helping to film it! http://bit.ly/mfDvFY",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 24 22:14:29 +0000 2011",
    idStr: "73149899700572160",
    content:
      "Please help The Jess Gardham Band music video for 'Caught Out' get off the ground by donating: http://www.indiegogo.com/Caught-Out-1",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 24 22:13:38 +0000 2011",
    idStr: "73149684260143104",
    content: "All day shoot tomorrow, 6.30am call time till 6pm est. wrap.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 23 21:22:38 +0000 2011",
    idStr: "72774460578594818",
    content:
      "Please help our music video get off the ground by donating on the linked IndieGoGo page: http://www.indiegogo.com/Caught-Out-1",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 20 00:19:20 +0000 2011",
    idStr: "71369377408229377",
    content:
      "Uni project all done. Now onto a million other projects lined up.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 29 18:59:35 +0000 2020",
    idStr: "1299783773924528134",
    content: "Oh, and it's all open access. [5/4]",
    favouriteCount: "15",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 29 18:50:30 +0000 2020",
    idStr: "1299781491136831488",
    content:
      "I look at neoliberalism, asexual/aromantic linguistic innovation, what lies beneath the language (what are we really attracted to?) and how the language could better reflect this in an inclusive way.<br><br>Disclaimer: I don't have the answers, only thoughts. Written in 2018. [4/4]",
    favouriteCount: "16",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Aug 29 18:50:30 +0000 2020",
    idStr: "1299781489148727299",
    content:
      "The issue covers feminism, language, moral panic, neuroscience, surveillance and more.<br><br>My own focus is the language we use to talk about sexuality and how it can erase trans and non-binary lives while hiding what we're really attracted to. [3/4]",
    favouriteCount: "12",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Aug 29 18:50:30 +0000 2020",
    idStr: "1299781487504568321",
    content:
      'The paper is part of @drloocy\'s special issue of the Journal of the International Network for Sexual Ethics and Politics, "Positive non-binary and / or genderqueer sexual ethics and politics" [2/4]<br><br><a href="https://www.budrich-journals.de/index.php/insep/issue/view/2731">https://www.budrich-journals.de/index.php/insep/issue/view/2731</a>',
    favouriteCount: "12",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Aug 29 18:50:29 +0000 2020",
    idStr: "1299781485113864194",
    content:
      'My first journal article - in which I question everyone\'s sexuality - is finally out! "Sexuality in a non-binary world: redefining and expanding the linguistic repertoire". [1/4]<br><br><a href="https://www.budrich-journals.de/index.php/insep/article/view/35952">https://www.budrich-journals.de/index.php/insep/article/view/35952</a> <div class="gallery"><ul><li><a href="../../tweets_media/1299781485113864194-EgnAGaGXkAAyuwa.png"><img src="../../tweets_media/1299781485113864194-EgnAGaGXkAAyuwa.png"></a></li></ul></div>',
    favouriteCount: "200",
    retweetCount: "39",
  },
  {
    createdAt: "Wed Aug 19 03:32:43 +0000 2020",
    idStr: "1295926641152200709",
    content:
      'oh cool <a href="https://twitter.com/yndajas/status/1295925418038562819">https://twitter.com/yndajas/status/1295925418038562819</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 19 18:31:51 +0000 2011",
    idStr: "71281930917789696",
    content:
      "Creating the disc image for uni project. IndieGoGo page for music video will be up soon hopefully. Höbgoblyn tomorrow, going to be tired!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 17 22:23:11 +0000 2011",
    idStr: "70615372629426177",
    content:
      "Trailer for 'Amber' (@MilesToneFilm) looks awesome. Spotted some of the set dressing I did helping @EmilyRogueFrame http://dai.ly/kKys6h",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 17 22:13:03 +0000 2011",
    idStr: "70612823637622784",
    content:
      "Not posted for a while, been busy with various things. Uni project nearly done now. IndieGoGo page for music video up in the next few days.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 09 18:58:27 +0000 2011",
    idStr: "67664747243380737",
    content:
      "Had Union Council training on Saturday, and a publicity meeting for this year's York Pride. Will be designing logo's for York LGBT stuff.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 09 18:57:36 +0000 2011",
    idStr: "67664532260130816",
    content:
      "Then either a meeting for the The Jess Gardham Band music video, or a bit of editing. http://jessgardhamcaughtout.tumblr.com/",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 09 18:56:50 +0000 2011",
    idStr: "67664340907597824",
    content:
      "Going on a journey tomorrow with @ROGUEFRAME and @Faye_yasmin_90 for the Höbgoblyn short film.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 05 15:35:35 +0000 2011",
    idStr: "66164144403001345",
    content:
      "Good luck to @DanSidley and @simonrodgers tonight in the council elections!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 05 14:44:41 +0000 2011",
    idStr: "66151333278912512",
    content:
      "Wrapped filming bar two shots. Last scene played out nicely. Found it useful working alongside a co-director today, on to editing next week.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 04 09:33:33 +0000 2011",
    idStr: "65710645303197696",
    content: "Sorting out some pointillist chroma key!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 04 07:49:46 +0000 2011",
    idStr: "65684526348767232",
    content:
      "Editing footage into a rough cut today. That's if there are any computers free in the edit lab.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue May 03 16:51:29 +0000 2011",
    idStr: "65458466218713088",
    content:
      "A day of uploading footage. Now need to sort out a time to go to Sheffield for a meeting / run through for @sheffdocfest.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun May 01 19:26:59 +0000 2011",
    idStr: "64772826296614912",
    content:
      "Bought two @johnlegend albums from HMV, now it's time to write some treatments.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 28 16:24:30 +0000 2011",
    idStr: "63639736719380480",
    content:
      "Not a bad day of directing today, but still lots to get done. Tomorrow a meeting about the Jess Gardham music video. http://bit.ly/jBG0cS",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 28 15:40:31 +0000 2011",
    idStr: "63628667800125440",
    content:
      "Check out this blog for the music video of The Jess Gardham Band's 'Caught Out'. http://jessgardhamcaughtout.tumblr.com/",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 28 00:13:23 +0000 2011",
    idStr: "63395347342438400",
    content: "New post on the talent: http://jessgardhamcaughtout.tumblr.com/",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Apr 27 21:16:40 +0000 2011",
    idStr: "63350875401355264",
    content:
      "Check out this blog for music video project 'Caught Out' http://jessgardhamcaughtout.tumblr.com/",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Apr 27 18:53:20 +0000 2011",
    idStr: "63314805070635008",
    content:
      "Happy to have @T_Dunne on board with a current project, will reveal more details later when the blog is up.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Apr 27 09:09:58 +0000 2011",
    idStr: "63167995106701314",
    content:
      "Back to being a director today, had a meeting about a project yesterday, should have a blog up about it later and an IndieGoGo page shortly.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 24 14:31:36 +0000 2011",
    idStr: "62161772152492032",
    content:
      "Editing a theatre recording today of something called 'Outreach', part of the @YorkTheatre Takeover festival.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 24 14:30:00 +0000 2011",
    idStr: "62161369591590912",
    content:
      "Thanks @alana_bassett @T_Dunne and @giorgiasaysgtfo for the congrats!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 22 11:52:51 +0000 2011",
    idStr: "61397047756075008",
    content: "Passed my driving test!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 22 08:49:44 +0000 2011",
    idStr: "61350963025416192",
    content: "Driving test today!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 21 16:40:41 +0000 2011",
    idStr: "61107097122770944",
    content:
      "Have a driving test tomorrow, the main reason for passing is so that I don't have to pay for more lessons (or even another theory)!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 19 10:56:30 +0000 2011",
    idStr: "60295702844157952",
    content:
      "Helping out with Freecycle today, then off to see Shappi Khorsandi with Jake in the afternoon.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 18 18:11:09 +0000 2011",
    idStr: "60042697620193280",
    content:
      "Street art meeting went well, look out for some colourful York alleyways around June/July time!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 18 08:51:01 +0000 2011",
    idStr: "59901735954690048",
    content:
      "Got a meeting today about creating a Film and Television Consultant role to help lower years, and a meeting about creating some street art.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 15 21:40:43 +0000 2011",
    idStr: "59008273172537344",
    content:
      "Awaiting feedback on third year proposals. Got a meeting for Hobgoblyn with @ROGUEFRAME on Sunday.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 14 08:43:02 +0000 2011",
    idStr: "58450175340982272",
    content:
      "Had an LGBT Forum meeting last night, got a Sheffield Doc/Fest meeting today in Sheffield, only just got back from holiday yesterday!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 08 16:53:16 +0000 2011",
    idStr: "56399217840758784",
    content: "Two production proposals sent, now the wait for feedback.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 08 12:57:59 +0000 2011",
    idStr: "56340007757152256",
    content:
      "Directing went reasonably well again, now need to come up with ideas for third year projects quick!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 07 17:54:05 +0000 2011",
    idStr: "56052136903057408",
    content:
      "Directing went better than expected today, just need to finish it off tomorrow.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 07 07:53:28 +0000 2011",
    idStr: "55900985062727681",
    content: "Today I direct. I also must come up with some third year ideas.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 05 20:12:38 +0000 2011",
    idStr: "55362227041087488",
    content:
      "Meeting for new project went well today, should be good! Just need to develop ideas further.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 05 10:10:05 +0000 2011",
    idStr: "55210590179823616",
    content:
      "Meeting for secret(?) project rearranged to today, also various other meetings this afternoon, then need to think about third year ideas.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Apr 04 17:58:04 +0000 2011",
    idStr: "54965975069638656",
    content:
      "First meeting for a secret(?) project to be rearranged, ideas on style and workflow initiated however.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 02 08:00:19 +0000 2011",
    idStr: "54090772890398721",
    content:
      "Just realised that, to different extents, I've been working on five different films this week.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Mar 31 19:27:12 +0000 2011",
    idStr: "53538853369298944",
    content:
      "Tried to do some editing this evening, but no footage showed up on the tape, not sure quite why as of yet!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 31 14:39:39 +0000 2011",
    idStr: "53466490875289601",
    content:
      "Had fun @MilesToneFilm and @ParashootsUK house dressing the set today with @EmilyRogueFrame.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 31 09:23:32 +0000 2011",
    idStr: "53386936232067072",
    content:
      "Been nominated for a Volunteer Award at York St John Students' Union!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 31 09:20:14 +0000 2011",
    idStr: "53386106342866944",
    content:
      "Did some third year running and had an interview with the brilliant @PaulMorricone yesterday. Helping out with some set dressing today.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 30 20:35:28 +0000 2011",
    idStr: "53193648183050240",
    content: "Showreel of editing: http://www.youtube.com/watch?v=HbRPfRHQEHg",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 30 00:28:59 +0000 2011",
    idStr: "52890025444118529",
    content:
      "Created a showreel with a menu and extras and all that, took ages, not used to Premiere or working with sound in After Effects.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 28 09:28:40 +0000 2011",
    idStr: "52301065118425088",
    content:
      "Got some kind of workshop in half an hour, then the rest of an essay to write.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 26 12:17:22 +0000 2011",
    idStr: "51618745273159681",
    content:
      "Off to see what Blob's Blog is all about later and see how the intro with @ROGUEFRAME turned out. But for now, an essay must be written.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 25 13:07:44 +0000 2011",
    idStr: "51269030702612481",
    content: "Oh it seems as though I've already posted that!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 25 13:06:26 +0000 2011",
    idStr: "51268704373190656",
    content:
      "Won the election to take on the role of Volunteering Officer with 177/188 votes!",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Mar 24 21:30:57 +0000 2011",
    idStr: "51033281529004032",
    content:
      "Won the election for Volunteering Officer at York St John Students' Union!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 23 12:36:44 +0000 2011",
    idStr: "50536453343678464",
    content:
      "One day left of Union Council elections, still time to vote YSJers! Celebrate The Arts event tomorrow in the Quad.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Mar 22 13:17:41 +0000 2011",
    idStr: "50184372057411585",
    content:
      'Hilarious RT @ParashootsUK love how flippant Hitch is... RT @richbcam They don\'t make movie trailers like this anymore <a href="http://www.youtube.com/watch?v=bSlvWajeBVc">http://www.youtube.com/watch?v=bSlvWajeBVc</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 20 18:02:55 +0000 2011",
    idStr: "49531377212858368",
    content:
      '"Michael Bay, director of Transformers & reigning antichrist of artistically bankrupt blockbuster cinema" http://bit.ly/9LtbYE @KermodeMovie',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 20 13:12:59 +0000 2011",
    idStr: "49458415075999744",
    content:
      "LGBT social later, essay writing for now! Maybe watch Christopher and His Kind on iPlayer seeing as the PS3 was too full to record it all.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 11 06:50:07 +0000 2020",
    idStr: "1270971556466851840",
    content:
      'Full thread <a href="https://twitter.com/kat_blaque/status/1270828452334104576">https://twitter.com/kat_blaque/status/1270828452334104576</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jun 11 06:10:08 +0000 2020",
    idStr: "1270961496617607169",
    content:
      'Useful thread. Some missing points:<br>- non-binary people are non-binary<br>- as well as avoiding "cis", Rowling\'s essay is riddled with misgendering of hypothetical trans people, which undermines any claims by her of sincere engagement with and respect for a breadth of trans people <a href="https://twitter.com/Carter_AndrewJ/status/1270787941275762689">https://twitter.com/Carter_AndrewJ/status/1270787941275762689</a>',
    favouriteCount: "5",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 19 23:08:00 +0000 2011",
    idStr: "49245768577581056",
    content:
      "Need to remember what book says that practice is the way to learn where to cut. Anyone any ideas?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 19 13:18:58 +0000 2011",
    idStr: "49097533720506368",
    content:
      "Enter to win a Canon 5D Mk II & a $500 designer photo album from @AlbumEpocaUS & Scott Bourne. Pls RT. Info at: http://bit.ly/hfjpxk",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Mar 19 13:14:10 +0000 2011",
    idStr: "49096325005979648",
    content:
      "LGBT coffee in less than an hour, suppose it's time to get ready.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 19 13:13:32 +0000 2011",
    idStr: "49096166104760320",
    content:
      "Chroma Key is possible using green paint with inconsistent shading, look out fellow student crews, @longshotprds is experimental!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 18 09:07:00 +0000 2011",
    idStr: "48671732780908544",
    content:
      "Voting open for Union Council elections. I have no candidates competing against me, so if I don't win something's seriously wrong!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 16 23:44:33 +0000 2011",
    idStr: "48167800719679488",
    content:
      "Had a good driving lesson today, tomorrow is the briefing session for Union Council candidates and a production meeting with @longshotprds.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 15 23:34:24 +0000 2011",
    idStr: "47802858124476416",
    content:
      "Not many people at the York and District LGBT Forum tonight, but got some stuff sorted anyway. Driving lesson tomorrow, about halfway now!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 15 16:28:24 +0000 2011",
    idStr: "47695653979160576",
    content:
      "Sign up to be involved in @ROGUEFRAME's 'Hobgoblyn' short film on their website now. See the site for more info: http://tinyurl.com/6antkaa",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 14 08:33:53 +0000 2011",
    idStr: "47213849962741760",
    content:
      "Hopefully doing some experimental intro sequences this morning. Paint and pills, radical!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 12 12:46:43 +0000 2011",
    idStr: "46552700577521664",
    content:
      "Realised it may be a good idea to start essay soon, considering the next two weeks are gunna be very busy!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 11 15:23:27 +0000 2011",
    idStr: "46229757574119424",
    content:
      "Interested to see how the Brunswick video turns out @ROGUEFRAME - http://rogue-frame.tumblr.com/",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 11 15:23:06 +0000 2011",
    idStr: "46229669795725312",
    content:
      "Check out @ROGUEFRAME's new blog - http://rogue-frame.tumblr.com/",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 11 13:18:36 +0000 2011",
    idStr: "46198337099137024",
    content: "Reformatted CV to a more filmy style. ENTS meeting later.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 10 18:20:14 +0000 2011",
    idStr: "45911856761667584",
    content: "Need to fill in the census and Union Council pack.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 10 18:19:33 +0000 2011",
    idStr: "45911684791021568",
    content:
      "Very much enjoyed the lecture from Edd Buckley and Janette Hodds, very informative!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 09 23:46:57 +0000 2011",
    idStr: "45631691800330240",
    content:
      "LinkedIn profile updated, still a little to do but looking better. Take a look at it!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 09 23:44:50 +0000 2011",
    idStr: "45631159887085568",
    content:
      "Two very useful meetings today and a good driving lesson. Running for Volunteering Officer in Union Council elections, created publicity.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 09 15:14:35 +0000 2011",
    idStr: "45502747407163392",
    content:
      "Need to fill in census and Union Council election pack. Also need to rearrange CV.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 08 21:45:21 +0000 2011",
    idStr: "45238700409495552",
    content:
      "The @CrackedLensPro networking event was pretty good, bit overcrowded though! Bigger venue next time.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 08 01:05:30 +0000 2011",
    idStr: "44926681760268288",
    content: "The Machinist is some psychological stuff.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 05 13:12:26 +0000 2011",
    idStr: "44022457081921536",
    content:
      "Eventful shoot today with @ROGUEFRAME. Live Lounge later, should be good!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 05 05:53:21 +0000 2011",
    idStr: "43911960764485633",
    content:
      "Off for a spot of music video filming with @ROGUEFRAME for @hungryghosts. Then later it's Live Lounge.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 04 21:19:25 +0000 2011",
    idStr: "43782621792186368",
    content:
      "Enjoyed LGBT screening of 'Beautiful People'. Filming tomorrow from about 6.30am with @ROGUEFRAME. Will have to go to sleep soon!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Mar 04 10:37:22 +0000 2011",
    idStr: "43621047844605952",
    content:
      "Work experience on Endemol's Sex Education Show! http://tinyurl.com/6y2lwmw @Step2InspireTV",
    favouriteCount: "1",
    retweetCount: "5",
  },
  {
    createdAt: "Fri Mar 04 10:32:29 +0000 2011",
    idStr: "43619816807993344",
    content:
      "Creating soundscape, scene rehearsal, @ysjsuents meetings, then LGBT/C.E.G. screening. Not feeling up to all that, but never mind!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 03 18:32:33 +0000 2011",
    idStr: "43378240986947585",
    content:
      "Had a good production meeting today, and guest lecturer @PaulMorricone was very interesting.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 03 11:19:50 +0000 2011",
    idStr: "43269346906226688",
    content:
      "Production meeting with @longshotprds in an hour and a half. Need to read the script!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 02 11:48:50 +0000 2011",
    idStr: "42914256445915136",
    content:
      "Enter to win a Canon 5D Mk II & a $500 designer photo album from @AlbumEpocaUS & Scott Bourne. Pls RT. Info at: http://bit.ly/hfjpxk",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 02 11:46:35 +0000 2011",
    idStr: "42913689682186240",
    content: "Driving lesson today. Band practice with @julietband tomorrow!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 01 23:04:06 +0000 2011",
    idStr: "42721802149036033",
    content: "Waiting for 'How TV Ruined Your Life' to be put onto iPlayer.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 01 23:02:31 +0000 2011",
    idStr: "42721407494393856",
    content:
      "'Episodes' has been recommissioned http://www.bbc.co.uk/pressoffice/pressreleases/stories/2011/03_march/01/episodes.shtml",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 01 22:30:46 +0000 2011",
    idStr: "42713415726280704",
    content:
      "Had a good afternoon filming with @ROGUEFRAME , looking forward to seeing how it turns out. Thanks for the drink @EmilyRogueFrame!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Mar 01 13:14:09 +0000 2011",
    idStr: "42573340036182016",
    content:
      "Doing some filming for Brunswick Organic Nursery with @ROGUEFRAME in half an hour.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 28 18:18:13 +0000 2011",
    idStr: "42287473472188416",
    content:
      "Finally done a track and jib demo so I can sign off for it, even though I'd used it loads before!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 27 00:38:00 +0000 2011",
    idStr: "41658272733855744",
    content:
      "Seventeen months with Jake today (27th), and over three quarters of a year engaged!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 27 00:36:21 +0000 2011",
    idStr: "41657854641451008",
    content:
      "Created an intro sequence for Long Shot Productions using After Effects (first time I've used it). Need to add some sound effects.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 26 17:14:48 +0000 2011",
    idStr: "41546734660354048",
    content:
      "Need to find a screwdriver or screwdriver head small enough to manipulate the MacBook Pro's tiny screws.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 26 17:13:48 +0000 2011",
    idStr: "41546484461600768",
    content:
      "Got some insulation tape for shot blocking / marking, six rolls for a pound (from Pound Land)!",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Feb 26 10:20:52 +0000 2011",
    idStr: "41442564632625152",
    content:
      "'Off The Street: Homelessness in York' documentary... http://www.youtube.com/watch?v=63lSs6R61c8 http://www.youtube.com/watch?v=7MzQX39pymE",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 26 02:45:12 +0000 2011",
    idStr: "41327892906520576",
    content:
      "YouTube profile overhaul complete! Check out my rejuvenated page http://www.youtube.com/user/yndajas.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 26 02:23:17 +0000 2011",
    idStr: "41322380450209792",
    content:
      "'Off The Street: Homelessness in York' documentary...<br>http://www.youtube.com/watch?v=63lSs6R61c8<br>http://www.youtube.com/watch?v=7MzQX39pymE",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 25 23:03:13 +0000 2011",
    idStr: "41272030938673152",
    content:
      "700 minutes to upload a video to YouTube! Really? Just made dinner for Jake and had LGBT film screening earlier.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 25 18:15:17 +0000 2011",
    idStr: "41199568347602944",
    content:
      "On the way to #LGBTHistoryMonth screening of 'Prayers For Bobby'. Back to post link to homelessness doc after.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 25 18:11:05 +0000 2011",
    idStr: "41198514218348544",
    content:
      "First part of homelessness doc up, second part on its way, will tweet the links when both parts are up.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 25 13:18:41 +0000 2011",
    idStr: "41124926261968896",
    content:
      "Anyone know of a program that will split a video file in two without changing any settings to make it relatively smaller or larger?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 25 12:26:22 +0000 2011",
    idStr: "41111760782114816",
    content:
      "Good production meeting with @longshotprds. Script starting to look pretty good.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 25 11:58:26 +0000 2011",
    idStr: "41104731501903872",
    content:
      "'RSPCA Charity Shop' now live: http://www.youtube.com/watch?v=Y81vdPHkkNs",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 25 09:21:25 +0000 2011",
    idStr: "41065218998149120",
    content:
      "'How to Make a Cocktail' now live: http://www.youtube.com/watch?v=5uksbWE6p1M",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 25 08:49:52 +0000 2011",
    idStr: "41057279268761600",
    content: "Production meeting in just over an hour.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 25 08:49:33 +0000 2011",
    idStr: "41057199878979584",
    content:
      "Now re-uploading the shorter videos and splitting the homelessness documentary ready for upload.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 25 08:48:48 +0000 2011",
    idStr: "41057008006205440",
    content:
      "About six hours uploading overnight, then wake up to find out YouTube won't let me upload more than 15 minutes and the other two failed.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 24 22:42:02 +0000 2011",
    idStr: "40904313651863553",
    content:
      "'How to Make a Cocktail' video and 'RSPCA Charity Shop' to be uploaded straight after.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 24 22:24:05 +0000 2011",
    idStr: "40899794956189696",
    content:
      "Uploading homelessness documentary 'Off The Street' to YouTube. Got rid of all my old rubbish. Could take over six hours in total to upload!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 24 20:31:07 +0000 2011",
    idStr: "40871364705390592",
    content:
      "Ryan came second out of six. Dave, Dan and leigh are the new sabbatical officers.",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Feb 24 12:48:43 +0000 2011",
    idStr: "40754997658390529",
    content: "Time for a production meeting! Lots to sort out!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Feb 24 12:01:07 +0000 2011",
    idStr: "40743019091075072",
    content:
      "Production meeting in an hour. TIme to get ready! Find out the results of Ryan's campaign later!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Feb 23 10:58:44 +0000 2011",
    idStr: "40364930880389121",
    content: "Driving lesson at one.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 22 19:56:04 +0000 2011",
    idStr: "40137769930063872",
    content:
      "Time to do some washing up after having spent ages setting up Facebook pages and dealing with emails and everything.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 22 19:48:46 +0000 2011",
    idStr: "40135933764452352",
    content:
      "Follow my production company's new Facebook page http://www.facebook.com/pages/Long-Shot-Productions/195439280475941",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 22 00:35:37 +0000 2011",
    idStr: "39845732647309312",
    content:
      "Series finale of 'Episodes' was a complete cliff hanger, must know what happens next!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 21 23:27:55 +0000 2011",
    idStr: "39828694809714688",
    content: "Follow my production company's new page @longshotprds!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 21 22:13:16 +0000 2011",
    idStr: "39809907108749312",
    content:
      "Going to watch episode six of 'Episodes' on iPlayer. By the time that's finished, episode seven might be up too!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 21 20:00:27 +0000 2011",
    idStr: "39776484663103488",
    content: "Might be going to @MezzoFilms in the summer!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 21 10:14:02 +0000 2011",
    idStr: "39628909024780288",
    content: "It's National Student Volunteering week!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Feb 21 10:06:11 +0000 2011",
    idStr: "39626931783729153",
    content:
      "Just helped hang a big poster outside a first floor room for Ryan's YSJSU VPSA campaign. Never done that before!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 20 23:05:46 +0000 2011",
    idStr: "39460730692583424",
    content:
      "Some more campaigning tomorrow morning, and in the evening will be setting up an email and twitter account for Long Shot Productions.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 20 20:36:38 +0000 2011",
    idStr: "39423203524874240",
    content:
      "Going to watch 'The People's Supermarket' on Channel 4 +1 soon, and cook some stone-baked (someone tell me what it means) Margherita pizzas.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 20 19:59:04 +0000 2011",
    idStr: "39413748338790400",
    content:
      "Trying to find people on LinkedIn, it's not the easiest site to find people you know on. Anyone here have it?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 20 17:03:55 +0000 2011",
    idStr: "39369668812603392",
    content: "... 'Gomorra' and 'La Haine', 'Persepolis', 'Precious'....",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 20 17:02:50 +0000 2011",
    idStr: "39369399060267008",
    content:
      "Interesting choices for everyone's favourite film, not seen many of them! My favourite is 'In Bruges', then 'Inception', 'Idlewild'...",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 20 14:07:56 +0000 2011",
    idStr: "39325383551614976",
    content: "What's everyone's favourite film?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 20 13:34:08 +0000 2011",
    idStr: "39316874487533568",
    content:
      "Sorting out bands to play at Live Lounge in March. Off to town soon to find Jake, we're getting an electric blanket! Feel like an old man!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 03 23:47:05 +0000 2020",
    idStr: "1268328380937592833",
    content:
      'Read the thread. <a href="https://t.co/Iee1CYAGy1">https://t.co/Iee1CYAGy1</a>',
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Feb 20 11:33:02 +0000 2011",
    idStr: "39286399618256896",
    content: "A day of rest, for once!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Feb 20 00:48:19 +0000 2011",
    idStr: "39124151268679680",
    content:
      "Just watched the series finale of 'Hustle'. Sad ending, not used to that from the show, but it does bring some new emotional depth.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 19 16:15:15 +0000 2011",
    idStr: "38995036020408320",
    content: "Should I join @ShootingPeople? Who is a member? Is it worth it?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 19 15:50:30 +0000 2011",
    idStr: "38988804522123264",
    content:
      "Hopefully will be back practicing with my band @julietband again this week, been a few months now! May see us at Live Lounge some time.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 19 15:46:18 +0000 2011",
    idStr: "38987751235784704",
    content:
      'Very interesting facts about the way media and the world is changing - Social Media Revolution 2 (Refresh) <a href="http://www.youtube.com/watch?v=lFZ0z5Fm-Ng">http://www.youtube.com/watch?v=lFZ0z5Fm-Ng</a> @youtube',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 19 15:40:59 +0000 2011",
    idStr: "38986409993961472",
    content:
      "Watching 'Space Jam' with Jake, wonderful bit of light-hearted fun perfect for a Saturday afternoon rest!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 19 15:29:54 +0000 2011",
    idStr: "38983623159844864",
    content:
      "Back from charity bucketing for @VSOUK with RAG, and LGBT coffee. Now time for a little rest before setting up Live Lounge.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 19 11:47:27 +0000 2011",
    idStr: "38927640178065408",
    content:
      "Charity bucketing with Jake and all in Parliament Street at 12.30. Then LGBT coffee!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Feb 19 02:05:17 +0000 2011",
    idStr: "38781132485042176",
    content:
      "Back from some campaigning, up in about eight hours for charity work, more campaigning, LGBT coffee and then Live Lounge.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 21:22:41 +0000 2011",
    idStr: "38710014126473216",
    content:
      "Back from #LGBTHistoryMonth screening of 'Saving Face'; was a very good film! Off to continue the campaign later for Ryan as VPSA at YSJSU.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 15:40:50 +0000 2011",
    idStr: "38623984186687490",
    content: "Made Jake a tea, now time to go to ENTs meeting.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 15:14:50 +0000 2011",
    idStr: "38617442334937088",
    content:
      "Done a little bit of campaigning for @ryan4vpsa @rsb90 and secretly @DanielRidsdale and @LeighHankinson. Now time to make Jake a tea!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 13:25:40 +0000 2011",
    idStr: "38589969119318016",
    content:
      "Production meeting and rehearsal both cancelled, now waiting for Jake. ENTs later and #LGBTHistoryMonth screening of 'Saving Face'.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 11:57:59 +0000 2011",
    idStr: "38567904853237760",
    content:
      "Had a very informative Screenwriting development session with Jimmy Richards, now time for a production meeting before some scene rehearsal.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 10:12:11 +0000 2011",
    idStr: "38541277238665216",
    content:
      "Printed stuff off for personal Screenwriting meeting with Jimmy Richards, now time to get ready and go!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 03:59:41 +0000 2011",
    idStr: "38447534489870336",
    content:
      "Enough setting up of LinkedIn, Twitter and emailing potential work experience contacts for tonight. Time for about five hours sleep.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 03:56:14 +0000 2011",
    idStr: "38446668076683264",
    content:
      "In my opinion, @questlove is the finest drummer ever. No-one plays for the song and keeps a tight but beautiful beat quite like ?uestlove.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 03:06:58 +0000 2011",
    idStr: "38434267415592960",
    content:
      "Also got an ENTs meeting and will be assisting in Ryan's campaign to be elected Vice President of Student Activities at YSJ Uni SU.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 03:05:00 +0000 2011",
    idStr: "38433773913772032",
    content:
      "And also as part of #LGBT History Month, there will be a screening of 'Saving Face' tomorrow in QS-111 lecture theatre at YSJ Uni.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 03:03:36 +0000 2011",
    idStr: "38433423035088896",
    content:
      "Script development meeting tomorrow with Jimmy Richards. Got a few ideas to have a look at, come more developed than others.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Feb 18 03:02:44 +0000 2011",
    idStr: "38433205342314496",
    content:
      "New Twitter Profile! Old one moved to a different name so I can use this one for more professional purposes.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 21 23:29:16 +0000 2020",
    idStr: "1263612854692970496",
    content:
      "Where's the \"do not show me people who don't think the monarchy should be abolished\" filter?",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 13 12:32:58 +0000 2020",
    idStr: "1260548592537919488",
    content:
      'Have you seen/used Around the Toilet\'s work? (A zine about sociocultural issues around the toilet - I wrote about gender-neutral toilet signs.) If not, check it out! <a href="https://twitter.com/cctoilettalk/status/1260541782401716226">https://twitter.com/cctoilettalk/status/1260541782401716226</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Apr 23 01:27:30 +0000 2020",
    idStr: "1253133364854480896",
    content:
      "Who plays a fictionalised version of himself playing a fictionalised version of himself in season seven of a show in which the co-creator of a show in which he originally played a fictionalised version of himself plays a fictionalised version of himself?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Apr 21 14:23:08 +0000 2020",
    idStr: "1252603783881936898",
    content:
      "'Non-Binary Lives: An Anthology of Intersecting Identities' is out today. <a href=\"https://twitter.com/yndajas/status/1242814851900157952\">https://twitter.com/yndajas/status/1242814851900157952</a>",
    favouriteCount: "5",
    retweetCount: "2",
  },
  {
    createdAt: "Wed Mar 25 14:05:25 +0000 2020",
    idStr: "1242814851900157952",
    content:
      '\'Non-Binary Lives: An Anthology of Intersecting Identities\' is out 21 April. I have a chapter about transfemme stuff. Available for pre-order #nonbinary<br><br>Edited by Jos Twist @GenderBen @megjohnbarker @mixosaurus<br><br>Image description/more words on Instagram: <a href="https://www.instagram.com/p/B9Fmrf2Fyav">https://www.instagram.com/p/B9Fmrf2Fyav</a> <div class="gallery"><ul><li><a href="../../tweets_media/1242814851900157952-ET9dhGNWsAEu4JB.jpg"><img src="../../tweets_media/1242814851900157952-ET9dhGNWsAEu4JB.jpg"></a></li></ul></div>',
    favouriteCount: "38",
    retweetCount: "17",
  },
  {
    createdAt: "Wed Jan 22 09:48:08 +0000 2020",
    idStr: "1219919667046776832",
    content: "Today I learned July to November are JASON.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Nov 20 14:28:27 +0000 2019",
    idStr: "1197159778151260160",
    content:
      '.@TDoRinfo I put together this pronunciation guide based on your list, with the help of friends from Colombia, India and Belarus, plus an Italian who lived/worked in Brazil. Sharing in case it\'s useful for people holding vigils for #TDoR #TDoR2019<br><br><a href="https://docs.google.com/spreadsheets/d/1Sgbuknhvx6tsN1BEbuSJZJeidUPKH6Ody-Wyrg00yV8/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1Sgbuknhvx6tsN1BEbuSJZJeidUPKH6Ody-Wyrg00yV8/edit?usp=sharing</a>',
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Oct 18 08:42:36 +0000 2019",
    idStr: "1185113939836882945",
    content:
      'Exactly. <a href="https://twitter.com/PakCricket_/status/1184575623819354112">https://twitter.com/PakCricket_/status/1184575623819354112</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 14 09:14:55 +0000 2019",
    idStr: "1150332839986114560",
    content:
      "I'm in this. Happy International Non-binary People's Day! #nonbinary #NonBinaryDay #InternationalNonBinaryDay <a href=\"https://twitter.com/PinkNews/status/1150329163167010817\">https://twitter.com/PinkNews/status/1150329163167010817</a>",
    favouriteCount: "9",
    retweetCount: "5",
  },
  {
    createdAt: "Sun Jul 14 09:14:10 +0000 2019",
    idStr: "1150332650403618816",
    content:
      "It's International Non-binary People's Day and here's an article by @vicparsons_ I'm in alongside lots of glorious people, revealing what makes us proud to be non-binary: <a href=\"https://www.pinknews.co.uk/2019/07/14/17-people-proud-non-binary-day\">https://www.pinknews.co.uk/2019/07/14/17-people-proud-non-binary-day</a> #nonbinary #NonBinaryDay #InternationalNonBinaryDay",
    favouriteCount: "16",
    retweetCount: "4",
  },
  {
    createdAt: "Wed Jul 03 13:13:09 +0000 2019",
    idStr: "1146406524769771520",
    content:
      'Turns out I\'m a champion athlete (in group 8 of 10).<br><br>Lee Valley, Local @Tennisleagues, round 21: <a href="https://localtennisleagues.com/leevalley/rounds/singles/21">https://localtennisleagues.com/leevalley/rounds/singles/21</a> [image text available here under group 8] <div class="gallery"><ul><li><a href="../../tweets_media/1146406524769771520-D-jap6WXsAA7rl0.jpg"><img src="../../tweets_media/1146406524769771520-D-jap6WXsAA7rl0.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 21 12:18:49 +0000 2019",
    idStr: "1142044197937209346",
    content:
      'Saw this Kung Fu Panda quote used on a presentation: "You are the master of your destiny: No one and nothing can come in between you and your destiny except you. Take destiny by the horns and have fun."<br><br>Where\'s your analysis of power structures, material inequality etc? <div class="gallery"><ul><li><a href="../../tweets_media/1142044197937209346-D9lbI0cXoAAXceg.jpg"><img src="../../tweets_media/1142044197937209346-D9lbI0cXoAAXceg.jpg"></a></li></ul></div>',
    favouriteCount: "6",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jun 19 17:41:11 +0000 2019",
    idStr: "1141400547825573889",
    content:
      'I think this is the open letter in response to Kathleen Stock that folks can sign to support trans people in higher education: <a href="https://docs.google.com/forms/d/e/1FAIpQLSffvD647-ujyDwA9J7WaopjNDsBSZ1YxZIcrrlmZWDmq08Jnw/viewform">https://docs.google.com/forms/d/e/1FAIpQLSffvD647-ujyDwA9J7WaopjNDsBSZ1YxZIcrrlmZWDmq08Jnw/viewform</a> #NBinHE',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat May 04 15:32:11 +0000 2019",
    idStr: "1124698240836952064",
    content:
      "Where are the people of colour on Frankie Boyle's New World Order this season?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 01 09:04:33 +0000 2019",
    idStr: "1123513527916998656",
    content:
      'Standing (sitting) against hate.<br><br>---<br><br>All are welcome. Whatever your faith, whatever your race, your sexuality, your gender, whether you are deaf or disabled. All are welcome. We are more than our differences. We are working to combat hate. <a href="https://twitter.com/CST_UK/status/1123452130394877954">https://twitter.com/CST_UK/status/1123452130394877954</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 18 22:01:13 +0000 2019",
    idStr: "1107763916212449280",
    content:
      'A very awful decision. Oh capitalism. <a href="https://twitter.com/netflix/status/1106246147771764736">https://twitter.com/netflix/status/1106246147771764736</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Aug 28 13:26:04 +0000 2022",
    idStr: "1563880596740481025",
    content:
      '🎉 <a href="https://twitter.com/usopen/status/1563573435619414016">https://twitter.com/usopen/status/1563573435619414016</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 26 14:18:04 +0000 2019",
    idStr: "1100399604632309762",
    content:
      "@Nintendo @NintendoEurope @NintendoUK any response regarding recognising gender diversity?",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Feb 26 14:13:51 +0000 2019",
    idStr: "1100398540478664710",
    content:
      'One of the articles quotes an explicitly identified genderqueer person, and there\'s no doubt many more non-binary folk among the hundreds of respondents. "Trans people" is fine, or "trans women, men and non-binary people", or "female, male and non-binary trans people". [2/2]',
    favouriteCount: "4",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Feb 26 14:11:39 +0000 2019",
    idStr: "1100397986935459842",
    content:
      '.@NicolaKSDavis @SocietyGuardian @guardian Could both articles published today be updated to include non-binary people (in phrases like "trans men and women")? [1/2] @CissexismDaily',
    favouriteCount: "7",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Feb 23 13:55:12 +0000 2019",
    idStr: "1099306686483968001",
    content:
      'Can I choose to specify that I\'m non-binary @Nintendo @NintendoEurope @NintendoUK?<br><br>@CissexismDaily<br><br>[Image description: Nintendo survey for Super Smash Bros. Ultimate, showing a gender question with the options "female", "male" and "choose not to specify".] <div class="gallery"><ul><li><a href="../../tweets_media/1099306686483968001-D0GFmemWoAA1bsM.jpg"><img src="../../tweets_media/1099306686483968001-D0GFmemWoAA1bsM.jpg"></a></li></ul></div>',
    favouriteCount: "11",
    retweetCount: "3",
  },
  {
    createdAt: "Thu Jan 17 01:08:34 +0000 2019",
    idStr: "1085705405794344960",
    content:
      "@SimonCTheriault @decolonialqueer @BarWot @cocoabuttershow Bar Wotever has community news where other nights advertise, along with initiatives and groups. Based on the pronouns on your profile, you might be interested in @nonbinaryldn, which has a very active Facebook group and regular meet ups.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 29 14:19:19 +0000 2018",
    idStr: "1079019032198725632",
    content:
      'Cardi B, Janelle Monáe, Mac Miller and Saba all highlights for me. Kamasi Washington maybe but haven\'t listened enough, and same to the rest. Wondering where @noname is at though... <a href="https://twitter.com/okayplayer/status/1075896126337736704">https://twitter.com/okayplayer/status/1075896126337736704</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Dec 29 12:24:00 +0000 2018",
    idStr: "1078990014460104704",
    content:
      '.@travisalabanza speaks so much truth about non-binary experience with patience and passion. It\'s always such a joy to hear them articulate lived reality and back it up with facts, in sharp contrast to the artifice that gets crafted around us from other corners of society. <a href="https://twitter.com/BBCr4today/status/1078930618833092609">https://twitter.com/BBCr4today/status/1078930618833092609</a>',
    favouriteCount: "6",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Dec 25 12:05:51 +0000 2018",
    idStr: "1077535894440214528",
    content:
      "@davidadger @OnlyConnectQuiz Well, House of Games is close (and much more manageable!).",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Dec 11 02:10:18 +0000 2018",
    idStr: "1072312590162890754",
    content:
      'I immediately thought this was Jackie Fast playing something of a self-caricaturing/parodic character two years before appearing on #TheApprentice, but no, it\'s Katherine Ryan. Show: "Sunny D" (from Dane Baptiste), episode two. <div class="gallery"><ul><li><video controls src="../../tweets_media/1072312590162890754-36qIrdduJaMPIt66.mp4?tag=6"></video></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Nov 15 12:21:48 +0000 2018",
    idStr: "1063044393169502208",
    content: "A stranger pronounced my name right without instruction 😮",
    favouriteCount: "8",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Nov 06 23:18:28 +0000 2018",
    idStr: "1059948157050806273",
    content:
      "@thervt @BoyzMagazine @GayEssential @UK_Gay_News @londongayguide @VauxhAllOne @VauxhallVoices @VauxhallGrove @gr8musicvenues (Just tweeting that again, because the original seems to have been disconnected from the thread.)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Nov 05 04:39:28 +0000 2018",
    idStr: "1059304164751302661",
    content:
      '"The marriage [...] produced three children" - lots of normative assumptions in this statement, including:<br>(1) married people are the only (valid) producers of children<br>(2) producing children/creating a family is a fundamental purpose of marriage',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 04 18:53:29 +0000 2018",
    idStr: "1059156695606329344",
    content:
      '[Image description: GP at hand sign-up form, including a gender field with the options "Female" and "Male".]',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Nov 04 18:51:44 +0000 2018",
    idStr: "1059156258249494528",
    content:
      'Just emailed you @GPatHand @babylonhealth, but wanted to raise it here as well. I\'d find it much easier to discuss sensitive issues in the comfort of my own home, but the compulsory binary gender field during sign-up isn\'t the best welcome to non-binary patients @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/1059156258249494528-DrLgZY7X0AAlY_8.jpg"><img src="../../tweets_media/1059156258249494528-DrLgZY7X0AAlY_8.jpg"></a></li></ul></div>',
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Nov 04 02:30:47 +0000 2018",
    idStr: "1058909392790274050",
    content:
      "#Burgerz by @travisalabanza: wow. Draws you in with humour/charm, then pulls the rug from under your feet with much-needed sense of urgency. As noted post-show, there's been a lack of long-form theatre by/about trans people - we *need* more, particularly from femmes of colour.",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Oct 27 18:38:54 +0000 2018",
    idStr: "1056253925849006081",
    content:
      "P.s. you can help support trans/non-binary art and publishing by donating to name and none via the website now!",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 27 18:31:21 +0000 2018",
    idStr: "1056252026290688002",
    content:
      'I have a poem in this! Available to view digitally and purchase a hard copy on 20 November. <a href="https://twitter.com/nameandnone/status/1054475362111913984">https://twitter.com/nameandnone/status/1054475362111913984</a>',
    favouriteCount: "7",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Oct 21 21:38:09 +0000 2018",
    idStr: "1054124705098145792",
    content:
      "Doing some post-#NWAV47 exploration of Saks and just saw a $23,000 coat. Some people can drop what a graduate student might be lucky to live off for a year on a single coat. What is this world?",
    favouriteCount: "14",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 20 18:52:58 +0000 2018",
    idStr: "1053720748697772037",
    content:
      'Yeah - regularly have similar flinching/dysphoric experiences when (cis) linguists talk gender. Better practice please #NWAV47 <a href="https://twitter.com/inthelemonlight/status/1053716865397284864">https://twitter.com/inthelemonlight/status/1053716865397284864</a>',
    favouriteCount: "7",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 20 18:48:44 +0000 2018",
    idStr: "1053719682543423490",
    content:
      "I love the fact that the identity-related sessions are overflowing. Identity is the best subfield [+lingbook reference] #NWAV47",
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 20 18:22:46 +0000 2018",
    idStr: "1053713147595554817",
    content:
      ".@lzimman issuing an important rallying cry to sociolinguists/phoneticians for better theory/practice to recognise reality of gender/sex diversity (building on earlier presentations by @mstxddxrd, Becker and me - we're growing, yay!) #NWAV47",
    favouriteCount: "6",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 20 17:42:57 +0000 2018",
    idStr: "1053703129273901057",
    content: "Lack*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 20 17:15:05 +0000 2018",
    idStr: "1053696118297649152",
    content:
      'Yesss @mstxddxrd! <a href="https://twitter.com/rlslinguistics/status/1053667044800020481">https://twitter.com/rlslinguistics/status/1053667044800020481</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 20 16:57:18 +0000 2018",
    idStr: "1053691639082946560",
    content:
      'OMG I missed this. I want to play! #NWAV47 <a href="https://twitter.com/kirbyconrod/status/1053664787987660800">https://twitter.com/kirbyconrod/status/1053664787987660800</a>',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Oct 20 16:32:12 +0000 2018",
    idStr: "1053685324877086720",
    content:
      'Yesss @katiedrager! #NWAV47 <a href="https://t.co/vCNY1pMzWU">https://t.co/vCNY1pMzWU</a>',
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 20 16:28:28 +0000 2018",
    idStr: "1053684386858713089",
    content:
      'And suggested that this may be because of a focus on white performances of masculinity/toughness in previous research - pack of work considering how this works amongst people of colour #NWAV47 <a href="https://twitter.com/grvsmth/status/1053647798225289217">https://twitter.com/grvsmth/status/1053647798225289217</a>',
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Oct 20 15:27:01 +0000 2018",
    idStr: "1053668920513777667",
    content:
      'Excited to see very similar arguments/ideas/results around relative importance of assigned sex/gender, gender and other social factors between paper by Becker and @mstxddxrd and own, immediately before! "Sociolinguistics, expand"! #NWAV47',
    favouriteCount: "10",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Oct 19 14:28:32 +0000 2018",
    idStr: "1053291813266776066",
    content:
      '"if you see someone wearing a pronoun button, please actually check it!" - yesss. I\'m wearing two! #NWAV47 <a href="https://twitter.com/lexicondk/status/1053283131065696256">https://twitter.com/lexicondk/status/1053283131065696256</a>',
    favouriteCount: "6",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Oct 19 00:06:24 +0000 2018",
    idStr: "1053074852788224001",
    content:
      'And fielding a question from Penny Eckert #NWAV47 <div class="gallery"><ul><li><a href="../../tweets_media/1053074852788224001-Dp1F_pnX4AAKPwq.jpg"><img src="../../tweets_media/1053074852788224001-Dp1F_pnX4AAKPwq.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 18 23:20:59 +0000 2018",
    idStr: "1053063420474462208",
    content:
      'Erez Levon of @QMULLinguistics back at alma mater @nyuniversity @nyuling giving the opening keynote at #NWAV47 <div class="gallery"><ul><li><a href="../../tweets_media/1053063420474462208-Dp07mK5WoAAP58b.jpg"><img src="../../tweets_media/1053063420474462208-Dp07mK5WoAAP58b.jpg"></a></li></ul></div>',
    favouriteCount: "5",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 18 20:14:18 +0000 2018",
    idStr: "1053016442445152256",
    content:
      'Was just in a lift with William/Bill Labov that stopped on the fourth floor. Someone excitedly laugh-uttered "fourth floor". Bill looked like he\'d heard it all before. #NWAV47',
    favouriteCount: "127",
    retweetCount: "28",
  },
  {
    createdAt: "Thu Oct 18 19:34:44 +0000 2018",
    idStr: "1053006483552645120",
    content:
      '"I meant to go quicker than fifteen minutes but I live in a dreamland" - Tyler Kendall/all academics ever? #NWAV47',
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 18 19:16:31 +0000 2018",
    idStr: "1053001899593658373",
    content:
      '.@david__jurgens "turns out vegans talk a lot about being vegan" - you got me #NWAV47',
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 18 19:10:09 +0000 2018",
    idStr: "1053000297281478656",
    content:
      "Similar with names. Trans/non-binary folk can complicate assumptions that inform gender coding, but it works for much of the population #NWAV47",
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Oct 18 19:07:31 +0000 2018",
    idStr: "1052999636376580096",
    content:
      ".@david__jurgens notes you can use Twitter profile pronouns, Reddit flairs etc to infer identity. Good start, though not 100% reliable - David acknowledges people lie. Also re: gender, e.g. she/her might be a transfemme non-binary person rather than a woman #NWAV47",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Oct 18 17:42:12 +0000 2018",
    idStr: "1052978165730172929",
    content:
      "CLOx looks incredible! Automated transcription with ~90% accuracy. Definitely going to give this a go with my remaining untranscribed interview data! #NWAV47",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Oct 18 04:47:25 +0000 2018",
    idStr: "1052783182217654272",
    content:
      "I'm in this. I'm in the @nytimes.<br><br>#NYTimes #NewYorkTimes #nonbinary #enby #gender #genderqueer #trans #NewYorkCity #NYC #NewYork <a href=\"https://twitter.com/nytimesphoto/status/1052538475189362688\">https://twitter.com/nytimesphoto/status/1052538475189362688</a>",
    favouriteCount: "14",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Oct 17 05:17:11 +0000 2018",
    idStr: "1052428288088518661",
    content:
      "No ethical consumption under capitalism except this one thing I'm going to guilt people about on Facebook.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Oct 03 11:53:47 +0000 2018",
    idStr: "1047454665997205504",
    content: 'Proudly "a deconstructive freak" - @elvisgomes90, endearingly.',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 27 14:39:09 +0000 2018",
    idStr: "1045321955061182465",
    content:
      'Bandaning... #selfie #selfexpression #queer #instaqueer #nonbinary #genderqueer #enby #transfemme #femme #trans #transgender #they #theythemtheir #oneofthem #thisiswhattranslookslike… <a href="https://www.instagram.com/p/BoO7Pjml-GT/?utm_source=ig_twitter_share&igshid=boqfh1suhp3u">https://www.instagram.com/p/BoO7Pjml-GT/?utm_source=ig_twitter_share&igshid=boqfh1suhp3u</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 24 13:03:52 +0000 2018",
    idStr: "1044210811105943552",
    content:
      "I just made an executive decision to retain a split infinitive* in an abstract. Punk.<br><br>*to reduce the word count",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Sep 22 16:34:22 +0000 2018",
    idStr: "1043539008729632769",
    content:
      "How much of C/conservative ideology can be attributed to the influence and hegemonisation of toxic masculinity? (In particular the glorification of toughness and viewing empathy as weakness.)",
    favouriteCount: "12",
    retweetCount: "4",
  },
  {
    createdAt: "Thu Sep 20 19:38:15 +0000 2018",
    idStr: "1042860507466788865",
    content:
      'Listen to Noname please. <a href="https://t.co/Pqsc1ghAba">https://t.co/Pqsc1ghAba</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 20 13:12:09 +0000 2018",
    idStr: "1042763345324072960",
    content:
      'This thread is truth. <a href="https://twitter.com/RainbowSerina/status/1042705704396709889">https://twitter.com/RainbowSerina/status/1042705704396709889</a>',
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 20 09:14:04 +0000 2018",
    idStr: "1042703429418790912",
    content:
      "Okay, going to call myself out here: I tagged someone in a tweet without properly thinking about the harmful vitriol it would bring to their mentions. Not good. Consent should inform everyday actions/decisions like this and I need to do better.",
    favouriteCount: "9",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Sep 20 08:25:38 +0000 2018",
    idStr: "1042691239047581697",
    content: "Predictable barrage of TERFs in my notifications.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 19 21:59:41 +0000 2018",
    idStr: "1042533715614867456",
    content:
      "@Profess25522065 ... took a cursory glance, guessed and treated me differently based on that guess. An AFAB person could easily look like me with T.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 19 19:03:57 +0000 2018",
    idStr: "1042489490856706050",
    content:
      "Not feeling the power to challenge this, I proceeded upstairs and into next changing room. Told men's section on the other side, though this time I was let in if *I* was comfortable (given information that it was quite busy).<br><br>I even shaved for you @hm *eyeroll* @CissexismDaily",
    favouriteCount: "15",
    retweetCount: "1",
  },
  {
    createdAt: "Wed Sep 19 18:42:15 +0000 2018",
    idStr: "1042484027524034561",
    content:
      'Take clothes from @hm women\'s section to dressing room; told men\'s upstairs. Not in mood to say "I\'m not a man", I utter "these are from this section". Man (?) replies "some of the women are uncomfortable". Nothing changed since @travisalabanza @Topshop ordeal? @CissexismDaily',
    favouriteCount: "73",
    retweetCount: "13",
  },
  {
    createdAt: "Mon Sep 17 12:34:51 +0000 2018",
    idStr: "1041666795638280192",
    content:
      '&gt; Receive email from @Sony addressed "Mr."*<br>&gt; Politely indicate my title is "Mx"<br>&gt; Next email: "Dear Ms."<br><br>We are not a typo!<br><br>---<br><br>* I assume they must default to male-coded title given I no longer have a male-coded name?<br><br>@CissexismDaily <div class="gallery"><ul><li><video controls loop src="../../tweets_media/1041666795638280192-DnS-bEuX0AAAIYf.mp4"></video></li></ul></div>',
    favouriteCount: "6",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Sep 13 19:55:29 +0000 2018",
    idStr: "1040328130458738688",
    content:
      "Been to my first four hip hop gigs this year and almost every time there are so many white people pretending trying so hard to be black.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 10 22:13:32 +0000 2018",
    idStr: "1039275709611552774",
    content: "asylum seekers*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 10 22:13:03 +0000 2018",
    idStr: "1039275588991758336",
    content:
      "That said, this type of stuff is not isolated to one big bad corporation. The Daily Mail invoked dehumanising antisemitic Nazi imagery in 2015 to portray Muslim asylum. See also Charlie Hebdo [2/2] #SerenaWilliams #USOpen #USOpen2018 #USOpen18 #USOpenFinal",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 10 22:07:19 +0000 2018",
    idStr: "1039274145291354112",
    content:
      "No surprise that the paper that published the racist, sexist and fatphobic cartoon of Serena Williams, Naomi Osaka and Carlos Ramos (The Herald Sun) is owned by NewsCorp... [1/2] #SerenaWilliams #USOpen #USOpen2018 #USOpen18 #USOpenFinal",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Sep 07 18:56:56 +0000 2018",
    idStr: "1038139068134117376",
    content:
      'Sooooo cute. <a href="https://twitter.com/espnW/status/1037894541423071237">https://twitter.com/espnW/status/1037894541423071237</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 05 16:03:40 +0000 2018",
    idStr: "1037370687621660673",
    content:
      '😯 you - you followers you - should follow @GreenLee_Anne if you care about social justice (i.e. if you care). <a href="https://twitter.com/GreenLee_Anne/status/1037362803370336256">https://twitter.com/GreenLee_Anne/status/1037362803370336256</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Sep 05 03:38:05 +0000 2018",
    idStr: "1037183059341258752",
    content:
      'Nadal when he lost the opening set 6-0 #USOpen #USOpen2018 #VamosRafa <div class="gallery"><ul><li><video controls loop src="../../tweets_media/1037183059341258752-DmTQfDUXgAAdWhy.mp4"></video></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 04 05:06:52 +0000 2018",
    idStr: "1036843010649149440",
    content:
      'Yay! <a href="https://twitter.com/atptour/status/1036839444278648832">https://twitter.com/atptour/status/1036839444278648832</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Sep 04 04:54:31 +0000 2018",
    idStr: "1036839905966673921",
    content: "Go John Millman! #USOpen #USOpen2018",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 03 19:21:29 +0000 2018",
    idStr: "1036695697003884549",
    content:
      'Excited for this and to see other trans-focused work from @kirbyconrod and @lzimman! (And gay stuff from @_domatron!) #NWAV47 <a href="https://twitter.com/nwav47/status/1036306661277949952">https://twitter.com/nwav47/status/1036306661277949952</a>',
    favouriteCount: "7",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 03 12:36:50 +0000 2018",
    idStr: "1036593861907361793",
    content:
      "(I'm not a person of faith - I'm agnostic - but I support people's right to practise faith and religion and really appreciate the people who are leading the way on merging faith and progressive social politics, which are by no means mutually exclusive.)",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Sep 03 12:33:10 +0000 2018",
    idStr: "1036592938451718146",
    content:
      'Sex confessions with @CalumMcSwiggan on @FubarRadio last week...<br><br>Shout out to inclusive churches (and other religious institutions) like @MCCchurch, as well as the individuals doing the work to make faith more accessible to people who have historically been excluded. <a href="https://twitter.com/FubarRadio/status/1036590306974674946">https://twitter.com/FubarRadio/status/1036590306974674946</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 31 23:25:41 +0000 2018",
    idStr: "1035669988638695425",
    content:
      'That was exhausting to watch. And still a Williams-Williams tie and other great matches to endure tonight... <a href="https://twitter.com/usopen/status/1035664185303027712">https://twitter.com/usopen/status/1035664185303027712</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 31 22:06:25 +0000 2018",
    idStr: "1035650038502973441",
    content:
      '99% agree, though some might argue injury management is a factor in greatness (i.e. Federer has more because he plays in a way that both wins and avoids injury to maximise his opportunities), but I believe Rafa will take the grand slams record before his time\'s up. <a href="https://t.co/aCLFdTeJtj">https://t.co/aCLFdTeJtj</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 30 03:49:07 +0000 2018",
    idStr: "1035011505866063873",
    content:
      "@OlgaDd53 @Glinner (This was in response to a tweet that has since been deleted about 'cis' being a \"stupid made up word\".)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Aug 30 03:43:34 +0000 2018",
    idStr: "1035010108533686277",
    content:
      'No one! Vamos! <a href="https://twitter.com/atptour/status/1035009719100944387">https://twitter.com/atptour/status/1035009719100944387</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 29 12:16:53 +0000 2018",
    idStr: "1034776904136581120",
    content:
      'Gender discrimination in tennis rules... <a href="https://twitter.com/JudyMurray/status/1034555043838656512">https://twitter.com/JudyMurray/status/1034555043838656512</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 28 15:17:07 +0000 2018",
    idStr: "1034459871406706688",
    content:
      "@Glinner GRA doesn't affect already-existing right of trans people to use spaces designated for their gender (from Equality Act - different legislation). Self-ID + non-binary recognition tackles administrative violence against trans people. If you're not transphobic, can you support that?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 28 15:14:13 +0000 2018",
    idStr: "1034459142847651844",
    content:
      "@Glinner And you're capitalising by promoting a regressive cause off the back of completely unrelated events. DC's actions were awful, but it doesn't mean everything he supported/supports is automatically bad (e.g. maybe he supports people's right to breathe air).",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 28 03:26:36 +0000 2018",
    idStr: "1034281066549444608",
    content: "@CissexismDaily",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 28 03:22:12 +0000 2018",
    idStr: "1034279958791827458",
    content:
      ".@RafaelNadal takes his t-shirt off and a @PrimeVideo @primevideouk commentator says it's a sight for the ladies. Ermm, can we take the cisheteronormativity out of sport please? What about the men and non-binary folk who enjoy the sight, and the women who don't?",
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Aug 27 02:03:11 +0000 2018",
    idStr: "1033897685659656194",
    content:
      'Both "😂" and laughing at your own jokes offline roughly translating to "&lt;----- look I did a funny!!!"',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Aug 27 02:01:34 +0000 2018",
    idStr: "1033897279281872896",
    content:
      'Are the people who put "😂" at the end of humourous* comments/messages the same people who laugh at their own jokes offline**?<br><br>* or what they think is humorous<br>** pretty much everyone does this to some extent, but some people do it regardless of the joke\'s reception',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 18 23:12:05 +0000 2018",
    idStr: "1030955522906890240",
    content:
      'Hey @okcupid, I wasn\'t "born" a gender - I was assigned one. Can you change this question? @CissexismDaily @BeingTonOKC <div class="gallery"><ul><li><a href="../../tweets_media/1030955522906890240-Dk6wlBHWwAA5me6.jpg"><img src="../../tweets_media/1030955522906890240-Dk6wlBHWwAA5me6.jpg"></a></li></ul></div>',
    favouriteCount: "16",
    retweetCount: "4",
  },
  {
    createdAt: "Sat Aug 18 18:44:30 +0000 2018",
    idStr: "1030888184958386177",
    content:
      'Uhmmm, what? Why are you selling queerphobic cards, @scribblercards? <div class="gallery"><ul><li><a href="../../tweets_media/1030888184958386177-Dk5y_lzW4AAf_dW.jpg"><img src="../../tweets_media/1030888184958386177-Dk5y_lzW4AAf_dW.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 18 18:33:25 +0000 2018",
    idStr: "1030885392638246914",
    content:
      'What if I want to look at (birthday) cards that are for people of any gender (including non-binary genders) and don\'t play into/reinforce gender normativity and stereotypes, @MoonpigUK? Or what if I want to look for cards for non-binary femmes who use "them"? @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/1030885392638246914-Dk5wPc9WwAAdlIf.jpg"><img src="../../tweets_media/1030885392638246914-Dk5wPc9WwAAdlIf.jpg"></a></li></ul></div>',
    favouriteCount: "6",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Aug 18 18:25:38 +0000 2018",
    idStr: "1030883435768934401",
    content:
      'Hey @LOCCITANE_UK, not all your customers use these four titles - please add "Mx" (and ideally a free text field), which is used by many non-binary folk. Good that the field is optional but we should be allowed to use our actual title if we want @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/1030883435768934401-Dk5ugzuXsAE0XSP.jpg"><img src="../../tweets_media/1030883435768934401-Dk5ugzuXsAE0XSP.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Aug 16 10:23:22 +0000 2018",
    idStr: "1030037291409043457",
    content: "Followed by the Metronomy bassist on Instagram 😍",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Aug 14 11:48:15 +0000 2018",
    idStr: "1029333877565923330",
    content:
      "@elvisgomes90 ... and of course the positive political motivation of giving trans work a platform somewhere (given there are much fewer trans-focused journals).",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 11 01:22:49 +0000 2018",
    idStr: "1028089321482530818",
    content:
      '@GreenLee_Anne @Brummy @natehiggins The former provides a list of similar resources: <a href="http://thiscouldbetriggering.tumblr.com/sistersites">http://thiscouldbetriggering.tumblr.com/sistersites</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Aug 11 01:17:07 +0000 2018",
    idStr: "1028087884132364288",
    content:
      '"Customer is not pissed off". Guessing that note wasn\'t meant for me, @JustEatUK? Nevertheless, I do love the use of "pissed off" - I\'m all for destablising normativity and deformalising what constitutes professional etiquette. But please don\'t "she" me... @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/1028087884132364288-DkSAd1QXcAU3cTl.jpg"><img src="../../tweets_media/1028087884132364288-DkSAd1QXcAU3cTl.jpg"></a></li></ul></div>',
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Thu Aug 09 20:57:42 +0000 2018",
    idStr: "1027660211224539138",
    content:
      'Why does my phone always (in)correct "non-binary" to "bobcat"?<br><br>Sidenote: I wonder if I\'ve ever not noticed and told someone my gender is bobcat... #nonbinary #nb #enby #trans #transgender #gender<br><br>Image: contact form; message about including non-binary people ends "I\'m bobcat" <div class="gallery"><ul><li><a href="../../tweets_media/1027660211224539138-DkL7gfAX0AA0lxl.jpg"><img src="../../tweets_media/1027660211224539138-DkL7gfAX0AA0lxl.jpg"></a></li></ul></div>',
    favouriteCount: "5",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 03 20:49:01 +0000 2018",
    idStr: "1025483702455988224",
    content:
      "Add to that WhatsApp, Instagram, emails both professional and personal and calls from family, and communication takes up a *lot* of time/energy. If you can keep up. If you can't: anxiety. This isn't to say don't contact me: please do. But it's okay not to be instant all the time.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Aug 03 20:46:20 +0000 2018",
    idStr: "1025483025654657024",
    content:
      'Seen people post about anxieties over the burden of instant communication on social media/elsewhere. I totally agree/empathise. I struggle to keep up with life, and instant communication culture is a part of that/something that easily drops off. Here\'s one week just on Facebook. <div class="gallery"><ul><li><a href="../../tweets_media/1025483025654657024-Djs-1caXoAsn6YU.jpg"><img src="../../tweets_media/1025483025654657024-Djs-1caXoAsn6YU.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 26 00:27:49 +0000 2022",
    idStr: "1551725944418828289",
    content:
      '@NickColley @lolaodelola @oluoluoxenfree And Kevin Powell has some pretty useful videos on it on YouTube, like this one: <a href="https://youtu.be/3elGSZSWTbM">https://youtu.be/3elGSZSWTbM</a><br><br>Will check out your article @lolaodelola - looks interesting!',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 08 16:36:04 +0000 2022",
    idStr: "1545446631377616898",
    content:
      'Ehuctulo <a href="https://twitter.com/translatedtees/status/1545088352201805824">https://twitter.com/translatedtees/status/1545088352201805824</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 01 15:18:37 +0000 2018",
    idStr: "1024675775382016002",
    content:
      '[Image description: big slice of pizza with headline "Woman called the police after wrong pizza was delivered to her"]',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 01 15:17:33 +0000 2018",
    idStr: "1024675508494262272",
    content:
      'WOMAN. Can the press stop making gender/race/religion/age etc relevant/prominent where it isn\'t/shouldn\'t be? <div class="gallery"><ul><li><a href="../../tweets_media/1024675508494262272-Djhg7-RX0AE8wRk.jpg"><img src="../../tweets_media/1024675508494262272-Djhg7-RX0AE8wRk.jpg"></a></li></ul></div>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Aug 01 15:15:34 +0000 2018",
    idStr: "1024675008881278982",
    content:
      'Even though I only moved to Yorkshire aged five and never really adopted heavy word- or phrase-level Yorkshirisms, I often have a strong urge to say "ta duck" (in writing in particular). But I\'m not sure the IT person who whitelisted my IP for webby stuff would appreciate it.',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 31 14:35:47 +0000 2018",
    idStr: "1024302612080996352",
    content: "Femnby.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 30 19:32:08 +0000 2018",
    idStr: "1024014800806989824",
    content:
      "An alliterative approach to announcing an affinity for (alternatively, an addiction to) alliteration.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 30 14:31:29 +0000 2018",
    idStr: "1023939137915809794",
    content:
      '@StuartPrior2 @GreenPartyAimee @GreenLee_Anne For information, the discussion is now here: <a href="https://en.m.wikipedia.org/wiki/Wikipedia_talk:Biographies_of_living_persons#The%20conflict%20between%20deadnaming%20and%20ABOUTSELF,%20versus%20VERIFIABILTY%20and%20previous%20RfCs">https://en.m.wikipedia.org/wiki/Wikipedia_talk:Biographies_of_living_persons#The%20conflict%20between%20deadnaming%20and%20ABOUTSELF,%20versus%20VERIFIABILTY%20and%20previous%20RfCs</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 29 02:25:46 +0000 2018",
    idStr: "1023394118104481793",
    content:
      '@jwsal @Maria_Munir @wikilgbt @ZrAlexKapitan @Katja_Thieme @CissexismDaily @wikimediauk And a suggestion that not deadnaming a trans person is just the same as post-hoc changing their historical party affiliation... <a href="https://en.wikipedia.org/wiki/User_talk:Sam_Blacketer#Deadnaming_trans_people">https://en.wikipedia.org/wiki/User_talk:Sam_Blacketer#Deadnaming_trans_people</a>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 29 02:01:33 +0000 2018",
    idStr: "1023388026272210945",
    content:
      '@jwsal @Maria_Munir @wikilgbt @ZrAlexKapitan @Katja_Thieme @CissexismDaily @wikimediauk Coming up against further resistance (and mockery) from other editors. This level of rigidity is really, really not good enough for (safeguarding/respecting) trans people. Understand "reliable source" concerns but deadnaming needs taking seriously: <a href="https://en.wikipedia.org/wiki/Wikipedia_talk:Manual_of_Style#Deadnaming_trans_people">https://en.wikipedia.org/wiki/Wikipedia_talk:Manual_of_Style#Deadnaming_trans_people</a>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jul 29 00:08:03 +0000 2018",
    idStr: "1023359461250015234",
    content:
      'Yesss! Accept that debate comes from multiple genres, and live oral debate (where power dynamics can be amplified) is not the pinnacle. Judge people\'s arguments on their worth, not how showy/macho their presentation is. C.f. playground-like House of Commons debating antics, <a href="https://twitter.com/Katja_Thieme/status/1023267907692687360">https://twitter.com/Katja_Thieme/status/1023267907692687360</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 28 23:13:44 +0000 2018",
    idStr: "1023345792692772864",
    content:
      "And cc: @GreenPartyAimee - @GreenLee_Anne says you do Wiki stuff!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 28 22:50:44 +0000 2018",
    idStr: "1023340004909768714",
    content: "Also maybe cc: @nonbinarytech @uveavanto etc",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 28 22:49:04 +0000 2018",
    idStr: "1023339586758606848",
    content:
      '.@wikilgbt I\'m coming up against a Wikipedia editor rejecting an amendment to an article where I replaced my deadname with my chosen name. Is this something you could weigh in on? <a href="https://en.wikipedia.org/wiki/Wikipedia_talk:Manual_of_Style#Deadnaming_trans_people">https://en.wikipedia.org/wiki/Wikipedia_talk:Manual_of_Style#Deadnaming_trans_people</a> Cc: @ZrAlexKapitan @Katja_Thieme @CissexismDaily @Maria_Munir',
    favouriteCount: "5",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 28 14:34:29 +0000 2018",
    idStr: "1023215120154091520",
    content: "That said*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 28 14:34:14 +0000 2018",
    idStr: "1023215056010534912",
    content:
      "Or just have an aptitude for picking up new skills, which can make small gaps in knowledge/experience less of an issue. Don't wait for a 100% skills/experience match. (That says, whether a company takes a shot on you is of course conditioned by privilege.)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 28 14:31:56 +0000 2018",
    idStr: "1023214477809004545",
    content:
      "Yesss! If you want to progress, it can be worth applying for jobs even if you aren't a perfect match for the job description. Maybe you can offer something different types other candidates that the company hadn't considered, even if you're missing one or two essential criteria. <a href=\"https://twitter.com/nonbinarytech/status/1023212983990804481\">https://twitter.com/nonbinarytech/status/1023212983990804481</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 28 14:17:57 +0000 2018",
    idStr: "1023210958460780544",
    content:
      'Absolutely (though it often does take courage). <a href="https://twitter.com/AroraXD/status/1023208701530918912">https://twitter.com/AroraXD/status/1023208701530918912</a>',
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Jul 28 14:14:20 +0000 2018",
    idStr: "1023210048682688513",
    content:
      "Interesting thought/question: should we be helping companies be/appear more diverse if they aren't willing to put money/resources behind it? #NBiT2018",
    favouriteCount: "2",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Jul 28 13:04:08 +0000 2018",
    idStr: "1023192379958984704",
    content:
      'Finally arrived at #NBiT2018. People following the hashtag may be interested in Non-binary London on Facebook, <a href="http://nonbinary.london">http://nonbinary.london</a> and here @nonbinaryldn!',
    favouriteCount: "7",
    retweetCount: "3",
  },
  {
    createdAt: "Fri Jul 27 23:43:42 +0000 2018",
    idStr: "1022990948228325376",
    content:
      'Revision to Wikipedia page to remove deadname rejected. Rejection responded to... Anyone else have thoughts on this/other contexts where deadnames might appear? @CissexismDaily<br><br>Text version of rejection notice and my response: <a href="https://docs.google.com/document/d/1z7HSmIbC1Tfy-mLp_ZnxvTZXTDeW44IPqUJ-T0Q7hQU/edit?usp=sharing">https://docs.google.com/document/d/1z7HSmIbC1Tfy-mLp_ZnxvTZXTDeW44IPqUJ-T0Q7hQU/edit?usp=sharing</a> <div class="gallery"><ul><li><a href="../../tweets_media/1022990948228325376-DjJj3jnX4AYZ_Rt.jpg"><img src="../../tweets_media/1022990948228325376-DjJj3jnX4AYZ_Rt.jpg"></a></li><li><a href="../../tweets_media/1022990948228325376-DjJj4FMXsAAPn6s.jpg"><img src="../../tweets_media/1022990948228325376-DjJj4FMXsAAPn6s.jpg"></a></li></ul></div>',
    favouriteCount: "6",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jul 27 19:59:44 +0000 2018",
    idStr: "1022934583589982208",
    content:
      "P.s. for clarity, I'm an independent/unaffiliated far/radical left socialist these days.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jul 27 19:49:37 +0000 2018",
    idStr: "1022932037781610497",
    content:
      'Remembered I\'m on @Wikipedia and under my old name, so I changed it. Let\'s hope it sticks. Also asked @CityofYork to amend their website. Important to many trans people that records reflect their chosen name and current identity. <div class="gallery"><ul><li><a href="../../tweets_media/1022932037781610497-DjIun5yXsAAHkNN.jpg"><img src="../../tweets_media/1022932037781610497-DjIun5yXsAAHkNN.jpg"></a></li></ul></div>',
    favouriteCount: "8",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Jul 26 22:37:10 +0000 2018",
    idStr: "1022611815572938754",
    content:
      'I now have seven poems in my repertoire (excluding the 22 I wrote when I was a young thing). The sincerest of thanks to the transphobery for inspiring the seventh. Fight me, bite me, I know you\'ll never like me: <a href="https://docs.google.com/document/d/1zBm8oLQMVyQLirOdlX2ElrQtBE42V5r2sEi5OMZ6QiU/edit?usp=drivesdk">https://docs.google.com/document/d/1zBm8oLQMVyQLirOdlX2ElrQtBE42V5r2sEi5OMZ6QiU/edit?usp=drivesdk</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jul 24 11:05:03 +0000 2018",
    idStr: "1021712864170729472",
    content: "How to tell someone's gender? Ask! @CissexismDaily",
    favouriteCount: "1",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jul 24 11:02:50 +0000 2018",
    idStr: "1021712303811686400",
    content:
      'These tools can help you do research and provide services that are oblivious to the existence of trans people: <a href="https://genderapi.io">https://genderapi.io</a> | <a href="https://genderize.io">https://genderize.io</a>. Look at all this research that built on a name = gender assumption: <a href="https://store.genderize.io/usecases">https://store.genderize.io/usecases</a>. Hurray! @CissexismDaily',
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Jul 24 00:19:36 +0000 2018",
    idStr: "1021550428872474624",
    content: "#NWAV47 (see above)",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jul 23 20:24:24 +0000 2018",
    idStr: "1021491237801615361",
    content:
      'Whaaaaat? The biggest conference in my field and I get these comments from reviewers. Shiiiit. Take that imposter syndrome! Validation. Looks like I\'m going to New York for the second time this year, representing @QMULLinguistics once again! <div class="gallery"><ul><li><a href="../../tweets_media/1021491237801615361-Di0Q2SNW0AIdEpA.jpg"><img src="../../tweets_media/1021491237801615361-Di0Q2SNW0AIdEpA.jpg"></a></li><li><a href="../../tweets_media/1021491237801615361-Di0Q29UX0AAm77M.jpg"><img src="../../tweets_media/1021491237801615361-Di0Q29UX0AAm77M.jpg"></a></li></ul></div>',
    favouriteCount: "50",
    retweetCount: "3",
  },
  {
    createdAt: "Mon Jul 23 17:56:43 +0000 2018",
    idStr: "1021454073877417984",
    content:
      'The main reason for me moving to @MetroBank_Help is that it\'s better for trans inclusion than @CoopBankUK_help, who continually refuse to allow "Mx" on their system. It would be good to get all areas of customer service trans inclusive - happy to talk solutions @CissexismDaily',
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Mon Jul 23 17:53:30 +0000 2018",
    idStr: "1021453264162783232",
    content:
      '.@MetroBank_Help pleased "Mx" and non-binary available in online signup. Online failed for me, but also pleased to be asked preferred title when signing up in store. But misgendered by telephone customer service staff with "sir" - can (mis)assumptions not be made? @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/1021453264162783232-DiztjNeW0AAls-e.jpg"><img src="../../tweets_media/1021453264162783232-DiztjNeW0AAls-e.jpg"></a></li></ul></div>',
    favouriteCount: "6",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Jul 22 12:20:09 +0000 2018",
    idStr: "1021006986685689856",
    content:
      'Seen in a group: "labels are for clothes I\'m just gay"... <div class="gallery"><ul><li><video controls loop src="../../tweets_media/1021006986685689856-DitYcBXWkAAqv3x.mp4"></video></li></ul></div>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 19 16:07:53 +0000 2018",
    idStr: "1019977133609947136",
    content:
      "@elvisgomes90 @AllAboutTrans @TransMediaWatch But we certainly won't be helping anyone by validating dodgy stuff. Addressing it through refutation and education yes, but not giving it credit.",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 19 14:12:25 +0000 2018",
    idStr: "1019948076679729153",
    content:
      "@elvisgomes90 ... has more to do with typical female-assigned neural patterns, if there really is such a thing?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 19 11:12:33 +0000 2018",
    idStr: "1019902812258529281",
    content:
      "@gedridley if you haven't already, it might be worth checking out the zine for various different perspectives on toilet issues to help with the intersectional approach you mentioned at the end (though not all contributions look at gender).",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 19 11:09:31 +0000 2018",
    idStr: "1019902046449881088",
    content:
      'Had a quick look at gender-neutral toilet signs in a great toilet utopia talk by @gedridley at #TNBI2018. I wrote about signage options originally on my old website (with deadname): <a href="http://yndajas.co/2017/03/29/toilet-worries-representing-gender-neutrality-transculturally">http://yndajas.co/2017/03/29/toilet-worries-representing-gender-neutrality-transculturally</a> and also for @cctoilettalk in their zine: <a href="https://aroundthetoilet.wordpress.com/2018/01/29/lift-the-lid-a-zine-about-toilets/">https://aroundthetoilet.wordpress.com/2018/01/29/lift-the-lid-a-zine-about-toilets/</a>',
    favouriteCount: "6",
    retweetCount: "3",
  },
  {
    createdAt: "Thu Jul 19 10:59:59 +0000 2018",
    idStr: "1019899646582325248",
    content: "Or rather #TNBI2018",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Jul 19 08:57:58 +0000 2018",
    idStr: "1019868942679015424",
    content:
      'Gender *is* real. "Socially constructed" does not mean unreal. "Real" is not limited to that which is rooted in biology or physical manifestation*<br><br>Language is socially constructed. Is language real?<br><br>* sidenote: gender can manifest physically in various ways',
    favouriteCount: "49",
    retweetCount: "8",
  },
  {
    createdAt: "Thu Jul 19 06:41:27 +0000 2018",
    idStr: "1019834586266824705",
    content:
      'Heading to #TNIB #TNIB18 and @TPrideBrighton #transpride #transpridebrighton which together mark my femmiversary (in a way). More words here: <a href="https://www.instagram.com/p/BlZu1NflGja">https://www.instagram.com/p/BlZu1NflGja</a> <div class="gallery"><ul><li><a href="../../tweets_media/1019834586266824705-DicuH2OW0AABLS5.jpg"><img src="../../tweets_media/1019834586266824705-DicuH2OW0AABLS5.jpg"></a></li><li><a href="../../tweets_media/1019834586266824705-DicuIruWsAETcmN.jpg"><img src="../../tweets_media/1019834586266824705-DicuIruWsAETcmN.jpg"></a></li></ul></div>',
    favouriteCount: "6",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 18 14:47:05 +0000 2018",
    idStr: "1019594412387700737",
    content:
      "@KarenDTregaskin @CissexismDaily It's not always about trying to build everything into an analysis/argument/political act. No one can speak for everyone, but we can acknowledge the limits of who we speak for and whose experiences we have some understanding of. Framing/positionality can be done through a preface.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 18 14:43:04 +0000 2018",
    idStr: "1019593400327327744",
    content:
      "@KarenDTregaskin @CissexismDaily Doing better feminism - aware of the diversity of people it fights for - is surely a good thing?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Jul 18 11:10:27 +0000 2018",
    idStr: "1019539893494734848",
    content:
      "Interesting, but I often wonder how each subject's gender is determined in studies on gender disparity. Name? Presentation where ambiguous? But names and presentation don't perfectly correlate with gender. There is no obvious in gender. @CissexismDaily<br><br><a href=\"https://www.theguardian.com/film/2018/jul/18/68-rotten-female-critics-outnumbered-two-to-one-by-male-counterparts\">https://www.theguardian.com/film/2018/jul/18/68-rotten-female-critics-outnumbered-two-to-one-by-male-counterparts</a>",
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Jul 15 14:39:56 +0000 2018",
    idStr: "1018505450298531841",
    content:
      'Ordering pronoun stickers for @nonbinaryldn and only have binary title options in a compulsory field... @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/1018505450298531841-DiJ1B2VW0AAnHaB.jpg"><img src="../../tweets_media/1018505450298531841-DiJ1B2VW0AAnHaB.jpg"></a></li></ul></div>',
    favouriteCount: "5",
    retweetCount: "2",
  },
  {
    createdAt: "Tue Jul 10 13:41:20 +0000 2018",
    idStr: "1016678762476425217",
    content:
      'Please sort out your systems and forms for next year @Wimbledon so that trans/non-binary people are included by default and not misgendered at any point. Also good to advise announcers to use more inclusive phrases than "ladies and gentlemen" @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/1016678762476425217-Dhv38GlW0AAE9os.jpg"><img src="../../tweets_media/1016678762476425217-Dhv38GlW0AAE9os.jpg"></a></li></ul></div>',
    favouriteCount: "3",
    retweetCount: "3",
  },
  {
    createdAt: "Sun Jul 08 19:49:54 +0000 2018",
    idStr: "1016046739940311040",
    content:
      'Please sign! Hold Pride in London accountable for enabling a huge platform for transphobia at their event. <a href="https://twitter.com/GreenPartyAimee/status/1016010612747522050">https://twitter.com/GreenPartyAimee/status/1016010612747522050</a>',
    favouriteCount: "7",
    retweetCount: "3",
  },
  {
    createdAt: "Sat Jul 07 13:19:34 +0000 2018",
    idStr: "1015586118732058624",
    content:
      'Urghhhhhhhh. As I was saying... <a href="https://www.pinknews.co.uk/2018/07/07/anti-trans-group-allowed-to-lead-pride-in-london-march-after-hijack">https://www.pinknews.co.uk/2018/07/07/anti-trans-group-allowed-to-lead-pride-in-london-march-after-hijack</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jul 07 09:34:09 +0000 2018",
    idStr: "1015529394490826752",
    content:
      'I was meant to be on BBC Radio London last night talking about what pride means to me/why it still matters, but they didn\'t call. So I wrote a little thing with input from @nonbinaryldn. Happy pride! #PrideInLondon #killjoy<br><br>(Website under construction.)<br><br><a href="https://yndajas.co/2018/07/07/whats-wrong-with-mainstream-pride-events/">https://yndajas.co/2018/07/07/whats-wrong-with-mainstream-pride-events/</a>',
    favouriteCount: "7",
    retweetCount: "3",
  },
  {
    createdAt: "Thu Jul 05 10:40:55 +0000 2018",
    idStr: "1014821418041774080",
    content:
      "If your only message supporting pride events and other queer/LGBTQ+ stuff is centred around love then you haven't really thought about the breadth of the community those terms represent.<br><br>It's not all about love, nor even love and gender.<br><br>@CissexismDaily",
    favouriteCount: "19",
    retweetCount: "5",
  },
  {
    createdAt: "Tue Jun 26 15:05:30 +0000 2018",
    idStr: "1011626511101767680",
    content:
      "@travisalabanza Just read it - you sum it up so perfectly! I hope I can do the topic half as much justice!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 26 14:10:02 +0000 2018",
    idStr: "1011612554068623360",
    content:
      "Writing about this kind of thing for an essay at the moment. Can't hide fabulous under a coat (to reach a safe space) when it'll make you drip wet with sweat. <a href=\"https://twitter.com/travisalabanza/status/1011558746642886656\">https://twitter.com/travisalabanza/status/1011558746642886656</a>",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 26 14:07:37 +0000 2018",
    idStr: "1011611946062401536",
    content:
      "Google just tried to play me Ed Sheeran after hearing his name in a YouTube video. You really don't know me at all. Technology isn't as smart as you think.",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Tue Jun 26 02:20:12 +0000 2018",
    idStr: "1011433918699098117",
    content:
      'Cis commentary. <a href="https://twitter.com/greg_strider/status/1011422114094702592">https://twitter.com/greg_strider/status/1011422114094702592</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 25 00:16:51 +0000 2018",
    idStr: "1011040489620082694",
    content:
      "Also @steam_games @Steam_Support - what measures do you have in place to support trans users who are left deadnamed by their username? Does your policy against username changes have any flex?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 24 15:44:20 +0000 2018",
    idStr: "1010911510208577536",
    content:
      "@GreenLee_Anne I just suggested un- because I think it's more well-established as a word?",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 24 00:19:08 +0000 2018",
    idStr: "1010678675942051840",
    content: "@RainbowSerina Respected*",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 24 00:11:54 +0000 2018",
    idStr: "1010676856549466114",
    content:
      "Policies that deny users the right to change usernames can result in deadnaming trans users who've changed their name. This poses many problems, not least potential outing. Time for a change, @PlayStation @PlayStationUK @AskPlayStation @AskPS_UK? @CissexismDaily",
    favouriteCount: "12",
    retweetCount: "3",
  },
  {
    createdAt: "Sat Jun 23 00:28:24 +0000 2018",
    idStr: "1010318621069979648",
    content:
      "Lastly, just to get a feel for what this does to trans people: ARGHAGAGAHSGAGAHAGSHAGAHSGAHAGHSGSGAHAGGRGAGRHAGRHAGRHAGRHAGRHAHRHHRGAVAHAGRVHAAVRVAHAHGGGHAGRGAGRHAGRHAGRHAGRHAGAHHAGGRHAHRHHAGAGRHRGEGAHAGRGAGAHRHRGAHRGAHRGAHWGRGRGRHAHRGRHRHAG. Please get your shit together or bye.",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 23 00:25:11 +0000 2018",
    idStr: "1010317810168418305",
    content:
      "Do you actively want trans people to leave @CoopBankUK? Why is it so hard to make a process stress-free for trans people?",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Jun 23 00:23:53 +0000 2018",
    idStr: "1010317483851513864",
    content:
      'When @CoopBankUK have been shit before about changing title (asking for deed poll when most titles are not legally-bound) and after going in branch requesting title and name change with deed poll you receive mail with the WRONG title c.f. @monzo who made it easy @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/1010317483851513864-DgVeZMAWsAcXWNF.jpg"><img src="../../tweets_media/1010317483851513864-DgVeZMAWsAcXWNF.jpg"></a></li></ul></div>',
    favouriteCount: "5",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jun 22 11:47:10 +0000 2018",
    idStr: "1010127048365559809",
    content:
      'Amazing! Looking forward to being a part of this! @QMULLinguistics <a href="https://twitter.com/IGALAssoc/status/1010120191034974208">https://twitter.com/IGALAssoc/status/1010120191034974208</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Jun 22 11:33:16 +0000 2018",
    idStr: "1010123553327501312",
    content:
      'Gender being more open - at least female, male and non-binary, but ideally the option to specify something else - and "show me" being whether you\'d like to see clothes labelled as being for women, men or both (imperfect for binary/non-binary trans inclusion, but somewhat better).',
    favouriteCount: "6",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Jun 22 11:30:44 +0000 2018",
    idStr: "1010122913930936320",
    content:
      'I\'m guessing this is used for marketing purposes, but either way you need to recognise non-binary people @ASOS. It would be great to move away from conceiving clothes as gendered, but for now how about two separate fields: gender and "show me", which can be "both" @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/1010122913930936320-DgSs9NIX4AE2mYU.jpg"><img src="../../tweets_media/1010122913930936320-DgSs9NIX4AE2mYU.jpg"></a></li></ul></div>',
    favouriteCount: "12",
    retweetCount: "4",
  },
  {
    createdAt: "Fri Jun 22 10:29:53 +0000 2018",
    idStr: "1010107601068142593",
    content:
      'Oh capitalism... @CissexismDaily <a href="https://twitter.com/mxacdumlao/status/1009501993973534726">https://twitter.com/mxacdumlao/status/1009501993973534726</a>',
    favouriteCount: "5",
    retweetCount: "1",
  },
  {
    createdAt: "Tue May 22 21:35:12 +0000 2018",
    idStr: "999041008267595776",
    content:
      'I\'ve not been a member for a few years, but go Aimee! Green friends - I recommend supporting her candidacy! <a href="https://twitter.com/GreenPartyAimee/status/998935117241384960">https://twitter.com/GreenPartyAimee/status/998935117241384960</a>',
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Mon May 21 23:45:19 +0000 2018",
    idStr: "998711364838359042",
    content:
      'This dating app for queer people of all genders seems cool: @ThurstHQ <a href="https://nowthisnews.com/videos/future/virtual-intimacy-morgen-bromells-dating-app-thurst">https://nowthisnews.com/videos/future/virtual-intimacy-morgen-bromells-dating-app-thurst</a>. Shame about the misgendering in the @nowthisnews article, especially when Morgan states their pronouns very clearly in the video... hope it gets fixed soon! @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/998711364838359042-DdwircVUwAEb29C.jpg"><img src="../../tweets_media/998711364838359042-DdwircVUwAEb29C.jpg"></a></li></ul></div>',
    favouriteCount: "7",
    retweetCount: "1",
  },
  {
    createdAt: "Mon May 14 14:31:22 +0000 2018",
    idStr: "996035243692961792",
    content:
      'After seven years as yndajas, I\'ve changed my username to @yndajas.<br><br>(I\'m in the process of a name change, shifting towards Ynda. Pronunciation: <a href="http://yndajas.co/ynda-jas">http://yndajas.co/ynda-jas</a>) <div class="gallery"><ul><li><a href="../../tweets_media/996035243692961792-DdKgRveWkAMPTHo.jpg"><img src="../../tweets_media/996035243692961792-DdKgRveWkAMPTHo.jpg"></a></li></ul></div>',
    favouriteCount: "7",
    retweetCount: "0",
  },
  {
    createdAt: "Thu May 03 02:35:12 +0000 2018",
    idStr: "991868748586876929",
    content:
      'Whaaaaat? Since when does Mykki Blanco follow me? <div class="gallery"><ul><li><a href="../../tweets_media/991868748586876929-DcPTStFXUAAhOwI.jpg"><img src="../../tweets_media/991868748586876929-DcPTStFXUAAhOwI.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 02 17:33:19 +0000 2018",
    idStr: "991732378098962439",
    content:
      '<a href="https://www.theverge.com/circuitbreaker/2018/5/2/17311536/red-1200-holographic-display-hydrogen-one-smartphone-delayed-august">https://www.theverge.com/circuitbreaker/2018/5/2/17311536/red-1200-holographic-display-hydrogen-one-smartphone-delayed-august</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Wed May 02 17:33:10 +0000 2018",
    idStr: "991732343886045184",
    content:
      'Syntax/semantics people might be interested in this structure (if I know anything about their interests): "Jannard went on to try and assuage concerns about the delay by assuring anxious preorder customers that "We have no idea whatsoever what we are doing,"". Link in next tweet.',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 29 14:46:51 +0000 2018",
    idStr: "990603321416278017",
    content:
      "How to choose just a few #DirtyComputer @JanelleMonae tracks to include in your DJ set when they're all so tight?<br><br>Come to @BarWot at @thervt Tuesday evening to find out which one(s) make the cut...",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Jun 13 12:00:38 +0000 2022",
    idStr: "1536317618168152064",
    content:
      '👵🏻🧓🏻🧓🏻🧑🏻🧓🏻🧓🏻 <a href="https://twitter.com/tennisontelly/status/1536257067534544896">https://twitter.com/tennisontelly/status/1536257067534544896</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Jun 05 18:25:07 +0000 2022",
    idStr: "1533515275894661120",
    content:
      'Singles titles* <a href="https://twitter.com/rolandgarros/status/1533503114980073473">https://twitter.com/rolandgarros/status/1533503114980073473</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Apr 22 16:47:14 +0000 2018",
    idStr: "988096904813793281",
    content:
      '#LavLang26: 2-4 May 2019 in Gothenburg, Sweden. <a href="https://lavlang26.wordpress.com">https://lavlang26.wordpress.com</a> #LavLang25',
    favouriteCount: "5",
    retweetCount: "4",
  },
  {
    createdAt: "Sun Apr 22 14:49:57 +0000 2018",
    idStr: "988067388297023488",
    content:
      "Audiences in previous presentations by @SalinaCuddy have said you can't determine who is gay, but identified a particular speaker as probably gay - dilemmas around essentialism vs recognising indexical production. Probably vs definitely an important distinction though #LavLang25",
    favouriteCount: "3",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Apr 22 14:39:17 +0000 2018",
    idStr: "988064703636295680",
    content:
      "Nice explanation of centre of gravity (CoG) from @SalinaCuddy: if you were to cut out the spectrum on a piece of card and put it on a pencil, the CoG is the balance point (more technically: equal amounts of energy on either side) #LavLang25",
    favouriteCount: "5",
    retweetCount: "2",
  },
  {
    createdAt: "Sun Apr 22 14:33:46 +0000 2018",
    idStr: "988063315296473088",
    content:
      'Talking about /s/ production in a women\'s football team, @SalinaCuddy from @UoYLangLing - excited to see how this research has developed! #LavLang25 <div class="gallery"><ul><li><a href="../../tweets_media/988063315296473088-DbZOV3YXcAA-N8b.jpg"><img src="../../tweets_media/988063315296473088-DbZOV3YXcAA-N8b.jpg"></a></li></ul></div>',
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 21 23:25:07 +0000 2018",
    idStr: "987834645717897216",
    content:
      'Slides from #contemporarygender presentation with @scordoban - "Articulating and navigating non-binary gender: insights from language" - uploaded to my website here: <a href="http://yndajas.co/resources">http://yndajas.co/resources</a>',
    favouriteCount: "4",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Apr 21 20:50:40 +0000 2018",
    idStr: "987795776708530176",
    content:
      'Highly appropriate that we surpass the 500-member mark at the 25th @Lavlang! #LavLang25 <div class="gallery"><ul><li><a href="../../tweets_media/987795776708530176-DbVbBR1X0AA_xiu.jpg"><img src="../../tweets_media/987795776708530176-DbVbBR1X0AA_xiu.jpg"></a></li></ul></div>',
    favouriteCount: "7",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Apr 21 20:11:53 +0000 2018",
    idStr: "987786017376583681",
    content:
      'Reminder that these two online networks for queer and non-binary linguist(ic)s exist. The queer one is three short of 500 - *¡FIVE HUNDRED!* - members #LavLang25<br><br>Queer Linguist(ic)s Network (<a href="https://www.facebook.com/groups/queerlinguistics">https://www.facebook.com/groups/queerlinguistics</a>)<br><br>Non-binary Linguistics Network (<a href="https://www.facebook.com/groups/nonbinarylinguistics">https://www.facebook.com/groups/nonbinarylinguistics</a>)',
    favouriteCount: "8",
    retweetCount: "9",
  },
  {
    createdAt: "Sat Apr 21 15:51:38 +0000 2018",
    idStr: "987720524276133888",
    content: "First (implicit) reference to #Pullumgate? #TeamKirby #LavLang25",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 21 15:31:12 +0000 2018",
    idStr: "987715381161807873",
    content:
      "@alon_levy @scordoban Actually I think the width of the wedges is likelihood and the blueness/opacity is the level of stress.",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 21 15:25:14 +0000 2018",
    idStr: "987713878556659712",
    content:
      "@alon_levy @scordoban ... e.g. unconscious misgendering is more stressful from strangers *because* it's so everyday. But I'm probably a little off. @scordoban?",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 21 15:11:47 +0000 2018",
    idStr: "987710497305890817",
    content:
      'Love the idea of a (social) proximity effect on misgendering from @scordoban, the metaphor of a thousand paper cuts (I think of it as a sucker punch), and the visual representation @scordoban conceptualised and I helped prettify for a previous co-presentation! #LavLang25 <div class="gallery"><ul><li><a href="../../tweets_media/987710497305890817-DbUNb6rW4AAcRf7.jpg"><img src="../../tweets_media/987710497305890817-DbUNb6rW4AAcRf7.jpg"></a></li><li><a href="../../tweets_media/987710497305890817-DbUNcoSWkAA81YZ.jpg"><img src="../../tweets_media/987710497305890817-DbUNcoSWkAA81YZ.jpg"></a></li><li><a href="../../tweets_media/987710497305890817-DbUNdPIX4AAdEYB.jpg"><img src="../../tweets_media/987710497305890817-DbUNdPIX4AAdEYB.jpg"></a></li></ul></div>',
    favouriteCount: "11",
    retweetCount: "4",
  },
  {
    createdAt: "Sat Apr 21 14:56:14 +0000 2018",
    idStr: "987706579985338368",
    content:
      'Talking about non-binary genders and language from an interdisciplinary linguist is and psychology approach, @scordoban #LavLang25 <div class="gallery"><ul><li><a href="../../tweets_media/987706579985338368-DbUJ5RdXUAIOed4.jpg"><img src="../../tweets_media/987706579985338368-DbUJ5RdXUAIOed4.jpg"></a></li></ul></div>',
    favouriteCount: "6",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Apr 21 14:54:52 +0000 2018",
    idStr: "987706236417331201",
    content: "@zarrinmiller @scordoban Bingo!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 21 14:45:37 +0000 2018",
    idStr: "987703911267127296",
    content:
      "In response to question from @lzimman, @MaliHH ponders whether own identity development over course of data collection may have affected participant responses, but unsure how to track it. Similar for me re: transfemme expression, but luckily I can draw on my Instagram! #LavLang25",
    favouriteCount: "5",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Apr 21 14:23:10 +0000 2018",
    idStr: "987698260931465217",
    content:
      "The queer haircut as described by @MaliHH talking about gender presentation/expression: shortish with an undercut. Oh hi #LavLang25",
    favouriteCount: "5",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Apr 21 14:06:32 +0000 2018",
    idStr: "987694074651201541",
    content:
      'Interesting observation from @JordanAmaranth that French speakers are using English to neologise gender-related terms that seemingly aren\'t used in L1 English contexts, like "no-genders" - English used as the language of (trans)gender? #LavLang25',
    favouriteCount: "2",
    retweetCount: "3",
  },
  {
    createdAt: "Sat Apr 21 14:04:18 +0000 2018",
    idStr: "987693513235222528",
    content: "Jordan Tudisco being @JordanAmaranth",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Apr 21 13:44:09 +0000 2018",
    idStr: "987688442036400129",
    content:
      'The four types of variation being known/unknown (pragmatic differences, relevance and quantity), friendly/hostile (affective uses), private/public (differences in social relationships) and real/fanciful (uses of in-group identity and solidarity). Exciting work! #LavLang25 <div class="gallery"><ul><li><a href="../../tweets_media/987688442036400129-DbT5ZP2VQAAGvP6.jpg"><img src="../../tweets_media/987688442036400129-DbT5ZP2VQAAGvP6.jpg"></a></li></ul></div>',
    favouriteCount: "2",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Apr 21 13:41:06 +0000 2018",
    idStr: "987687675435061248",
    content:
      'A call from @kirbyconrod for sociolinguists to go out and collect examples of third person pronouns in "natural" use so they can explore these four types of variation. How? Get people to talk about each other! I\'m in(terested)! #LavLang25 #LavLang25 <div class="gallery"><ul><li><a href="../../tweets_media/987687675435061248-DbT4svpU0AY8xqs.jpg"><img src="../../tweets_media/987687675435061248-DbT4svpU0AY8xqs.jpg"></a></li></ul></div>',
    favouriteCount: "22",
    retweetCount: "8",
  },
  {
    createdAt: "Sat Apr 21 12:52:38 +0000 2018",
    idStr: "987675475622486016",
    content:
      'A whole panel on non-binarity and pronouns - how exciting! Featuring @kirbyconrod Jordan Tudisco @MaliHH @scordoban #LavLang25 <div class="gallery"><ul><li><a href="../../tweets_media/987675475622486016-DbTtmuCX0AAh_0W.jpg"><img src="../../tweets_media/987675475622486016-DbTtmuCX0AAh_0W.jpg"></a></li></ul></div>',
    favouriteCount: "12",
    retweetCount: "3",
  },
  {
    createdAt: "Sat Apr 21 11:55:08 +0000 2018",
    idStr: "987661008524234753",
    content: "@kirbyconrod I was wrong: @sleepy_queer",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 20 23:34:06 +0000 2018",
    idStr: "987474520796786690",
    content:
      '<div class="gallery"><ul><li><a href="../../tweets_media/987474520796786690-DbQ212lX0AE4oHx.jpg"><img src="../../tweets_media/987474520796786690-DbQ212lX0AE4oHx.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 20 23:31:43 +0000 2018",
    idStr: "987473918683500544",
    content:
      'Yes, so much! And it feels *so* good! <a href="https://twitter.com/kirbyconrod/status/987470950559109120">https://twitter.com/kirbyconrod/status/987470950559109120</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 20 23:28:15 +0000 2018",
    idStr: "987473046180155397",
    content:
      '.@lzimman notes there are cis people doing good research on trans people. I often cite this short article by @genderben when making this point: <a href="http://beyondthebinary.co.uk/dont-listen-to-me-because-im-non-binary">http://beyondthebinary.co.uk/dont-listen-to-me-because-im-non-binary</a>. Also see their recent article on recommendations for trans research #LavLang25',
    favouriteCount: "5",
    retweetCount: "5",
  },
  {
    createdAt: "Fri Apr 20 23:24:01 +0000 2018",
    idStr: "987471981883940864",
    content:
      '.@lzimman says we need a model of gender to provide as a tool for (particularly quantitative) researchers to use. Here\'s some work in progress on a potential model that I presented very briefly back in early March #LavLang25 <a href="https://twitter.com/yndajas/status/969894572141809664">https://twitter.com/yndajas/status/969894572141809664</a>',
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Jun 04 16:50:48 +0000 2022",
    idStr: "1533129152538234880",
    content:
      "Abolish icons of economic disparity, hereditary privilege and white/British/male supremacy",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri May 27 15:29:04 +0000 2022",
    idStr: "1530209481547825153",
    content:
      'Another site I worked on with colleagues at UNEP-WCMC 🎉 <a href="https://twitter.com/unepwcmc/status/1529446255964962816">https://twitter.com/unepwcmc/status/1529446255964962816</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 20 22:34:42 +0000 2018",
    idStr: "987459571072536576",
    content:
      'So true! Language is so important to trans people! <a href="https://twitter.com/kirbyconrod/status/987457795887976448">https://twitter.com/kirbyconrod/status/987457795887976448</a>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 20 22:32:21 +0000 2018",
    idStr: "987458980334260225",
    content:
      'Keynote speaker @lzimman recalls a story about the OUT in Linguistics mailing list. This still exists as a Facebook group (<a href="https://www.facebook.com/groups/176561772459673">https://www.facebook.com/groups/176561772459673</a>) - a predecessor of sorts to the groups I mentioned in this tweet #LavLang25 <a href="https://twitter.com/yndajas/status/987347259464601601">https://twitter.com/yndajas/status/987347259464601601</a>',
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Fri Apr 20 21:38:17 +0000 2018",
    idStr: "987445372174983169",
    content:
      'For those who weren\'t there (and maybe those who were), the slides from my presentation this morning are here, near the top: <a href="http://yndajas.co/resources">http://yndajas.co/resources</a>. Focus: work to date on my PhD project on queer/non-binary speech #LavLang25<br><br>P.s. my website is a little out of date, so beware!',
    favouriteCount: "8",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Apr 20 19:42:11 +0000 2018",
    idStr: "987416156490387456",
    content:
      'Really important finding! Prescriptivism used as a cloak for transphobia #LavLang25 <a href="https://twitter.com/kirbyconrod/status/987411471347978248">https://twitter.com/kirbyconrod/status/987411471347978248</a>',
    favouriteCount: "1",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Apr 20 19:39:47 +0000 2018",
    idStr: "987415553282396160",
    content:
      'De nada! Let\'s use our networks (e.g. those in my earlier tweet) to help each other out! Support queer research! #LavLang25 <div class="gallery"><ul><li><a href="../../tweets_media/987415553282396160-DbQBNMHWsAEHqTn.jpg"><img src="../../tweets_media/987415553282396160-DbQBNMHWsAEHqTn.jpg"></a></li></ul></div>',
    favouriteCount: "3",
    retweetCount: "1",
  },
  {
    createdAt: "Fri Apr 20 19:18:57 +0000 2018",
    idStr: "987410307604733953",
    content:
      'Ellis Hernandez talking about a *massive* survey on singular "they" - 722 participants! #LavLang25',
    favouriteCount: "9",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Apr 20 15:53:07 +0000 2018",
    idStr: "987358509191790594",
    content:
      '"Bisexuality is not a four on a one to seven scale" and bi speakers are worth researching in isolation from (not just in relation to) other sexuality categories - Chloe Willis from @UCSB_Ling. Yes! #LavLang25',
    favouriteCount: "19",
    retweetCount: "8",
  },
  {
    createdAt: "Fri Apr 20 15:22:20 +0000 2018",
    idStr: "987350760563335169",
    content:
      '.@stamatinakat of @QMULLinguistics presenting her research on the interrelation of sexual and national identity construction in talk and Greek homosexuality at #LavLang25 <div class="gallery"><ul><li><a href="../../tweets_media/987350760563335169-DbPGRleWsAAqD_j.jpg"><img src="../../tweets_media/987350760563335169-DbPGRleWsAAqD_j.jpg"></a></li></ul></div>',
    favouriteCount: "4",
    retweetCount: "4",
  },
  {
    createdAt: "Fri Apr 20 15:20:21 +0000 2018",
    idStr: "987350261688623106",
    content:
      '.@elvisgomes90 of @QMULLinguistics presenting his work on normative regulations of discourses about misunderstood sexual obsessions at #LavLang25 <div class="gallery"><ul><li><a href="../../tweets_media/987350261688623106-DbPF0m7X4AE8VRF.jpg"><img src="../../tweets_media/987350261688623106-DbPF0m7X4AE8VRF.jpg"></a></li></ul></div>',
    favouriteCount: "4",
    retweetCount: "4",
  },
  {
    createdAt: "Fri Apr 20 15:08:25 +0000 2018",
    idStr: "987347259464601601",
    content:
      'People at #LavLang25 might be interested in these two online networks:<br><br>Queer Linguist(ic)s Network (<a href="http://facebook.com/groups/queerlinguistics">http://facebook.com/groups/queerlinguistics</a>)<br><br>Non-binary Linguistics Network (<a href="http://facebook.com/groups/nonbinarylinguistics">http://facebook.com/groups/nonbinarylinguistics</a>)',
    favouriteCount: "5",
    retweetCount: "2",
  },
  {
    createdAt: "Fri Apr 20 11:14:37 +0000 2018",
    idStr: "987288423995191297",
    content:
      'Looking forward to delivering a short presentation on my PhD project looking at the sociophonetics of Southern English queer and genderqueer/non-binary speech at #LavLang25 @Lavlang today in Providence, Rhode Island. I\'m first up - pressure! <div class="gallery"><ul><li><a href="../../tweets_media/987288423995191297-DbONlLuXkAA-7pT.jpg"><img src="../../tweets_media/987288423995191297-DbONlLuXkAA-7pT.jpg"></a></li></ul></div>',
    favouriteCount: "13",
    retweetCount: "1",
  },
  {
    createdAt: "Tue Apr 17 10:51:12 +0000 2018",
    idStr: "986195367397068802",
    content:
      'Can I prefer to tell you I\'m non-binary, @Sony? @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/986195367397068802-Da-rcn1XcAAiwgQ.jpg"><img src="../../tweets_media/986195367397068802-Da-rcn1XcAAiwgQ.jpg"></a></li></ul></div>',
    favouriteCount: "19",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Apr 12 17:38:20 +0000 2018",
    idStr: "984485885239578625",
    content:
      'What are you asking for (sex or gender?) and why, @MoneySavingExp? Can non-binary people get insurance? @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/984485885239578625-DamYsIFWAAMYbZ2.jpg"><img src="../../tweets_media/984485885239578625-DamYsIFWAAMYbZ2.jpg"></a></li></ul></div>',
    favouriteCount: "6",
    retweetCount: "3",
  },
  {
    createdAt: "Sun Apr 01 10:59:32 +0000 2018",
    idStr: "980399258821103616",
    content:
      'Support cisgender awareness! Highlight the plight of the gender-privileged! Cis people.have rights too! #AprilFoolsDay #TDoV #CDoV <a href="https://twitter.com/CissexismDaily/status/980397457317289984">https://twitter.com/CissexismDaily/status/980397457317289984</a>',
    favouriteCount: "4",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Mar 31 21:27:56 +0000 2018",
    idStr: "980195013224271872",
    content:
      'It\'s Trans Day of Visibility. Document bad shit @CissexismDaily. Today I was hypervisible in a dress at a wedding reception, highly gendered context difficult if not cis-passing but today a good experience with supportive friends. More on Instagram: <a href="https://www.instagram.com/p/BhAKBXMnchD/">https://www.instagram.com/p/BhAKBXMnchD/</a> #TDoV <div class="gallery"><ul><li><a href="../../tweets_media/980195013224271872-DZpaJbiWsAIcW3s.jpg"><img src="../../tweets_media/980195013224271872-DZpaJbiWsAIcW3s.jpg"></a></li></ul></div>',
    favouriteCount: "20",
    retweetCount: "2",
  },
  {
    createdAt: "Thu Mar 29 17:17:08 +0000 2018",
    idStr: "979407120771657729",
    content:
      "@josiahmortimer It's been nearly two weeks since you published this. Many people have responded with valid and well-considered critique. Have you re-evaluated?",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 29 17:15:46 +0000 2018",
    idStr: "979406776759144449",
    content:
      "@josiahmortimer ... talk about gender/sex/trans people (in a contemporary Western paradigm), as exemplified by \"transgenderism\" and your biological essentialism. I do hope this kind of harmful, danegrous journalism isn't the trade off you're making for the sake of a parliamentary press pass.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 28 18:03:02 +0000 2018",
    idStr: "979056284451426305",
    content: "Okay it's not TDoV (thanks @GreenLee_Anne). Premature...",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Wed Mar 28 18:00:55 +0000 2018",
    idStr: "979055749837021184",
    content:
      "Doing a thing on Facebook called #365daysofthey. Probably won't do it here but it's #TDoV - Trans Day of Visibility - so hi I'm a trans(femme) non-binary person. My pronouns are they/them/their/theirs/themself. This is how you should refer to me in the third person (or my name).",
    favouriteCount: "4",
    retweetCount: "0",
  },
  {
    createdAt: "Thu Mar 22 13:53:13 +0000 2018",
    idStr: "976819085689401345",
    content:
      "@mia__harris @CissexismDaily It wasn't specific to job application contexts, but these were the suggestions/examples:<br>Dear responsible person/s<br>Dear team<br>Dear recipient<br>Dear customer services<br>Dear CeX (organisation name)<br>Hello<br>Dear HR manager<br>Dear hiring manager<br>Dear receiver",
    favouriteCount: "3",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 19 16:11:01 +0000 2018",
    idStr: "975766600816132097",
    content: "See #QueerSpaceRGS!",
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 19 15:43:06 +0000 2018",
    idStr: "975759575944187904",
    content:
      'Reference to @GenderBen\'s concept "ciscourses" from @contempgender #contemporarygender in @JessSandelson\'s cis gaze talk at @Ms_L_Marshall\'s postgraduate symposium "Cross-disciplinary Conversations on Sexualities, Queerness and Space". Nice to see links made between queer events!',
    favouriteCount: "6",
    retweetCount: "4",
  },
  {
    createdAt: "Sun Mar 18 19:48:49 +0000 2018",
    idStr: "975459025470083078",
    content: "... and a win for awkward people! #BNPPO19",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 18 19:43:23 +0000 2018",
    idStr: "975457658588356609",
    content:
      'Best acceptance speech ever! <a href="https://twitter.com/WTA/status/975456599396442112">https://twitter.com/WTA/status/975456599396442112</a>',
    favouriteCount: "1",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 17 15:31:39 +0000 2018",
    idStr: "975031919015579648",
    content:
      'At @vivacampaigns vegan festival in London and I\'d love to fill in the questionnaire but it looks like only females and males are allowed. In a talk: 8 fruit/veg a day for women; 10 for men. What about all us trans and non-binary vegans? @CissexismDaily <div class="gallery"><ul><li><a href="../../tweets_media/975031919015579648-DYgCWlhX0AAyo0F.jpg"><img src="../../tweets_media/975031919015579648-DYgCWlhX0AAyo0F.jpg"></a></li></ul></div>',
    favouriteCount: "8",
    retweetCount: "3",
  },
  {
    createdAt: "Fri Mar 09 17:57:09 +0000 2018",
    idStr: "972169433203449856",
    content:
      'Hey progressives! Naked Attraction tweeted me. I responded. Am I missing anything? Is this show actually not as bad as it sounds? <div class="gallery"><ul><li><a href="../../tweets_media/972169433203449856-DX3W7oRWkAAkYwn.jpg"><img src="../../tweets_media/972169433203449856-DX3W7oRWkAAkYwn.jpg"></a></li></ul></div>',
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Mon Mar 05 18:28:35 +0000 2018",
    idStr: "970727790726270978",
    content:
      "DJing at @BarWot @thervt from 19:00 tomorrow evening. Come for a kaleidoscopic mix of hip hop, R&amp;B, neo-soul, jazz, Afrobeat, Brazilian sounds etc. Stay for a titillating lineup of super fine queer cabaret, including Phoenix Fagbutt/Rhys' Pieces and @ShakonaFire! #queercabaret",
    favouriteCount: "0",
    retweetCount: "1",
  },
  {
    createdAt: "Sun Mar 04 21:12:50 +0000 2018",
    idStr: "970406740788416514",
    content:
      "It being the first time is a big privilege, though certainly I've noticed more attention and at least one occasion of public sniggering as my transfemme expression has developed/become more public.",
    favouriteCount: "2",
    retweetCount: "0",
  },
  {
    createdAt: "Sun Mar 04 21:11:14 +0000 2018",
    idStr: "970406337548115968",
    content:
      "Ironically it's the first time I've noticed particularly verbal abuse (though I usually walk with noise-cancelling earphones) - ironic given the context of the day!",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 03 23:33:18 +0000 2018",
    idStr: "970079699421614082",
    content:
      "@EvangelineTsao @travisalabanza (I wasn't actually alone in that moment - I was walking or the station with one other person, which may have provided some safety!)",
    favouriteCount: "0",
    retweetCount: "0",
  },
  {
    createdAt: "Sat Mar 03 22:52:15 +0000 2018",
    idStr: "970069370700488706",
    content:
      "... but I won't let that diminish all I've gained, learned and laughed about, and been reinvigorated by today. Thanks so much to the keynotes, panel presenters, workshop facilitators, stall provider, chairs, helpers and attendees for making it a brilliant day! #contemporarygender",
    favouriteCount: "5",
    retweetCount: "1",
  },
  {
    createdAt: "Sat Mar 03 22:48:30 +0000 2018",
    idStr: "970068424968810498",
    content:
      "Walking to station after post-conference bite to eat, having covered up dress but still wearing lace top/parrot-y leggings, repeated shouts from laughing group: \"you like dick!?\" Can't wait for @travisalabanza's vision of liberated world free from transmisogny #contemporarygender",
    favouriteCount: "11",
    retweetCount: "2",
  },
  {
    createdAt: "Sat Mar 03 14:26:10 +0000 2018",
    idStr: "969942010135302144",
    content:
      'Thanks for the plug @mia__harris! The article on gender-neutral toilet signs is in this great zine about toilets (digital/print): <a href="https://aroundthetoilet.wordpress.com/2018/01/29/lift-the-lid-a-zine-about-toilets/">https://aroundthetoilet.wordpress.com/2018/01/29/lift-the-lid-a-zine-about-toilets/</a> (and on my blog: <a href="http://yndajas.co/2017/03/29/toilet-worries-representing-gender-neutrality-transculturally/">http://yndajas.co/2017/03/29/toilet-worries-representing-gender-neutrality-transculturally/</a>) #contemporarygender',
    favouriteCount: "7",
    retweetCount: "7",
  },
  {
    createdAt: "Sat Mar 03 11:17:40 +0000 2018",
    idStr: "969894572141809664",
    content:
      'That was a rush! Anyone interested in checking out @scordoban and my slides in more detail, I\'ll hopefully make them available soon! For now, here\'s the example gender map and underlying system! (More explanation needed!) #contemporarygender <div class="gallery"><ul><li><a href="../../tweets_media/969894572141809664-DXXB8tTW0AAMnZT.jpg"><img src="../../tweets_media/969894572141809664-DXXB8tTW0AAMnZT.jpg"></a></li><li><a href="../../tweets_media/969894572141809664-DXXB9n0WsAAS3Wd.jpg"><img src="../../tweets_media/969894572141809664-DXXB9n0WsAAS3Wd.jpg"></a></li></ul></div>',
    favouriteCount: "4",
    retweetCount: "4",
  },
  {
    createdAt: "Sat Feb 24 10:12:32 +0000 2018",
    idStr: "967341467575504896",
    content:
      "@megjohnbarker @contempgender ... I first encountered them at @GenderBen's non-binary conference in Leeds.",
    favouriteCount: "0",
    retweetCount: "0",
  },
];
