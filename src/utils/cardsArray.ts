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

import { TCard, TStatus } from "../types";

export const cards: TCard[] = [
    {
        id: "1",
        last_four: "1234",
        is_physical: false,
        status: "active",
        more_details: {
            name: "Ahmed Hassan",
            full_card_number: "4111111111111234",
            cvv_number: "123",
        }
    },
    {
        id: "2",
        last_four: "5678",
        is_physical: false,
        status: "inactive",
        more_details: {
            name: "Fatma Mohamed",
            full_card_number: "5500000000005678",
            cvv_number: "456",
        }
    },
    {
        id: "3",
        last_four: "9101",
        is_physical: true,
        status: "terminated",
        more_details: {
            name: "Ali Mahmoud",
            full_card_number: "340000000009101",
            cvv_number: "789",
        }
    },
    {
        id: "4",
        last_four: "1121",
        is_physical: false,
        status: "terminated",
        more_details: {
            name: "Salma Youssef",
            full_card_number: "300000000001121",
            cvv_number: "321",
        }
    },
    {
        id: "5",
        last_four: "3141",
        is_physical: true,
        status: "inactive",
        more_details: {
            name: "Hassan Omar",
            full_card_number: "6011000000003141",
            cvv_number: "654",
        }
    },
    {
        id: "6",
        last_four: "2232",
        is_physical: true,
        status: "active",
        more_details: {
            name: "Noura Ibrahim",
            full_card_number: "411111111112232",
            cvv_number: "987",
        }
    },
];


export const formatCardNumberX = (number: number | string) => {
    let numStr = number.toString();

    // Pad the number to 16 digits if it's shorter
    if (numStr.length < 16) {
        numStr = '0'.repeat(16 - numStr.length) + numStr;
    }

    // Format the number with hyphens after every 4 digits
    const formatted = numStr.replace(/\d(?=\d{4})/g, 'x');

    // Mask all digits except the last 4
    const masked = formatted.replace(/(.{4})(?=.)/g, '$1-');

    return masked;
};

export const formatCardNumber = (number: number | string) => {
    let numStr = number.toString();

    // Pad the number to 16 digits if it's shorter
    if (numStr.length < 16) {
        numStr = '0'.repeat(16 - numStr.length) + numStr;
    }

    // Mask all digits except the last 4
    const masked = numStr.replace(/(.{4})(?=.)/g, '$1-');

    return masked;
};

export const formatCVVNumber = (number:number|string) =>{
    let numStr = number.toString();
    const formatted = numStr.replace(/\d/g, '*');

    return formatted;
}


export const statusColor = (status: TStatus) => {
    return status === 'active' ? "#4CAF50" : status === 'inactive' ? '#BDBDBD' : '#F44336'
}