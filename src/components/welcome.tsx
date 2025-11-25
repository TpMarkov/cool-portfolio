import {useRef} from "react";
import gsap from "gsap";

export const FONT_WEIGHT = {
  subtitle: {min: 100, max: 400, default: 100},
  title: {min: 400, max: 900, default: 400},
}
const renderText = (text, className, baseWeight = 100) => {
  return [...text].map((char, i) => (
      <span key={i} className={className} style={{fontVariationSettings: `'whgt ${baseWeight}`}}>
        {char === " " ? '\u00A0' : char}
      </span>
  ))
}

const setupTextContainer = (container, type) => {
  if (!container) return

  const letters = container.querySelectorAll('span')

  const {min, max, default: base} = FONT_WEIGHT[type]

  const animatedLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration, ease: "power2.out",
      fontVariationSettings: `'whgt ${weight}`
    })
  }

}

export const Welcome = () => {
  const titleRef = useRef(null)
  const subTitleRef = useRef(null)


  return (
      <section id={"welcome"}>
        <p ref={subTitleRef}>{renderText("Hey, I'm Tsvetan! Welcome to my", "text-3xl text-georama", 100)}</p>
        <h1 ref={titleRef} className={"mt-7"}>{renderText("portfolio", "text-9xl italic font-georama")}</h1>
        <div className={"small-screen"}>
          This Portfolio is designed for desktop/tabled screens
        </div>
      </section>
  )
}
