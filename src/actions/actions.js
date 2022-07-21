export const activeUser = (userId) => {
    return { type: 'ACTIVE_USER', payload: userId }
}

export const firstArea = (texts) => {
    return { type: 'FIRST_AREA', payload: texts }
}
export const secondArea = (texts) => {
    return { type: 'SECOND_AREA', payload: texts }
}
export const thirdArea = (texts) => {
    return { type: 'THIRD_AREA', payload: texts }
}
export const fourthArea = (texts) => {
    return { type: 'FOURTH_AREA', payload: texts }
}

