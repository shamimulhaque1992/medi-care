import { FloatingIconProps } from "@/types/howItWorksProps";

export default function FloatingIcon({
  emoji,
  className = "",
  size = "sm",
}: FloatingIconProps) {
  const sizeClasses =
    size === "lg"
      ? "w-14 h-14 md:w-[68px] md:h-[68px]"
      : "w-12 h-12 md:w-14 md:h-14";

  return (
    <div
      className={`bg-white rounded-full shadow-lg flex items-center justify-center ${sizeClasses} ${className}`}
      style={{
        boxShadow: "0px 4px 20px 0px rgba(74,29,150,0.08)",
      }}
    >
      <span className="text-xl md:text-2xl">{emoji}</span>
    </div>
  );
}
