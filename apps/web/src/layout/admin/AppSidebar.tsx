"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/src/context/admin/SidebarContext";
import { ChevronDown, ChevronDownCircleIcon, ContactRound, FileTextIcon, HelpCircle, IdCard, IdCardLanyard, ImageMinus, LayoutDashboard, ListCheckIcon, MessageSquare, Mic, Newspaper, PieChart, PieChartIcon, Settings, UserRound, Users } from "lucide-react";
import { AiFillDashboard } from "react-icons/ai";


type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  {
    icon: <LayoutDashboard />,
    name: "Dashboard",
    path: "/admin",
  },

   {
    name: "Application",
    icon: <FileTextIcon />,
    subItems: [
    
      // { name: "Home Improvement Program", path: "/admin/home-improvement-program-list2", pro: false },
      { name: "Home Improvement Program", path: "/admin/home-improvement-program-list", pro: false },
      { name: "First-Time Home Buyer Assistance", path: "/admin/first-time-home-buyer-assistance-list", pro: false },
      { name: "Tenant Maintenance Requests", path: "/admin/tenant-maintenance-request-list", pro: false },
      
    ],
  },

  {
    name: "Master",
    icon: <Settings />,
    subItems: [
      { name: "Designation Master", path: "/admin/designation-master", pro: false },
      { name: "Status Master", path: "/admin/status-master", pro: false },
      // { name: "Department Master", path: "/admin/department-master", pro: false },
      // { name: "City Master", path: "/admin/city-master", pro: false },
      // { name: "Location Master", path: "/admin/location-master", pro: false },
      // { name: "Banner Master", path: "/admin/banner-master", pro: false },
      // { name: "Reported leads Master", path: "/admin/reported-leads-master", pro: false },
      // { name: "Property Types Master", path: "/admin/property-types-master", pro: false },
      // { name: "Property Variant Master", path: "/admin/property-variant-master", pro: false },
      // { name: "Property Amenities Master", path: "/admin/property-amenities-master", pro: false },
      // { name: "Reword Points Master", path: "/admin/reward-point-master", pro: false },
      // { name: "Verification Status Master", path: "/admin/verification-status-master", pro: false },
      // { name: "Specification Master", path: "/admin/specification-master", pro: false },

    ],
  },

    {
    name: "User ",
    icon: <UserRound />,
    subItems: [
    
      { name: "Add User", path: "/admin/add-user", pro: false },
      { name: "User List", path: "/admin/user-list", pro: false },
      
    ],
  },

  
  {
    name: "Blog",
    icon: <IdCard />,
    subItems: [
      { name: "Blog Category", path: "/admin/blog-category", pro: false },
      { name: "Add Blog", path: "/admin/add-blog", pro: false },
      { name: "Blog List", path: "/admin/blog-list", pro: false },
      
    ],
  },

  {
    name: "Press Release",
    icon: <FileTextIcon />,
    subItems: [
    
      { name: "Add Press Relese", path: "/admin/add-press-release", pro: false },
      { name: "Press Relese List", path: "/admin/press-release-list", pro: false },
      
    ],
  },

  {
    name: "FAQ",
    icon: <HelpCircle />,
    subItems: [
    
      { name: "Add FAQ", path: "/admin/add-faq", pro: false },
      { name: "FAQ List", path: "/admin/faq-list", pro: false },
      
    ],
  },

 
{
  name: "Contact Us",
  icon: <MessageSquare />,
  subItems: [
    { name: "Contact List", path: "/admin/contact-us-list", pro: false },
  ],
},


{
  name: "Our Team",
  icon: <Users />,
  subItems: [
   { name: "Add Team Member", path: "/admin/add-team-member", pro: false },
      { name: "Team Member List", path: "/admin/team-member-list", pro: false },
      
  ],
},


 {
    name: "Success Story",
    icon: <FileTextIcon />,
    subItems: [
    
      { name: "Add Success Story", path: "/admin/add-success-story", pro: false },
      { name: "Success Story List", path: "/admin/success-story-list", pro: false },
      
    ],
  },


  




  // {
  //   icon: <UserRound />,
  //   name: "Admin User",
  //   path: "/admin-user",

  // },
   

];

const othersItems: NavItem[] = [
  {
    icon: <PieChart />,
    name: "Charts",
    subItems: [
      { name: "Line Chart", path: "/line-chart", pro: false },
      { name: "Bar Chart", path: "/bar-chart", pro: false },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered, toggleSidebar, toggleMobileSidebar } = useSidebar();
  const pathname = usePathname();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others"
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group  ${openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
                } cursor-pointer ${!isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
                }`}
            >
              <span
                className={`text-[#74798B] ${openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                  }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDown
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${openSubmenu?.type === menuType &&
                      openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                    }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                  }`}
              >
                <span
                  className={`${isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                    }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                        }`}
                    >
                      {subItem.name}
                      <span className="flex items-center gap-1 ml-auto">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                              } menu-dropdown-badge `}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                              } menu-dropdown-badge `}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => path === pathname;
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({
                type: menuType as "main" | "others",
                index,
              });
              submenuMatched = true;
            }
          });
        }
      });
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);


  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <aside
      className={`fixed mt-[17px] flex flex-col lg:mt-0 top-18 px-5 left-0 bg-[#F3F4F6] dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen
          ? "w-[290px]"
          : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
       
     
    >

      <button
        className={`${isExpanded || isMobileOpen
          ? "ms-auto"
          : isHovered
            ? "ms-auto"
            : "mx-auto"
        } mt-2 items-center justify-center w-auto h-10 text-secondary rounded-lg z-9 lg:h-11 lg:w-auto`}
        onClick={handleToggle}
        aria-label="Toggle Sidebar"
      >
        {isMobileOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
              fill="currentColor"
            />
          </svg>
        )}
        {/* Cross Icon */}
      </button>
    
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                  }`}
              >

              </h2>
              {renderMenuItems(navItems, "main")}
            </div>


          </div>
        </nav>

      </div>
    </aside>
  );
};

export default AppSidebar;
