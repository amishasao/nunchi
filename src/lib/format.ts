export function firstName(name: string) {
  return name.trim().split(/\s+/)[0] ?? '';
}

// "Today, 3:30 pm", "Yesterday, 6:20 pm" or "Mon 12 Oct, 9:05 am".
export function formatWhen(iso: string, now = new Date()) {
  const date = new Date(iso);
  const time = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }).toLowerCase();
  const days = Math.round((startOfDay(now) - startOfDay(date)) / 86_400_000);
  if (days === 0) return `Today, ${time}`;
  if (days === 1) return `Yesterday, ${time}`;
  const day = date.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
  return `${day}, ${time}`;
}

// "4m 05s"
export function formatDuration(seconds: number) {
  return `${Math.floor(seconds / 60)}m ${(seconds % 60).toString().padStart(2, '0')}s`;
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}
