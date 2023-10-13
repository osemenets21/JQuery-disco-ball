let r1, g1, b1, r, g, b, r2, g2, b2, widthNew, heightNew, topNew, leftNew;
setInterval(function () {
  $(".circle").each(function (index, element) {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    r1 = Math.round(Math.random() * 255);
    g1 = Math.round(Math.random() * 255);
    b1 = Math.round(Math.random() * 255);
    r2 = Math.round(Math.random() * 255);
    g2 = Math.round(Math.random() * 255);
    b2 = Math.round(Math.random() * 255);
    widthNew = 20 + Math.round(Math.random() * 100);
    heightNew = 20 + Math.round(Math.random() * 100);
    topNew = Math.round(Math.random() * 500);
    leftNew = Math.round(Math.random() * 1000);

    let colorOfBack = `rgb(${r},${g},${b})`;
    let colorOfShadow = `rgb(${r2},${g2},${b2}, 0.467)`;

    $(this).css("background", colorOfBack);
    $(this).css("border-color", `rgb(${r1},${g1},${b1})`);
    $(this).css("box-shadow", `0 0 28px 11px ${colorOfShadow}`);

    $(this).animate({
        width: `${widthNew}px`,
        height: `${heightNew}px`,

        top: `${topNew}px`,
        left: `${leftNew}px`,
    }, "easeInOutSine")
  });
}, 500);

$(window).trigger("setInterval");
