// Fungsi untuk scroll ke bagian produk
function scrollToProduk() {
  document.getElementById("produk").scrollIntoView({
    behavior: "smooth",
  });
}

// Fungsi untuk menampilkan notifikasi
function tampilkanPesan(namaProduk) {
  const notification = document.getElementById("notification");
  notification.textContent = `Terima kasih! Anda telah memesan ${namaProduk}`;
  notification.classList.add("show");

  // Sembunyikan notifikasi setelah 3 detik
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// Fungsi untuk toggle menu mobile
function toggleMenu() {
  const nav = document.querySelector("nav");
  const menuToggle = document.getElementById("menuToggle");

  nav.classList.toggle("active");
  menuToggle.classList.toggle("active");
}

// Event listener untuk menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // Smooth scroll untuk semua link anchor
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Tutup menu mobile jika terbuka
        const nav = document.querySelector("nav");
        const menuToggle = document.getElementById("menuToggle");
        if (nav && nav.classList.contains("active")) {
          nav.classList.remove("active");
          menuToggle.classList.remove("active");
        }
      }
    });
  });

  // Animasi saat scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeInUp 0.8s ease forwards`;
      }
    });
  }, observerOptions);

  // Observe semua section
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});

// Fungsi untuk menangani resize window
window.addEventListener("resize", function () {
  const nav = document.querySelector("nav");
  const menuToggle = document.getElementById("menuToggle");

  // Jika lebar window lebih dari 600px, pastikan menu tidak dalam mode mobile
  if (window.innerWidth > 600) {
    if (nav) nav.classList.remove("active");
    if (menuToggle) menuToggle.classList.remove("active");
  }
});
