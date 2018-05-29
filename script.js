function getRand(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

m.mount(window.mount, {
  view : (vnode) => [
        m("div.edit",
            m("a", { href : "https://github.com/tanishalfelven/restaurant-dicer" }, "Add more options!")
        ),
        m("div", 
            m("button", {onclick : () => { 
            vnode.state.on = !vnode.state.on;
            if (vnode.state.on) m.redraw(true);
            }}, vnode.state.on ? "Reset" : "Dice me a restaurant!"),
            m("div.outer",
                m("div.inner" + (vnode.state.on ? ".slide" : ".noslide"),
                    shuffle(restaurants).map((r) =>
                        m("div.item", { style: {fontFamily: getRand(fonts)} }, r)
                    )
                )
            )
        )
    ]
})
