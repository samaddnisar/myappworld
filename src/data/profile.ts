import type { Post, Profile } from "@/types";

/**
 * --- MOCK DATA ---
 * All static content for the Profile screen lives here. Swap these values (and
 * the placeholder image URLs) for real API data later — the UI reads only from
 * this module.
 *
 * Images use picsum.photos placeholders since the original AI artwork can't be
 * reproduced; replace the `image`/`avatar` URIs with real assets when available.
 */

const img = (seed: string) => `https://picsum.photos/seed/${seed}/400/500`;

export const profile: Profile = {
  handle: "kittybloomfami...",
  displayName: "FruitGala",
  category: "Digital creator",
  bio: [
    "AI Storyteller ✨",
    "Emotional Love & Family Drama",
    "For Promotion",
    "DM 📩",
  ],
  note: "Ask friends anything...",
  avatar:
    "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.82787-19/718553823_17892121578521462_9130251135081008297_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.flhe2-4.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2gFfr-CANzO3zBBhn4a62Aj-WMQpc-Z7lHFEhvg-A8JJPjAM8YXqinRgAUugwC6-pfI&_nc_ohc=pZ89ifdLvP0Q7kNvwGautzx&_nc_gid=z8heURZx_Zo7I_LUsigWZA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQAqXwcXvuZC3AM25dOGeXZ_iUWhV-hcxpldHJFz5YXM0g&oe=6A4D88D7&_nc_sid=7a9f4b",
  hasStory: true,
  stats: {
    posts: "237",
    followers: "86.8K",
    following: "10",
  },
  dashboard: {
    views: "35.5M",
    period: "the last 30 days",
  },
  unreadActivity: 1,
};

export const posts: Post[] = [
  {
    id: "p1",
    image:
      "https://instagram.flhe2-2.fna.fbcdn.net/v/t51.71878-15/716841784_1650309702859815_1352332539644394127_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzkxMzM2MjAzOTU1NDkxMDIwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=bQDHawzHsD0Q7kNvwE0Somy&_nc_oc=AdoWe5F4vxbCxJmlyMh1R4q9ZYpb20PGcg-fqhi9klNxToCbRKKOCq69jPSe2bH3MxY&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-2.fna&_nc_gid=is7qggLiB-UEA7OsnaYHHQ&_nc_ss=7a22e&oh=00_AQBNPbk1J0StIRhn9J-GRIctPD4rggCGv4IzGR9aUiwrEw&oe=6A4D9271",
    type: "reel",
    views: "746K",
    pinned: true,
  },
  {
    id: "p2",
    image:
      "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/731572761_2596940887389167_8643451801103874197_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzkyNzA3MTc2ODk5MDkyNzE2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=eZZU9UInHxsQ7kNvwGL74M1&_nc_oc=Adp1VlmXGxVyCIpl7tym4uk2rFNtK4fOLluslEW6WBkbaOTZUqIel7BcTT4TmJienHc&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=HJylhQ6tqYcsAAWaWu65gQ&_nc_ss=7a22e&oh=00_AQA6wPsiFU3b7y2Eved4R1_twxcumJoY4RkKm_Z_vZd-9w&oe=6A4D843B",
    type: "reel",
    views: "7,389",
  },
  {
    id: "p3",
    image:
      "https://instagram.flhe2-3.fna.fbcdn.net/v/t51.71878-15/728109253_1362570762450623_4297816323109527410_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzkyNjUzODYxNzkwNjQ5MDY0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=_bz4W-G7li4Q7kNvwHVMGfo&_nc_oc=Adr37tDgUJ5awk4nlLgFHsipf4Zm5KBBfWt9cLS5-aBhmZWmtK1AHR649zYJuEZvs9s&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-3.fna&_nc_gid=HJylhQ6tqYcsAAWaWu65gQ&_nc_ss=7a22e&oh=00_AQDmkAw3_iHLWKzWpWFSnKgb27IHgeatDYkgO-h2fWgrNw&oe=6A4D9E53",
    type: "reel",
    views: "5,845",
  },
  {
    id: "p4",
    image:
      "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/726981222_1020275243826706_7770891044500311199_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=110&ig_cache_key=MzkyNjMyNjU5NDA5NDI5Nzg1Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=o7waxiqasd4Q7kNvwEv5ioL&_nc_oc=AdoA4ROZeNluQvB_ZhtSXyUjzmXBr9qWpHIyAzpO7LbXeEFc983glqSdHS8ENP-NZgU&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=HJylhQ6tqYcsAAWaWu65gQ&_nc_ss=7a22e&oh=00_AQCDY8l68uCNwBRQ-aPKID3UFF4TVgPAw28ygmithlGEJQ&oe=6A4DA5AC",
    type: "reel",
    views: "7,038",
  },
  {
    id: "p5",
    image:
      "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/729072877_1371790654831440_8289447441385948597_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzkyNTk0MDM1NjIwODI2MjA5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=SdCxmUV9h5MQ7kNvwEDgBh0&_nc_oc=AdqWgLhBVPFjcqasyrMdCCiaX8URksD2BNq9aISk2Vfnmb-C22SqvfY05WR6snFQwtE&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=HJylhQ6tqYcsAAWaWu65gQ&_nc_ss=7a22e&oh=00_AQDzIdcFl0ervF_8ZECrsHUzzTjqJH9HzYvL5oNzuT_C-g&oe=6A4DAA51",
    type: "reel",
    views: "23.4K",
  },
  {
    id: "p6",
    image:
      "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/728627530_1542145164109476_173204968567943839_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzkyNTczMTg5NjcyNDI4MzM5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=udkg_WJaFUoQ7kNvwEm5Zfq&_nc_oc=AdrzIELVMrnrG_dGJGlyoAJbh5RC2n5pzF7yB7y83PtXVTuEPGtB9nQhfYAFnXnJGCU&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=HJylhQ6tqYcsAAWaWu65gQ&_nc_ss=7a22e&oh=00_AQCWhQWN-LL8ZXb_uLRz6euVS2SKK2Nuv-dkF5cR4Iu41w&oe=6A4D9A65",
    type: "reel",
    views: "15.3K",
  },
  {
    id: "p7",
    image:
      "https://instagram.flhe2-2.fna.fbcdn.net/v/t51.71878-15/728675516_1062439996441523_7319834195949013725_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzkyNTYyMjQ1MzU3NTQyMDczNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=OvDl4oVq3SYQ7kNvwHgnKdA&_nc_oc=Adq80Bp40euT-jpJ2dzYl1MO9uEkszMXetMJ6C-cGAc42Hi_EqReKtLRbKZCzzgoQ74&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-2.fna&_nc_gid=HJylhQ6tqYcsAAWaWu65gQ&_nc_ss=7a22e&oh=00_AQBR_xcPl65X6cRd7GlkOPb93kdiOQ3FOowyqt2Pl8bRRg&oe=6A4D9B80",
    type: "reel",
    views: "12.4K",
  },
  {
    id: "p8",
    image:
      "https://instagram.flhe2-2.fna.fbcdn.net/v/t51.71878-15/727057996_1742217630107572_341480000744685068_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=100&ig_cache_key=MzkyNDk2NTc3OTQ3NDc4OTA4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=DxpTRNp5xPwQ7kNvwEEcTza&_nc_oc=AdoHljeaqAk6SlgaeWXHuVjCXa1wpsReaZheCaKlfiMLNackCqWdwv9N7rLRPnMNviU&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-2.fna&_nc_gid=HJylhQ6tqYcsAAWaWu65gQ&_nc_ss=7a22e&oh=00_AQBCmmeGgJpQX2ibgUSsAfjCrjhJ4g7zKAkUjPMAmo8uVw&oe=6A4D84C0",
    type: "reel",
    views: "88.1K",
  },
  {
    id: "p9",
    image:
      "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/728750122_881955607670647_2764769431540169086_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzkyNDM5NDE2MjE3NjgzOTQ5Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=S109n7yoh40Q7kNvwGJ22TC&_nc_oc=AdrywtsMnvQp8eUSAwexPEu0wpvESuDhGfcIQXU1htvb8LWHbOJ9g0MnuH1zmVDk75c&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=HJylhQ6tqYcsAAWaWu65gQ&_nc_ss=7a22e&oh=00_AQAT6n7GNuX2pG0z7H2Ze9GN-9FXMgZmkDJalJ9Fu0C7pA&oe=6A4D8879",
    type: "reel",
    views: "9,204",
  },
  { id: "p10", image: img("gala-12"), type: "reel", views: "420K" },
];
