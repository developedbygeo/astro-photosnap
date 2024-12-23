import { useReducer } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/react/Button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/react/Sheet";
import type { HEADER_NAVIGATION_LINKS } from "@/data/navigation";
import { cn } from "@/lib/utils";

type NavigationProps = {
  links: typeof HEADER_NAVIGATION_LINKS;
  activePath: string;
};

const ICON_CLASS = "w-14 h-auto dark:text-neutral-100 text-neutral-800";

export const MobileNavigation = ({ links, activePath }: NavigationProps) => {
  const [isOpen, toggleIsOpen] = useReducer((open) => !open, false);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={toggleIsOpen}>
        <SheetTrigger className="lg:hidden" asChild>
          <Button variant="ghost" size="icon">
            {isOpen ? (
              <X className={ICON_CLASS} />
            ) : (
              <Menu className={ICON_CLASS} />
            )}
          </Button>
        </SheetTrigger>
        <SheetContent
          className="w-screen"
          aria-describedby="Main navigation for mobile"
          side="right"
        >
          <SheetTitle className="sr-only">
            <h2>Mobile Navigation</h2>
          </SheetTitle>
          <nav
            aria-label="Primary"
            className="h-full flex items-center justify-center"
          >
            <ul className="flex flex-col items-center space-y-10">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "navlink",
                      activePath === link.href ? "navlink-active" : "",
                    )}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

MobileNavigation.displayName = "MobileNavigation";
