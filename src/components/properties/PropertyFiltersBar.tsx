import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface PropertyFiltersValue {
  q: string;
  developer: string;
}

export default function PropertyFiltersBar({
  value,
  onChange,
  onSearch,
  onReset,
  developerOptions,
  ctaLabel = "Search",
}: {
  value: PropertyFiltersValue;
  onChange: (next: PropertyFiltersValue) => void;
  onSearch: () => void;
  onReset: () => void;
  developerOptions: string[];
  ctaLabel?: string;
}) {
  return (
    <div className="bg-white/95 backdrop-blur border border-border rounded-2xl shadow-soft p-4 md:p-6">
      <div className="grid gap-3 md:gap-4 md:grid-cols-12">
        {/* Search Input */}
        <div className="md:col-span-8">
          <Input
            value={value.q}
            onChange={(e) => onChange({ ...value, q: e.target.value })}
            placeholder="Search by project name, description or developer..."
            className="h-11"
          />
        </div>

        {/* Developer Dropdown */}
        <div className="md:col-span-4">
          <Select
            value={value.developer || "__all__"}
            onValueChange={(v) => onChange({ ...value, developer: v === "__all__" ? "" : v })}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="All Developers" />
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
      </div>

      {/* Buttons */}
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