let counter = 2;
// Generate a unique ID
export function generateId(): string {
    counter++;
    return `id-${counter}`;
}
