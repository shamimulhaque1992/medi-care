import { circularSvgIcon } from "@/assets/images/svg/svgPaths";
import { AIVisualizationProps } from "@/types/howItWorksProps";
import FloatingIcon from "./FloatingIcon";

export default function AIVisualization({
  stats = [
    { value: "99.2%", label: "Accuracy" },
    { value: "<2s", label: "Response" },
    { value: "24/7", label: "Available" },
  ],
}: AIVisualizationProps) {
  return (
    <div className="relative w-full max-w-[568px] mx-auto">
      <div
        className="relative rounded-3xl overflow-hidden shadow-lg"
        style={{
          background:
            "linear-gradient(136.236deg, rgb(245, 240, 255) 25%, rgb(237, 229, 255) 95.711%)",
          paddingBottom: "95.77%",
        }}
      >
        <div className="absolute inset-0 p-4 md:p-6 lg:p-8">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="w-[85%] aspect-square border-2 border-[#b8a0e0] border-dashed rounded-full"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="w-[65%] aspect-square border-2 border-[#d4c5f0] rounded-full"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10" style={{ transform: 'rotate(0deg)' }}>
              <div className="w-[85%] aspect-square rounded-full animate-[rotateCircular_20s_linear_infinite]">
                <FloatingIcon emoji="🩺" className="absolute top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10" style={{ transform: 'rotate(90deg)' }}>
              <div className="w-[75%] aspect-square rounded-full animate-[rotateCircular_25s_linear_infinite_reverse]">
                <FloatingIcon emoji="💊" className="absolute top-[8%] left-1/2 -translate-x-1/2 -translate-y-1/2" size="lg" />
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10" style={{ transform: 'rotate(180deg)' }}>
              <div className="w-[90%] aspect-square rounded-full animate-[rotateCircular_30s_linear_infinite]">
                <FloatingIcon emoji="❤️" className="absolute top-[3%] left-1/2 -translate-x-1/2 -translate-y-1/2" size="lg" />
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10" style={{ transform: 'rotate(270deg)' }}>
              <div className="w-[70%] aspect-square rounded-full animate-[rotateCircular_22s_linear_infinite_reverse]">
                <FloatingIcon emoji="🧬" className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div
                className="w-[52%] aspect-square rounded-full flex items-center justify-center"
                style={{
                  boxShadow: "0px 0px 40px 0px rgba(109,40,217,0.15)",
                }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 text-white">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 64 64">
                    <g>
                      {Object.values(circularSvgIcon).map((path, index) => (
                        <path
                          key={index}
                          d={path}
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      ))}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-30">
            <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl px-4 py-4 md:px-6 md:py-5">
              <div className="flex items-center justify-around">
                {stats.map((stat, index) => (
                  <>
                    {index > 0 && (
                      <div
                        key={`divider-${index}`}
                        className="h-8 w-px bg-[#d4c5f0]"
                      ></div>
                    )}
                    <div key={stat.label} className="text-center">
                      <p className="text-purple-700 font-bold text-base md:text-lg">
                        {stat.value}
                      </p>
                      <p className="text-[#6b5b8a] text-[10px] md:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
