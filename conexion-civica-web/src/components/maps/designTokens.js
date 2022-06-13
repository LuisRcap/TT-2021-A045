const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true
};

export const color = {
    closeOptions: {
        ...defaultOptions,
        zIndex: 3,
        fillOpacity: 0.25,
        strokeColor: '#63b9a8',
        fillColor: '#63b9a8'
    }
}