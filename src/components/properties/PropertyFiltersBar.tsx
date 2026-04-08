import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { PropertyType } from "@/data/properties";
import { PROPERTY_TYPE_LABELS } from "@/data/properties";

export interface PropertyFiltersValue {
  q: string;
  location: string;
  developer: string;
  type: PropertyType | "";
}

export default function PropertyFiltersBar({
  value,
  onChange,
  onSearch,
  onReset,
  locationOptions,
  developerOptions,
  typeOptions,
  ctaLabel = "Search",
  hideType = false,
}: {
  value: PropertyFiltersValue;
  onChange: (next: PropertyFiltersValue) => void;
  onSearch: () => void;
  onReset: () => void;
  locationOptions: string[];
  developerOptions: string[];
  typeOptions: PropertyType[];
  ctaLabel?: string;
  hideType?: boolean;
}) {
  return (
    <div className="bg-white/95 backdrop-blur border border-border rounded-2xl shadow-soft p-4 md:p-6">
      <div className="grid gap-3 md:gap-4 md:grid-cols-12">
        <div className={hideType ? "md:col-span-5" : "md:col-span-4"}>
          <Input
            value={value.q}
            onChange={(e) => onChange({ ...value, q: e.target.value })}
            placeholder="Search by property name / location / developer"
            className="h-11"
          />
        </div>

        <div className="md:col-span-3">
          <Select
            value={value.location || "__all__"}
            onValueChange={(v) => onChange({ ...value, location: v === "__all__" ? "" : v })}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="__all__">All Locations</SelectItem>
              {locationOptions.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className={hideType ? "md:col-span-4" : "md:col-span-3"}>
          <Select
            value={value.developer || "__all__"}
            onValueChange={(v) => onChange({ ...value, developer: v === "__all__" ? "" : v })}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Developer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="__all__">All Developers</SelectItem>
              {developerOptions.map((dev) => (
                <SelectItem key={dev} value={dev}>
                  {dev}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {!hideType && (
          <div className="md:col-span-2">
            <Select
              value={value.type || "__all__"}
              onValueChange={(v) => onChange({ ...value, type: v === "__all__" ? "" : (v as PropertyType) })}
            >
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__all__">All Types</SelectItem>
                {typeOptions.map((t) => (
                  <SelectItem key={t} value={t}>
                    {PROPERTY_TYPE_LABELS[t]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <Button onClick={onSearch} variant="gold" size="lg" className="rounded-full">
          {ctaLabel}
        </Button>
        <Button onClick={onReset} variant="outline" size="lg" className="rounded-full">
          Reset
        </Button>
      </div>
    </div>
  );
}

