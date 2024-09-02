import Proverbs from "@/components/Proverbs";
import React from "react";

const page = () => {
  const title = [
    { korean: "2024년 8월 28일 수요일 새벽 잠언" },
    { english: "Predawn proverbs for Wednesday, August 28, 2024" },
    {
      subtitleKorean:
        "*  240826(월)~240828(수)-새벽 잠언은 이어지는 잠언입니다.",
    },
    {
      subtitleEnglish:
        "The proverbs for Monday(8/26) continue until Wednesday(8/28).",
    },
  ];

  const author = [];

  const mondayMessage = [
    {
      id: 34,
      korean:
        "34. 하나님도 주도 마음을 보신다. 마음이 좋으면 자기를 좋게 만들 수 있다. 그렇지 않으면 못 만든다. 중심자나 왕들을 뽑을 때 마음 보고 뽑으셨다.",
      english:
        "34. God and the Lord both look at the heart. If a person’s heart is good, they can make themselves good. If not, they cannot make themselves. When God selected central figures and kings, He chose them by looking at their hearts.",
    },
    {
      id: 35,
      korean:
        "35. 마음이 가시 같고, 마음이 악평하고, 마음이 살인하고, 마음이 시기 질투하고, 마음이 교만하고, 마음이 무지하고, 마음이 괴롭게 하고, 마음이 악을 행케 한다고 하시며, 하나님은 마음 보고 심판도 하시고 축복도 주셨다. 마음은 환경과 같다. 하나님은 환경, 모양, 형상이 좋은 곳에 하나님의 궁을 짓고 세계로 뜻을 펴신다. 마음이 온유한 자가 땅을 차지하게 하신다.",
      english:
        "35. God blessed or judged based on the heart, saying that the heart was like a thorn, the heart slandered, the heart murdered, the heart was envious and jealous, the heart was arrogant, the heart was ignorant, the heart tormented, and the heart promoted evil acts.The heart is like an environment. God built His palace where the environment, the image, and the likeness are good, and He has been spreading His will to the world. [God] allows a person with a gentle heart to take possession of the land.",
    },
    {
      id: 36,
      korean:
        "36. 마음이 생각이다. 하나님은 “사람은 생각으로 살아간다. 고로 생각을 온전하게 만들어라.” 하셨다.",
      english:
        "36. The heart is thoughts. God said, “Human beings live by their thoughts. Therefore, make your thoughts perfect.”",
    },
    {
      id: 37,
      korean: "37. 하나님은 생명의 근원이 마음에 있다 하셨다.",
      english: "37. God said, “The springs of life flow from the heart.”",
    },
    {
      id: 38,
      korean:
        "38. 하나님은 마음 보고 도우신다. 마음 보고 사랑의 대상으로 삼으시고, 마음이 썩으면 살다가도 버리신다.",
      english:
        "38. God helps looking at the heart. Based on the heart, God makes [a person] His counterpart of love. If their heart decays, [however,] God disowns them even after living with them.",
    },
    {
      id: 39,
      korean:
        "39. 육은 나무요, 마음은 과일 같다. 썩으면 버린다. 선한 열매를 맺지 못하면 베임을 받는다.",
      english:
        "39. The body is a tree; the heart is like the fruit. When [it] decays, it is thrown away. If [the tree] does not bear good fruit, it is cut down.",
    },
    {
      id: 40,
      korean: "40. 마음이 죄 없이 정결해야 하나님을 본다.",
      english:
        "40. The heart must be pure and devoid of sin. Only then can [a person] see God.",
    },
    {
      id: 41,
      korean:
        "41. 마음 좋은 자들이 잘되고, 마음이 안 좋은 자들은 의로운 자의 것을 도적질해 갔다. 그렇다고 잘 되는 것이 아니다.",
      english:
        "41. People with good hearts prosper, but those with bad hearts steal what belongs to the righteous. Even so, they will not flourish.",
    },
    {
      id: 42,
      korean: "42. 마음과 행위대로 하나님이 갚아 주신다.",
      english: "42. God repays according to the heart and action.",
    },
    {
      id: 43,
      korean:
        "43. 하나님의 전 안의 것이나 어떤 곳에 있든지 하나님의 것을 관리를 잘 못해서 죽었든지 도적맞으면 미안하게 생각하고, 더 좋은 것으로 해 놓겠다고 하고 찾으러 다녀야 그 마음을 보시고 더 좋은 것을 찾게 도우신다.",
      english:
        "43. If [a person] fails to take care of what belongs to God whether it was placed within God’s temple or elsewhere and if, as a result, the thing dies or is stolen; [the caretaker] should feel sorry about that, promise to replace it with one that is better, and search for it. Then, God will look at their heart and help them find something better.",
    },
    {
      id: 44,
      korean:
        "44. 운동장 독수리 분재는, 조산 왕바위 암벽에 손가락만 한 소나무 작품이 있었는데 그것을 누가 캐 가서 그것 보고 선생이 쇼크 받고, 하나님께 꼭 그보다 더 좋은 것을 캐다 심겠다고 기도했다. 그리고 찾아서 사 온 것이 그보다 더 좋은 독수리 분재 소나무다. 그 나무는 삼가리 지역 암벽 솔이다. 사연이 얽힌 솔이다.",
      english:
        "44. [This is how] the Eagle bonsai on the sports field [was brought in]. There was a finger-thin pine-tree artwork on the King Rock cliff of Jo-san(Mount Morning). Somebody dug it away, and I was shocked to learn it. I prayed to God that I would make sure to find one that is better than that tree and plant it. Afterward, I found it, purchased it, and had it brought in. That is the Eagle bonsai pine tree–it is better than the [tree that was lost]. That pine grew on a rocky cliff in Samgari area. It is a pine tree with a deep story.",
    },
    {
      id: 45,
      korean:
        "45. 요가의 ‘쟁기 자세’, 피겨스케이팅의 ‘이나 바우어(Ina Bauer) 동작’ 자세 모양의 걸작품인 ‘깨닫다 솔’도 그러하다. 2009년 선생이 서울에서 군산으로 이송될 때 ‘나는 행복하다’라는 곡을 짓고 창밖을 보며 생각했다. 시대 고통 마치고 들어갈 때 빈손으로 가지 않고 하나님 성전에 솔이라도 심겠다고 하였다. 그로부터 시작되었다. ",
      english: `45. ‘Realize Pine’ also has a deep story. This is a great artwork pine that possesses an image of plow pose* and an Ina Bauer move in figure skating. In 2009, when I, Seonsang(nim), was being transferred to Gunsan from Seoul, I wrote the song, ‘I Am Happy,’ and I was thinking, looking out the window [of the vehicle]: “When I enter after finishing the suffering of the time period, I will not go empty-handed, but I will at least plant a pine tree in God’s temple.” That was how [the story] began.
      {Translation note: a yoga pose}`,
    },
    {
      id: 46,
      korean:
        "46. 그때 이동 차량 타고 한 지역을 지나갈 때 한 지역의 소나무를 보고서 제자들에게 알리어 4~5년 동안 관리하게 하였다.그런데 잘못 관리하여 죽어서 그것 대신 하나님 전에 더 좋은 것 사다 심겠다고 결심하고 솔을 찾다가 성령께서 감동을 주셔서 ‘깨닫다 솔’을 사게 됐다.",
      english:
        "46. At that time, I saw a pine tree while passing a certain region sitting in the vehicle that transferred me. I let my disciples know [about the pine tree] and had them take care of it for four to five years. But they did not look after it well, so the tree died. I was determined to buy one that would be better than that and plant it in God’s temple. Then I searched for a pine tree until I bought Realize Pine as the Holy Spirit inspired me.",
    },
    {
      id: 47,
      korean:
        "47. 살 때도 모르고 샀다. 2년 후에 어느 날 손님이 온다고 하여 그 소나무 주변을 깨끗이 청소하고, 나무의 무성한 가지를 다 자르니 그 형상이 보였다. 그래서 알게 되었다. 전에 죽은 나무 대신 성령 폭포 우측 것을 사다 심고, 또 쟁기 자세 작품 솔, ‘깨닫다 솔’도 사다 심게 된 것이다. 그로 인해서 그 외에도 하나님 성전에 더 좋은 나무들을 심게 됐다.",
      english:
        "47. I did not know [it had the images] when I bought it. Two years later, expecting a guest to come, I cleaned the surrounding area of [that] pine and pruned all of its thickly grown branches. Only then did those images become noticeable. So I came to know. In order to replace the trees that had previously died, the pine tree on the right side of the Holy Spirit Waterfall was purchased and transplanted. Realize Pine, an artwork pine, which possesses a plow posture [image], was also purchased and transplanted. Through this, we came to plant other better trees in God’s Temple in addition to them.",
    },
    {
      id: 48,
      korean: "48. 이같이 쇼크를 통해 더 좋은 것을 얻었다.",
      english:
        "48. In this way, [we] gained the things that are better through being shocked.",
    },
    {
      id: 49,
      korean: "49. 섭리역사, 지금도 그러하다.",
      english:
        "49. This is true with Providence history in the present as well.",
    },
  ];

  return (
    <>
      <Proverbs message={mondayMessage} title={title} author={author} />
    </>
  );
};

export default page;
