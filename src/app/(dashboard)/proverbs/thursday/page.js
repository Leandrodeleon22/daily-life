import Proverbs from "@/components/Proverbs";
import React from "react";

const page = () => {
  const title = [
    { korean: "2024년 8월 29일 목요일 새벽 잠언" },
    { english: "Predawn proverbs for Thursday, August 29, 2024 " },
    {
      subtitleKorean:
        "*   240829(목)~240830(금)-새벽 잠언은 이어지는 잠언입니다.",
    },
    {
      subtitleEnglish:
        "The proverbs for Thursday(8/29) continue until Friday(8/30).",
    },
  ];

  const author = ["TR: GCJ", "ENPE: Vince S. & Chiazom E."];

  const mondayMessage = [
    {
      id: 1,
      korean:
        "1. 사람은 좋은 것을 찾고 다닌다. 그러다 찾으면 그것을 행한다. 그러므로 마음 기쁨, 그 육체 기쁨이다.",
      english:
        "1. People go around looking for something good, and when they find it, they do it. Therefore, there is joy for the heart and joy for the body.",
    },

    {
      id: 2,
      korean:
        "2. 사람은 자기가 좋아하는 것을 행하는 것이 행복이라고 한다. 하나님은 “나 하나님이 좋아하는 것을 행해야 너희 육신도, 영도 행복이다. 나의 뜻을 행하여 육신 일생, 영혼 영원토록 행복하여라.” 하셨다.",
      english:
        "2. People say that doing what they like is happiness. God says, “Both your body and spirit will be happy only if you do what I, God, like. Be happy in body for your lifetime and be happy in soul and spirit for eternity by carrying out My Will.”",
    },
    {
      id: 3,
      korean:
        "3. 사람의 육신의 쾌락은 육신이 누리고 육신에서 끝난다. 밥 먹는 낙을 누리면 육신에서 끝난다. 육신이 영을 위해서 살면 영이 영원토록 혜택받고, 육도 일생 동안 혜택받고 살게 된다.",
      english:
        "3. The pleasure of the human body is enjoyed by the body and ends with the body. When you enjoy the pleasure of eating food, it ends with the body. [However,] if the body lives for the spirit, then the spirit will benefit from it forever, and the body too will receive the benefit until the end of its life.",
    },
    {
      id: 4,
      korean:
        "4. 영을 위해 살면 그 의로 인하여 육신이 축복받고, 영은 생명권에 살다 영원한 천국으로 가게 된다.",
      english:
        "4. If you live for the spirit, your body will receive blessings because of that righteousness, and your spirit will live in the domain of life and then go to the eternal kingdom.",
    },
    {
      id: 5,
      korean: "5. 육을 위해서만 살면 육만 기뻐 살고, 영은 혜택을 받지 못한다.",
      english:
        "5. If you live only for the body, then the body alone will live joyfully while the spirit will have no benefit.",
    },
    {
      id: 6,
      korean:
        "6. 영 자체도 영계에서 의를 행한다. 그러나 자기 육이 영을 위해 늘 행해 주지 않으면 구원이 어렵다.",
      english:
        "6. The spirit itself does righteous deeds in the spiritual world. However, unless the body takes action for the spirit all the time, salvation is difficult.",
    },
    {
      id: 7,
      korean:
        "7. 하나님의 말씀을 그 보낸 자를 통해 듣고 믿고 행하며 하나님의 뜻을 이루어야, 영이 완전하게 성장하게 된다. 혼도 그러하다.",
      english:
        "7. Your spirit matures perfectly only if you hear God’s Word through the one He sent, believe it, put it into action, and thus fulfill God’s Will. It is the same with the soul.",
    },
    {
      id: 8,
      korean:
        "8. 작은 일이나 큰일이나 목적을 달성해야 그로 인한 모든 것을 그때 보고 느끼게 된다.",
      english:
        "8. Whether it is something big or small, you must fulfill the purpose. Only then will you see and feel all the things that result from it at that time.",
    },
    {
      id: 9,
      korean: "9. 목적의 존재를 계속 보고 느끼려면 쉬지 말고 행하기다.",
      english: `9. If you wish to continue to see and feel ‘the existence of the purpose,’* take action without ceasing.
      {Translation note: 목적의 존재 literally means “existence of purpose.” This may be understood along with Proverb 8.}`,
    },
    {
      id: 10,
      korean:
        "10. 비바람 눈보라 쳐도 걸어가고 행해야 목적지에 가게 되고, 보람을 느낀다.",
      english:
        "10. You need to walk and take action even if rainstorms and snow blizzards blow. Only then will you reach the destination and feel satisfaction.",
    },
    {
      id: 11,
      korean:
        "11. 육의 것도, 영의 것도 한계를 정해 놓았다. 한계를 넘으면 정상에서 내려가는 길이다.",
      english:
        "11. Limits are set for the things of the body and the things of the spirit. Beyond the limit is a road that descends from the peak.",
    },
    {
      id: 12,
      korean:
        "12. 산 정상에 서 있으면 항상 동서남북이 보인다. 내려가면 내려간 만큼 안 보인다. 신앙의 한계도 그러하다.",
      english:
        "12. If you stand on the top of a mountain, you can see the east, the west, the south, and the north all the time. If you go down, you will see less as much as you have gone down. The limits in faith are the same.",
    },
    {
      id: 13,
      korean: "13. 모든 삶의 선을 넘으면 다른 주관권 세계로 가진다.",
      english:
        "13. If you go over the line in any [aspect of] life, you will end up going to the world of another domain.",
    },
  ];

  return (
    <>
      <Proverbs message={mondayMessage} title={title} author={author} />
    </>
  );
};

export default page;
