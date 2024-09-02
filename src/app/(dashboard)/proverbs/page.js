import Proverbs from "@/components/Proverbs";
import React from "react";

const page = () => {
  const title = [
    { korean: "2024년 9월 2일 월요일 새벽 잠언" },
    { english: "Predawn proverbs for Monday, September 2, 2024" },
    {
      subtitleKorean:
        "* 240902(월)~240904(수)-새벽 잠언은 이어지는 잠언입니다.",
    },
    {
      subtitleEnglish: `The proverbs for Monday(9/2) continue until Wednesday(9/4).`,
    },
  ];

  const author = ["TR: GCJ", "ENPE: Joyce W. & Vince S"];

  const mondayMessage = [
    {
      id: 1,
      korean:
        "1. 모기를 잡으려고 수십 번 쫓다가 잡았다. 연습해야 잡는다. 사탄도, 악도 오래 다투다 보면 잡는 연습이 되고 유능해져서 잡는 것이다. 하나님도 사탄과 악한 것들을 매일 잡으러 다니신다. 하나님께 안 잡히려면 회개하기다. 하나님께 돌아오기다.",
      english:
        "1. I chased after a mosquito to catch it. After dozens of attempts, I caught it. You need to practice to catch it. If you argue with satans and the wicked for a long period of time, it becomes practice [for you] to catch them. You become competent and so catch them. God, too, goes around every day to capture satans and evil things. To avoid being captured by God, they should repent. They should return to God.",
    },
    {
      id: 2,
      korean:
        "2. 모기는 사람이 해를 주지 않아도 문다. 그래서 모기는 사탄같이 악한 것같이 자기에게 해를 주나 안 주나 잡아 잡아 죽여야 한다.",
      english:
        "2.  A mosquito bites people even if they do not harm it. That is why you have to catch a mosquito and kill it, whether it harms you or not, as you would capture a satan or an evil thing.",
    },
    {
      id: 3,
      korean:
        "3. 악한 것과 사탄은 사람이 해를 안 줘도 사람에게 해를 주니 잡아야 한다.",
      english:
        "3. You must capture satans and evil things because they harm people even if people do not harm them.",
    },
    {
      id: 4,
      korean:
        "4. 악한 것과 사탄은 해를 주는 존재로 존재한다. 기도해야 하나님이 잡아 없앤다. 악한 것과 사탄은 하늘 역사에 천적이다. 하나님 성령 성자 구원자들은 악과 사탄을 모두 다 없앤다. 사탄과 악을 없애야 천국이다.",
      english:
        "4. Satans and evil things exist as beings that harm. We must pray. Then, God will capture and remove them. Satans and evil things are the perpetual enemies to God's history. God, the Holy Spirit, the Holy Son, and the saviors eliminate evil and all satans. Satans and evil must be eliminated. Then, it will be heaven.",
    },
    {
      id: 5,
      korean:
        "5. 지옥이나 불바다를 가 보면 결국 거기에 천적들을 다 가두어 놓고 갖은 고통을 주고, 영원히 못 나오게 유황불로 튀긴다. 그들은 죽지도 않고 고통만 받는다. 그 고통은 지구 세상 모든 자들이 다 받아도 감당 못 하는 만큼의 고통이다. 받으면서도 못 벗어난다.",
      english:
        "5. If you go and see Hell or the lake of fire, the perpetual enemies are ultimately all confined [there]. They are tormented in all kinds of ways, and they are fried with burning sulfur so that they will not be able to escape forever. They do not even die. They only suffer the torment. The intensity of the torment is such that even if all people of the earthly world received it together, they would not be able to bear it. [Those spirits] receive the torment, and they cannot get out of it.",
    },
    {
      id: 6,
      korean:
        "6. 악을 행함과 사람을 해하고, 하나님을 섬기는 자들을 괴롭힌 죄다.",
      english:
        "6. [They committed] the sins of doing evil, harming people, and tormenting the worshipers of God.",
    },
  ];

  return (
    <>
      <Proverbs message={mondayMessage} title={title} author={author} />
    </>
  );
};

export default page;
