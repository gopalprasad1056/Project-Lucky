// Hide loading screen after 2.5 seconds
window.addEventListener("load", () => {
    setTimeout(() => {
            const loading = document.getElementById("loading");
                    if (loading) {
                                loading.style.opacity = "0";
                                            setTimeout(() => {
                                                            loading.style.display = "none";
                                                                        }, 500);
                                                                                }
                                                                                    }, 2500);
                                                                                    });

                                                                                    // Floating hearts effect
                                                                                    function createHeart() {
                                                                                        const heart = document.createElement("div");
                                                                                            heart.innerHTML = "❤";
                                                                                                heart.classList.add("heart");

                                                                                                    heart.style.left = Math.random() * 100 + "vw";
                                                                                                        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
                                                                                                            heart.style.fontSize = (Math.random() * 20 + 20) + "px";

                                                                                                                document.body.appendChild(heart);

                                                                                                                    setTimeout(() => {
                                                                                                                            heart.remove();
                                                                                                                                }, 6000);
                                                                                                                                }

                                                                                                                                setInterval(createHeart, 300);