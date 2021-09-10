export default function globals() {
  const about = {
    squadrons: {
      name: 'Squadrons',
      icon: 'fighter_128.png',
    },
    expeditions: {
      name: 'Expeditions',
      icon: 'mountain_128.png',
    },
    platforms: {
      name: 'Platforms',
      icon: 'carrier_128.png',
    },
  };

  const enlist = {
    flag: {
      name: 'Flag',
      icon: 'flag_512.png',
    },
  };

  const helm = {
    discord: {
      name: 'Radio Channels',
      icon: '/discord_128.png',
      link: 'https://discord.gg/9yYsQVYR3K',
    },
    discourse: {
      name: 'Central Intelligence',
      icon: '/column_128.png',
      link: 'https://google.com',
    },
    icarus: {
      name: 'Icarus Force',
      icon: '/quill_128.png',
      link: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/README.md',
    },
    expeditions: {
      name: 'Expeditions',
      icon: '/compass_128.png',
      link: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/expeditions.md',
    },
    squadrons: {
      name: 'Squadrons',
      icon: '/insignia_128.png',
      link: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/squadrons.md',
    },
    resources: {
      name: 'Resources',
      icon: '/books_128.png',
      link: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/resources.md',
    },
  };

  const socials = {
    github: {
      url: 'https://github.com/icarus-initiative',
      alt: 'Icarus Initiative Github Organization',
    },
    discord: {
      url: 'https://discord.gg/9yYsQVYR3K',
      alt: 'Icarus Initiative Discord',
    },
    youtube: {
      url: 'https://www.youtube.com/channel/UCTurxUPFKUZARHQkihpMAfg',
      alt: 'Icarus Initiative Youtube',
    },
    twitter: {
      url: 'https://twitter.com/icarusinit',
      alt: 'Icarus Initiative Twitter',
    },
  };

  return { about, enlist, helm, socials };
}
