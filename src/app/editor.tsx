import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Share, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import { DataField } from "@/components/editor/DataField";
import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import { type AppData, useAppData } from "@/store/appData";

const clone = (data: AppData): AppData => JSON.parse(JSON.stringify(data));

/** In-app data editor — change ANY mock data and apply it live (persisted). */
export default function EditorScreen() {
  const { data, setData, reset } = useAppData();
  // Remount the body (re-seeding the draft) whenever we reset to defaults.
  const [editKey, setEditKey] = useState(0);

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-bg">
      <EditorBody
        key={editKey}
        initial={data}
        onApply={setData}
        onReset={() => {
          reset();
          setEditKey((k) => k + 1);
        }}
      />
    </SafeAreaView>
  );
}

function EditorBody({
  initial,
  onApply,
  onReset,
}: {
  initial: AppData;
  onApply: (next: AppData) => void;
  onReset: () => void;
}) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [draft, setDraft] = useState<AppData>(() => clone(initial));
  const [applied, setApplied] = useState(false);

  const update = (key: keyof AppData, value: unknown) => {
    setApplied(false);
    setDraft((d) => ({ ...d, [key]: value }) as AppData);
  };

  return (
    <>
      <View className="flex-row items-center justify-between px-3 py-2 border-b border-border">
        <Pressable onPress={() => router.back()} hitSlop={8} className="p-1 active:opacity-60">
          <Icon name="back" size={24} tintColor={colors.ink} />
        </Pressable>
        <Text className="text-[18px] font-bold text-ink">Data editor</Text>
        <View className="flex-row items-center">
          <Pressable
            onPress={() =>
              Share.share({ message: JSON.stringify(draft, null, 2) }).catch(() => {})
            }
            hitSlop={8}
            className="p-1 mr-4 active:opacity-60"
          >
            <Text className="text-[14px] font-semibold text-link">Export</Text>
          </Pressable>
          <Pressable onPress={onReset} hitSlop={8} className="p-1 active:opacity-60">
            <Text className="text-[14px] font-semibold text-accent">Reset</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-[12px] text-muted mb-3">
          Expand a section, edit any value, then tap Apply — changes update the app live and persist
          across restarts. Use Export to copy the JSON and bake it permanently into the code (a
          device app can't rewrite source files). Reset restores the original data.
        </Text>
        {(Object.keys(draft) as (keyof AppData)[]).map((key) => (
          <DataField key={key} label={key} value={draft[key]} onChange={(v) => update(key, v)} />
        ))}
      </ScrollView>

      <View
        className="absolute left-0 right-0 bottom-0 px-4 pt-3 border-t border-border bg-bg"
        style={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        <Pressable
          onPress={() => {
            onApply(draft);
            setApplied(true);
          }}
          className="items-center rounded-xl bg-link py-3.5 active:opacity-80"
        >
          <Text className="text-[15px] font-semibold text-white">
            {applied ? "Applied ✓" : "Apply changes"}
          </Text>
        </Pressable>
      </View>
    </>
  );
}
