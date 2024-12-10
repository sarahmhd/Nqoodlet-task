export type TStatus = 'all' | 'active' | 'inactive' | 'terminated'
export type TCard = { id: string, last_four: string, is_physical: boolean, status: TStatus }