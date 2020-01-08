export const triggerAnimation = (eleRef: HTMLElement | undefined | null, className: string) => {
    if (!eleRef) return
    eleRef.classList.remove(className)
    setTimeout(() => eleRef.classList.add(className), 0)
}