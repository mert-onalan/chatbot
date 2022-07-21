export const activeUser = (userId) => {
    return { type: 'ACTIVE_USER', payload: userId}
}

export const firstArea = (texts , identifier) => {
    return { type: 'FIRST_AREA', payload: {texts , identifier} }
}
export const secondArea = (texts , identifier) => {
    return { type: 'SECOND_AREA', payload: {texts , identifier} }
}
export const thirdArea = (texts , identifier) => {
    return { type: 'THIRD_AREA', payload: {texts , identifier} }
}
export const fourthArea = (texts , identifier) => {
    return { type: 'FOURTH_AREA', payload: {texts , identifier} }
}

