
export interface Planet {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  facts: {
    diameter: string;
    mass: string;
    gravity: string;
    distanceFromSun: string;
    orbitalPeriod: string;
    dayLength: string;
    moons: number;
    temperature: string;
  };
}

export const planets: Planet[] = [
  {
    id: "sun",
    name: "Sun",
    description: "The star at the center of our Solar System, providing heat and light.",
    fullDescription: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light, ultraviolet light, and infrared radiation. It is by far the most important source of energy for life on Earth. The Sun's diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth. Its mass is about 330,000 times that of Earth, and accounts for about 99.86% of the total mass of the Solar System.",
    image: "/lovable-uploads/211426bb-1ff9-4d39-a07b-7f2e579a0345.png",
    facts: {
      diameter: "1,391,000 km",
      mass: "1.989 × 10^30 kg",
      gravity: "274 m/s²",
      distanceFromSun: "0 km (it is the Sun)",
      orbitalPeriod: "225-250 million years around the galaxy",
      dayLength: "25-35 Earth days (varies by latitude)",
      moons: 0,
      temperature: "5,500°C (surface), 15 million°C (core)"
    }
  },
  {
    id: "mercury",
    name: "Mercury",
    description: "The smallest and innermost planet in the Solar System.",
    fullDescription: "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is not visible to the naked eye from Earth except during twilight. Similar to the Moon, Mercury appears to undergo phases as observed from Earth, meaning that only a portion of its surface is visible from Earth at any one time.",
    image: "/lovable-uploads/c9146795-acb6-4b65-aaeb-315792761d39.png",
    facts: {
      diameter: "4,879 km",
      mass: "3.3011 × 10^23 kg",
      gravity: "3.7 m/s²",
      distanceFromSun: "57.9 million km",
      orbitalPeriod: "88 days",
      dayLength: "176 Earth days",
      moons: 0,
      temperature: "-173°C to 427°C"
    }
  },
  {
    id: "venus",
    name: "Venus",
    description: "The second planet from the Sun and Earth's closest planetary neighbor.",
    fullDescription: "Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial planets, and it's often called Earth's twin because it's similar in size and density. Venus has a thick, toxic atmosphere filled with carbon dioxide and clouds of sulfuric acid. The atmosphere traps heat, making Venus the hottest planet in our solar system with surface temperatures hot enough to melt lead.",
    image: "/lovable-uploads/938cbe7b-059c-4efc-bb5a-4fd7c950ea86.png",
    facts: {
      diameter: "12,104 km",
      mass: "4.8675 × 10^24 kg",
      gravity: "8.87 m/s²",
      distanceFromSun: "108.2 million km",
      orbitalPeriod: "225 days",
      dayLength: "243 Earth days",
      moons: 0,
      temperature: "462°C"
    }
  },
  {
    id: "earth",
    name: "Earth",
    description: "Our home planet and the only known place in the universe with life.",
    fullDescription: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year.",
    image: "/lovable-uploads/523953da-c0fb-4067-9f6c-27cedcf9f60b.png",
    facts: {
      diameter: "12,742 km",
      mass: "5.972 × 10^24 kg",
      gravity: "9.807 m/s²",
      distanceFromSun: "149.6 million km",
      orbitalPeriod: "365.26 days",
      dayLength: "24 hours",
      moons: 1,
      temperature: "-88°C to 58°C"
    }
  },
  {
    id: "moon",
    name: "Moon",
    description: "Earth's only natural satellite, the brightest object in our night sky.",
    fullDescription: "The Moon is Earth's only natural satellite. It is the fifth-largest satellite in the Solar System and the largest and most massive relative to its parent planet, with a diameter about one-quarter that of Earth. The Moon is a differentiated rocky body, with an interior composed of a small iron-rich core, an extensive mantle, and a crust made primarily of plagioclase, a calcium aluminum silicate. The lunar surface is relatively non-reflective, with a reflectance just slightly brighter than that of worn asphalt.",
    image: "/lovable-uploads/4e3ba393-ebab-48b8-865e-02b849bf2ccd.png",
    facts: {
      diameter: "3,474 km",
      mass: "7.342 × 10^22 kg",
      gravity: "1.62 m/s²",
      distanceFromSun: "149.6 million km (same as Earth)",
      orbitalPeriod: "27.3 days around Earth",
      dayLength: "29.5 Earth days",
      moons: 0,
      temperature: "-173°C to 127°C"
    }
  },
  {
    id: "mars",
    name: "Mars",
    description: "The fourth planet from the Sun, known as the Red Planet.",
    fullDescription: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'. The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.",
    image: "/lovable-uploads/99b22114-2fd2-4c83-befb-f3e14833e8e5.png",
    facts: {
      diameter: "6,779 km",
      mass: "6.4171 × 10^23 kg",
      gravity: "3.721 m/s²",
      distanceFromSun: "227.9 million km",
      orbitalPeriod: "687 days",
      dayLength: "24 hours 37 minutes",
      moons: 2,
      temperature: "-87°C to -5°C"
    }
  },
  {
    id: "jupiter",
    name: "Jupiter",
    description: "The largest planet in our Solar System, a gas giant with a colorful atmosphere.",
    fullDescription: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history.",
    image: "/lovable-uploads/1115ef7e-d5c1-435c-8130-0a1170bb15b2.png",
    facts: {
      diameter: "139,820 km",
      mass: "1.8982 × 10^27 kg",
      gravity: "24.79 m/s²",
      distanceFromSun: "778.5 million km",
      orbitalPeriod: "11.86 years",
      dayLength: "9 hours 56 minutes",
      moons: 79,
      temperature: "-145°C"
    }
  },
  {
    id: "saturn",
    name: "Saturn",
    description: "The sixth planet from the Sun, known for its spectacular ring system.",
    fullDescription: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture and is most known for its prominent ring system, which is primarily composed of ice particles, with smaller amounts of rocky debris and dust.",
    image: "/lovable-uploads/43769665-ad7f-4922-b03d-74fc91d05905.png",
    facts: {
      diameter: "116,460 km",
      mass: "5.6834 × 10^26 kg",
      gravity: "10.44 m/s²",
      distanceFromSun: "1.4 billion km",
      orbitalPeriod: "29.46 years",
      dayLength: "10 hours 42 minutes",
      moons: 82,
      temperature: "-178°C"
    }
  },
  {
    id: "uranus",
    name: "Uranus",
    description: "The seventh planet from the Sun, an ice giant with a tilted rotation axis.",
    fullDescription: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.",
    image: "/lovable-uploads/eee3b8cd-565c-4b00-88a0-961d8802036e.png",
    facts: {
      diameter: "50,724 km",
      mass: "8.6810 × 10^25 kg",
      gravity: "8.69 m/s²",
      distanceFromSun: "2.9 billion km",
      orbitalPeriod: "84 years",
      dayLength: "17 hours 14 minutes",
      moons: 27,
      temperature: "-224°C"
    }
  },
  {
    id: "neptune",
    name: "Neptune",
    description: "The eighth and most distant planet from the Sun, a dynamic world with supersonic winds.",
    fullDescription: "Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.",
    image: "/lovable-uploads/d2905bf2-7fef-4009-9319-ad438aaa9539.png",
    facts: {
      diameter: "49,244 km",
      mass: "1.02413 × 10^26 kg",
      gravity: "11.15 m/s²",
      distanceFromSun: "4.5 billion km",
      orbitalPeriod: "164.8 years",
      dayLength: "16 hours 6 minutes",
      moons: 14,
      temperature: "-218°C"
    }
  },
  {
    id: "blackhole",
    name: "Black Hole",
    description: "A region of spacetime where gravity is so strong that nothing can escape, not even light.",
    fullDescription: "A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole. The boundary of the region from which no escape is possible is called the event horizon. Although the event horizon has an enormous effect on the fate and circumstances of an object crossing it, it has no locally detectable features. In many ways, a black hole acts like an ideal black body, as it reflects no light.",
    image: "/lovable-uploads/f2a05b6d-d98c-42b1-80f0-d0c459750b50.png",
    facts: {
      diameter: "Variable (can be millions of km)",
      mass: "Typically 5 to billions of solar masses",
      gravity: "Extreme (infinite at singularity)",
      distanceFromSun: "Varies (nearest ~1,000 light-years)",
      orbitalPeriod: "N/A",
      dayLength: "N/A",
      moons: 0,
      temperature: "Near absolute zero (event horizon)",
    }
  }
];
