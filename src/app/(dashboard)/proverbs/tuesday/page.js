import Proverbs from "@/components/Proverbs";
import React from "react";

const page = () => {
  const title = [
    { korean: "2024년 9월 3일 화요일 새벽 잠언" },
    { english: "Predawn proverbs for Tuesday, September 3, 2024" },
    {
      subtitleKorean:
        "* 240902(월)~240904(수)-새벽 잠언은 이어지는 잠언입니다.",
    },
    {
      subtitleEnglish:
        "The proverbs for Monday (9/2) continue until Wednesday (9/4).",
    },
  ];

  const author = ["TR: GCJ", "ENPE: Joyce W. & Vince S"];

  const mondayMessage = [
    {
      id: 7,
      korean:
        "7. 사탄과 악인은 하나님을 불신하여서 하나님이 모두 멸한다고 하셨다. 악인은 계속 계절이 하루하루 돌아와 겨울 되어 들판에 모기가 얼어 죽고, 잡초가 죽듯이 모두 죽는다.",
      english:
        "7. [God] said that He would destroy all of satans and wicked people because they have disbelieved Him. The wicked people will all die just as the mosquitoes and the weeds of the field die as the season continues to change day after day and the winter comes.",
    },
    {
      id: 8,
      korean:
        "8. 예전에 선생을 괴롭히는 악인이 있어 산에 기도하러 가서 기도하길, 악인을 왜 속히 심판하지 않느냐고 기도하였다. 저 악한 자로인해 많은 새 시대 사람들이 고통을 받고, 많은 생명들이 괴로운 고통을 받는다고 기도했다.",
      english:
        "8. There was a wicked person who tormented me, Seonsang(nim), in the past. When I went to the mountains to pray, I asked, “Why don’t You quickly judge the wicked?” I said in prayer, “Because of that wicked person, the people of the new times are tormented. Numerous lives are going through agonizing suffering.”",
    },
    {
      id: 8.5,
      korean:
        "계절 심판으로 잡초들이 죽어도 늦가을에 늦게 죽는 풀이 있었다. 가시가 돋혀 뻗어 가 크는 식물이다. 이 풀이 소나무를 잡고 있었다. 하나님은 그것을 보이면서 “모든 풀이 다 죽고, 이것만 남았지 않느냐. 그 악인도 이 잡초 풀 같다. 매일 와 보라.” 하셨다.",
      english:
        "There was a weed that remained alive until late autumn even though [all the other] weeds died by ‘the judgment of season.’ It was a thorny plant that grew and spread. It was taking hold of a pine tree. God showed it to me and said, “Don't you see that all the weeds have died except this one? That wicked person is like this weed. Come and check [it] every day.”",
    },
    {
      id: 8.6,
      korean:
        "그 잡초는 늦가을에 매일 죽어 갔다. 정말 속 시원하지 않게 여러 날 후에 잎이 떨어지고, 후에 넝쿨이 죽었다. 그 잡초가 잡초 중에 제일 늦게 죽는 풀이었다. 그와 같이 그 악인은 몇 년 후에 죽었다.",
      english:
        "In the late autumn, that weed kept withering day by day. Truly, it was not refreshing. It took many days for its leaves to fall, and the vine died even later. That weed was the kind that dies the latest among the weeds. The wicked person died several years later just like that.",
    },
    {
      id: 9,
      korean:
        "9. 지금 볼펜 심이 끝났다. “이와 같이 현실에 사탄이 발악하고 악인이 발악하지만 끝이 난다.”고 계시하셨다.",
      english:
        "9. The ink of [my] pen has just run out. God gives me a revelation saying, “Just like this, even though satans are going wild and wicked people are going berserk, it will come to an end.”",
    },
    {
      id: 10,
      korean:
        "10. 명예, 권세 그렇게도 휘날려도 아무것도 아니다. 육신만을 위해 살아서다. 마지막 허무한 인생으로 끝나서 영은 영원한 고통의 세계로 간다. 거기서 나오지를 못한다. 천국도 들어가면 보장되는 세계다. 그러나 육이 살아 있는 동안에 불신하면 영이 쫓겨난다. 지옥에 가면 영원히 후회하고 ‘왜 육신만을 위해 살았지?’ 하며 전지전능하신 하나님을 믿지 아니한 죄를 깨닫는다.",
      english:
        "10. Even if a person becomes very renowned and powerful, it is nothing. This is because they only live for the body. Ultimately, they will come to an end as an empty life, and their spirit will go to the eternal world of suffering. They will never be able to come out of there. Heaven is also a world where [the residency] is guaranteed once you enter. However, if the body disbelieves [God and the Lord] while living [in the world], then its spirit is cast out. When a person goes to Hell, they regret it forever. They realize that [they committed] the sin of not believing in the Omniscient and Omnipotent God.",
    },
  ];

  return (
    <>
      <Proverbs message={mondayMessage} title={title} author={author} />
    </>
  );
};

export default page;
