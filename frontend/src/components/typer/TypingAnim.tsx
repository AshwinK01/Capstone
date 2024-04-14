import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Welcome To Talk-Tech",
        1000,
        "Experience the Future of AI-Driven Conversations",
        2000,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "White",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
