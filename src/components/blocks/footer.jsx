"use client";;
import * as React from "react";
import { cn } from "@/lib/utils";

export const Footer = React.forwardRef(
  ({ className, brand, socialLinks, columns, copyright, ...props }, ref) => {
    return (
      (<div ref={ref} className={cn("pt-24 bg-black text-white", className)} {...props}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <a href="#" className="text-xl font-semibold text-white">
                {brand.name}
              </a>
              <p className="text-sm text-gray-300">
                {brand.description}
              </p>

              <p className="text-sm font-light text-gray-400 mt-3.5">
                {socialLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <a
                      className="hover:text-white transition-colors"
                      target="_blank"
                      href={link.href}
                      rel="noopener noreferrer">
                      {link.name}
                    </a>
                    {index < socialLinks.length - 1 && " • "}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div
              className="grid grid-cols-2 mt-16 md:grid-cols-3 lg:col-span-8 lg:justify-items-end lg:mt-0">
              {columns.map(({ title, links }) => (
                <div key={title} className="last:mt-12 md:last:mt-0">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {links.map(({ name, Icon, href }) => (
                      <li key={name}>
                        <a
                          href={href || "#"}
                          className="text-sm transition-all text-gray-400 hover:text-white group">
                          <Icon
                            className="inline stroke-2 h-4 mr-1.5 transition-all stroke-gray-400 group-hover:stroke-white" />
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {copyright && (
            <div className="mt-20 border-t border-gray-800 pt-6 pb-8">
              <p className="text-xs text-gray-500">{copyright}</p>
            </div>
          )}
        </div>
      </div>)
    );
  }
);

Footer.displayName = "Footer";