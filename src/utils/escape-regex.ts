// Escape special regex characters
// Without this, searching for '.' will match everything instead of matching only '.'
export default function escapeRegex(str: string) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}