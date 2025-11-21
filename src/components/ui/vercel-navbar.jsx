import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, Menu, X } from "lucide-react";
import { TextEffect } from "./text-effect";
import {
  redirectToCognitoLogin,
  isAuthenticated as checkAuth,
} from "@/lib/auth";

const platformSections = [
  {
    heading: "CRM",
    items: [
      {
        title: "Data model",
        description: "Structură flexibilă pentru toate tipurile de clienți.",
        href: "/data-model",
        icon: "/navicons/data-model.webp",
      },

      {
        title: "Apps & integrations",
        description: "Integrează-ți stack-ul în câteva clicuri.",
        href: "/apps-integrations",
        icon: "/navicons/apps.webp",
      },
      {
        title: "Productivity & collaboration",
        description: "Coordonează echipele dintr-un singur spațiu.",
        href: "/#productivity",
        icon: "/navicons/productivity.webp",
      },
    ],
  },
  {
    heading: "Automations",
    items: [
      {
        title: "Workflows",
        description: "Automatizează procesele operaționale repetitive.",
        href: "/workflows",
        icon: "/navicons/workflows.webp",
      },
      {
        title: "Sequences",
        description: "Rulează campanii secvențiale inteligente.",
        href: "/#sequences",
        icon: "/navicons/workflows.webp",
      },
    ],
  },
  {
    heading: "Insights",
    items: [
      {
        title: "Reporting",
        description: "Dă sens datelor cu rapoarte gata de folosire.",
        href: "/reporting",
        icon: "/navicons/reporting.webp",
      },
    ],
  },
  {
    heading: "Developers",
    items: [
      {
        title: "Developer platform",
        description: "Extinde Simplu cu API-uri și SDK-uri moderne.",
        href: "/developer-platform",
        icon: "/navicons/developers.webp",
      },
    ],
  },
];

const resourceSections = [
  {
    heading: "Support",
    items: [
      {
        title: "Help Center",
        description: "Documentație și răspunsuri rapide la întrebări.",
        href: "/help",
        icon: "/navicons/help.webp",
      },
    ],
  },
  {
    heading: "Developers",
    items: [
      {
        title: "Developer docs",
        description: "API reference și exemple interactive.",
        href: "/#docs",
        icon: "/navicons/docs.webp",
      },
    ],
  },
  {
    heading: "Partners",
    items: [
      {
        title: "Partner programs",
        description: "Alătură-te ecosistemului Simplu.",
        href: "/#partners",
        icon: "/navicons/partner.webp",
      },
    ],
  },
];

const resourceCompanySection = {
  heading: "Company",
  items: [
    {
      title: "Changelog",
      description: "Ce am lansat în ultima perioadă.",
      href: "/#changelog",
    },
    {
      title: "Resources",
      description: "Ghiduri, template-uri și materiale utile.",
      href: "/#resources",
    },
    {
      title: "Hiring",
      description: "Alătură-te echipei Simplu.",
      href: "/#hiring",
    },
  ],
};

const simpleLinks = [
  { label: "Pricing", href: "/pricing" },
];

export const VercelNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncAuthState = () => setIsAuthenticated(checkAuth());
    syncAuthState();

    window.addEventListener("storage", syncAuthState);
    return () => window.removeEventListener("storage", syncAuthState);
  }, []);

  const handleLogin = () => {
    const currentHost = window.location.origin;
    redirectToCognitoLogin(currentHost);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    sessionStorage.removeItem("auth_token");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
          <div className="flex items-center gap-10">
            <Link to="/" aria-label="home" className="flex items-center gap-2">
              <Logo />
            </Link>

            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="items-center">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={triggerClassName()}>
                      Platform
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4">
                      <div className="flex min-w-[360px] flex-col gap-6 md:min-w-[620px]">
                        {platformSections.map((section) => (
                          <PlatformSection key={section.heading} section={section} />
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={triggerClassName()}>
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4">
                      <div className="flex min-w-[320px] flex-col gap-4 md:min-w-[520px] md:flex-row md:items-start md:gap-10">
                        <div className="flex-1 space-y-4">
                          {resourceSections.map((section) => (
                            <ResourceSection key={section.heading} section={section} />
                          ))}
                        </div>
                        <div className="hidden h-full w-px bg-border/60 md:block" />
                        <CompanySection section={resourceCompanySection} />
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {simpleLinks.map((item) => (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink
                        asChild
                        className={cn(triggerClassName(), "cursor-pointer")}
                      >
                        <a href={item.href}>{item.label}</a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="outline" size="sm">
              <a href="https://app.simplu.io">Sign in</a>
            </Button>
            {isAuthenticated ? (
              <Button size="sm" onClick={handleLogout}>
                Deconectare
              </Button>
            ) : (
              <Button size="sm" onClick={() => window.location.href = "https://app.simplu.io"}>
                Start for free
              </Button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-border bg-background lg:hidden h-[calc(100vh-64px)] overflow-y-auto">
            <div className="space-y-6 px-4 py-6 pb-20">
              <MobileSection
                title="Platform"
                sections={platformSections}
                onNavigate={closeMobile}
              />
              <MobileSection
                title="Resources"
                sections={[...resourceSections, resourceCompanySection]}
                onNavigate={closeMobile}
              />
              <div className="space-y-2">
                {simpleLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <Button asChild variant="outline" size="sm" onClick={closeMobile}>
                  <a href="https://app.simplu.io">Sign in</a>
                </Button>
                {isAuthenticated ? (
                  <Button size="sm" onClick={handleLogout}>
                    Deconectare
                  </Button>
                ) : (
                  <Button size="sm" onClick={() => window.location.href = "https://app.simplu.io"}>
                    Start for free
                  </Button>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </nav>
      <div className="h-16" />
    </header>
  );
};

const triggerClassName = () =>
  cn(
    navigationMenuTriggerStyle(),
    "h-9 rounded-full px-4 text-sm font-medium text-muted-foreground"
  );

const PlatformSection = ({ section }) => (
  <div>
    <h3 className="px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      {section.heading}
    </h3>
    <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {section.items.map((item) => (
        <li key={item.title}>
          <NavigationMenuLink asChild>
            <a
              href={item.href}
              className="block rounded-lg px-2 py-2 transition hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex items-start gap-3">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt=""
                    className="mt-0.5 h-6 w-6 shrink-0"
                    loading="lazy"
                  />
                ) : null}
                <div className="space-y-1 w-full">
                  <div className="text-sm font-medium leading-tight">
                    {item.title}
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  </div>
);

const ResourceSection = ({ section }) => (
  <div>
    <h3 className="px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      {section.heading}
    </h3>
    <ul className="mt-3 space-y-3">
      {section.items.map((item) => (
        <li key={item.title}>
          <NavigationMenuLink asChild>
            <a
              href={item.href}
              className="block rounded-lg px-3 py-3 transition hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex items-start gap-3">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt=""
                    className="mt-1 h-5 w-5 shrink-0"
                    loading="lazy"
                  />
                ) : null}
                <div className="space-y-1 w-full">
                  <div className="text-sm font-medium leading-tight">
                    {item.title}
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  </div>
);

const CompanySection = ({ section }) => (
  <div className="w-full md:max-w-[220px]">
    <h3 className="px-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      {section.heading}
    </h3>
    <ul className="mt-3 space-y-2">
      {section.items.map((item) => (
        <li key={item.title}>
          <a
            href={item.href}
            className="block rounded-lg px-3 py-2 transition hover:bg-accent hover:text-accent-foreground"
          >
            <div className="text-sm font-medium leading-tight">{item.title}</div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const MobileSection = ({ title, sections, onNavigate }) => (
  <div>
    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      {title}
    </div>
    <div className="space-y-4">
      {sections.map((section) => (
        <div key={section.heading}>
          <div className="text-sm font-semibold text-foreground/80">
            {section.heading}
          </div>
          <ul className="mt-2 space-y-1">
            {section.items.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={onNavigate}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src="/Group-1.png" alt="Simplu" className="h-7 w-auto" />
    <TextEffect className="text-2xl font-bold">simplu</TextEffect>
  </div>
);

export default VercelNavbar;

