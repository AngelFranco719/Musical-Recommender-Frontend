export const options = {
    background: {
        color: "#000000",
    },
    particles: {
        number: {
            value: 80,
        },
        color: {
            value: "#fff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 1,
        },
        size: {
            value: 3,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "right",
        },
    },
    emitters: {
        position: {
            y: 55,
            x: -5,
        },
        rate: {
            delay: 7,
            quantity: 1,
        },
        size: {
            width: 0,
            height: 0,
        },
        particles: {
            shape: {
                type: "image",
                options: {
                    image: {
                        src: "https://media.gq.com.mx/photos/66cdf89fe21e890818a07d6d/4:3/w_2248,h_1686,c_limit/Oasis.jpg",
                        width: 500,
                        height: 634,
                    },
                },
            },
            size: {
                value: 40,
            },
            move: {
                speed: 10,
                outModes: {
                    default: "none",
                    right: "destroy",
                },
                straight: true,
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360,
                },
                animation: {
                    enable: true,
                    speed: 5,
                },
            },
        },
    },
};
export const createEmitter = (url) => ({
    position: { x: 100, y: 120 },
    rate: { delay: 2, quantity: 3 },
    life: { duration: 5 },
    particles: {
        shape: {
            type: "image",
            options: {
                image: {
                    src: url,
                    width: 500,
                    height: 634,
                },
            },
        },
        size: {
            value: 40,
        },
        move: {
            speed: 10,
            outModes: {
                default: "none",
                right: "destroy",
            },
            straight: true,
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            animation: {
                enable: true,
                speed: 5,
            },
        },
    },
});
