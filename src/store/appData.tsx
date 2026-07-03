import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { dashboard } from "@/data/dashboard";
import { posts, profile } from "@/data/profile";
import { reel } from "@/data/reel";
import { viewsData } from "@/data/views";

/**
 * Runtime store for ALL mock data. The static files in `src/data/` are the seed;
 * this store holds a mutable, persisted copy so the in-app editor (`/editor`) can
 * change anything live. Screens read from `useAppData()` instead of importing the
 * static data directly.
 */
export interface AppData {
  profile: typeof profile;
  posts: typeof posts;
  dashboard: typeof dashboard;
  views: typeof viewsData;
  reel: typeof reel;
}

const STORAGE_KEY = "myappworld:data:v1";

/** Fresh deep copy of the static seed data (never mutate the imports). */
function seed(): AppData {
  return JSON.parse(JSON.stringify({ profile, posts, dashboard, views: viewsData, reel }));
}

interface AppDataContextValue {
  data: AppData;
  /** Replace the whole data tree (also persists it). */
  setData: (next: AppData) => void;
  /** Restore the original static seed data (clears persisted edits). */
  reset: () => void;
}

const AppDataContext = createContext<AppDataContextValue | null>(null);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<AppData>(seed);

  // Load persisted edits once on mount.
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (active && raw) setDataState(JSON.parse(raw));
      } catch {
        // ignore — fall back to seed data
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const setData = useCallback((next: AppData) => {
    setDataState(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  const reset = useCallback(() => {
    const fresh = seed();
    setDataState(fresh);
    AsyncStorage.removeItem(STORAGE_KEY).catch(() => {});
  }, []);

  const value = useMemo<AppDataContextValue>(
    () => ({ data, setData, reset }),
    [data, setData, reset],
  );

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
}

export function useAppData() {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error("useAppData must be used within AppDataProvider");
  return ctx;
}
