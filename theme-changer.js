document.addEventListener("DOMContentLoaded", function () {
    const themes = {
        default: { image: "url('./img/IMG_1.png')", color: "#ff5733" },
        تزئین1: { image: "url('./img/decoration_1.png')", color: "#007bff" },
		تزئین2: { image: "url('./img/decoration_2.png')", color: "#28a745" },
		تزئین3: { image: "url('./img/decoration_3.png')", color: "#ffc107" },
		تزئین4: { image: "url('./img/decoration_4.png')", color: "#17a2b8" },
		تزئین5: { image: "url('./img/decoration_5.png')", color: "#6f42c1" },
		تزئین6: { image: "url('./img/decoration_6.png')", color: "#e83e8c" },
		تزئین7: { image: "url('./img/decoration_7.png')", color: "#fd7e14" },
		تزئین8: { image: "url('./img/decoration_8.png')", color: "#343a40" },
		تزئین9: { image: "url('./img/decoration_9.png')", color: "#f8f9fa" },
		تزئین10: { image: "url('./img/decoration_10.png')", color: "#20c997" },
		تزئین11: { image: "url('./img/decoration_11.png')", color: "#dc3545" },
    };
	
	// افزودن دکمه و عنوان
	const container = document.createElement("span");
	container.classList.add("container");
	const themeInfo = document.createElement("span");
	themeInfo.classList.add("theme-info");
	const themeCircle = document.createElement("span");
	themeCircle.classList.add("theme-circle");
	themeCircle.style.backgroundColor = themes.default.color;
	const themeTitle = document.createElement("span");
	themeTitle.classList.add("theme-title");
	themeInfo.appendChild(themeCircle);
	themeInfo.appendChild(themeTitle);
	container.appendChild(themeInfo);
	document.body.appendChild(container);

    // افزودن منوی تغییر تم
    const themeChanger = document.createElement("select");
    themeChanger.id = "theme-changer";

    for (const theme in themes) {
        const option = document.createElement("option");
        option.value = theme;
        option.textContent = theme === "default" ? "پیش فرض" : theme.charAt(0).toUpperCase() + theme.slice(1);
        themeChanger.appendChild(option);
    }

    container.appendChild(themeChanger);

    // تغییر تم بر اساس انتخاب کاربر
    themeChanger.addEventListener("change", function () {
        const selectedTheme = themeChanger.value;
		document.body.style.backgroundImage = themes[selectedTheme].image;
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center";
		themeCircle.style.backgroundColor = themes[selectedTheme].color;
	// تنظیم شفافیت برای سایر المان ها
		
		const elements = document.querySelectorAll('div, h1, h2, h3, h4, h5, h6, select, img, source');
		elements.forEach(element => {
			element.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
			element.style.borderRadius = '5px';
			element.style.padding = '10px';
			element.style.backdropFilter = '1px';
			element.style.color = "#333";
		});
    });
});