import Proverbs from "@/components/Proverbs";
import React from "react";

const page = () => {
  const title = [
    { korean: "2024년 8월 30일 금요일 새벽 잠언" },
    { english: "Predawn proverbs for Friday, August 30, 2024 " },
    {
      subtitleKorean:
        "*   240829(목)~240830(금)-새벽 잠언은 이어지는 잠언입니다. ",
    },
    {
      subtitleEnglish:
        "The proverbs for Thursday(8/29) continue until Friday(8/30).",
    },
  ];

  const author = ["TR: GCJ", "TRX: Fan I.", "ENPE: Joyce W."];

  const mondayMessage = [
    {
      id: 1,
      korean:
        "14. 모든 존재 세계는 짝으로 존재한다. 이는 사랑하려 함이다. 결합하여 목적을 이루기 위해서다. 자동차 부속품, 기계 부속품도 상대 세계로 결합되게 만들어 고정하여 조립시킨다.",
      english:
        "14. All things exist in pairs. This is to love. This is to fulfill the purpose through union. Auto parts and machine parts also are made to become united as matching counterparts. They are made to be fastened and assembled in that way.",
    },

    {
      id: 2,
      korean:
        "15. 사랑도 상대로 행할 때 더 불같고, 강하다. 두 겹줄이 되어서다. 생각도, 느낌도 더 크다. 이와 같이 사람 혼자 사랑하는 것보다 근본자 하나님의 대상이 되어 사랑할 때 사랑이 더 크고, 그 사랑을 더 느낀다. 이는 자기 혼자 기도할 때와 하나님과 성령의 대상이 되어 같이 목적을 행할 때 다르듯 다른 것이다.",
      english:
        "15. Love is fierier and stronger when it is done with a counterpart. This is because it becomes two strands. Feelings and thoughts become stronger as well. Likewise, when a person becomes a counterpart of God, the Origin, and loves, love is greater, and they feel love more vividly than when they love alone. This is different just as there is a difference between the time they pray alone and the time they carry out the purpose with God and the Holy Spirit as Their counterpart.",
    },
    {
      id: 3,
      korean: "16. 혼자 있으면 느리고, 지속이 길다.",
      english: "16. If you are alone, it is slow and prolonged.",
    },
    {
      id: 4,
      korean:
        "17. 은혜를 많이 받은 자가 말씀을 들어도 많이 느낀다. 그러니 충격도 기쁨도 크다.",
      english:
        "17. A person who has received a lot of grace feels much more while hearing the Word. Therefore, the impact and the joy are greater too.",
    },
    {
      id: 5,
      korean:
        "18. 수영하는 자들은 물의 깊이가 50cm, 100cm 깊이보다 1.2m 깊이로 물이 많아야 더 많이 느끼고 기뻐한다. 이와 같이 누구든지 기도와 의가 많아야 말씀을 들을 때도, 기도할 때도, 말씀을 전할 때도 많이 느낀다.",
      english:
        "18. Swimmers feel more intensely and rejoice when there is more water–when it is 120 centimeters deep compared to 50 or 100 centimeters deep. Likewise, no matter who it is, a person needs to have an immense amount of prayer and righteousness in order for them to feel intensely when they hear the Word, when they pray, or when they deliver the Word.",
    },
    {
      id: 6,
      korean:
        "19. 많이 아는 자가 세상을 살아가면서도 많이 느낀다. 신앙 세계에서도 그러하다.",
      english:
        "19. Someone who knows a lot feels a lot while living in the world. The same is true in the world of faith.",
    },
    {
      id: 7,
      korean:
        "20. 똑같은 양의 음식도 5분 동안 먹으면 5분 동안 느끼고, 1시간 먹으면 1시간 동안 맛을 느낀다. 많이 느끼려면 많이 하여라.",
      english: `20. Even with the same amount of food, if you eat it for five minutes, you will taste* the flavor for five minutes. If you eat it for one hour, you will taste* it for one hour. If you wish to feel a lot, do a lot.
        {Translation note: KO says ‘feel,’ 느끼다.}`,
    },
    {
      id: 8,
      korean:
        "21. 신앙의 삶도 빨리 뛰고 달리면 빨리 끝나고, 천천히 그 시간 맞춰 하면 더 정확하게 하고, 오랫동안 기쁨을 느끼면서 행하게 된다. 일의 맛을 느끼면서 해야 정확하게, 더 구체적으로, 자세히 하게 된다.",
      english:
        "21. In the life of faith also, if you run and dash fast, you will finish fast. If you do it slowly according to the schedule, you will do it more accurately, and you will do it feeling the joy for a long time. You should do it while sensing the flavor of the work. Then, you can do it more accurately, more concretely, and in detail.",
    },
    {
      id: 9,
      korean:
        "22. 빨리 뛰면 지친다. 조정이다. 자기 사명도 조정하면서 하는 일을 깨닫고 하기다.",
      english:
        "22. If you run fast, you will get tired. [You need] to adjust. With your mission too, do it with realization about your work while adjusting.",
    },
    {
      id: 10,
      korean:
        "23. 행복하여도 그로 인한 고통은 있고, 불행과 고통에도 그로 인한 행복은 따른다.",
      english:
        "23. Even if you are happy, there is pain because of that. Even if you are in misfortune or suffering, there is happiness because of that.",
    },
  ];

  return (
    <>
      <Proverbs message={mondayMessage} title={title} author={author} />
    </>
  );
};

export default page;
