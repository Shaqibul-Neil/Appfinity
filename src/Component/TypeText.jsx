import { TypeAnimation } from "react-type-animation";

const TypeText = () => {
  return (
    <span className="text-white font-semibold text-lg md:text-2xl lg:text-3xl">
      <TypeAnimation
        sequence={[
          "Building awesome apps 🚀",
          2000,
          "Designing experiences 🎨",
          2000,
          "Innovating every day 💡",
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
      />
    </span>
  );
};

export default TypeText;
