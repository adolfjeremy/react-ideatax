const formatDate = (date) => {
    const options = {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    };
    return `${new Date(date).toLocaleString("id-ID", options)} WIB`;
};

export default formatDate;
