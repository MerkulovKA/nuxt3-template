export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:finish', () => {
        let parallaxItems = document.querySelectorAll('[data-parallax]')
        parallaxItems.forEach((item) => {
            let parallaxAxisX =
                <number>Number(item.getAttribute('data-parallax-x')) ?? 0
            let parallaxAxisY =
                <number>Number(item.getAttribute('data-parallax-y')) ?? 0
            console.log(parallaxAxisY)
            let parallaxTarget = <String>(
                item.getAttribute('data-parallax-target')
            )
            switch (parallaxTarget) {
                case 'mouse':
                    window.addEventListener('mousemove', function (e) {
                        let x = e.clientX / window.innerWidth
                        let y = e.clientY / window.innerHeight
                        item.style.transform =
                            'translate(' +
                            (x * parallaxAxisX * 100 -
                                (parallaxAxisX * 100) / 2) +
                            'px,' +
                            (y * parallaxAxisY * 100 -
                                (parallaxAxisY * 100) / 2) +
                            'px'
                    })
                    break
            }
        })
    })
})
