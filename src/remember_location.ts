const loadLocation = () => {
    const location = localStorage.getItem("workLocation");
    if (location) {
        const locationButton = document.getElementById(location);
        if (locationButton instanceof HTMLInputElement) {
            locationButton.checked = true;
        }
    }
}

// @ts-ignore
const saveLocation = (locationNumber) => {
    localStorage.setItem("workLocation", locationNumber);
}

const init = () => {
    loadLocation();
    document.getElementsByName("workLocation").forEach(element => {
        element.addEventListener("change", (ev) => {
            if (ev.target instanceof HTMLInputElement) {
                saveLocation(ev.target.id);
            }
        })
    });
};

// body要素に対するMutationObserverを作成します
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            for (const node of mutation.addedNodes) {
                if (node instanceof HTMLInputElement && node.id === "workLocationButton1") {
                    init();
                    break;
                }
            };
        }
    });
});

// body要素に対する監視を開始します
observer.observe(document.body, { childList: true, subtree: true });
