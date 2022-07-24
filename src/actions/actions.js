export const ACTIVE_USER = "ACTIVE_USER";
export const FIRST_AREA = "FIRST_AREA";
export const SECOND_AREA = "SECOND_AREA";
export const THIRD_AREA = "THIRD_AREA";
export const FOURTH_AREA = "FOURTH_AREA";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const DELETE_NEW_MESSAGE = "DELETE_NEW_MESSAGE";

export const activeUser = (userId) => {
    return { type: ACTIVE_USER, payload: userId}
}
export const firstArea = (texts , identifier) => {
    return { type: FIRST_AREA, payload: {texts , identifier} }
}
export const secondArea = (texts , identifier) => {
    return { type: SECOND_AREA, payload: {texts , identifier} }
}
export const thirdArea = (texts , identifier) => {
    return { type: THIRD_AREA, payload: {texts , identifier} }
}
export const fourthArea = (texts , identifier) => {
    return { type: FOURTH_AREA, payload: {texts , identifier} }
}
export const newMessage = (newmessage) => {
    return { type: NEW_MESSAGE, payload: newmessage}
}
export const deleteNewMessage = (messageId) => {
    return { type: DELETE_NEW_MESSAGE, payload: messageId}
}

