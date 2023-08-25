export const serialiseSearchParams = (params: Record<string, string>) :string => {
    const strParams = new URLSearchParams(params)

    return strParams.toString()
}