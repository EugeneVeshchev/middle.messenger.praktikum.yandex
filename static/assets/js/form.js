function consoleFormFields(event) {
    try {
        event.preventDefault();
        const formData = new FormData(event.target)
        const fields = {};
        formData.forEach((value, key) => {
            fields[key] = value
        })
        console.log(fields);
        event.target.reset();
    } catch (e) {
        console.error('Can not parse event to FormData', e)
    }
}
