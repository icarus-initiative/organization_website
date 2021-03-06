import styled from 'styled-components';

export default function lib() {
  // ====================
  // Styled Components
  // ====================
  const Purplerize = styled.span`
    color: var(--purple);
  `;
  const Tealrize = styled.span`
    color: var(--teal);
  `;

  // ====================
  // Links
  // ====================
  const about = {
    squadrons: {
      name: 'Squadrons',
      icon: 'fighter_128.webp',
    },
    expeditions: {
      name: 'Expeditions',
      icon: 'mountain_128.webp',
    },
    platforms: {
      name: 'Platforms',
      icon: 'carrier_128.webp',
    },
  };

  const credits = {
    flaticon: {
      url: 'https://www.flaticon.com/',
      title: 'Flaticon',
    },
    nhorphai: {
      url: 'https://www.flaticon.com/authors/nhor-phai',
      title: 'Nhor Phai',
    },
    freepik: {
      url: 'https://www.freepik.com',
      title: 'Freepik',
    },
    eucalyp: {
      url: 'https://www.flaticon.com/authors/eucalyp',
      title: 'Eucalyp',
    },
    pixelperfect: {
      url: 'https://www.flaticon.com/authors/pixel-perfect',
      title: 'Pixel perfect',
    },
    smashicons: {
      url: 'https://www.flaticon.com/authors/smashicons',
      title: 'Smashicons',
    },
    dimitry: {
      url: 'https://www.flaticon.com/authors/dimitry-miroliubov',
      title: 'Dimitry Miroliubov',
    },
    goodware: {
      url: 'https://www.flaticon.com/authors/good-ware',
      title: 'Good Ware',
    },
    icongeek26: {
      url: 'https://www.flaticon.com/authors/icongeek26',
      title: 'Icongeek26',
    },
  };

  const enlist = {
    flag: {
      name: 'Flag',
      icon: 'flag_512.webp',
    },
  };

  const faq = {
    figment: {
      url: 'https://learn.figment.io/protocols/solana',
      title: 'Figment.io Solana Protocol',
    },
    walletGuidelines: {
      url: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/guides/1st_expedition_wallet_guidelines.md',
      title: 'Icarus Initiative Wallet Guidelines',
    },
    twitter: {
      url: 'https://twitter.com/icarussquadron',
      title: 'Icarus Initiative Twitter',
    },
    discord: {
      url: 'https://discord.gg/D3kx72wJyv',
      title: 'Icarus Initiative Discord',
    },
    repo: {
      url: 'https://github.com/icarus-initiative/icarus_initiative',
      title: 'Icarus Initiative Main Repo',
    },
    left: {
      name: 'Left Wave Image',
      photo: 'left_wave.jpg',
    },
    right: {
      name: 'Right Wave Image',
      photo: 'right_wave.jpg',
    },
    email: {
      url: 'mailto:hello@icarusinitiative.com?subject=Icarus Website&body=Hello admin!',
      title: 'Icarus Initiative Email',
    },
  };

  const footer = {
    logo: {
      name: 'Icarus Initiative Logo',
      icon: '/purple_feather_256_min.webp',
    },
  };

  const helm = {
    discord: {
      name: 'Radio Channels',
      short: 'Communications platform',
      icon: '/discord_128.webp',
      link: 'https://discord.gg/D3kx72wJyv',
    },
    discourse: {
      name: 'Central Intelligence',
      short: 'Long term content',
      icon: '/column_128.webp',
      link: 'https://google.com',
    },
    icarus: {
      name: 'Icarus Force',
      short: 'Data and documents',
      icon: '/quill_128.webp',
      link: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/README.md',
    },
    expeditions: {
      name: 'Expeditions',
      short: 'Learning adventures',
      icon: '/compass_128.webp',
      link: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/expeditions.md',
    },
    squadrons: {
      name: 'Squadrons',
      short: 'List of pilots',
      icon: '/insignia_128.webp',
      link: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/squadrons.md',
    },
    resources: {
      name: 'Resources',
      short: 'Collected links and courses',
      icon: '/books_128.webp',
      link: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/resources.md',
    },
  };

  const hero = {
    banner: {
      name: 'Banner',
      photo: 'banner.jpg',
    },
  };

  const navigation = {
    logo: {
      name: 'Icarus Initiative Logo',
      icon: '/purple_feather_256_min.webp',
    },
  };

  const plans = {
    battle: {
      alt: 'Battle Plan',
      href: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/guides/learning_solana_rust_battle_plan.pdf',
      image: '/learning_solana_rust_battle_plan.webp',
    },
  };

  const process = {
    discord: {
      url: 'https://discord.gg/D3kx72wJyv',
      title: 'Icarus Initiative Discord',
    },
    figment: {
      url: 'https://learn.figment.io/protocols/solana',
      title: 'Figment.io Solana Protocol',
    },
    teams: {
      url: 'https://github.com/orgs/icarus-initiative/teams',
      title: 'Icarus Initiative Teams',
    },
    squadrons: {
      url: 'https://github.com/icarus-initiative/icarus_initiative/blob/main/squadrons.md',
      title: 'Icarus Initiative Squadrons',
    },
    twitter: {
      url: 'https://twitter.com/icarussquadron',
      title: 'Icarus Initiative Twitter',
    },
  };

  const socials = {
    github: {
      url: 'https://github.com/icarus-initiative',
      title: 'Icarus Initiative Github Organization',
    },
    discord: {
      url: 'https://discord.gg/D3kx72wJyv',
      title: 'Icarus Initiative Discord',
    },
    youtube: {
      url: 'https://www.youtube.com/channel/UCTurxUPFKUZARHQkihpMAfg',
      title: 'Icarus Initiative Youtube',
    },
    twitter: {
      url: 'https://twitter.com/icarussquadron',
      title: 'Icarus Initiative Twitter',
    },
  };

  return {
    about,
    credits,
    enlist,
    faq,
    footer,
    helm,
    hero,
    navigation,
    plans,
    process,
    socials,
    Purplerize,
    Tealrize,
  };
}
