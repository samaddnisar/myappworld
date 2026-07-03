import { colors } from "@/constants/colors";

/**
 * --- MOCK DATA ---
 * Static content for the Views insight screen (screen 3).
 * Types are co-located here since they're specific to this screen.
 */

export interface BreakdownSlice {
  label: string;
  /** Pre-formatted percent, e.g. "2.1%". */
  value: string;
  /** Share of the donut, 0–100. */
  percent: number;
  /** 'magenta' (followers) | 'purple' (non-followers). */
  tone: "magenta" | "purple";
}

export interface ContentTypeStat {
  label: string;
  /** Pre-formatted percent, e.g. "99.7%". */
  value: string;
  percent: number;
}

export interface TopContentItem {
  id: string;
  image: string;
  /** Pre-formatted views, e.g. "7M". */
  views: string;
  date: string;
}

export interface RankedStat {
  label: string;
  /** Pre-formatted percent, e.g. "69.4%". */
  value: string;
  percent: number;
  /** Optional per-bar color override (defaults to the magenta bar color). */
  color?: string;
}

export interface AudienceCard {
  id: string;
  title: string;
  items: RankedStat[];
  /** Bar corner radius (defaults to fully rounded). The Gender card uses 3. */
  barRadius?: number;
  /** Bar thickness in px (defaults to 8). */
  barHeight?: number;
}

export interface ActivityRow {
  id: string;
  label: string;
  value: string;
  /** Optional green delta, e.g. "+210.7%". */
  delta?: string;
}

const img = (seed: string) => `https://picsum.photos/seed/${seed}/300/360`;

export const viewsData = {
  title: "Views",
  dateLabel: "Last 30 days",
  dateRange: "May 28 - Jun 26",
  total: "27,380,437",

  breakdown: [
    { label: "Followers", value: "2.1%", percent: 2.1, tone: "magenta" },
    { label: "Non-followers", value: "97.9%", percent: 97.9, tone: "purple" },
  ] as BreakdownSlice[],

  accountsReached: { value: "13,112,904", delta: "+7,116.8%" },

  contentTypes: [
    { label: "Reels", value: "99.7%", percent: 99.7 },
    { label: "Stories", value: "0.3%", percent: 0.3 },
    { label: "Posts", value: "0.0%", percent: 0 },
  ] as ContentTypeStat[],

  topContent: [
    {
      id: "t1",
      image:
        "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/724287074_2123742454872446_8193441282665844880_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=1&ig_cache_key=MzkyMDc3NTgwNTg4MzkxNDM5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=-vkpNU1LU4YQ7kNvwGyZgUd&_nc_oc=AdqLTR8xFaswUvqUz3usjsD9GL-3bg0tYpq90rI4FrPBiu-lAgYK6TSY987iG6nNSHI&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=Seufl3o03G3b5TLcN6Xe7Q&_nc_ss=7a22e&oh=00_AQDgslY5rBjCTSOTCsPsShee2zle4Y6BsmHaH1x8nVwWNg&oe=6A4D9E58",
      views: "7M",
      date: "16 Jun",
    },
    {
      id: "t2",
      image:
        "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/726838552_2424074658103142_8418215571177099272_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzkyMjk1Nzk3NTA4Mzg5MTUzOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=Lo17-fp04Y8Q7kNvwHizDMC&_nc_oc=Adrz_16J9JKakkagVNpW6yc3n2BthYRGBJcz3_EVn_tmdApaggJ4-p58CAMJYi9oCZQ&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=Seufl3o03G3b5TLcN6Xe7Q&_nc_ss=7a22e&oh=00_AQD4fPS5Jq0SzS78YPlAt2MlNFC1SMA2hojeQHAk5Hwk9Q&oe=6A4D8BFD",
      views: "3.8M",
      date: "19 Jun",
    },
    {
      id: "t3",
      image:
        "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/723085077_3531617330321462_3002279919664793720_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=1&ig_cache_key=MzkxNzM2NzY1MTEyMDkxMjUyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=HXEP26eQNCIQ7kNvwFdfF-c&_nc_oc=AdrdLDxexp9YsmY2B8_f93rErOjdQwq8cq49v5DibbyHrJbfIDKOJ6Qo0DZGU5-3o0Y&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=D4fRDIUvUNqr0s0E1PSNow&_nc_ss=7a22e&oh=00_AQDzA-MttMlknv6pssSxgL9ZH4YD-TUJyH-EP5j8osyjSQ&oe=6A4D8F8C",
      views: "2.3M",
      date: "11 Jun",
    },
    {
      id: "t4",
      image:
        "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/726548551_27059362610356862_1337956092542644981_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzkyMjE1OTczNDkxMDAxMDQxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=f-DZ3yL7BagQ7kNvwHhKa77&_nc_oc=AdrUzQtueeQnKRBU67g5cYJq_e3NQwVgsympTaOomPwG9166u_FaRsRDuX9dSrQBrgA&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=O6hy_MnkiTekXOppjftw1A&_nc_ss=7a22e&oh=00_AQDVu5ebavrJbea-yGIY8r8z_z1Jb93sTfwPbmo55TlRWQ&oe=6A4DA596",
      views: "2M",
      date: "18 Jun",
    },
    { id: "t5", image: img("top-5"), views: "1.4M", date: "22 Jun" },
  ] as TopContentItem[],

  audience: [
    {
      id: "cities",
      title: "Top cities",
      items: [
        { label: "New York", value: "4.5%", percent: 4.5 },
        { label: "London", value: "3.8%", percent: 3.8 },
        { label: "Los Angeles", value: "3.1%", percent: 3.1 },
        { label: "Mumbai", value: "1.2%", percent: 1.2 },
      ],
    },
    {
      id: "countries",
      title: "Top countries",
      items: [
        { label: "USA", value: "28.3%", percent: 28.3 },
        { label: "India", value: "8.6%", percent: 8.6 },
        { label: "UK", value: "6.5%", percent: 6.5 },
        { label: "Canada", value: "4.3%", percent: 4.3 },
      ],
    },
    {
      id: "age",
      title: "Top age ranges",
      items: [
        { label: "25-34", value: "38.2%", percent: 38.2 },
        { label: "18-24", value: "31.5%", percent: 31.5 },
        { label: "35-44", value: "18.1%", percent: 18.1 },
        { label: "45-54", value: "7.4%", percent: 7.4 },
      ],
    },
    {
      id: "gender",
      title: "Gender",
      barRadius: 3,
      barHeight: 9,
      items: [
        { label: "Men", value: "36.2%", percent: 36.2 },
        {
          label: "Women",
          value: "63.8%",
          percent: 63.8,
          color: colors.chartPurple,
        },
      ],
    },
  ] as AudienceCard[],

  profileActivity: {
    total: "362,241",
    comparison: "vs Apr 28 - May 27",
    delta: "+207.8%",
    rows: [
      {
        id: "visits",
        label: "Profile visits",
        value: "362,144",
        delta: "+210.7%",
      },
      {
        id: "link-taps",
        label: "External link taps",
        value: "97",
        delta: "-91.5%",
      },
    ] as ActivityRow[],
  },
};
