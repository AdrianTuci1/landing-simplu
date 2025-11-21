import React from 'react';
import { EntityCard } from './data-model-diagram';

export const DataModelDiagramMobile = ({ entities }) => {
    return (
        <div className="relative mx-auto grid w-fit grid-cols-[1fr_64px_1fr] grid-rows-[auto_40px_auto] px-6 pt-5 pb-16 lg:hidden">
            {/* User Card */}
            <EntityCard entity={entities[0]} />

            {/* Deal Card */}
            <EntityCard entity={entities[1]} className="col-start-3 row-start-1" />

            {/* Person Card */}
            <EntityCard entity={entities[2]} className="relative left-[11px] col-start-1 row-start-3" />

            {/* Company Card (replacing the Add Object button from HTML) */}
            <EntityCard entity={entities[3]} className="relative right-[11px] col-start-3 row-start-3" />

            {/* Connections */}

            {/* Connection 1 */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 col-start-1 col-end-2 row-start-2 row-end-3">
                <svg
                    className="data-model-cards-mobile-connection-container" width="14" height="41" viewBox="0 0 14 41" fill="none">
                    <path className="data-model-cards-mobile-connection data-model-cards-mobile-connection-active-backwards"
                        pathLength="1"
                        d="M13 41V29C13 26.4819 11.8144 24.1108 9.8 22.6L4.2 18.4C2.18555 16.8892 1 14.5181 1 12V0"
                        stroke="#E4E7EC"></path>
                </svg>
                <div className="-top-px absolute left-px"><svg className="h-px w-px overflow-visible" fill="none">
                    <path className="data-model-cards-mobile-connector data-model-cards-mobile-connection-active-forwards"
                        pathLength="1" d="M -10.5 0 L -10.5 2 A 5 5 0 0 0 -5.5 7 L 0 7" strokeWidth="1" stroke="#E4E7EC">
                    </path>
                    <path className="data-model-cards-mobile-connector data-model-cards-mobile-connection-active-forwards"
                        pathLength="1" d="M 10.5 0 L 10.5 2 A 5 5 0 0 1 5.5 7 L 0 7" strokeWidth="1" stroke="#E4E7EC">
                    </path>
                    <circle className="transition-opacity duration-300 ease-out opacity-100" cx="-10.5" cy="0.5" r="1.25"
                        fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                    <circle className="transition-opacity duration-300 ease-out opacity-100" cx="0" cy="0.5" r="1.25"
                        fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                    <circle className="transition-opacity duration-300 ease-out opacity-100" cx="10.5" cy="0.5" r="1.25"
                        fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                </svg></div>
                <div className="-bottom-0.5 absolute right-0"><svg className="h-px w-px overflow-visible" fill="none">
                    <circle className="transition-opacity duration-300 ease-out opacity-100 [transition-delay:1.1s]" cx="0"
                        cy="-0.5" r="1.25" fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                </svg></div>
            </div>

            {/* Connection 2 */}
            <div className="pointer-events-none absolute top-0 right-[-11px] left-[11px] col-start-2 col-end-4 row-start-2">
                <svg
                    className="data-model-cards-mobile-connection-container" width="194" height="164" viewBox="0 0 194 164"
                    fill="none">
                    <path className="data-model-cards-mobile-connection data-model-cards-mobile-connection-active-backwards"
                        pathLength="1"
                        d="M 0 125 H 20.5 C 25 125 28.5 128.5 28.5 133 V 146.5 C 28.5 156 36 163.5 45.5 163.5 H 176.5 C186 163.5 193.5 156 193.5 146.5 V 49.5 V 46.5 C193.5 37 186 29.5 176.5 29.5 H 158 C153.5 29.5 150 26 150 21.5V0"
                        stroke="#E4E7EC"></path>
                </svg>
                <div className="-top-px absolute right-[54px]"><svg className="h-px w-px overflow-visible" fill="none">
                    <path className="data-model-cards-mobile-connector data-model-cards-mobile-connection-active-forwards"
                        pathLength="1" d="M -10.5 0 L -10.5 2 A 5 5 0 0 0 -5.5 7 L 0 7" strokeWidth="1" stroke="#E4E7EC">
                    </path>
                    <path className="data-model-cards-mobile-connector data-model-cards-mobile-connection-active-forwards"
                        pathLength="1" d="M 10.5 0 L 10.5 2 A 5 5 0 0 1 5.5 7 L 0 7" strokeWidth="1" stroke="#E4E7EC">
                    </path>
                    <circle className="transition-opacity duration-300 ease-out opacity-100" cx="-10.5" cy="0.5" r="1.25"
                        fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                    <circle className="transition-opacity duration-300 ease-out opacity-100" cx="0" cy="0.5" r="1.25"
                        fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                    <circle className="transition-opacity duration-300 ease-out opacity-100" cx="10.5" cy="0.5" r="1.25"
                        fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                </svg></div>
                <div className="-left-[0.5px] absolute bottom-[37.5px]"><svg className="h-px w-px overflow-visible" fill="none">
                    <circle className="transition-opacity duration-300 ease-out opacity-100 [transition-delay:1.1s]" cx="0"
                        cy="-0.5" r="1.25" fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                </svg></div>
            </div>

            {/* Connection 3 */}
            <div className="pointer-events-none absolute top-[42px] right-[11px] left-0 col-start-2 col-end-2 row-start-1">
                <svg
                    className="data-model-cards-mobile-connection-container" width="52" height="154" viewBox="0 0 52 154"
                    fill="none">
                    <path className="data-model-cards-mobile-connection data-model-cards-mobile-connection-active-backwards"
                        pathLength="1"
                        d="M1.70714e-05 0.999999L17 1C21.4183 1 25 4.58172 25 9L25 69C25 71.5181 26.1856 73.8892 28.2 75.4L33.8 79.6C35.8145 81.1108 37 83.4819 37 86L37 145C37 149.418 40.5817 153 45 153L52 153"
                        stroke="#E4E7EC"></path>
                </svg>
                <div className="-right-px absolute bottom-0"><svg className="h-px w-px overflow-visible" fill="none">
                    <path className="data-model-cards-mobile-connector data-model-cards-mobile-connection-active-forwards"
                        pathLength="1" d="M 0 -10.5 L -2 -10.5 A 5 5 0 0 0 -7 -5.5 L -7 0" strokeWidth="1"
                        stroke="#E4E7EC"></path>
                    <path className="data-model-cards-mobile-connector data-model-cards-mobile-connection-active-forwards"
                        pathLength="1" d="M 0 10.5 L -2 10.5 A 5 5 0 0 1 -7 5.5 L -7 0" strokeWidth="1" stroke="#E4E7EC">
                    </path>
                    <circle className="transition-opacity duration-300 ease-out opacity-100" cx="0.5" cy="-10.5" r="1.25"
                        fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                    <circle className="transition-opacity duration-300 ease-out opacity-100" cx="0.5" cy="0" r="1.25"
                        fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                    <circle className="transition-opacity duration-300 ease-out opacity-100" cx="0.5" cy="10.5" r="1.25"
                        fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                </svg></div>
                <div className="absolute top-px left-0"><svg className="h-px w-px overflow-visible" fill="none">
                    <path
                        className="data-model-cards-mobile-connector data-model-cards-mobile-connection-active-backwards [animation-delay:0.8s]"
                        pathLength="1" d="M 0 -10.5 L 2 -10.5 A 5 5 0 0 1 7 -5.5 L 7 0" strokeWidth="1" stroke="#E4E7EC">
                    </path>
                    <path
                        className="data-model-cards-mobile-connector data-model-cards-mobile-connection-active-backwards [animation-delay:0.8s]"
                        pathLength="1" d="M 0 10.5 L 2 10.5 A 5 5 0 0 0 7 5.5 L 7 0" strokeWidth="1" stroke="#E4E7EC">
                    </path>
                    <circle className="transition-opacity duration-300 ease-out opacity-100 [transition-delay:1.1s]" cx="-0.5"
                        cy="-10.5" r="1.25" fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                    <circle className="transition-opacity duration-300 ease-out opacity-100 [transition-delay:1.1s]" cx="-0.5"
                        cy="0" r="1.25" fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                    <circle className="transition-opacity duration-300 ease-out opacity-100 [transition-delay:1.1s]" cx="-0.5"
                        cy="10.5" r="1.25" fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                </svg></div>
            </div>

            {/* Connection 4 */}
            <div className="pointer-events-none absolute top-0 right-[77px] bottom-0 col-start-3 col-end-4 row-start-2 row-end-3">
                <svg className="data-model-cards-mobile-connection-container" width="14" height="41" viewBox="0 0 14 41"
                    fill="none">
                    <path className="data-model-cards-mobile-connection data-model-cards-mobile-connection-active-forwards"
                        pathLength="1"
                        d="M1 41V29C1 26.4819 2.18555 24.1108 4.2 22.6L9.8 18.4C11.8144 16.8892 13 14.5181 13 12V0"
                        stroke="#E4E7EC"></path>
                </svg>
                <div className="-bottom-0.5 absolute left-px"><svg className="h-px w-px overflow-visible" fill="none">
                    <circle className="transition-opacity duration-300 ease-out opacity-100" cx="0" cy="-0.5" r="1.25"
                        fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                </svg></div>
                <div className="-top-px absolute right-0"><svg className="h-px w-px overflow-visible" fill="none">
                    <path
                        className="data-model-cards-mobile-connector data-model-cards-mobile-connection-active-backwards [animation-delay:0.8s]"
                        pathLength="1" d="M -10.5 0 L -10.5 2 A 5 5 0 0 0 -5.5 7 L 0 7" strokeWidth="1" stroke="#E4E7EC">
                    </path>
                    <path
                        className="data-model-cards-mobile-connector data-model-cards-mobile-connection-active-backwards [animation-delay:0.8s]"
                        pathLength="1" d="M 10.5 0 L 10.5 2 A 5 5 0 0 1 5.5 7 L 0 7" strokeWidth="1" stroke="#E4E7EC">
                    </path>
                    <circle className="transition-opacity duration-300 ease-out opacity-100 [transition-delay:1.1s]" cx="-10.5"
                        cy="0.5" r="1.25" fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                    <circle className="transition-opacity duration-300 ease-out opacity-100 [transition-delay:1.1s]" cx="0"
                        cy="0.5" r="1.25" fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                    <circle className="transition-opacity duration-300 ease-out opacity-100 [transition-delay:1.1s]" cx="10.5"
                        cy="0.5" r="1.25" fill="white" stroke="#E4E7EC" strokeWidth="1.5"></circle>
                </svg></div>
            </div>
        </div>
    );
};
