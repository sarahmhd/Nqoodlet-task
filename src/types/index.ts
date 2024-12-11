export type TStatus = 'all' | 'active' | 'inactive' | 'terminated'
export type TPhysical = 'physical' | 'digital'
export type TCard = {
    id: string,
    last_four: string,
    is_physical: boolean,
    status: TStatus,
    more_details: {
        name: string,
        full_card_number: string,
        cvv_number: string,

    }
}
export type TLangContext = { lang: string, setLang: React.Dispatch<React.SetStateAction<string>> }
export type TTabs = TStatus | TPhysical