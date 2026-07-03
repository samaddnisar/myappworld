import { useState } from "react";
import { Pressable, Switch, Text, TextInput, View } from "react-native";

import { colors } from "@/constants/colors";

interface FieldProps {
  label: string;
  value: unknown;
  onChange: (next: unknown) => void;
}

/**
 * Recursively renders an editor for any JSON-shaped value:
 * strings/numbers/booleans get inputs, objects + arrays get collapsible groups
 * (arrays support add/remove). Used by the in-app data editor (`/editor`).
 */
export function DataField({ label, value, onChange }: FieldProps) {
  if (Array.isArray(value)) return <ArrayField label={label} value={value} onChange={onChange} />;
  if (value !== null && typeof value === "object") {
    return <ObjectField label={label} value={value as Record<string, unknown>} onChange={onChange} />;
  }
  if (typeof value === "boolean") return <BooleanField label={label} value={value} onChange={onChange} />;
  if (typeof value === "number") return <NumberField label={label} value={value} onChange={onChange} />;
  return <TextField label={label} value={value == null ? "" : String(value)} onChange={onChange} />;
}

const inputClass = "border border-border rounded-lg px-3 py-2 text-[14px] text-ink bg-bg";

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <View className="py-1.5">
      {label ? <Text className="text-[12px] text-muted mb-1">{label}</Text> : null}
      <TextInput
        defaultValue={value}
        onChangeText={onChange}
        autoCapitalize="none"
        autoCorrect={false}
        multiline
        placeholderTextColor={colors.mutedLight}
        className={inputClass}
      />
    </View>
  );
}

function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <View className="py-1.5">
      {label ? <Text className="text-[12px] text-muted mb-1">{label}</Text> : null}
      <TextInput
        defaultValue={String(value)}
        keyboardType="numeric"
        onChangeText={(t) => {
          const n = parseFloat(t);
          onChange(Number.isFinite(n) ? n : 0);
        }}
        className={inputClass}
      />
    </View>
  );
}

function BooleanField({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <View className="flex-row items-center justify-between py-2">
      <Text className="text-[14px] text-ink-soft flex-1 mr-3">{label}</Text>
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
}

function CollapsibleHeader({
  label,
  badge,
  open,
  onToggle,
}: {
  label: string;
  badge: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <Pressable onPress={onToggle} className="flex-row items-center py-2 active:opacity-60">
      <Text className="text-[13px] text-muted w-4">{open ? "▾" : "▸"}</Text>
      <Text className="text-[14px] font-semibold text-ink">{label || "item"}</Text>
      <Text className="text-[12px] text-muted ml-2">{badge}</Text>
    </Pressable>
  );
}

function ObjectField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: Record<string, unknown>;
  onChange: (v: Record<string, unknown>) => void;
}) {
  const [open, setOpen] = useState(false);
  const keys = Object.keys(value);
  return (
    <View>
      <CollapsibleHeader label={label} badge={`{${keys.length}}`} open={open} onToggle={() => setOpen((o) => !o)} />
      {open && (
        <View className="ml-2 pl-3 border-l border-border">
          {keys.map((k) => (
            <DataField key={k} label={k} value={value[k]} onChange={(v) => onChange({ ...value, [k]: v })} />
          ))}
        </View>
      )}
    </View>
  );
}

function ArrayField({ label, value, onChange }: { label: string; value: unknown[]; onChange: (v: unknown[]) => void }) {
  const [open, setOpen] = useState(false);

  const itemKey = (item: unknown, i: number): string => {
    if (item && typeof item === "object") {
      const obj = item as Record<string, unknown>;
      if (typeof obj.id === "string") return obj.id;
      if (typeof obj.label === "string") return obj.label;
    }
    return String(i);
  };

  const addItem = () => {
    const template = value.length ? JSON.parse(JSON.stringify(value[value.length - 1])) : "";
    onChange([...value, template]);
  };

  return (
    <View>
      <CollapsibleHeader label={label} badge={`[${value.length}]`} open={open} onToggle={() => setOpen((o) => !o)} />
      {open && (
        <View className="ml-2 pl-3 border-l border-border">
          {value.map((item, i) => (
            <View key={itemKey(item, i)} className="mt-1.5">
              <View className="flex-row items-center justify-between">
                <Text className="text-[12px] text-muted">#{i}</Text>
                <Pressable
                  onPress={() => onChange(value.filter((_, idx) => idx !== i))}
                  hitSlop={8}
                  className="active:opacity-60"
                >
                  <Text className="text-[12px] text-accent">Remove</Text>
                </Pressable>
              </View>
              <DataField label="" value={item} onChange={(v) => onChange(value.map((it, idx) => (idx === i ? v : it)))} />
            </View>
          ))}
          <Pressable onPress={addItem} className="mt-2 self-start rounded-lg bg-surface px-3 py-2 active:opacity-70">
            <Text className="text-[13px] font-semibold text-link">+ Add item</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
