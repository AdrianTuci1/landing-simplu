import { useState } from "react";
import { 
  FileText, 
  MapPin, 
  Calendar, 
  Clock, 
  DollarSign, 
  User, 
  Building, 
  Stethoscope,
  Hotel,
  Dumbbell,
  Users,
  Tag,
  Circle
} from "lucide-react";
import entityDataRaw from "../../data/entity-data.json";

const iconMap = {
  FileText, 
  MapPin, 
  Calendar, 
  Clock, 
  DollarSign, 
  User, 
  Building, 
  Stethoscope, 
  Hotel, 
  Dumbbell, 
  Users, 
  Tag, 
  Circle
};

const EntityCard = ({ entity, className }) => {
  const Icon = iconMap[entity.icon] || Circle;
  const isCustom = entity.type === "Custom";
  
  return (
    <div className={`group relative w-[141px] lg:w-[259px] rounded-[10px] p-[7px] border lg:rounded-xl lg:p-[11px] border-weak-stroke bg-white-100 shadow-[0px_2px_3px_-2px_rgba(28,40,64,0.10),0px_4px_6px_-2px_rgba(28,40,64,0.04)] ${className}`} style={{borderColor: 'var(--internal-color-weak-stroke, #e5e7eb)'}}>
      <div className="pointer-events-none select-none">
        <div className="flex items-center justify-between">
          <div className="grid overflow-hidden *:col-start-1 *:row-start-1">
            <div className="flex gap-x-1.5 items-center">
              <Icon className={`size-[14px] lg:size-5 ${entity.iconColor || 'text-gray-600'}`} />
              <div className="font-semibold text-secondary-foreground text-[10px] leading-[14px] tracking-[-0.28px] lg:text-[14px] lg:leading-5">
                {entity.title}
              </div>
            </div>
          </div>
          <div className={`border font-medium rounded-md px-[3px] py-[0.5px] text-[8px] leading-[11px] lg:rounded-lg lg:px-[5px] lg:py-px lg:text-[12px] lg:leading-4 ${
            isCustom 
              ? "border-[#D6E5FF] bg-[#E5EEFF] text-[#183C81]" 
              : "border-[#EEEFF1] bg-[#F4F5F6] text-[#75777C]"
          }`}>
            {entity.type}
          </div>
        </div>
        
        <div className="mt-2 border-[#EDEFF3] border-t lg:mt-3">
          {entity.attributes.map((attr, idx) => {
            const AttrIcon = iconMap[attr.icon] || Circle;
            return (
              <div key={idx} className="border-[#EDEFF3] border-b pt-1 pb-[3px] pl-2 lg:pt-1.5 lg:pb-[5px] lg:pl-3">
                <div className="grid overflow-hidden *:col-start-1 *:row-start-1">
                  <div className="flex items-center gap-x-1.5">
                    <AttrIcon className="size-2.5 lg:size-3.5 text-[#5C5E63]" />
                    <div className="font-medium text-[#5C5E63] text-[9px] leading-[11px] tracking-normal lg:text-[12px] lg:leading-4">
                      {attr.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="grid overflow-hidden *:col-start-1 *:row-start-1">
          <div className="flex items-center mt-1 gap-x-[6.5px] pl-[8.5px] lg:mt-1.5 lg:gap-x-[7px] lg:pl-[13px]">
            <svg className="size-[9px] lg:size-3" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 3v6M9 6H3" stroke="#9FA1A7" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <div className="font-medium text-[#9FA1A7] text-[8px] leading-[11px] tracking-[-0.16px] lg:text-[11px] lg:leading-4 lg:tracking-[-0.22px]">
              {entity.moreAttributes} More Attributes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataModelDiagram = () => {
  const [activeMenu, setActiveMenu] = useState("clinici-dentare");
  const currentData = entityDataRaw[activeMenu];
  const entities = currentData.entities;

  return (
    <section className="relative flex h-full w-full items-stretch flex-col pt-10 pb-10">
          {/* Menu Selection */}
      <div className="flex gap-2 justify-center my-8">
            <button
              onClick={() => setActiveMenu("clinici-dentare")}
              className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                activeMenu === "clinici-dentare"
                  ? "bg-gray-100 border-gray-300 text-gray-900 font-medium"
                  : "bg-white border-border text-foreground hover:bg-gray-50"
              }`}
            >
              Clinici Dentare
            </button>
            <button
              onClick={() => setActiveMenu("hoteluri")}
              className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                activeMenu === "hoteluri"
                  ? "bg-gray-100 border-gray-300 text-gray-900 font-medium"
                  : "bg-white border-border text-foreground hover:bg-gray-50"
              }`}
            >
              Hoteluri
            </button>
            <button
              onClick={() => setActiveMenu("sali-fitness")}
              className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                activeMenu === "sali-fitness"
                  ? "bg-gray-100 border-gray-300 text-gray-900 font-medium"
                  : "bg-white border-border text-foreground hover:bg-gray-50"
              }`}
            >
              Săli de Fitness
            </button>
          </div>

      {/* Diagram Container */}
      <div className="relative mx-5 lg:mx-20 grid mb-12 overflow-x-auto grid-cols-[auto_2fr_auto_3fr_auto_2fr_auto]">
        
        {/* Entity 1 (Slot 1 - Top Left) */}
        <div className="opacity-1 filter-blur-0 transform-none mt-[50px]">
          <EntityCard entity={entities[0]} />
        </div>

        {/* Entity 2 (Slot 2 - Top Right) */}
        <div className="col-start-7 row-start-1 opacity-1 filter-blur-0 transform-none">
          <EntityCard entity={entities[1]} />
                          </div>

        {/* Entity 3 (Slot 3 - Bottom Left) */}
        <div className="-mt-5 col-start-3 row-start-2 opacity-1 filter-blur-0 transform-none mt-[-50px]">
          <EntityCard entity={entities[2]} />
                        </div>

        {/* Entity 4 (Slot 4 - Bottom Right) */}
        <div className="-mt-5 col-start-5 row-start-2 opacity-1 filter-blur-0 transform-none">
          <EntityCard entity={entities[3]} />
                      </div>

        {/* Connection Lines (SVGs from page.html) */}
        
        {/* Top Horizontal Line */}
        <div className="pointer-events-none absolute top-[53px] col-start-2 col-end-7 row-start-1 row-end-2 w-full">
          <svg className="h-full w-full" viewBox="0 0 805 31" fill="none" preserveAspectRatio="none">
            <path pathLength="1" strokeDasharray="1 1" d="M0 30.5L703.04 30.5001C710.805 30.5001 718.361 27.9897 724.582 23.3436L744.918 8.15594C751.139 3.50981 758.695 0.99949 766.46 0.99949L805 0.999491" stroke="#E4E7EC" strokeDashoffset="0"></path>
          </svg>
          <div className="absolute bottom-[-0.5px] left-0">
            <svg className="h-px w-px overflow-visible" fill="none">
              <path pathLength="1" strokeDasharray="1 1" d="M 0 -17 L 3 -17 A 8 8 0 0 1 12 -9 L 12 0" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <path pathLength="1" strokeDasharray="1 1" d="M 0 17 L 3 17 A 8 8 0 0 0 12 9 L 12 0" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <circle cx="-0.5" cy="-17" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="-0.5" cy="0" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="-0.5" cy="17" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
            </svg>
          </div>
          <div className="-right-px absolute top-px">
            <svg className="h-px w-px overflow-visible" fill="none">
              <path pathLength="1" strokeDasharray="1 1" d="M 0 -17 L -3 -17 A 8 8 0 0 0 -12 -9 L -12 0" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <path pathLength="1" strokeDasharray="1 1" d="M 0 17 L -3 17 A 8 8 0 0 1 -12 9 L -12 0" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <circle cx="0.5" cy="-17" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="0.5" cy="0" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="0.5" cy="17" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
            </svg>
                            </div>
                      </div>

        {/* Left Curved Line */}
        <div className="pointer-events-none absolute top-0 left-[128px] col-start-1 col-end-3 row-start-2 row-end-3">
          <svg className="h-full w-full" viewBox="0 0 216 63" fill="none" preserveAspectRatio="none">
            <path pathLength="1" strokeDasharray="1 1" d="M216 62L51.3828 62C38.7374 62 27.0191 55.3652 20.5131 44.5219L2.42507 14.3751C1.49257 12.821 0.999996 11.0426 0.999995 9.23017L0.999995 1.87959e-05" stroke="#E4E7EC" strokeDashoffset="0"></path>
          </svg>
          <div className="-top-px absolute left-px">
            <svg className="h-px w-px overflow-visible" fill="none">
              <path pathLength="1" strokeDasharray="1 1" d="M -17 0 L -17 3 A 8 8 0 0 0 -9 12 L 0 12" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <path pathLength="1" strokeDasharray="1 1" d="M 17 0 L 17 3 A 8 8 0 0 1 9 12 L 0 12" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <circle cx="-17" cy="0.5" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="0" cy="0.5" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="17" cy="0.5" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
            </svg>
          </div>
          <div className="-right-[1.5px] -bottom-[0.5px] absolute">
            <svg className="h-px w-px overflow-visible" fill="none">
              <circle cx="0" cy="-0.5" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
            </svg>
                      </div>
                    </div>

        {/* Right Curved Line */}
        <div className="pointer-events-none absolute top-[109px] right-0 left-0 col-start-4 col-end-7 row-start-1 row-end-3">
          <svg className="h-full w-full" viewBox="0 0 461 88" fill="none" preserveAspectRatio="none">
            <path pathLength="1" strokeDasharray="1 1" d="M461 1L396.5 1L110.904 1.00001C98.5181 1.00001 87.0021 7.36701 80.4158 17.8564L47.5842 70.1437C40.9979 80.633 29.4819 87 17.0962 87L0 87" stroke="#E4E7EC" strokeDashoffset="0"></path>
          </svg>
          <div className="-right-px absolute top-px">
            <svg className="h-px w-px overflow-visible" fill="none">
              <path pathLength="1" strokeDasharray="1 1" d="M 0 -17 L -3 -17 A 8 8 0 0 0 -12 -9 L -12 0" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <path pathLength="1" strokeDasharray="1 1" d="M 0 17 L -3 17 A 8 8 0 0 1 -12 9 L -12 0" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <circle cx="0.5" cy="-17" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="0.5" cy="0" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="0.5" cy="17" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
            </svg>
          </div>
          <div className="-bottom-0 absolute left-0">
            <svg className="h-px w-px overflow-visible" fill="none">
              <circle cx="-0.5" cy="0" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
            </svg>
          </div>
            </div>

        {/* Bottom Connection */}
        <div className="pointer-events-none absolute top-[61px] right-0 left-0 col-start-4 col-end-5 row-start-2 row-end-3">
          <svg className="h-full w-full" viewBox="0 0 118 30" fill="none" preserveAspectRatio="none">
            <path pathLength="1" strokeDasharray="1 1" d="M0 29L33.131 29C41.7559 29 50.0942 25.9035 56.6285 20.2739L68.8715 9.72608C75.4058 4.09651 83.7441 1 92.369 1L117.5 1" stroke="#E4E7EC" strokeDashoffset="0"></path>
          </svg>
          <div className="absolute bottom-0 left-0">
            <svg className="h-px w-px overflow-visible" fill="none">
              <path pathLength="1" strokeDasharray="1 1" d="M 0 -17 L 3 -17 A 8 8 0 0 1 12 -9 L 12 0" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <path pathLength="1" strokeDasharray="1 1" d="M 0 17 L 3 17 A 8 8 0 0 0 12 9 L 12 0" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <circle cx="-0.5" cy="-17" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="-0.5" cy="0" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="-0.5" cy="17" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
            </svg>
          </div>
          <div className="-right-px absolute top-px">
            <svg className="h-px w-px overflow-visible" fill="none">
              <path pathLength="1" strokeDasharray="1 1" d="M 0 -17 L -3 -17 A 8 8 0 0 0 -12 -9 L -12 0" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <path pathLength="1" strokeDasharray="1 1" d="M 0 17 L -3 17 A 8 8 0 0 1 -12 9 L -12 0" strokeWidth="1" stroke="#E4E7EC" strokeDashoffset="0"></path>
              <circle cx="0.5" cy="-17" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="0.5" cy="0" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
              <circle cx="0.5" cy="17" r="2" fill="white" stroke="#E4E7EC" strokeWidth="2" opacity="1"></circle>
            </svg>
          </div>
        </div>

          </div>

          {/* Data Table */}
      <div className="bg-white rounded-lg border border-border overflow-hidden max-w-5xl mx-auto w-full">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-border">
                  <tr>
                    {currentData.tableData.headers.map((header, idx) => (
                      <th
                        key={idx}
                        className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                      >
                        <div className="flex items-center gap-2">
                          {idx === 0 && <User className="w-3 h-3" />}
                          {idx === 1 && <Calendar className="w-3 h-3" />}
                          {idx === 2 && <Tag className="w-3 h-3" />}
                          {idx === 3 && <User className="w-3 h-3" />}
                          {idx === 4 && <Circle className="w-3 h-3" />}
                          {header}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {currentData.tableData.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-gray-50 transition-colors">
                      {Object.values(row).map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-4 py-3 text-sm text-foreground">
                          {cellIdx === Object.values(row).length - 1 ? (
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${
                                cell === "Confirmată"
                                  ? "bg-green-50 text-green-700"
                                  : "bg-yellow-50 text-yellow-700"
                              }`}
                            >
                              {cellIdx === Object.values(row).length - 1 && cell === "Confirmată" && (
                                <Circle className="w-2 h-2 fill-current" />
                              )}
                              {cellIdx === Object.values(row).length - 1 && cell === "În așteptare" && (
                                <Circle className="w-2 h-2 fill-current" />
                              )}
                              {cell}
                            </span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
      </div>
    </section>
  );
};

export default DataModelDiagram;
