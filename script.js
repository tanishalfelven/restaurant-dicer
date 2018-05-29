const rest = [
    "Kizuki",
    "Square Lotus/Thai",
    "Southgate Garden",
    "Lot No. 3",
    "Ricardos",
    "Ooba Tooba",
    "Taco Time",
    "Chipotle",
    "Topgun Seafood",
    "Dim-Sum Factory",
    "Mod Pizza",
    "Jinya Ramen",
    "Palace BBQ",
    "Teriyaki & More"
];
fonts = [
    "Georgia",
    "serif",
    "Palatino Linotype",
    "Book Antiqua",
    "Palatino",
    "Times New Roman",
    "Times",
    "Arial",
    "Helvetica",
    "sans-serif",
    "Arial Black",
    "Gadget",
    "Comic Sans MS",
    "cursive",
    "Impact",
    "Charcoal",
    "Lucida Sans Unicode",
    "Lucida Grande",
    "Tahoma",
    "Geneva",
    "Trebuchet MS",
    "Helvetica",
    "Verdana"
];

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
    m("button", {onclick : () => { 
      vnode.state.on = !vnode.state.on;
      if (vnode.state.on) m.redraw(true);
    }}, vnode.state.on ? "Reset" : "Dice me a restaurant!"),
    m("div.outer",
        m("div.inner" + (vnode.state.on ? ".slide" : ".noslide"),
            shuffle(rest).map((r) =>
                m("div.item", { style: {fontFamily: getRand(fonts)} }, r)
            )
        )
    )]
})