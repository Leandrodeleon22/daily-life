import Proverbs from "@/components/Proverbs";
import React from "react";

const page = () => {
  const title = [
    { korean: "2024년 8월 6일 화요일 새벽 잠언    " },
    { english: "Predawn proverbs for Tuesday, August 9, 2024  " },
    {
      subtitleKorean:
        "*   240805(월)~240806(화)-새벽 잠언은 이어지는 잠언입니다. ",
    },
    {
      subtitleEnglish:
        "The proverbs for Monday (August 5) continue until Tuesday (August 6).    ",
    },
  ];

  const author = ["TR: GCJ", "ENPE: Joyce W. & Vince S"];

  const mondayMessage = [
    {
      id: 1,
      korean:
        "7. 항상 마음을 깨워 전지전능하신 하나님을 부르며 살아라. 네가 불러야지, 하나님이 부르시겠냐. 부르는 것이 구원이다.",
      english:
        "7. Live your life always awakening your heart and calling upon the Omniscient and Omnipotent God. Should God call out to [you]? You should call out to [Him]. Calling upon [God] is [receiving] salvation.",
    },

    {
      id: 2,
      korean:
        "8. 아무리 세상 것을 얻고 기뻐하며 살아도 영원하신 하나님을 잃고 살면, 모든 것을 다 잃고 영원한 삶을 뺏기고 육체만 사는 삶이다.",
      english:
        "8. No matter how many things of the world you acquire and how joyfully you live, if you live having lost the Eternal God, then it is a life in which everything is lost and eternal life is snatched away. It is a life in which only the body is living.        ",
    },
  ];

  return (
    <>
      <Proverbs message={mondayMessage} title={title} author={author} />
    </>
  );
};

export default page;
