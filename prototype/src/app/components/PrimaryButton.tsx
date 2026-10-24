interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function PrimaryButton({
  text,
  onClick,
  className = "",
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#2e3a3f] text-white rounded-[20px] px-10 py-3 shadow-[4px_2px_4px_0px_rgba(0,0,0,0.12)] font-['Raleway',sans-serif] transition-all active:scale-[0.97] disabled:opacity-50 ${className}`}
      style={{ fontSize: "20px", fontWeight: 600 }}
    >
      {text}
    </button>
  );
}

export function SecondaryButton({
  text,
  onClick,
  className = "",
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#9fbfa8] text-white rounded-[20px] px-8 py-3 border border-[#7fa7b8] font-['Raleway',sans-serif] transition-all active:scale-[0.97] ${className}`}
      style={{ fontSize: "20px", fontWeight: 600 }}
    >
      {text}
    </button>
  );
}
