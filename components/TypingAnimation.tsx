import Typewriter from "typewriter-effect";
import _ from "lodash";

// Mui
import Typography from "@mui/material/Typography";

export default function TypingAnimation() {
  const passions = [
    "all things javascript.",
    "React and the NextJS framework in particular.",
    "the Legend of Zelda series.",
    "Software as a Service.",
    "the occassional hackathon.",
    "solving interesting problems with software.",
    "talking with / teaching others about software.",
    "collaborating with people who also have a passion for software.",
    "entrepreneurial ventures within the tech space.",
    "consistently learning new things.",
    "getting my hands dirty by exploring new technology.",
    "meditation and self-betterment.",
  ];

  return (
    <Typography variant="h6" align="center">
      {"Some things I'm passionate about are..."}
      <Typewriter
        options={{
          strings: _.shuffle(passions),
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 25,
        }}
      />
    </Typography>
  );
}
