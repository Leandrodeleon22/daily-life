import React from "react";

const Proverbs = ({ message, title, author }) => {
  return (
    <section className="text-[2.5rem]">
      <div className="mb-16">
        <h1>{title[0].korean}</h1>
        <h1>{title[1].english}</h1>
        <br />
        <h1>{title[2].subtitleKorean}</h1>
        <h1>{title[3].subtitleEnglish}</h1>
      </div>

      <ol>
        {message.map((proverb) => (
          <li className="mb-14 not-italic" key={proverb.id}>
            {proverb.korean} <br />
            <p>{proverb.english}</p>
          </li>
        ))}
      </ol>
      <div>
        {author.map((text) => {
          return <p key={text}>{text}</p>;
        })}
        {/* <p>{author[0]}</p>
        <p>{author[1]}</p> */}
      </div>
    </section>
  );
};

export default Proverbs;
