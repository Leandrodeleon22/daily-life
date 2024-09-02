import Proverbs from "@/components/Proverbs";
import React from "react";

const page = () => {
  const title = [
    { korean: "2024년 8월 31일 토요일 새벽 잠언   " },
    { english: "Predawn proverbs for Saturday, August 31, 2024 " },
    {
      subtitleKorean:
        "*   240805(월)~240806(화)-새벽 잠언은 이어지는 잠언입니다. ",
    },
    {
      subtitleEnglish:
        "The proverbs for Monday (August 5) continue until Tuesday (August 6).    ",
    },
  ];

  const author = ["TR: GCJ", "TRX: Fan I.", "ENPE: Joyce W. & Vince S"];

  const mondayMessage = [
    {
      id: 1,
      korean:
        "1. ‘심금을 울린다. 짐승도 알아듣는다.’라는 말은, ‘말을 잘한다.’ 함이다.",
      english:
        "1. “It strikes a chord” and “Even animals understand” are expressions that mean “They speak well.”",
    },

    {
      id: 2,
      korean: "2. 하나님도 그 마음을 알고 깨닫고 대하면 통한다.",
      english:
        "2. With God too, if you interact with Him knowing His heart and having realizations, God will connect [with you].  ",
    },
    {
      id: 3,
      korean: "3. 성령님이 감동 줬을 때 깨닫고 대한다면 역사하신다.",
      english:
        "3. If you realize and interact with the Holy Spirit when She gives you inspiration, She will work mightily.",
    },
    {
      id: 4,
      korean:
        "4. 만물도 그 존재를 알고 관리하고 대하면, 제대로 성장하고 통한다.",
      english:
        "4. With creation too, if you take care of them and interact with them knowing about their existence, they will properly grow and connect [with you].        ",
    },
    {
      id: 5,
      korean:
        "5. 만물 대화는 그 만물의 존재를 정확히 알고 대하면 자기 마음이 투시하여져서 자기 마음을 읽고, 자기 마음이 통해 만물과 대화하는 것이다.",
      english: `5. Conversation with creation happens this way: If you handle* something of creation while accurately knowing its existence, your heart can see through [it]. As you read your heart, which connects [with it], you [can] converse with creation.
        {Translation note: 대하다 may be translated as ‘to face, interact with, handle, treat something or someone in a certain way.’}`,
    },
    {
      id: 6,
      korean: `6. 그러므로 “돌과 대화했다. 나무와 대화했다. 짐승과 대화 했다.” 하고 좋아 섬기기도 한다. 선을 넘으면 우상같이 섬긴다. 1차원은 자기 대화다. 2차원은 통하고 대화하고, 3차원은 동물이 알아듣고 따라오고, 4차원은 동물이 돕기까지 한다.  하나님 성령 성자와도 그러하다. 만물도, 사람도, 하나님도 차원대로 통한다.      ",
      english: 6. For this reason, some people delight in and worship [creation]. They say, “I’ve conversed with a rock. I’ve conversed with a tree. I’ve conversed with an animal.” If they go over the line, they will worship [creation] like idols.
        The first level is conversing [within] yourself.
        The second level is connecting and conversing.
        The third level is where an animal understands and follows [you].
        The fourth level is where the animal even helps you.
        ", 
        It is similar [when connecting] with God, the Holy Spirit, and the Holy Son. Whether it is with creation, people, or God, you connect according to your level. `,
    },
    {
      id: 7,
      korean:
        "7. 삼위와 주와의 대화도 1차원은 통하는 단계이고, 2차원은 주체 되시는 하나님 성령 성자와 주가 알아주시고, 3차원은 같이 대화하고, 4차원은 같이 행한다. 5차원은 만들어 업적을 남긴다. 6차원은 사랑하며 같이 산다.",
      english: `7. Regarding the conversation with the Trinity or the Lord too, the first level is where you connect.
        The second level is where God, the Holy Spirit, the Holy Son, and the Lord–who are the subjects*–acknowledge you.
        The third level is where you converse with Them.
        The fourth level is where you take action with Them.
        The fifth level is where you make [things] and leave [them] as achievements.
        The sixth level is where you live with Them, loving Them and being loved by Them.
        {Translation note: As opposed to ‘the object’}
        `,
    },
    {
      id: 8,
      korean:
        "8. 그러므로 높은 존재자가 낮은 자와 통하고 같이 살려면, 키우고 가르치고 차원을 높게 만들어 같은 차원이 되게 하여야 같이 살 수 있다.        ",
      english:
        "8. Therefore, if high-level Beings have a will to connect and live with a low-level person, it is possible only after They nurture and teach the person and make their level rise high and become the same level [as Them].        ",
    },
    {
      id: 9,
      korean: `9. 하나님은 6000년 동안 시대 따라 차원을 높이면서 종교 역사를 펴 오셨다.
        1차원, 구약역사에서 종으로 대하며 가르쳐 주고 성장시키고,
        2차원, 신약역사에서 예수님을 보내어 한 차원 높여 자녀로 대하면서 2000년 동안 성장시키며 역사를 펴 오고,
        3차원, 마지막 성약역사에서 시대 구원자 보내어 가르쳐서 천 년 동안 차원 높여 신부로 대하면서 하나님의 역사를 펴 간다.
        절대 차원 높여서 가르치고 행케 하여 조건이 되어야 계획한 뜻 안에 선택되어, 그들로 하나님 뜻을 이룬다. ‘차원’을 잊지 말아라.
        섭리사에서도 아는 차원대로 대하고, 사명을 주고 행한다. 하나님은 맡겼어도 그 차원이 안 되면 교체하고, 예비된 자가 행케 하신다. 
        `,
      english: `9. God has carried out religious history while raising the level according to the times for 6,000 years.
        The first level: God raised and taught [humans] treating them as servants in the Old Testament\n\n history.
        The second level: He sent Jesus, raised [people], treated them as children–one level higher–and made history for 2,000 years in the New Testament history.
        The third level: In the final Complete Testament history, God sends the savior of the time period and teaches [people]. He makes the history of God while treating them as brides at a higher level for 1,000 years.
        In Providence too, [a person] is treated, is given a mission, and can work according to the level of their knowledge. Even after God entrusts [a person] with something, but if they do not reach the [required] level, He replaces them and lets another person who has been prepared carry it out.
        `,
    },
  ];

  return (
    <>
      <Proverbs message={mondayMessage} title={title} author={author} />
    </>
  );
};

export default page;
