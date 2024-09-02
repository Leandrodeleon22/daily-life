import Proverbs from "@/components/Proverbs";
import React from "react";

const page = () => {
  const title = [
    { korean: "2024년 8월 27일 화요일 새벽 잠언" },
    { english: "Predawn proverbs for Tuesday, August 27, 2024" },
    {
      subtitleKorean:
        "*    240826(월)~240828(수)-새벽 잠언은 이어지는 잠언입니다.",
    },
    {
      subtitleEnglish:
        "The proverbs for Monday(8/26) continue until Wednesday(8/28).",
    },
  ];

  const author = ["TR: GCJ", "ENPE: Joyce W. & Vince S"];

  const mondayMessage = [
    {
      id: 12,
      korean:
        "12. 농부가 농사지을 땅의 토질을 보고 땅을 택하듯이 전능하신 하나님은 사람의 마음을 보고 택하신다.",
      english:
        "12. Just as a farmer chooses land to farm based on the quality of the soil, the Almighty God chooses a person based on their heart.",
    },

    {
      id: 13,
      korean:
        "13. 택한 자가 제 맘대로 제 성격대로 고집, 교만, 자기 중심으로 행하면 그 마음이 쓰기에 합당치 아니하므로 버리신다.",
      english:
        "13. If a chosen person acts as they please according to their arrogance, personality, self-centeredness, and stubbornness, their heart is not suitable for God’s use. Therefore, God abandons the person.",
    },
    {
      id: 14,
      korean:
        "14. 예수님같이 하나님 뜻대로, 또 베드로와 제자들, 우물가의 여인같이 주의 뜻대로 하는 자만 끝까지 버리지 않으신다. 마음이 나쁜 자는 그들이 오히려 마음 좋은 주를 버린다. 버리는 자는 자기 생각대로 하는 자다. 선생도 20대 때 예수님을 위해 한다고 내 생각대로 했으나 예수님이 “네가 나를 버린 것이다. 배신이다.” 하셨다. 이에 대가를 받은 것이 육신 죽음이었다. 회개하고, 조건으로 생명 구원을 약속하고 돌이켰다. 자기 생각대로 하면 죽음이 온다.",
      english:
        "14. God does not forsake to the end only those who act according to His will like Jesus and according to the Lord's will like Peter, other disciples, and the woman by the well. On the contrary, those whose hearts are bad forsake the Lord whose heart is good. Anyone who deserts [the Lord] is someone who acts according to their own thoughts. I myself acted according to my own thoughts in my 20s thinking it was for Jesus. However, Jesus said, “You abandoned me. It is a betrayal.” The price I paid was the death of my body. I repented and turned around by promising to save lives as a condition. If you act according to your own thoughts, death will come.",
    },
    {
      id: 15,
      korean:
        "15. 자기는 사망권에 있기에 자기 생각대로 하면 못 나온다. 온전히 주의 뜻대로 해야 거기서 나온다.",
      english:
        "15. Since you are in the domain of death, you cannot come out of it if you act according to your own thoughts. You can come out of there only if you act perfectly according to the Lord's will.",
    },
    {
      id: 16,
      korean:
        "16. 마음을 아름답게 닦고, 월명동을 하나님의 구상대로 온전하게 만들듯이 만들어라.",
      english:
        "16. Polish your heart to be beautiful. Make your heart just as Wolmyeongdong was made perfectly according to God's design.",
    },
    {
      id: 17,
      korean: "17. 마음이 나쁘면 인생 실패, 영혼 실패다.",
      english:
        "17. If your heart is bad, it leads to failure of your life and failure of your soul and spirit.",
    },
    {
      id: 18,
      korean:
        "18. 예수님은 항상 밭을 비유로 들어 ‘마음 밭’을 말해 주셨다. 돌짝밭에서도 처음엔 곡식이 크지만, 가다 보면 크다 죽는다.",
      english:
        "18. Jesus always used a field as a parable and told them about ‘the field of the heart.’ Even on a rocky field, a crop begins growing. However, it grows [only] for a while and then dies along the way.",
    },
    {
      id: 19,
      korean: "19. ‘옥토밭은 수백 배 결실한다.’ 하였다.",
      english:
        "19. It was said that a field of fertile soil bears fruit hundreds of times [what was sown].",
    },
    {
      id: 20,
      korean:
        "20. ‘결과’로 보면 그 밭을 안다. 밭의 토질이 좋지 않으면 농부가 거름을 하여도 곡식이 크지를 않는다. 마음 밭도 그러하다.",
      english:
        "20. You know about a field by looking at ‘the outcome.’ If the soil of the field is not good quality, crops do not grow even though the farmer fertilizes them. The same is true with the field of the heart.",
    },
    {
      id: 21,
      korean:
        "21. 자기 습관 버릇으로 인해 자기 마음 밭이 그릇되었어도 모른다. ‘몸’은 하나님 새 시대에 살고, ‘마음’은 사망에 처해 사는 자들이다.",
      english:
        "21. Even though the field of their heart is bad because of their habits and mannerisms, people are not aware of that. Such are people whose bodies are living in God's new times while their hearts dwell in Death.",
    },
    {
      id: 22,
      korean: "22. ‘마음’을 보고 하나님이 행하신다.",
      english: "22. God carries it out looking at [people’s] hearts.",
    },
    {
      id: 23,
      korean:
        "23. 하나님의 뜻을 거스른 자들은 모두 마음이 나쁜 자들이었다. 고로 영원한 심판을 받고 끝났다.",
      english:
        "23. All of those who went against God's Will were people with bad hearts. Therefore, eternal judgment was rendered upon them, and they ended.",
    },
    {
      id: 24,
      korean:
        "24. 맘과 뜻과 목숨 다해 하나님을 섬기라고 하였는데 마음이 제대로 안 됐으면 하나님도 그 보낸 자도 제대로 섬기지를 못한다.",
      english:
        "24. Even though [the Scriptures] say, “Serve God with all your heart, will, and life,” if a person's heart is not proper, [the person] cannot properly serve God and the one sent by God.",
    },
    {
      id: 25,
      korean:
        "25. 섭리사 46년간을 보았더니 사울같이 외모는 좋은데 마음이 문제였던 자들은 모두 마음을 제대로 만들지 못하여서 나갔다.",
      english:
        "25. As I look at the past 46 years of Providence history, everyone whose appearance was nice like Saul but whose heart was problematic left because they failed to make their heart properly.",
    },
    {
      id: 26,
      korean: "26. 마음이 사람의 핵이다. 핵에 문제가 있으니 모두가 문제였다.",
      english:
        "26. The heart is the core of a human. Since the core was problematic, everything [else] was problematic.",
    },
    {
      id: 27,
      korean:
        "27. 모든 존재물을 살 때 핵을 본다. 핵이 맘에 안 드는데 외모 보고 사면 쓰다 바로 버린다.",
      english:
        "27. Whatever you buy, you look at its core. If you buy something based on its appearance even though its core is not satisfying, you will soon stop using it and discard it.",
    },
    {
      id: 28,
      korean:
        "28. 핵은 존재의 질이다. 질이 안 좋으면 나무도, 돌 광물도, 짐승도, 사람도 해를 준다. 변하면 질이 안 좋아진다. 섭리사에 있으면서 월명동을 만들듯이 자기의 마음과 행실을 만들어야 된다.",
      english:
        "28. The core is the quality of existence. If the quality is not good, it is harmful whether it is a tree, a rock [made of] minerals, an animal, or a human. When there is degeneration, the quality becomes bad. While in Providence, you must make your heart and actions like Wolmyeongdong has been made.",
    },
    {
      id: 29,
      korean:
        "29. 마음이 나쁘면 자기를 좋게 만들 수가 없나니, 그러므로 자신도 자기를 제대로 못 쓰고 버리게 된다. 먼저 자기 마음을 만드는 것이 성공하는 것이다.",
      english:
        "29. If your heart is bad, you cannot make yourself good. Consequently, you will abandon yourself, not being able to use yourself properly. It leads to success to make your heart first.",
    },
    {
      id: 30,
      korean:
        "30. 우리 마음은 하나님의 성전이다. 성경에 우리는 하나님이 거하는 집이요, 성령의 전이라고 하였다(고전 3:9, 고전 6:19). 그런데 마음이 나쁘면 그 마음에 하나님도 성령도 주도 가지를 않는다. 영계에서 보면 마음 따라 그 위치에서 영이 살아간다.",
      english:
        "30. Our heart is God's temple. The Bible says that we are a house where God dwells and a temple of the Holy Spirit (1 Cor 3:9 and 1 Cor 6:19). But then if [a person's] heart is bad, God, the Holy Spirit, and the Lord will not enter that heart. When seen from the spiritual world, [a person’s] spirit lives in a position corresponding to [the condition of] their heart.",
    },
    {
      id: 31,
      korean:
        "31. 하나님은 마음을 감찰하신다. 마음을 보고 가인의 제사는 안 받으시고, 아벨의 제사는 받으셨다.",
      english:
        "31. God examines the heart. God accepted Abel's sacrifice but rejected Cain's looking at their hearts.",
    },
    {
      id: 32,
      korean:
        "32. 성경을 보면 마음이 나쁜 자는 모두 가인 취급하시고 쪼개시고 염소로 보았다.",
      english:
        "32. The Bible shows that [God] deemed all of those whose hearts were bad as Cains, perceived them as goats, and separated them out.",
    },
    {
      id: 33,
      korean:
        "33. 마음으로 믿어 의에 이르게 되는데, 마음이 변하여 온전치 못하고 마음이 나쁘면 그 마음은 의에 쓰이지 못한다.",
      english:
        "33. You reach righteousness by believing in [the Lord] in your heart. If your heart changes and becomes imperfect and if your heart is bad, that heart cannot be used for righteousness.",
    },
  ];

  return (
    <>
      <Proverbs message={mondayMessage} title={title} author={author} />
    </>
  );
};

export default page;
