export const timeFormater = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate().toString();
    return `${month} ${day}`;
};