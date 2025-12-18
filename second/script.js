document.addEventListener("DOMContentLoaded", () => {

    const filters = document.querySelectorAll(".filter");
    const rows = document.querySelectorAll("#table tr");

    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const status = btn.dataset.status;
            rows.forEach(row => {
                const rowStatus = row.querySelector(".status").textContent;
                row.style.display =
                    status === "all" || rowStatus === status
                        ? ""
                        : "none";
            });
        });
    });

    document.getElementById("search").addEventListener("input", e => {
        const value = e.target.value.toLowerCase();
        rows.forEach(row => {
            row.style.display =
                row.textContent.toLowerCase().includes(value)
                    ? ""
                    : "none";
        });
    });

});
