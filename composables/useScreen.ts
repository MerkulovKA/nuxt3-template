export const useScreen = () => {
    const screenSize = reactive({
        width: 0,
        height: 0,
        isMobile: false,
    })

    function getSize() {
        const { innerWidth, innerHeight } = window
        screenSize.width = innerWidth
        screenSize.height = innerHeight
        screenSize.isMobile = innerWidth < 1024
    }
    onBeforeMount(() => {
        getSize()
    })
    onMounted(() => {
        if (typeof window === 'undefined') return
        window.addEventListener('resize', getSize)
    })

    onUnmounted(() => {
        if (typeof window === 'undefined') return
        window.removeEventListener('resize', getSize)
    })
    return { screenSize }
}
