export function formatDate(s: string) {
    if (s.length != 24) return null;
    return `${s.slice(0, 4)}/${s.slice(5, 7)}/${s.slice(8, 10)}`;
}

export function formatDateTime(s: string) {
    if (s.length != 24) return null;
    return `${s.slice(0, 4)}/${s.slice(5, 7)}/${s.slice(8, 10)} ${s.slice(11, 13)}:${s.slice(14, 16)}:${s.slice(17, 19)}`;
}