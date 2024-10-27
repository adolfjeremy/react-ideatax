const formatDate = (date, event = false) => {
    const options = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };
    const options2 = {
        month: "short",
        day: "2-digit",
        year: "numeric",
    };
    return event
        ? `${new Date(date).toLocaleDateString("id-ID", options2)}`
        : `${new Date(date).toLocaleString("id-ID", options)} WIB`;
};

export default formatDate;
