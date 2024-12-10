/**
 * Render a list of Cards, Each card must has it's own style
 * Active Card to be colored (See Example Folder)
 * Inactive Card to be Grayscale (See Example Folder)
 * Terminated Card to be Blurred with Lock Icon (See Example Folder)
 *
 * Use the images provided inside the assets folder (bank, mastercard logos, physical, and plastic card)
 *
 * User React, TailwindCSS, and Redux
 */

import { TCard } from "../types";

export const cards: TCard[] = [
    { id: "1", last_four: "1234", is_physical: false, status: "active" },
    { id: "2", last_four: "5678", is_physical: false, status: "inactive" },
    { id: "3", last_four: "9101", is_physical: true, status: "terminated" },
    { id: "4", last_four: "1121", is_physical: false, status: "terminated" },
    { id: "5", last_four: "3141", is_physical: true, status: "inactive" },
    { id: "6", last_four: "2232", is_physical: true, status: "active" },
];
